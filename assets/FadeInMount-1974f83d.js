import{a as o,r as n,C as a}from"./index-158556b3.js";const l=({title:e,style:t})=>o("h3",{className:`mb-2 text-xl font-bold text-green-400 inline-block hover:scale-110 transition-all hover:bg-neutral-700 hover:rotate-3 ${t}`,children:e}),i=({children:e})=>{const[t,s]=n.useState(!1);n.useEffect(()=>{s(!0)},[]);const r=n.useRef(null);return o(a,{classNames:"fade",timeout:2e3,nodeRef:r,in:t,unmountOnExit:!0,mountOnEnter:!0,children:o("div",{ref:r,children:e})})};export{i as F,l as S};
