import{j as e}from"./jsx-runtime-69eee039.js";import{S as O}from"./ArrowBDownIcon-86826e18.js";import{c as v}from"./clsx-1229b3e0.js";import"./index-7c191284.js";const N="_container_1g3b9_1",q="_button_1g3b9_6",V="_medium_1g3b9_28",z="_small_1g3b9_36",R="_arrow_1g3b9_53",k="_panel_1g3b9_65",a={container:N,button:q,medium:V,small:z,arrow:R,panel:k},r=({header:u,children:h,size:j="medium",id:y,buttonId:I,initialOpen:S,...w})=>e.jsxs("details",{className:v(a.container,a[j]),id:y,...w,open:S,children:[e.jsxs("summary",{id:I,className:a.button,children:[e.jsx("span",{children:u}),e.jsx(O,{"aria-hidden":!0,className:a.arrow})]}),e.jsx("div",{className:a.panel,children:h})]});try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{header:{defaultValue:null,description:"見出しに表示するテキスト",name:"header",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},id:{defaultValue:null,description:"ラッパーであるdetails要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},buttonId:{defaultValue:null,description:"開閉をトリガーするsummary要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"buttonId",required:!1,type:{name:"string"}},initialOpen:{defaultValue:null,description:"初期状態で開く",name:"initialOpen",required:!1,type:{name:"boolean"}}}}}catch{}const L={component:r},i={header:"夏目漱石「私の個人主義」",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"},s={render:u=>e.jsx(r,{...u}),args:i},n={render:u=>e.jsx(r,{...u}),args:{...i,size:"small"}},t={render:u=>e.jsx(r,{...u}),args:{...i,"data-test-id":"some-id"}},o={render:()=>e.jsx(r,{header:"夏目漱石「私の個人主義」",id:"wrapper-id",buttonId:"button-id",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"})},d={render:u=>e.jsx(r,{...u}),args:{...i,initialOpen:!0}};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: defaultArgs
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,A,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    size: 'small'
  }
}`,...(g=(A=n.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var B,E,_;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    ['data-test-id']: 'some-id'
  }
}`,...(_=(E=t.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var D,F,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Accordion header="夏目漱石「私の個人主義」" id="wrapper-id" buttonId="button-id">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
}`,...(C=(F=o.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var f,b,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Accordion {...args} />,
  args: {
    ...defaultArgs,
    initialOpen: true
  }
}`,...(x=(b=d.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const M=["Default","Small","CustomDataAttribute","Id","InitialOpen"];export{t as CustomDataAttribute,s as Default,o as Id,d as InitialOpen,n as Small,M as __namedExportsOrder,L as default};
