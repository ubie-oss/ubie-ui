import{j as a}from"./jsx-runtime-9c4ae004.js";import{c as f}from"./clsx-1229b3e0.js";import{r as n}from"./index-1b03fe98.js";const N="_root_1uifd_1",q="_on_1uifd_23",E="_off_1uifd_27",S="_thumb_1uifd_41",w="_thumbOn_1uifd_49",H="_thumbOff_1uifd_53",L="_input_1uifd_57",e={root:N,on:q,off:E,thumb:S,thumbOn:w,thumbOff:H,input:L},c=n.forwardRef(({checked:d,defaultChecked:x,onChange:u,...O},y)=>{const{current:i}=n.useRef(d===void 0),[D,j]=n.useState(x),r=i?D:d,I=l=>{i&&j(l.target.checked),u&&u(l)};return a.jsxs("label",{ref:y,className:f(e.root,r?e.on:e.off),children:[a.jsx("input",{type:"checkbox",role:"switch",checked:r,onChange:I,className:e.input,...O}),a.jsx("span",{className:f(e.thumb,r?e.thumbOn:e.thumbOff)})]})});c.displayName="Toggle";c.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"現在の状態が選択中かどうか"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:`初期状態が選択状態かどうか
@default false`},onChange:{required:!1,tsType:{name:"InputHTMLAttributes['onChange']",raw:"InputHTMLAttributes<HTMLInputElement>['onChange']"},description:"値が変化した場合のコールバック"},disabled:{required:!1,tsType:{name:"boolean"},description:`無効状態かどうか
@default false`}}};const A={title:"Form/Toggle",component:c},t={},s={args:{defaultChecked:!0}},o={args:{disabled:!0}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var _,b,g;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var C,k,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const F=["Default","DefaultChecked","Disabled"];export{t as Default,s as DefaultChecked,o as Disabled,F as __namedExportsOrder,A as default};
