import{j as e}from"./jsx-runtime-69eee039.js";import{S as m}from"./Stack-ac2b4f0f.js";import{T as B}from"./Text-b9f311a8.js";import"./index-7c191284.js";import"./clsx-1229b3e0.js";import"./style-e9a2251f.js";const x="_bold_wghus_1",g={bold:x},s=({as:a="span",children:i})=>{const p=a;return e.jsx(p,{className:g.bold,children:i})};try{s.displayName="Bold",s.__docgenInfo={description:"",displayName:"Bold",props:{as:{defaultValue:{value:"span"},description:"レンダリングされる要素",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"b"'},{value:'"strong"'},{value:'"em"'},{value:'"i"'}]}}}}}catch{}const v={title:"Typography/font/Bold",component:s},r={render:()=>e.jsxs(m,{spacing:"md",children:[e.jsx(s,{children:"default(span)"}),e.jsx(s,{as:"span",children:"span"}),e.jsx(s,{as:"b",children:"b"}),e.jsx(s,{as:"strong",children:"strong"}),e.jsx(s,{as:"em",children:"em"}),e.jsx(s,{as:"i",children:"i"})]})},o={render:()=>e.jsxs(B,{type:"body",size:"lg",color:"main",children:["一部だけ",e.jsx(s,{children:"太字"}),"にしたい"]})};var n,t,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    return <Stack spacing="md">
        <Bold>default(span)</Bold>
        <Bold as="span">span</Bold>
        <Bold as="b">b</Bold>
        <Bold as="strong">strong</Bold>
        <Bold as="em">em</Bold>
        <Bold as="i">i</Bold>
      </Stack>;
  }
}`,...(d=(t=r.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var l,u,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Text type="body" size="lg" color="main">
        一部だけ<Bold>太字</Bold>にしたい
      </Text>;
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const T=["AsVarations","WithText"];export{r as AsVarations,o as WithText,T as __namedExportsOrder,v as default};
