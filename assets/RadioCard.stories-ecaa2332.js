import{j as l,a as o}from"./jsx-runtime-03b4ddbf.js";import{c as e}from"./clsx-1229b3e0.js";import{r as u}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const j="_wrap_jqzzg_1",R="_block_jqzzg_5",h="_marginBottom_jqzzg_9",x="_radio_jqzzg_13",B="_label_jqzzg_47",r={wrap:j,block:R,marginBottom:h,radio:x,label:B},s=u.forwardRef(({id:a,name:c,value:m,children:p,className:g,hasMarginBottom:_=!0,block:f=!1,...b},z)=>l("div",{className:e(_&&r.marginBottom,r.wrap,f&&r.block),children:[o("input",{type:"radio",id:a,name:c,value:m,className:e(g,r.radio),...b,ref:z}),o("label",{htmlFor:a,className:r.label,children:p})]}));s.displayName="RadioCard";const N={component:s},C={children:"ラジオボタン",name:"radio"},t={render:a=>l("div",{children:[o(s,{...a,id:"foo"}),o(s,{...a,id:"bar"}),o(s,{...a,hasMarginBottom:!1,id:"baz"})]}),args:C};var d,i,n;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div>
      <RadioCard {...args} id="foo" />
      <RadioCard {...args} id="bar" />
      <RadioCard {...args} hasMarginBottom={false} id="baz" />
    </div>,
  args: defaultArgs
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,N as default};
//# sourceMappingURL=RadioCard.stories-ecaa2332.js.map
