const sitePreference=document.documentElement.getAttribute("data-default-appearance"),userPreference=localStorage.getItem("appearance");(sitePreference==="dark"&&userPreference===null||userPreference==="dark")&&document.documentElement.classList.add("dark"),document.documentElement.getAttribute("data-auto-appearance")==="true"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&userPreference!=="light"&&document.documentElement.classList.add("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e.matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")})),window.addEventListener("DOMContentLoaded",e=>{const t=document.getElementById("appearance-switcher"),n=document.getElementById("appearance-switcher-mobile");updateMeta(),this.updateLogo?.(getTargetAppearance()),t&&(t.addEventListener("click",()=>{document.documentElement.classList.toggle("dark");var e=getTargetAppearance();localStorage.setItem("appearance",e),updateMeta(),this.updateLogo?.(e)}),t.addEventListener("contextmenu",e=>{e.preventDefault(),localStorage.removeItem("appearance")})),n&&(n.addEventListener("click",()=>{document.documentElement.classList.toggle("dark");var e=getTargetAppearance();localStorage.setItem("appearance",e),updateMeta(),this.updateLogo?.(e)}),n.addEventListener("contextmenu",e=>{e.preventDefault(),localStorage.removeItem("appearance")}))});var updateMeta=()=>{var e=document.querySelector("body"),t=getComputedStyle(e);document.querySelector('meta[name="theme-color"]').setAttribute("content",t.backgroundColor)},updateLogo=e=>{var t=document.querySelectorAll("img.logo"),n=document.querySelectorAll("span.logo");targetLogoPath=e=="dark"?"/icons/logo.svg":"/icons/logo.svg";for(const e of t)e.setAttribute("src",targetLogoPath);targetContent=e=="dark"?`<svg width="508" height="508" viewBox="-200 -200 908 908" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_0_1)">
<path d="M164 14H344C372.184 14 392.661 14.0088 408.784 15.3262C424.279 16.5922 434.842 19.0146 443.566 23.2812L444.405 23.7002C460.89 32.0996 474.34 45.4245 482.896 61.8125L483.3 62.5947C487.828 71.4811 490.367 82.2209 491.674 98.2158C492.991 114.339 493 134.816 493 163V343C493 371.184 492.991 391.661 491.674 407.784C490.408 423.279 487.985 433.842 483.718 442.566L483.3 443.405C474.9 459.89 461.576 473.34 445.188 481.896L444.405 482.3C435.519 486.828 424.779 489.367 408.784 490.674C392.661 491.991 372.184 492 344 492H164C135.816 492 115.339 491.991 99.2158 490.674C83.7207 489.408 73.1578 486.985 64.4336 482.718L63.5947 482.3C47.1099 473.9 33.6598 460.576 25.1045 444.188L24.7002 443.405C20.1723 434.519 17.633 423.779 16.3262 407.784C15.0088 391.661 15 371.184 15 343V163C15 134.816 15.0088 114.339 16.3262 98.2158C17.5922 82.721 20.0146 72.1577 24.2812 63.4336L24.7002 62.5947C33.0996 46.1099 46.4245 32.6598 62.8125 24.1045L63.5947 23.7002C72.4811 19.1723 83.2209 16.633 99.2158 15.3262C115.339 14.0088 135.816 14 164 14Z" stroke="#21FBFF" stroke-width="22"/>
</g>
<g filter="url(#filter1_dd_0_1)">
<path d="M335.872 59.1442C363.205 59.1868 382.944 59.229 397.847 60.6194C412.334 61.9712 420.556 64.4906 425.986 68.2262L426.503 68.5914C437.531 76.5994 444.718 88.832 446.356 102.343L446.43 102.986C447.148 109.649 445.32 118.145 439.091 131.813C433.661 143.73 425.493 158.345 414.452 177.712L409.544 186.31L300.162 377.77C288.81 397.639 280.655 411.893 273.431 422.254C266.462 432.25 261.1 437.495 255.793 440.413L255.28 440.687C244.48 446.327 231.979 447.735 220.218 444.663L219.083 444.352C213.145 442.648 206.721 438.597 197.604 429.93C189.595 422.315 180.29 411.923 167.97 397.927L162.501 391.706L95.3759 315.3C84.5259 302.95 76.8239 294.171 71.3309 286.801C66.0859 279.765 63.3963 274.704 62.0492 269.951L61.9221 269.493C59.4011 260.033 59.7742 250.041 62.9801 240.806L63.2991 239.915C65.0498 235.17 68.2082 230.283 74.2733 223.554C80.4269 216.726 88.9109 208.701 100.861 197.412L222.741 82.2709C232.717 72.8464 236.953 68.9238 241.218 66.2618L242.074 65.7448C246.092 63.394 250.423 61.6288 254.935 60.5005L255.84 60.2835C261.013 59.0942 266.606 59.0371 281.245 59.0598L335.872 59.1442Z" stroke="#21FBFF" stroke-width="22"/>
</g>
<defs>
<filter id="filter0_dd_0_1" x="0" y="0" width="508" height="508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter1_dd_0_1" x="45.2702" y="45.0547" width="416.306" height="417.198" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/>
</filter>
</defs>
</svg>
`:`<svg width="508" height="508" viewBox="-200 -200 908 908" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_0_1)">
<path d="M164 14H344C372.184 14 392.661 14.0088 408.784 15.3262C424.279 16.5922 434.842 19.0146 443.566 23.2812L444.405 23.7002C460.89 32.0996 474.34 45.4245 482.896 61.8125L483.3 62.5947C487.828 71.4811 490.367 82.2209 491.674 98.2158C492.991 114.339 493 134.816 493 163V343C493 371.184 492.991 391.661 491.674 407.784C490.408 423.279 487.985 433.842 483.718 442.566L483.3 443.405C474.9 459.89 461.576 473.34 445.188 481.896L444.405 482.3C435.519 486.828 424.779 489.367 408.784 490.674C392.661 491.991 372.184 492 344 492H164C135.816 492 115.339 491.991 99.2158 490.674C83.7207 489.408 73.1578 486.985 64.4336 482.718L63.5947 482.3C47.1099 473.9 33.6598 460.576 25.1045 444.188L24.7002 443.405C20.1723 434.519 17.633 423.779 16.3262 407.784C15.0088 391.661 15 371.184 15 343V163C15 134.816 15.0088 114.339 16.3262 98.2158C17.5922 82.721 20.0146 72.1577 24.2812 63.4336L24.7002 62.5947C33.0996 46.1099 46.4245 32.6598 62.8125 24.1045L63.5947 23.7002C72.4811 19.1723 83.2209 16.633 99.2158 15.3262C115.339 14.0088 135.816 14 164 14Z" stroke="#21FBFF" stroke-width="22"/>
</g>
<g filter="url(#filter1_dd_0_1)">
<path d="M335.872 59.1442C363.205 59.1868 382.944 59.229 397.847 60.6194C412.334 61.9712 420.556 64.4906 425.986 68.2262L426.503 68.5914C437.531 76.5994 444.718 88.832 446.356 102.343L446.43 102.986C447.148 109.649 445.32 118.145 439.091 131.813C433.661 143.73 425.493 158.345 414.452 177.712L409.544 186.31L300.162 377.77C288.81 397.639 280.655 411.893 273.431 422.254C266.462 432.25 261.1 437.495 255.793 440.413L255.28 440.687C244.48 446.327 231.979 447.735 220.218 444.663L219.083 444.352C213.145 442.648 206.721 438.597 197.604 429.93C189.595 422.315 180.29 411.923 167.97 397.927L162.501 391.706L95.3759 315.3C84.5259 302.95 76.8239 294.171 71.3309 286.801C66.0859 279.765 63.3963 274.704 62.0492 269.951L61.9221 269.493C59.4011 260.033 59.7742 250.041 62.9801 240.806L63.2991 239.915C65.0498 235.17 68.2082 230.283 74.2733 223.554C80.4269 216.726 88.9109 208.701 100.861 197.412L222.741 82.2709C232.717 72.8464 236.953 68.9238 241.218 66.2618L242.074 65.7448C246.092 63.394 250.423 61.6288 254.935 60.5005L255.84 60.2835C261.013 59.0942 266.606 59.0371 281.245 59.0598L335.872 59.1442Z" stroke="#21FBFF" stroke-width="22"/>
</g>
<defs>
<filter id="filter0_dd_0_1" x="0" y="0" width="508" height="508" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter1_dd_0_1" x="45.2702" y="45.0547" width="416.306" height="417.198" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_0_1"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/>
</filter>
</defs>
</svg>
`;for(const e of n)e.innerHTML=targetContent},getTargetAppearance=()=>document.documentElement.classList.contains("dark")?"dark":"light";window.addEventListener("DOMContentLoaded",e=>{const t=document.getElementById("top-scroller"),n=document.getElementById("site-footer");t&&n&&t.getBoundingClientRect().top>n.getBoundingClientRect().top&&(t.hidden=!0)})