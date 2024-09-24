import{j as a}from"./jsx-runtime-BJwPuJt0.js";import{v as N}from"./v4-CQkTLCs1.js";import{r as W}from"./index-DX35FyXq.js";import{B as z}from"./Box-CN3-KJuv.js";import{F as K}from"./Flex-BXhwPs8f.js";import"./clsx-B-dksMZM.js";import"./style-D1Pgu1yr.js";const L="_card_3a4th_1",Y={card:L},n=W.forwardRef(({children:r,type:t="button",...e},o)=>a.jsx("button",{type:t,ref:o,className:Y.card,...e,children:r}));n.displayName="ButtonCard";try{n.displayName="ButtonCard",n.__docgenInfo={description:"",displayName:"ButtonCard",props:{}}}catch{}const{addons:M}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:U}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var k="storybook/actions",H=`${k}/action-event`,$={depth:10,clearOnStoryChange:!0,limit:50},I=(r,t)=>{let e=Object.getPrototypeOf(r);return!e||t(e)?e:I(e,t)},G=r=>!!(typeof r=="object"&&r&&I(r,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof r.persist=="function"),q=r=>{if(G(r)){let t=Object.create(r.constructor.prototype,Object.getOwnPropertyDescriptors(r));t.persist();let e=Object.getOwnPropertyDescriptor(t,"view"),o=e==null?void 0:e.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...e,value:Object.create(o.constructor.prototype)}),t}return r},J=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?N():Date.now().toString(36)+Math.random().toString(36).substring(2);function Q(r,t={}){let e={...$,...t},o=function(...u){var g,_;if(t.implicit){let f=(g="__STORYBOOK_PREVIEW__"in y?y.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(s=>s.phase==="playing"||s.phase==="rendering");if(f){let s=!((_=window==null?void 0:window.FEATURES)!=null&&_.disallowImplicitActionsInRenderV8),O=new U({phase:f.phase,name:r,deprecated:s});if(s)console.warn(O);else throw O}}let v=M.getChannel(),T=J(),P=5,m=u.map(q),F=u.length>1?m:m[0],V={id:T,count:0,data:{name:r,args:F},options:{...e,maxDepth:P+(e.depth||3),allowFunction:e.allowFunction||!1}};v.emit(H,V)};return o.isAction=!0,o.implicit=t.implicit,o}const ar={title:"Form/ButtonCard",component:n,args:{onClick:Q("on click"),children:"自分"}},l={},c={render:r=>a.jsx(n,{...r}),args:l},i={render:r=>a.jsx(z,{width:"200px",children:a.jsx(n,{...r})}),args:{...l,children:"自分自分自分自分自分自分自分自分自分自分自分自分自分自分自分自分"}},d={render:r=>a.jsx(n,{...r}),args:{...l,disabled:!0}},p={render:r=>a.jsxs(K,{spacing:"xs",children:[a.jsx(n,{...r}),a.jsx(n,{...r})]}),args:{...l}};var h,x,E;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ButtonCard {...args} />,
  args: defaultArgs
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var B,R,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Box width="200px">
      <ButtonCard {...args} />
    </Box>,
  args: {
    ...defaultArgs,
    children: '自分自分自分自分自分自分自分自分自分自分自分自分自分自分自分自分'
  }
}`,...(j=(R=i.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var b,D,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <ButtonCard {...args} />,
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(S=(D=d.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var w,A,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Flex spacing="xs">
      <ButtonCard {...args} />
      <ButtonCard {...args} />
    </Flex>,
  args: {
    ...defaultArgs
  }
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const sr=["Default","WrapText","Disabled","Horizontal"];export{c as Default,d as Disabled,p as Horizontal,i as WrapText,sr as __namedExportsOrder,ar as default};
