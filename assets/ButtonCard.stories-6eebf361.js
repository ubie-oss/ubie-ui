import{j as s}from"./jsx-runtime-69eee039.js";import{v as P}from"./v4-4a60fe23.js";import{r as T}from"./index-7c191284.js";import{F}from"./Flex-4fbea599.js";import"./clsx-1229b3e0.js";import"./style-62efef97.js";const V="_card_svj3o_1",N={card:V},n=T.forwardRef(({children:t,type:r="button",...e},o)=>s.jsx("button",{type:r,ref:o,className:N.card,...e,children:t}));n.displayName="ButtonCard";try{n.displayName="ButtonCard",n.__docgenInfo={description:"",displayName:"ButtonCard",props:{}}}catch{}const{addons:z}=__STORYBOOK_MODULE_PREVIEW_API__,{global:f}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:K}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var L="storybook/actions",W=`${L}/action-event`,Y={depth:10,clearOnStoryChange:!0,limit:50},S=(t,r)=>{let e=Object.getPrototypeOf(t);return!e||r(e)?e:S(e,r)},M=t=>!!(typeof t=="object"&&t&&S(t,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof t.persist=="function"),U=t=>{if(M(t)){let r=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));r.persist();let e=Object.getOwnPropertyDescriptor(r,"view"),o=e==null?void 0:e.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...e,value:Object.create(o.constructor.prototype)}),r}return t},k=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?P():Date.now().toString(36)+Math.random().toString(36).substring(2);function H(t,r={}){let e={...Y,...r},o=function(...l){var _,m;if(r.implicit){let g=(_="__STORYBOOK_PREVIEW__"in f?f.__STORYBOOK_PREVIEW__:void 0)==null?void 0:_.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(g){let a=!((m=window==null?void 0:window.FEATURES)!=null&&m.disallowImplicitActionsInRenderV8),O=new K({phase:g.phase,name:t,deprecated:a});if(a)console.warn(O);else throw O}}let A=z.getChannel(),C=k(),w=5,u=l.map(U),v=l.length>1?u:u[0],I={id:C,count:0,data:{name:t,args:v},options:{...e,maxDepth:w+(e.depth||3),allowFunction:e.allowFunction||!1}};A.emit(W,I)};return o.isAction=!0,o.implicit=r.implicit,o}const Z={title:"Form/ButtonCard",component:n,args:{onClick:H("on click"),children:"自分"}},p={},c={render:t=>s.jsx(n,{...t}),args:p},i={render:t=>s.jsx(n,{...t}),args:{...p,disabled:!0}},d={render:t=>s.jsxs(F,{spacing:"xs",children:[s.jsx(n,{...t}),s.jsx(n,{...t})]}),args:{...p}};var y,E,R;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <ButtonCard {...args} />,
  args: defaultArgs
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var h,j,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ButtonCard {...args} />,
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var x,B,D;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Flex spacing="xs">
      <ButtonCard {...args} />
      <ButtonCard {...args} />
    </Flex>,
  args: {
    ...defaultArgs
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const tt=["Default","Disabled","Horizontal"];export{c as Default,i as Disabled,d as Horizontal,tt as __namedExportsOrder,Z as default};
