import{_ as a}from"./iframe-2ed1f20d.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-eb6aa7a3.js").then(r=>r.D),["./DocsRenderer-K4EAMTCU-eb6aa7a3.js","./iframe-2ed1f20d.js","./index-1b03fe98.js","./react-18-5df836b6.js","./index-6fd5a17b.js","./index-d8983a70.js","./_getPrototype-dd248945.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};