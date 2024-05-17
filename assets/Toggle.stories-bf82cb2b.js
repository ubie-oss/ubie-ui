import{j as n}from"./jsx-runtime-9c4ae004.js";import{c as p}from"./clsx-1229b3e0.js";import{r as u}from"./index-1b03fe98.js";const A="_root_87pzh_1",E="_on_87pzh_23",w="_off_87pzh_27",H="_thumb_87pzh_41",L="_thumbOn_87pzh_49",M="_thumbOff_87pzh_53",R="_input_87pzh_57",e={root:A,on:E,off:w,thumb:H,thumbOn:L,thumbOff:M,input:R},c=u.forwardRef(({checked:t,defaultChecked:z,onChange:i,...j},I)=>{const{current:l}=u.useRef(t===void 0),[N,S]=u.useState(z),d=l?N:t,q=m=>{l&&S(m.target.checked),i&&i(m)};return n.jsxs("label",{className:p(e.root,d?e.on:e.off),children:[n.jsx("input",{ref:I,type:"checkbox",role:"switch",checked:d,onChange:q,className:e.input,...j}),n.jsx("span",{className:p(e.thumb,d?e.thumbOn:e.thumbOff)})]})});c.displayName="Toggle";c.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"現在の状態が選択中かどうか"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`初期状態が選択状態かどうか
@default false`},onChange:{required:!1,tsType:{name:"InputHTMLAttributes['onChange']",raw:"InputHTMLAttributes<HTMLInputElement>['onChange']"},description:"値が変化した場合のコールバック"},disabled:{required:!1,tsType:{name:"boolean"},description:`無効状態かどうか
@default false`}}};const B={title:"Form/Toggle",component:c},s={},o={args:{defaultChecked:!0}},r={args:{disabled:!0}},a={args:{"data-test-id":"toggle-custom-attribute"},render:t=>n.jsx(c,{...t})};var f,h,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,_,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
