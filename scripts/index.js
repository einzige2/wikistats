import { GraphColumn } from "./graphColumn.js";
// Get today's featured content from English Wikipedia

customElements.define(GraphColumn.CLASS_NAME, GraphColumn);

const getFeaturedContent = async () => {
  
}

// TESTING

const testColumnAnim = () => {
  const testColumn = document.getElementById("graph-column");
  const columnFill = testColumn.firstElementChild;
  columnFill.style.height = "100%";
}

const testButton = document.getElementById("testbutton");

if (testButton) {
  testButton.onclick = (_ev) => testColumnAnim();
}
