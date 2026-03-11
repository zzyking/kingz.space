---
title: "Fix Hugo MathJax Rendering with Goldmark Passthrough"
date: 2026-02-27T21:00:00+08:00
draft: false
description: "A practical fix for Hugo + MathJax rendering issues in multi-line formulas and matrix environments using Goldmark Passthrough."
tags: ["hugo", "latex"]
---

{{< mathjax >}}

While organizing math-heavy posts, I ran into a recurring issue:

1. LaTeX environments like `aligned`, `matrix`, and `array` were sometimes rendered as a single line.
2. Characters like `_` and `*` inside formulas were interpreted as Markdown syntax, breaking the formula.
3. The same formula looked fine in local editors (for example, Obsidian) but failed on Hugo pages.

This post documents the reusable fix.

## Root Cause

The issue is not purely a MathJax problem. It is mostly a pipeline problem:

1. Markdown is parsed by Hugo Goldmark first.
2. The output is then handed to MathJax.

If Goldmark parses content inside math delimiters too early, the formula is modified before MathJax sees it. For example, `_` may be treated as Markdown emphasis syntax, which corrupts LaTeX structure.

## Key Fix: Enable Goldmark Passthrough

Enable passthrough in Hugo so that content inside `$$...$$`, `\[...\]`, and `\(...\)` is preserved and passed to MathJax unchanged.

Update `config/_default/markup.toml`:

```toml
[goldmark.extensions.passthrough]
  enable = true

[goldmark.extensions.passthrough.delimiters]
  block = [['\[', '\]'], ['$$', '$$']]
  inline = [['\(', '\)']]
```

This is the most important part of the fix.

## Recommended MathJax Configuration

If your site has already switched to MathJax, include at least:

```js
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',
    packages: {'[+]': ['ams', 'noerrors', 'noundefined']}
  }
};
```

`processEnvironments: true` is especially important for environments like `aligned`, `matrix`, and `array`.

For a full Blowfish migration guide (KaTeX -> MathJax), see: [Blowfish KaTeX to MathJax Migration: Complete Steps](/posts/blowfish-katex-to-mathjax-migration/).

## Writing Rules to Avoid Future Breakage

For long-term stability, use these conventions:

1. Put multi-line and matrix formulas in `$$ ... $$` blocks.
2. Use `\(...\)` consistently for inline math.
3. Avoid placing complex TeX environments inside HTML-heavy containers.
4. Avoid ad-hoc escaping hacks when possible; keep formulas portable and close to native LaTeX.

## Examples

An `aligned` example:

$$
\begin{aligned}
\sigma_p^2 &= VAR[P] \\
&= VAR[\omega_1 S_1 + \omega_2 S_2] \\
&= \omega_1^2 \sigma_1^2 + \omega_2^2 \sigma_2^2 + 2\rho_{12}\omega_1\omega_2\sigma_1\sigma_2
\end{aligned}
$$

A matrix example:

$$
\Sigma = \left[
\begin{matrix}
VAR(X_1) & COV(X_1, X_2) & \cdots & COV(X_1, X_N) \\
COV(X_2, X_1) & VAR(X_2) & \cdots & COV(X_2, X_N) \\
\vdots & \vdots & \ddots & \vdots \\
COV(X_N, X_1) & COV(X_N, X_2) & \cdots & VAR(X_N)
\end{matrix}
\right]
$$

## Conclusion

If you see symptoms like broken formulas, flattened matrix layout, or missing subscripts in Hugo, check Goldmark passthrough first.

Many "MathJax rendering bugs" are actually caused by Markdown preprocessing before MathJax runs.
