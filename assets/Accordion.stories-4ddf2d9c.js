import{j as u}from"./jsx-runtime-9c4ae004.js";import{c as B}from"./clsx-1229b3e0.js";import"./index-1b03fe98.js";function p(o){return u.jsx("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{children:u.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1161 16.8839C11.6043 17.372 12.3957 17.372 12.8839 16.8839L20.8839 8.88388C21.372 8.39573 21.372 7.60427 20.8839 7.11612C20.3957 6.62796 19.6043 6.62796 19.1161 7.11612L12 14.2322L4.88388 7.11612C4.39573 6.62796 3.60427 6.62796 3.11612 7.11612C2.62796 7.60427 2.62796 8.39573 3.11612 8.88388L11.1161 16.8839Z",fill:"currentColor"},void 0)}),void 0)}const E="_container_txj33_1",A="_button_txj33_6",_="_medium_txj33_26",x="_small_txj33_34",h="_arrow_txj33_51",j="_panel_txj33_63",e={container:E,button:A,medium:_,small:x,arrow:h,panel:j},n=({header:o,children:m,size:F="medium"})=>u.jsxs("details",{className:B(e.container,e[F]),children:[u.jsxs("summary",{className:e.button,children:[u.jsx("span",{children:o}),u.jsx(p,{"aria-hidden":!0,className:e.arrow})]}),u.jsx("div",{className:e.panel,children:m})]});n.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{header:{required:!0,tsType:{name:"string"},description:"見出しに表示するテキスト"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:`サイズ
@default medium`,defaultValue:{value:"'medium'",computed:!1}}}};const D={component:n},r={render:()=>u.jsx(n,{header:"夏目漱石「私の個人主義」",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"})},s={render:()=>u.jsx(n,{header:"夏目漱石「私の個人主義」",size:"small",children:"何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。"})};var a,t,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Accordion header="夏目漱石「私の個人主義」">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Accordion header="夏目漱石「私の個人主義」" size="small">
      何は時分どうもどんな観念顔というののところを云ったいまし。とうてい今日に説明院は現にこういう反対たますくらいから思わて来るないにも撲殺なるたたて、始終にも願うただですん。
    </Accordion>
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const v=["Default","Small"];export{r as Default,s as Small,v as __namedExportsOrder,D as default};