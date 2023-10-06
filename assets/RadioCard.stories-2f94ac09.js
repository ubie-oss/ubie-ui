import{j as n,c as t,a as o}from"./clsx-0a53246e.js";import{r as F}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const b="_wrap_jqzzg_1",A="_block_jqzzg_5",C="_marginBottom_jqzzg_9",z="_radio_jqzzg_13",E="_label_jqzzg_47",r={wrap:b,block:A,marginBottom:C,radio:z,label:E},u=F.forwardRef(({id:a,name:l,value:c,children:m,className:p,hasMarginBottom:_=!0,block:g=!1,...B},f)=>n("div",{className:t(_&&r.marginBottom,r.wrap,g&&r.block),children:[o("input",{type:"radio",id:a,name:l,value:c,className:t(p,r.radio),...B,ref:f}),o("label",{htmlFor:a,className:r.label,children:m})]}));u.displayName="RadioCard";try{u.displayName="RadioCard",u.__docgenInfo={description:`アクセシビリティに配慮したラジオボタン。
TimeQuestionContentのような、選択した後自動で遷移しないタイプのラジオボタン（選択してもなにもおきないボタン）に使用する。`,displayName:"RadioCard",props:{hasMarginBottom:{defaultValue:{value:"true"},description:"",name:"hasMarginBottom",required:!1,type:{name:"boolean"}},block:{defaultValue:{value:"false"},description:"",name:"block",required:!1,type:{name:"boolean"}}}}}catch{}const j={component:u},D={children:"ラジオボタン",name:"radio"},e={render:a=>n("div",{children:[o(u,{...a,id:"foo"}),o(u,{...a,id:"bar"}),o(u,{...a,hasMarginBottom:!1,id:"baz"})]}),args:D};var s,d,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div>
      <RadioCard {...args} id="foo" />
      <RadioCard {...args} id="bar" />
      <RadioCard {...args} hasMarginBottom={false} id="baz" />
    </div>,
  args: defaultArgs
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,j as default};
//# sourceMappingURL=RadioCard.stories-2f94ac09.js.map
