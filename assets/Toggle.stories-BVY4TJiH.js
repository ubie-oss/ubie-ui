import{j as n}from"./jsx-runtime-B57y5fZt.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as d}from"./index-ebcBgdYO.js";const S="_root_87pzh_1",q="_on_87pzh_23",V="_off_87pzh_27",v="_thumb_87pzh_41",A="_thumbOn_87pzh_49",I="_thumbOff_87pzh_53",R="_input_87pzh_57",e={root:S,on:q,off:V,thumb:v,thumbOn:A,thumbOff:I,input:R},a=d.forwardRef(({checked:t,defaultChecked:O,onChange:l,...T},z)=>{const{current:i}=d.useRef(t===void 0),[j,F]=d.useState(O),c=i?j:t,N=m=>{i&&F(m.target.checked),l&&l(m)};return n.jsxs("label",{className:p(e.root,c?e.on:e.off),children:[n.jsx("input",{ref:z,type:"checkbox",role:"switch",checked:c,onChange:N,className:e.input,...T}),n.jsx("span",{className:p(e.thumb,c?e.thumbOn:e.thumbOff)})]})});a.displayName="Toggle";try{a.displayName="Toggle",a.__docgenInfo={description:"",displayName:"Toggle",props:{checked:{defaultValue:null,description:"現在の状態が選択中かどうか",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:{value:"false"},description:"初期状態が選択状態かどうか",name:"defaultChecked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"値が変化した場合のコールバック",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},disabled:{defaultValue:{value:"false"},description:"無効状態かどうか",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const L={title:"Form/Toggle",component:a},s={},r={args:{defaultChecked:!0}},u={args:{disabled:!0}},o={args:{"data-test-id":"toggle-custom-attribute"},render:t=>n.jsx(a,{...t})};var f,h,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var _,b,C;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var B,k,E;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var x,y,D;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'toggle-custom-attribute'
  },
  render: args => <Toggle {...args} />
}`,...(D=(y=o.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const M=["Default","DefaultChecked","Disabled","CustomDataAttribute"];export{o as CustomDataAttribute,s as Default,r as DefaultChecked,u as Disabled,M as __namedExportsOrder,L as default};
