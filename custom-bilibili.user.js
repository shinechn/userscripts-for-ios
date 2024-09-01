// ==UserScript==
// @name [Bilibili] 去他妈的评论区
// @description 移除网页版哔哩哔哩的评论区
// @author CKylinMC
// @namespace ckylin-style-deletefuckingcomments
// @version 1.0.1
// @license WTFPL
// @grant GM_addStyle
// @run-at document-start
// @match *://www.bilibili.com/*

// ==/UserScript==

(function () {
  let css = `
  #right-bottom-banner,
  .ad-report,
  .ad-floor-cover,
  .vip-wrap,
  .left-entry,
  .header-avatar-wrap.v-popover-wrap,
  .right-entry--message.right-entry__outside.v-popover-wrap > .right-entry__outside,
  li.v-popover-wrap:nth-of-type(3),
  li.right-entry-item:nth-of-type(6),
  .video-toolbar-left-item.video-share-wrap,
  .bpx-player-video-info,
  .recommend-list-v1,
  .part-1.pop-live-small-mode,
  .slide-ad-exp,
  .part-1.pop-live-small-mode,
  .recommend_wrap__PccwM,
  .paybar_container__WApBR,
  #comment,
  .comment-m,
  .bb-comment,
  .forw-area
  {
      display:none!important;
  }

  `;
  if (typeof GM_addStyle !== "undefined") {
    GM_addStyle(css);
  } else {
    let styleNode = document.createElement("style");
    styleNode.appendChild(document.createTextNode(css));
    (document.querySelector("head") || document.documentElement).appendChild(styleNode);
  }
})();
