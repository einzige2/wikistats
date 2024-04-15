export class GraphColumn extends HTMLElement {
  static observedAttributes = ["data-height", "data-label"];
  static CLASS_NAME = "graph-column";
  
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Graph column added to page");

    const shadow = this.attachShadow({mode: "open"});

    const style = document.createElement("style");
    style.textContent = `
      .container {
        display: flex;
        flex-direction: column-reverse;
        width: content-fit;
        height: 100%;
        padding: 0 0.5rem;
      }

      .column-container {
        display: block;
        margin: 0 auto;
        width: 2rem;
        display: flex;
        flex-direction: column-reverse;
        flex-grow: 1;
        height: 50%;
      }
    
      .column {
        height: ${this.getAttribute("data-height")};
        background-color: #880000;
        transition: height 250ms;
      }

      .column-label {
        border-top: 1px solid black;
        text-align: center;
        margin: 0.25rem 0;
      }
    `;

    const container = document.createElement("div");
    container.classList = ["container"];

    const columnContainer = document.createElement("div");
    columnContainer.classList = ["column-container"];

    const columnLabel = document.createElement("p");
    columnLabel.classList = ["column-label"];
    columnLabel.textContent = this.getAttribute("data-label");

    const column = document.createElement("div");
    column.classList = ["column"];

    
    columnContainer.appendChild(column);

    container.appendChild(columnLabel);
    container.appendChild(columnContainer);

    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}
