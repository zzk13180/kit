import{h as o,m as c,y as d}from"./chunks/hooks.module.72ab33da.js";import{e as t}from"./chunks/jsxRuntime.module.e64b117e.js";import{d as a}from"./chunks/preact.module.7b1ff8cf.js";const v=({headings:n=[]})=>{const s=o([]),[r]=c("");return d(()=>{const e=()=>{const l=document.querySelectorAll("article :is(h1, h2, h3, h4)");s.current=Array.from(l).map(i=>({id:i.id,topOffset:i.getBoundingClientRect().top+window.scrollY}))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),t(a,{children:[t("h2",{className:"heading",children:"On this page"}),t("ul",{children:[t("li",{className:`heading-link depth-2 ${r==="overview"?"active":""}`.trim(),children:t("a",{href:"#overview",children:"Overview"})}),n.filter(({depth:e})=>e>1&&e<4).map(e=>t("li",{className:`heading-link depth-${e.depth} ${r===e.slug?"active":""}`.trim(),children:t("a",{href:`#${e.slug}`,children:e.text})}))]})]})};export{v as default};
