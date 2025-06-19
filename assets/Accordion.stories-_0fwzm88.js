import{j as e}from"./jsx-runtime-DuyR_K1q.js";import{A as O}from"./ArrowBDownIcon-DhMIqqai.js";import{c as V}from"./clsx-B-dksMZM.js";import{S as v}from"./Stack-IsKex1Sa.js";import{T as m}from"./Text-B1VESC2A.js";import"./index-yUhCOHB4.js";import"./style-BhPSv9pv.js";import"./component-NUmYR5Q2.js";const z="_container_liywr_1",R="_button_liywr_6",T="_medium_liywr_28",k="_small_liywr_36",G="_arrow_liywr_53",H="_panel_liywr_65",a={container:z,button:R,medium:T,small:k,arrow:G,panel:H},r=({header:u,description:l,children:j,size:c="medium",id:I,buttonId:S,initialOpen:q,...N})=>e.jsxs("details",{className:V(a.container,a[c]),id:I,...N,open:q,children:[e.jsxs("summary",{id:S,className:a.button,children:[e.jsxs(v,{spacing:"xxs",as:"span",children:[e.jsx(m,{bold:c==="medium",leading:"narrow",as:"span",size:c==="medium"?"md":"sm",children:u}),l&&e.jsx(m,{color:"sub",size:"xs",as:"span",children:l})]}),e.jsx(O,{"aria-hidden":!0,className:a.arrow})]}),e.jsx("div",{className:a.panel,children:j})]});try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{children:{defaultValue:null,description:"コンテンツとして表示する内容。開閉で表示・非表示が切り替わる",name:"children",required:!0,type:{name:"ReactNode"}},header:{defaultValue:null,description:"見出しに表示するテキスト",name:"header",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"見出しの下に表示する説明",name:"description",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},id:{defaultValue:null,description:"ラッパーであるdetails要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},buttonId:{defaultValue:null,description:"開閉をトリガーするsummary要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"buttonId",required:!1,type:{name:"string"}},initialOpen:{defaultValue:null,description:"初期状態で開く",name:"initialOpen",required:!1,type:{name:"boolean"}}}}}catch{}const X={component:r},d={header:"夏目漱石「私の個人主義」",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。",description:"出版日：1978年8月8日"},s={render:u=>e.jsx(r,{...u}),args:d},n={render:u=>e.jsx(r,{...u}),args:{...d,size:"small"}},t={render:u=>e.jsx(r,{...u}),args:{...d,"data-test-id":"some-id"}},o={render:()=>e.jsx(r,{header:"夏目漱石「私の個人主義」",id:"wrapper-id",buttonId:"button-id",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"})},i={render:u=>e.jsx(r,{...u}),args:{...d,initialOpen:!0}};var p,A,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: defaultArgs
}`,...(g=(A=s.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var B,_,f;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    size: 'small'
  }
}`,...(f=(_=n.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var D,x,C;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    ['data-test-id']: 'some-id'
  }
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,E,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Accordion header="夏目漱石「私の個人主義」" id="wrapper-id" buttonId="button-id">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
}`,...(h=(E=o.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var F,b,w;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Accordion {...args} />,
  args: {
    ...defaultArgs,
    initialOpen: true
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const Y=["Default","Small","CustomDataAttribute","Id","InitialOpen"];export{t as CustomDataAttribute,s as Default,o as Id,i as InitialOpen,n as Small,Y as __namedExportsOrder,X as default};
