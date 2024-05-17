import{j as n}from"./jsx-runtime-9c4ae004.js";import{c as f}from"./clsx-1229b3e0.js";import{r as u}from"./index-1b03fe98.js";const E="_root_1uifd_1",w="_on_1uifd_23",H="_off_1uifd_27",L="_thumb_1uifd_41",M="_thumbOn_1uifd_49",R="_thumbOff_1uifd_53",U="_input_1uifd_57",e={root:E,on:w,off:H,thumb:L,thumbOn:M,thumbOff:R,input:U},c=u.forwardRef(({checked:t,defaultChecked:j,onChange:i,...I},N)=>{const{current:l}=u.useRef(t===void 0),[S,q]=u.useState(j),d=l?S:t,A=m=>{l&&q(m.target.checked),i&&i(m)};return n.jsxs("label",{className:f(e.root,d?e.on:e.off),children:[n.jsx("input",{ref:N,type:"checkbox",role:"switch",checked:d,onChange:A,className:e.input,...I}),n.jsx("span",{className:f(e.thumb,d?e.thumbOn:e.thumbOff)})]})});c.displayName="Toggle";c.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"現在の状態が選択中かどうか"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`初期状態が選択状態かどうか
@default false`},onChange:{required:!1,tsType:{name:"InputHTMLAttributes['onChange']",raw:"InputHTMLAttributes<HTMLInputElement>['onChange']"},description:"値が変化した場合のコールバック"},disabled:{required:!1,tsType:{name:"boolean"},description:`無効状態かどうか
@default false`}}};const B={title:"Form/Toggle",component:c},s={},o={args:{defaultChecked:!0}},r={args:{disabled:!0}},a={args:{"data-test-id":"toggle-custom-attribute"},render:t=>n.jsx(c,{...t})};var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,_,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var T,k,x;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(k=r.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var O,y,D;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'toggle-custom-attribute'
  },
  render: args => <Toggle {...args} />
}`,...(D=(y=a.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const G=["Default","DefaultChecked","Disabled","CustomDataAttribute"];export{a as CustomDataAttribute,s as Default,o as DefaultChecked,r as Disabled,G as __namedExportsOrder,B as default};
