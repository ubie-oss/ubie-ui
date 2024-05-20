import{j as s}from"./jsx-runtime-69eee039.js";import{L as t}from"./Label-f00ee01b.js";import"./index-7c191284.js";import"./RequiredLabel-0530a236.js";const A={title:"Form/Label",component:t},e={render:()=>s.jsx(t,{htmlFor:"id",children:"全角カタカナでご入力ください"})},r={render:()=>s.jsx(t,{htmlFor:"id",showRequiredLabel:!0,children:"全角カタカナでご入力ください"})},a={args:{"data-test-id":"label-test-id"},render:b=>s.jsx(t,{...b,htmlFor:"id",children:"Please enter in English"})};var u,o,n;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Label htmlFor="id">全角カタカナでご入力ください</Label>
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Label htmlFor="id" showRequiredLabel>
      全角カタカナでご入力ください
    </Label>
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'label-test-id'
  },
  render: args => <Label {...args} htmlFor="id">
      Please enter in English
    </Label>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const B=["Default","Rqruied","CustomDataAttribute"];export{a as CustomDataAttribute,e as Default,r as Rqruied,B as __namedExportsOrder,A as default};
