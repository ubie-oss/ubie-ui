import{a as l,c as t,j as o}from"./clsx-4547bf08.js";import{r as u}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const j="_wrap_jqzzg_1",R="_block_jqzzg_5",h="_marginBottom_jqzzg_9",x="_radio_jqzzg_13",B="_label_jqzzg_47",r={wrap:j,block:R,marginBottom:h,radio:x,label:B},s=u.forwardRef(({id:a,name:c,value:m,children:g,className:p,hasMarginBottom:_=!0,block:f=!1,...b},z)=>l("div",{className:t(_&&r.marginBottom,r.wrap,f&&r.block),children:[o("input",{type:"radio",id:a,name:c,value:m,className:t(p,r.radio),...b,ref:z}),o("label",{htmlFor:a,className:r.label,children:g})]}));s.displayName="RadioCard";const v={component:s},C={children:"ラジオボタン",name:"radio"},e={render:a=>l("div",{children:[o(s,{...a,id:"foo"}),o(s,{...a,id:"bar"}),o(s,{...a,hasMarginBottom:!1,id:"baz"})]}),args:C};var d,i,n;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div>
      <RadioCard {...args} id="foo" />
      <RadioCard {...args} id="bar" />
      <RadioCard {...args} hasMarginBottom={false} id="baz" />
    </div>,
  args: defaultArgs
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,v as default};
//# sourceMappingURL=RadioCard.stories-bd3512f1.js.map
