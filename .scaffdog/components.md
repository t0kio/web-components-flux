---
name: "components"
description: "components of description"
message: "Please enter any text."
root: "."
output: "./src/"
ignore: []
---

# `{{ input }}/{{ input }}.ts`

```typescript
import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

export class Example extends HTMLElement {
  constructor() {
    super();
    render(this.render(), this.attachShadow({ mode: "open" }));
  }

  static get is() {
    return "example-tag";
  }

  get styles() {
    return {
      title: {
        color: "pink",
      },
    };
  }

  render() {
    return html`
      <div style=${styleMap(this.styles.title)}>example componets</div>
    `;
  }
}

customElements.define(Example.is, Example);
```

# `{{ input }}/index.ts`

```typescript
export * from "./{{ input }}";
```
