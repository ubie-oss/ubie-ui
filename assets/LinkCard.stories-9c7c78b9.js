import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as M}from"./clsx-1229b3e0.js";import{r as h}from"./index-1b03fe98.js";import{S as w}from"./Stack-8f9a2dc9.js";import"./style-d1e19ac4.js";function Z(u){return e.jsx("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u,{children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.8839 12.8839C17.372 12.3957 17.372 11.6043 16.8839 11.1161L8.88388 3.11612C8.39573 2.62796 7.60427 2.62796 7.11612 3.11612C6.62796 3.60427 6.62796 4.39573 7.11612 4.88388L14.2322 12L7.11612 19.1161C6.62796 19.6043 6.62796 20.3957 7.11612 20.8839C7.60427 21.372 8.39573 21.372 8.88388 20.8839L16.8839 12.8839Z",fill:"currentColor"},void 0)}),void 0)}function c(u){return e.jsxs("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u,{children:[e.jsx("path",{d:"M13 10.5V9H14.5V7H13V5.5L11 5.5V7H9.5V9H11V10.5H13Z",fill:"currentColor"},void 0),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 22C2.89543 22 2 21.1046 2 20V9C2 7.89543 2.89543 7 4 7H5.5V4C5.5 2.89543 6.39543 2 7.5 2H16.5C17.6046 2 18.5 2.89543 18.5 4V7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4ZM4 9H7.5V4L16.5 4V9H20V20H16V14C16 13.4477 15.5523 13 15 13H9C8.44772 13 8 13.4477 8 14V20H4V9ZM10 20H14V15H10V20Z",fill:"currentColor"},void 0)]}),void 0)}const W="_card_pbmrl_1",y="_icon_pbmrl_15",O="_text_pbmrl_21",q="_title_pbmrl_28",G="_description_pbmrl_35",J="_caret_pbmrl_42",K="_medium_pbmrl_49",P="_small_pbmrl_56",r={card:W,icon:y,text:O,title:q,description:G,caret:J,medium:K,small:P},s=h.forwardRef(({title:u,size:I="medium",className:z,icon:d,description:m,render:p,...N},R)=>{const D=M(r[I],r.card,z);return((C,f)=>p?h.cloneElement(p,C,f):e.jsx("a",{...C,children:f}))({className:D,...N,ref:R},e.jsxs(e.Fragment,{children:[d&&e.jsx(d,{className:r.icon}),e.jsxs("div",{className:r.text,children:[e.jsx("p",{className:r.title,children:u}),m&&e.jsx("p",{className:r.description,children:m})]}),e.jsx(Z,{className:r.caret})]}))});s.displayName="LinkCard";s.__docgenInfo={description:"",methods:[],displayName:"LinkCard",props:{size:{defaultValue:{value:"'medium'",computed:!1},required:!1}}};const ee={component:s},t={title:"見出しテキスト"},a={render:u=>e.jsxs(w,{spacing:"md",alignItems:"normal",children:[e.jsx(s,{...u,href:"https://vitals.ubie.life/"}),e.jsx(s,{...u,href:"https://vitals.ubie.life/"})]}),args:t},i={render:u=>e.jsx(s,{...u,href:"https://vitals.ubie.life/",icon:c}),args:t},n={render:u=>e.jsx(s,{...u,href:"https://vitals.ubie.life/",icon:c}),args:{...t,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"}},l={render:u=>e.jsxs(w,{spacing:"md",alignItems:"normal",children:[e.jsx(s,{...u,href:"https://vitals.ubie.life/",size:"small"}),e.jsx(s,{...u,href:"https://vitals.ubie.life/",icon:c,size:"small"}),e.jsx(s,{...u,href:"https://vitals.ubie.life/",icon:c,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。",size:"small"})]}),args:t},o={render:u=>e.jsx(s,{...u,href:"https://vitals.ubie.life/"}),args:{...t,"data-test-id":"link-card-custom-attribute"}};var g,E,A;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Stack spacing="md" alignItems="normal">
      <LinkCard {...args} href="https://vitals.ubie.life/" />
      <LinkCard {...args} href="https://vitals.ubie.life/" />
    </Stack>,
  args: defaultArgs
}`,...(A=(E=a.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var x,v,F;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />,
  args: defaultArgs
}`,...(F=(v=i.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var b,_,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />,
  args: {
    ...defaultArgs,
    description: 'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。'
  }
}`,...(j=(_=n.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var B,H,k;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => {
    return <Stack spacing="md" alignItems="normal">
        <LinkCard {...args} href="https://vitals.ubie.life/" size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。" size="small" />
      </Stack>;
  },
  args: defaultArgs
}`,...(k=(H=l.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var V,L,S;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" />,
  args: {
    ...defaultArgs,
    'data-test-id': 'link-card-custom-attribute'
  }
}`,...(S=(L=o.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const ue=["Default","WithIcon","WithDescription","SizeSmall","CustomDataAttribute"];export{o as CustomDataAttribute,a as Default,l as SizeSmall,n as WithDescription,i as WithIcon,ue as __namedExportsOrder,ee as default};
