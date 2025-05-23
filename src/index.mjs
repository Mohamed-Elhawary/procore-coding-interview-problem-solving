import "./styles.css";
// index.mjs

import hljs from "highlight.js/lib/core";
// Import just the languages you need for a smaller bundle:
import javascript from "highlight.js/lib/languages/javascript";
// Import your preferred theme:
import "highlight.js/styles/github-dark.css";

// Register the language(s)
hljs.registerLanguage("javascript", javascript);

// Highlight all code blocks
document.addEventListener("DOMContentLoaded", () => {
  hljs.highlightAll();
});
