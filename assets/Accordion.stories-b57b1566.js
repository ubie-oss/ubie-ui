import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as w}from"./clsx-1229b3e0.js";import"./index-1b03fe98.js";function v(r){return e.jsx("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r,{children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1161 16.8839C11.6043 17.372 12.3957 17.372 12.8839 16.8839L20.8839 8.88388C21.372 8.39573 21.372 7.60427 20.8839 7.11612C20.3957 6.62796 19.6043 6.62796 19.1161 7.11612L12 14.2322L4.88388 7.11612C4.39573 6.62796 3.60427 6.62796 3.11612 7.11612C2.62796 7.60427 2.62796 8.39573 3.11612 8.88388L11.1161 16.8839Z",fill:"currentColor"},void 0)}),void 0)}const D="_container_txj33_1",b="_button_txj33_6",S="_medium_txj33_26",y="_small_txj33_34",I="_arrow_txj33_51",N="_panel_txj33_63",s={container:D,button:b,medium:S,small:y,arrow:I,panel:N},u=({header:r,children:F,size:h="medium",id:E,...C})=>e.jsxs("details",{className:w(s.container,s[h]),id:E,...C,children:[e.jsxs("summary",{className:s.button,children:[e.jsx("span",{children:r}),e.jsx(v,{"aria-hidden":!0,className:s.arrow})]}),e.jsx("div",{className:s.panel,children:F})]});u.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{header:{required:!0,tsType:{name:"string"},description:"見出しに表示するテキスト"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`サイズ
@default medium`,defaultValue:{value:"'medium'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"ネイティブ要素の`id`属性。ページで固有のIDを指定"}}};const R={component:u},d={header:"夏目漱石「私の個人主義」",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"},a={render:r=>e.jsx(u,{...r}),args:d},o={render:r=>e.jsx(u,{...r}),args:{...d,size:"small"}},n={render:r=>e.jsx(u,{...r}),args:{...d,"data-test-id":"some-id"}},t={render:()=>e.jsx(u,{header:"夏目漱石「私の個人主義」",id:"some-id",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"})};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: defaultArgs
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,p,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    size: 'small'
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var A,x,_;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Accordion {...args}></Accordion>,
  args: {
    ...defaultArgs,
    ['data-test-id']: 'some-id'
  }
}`,...(_=(x=n.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var j,f,B;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Accordion header="夏目漱石「私の個人主義」" id="some-id">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
}`,...(B=(f=t.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const T=["Default","Small","CustomDataAttribute","Id"];export{n as CustomDataAttribute,a as Default,t as Id,o as Small,T as __namedExportsOrder,R as default};
