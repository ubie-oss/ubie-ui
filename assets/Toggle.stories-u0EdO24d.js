import{j as c}from"./jsx-runtime-BJwPuJt0.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as d}from"./index-DX35FyXq.js";const q="_root_87pzh_1",F="_on_87pzh_23",R="_off_87pzh_27",U="_thumb_87pzh_41",V="_thumbOn_87pzh_49",w="_thumbOff_87pzh_53",A="_input_87pzh_57",e={root:q,on:F,off:R,thumb:U,thumbOn:V,thumbOff:w,input:A},s=d.forwardRef(({checked:t,defaultChecked:E,onChange:l,...z},T)=>{const{current:i}=d.useRef(t===void 0),[j,N]=d.useState(E),n=i?j:t,S=m=>{i&&N(m.target.checked),l&&l(m)};return c.jsxs("label",{className:p(e.root,n?e.on:e.off),children:[c.jsx("input",{ref:T,type:"checkbox",role:"switch",checked:n,onChange:S,className:e.input,...z}),c.jsx("span",{className:p(e.thumb,n?e.thumbOn:e.thumbOff)})]})});s.displayName="Toggle";try{s.displayName="Toggle",s.__docgenInfo={description:"",displayName:"Toggle",props:{checked:{defaultValue:null,description:"現在の状態が選択中かどうか",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"初期状態で選択状態とする",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"無効状態かどうか",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Form/Toggle",component:s},a={},r={args:{defaultChecked:!0}},o={args:{disabled:!0}},u={args:{"data-test-id":"toggle-custom-attribute"},render:t=>c.jsx(s,{...t})};var f,h,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var _,b,C;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,B,x;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var y,D,O;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'toggle-custom-attribute'
  },
  render: args => <Toggle {...args} />
}`,...(O=(D=u.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const J=["Default","DefaultChecked","Disabled","CustomDataAttribute"];export{u as CustomDataAttribute,a as Default,r as DefaultChecked,o as Disabled,J as __namedExportsOrder,H as default};
