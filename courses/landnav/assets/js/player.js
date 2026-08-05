// ⚠ 本檔是 src/web/js/player.js 的課程層覆寫(build.py:196「course/assets 可覆寫同名檔」)。
//
// 為什麼要 fork:這門課 207 支影片中英混合,測距、夜間導航、寫景圖、call for fire
// 幾個主題中文幾乎是空的,只能用英文影片。框架的嵌入網址沒帶字幕參數,播放器
// 預設不開字幕,學員每支都要手動齒輪→字幕→自動翻譯→中文(繁體)。
// 中文影片加了這些參數也不會變差,播放器會直接選它自己的中文字幕軌。
//
// 與上游的差異有兩處:
// (1) play() 尾端追加「自動開啟繁中字幕」的 IFrame API bootstrap(見該段註解)
// (2) iframe 網址多了三個參數
//   cc_load_policy=1      強制開啟字幕
//   cc_lang_pref=zh-Hant  字幕語言偏好設為繁體中文
//   hl=zh-TW              播放器介面語言設為繁中
//
// fork 自 upstream commit 0c327f7(2026-08-03)
// 上游原檔 sha256: 85bbd2a45e9559b00a7b0f4e55af10969d42ea27a7e6d7d9ee077030a59bea56
// 之後 git pull 框架時,若上游 player.js 的雜湊變了,要把差異併回這一份。
// 對帳指令:shasum -a 256 src/web/js/player.js
//
// 姊妹課程 atak-course 有一份一模一樣的覆寫,同步時兩邊都要改。

// player.js — 上課模式：把整門課攤平成播放清單，左側嵌入播放
import { icon } from "./icons.js";
import { esc, KIND, UI, t } from "./render.js";
import { plain, rich } from "./copy.js";
import { button as discussButton, panel as discussPanel } from "./discuss.js";

const $ = (s, r = document) => r.querySelector(s);

const EMBED = "https://www.youtube-nocookie.com/embed/";
let LANG = {};
export function setLanguages(m) { LANG = m || {}; }

/** 語言標籤來自設定檔（走文案契約），對不到就退回資料裡的語言碼 */
const langLabel = (l) => (LANG[l] ? rich(LANG[l]) : esc(l));

/** 把 course.json 攤平成一維播放清單 */
export function buildPlaylist(course) {
  const items = [];
  for (const ch of course.chapters) {
    for (const u of ch.units) {
      const base = {
        chCode: ch.code,
        chTitle: ch.title,
        unitId: u.id,
        unitName: u.name,
      };
      for (const les of u.lessons || (u.lesson ? [u.lesson] : [])) {
        if (!les?.url) continue;
        items.push({
          ...base,
          kind: "lesson",
          lang: les.lang,
          name: les.title,
          title: les.title,
          channel: les.channel,
          duration: les.duration,
          views: les.views,
          url: les.url,
          why: les.why,
          assessment: u.assessment,
        });
      }
      for (const d of u.drills || []) {
        if (!d.url) continue;
        items.push({
          ...base,
          kind: d.kind,
          name: d.name,
          en: d.en,
          title: d.title,
          channel: d.channel,
          duration: d.duration,
          views: d.views,
          url: d.url,
          target: d.target,
          dose: d.dose,
          facets: d.facets,
          cat: d.cat,
        });
      }
    }
  }
  return items.map((it, i) => ({ ...it, i, vid: videoId(it.url) }));
}

function videoId(url) {
  const m = /(?:v=|youtu\.be\/)([\w-]{11})/.exec(url || "");
  return m ? m[1] : null;
}

function dur(s) {
  return s || "";
}

/* --- 播放清單渲染 -------------------------------------------------------- */

export function renderPlaylist(items, { doneSet, currentIndex, query, onlyTodo, canPlay }) {
  const allowed = canPlay || (() => true);
  const q = (query || "").trim().toLowerCase();
  let lastCh = null;
  let lastUnit = null;
  let shown = 0;
  const html = [];

  for (const it of items) {
    if (onlyTodo && doneSet.has(it.unitId)) continue;
    if (q) {
      const hay = `${it.name} ${it.title || ""} ${it.channel || ""} ${it.unitName} ${it.chTitle} ${(it.facets || []).join(" ")} ${it.target || ""}`;
      if (!hay.toLowerCase().includes(q)) continue;
    }

    if (it.chCode !== lastCh) {
      html.push(`<div class="PlaylistChapter">${esc(it.chCode)} ${esc(it.chTitle)}</div>`);
      lastCh = it.chCode;
      lastUnit = null;
    }
    if (it.unitId !== lastUnit) {
      html.push(`<div class="PlaylistUnit">${esc(it.unitName)}</div>`);
      lastUnit = it.unitId;
    }

    const k = it.kind === "lesson" ? null : KIND[it.kind];
    const locked = !allowed(it);
    html.push(`
      <button class="PlaylistItem${it.i === currentIndex ? " is-playing" : ""}${doneSet.has(it.unitId) ? " is-done" : ""}${locked ? " is-locked" : ""}"
              type="button" data-play="${it.i}"${locked ? ' data-locked="1"' : ""}>
        <span class="PlaylistItem__dot" style="background:var(--fgColor-${esc(it.kind === "lesson" ? "accent" : (KIND[it.kind] || {}).tone || "accent")})"></span>
        <span class="PlaylistItem__main">
          <span class="PlaylistItem__name">${it.kind === "lesson" ? `${rich(UI.lessonLabel || "")} · ` : ""}${esc(it.name)}</span>
          <span class="PlaylistItem__meta">${k ? rich(k.label) + " · " : ""}${it.lang ? langLabel(it.lang) + " · " : ""}${esc(it.channel || "")}</span>
        </span>
        <span class="PlaylistItem__dur">${locked ? icon("lock", 12) : esc(dur(it.duration))}</span>
      </button>`);
    shown++;
  }

  $("#playlist").innerHTML =
    html.join("") ||
    `<div class="Blankslate">${icon("inbox", 28)}<p class="Blankslate__heading">${rich(t("noMatch", "沒有符合的影片"))}</p></div>`;
  $("#playlistCount").textContent =
    shown === items.length
      ? `${items.length} ${t("videoUnit", "支影片")}`
      : `${shown} / ${items.length}`;
  return shown;
}

/* --- 播放 ---------------------------------------------------------------- */

export function play(item, { total }) {
  if (!item?.vid) return;

  $("#playerFrame").innerHTML = `
    <iframe id="ytFrame" src="${EMBED}${esc(item.vid)}?rel=0&modestbranding=1&autoplay=1&enablejsapi=1&cc_load_policy=1&cc_lang_pref=zh-Hant&hl=zh-TW&origin=${encodeURIComponent(location.origin)}"
            title="${esc(item.title || item.name)}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>`;

  // ── 課程層追加:自動開啟繁中字幕(自動翻譯) ──────────────────────────
  // cc_lang_pref 只能在「已存在的字幕軌」之間挑語言;這些影片多半只有
  // 自動產生的英文字幕,繁中要靠播放器的「自動翻譯」,那只有 IFrame API
  // 的 setOption 才叫得動。做法:先開英文軌(CC on),再把翻譯語言設成
  // zh-Hant。影片沒有英文軌時(例如中文影片)指令靜默失敗,行為同現況。
  // 模組載入時機不定,固定重打幾次,指令冪等。
  {
    const yt = $("#playerFrame iframe");
    const post = (func, args = []) =>
      yt?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "https://www.youtube-nocookie.com",
      );
    const kick = () => {
      post("loadModule", ["captions"]);
      post("setOption", ["captions", "track", { languageCode: "en" }]);
      post("setOption", ["captions", "translationLanguage", { languageCode: "zh-Hant" }]);
    };
    yt?.addEventListener("load", () =>
      [600, 1800, 3600, 6500].forEach((ms) => setTimeout(kick, ms)),
    );
  }

  const k = item.kind === "lesson" ? null : KIND[item.kind];
  const badge = k
    ? `<span class="Label Label--${esc(k.tone || "neutral")}">${rich(k.label)}</span>`
    : `<span class="Label Label--accent">${rich(UI.lessonLabel || "")}</span>`;

  $("#playerInfo").innerHTML = `
    <div class="Player__bar">
      <div class="Player__barMain">
        <h2 class="Player__title">${esc(item.name)}</h2>
        <div class="Player__sub">
          <span>${esc(item.chCode)} ${esc(item.chTitle)}</span>
          <span>›</span>
          <a href="#${esc(item.unitId)}" data-goto-unit="${esc(item.unitId)}">${esc(item.unitName)}</a>
          <span>· ${item.i + 1} / ${total}</span>
          ${badge}
          ${item.lang ? `<span class="Label Label--neutral">${langLabel(item.lang)}</span>` : ""}
          <span>${esc(item.channel || "")}</span>
          ${item.duration ? `<span>· ${esc(item.duration)}</span>` : ""}
          ${item.dose ? `<span class="Drill__dose">${esc(item.dose)}</span>` : ""}
        </div>
      </div>
      <div class="Player__actions">
        <button class="btn" data-step="-1" type="button">${icon("chevron-left", 14)} <span class="Player__btnText">${rich(UI.prevLabel || "")}</span></button>
        <button class="btn" data-step="1" type="button"><span class="Player__btnText">${rich(UI.nextLabel || "")}</span> ${icon("chevron-right", 14)}</button>
        <button class="btn" data-mark-unit="${esc(item.unitId)}" type="button">${icon("check", 14)} ${rich(UI.doneLabel || "")}</button>
        <button class="btn btn-icon" data-toggle-list type="button" title="${plain(t("listToggle", "收起／顯示清單"))}">${icon("layers", 16)}<span class="visually-hidden" data-list-label>${rich(t("listHide", "收起清單"))}</span></button>
        ${discussButton()}
        <a class="btn btn-icon" href="${esc(item.url)}" target="_blank" rel="noopener" title="${plain(UI.openExternal || "")}">${icon("external-link", 16)}</a>
      </div>
    </div>
    ${
      item.why || item.assessment
        ? `<details class="Player__more">
             <summary>${rich(UI.moreLabel || "")}</summary>
             ${item.why ? `<p class="Player__note">${esc(item.why)}</p>` : ""}
             ${item.assessment ? `<p class="Player__note"><strong>${rich(t("assessLabel", "怎麼自己評估"))}　</strong>${esc(item.assessment)}</p>` : ""}
           </details>`
        : ""
    }
    ${discussPanel()}`;

  fitFrame();
}

/** 依實際可用高度算出影片寬度，讓它吃滿又不變形。
 *  純 CSS 同時給 max-width + max-height 會讓 aspect-ratio 失效，所以這裡用量的。 */
export function fitFrame() {
  const stage = $(".Player__stage");
  const frame = $(".Player__frame");
  const info = $("#playerInfo");
  if (!stage || !frame) return;

  // 用 scrollHeight：資訊區要完整放得下，影片才拿剩下的空間
  const infoH = info ? Math.max(info.offsetHeight, info.scrollHeight) : 0;
  const avail = stage.clientHeight - infoH - 12;
  if (avail <= 0) return;
  const byHeight = avail * (16 / 9);
  frame.style.setProperty("--frame-w", `${Math.floor(Math.min(stage.clientWidth, byHeight))}px`);
}

/** 視窗大小改變或資訊區內容變動時重算 */
export function watchFrame() {
  const stage = $(".Player__stage");
  if (!stage || typeof ResizeObserver === "undefined") return;
  const ro = new ResizeObserver(() => fitFrame());
  ro.observe(stage);
  const info = $("#playerInfo");
  if (info) ro.observe(info);
  addEventListener("resize", fitFrame);
}

export function stop() {
  const f = $("#playerFrame iframe");
  if (f) f.remove();
}

/* --- 播放清單寬度可拖曳 --------------------------------------------------- */

const MIN_W = 260;

/** 讓使用者拖動分隔條調整右側清單寬度；回傳目前寬度供外部保存 */
export function initResizer(initial, onChange) {
  const player = $(".Player");
  const grip = $("#playerResizer");
  if (!player || !grip) return;

  const clamp = (w) => Math.max(MIN_W, Math.min(w, Math.round(player.clientWidth * 0.6)));
  const apply = (w) => {
    player.style.setProperty("--playlist-w", `${clamp(w)}px`);
    fitFrame();
  };

  if (initial) apply(initial);

  grip.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    grip.setPointerCapture(e.pointerId);
    grip.classList.add("is-dragging");
    document.body.classList.add("is-resizing");

    const move = (ev) => apply(player.getBoundingClientRect().right - ev.clientX - 16);
    const up = () => {
      grip.classList.remove("is-dragging");
      document.body.classList.remove("is-resizing");
      grip.removeEventListener("pointermove", move);
      grip.removeEventListener("pointerup", up);
      const w = parseInt(player.style.getPropertyValue("--playlist-w"), 10);
      if (w) onChange?.(w);
    };
    grip.addEventListener("pointermove", move);
    grip.addEventListener("pointerup", up);
  });

  // 鍵盤也能調，方向鍵每次 24px
  grip.addEventListener("keydown", (e) => {
    const step = e.key === "ArrowLeft" ? 24 : e.key === "ArrowRight" ? -24 : 0;
    if (!step) return;
    e.preventDefault();
    const cur = parseInt(getComputedStyle(player).getPropertyValue("--playlist-w"), 10) || 380;
    apply(cur + step);
    onChange?.(clamp(cur + step));
  });
}
