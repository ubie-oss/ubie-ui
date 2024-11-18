import{j as u}from"./jsx-runtime-BJwPuJt0.js";import{A as O}from"./ArrowBDownIcon-DHfX99Bt.js";import{c as S}from"./clsx-B-dksMZM.js";import"./index-DX35FyXq.js";const q="_container_1g3b9_1",V="_button_1g3b9_6",v="_medium_1g3b9_28",z="_small_1g3b9_36",R="_arrow_1g3b9_53",k="_panel_1g3b9_65",a={container:q,button:V,medium:v,small:z,arrow:R,panel:k},r=({header:e,children:h,size:y="medium",id:j,buttonId:I,initialOpen:w,...N})=>u.jsxs("details",{className:S(a.container,a[y]),id:j,...N,open:w,children:[u.jsxs("summary",{id:I,className:a.button,children:[u.jsx("span",{children:e}),u.jsx(O,{"aria-hidden":!0,className:a.arrow})]}),u.jsx("div",{className:a.panel,children:h})]});try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{children:{defaultValue:null,description:"コンテンツとして表示する内容。開閉で表示・非表示が切り替わる",name:"children",required:!0,type:{name:"ReactNode"}},header:{defaultValue:null,description:"見出しに表示するテキスト",name:"header",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},id:{defaultValue:null,description:"ラッパーであるdetails要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},buttonId:{defaultValue:null,description:"開閉をトリガーするsummary要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"buttonId",required:!1,type:{name:"string"}},initialOpen:{defaultValue:null,description:"初期状態で開く",name:"initialOpen",required:!1,type:{name:"boolean"}}}}}catch{}const L={component:r},i={header:"夏目漱石「私の個人主義」",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"},s={render:e=>u.jsx(r,{...e}),args:i},n={render:e=>u.jsx(r,{...e}),args:{...i,size:"small"}},t={render:e=>u.jsx(r,{...e}),args:{...i,"data-test-id":"some-id"}},o={render:()=>u.jsx(r,{header:"夏目漱石「私の個人主義」",id:"wrapper-id",buttonId:"button-id",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"})},d={render:e=>u.jsx(r,{...e}),args:{...i,initialOpen:!0}};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: defaultArgs
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,A,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    size: 'small'
  }
}`,...(g=(A=n.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var _,B,f;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    ['data-test-id']: 'some-id'
  }
}`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var D,C,b;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Accordion header="夏目漱石「私の個人主義」" id="wrapper-id" buttonId="button-id">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
}`,...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var E,x,F;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Accordion {...args} />,
  args: {
    ...defaultArgs,
    initialOpen: true
  }
}`,...(F=(x=d.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};const M=["Default","Small","CustomDataAttribute","Id","InitialOpen"];export{t as CustomDataAttribute,s as Default,o as Id,d as InitialOpen,n as Small,M as __namedExportsOrder,L as default};
