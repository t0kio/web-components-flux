---
name: "page"
description: "page componetsの作成を行う"
message: "Please enter any text."
root: "."
output: "./src/"
ignore: []
---

# `{{ input }}/{{ input }}.ts`

```typescript
import { html, render } from "lit-html";
import { styleMap } from "lit-html/directives/style-map";

export class HomePage extends HTMLElement {
  constructor() {
    super();
    render(this.render(), this.attachShadow({ mode: "open" }));
  }

  static get is() {
    return "write page name here";
  }

  get styles() {
    return {
      title: {
        color: "pink",
      },
    };
  }

  render() {
    return html` <div style=${styleMap(this.styles.title)}>{{ input }}</div> `;
  }
}
```

# `{{ input }}/index.ts`

```typescript
export * from "./{{ input }}";
```
