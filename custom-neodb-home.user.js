// ==UserScript==
// @name         Custom CSS Injector
// @namespace    http://tampermonkey.net/
// @version      2024-07-25
// @description  Inject custom CSS into a webpage
// @author       You
// @match        https://neodb.social/discover/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neodb.social
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // Define your custom CSS here
  const customCSS = `
      .grid__main {
          display: none !important;
      }

      .grid__aside {
          display: block;
          width: 800px !important;
          margin: 0 auto !important;
      }

      main {
          display: flex !important;
          justify-content: center !important;
      }

  section .post {
    padding: 20px;
    background-color: #FFF8F3;
    border: 1px solid #A3B6CF;
    border-bottom:none;
    margin: 0 !important;
    font-size: calc(1em * 1.2);
  }
  `;

  // Create a <style> element
  const style = document.createElement('style');
  style.textContent = customCSS;

  // Append the <style> element to the <head> of the document
  document.head.appendChild(style);
})();
