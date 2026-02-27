const mathjaxScript = document.getElementById("mathjax-render");
if (mathjaxScript) {
  mathjaxScript.addEventListener("load", () => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise([document.body]);
    }
  });
}
