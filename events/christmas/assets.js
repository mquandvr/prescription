"use strict";const ChristmasAssets=(()=>{const a=`
        <svg viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 20 C8 7, 19 3, 29 10 C32 12, 34 15, 33 18 C30 15, 25 14, 21 15 C18 16, 16 18, 15 20 Z" fill="#c81e1e"/>
            <path d="M8 19 C11 10, 19 7, 27 11 C23 11, 16 14, 13 19 Z" fill="#dc2626" opacity="0.65"/>
            <path d="M16 17 C20 13, 27 13, 32 17" stroke="#991b1b" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>
            <rect x="3" y="18.5" width="23" height="5.8" rx="2.9" fill="#fffdf9" stroke="#e4ddd0" stroke-width="0.9"/>
            <circle cx="33.2" cy="18.6" r="3.4" fill="#fffdf9" stroke="#e4ddd0" stroke-width="0.9"/>
        </svg>`;function d(){const e=[["#f59e0b","#fde68a","a"],["#dc2626","#fca5a5","b"],["#15803d","#86efac","a"],["#eab308","#fef08a","b"]];let s="M0,2",l="";for(let r=0;r<24;r++){const o=r*72,t=o+72/2,h=o+72;s+=` Q${t},11 ${h},2`;const[p,k,w]=e[r%e.length];l+=`
                <g class="xmas-bulb xmas-bulb-${w}">
                    <rect x="${t-1.5}" y="6" width="3" height="2.4" rx="0.6" fill="#14532d"/>
                    <circle class="xmas-bulb-halo" cx="${t}" cy="11.5" r="5.5" fill="${k}"/>
                    <ellipse cx="${t}" cy="11.3" rx="2.6" ry="3.3" fill="${p}"/>
                    <circle cx="${t-.8}" cy="10.2" r="0.8" fill="#ffffff" opacity="0.75"/>
                </g>`}return`<svg viewBox="0 0 1728 20" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="${s}" fill="none" stroke="#166534" stroke-width="1.15" stroke-opacity="0.45"/>
            ${l}
        </svg>`}const n=`
        <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle class="sleigh-star" cx="6" cy="21" r="1.2" fill="#d4a017"/>
            <circle class="sleigh-star" cx="14" cy="17" r="1.6" fill="#d4a017"/>
            <circle class="sleigh-star" cx="21" cy="23" r="1.1" fill="#c81e1e"/>
            <circle class="sleigh-star" cx="27" cy="19" r="1.3" fill="#d4a017"/>
            <path d="M32 27 C34 29.5, 42 30, 56 29.5 L66 29.5 C70 29.5, 72.5 27.5, 73 24.5" stroke="#991b1b" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M40 29.5 L42 25 M58 29.5 L57 25" stroke="#991b1b" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M35 16 C35 23, 39 26, 46 26 L61 26 C65 26, 68 23, 68 19 C64 20, 60 20, 58 17 L48 17 C45 17, 42 15, 38 14 Z" fill="#991b1b"/>
            <path d="M37 16 L66 20" stroke="#d4a017" stroke-width="1" opacity="0.8"/>
            <circle cx="43" cy="14" r="4.2" fill="#14532d"/>
            <circle cx="53.5" cy="12.5" r="2.7" fill="#c81e1e"/>
            <path d="M51 11 C52 7.5, 56 7.5, 58 10" fill="#c81e1e"/>
            <circle cx="58.3" cy="10" r="1" fill="#fffdf9"/>
            <path d="M50 18 C50 14.5, 57 14.5, 57 18 Z" fill="#b91c1c"/>
            <path d="M56 16 Q76 20 97 15.5 M56 16 Q96 22 135 14" stroke="#b48b3e" stroke-width="0.9" stroke-opacity="0.7"/>
            <g transform="translate(82, 8)">
                <ellipse cx="14" cy="12" rx="7.2" ry="3.3" fill="#6b5344"/>
                <path d="M19 10 L23 5.5 L27 6.5 L25 9 L20 12 Z" fill="#6b5344"/>
                <path d="M23.5 5.5 L22 1.5 M23.5 5.5 L25.5 2 M24.5 3.5 L27 2.5" stroke="#574134" stroke-width="1" stroke-linecap="round"/>
                <path d="M10 14 L6 20 M12 14.5 L11 20.5 M17 14 L21 19.5 M19 13.5 L24 18" stroke="#6b5344" stroke-width="1.35" stroke-linecap="round"/>
                <path d="M7 11 L4.5 9.5" stroke="#6b5344" stroke-width="1.2" stroke-linecap="round"/>
            </g>
            <g transform="translate(119, 6)">
                <ellipse cx="14" cy="12" rx="7.5" ry="3.4" fill="#5b4638"/>
                <path d="M19 10 L23.5 5.2 L28 6.5 L25.5 9 L20 12 Z" fill="#5b4638"/>
                <path d="M24 5.2 L22.5 1 M24 5.2 L26.5 1.5 M25.2 3.2 L28 2" stroke="#47352a" stroke-width="1" stroke-linecap="round"/>
                <path d="M10 14 L5.5 20 M12 14.5 L11 20.5 M17 14 L21.5 19.5 M19 13.5 L24.5 17.5" stroke="#5b4638" stroke-width="1.35" stroke-linecap="round"/>
                <path d="M7 11 L4.5 9.5" stroke="#5b4638" stroke-width="1.2" stroke-linecap="round"/>
                <circle cx="28.3" cy="6.9" r="1.5" fill="#dc2626"/>
            </g>
        </svg>`;function f(e){return e.map(([s,l,i,c])=>`<span class="snow-flake" style="left:${s}%;font-size:${c}px;animation-duration:${l}s;animation-delay:-${i}s">\u2744</span>`).join("")}return Object.freeze({SANTA_HAT_SVG:a,SLEIGH_SVG:n,buildLightsSvg:d,buildSnowHtml:f})})();
