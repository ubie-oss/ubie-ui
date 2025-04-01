import{j as c}from"./jsx-runtime-DuyR_K1q.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as d}from"./index-yUhCOHB4.js";const F="_root_i1a1m_1",R="_on_i1a1m_27",U="_off_i1a1m_31",V="_thumb_i1a1m_45",w="_thumbOn_i1a1m_53",A="_thumbOff_i1a1m_57",I="_input_i1a1m_61",e={root:F,on:R,off:U,thumb:V,thumbOn:w,thumbOff:A,input:I},a=d.forwardRef(({checked:t,defaultChecked:E,onChange:l,...T},j)=>{const{current:i}=d.useRef(t===void 0),[N,S]=d.useState(E),n=i?N:t,q=m=>{i&&S(m.target.checked),l&&l(m)};return c.jsxs("label",{className:p(e.root,n?e.on:e.off),children:[c.jsx("input",{ref:j,type:"checkbox",role:"switch",checked:n,onChange:q,className:e.input,...T}),c.jsx("span",{className:p(e.thumb,n?e.thumbOn:e.thumbOff)})]})});a.displayName="Toggle";try{a.displayName="Toggle",a.__docgenInfo={description:"",displayName:"Toggle",props:{checked:{defaultValue:null,description:"現在の状態が選択中かどうか",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"初期状態で選択状態とする",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"無効状態かどうか",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Form/Toggle",component:a},s={},r={args:{defaultChecked:!0}},o={args:{disabled:!0}},u={args:{"data-test-id":"toggle-custom-attribute"},render:t=>c.jsx(a,{...t})};var f,g,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(_=(g=s.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var h,b,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(D=u.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const J=["Default","DefaultChecked","Disabled","CustomDataAttribute"];export{u as CustomDataAttribute,s as Default,r as DefaultChecked,o as Disabled,J as __namedExportsOrder,H as default};
