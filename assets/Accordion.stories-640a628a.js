import{j as u}from"./jsx-runtime-69eee039.js";import{S as j}from"./ArrowBDownIcon-86826e18.js";import{c as y}from"./clsx-1229b3e0.js";import"./index-7c191284.js";const q="_container_1qirp_1",I="_button_1qirp_6",w="_medium_1qirp_26",S="_small_1qirp_34",v="_arrow_1qirp_51",N="_panel_1qirp_63",a={container:q,button:I,medium:w,small:S,arrow:v,panel:N},r=({header:e,children:C,size:f="medium",id:x,buttonId:b,...h})=>u.jsxs("details",{className:y(a.container,a[f]),id:x,...h,children:[u.jsxs("summary",{id:b,className:a.button,children:[u.jsx("span",{children:e}),u.jsx(j,{"aria-hidden":!0,className:a.arrow})]}),u.jsx("div",{className:a.panel,children:C})]});try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{header:{defaultValue:null,description:"見出しに表示するテキスト",name:"header",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},id:{defaultValue:null,description:"ラッパーであるdetails要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},buttonId:{defaultValue:null,description:"開閉をトリガーするsummary要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"buttonId",required:!1,type:{name:"string"}}}}}catch{}const k={component:r},d={header:"夏目漱石「私の個人主義」",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"},s={render:e=>u.jsx(r,{...e}),args:d},n={render:e=>u.jsx(r,{...e}),args:{...d,size:"small"}},o={render:e=>u.jsx(r,{...e}),args:{...d,"data-test-id":"some-id"}},t={render:()=>u.jsx(r,{header:"夏目漱石「私の個人主義」",id:"wrapper-id",buttonId:"button-id",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"})};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: defaultArgs
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,A;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    size: 'small'
  }
}`,...(A=(p=n.parameters)==null?void 0:p.docs)==null?void 0:A.source}}};var B,E,_;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    ['data-test-id']: 'some-id'
  }
}`,...(_=(E=o.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var g,D,F;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Accordion header="夏目漱石「私の個人主義」" id="wrapper-id" buttonId="button-id">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
}`,...(F=(D=t.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const G=["Default","Small","CustomDataAttribute","Id"];export{o as CustomDataAttribute,s as Default,t as Id,n as Small,G as __namedExportsOrder,k as default};
