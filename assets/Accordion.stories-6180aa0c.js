import{j as e}from"./jsx-runtime-69eee039.js";import{S as w}from"./ArrowBDownIcon-86826e18.js";import{c as O}from"./clsx-1229b3e0.js";import"./index-7c191284.js";const v="_container_1qirp_1",N="_button_1qirp_6",V="_medium_1qirp_26",z="_small_1qirp_34",R="_arrow_1qirp_51",k="_panel_1qirp_63",a={container:v,button:N,medium:V,small:z,arrow:R,panel:k},r=({header:u,children:h,size:j="medium",id:y,buttonId:I,initialOpen:q,...S})=>e.jsxs("details",{className:O(a.container,a[j]),id:y,...S,open:q,children:[e.jsxs("summary",{id:I,className:a.button,children:[e.jsx("span",{children:u}),e.jsx(w,{"aria-hidden":!0,className:a.arrow})]}),e.jsx("div",{className:a.panel,children:h})]});try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{header:{defaultValue:null,description:"見出しに表示するテキスト",name:"header",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},id:{defaultValue:null,description:"ラッパーであるdetails要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},buttonId:{defaultValue:null,description:"開閉をトリガーするsummary要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"buttonId",required:!1,type:{name:"string"}},initialOpen:{defaultValue:null,description:"初期状態で開く",name:"initialOpen",required:!1,type:{name:"boolean"}}}}}catch{}const L={component:r},d={header:"夏目漱石「私の個人主義」",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"},s={render:u=>e.jsx(r,{...u}),args:d},n={render:u=>e.jsx(r,{...u}),args:{...d,size:"small"}},t={render:u=>e.jsx(r,{...u}),args:{...d,"data-test-id":"some-id"}},o={render:()=>e.jsx(r,{header:"夏目漱石「私の個人主義」",id:"wrapper-id",buttonId:"button-id",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"})},i={render:u=>e.jsx(r,{...u}),args:{...d,initialOpen:!0}};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: defaultArgs
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,A,B;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    size: 'small'
  }
}`,...(B=(A=n.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var g,E,_;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    ['data-test-id']: 'some-id'
  }
}`,...(_=(E=t.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var D,F,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Accordion header="夏目漱石「私の個人主義」" id="wrapper-id" buttonId="button-id">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
}`,...(C=(F=o.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var f,x,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Accordion {...args} />,
  args: {
    ...defaultArgs,
    initialOpen: true
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const M=["Default","Small","CustomDataAttribute","Id","InitialOpen"];export{t as CustomDataAttribute,s as Default,o as Id,i as InitialOpen,n as Small,M as __namedExportsOrder,L as default};
