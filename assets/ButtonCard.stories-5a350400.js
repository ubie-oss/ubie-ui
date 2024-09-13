import{j as a}from"./jsx-runtime-69eee039.js";import{v as N}from"./v4-4a60fe23.js";import{r as W}from"./index-7c191284.js";import{B as z}from"./Box-e70db646.js";import{F as K}from"./Flex-367114be.js";import"./clsx-1229b3e0.js";import"./style-282c756e.js";const L="_card_3a4th_1",Y={card:L},n=W.forwardRef(({children:r,type:t="button",...e},o)=>a.jsx("button",{type:t,ref:o,className:Y.card,...e,children:r}));n.displayName="ButtonCard";try{n.displayName="ButtonCard",n.__docgenInfo={description:"",displayName:"ButtonCard",props:{}}}catch{}const{addons:M}=__STORYBOOK_MODULE_PREVIEW_API__,{global:O}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:U}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var k="storybook/actions",H=`${k}/action-event`,$={depth:10,clearOnStoryChange:!0,limit:50},I=(r,t)=>{let e=Object.getPrototypeOf(r);return!e||t(e)?e:I(e,t)},G=r=>!!(typeof r=="object"&&r&&I(r,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof r.persist=="function"),q=r=>{if(G(r)){let t=Object.create(r.constructor.prototype,Object.getOwnPropertyDescriptors(r));t.persist();let e=Object.getOwnPropertyDescriptor(t,"view"),o=e==null?void 0:e.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...e,value:Object.create(o.constructor.prototype)}),t}return r},J=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?N():Date.now().toString(36)+Math.random().toString(36).substring(2);function Q(r,t={}){let e={...$,...t},o=function(...l){var g,_;if(t.implicit){let E=(g="__STORYBOOK_PREVIEW__"in O?O.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(E){let s=!((_=window==null?void 0:window.FEATURES)!=null&&_.disallowImplicitActionsInRenderV8),f=new U({phase:E.phase,name:r,deprecated:s});if(s)console.warn(f);else throw f}}let v=M.getChannel(),T=J(),P=5,m=l.map(q),F=l.length>1?m:m[0],V={id:T,count:0,data:{name:r,args:F},options:{...e,maxDepth:P+(e.depth||3),allowFunction:e.allowFunction||!1}};v.emit(H,V)};return o.isAction=!0,o.implicit=t.implicit,o}const ar={title:"Form/ButtonCard",component:n,args:{onClick:Q("on click"),children:"自分"}},p={},c={render:r=>a.jsx(n,{...r}),args:p},i={render:r=>a.jsx(z,{width:"200px",children:a.jsx(n,{...r})}),args:{...p,children:"自分自分自分自分自分自分自分自分自分自分自分自分自分自分自分自分"}},d={render:r=>a.jsx(n,{...r}),args:{...p,disabled:!0}},u={render:r=>a.jsxs(K,{spacing:"xs",children:[a.jsx(n,{...r}),a.jsx(n,{...r})]}),args:{...p}};var A,y,h;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <ButtonCard {...args} />,
  args: defaultArgs
}`,...(h=(y=c.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,B,R;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Box width="200px">
      <ButtonCard {...args} />
    </Box>,
  args: {
    ...defaultArgs,
    children: '自分自分自分自分自分自分自分自分自分自分自分自分自分自分自分自分'
  }
}`,...(R=(B=i.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var j,b,D;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ButtonCard {...args} />,
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(D=(b=d.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var S,w,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Flex spacing="xs">
      <ButtonCard {...args} />
      <ButtonCard {...args} />
    </Flex>,
  args: {
    ...defaultArgs
  }
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const sr=["Default","WrapText","Disabled","Horizontal"];export{c as Default,d as Disabled,u as Horizontal,i as WrapText,sr as __namedExportsOrder,ar as default};
