import{j as e}from"./jsx-runtime-69eee039.js";import{S as f}from"./Stack-9a3a61db.js";import{T as C}from"./Text-426101fc.js";import"./index-7c191284.js";import"./clsx-1229b3e0.js";import"./style-62efef97.js";const E="_bold_wghus_1",D={bold:E},r=({as:s="span",children:_,id:b,...y})=>{const A=s;return e.jsx(A,{className:D.bold,id:b,...y,children:_})};try{r.displayName="Bold",r.__docgenInfo={description:"",displayName:"Bold",props:{as:{defaultValue:{value:"span"},description:"レンダリングされる要素",name:"as",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"b"'},{value:'"strong"'},{value:'"em"'},{value:'"i"'}]}},id:{defaultValue:null,description:"ネイティブ要素の`id`属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}}}}}catch{}const W={title:"Typography/font/Bold",component:r},a={render:()=>e.jsxs(f,{spacing:"md",children:[e.jsx(r,{children:"default(span)"}),e.jsx(r,{as:"span",children:"span"}),e.jsx(r,{as:"b",children:"b"}),e.jsx(r,{as:"strong",children:"strong"}),e.jsx(r,{as:"em",children:"em"}),e.jsx(r,{as:"i",children:"i"})]})},n={render:()=>e.jsxs(C,{type:"body",size:"lg",color:"main",children:["一部だけ",e.jsx(r,{children:"太字"}),"にしたい"]})},o={render:s=>e.jsx(r,{...s,children:"太字"}),args:{id:"some-id"}},t={render:s=>e.jsx(r,{...s,children:"太字"}),args:{"data-test-id":"some-id"}};var d,u,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var i,c,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <Text type="body" size="lg" color="main">
        一部だけ<Bold>太字</Bold>にしたい
      </Text>;
  }
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,B,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <Bold {...args}>太字</Bold>;
  },
  args: {
    id: 'some-id'
  }
}`,...(g=(B=o.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var x,h,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <Bold {...args}>太字</Bold>;
  },
  args: {
    [\`data-test-id\`]: 'some-id'
  }
}`,...(j=(h=t.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const k=["AsVarations","WithText","WithId","CustomDataAttribute"];export{a as AsVarations,t as CustomDataAttribute,o as WithId,n as WithText,k as __namedExportsOrder,W as default};
