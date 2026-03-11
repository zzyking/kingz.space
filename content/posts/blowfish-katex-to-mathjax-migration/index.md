---
title: "Blowfish KaTeX to MathJax Migration"
date: 2026-02-27T09:00:00+08:00
draft: false
description: "A complete migration guide for switching a Hugo Blowfish site from KaTeX to MathJax with backward compatibility."
tags: ["hugo", "blowfish", "latex"]
---

{{< mathjax >}}

This post is a practical engineering guide for migrating **Blowfish** from the default **KaTeX rendering path** to **MathJax**, while keeping legacy content compatible.

## Goals

1. New posts can use `{{</* mathjax */>}}`.
2. Existing posts using `{{</* katex */>}}` continue to work.
3. Formula delimiters `$$...$$`, `\[...\]`, and `\(...\)` render consistently.
4. Environments like `aligned/matrix/array/bmatrix` remain stable.

## Step 1: Add Marker Shortcodes

Create these files in your project root:

```text
layouts/shortcodes/mathjax.html
layouts/shortcodes/katex.html
```

They can be empty markers.

## Step 2: Update Math Resource Injection Logic

Edit:

- `themes/blowfish/layouts/partials/vendor.html`

Change the condition to:

```go-html-template
{{ if or (.Page.HasShortcode "mathjax") (.Page.HasShortcode "katex") }}
```

Then inject MathJax (example):

```html
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true,
      tags: 'ams',
      packages: {'[+]': ['ams', 'noerrors', 'noundefined']}
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option']
    },
    startup: {
      typeset: false
    }
  };
</script>
<script defer id="mathjax-render" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

## Step 3: Trigger `typeset` in the Main JS Bundle

Create:

- `themes/blowfish/assets/js/math-render.js`

```js
const mathjaxScript = document.getElementById("mathjax-render");
if (mathjaxScript) {
  mathjaxScript.addEventListener("load", () => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise([document.body]);
    }
  });
}
```

Then include `js/math-render.js` in your main bundle list in:

- `themes/blowfish/layouts/partials/head.html`

## Step 4: Unify Content Shortcodes (Recommended)

Batch-replace post headers from:

```text
{{</* katex */>}}
```

to:

```text
{{</* mathjax */>}}
```

This makes intent clearer and reduces maintenance confusion.

## Step 5: Enable Goldmark Passthrough (Strongly Recommended)

Without this, Markdown may still mutate formula content before MathJax runs.

Edit:

- `config/_default/markup.toml`

```toml
[goldmark.extensions.passthrough]
  enable = true

[goldmark.extensions.passthrough.delimiters]
  block = [['\\[', '\\]'], ['$$', '$$']]
  inline = [['\\(', '\\)']]
```

## Validation Checklist

1. Build passes: `hugo --quiet`
2. Generated page source contains:
   1. `window.MathJax = ...`
   2. `id="mathjax-render"`
3. Pages with `aligned/matrix/array` render correctly.

## Common Mistakes

1. Switching renderers but not enabling passthrough.
2. Embedding large TeX environments in complex HTML blocks.
3. Keeping mixed shortcode semantics without a migration convention.

## Conclusion

In Hugo + Blowfish, switching to MathJax is not just changing one script URL.

A stable migration requires this minimum loop to be complete:

1. Consistent shortcode trigger strategy
2. Correct resource injection and typeset timing
3. Goldmark passthrough enabled

When all three are in place, math rendering becomes reliably stable.
