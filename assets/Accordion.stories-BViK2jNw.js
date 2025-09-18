import{j as e}from"./jsx-runtime-DuyR_K1q.js";import{A as R}from"./ArrowBDownIcon-DhMIqqai.js";import{c as W}from"./clsx-B-dksMZM.js";import{S as k}from"./Stack-BMH-C6VO.js";import{T as p}from"./Text-DEaCHCfG.js";import"./index-yUhCOHB4.js";import"./style-BnM3_UOs.js";import"./component-NUmYR5Q2.js";const G="_container_liywr_1",H="_button_liywr_6",J="_medium_liywr_28",K="_small_liywr_36",L="_arrow_liywr_53",M="_panel_liywr_65",a={container:G,button:H,medium:J,small:K,arrow:L,panel:M},u=({header:r,description:m,children:q,size:l="medium",id:T,buttonId:V,initialOpen:N,onToggle:v,...z})=>e.jsxs("details",{className:W(a.container,a[l]),id:T,...z,open:N,onToggle:v,children:[e.jsxs("summary",{id:V,className:a.button,children:[e.jsxs(k,{spacing:"xxs",as:"span",children:[e.jsx(p,{bold:l==="medium",leading:"narrow",as:"span",size:l==="medium"?"md":"sm",children:r}),m&&e.jsx(p,{color:"sub",size:"xs",as:"span",children:m})]}),e.jsx(R,{"aria-hidden":!0,className:a.arrow})]}),e.jsx("div",{className:a.panel,children:q})]});try{u.displayName="Accordion",u.__docgenInfo={description:"",displayName:"Accordion",props:{children:{defaultValue:null,description:"コンテンツとして表示する内容。開閉で表示・非表示が切り替わる",name:"children",required:!0,type:{name:"ReactNode"}},header:{defaultValue:null,description:"見出しに表示するテキスト",name:"header",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"見出しの下に表示する説明",name:"description",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},id:{defaultValue:null,description:"ラッパーであるdetails要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},buttonId:{defaultValue:null,description:"開閉をトリガーするsummary要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"buttonId",required:!1,type:{name:"string"}},initialOpen:{defaultValue:null,description:"初期状態で開く",name:"initialOpen",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"開閉時のイベントハンドラ",name:"onToggle",required:!1,type:{name:"(() => void)"}}}}}catch{}const re={component:u},s={header:"夏目漱石「私の個人主義」",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。",description:"出版日：1978年8月8日"},n={render:r=>e.jsx(u,{...r}),args:s},o={render:r=>e.jsx(u,{...r}),args:{...s,size:"small"}},t={render:r=>e.jsx(u,{...r}),args:{...s,"data-test-id":"some-id"}},i={render:()=>e.jsx(u,{header:"夏目漱石「私の個人主義」",id:"wrapper-id",buttonId:"button-id",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"})},d={render:r=>e.jsx(u,{...r}),args:{...s,initialOpen:!0}},c={render:r=>e.jsx(u,{...r}),args:{...s,onToggle:()=>alert("アコーディオンが開閉されました！")}};var g,A,B;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: defaultArgs
}`,...(B=(A=n.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var f,_,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    size: 'small'
  }
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var D,x,E;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    ['data-test-id']: 'some-id'
  }
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var y,F,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Accordion header="夏目漱石「私の個人主義」" id="wrapper-id" buttonId="button-id">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
}`,...(h=(F=i.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var b,j,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Accordion {...args} />,
  args: {
    ...defaultArgs,
    initialOpen: true
  }
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var I,S,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Accordion {...args} />,
  args: {
    ...defaultArgs,
    onToggle: () => alert('アコーディオンが開閉されました！')
  }
}`,...(O=(S=c.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const ue=["Default","Small","CustomDataAttribute","Id","InitialOpen","WithOnToggle"];export{t as CustomDataAttribute,n as Default,i as Id,d as InitialOpen,o as Small,c as WithOnToggle,ue as __namedExportsOrder,re as default};
