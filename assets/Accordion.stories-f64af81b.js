import{j as u}from"./jsx-runtime-69eee039.js";import{c as w}from"./clsx-1229b3e0.js";import"./index-7c191284.js";function b(e){return u.jsx("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:u.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1161 16.8839C11.6043 17.372 12.3957 17.372 12.8839 16.8839L20.8839 8.88388C21.372 8.39573 21.372 7.60427 20.8839 7.11612C20.3957 6.62796 19.6043 6.62796 19.1161 7.11612L12 14.2322L4.88388 7.11612C4.39573 6.62796 3.60427 6.62796 3.11612 7.11612C2.62796 7.60427 2.62796 8.39573 3.11612 8.88388L11.1161 16.8839Z",fill:"currentColor"},void 0)}),void 0)}const v="_container_1qirp_1",y="_button_1qirp_6",q="_medium_1qirp_26",I="_small_1qirp_34",S="_arrow_1qirp_51",N="_panel_1qirp_63",a={container:v,button:y,medium:q,small:I,arrow:S,panel:N},r=({header:e,children:F,size:f="medium",id:h,buttonId:x,...j})=>u.jsxs("details",{className:w(a.container,a[f]),id:h,...j,children:[u.jsxs("summary",{id:x,className:a.button,children:[u.jsx("span",{children:e}),u.jsx(b,{"aria-hidden":!0,className:a.arrow})]}),u.jsx("div",{className:a.panel,children:F})]});try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{header:{defaultValue:null,description:"見出しに表示するテキスト",name:"header",required:!0,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},id:{defaultValue:null,description:"ラッパーであるdetails要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},buttonId:{defaultValue:null,description:"開閉をトリガーするsummary要素に付与するネイティブ要素の`id`属性。ページで固有のIDを指定",name:"buttonId",required:!1,type:{name:"string"}}}}}catch{}const R={component:r},d={header:"夏目漱石「私の個人主義」",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"},s={render:e=>u.jsx(r,{...e}),args:d},n={render:e=>u.jsx(r,{...e}),args:{...d,size:"small"}},o={render:e=>u.jsx(r,{...e}),args:{...d,"data-test-id":"some-id"}},t={render:()=>u.jsx(r,{header:"夏目漱石「私の個人主義」",id:"wrapper-id",buttonId:"button-id",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"})};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: defaultArgs
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,A;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    size: 'small'
  }
}`,...(A=(p=n.parameters)==null?void 0:p.docs)==null?void 0:A.source}}};var B,g,E;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    ['data-test-id']: 'some-id'
  }
}`,...(E=(g=o.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var C,_,D;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Accordion header="夏目漱石「私の個人主義」" id="wrapper-id" buttonId="button-id">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
}`,...(D=(_=t.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const O=["Default","Small","CustomDataAttribute","Id"];export{o as CustomDataAttribute,s as Default,t as Id,n as Small,O as __namedExportsOrder,R as default};
