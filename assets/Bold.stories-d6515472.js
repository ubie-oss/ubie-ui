import{j as e}from"./jsx-runtime-69eee039.js";import{S as f}from"./Stack-3a809a50.js";import{T as C}from"./Text-5bc2979e.js";import"./index-7c191284.js";import"./clsx-1229b3e0.js";import"./style-1d55b7c3.js";import"./component-22a2265d.js";const D="_bold_wghus_1",F={bold:D},r=({as:s="span",children:j,id:y,..._})=>{const b=s;return e.jsx(b,{className:F.bold,id:y,..._,children:j})};try{r.displayName="Bold",r.__docgenInfo={description:"",displayName:"Bold",props:{children:{defaultValue:null,description:`太字にするテキスト
<p>や<div>などを子要素に指定しないでください（文法的にNGです）`,name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:{value:"span"},description:"レンダリングされる要素",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"b"'},{value:'"strong"'},{value:'"em"'},{value:'"i"'}]}},id:{defaultValue:null,description:"ネイティブ要素の`id`属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}}}}}catch{}const W={title:"Typography/font/Bold",component:r},u={render:()=>e.jsxs(f,{spacing:"md",children:[e.jsx(r,{children:"default(span)"}),e.jsx(r,{as:"span",children:"span"}),e.jsx(r,{as:"b",children:"b"}),e.jsx(r,{as:"strong",children:"strong"}),e.jsx(r,{as:"em",children:"em"}),e.jsx(r,{as:"i",children:"i"})]})},a={render:()=>e.jsxs(C,{type:"body",size:"lg",color:"main",children:["一部だけ",e.jsx(r,{children:"太字"}),"にしたい"]})},n={render:s=>e.jsx(r,{...s,children:"太字"}),args:{id:"some-id"}},o={render:s=>e.jsx(r,{...s,children:"太字"}),args:{"data-test-id":"some-id"}};var t,d,i;u.parameters={...u.parameters,docs:{...(t=u.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(d=u.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <Text type="body" size="lg" color="main">
        一部だけ<Bold>太字</Bold>にしたい
      </Text>;
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,B,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <Bold {...args}>太字</Bold>;
  },
  args: {
    id: 'some-id'
  }
}`,...(g=(B=n.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var x,h,A;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <Bold {...args}>太字</Bold>;
  },
  args: {
    [\`data-test-id\`]: 'some-id'
  }
}`,...(A=(h=o.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};const k=["AsVarations","WithText","WithId","CustomDataAttribute"];export{u as AsVarations,o as CustomDataAttribute,n as WithId,a as WithText,k as __namedExportsOrder,W as default};
