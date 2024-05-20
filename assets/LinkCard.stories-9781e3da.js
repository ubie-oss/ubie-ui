import{j as u}from"./jsx-runtime-69eee039.js";import{c as R}from"./clsx-1229b3e0.js";import{r as g}from"./index-7c191284.js";import{S as y}from"./Stack-53f1d35e.js";import"./style-e9a2251f.js";function q(e){return u.jsx("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:u.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.8839 12.8839C17.372 12.3957 17.372 11.6043 16.8839 11.1161L8.88388 3.11612C8.39573 2.62796 7.60427 2.62796 7.11612 3.11612C6.62796 3.60427 6.62796 4.39573 7.11612 4.88388L14.2322 12L7.11612 19.1161C6.62796 19.6043 6.62796 20.3957 7.11612 20.8839C7.60427 21.372 8.39573 21.372 8.88388 20.8839L16.8839 12.8839Z",fill:"currentColor"},void 0)}),void 0)}function c(e){return u.jsxs("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:[u.jsx("path",{d:"M13 10.5V9H14.5V7H13V5.5L11 5.5V7H9.5V9H11V10.5H13Z",fill:"currentColor"},void 0),u.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 22C2.89543 22 2 21.1046 2 20V9C2 7.89543 2.89543 7 4 7H5.5V4C5.5 2.89543 6.39543 2 7.5 2H16.5C17.6046 2 18.5 2.89543 18.5 4V7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4ZM4 9H7.5V4L16.5 4V9H20V20H16V14C16 13.4477 15.5523 13 15 13H9C8.44772 13 8 13.4477 8 14V20H4V9ZM10 20H14V15H10V20Z",fill:"currentColor"},void 0)]}),void 0)}const M="_card_10dko_1",Z="_icon_10dko_15",W="_text_10dko_21",O="_title_10dko_28",J="_description_10dko_35",T="_caret_10dko_42",U="_medium_10dko_49",X="_small_10dko_56",r={card:M,icon:Z,text:W,title:O,description:J,caret:T,medium:U,small:X},s=g.forwardRef(({title:e,size:w="medium",className:D,icon:d,description:m,render:p,...I},N)=>{const z=R(r[w],r.card,D);return((C,f)=>p?g.cloneElement(p,C,f):u.jsx("a",{...C,children:f}))({className:z,...I,ref:N},u.jsxs(u.Fragment,{children:[d&&u.jsx(d,{className:r.icon}),u.jsxs("div",{className:r.text,children:[u.jsx("p",{className:r.title,children:e}),m&&u.jsx("p",{className:r.description,children:m})]}),u.jsx(q,{className:r.caret})]}))});s.displayName="LinkCard";try{s.displayName="LinkCard",s.__docgenInfo={description:"",displayName:"LinkCard",props:{href:{defaultValue:null,description:"遷移先URL",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},title:{defaultValue:null,description:"見出しのテキスト",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"説明のテキスト",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSSのクラス
*
@deprecated マージンなどをつけたい場合は<Box>や<Stack>を使ってください`,name:"className",required:!1,type:{name:"string"}},render:{defaultValue:null,description:"レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定",name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:"ComponentType<{ className?: string; }>"}}}}}catch{}const uu={component:s},t={title:"見出しテキスト"},a={render:e=>u.jsxs(y,{spacing:"md",alignItems:"normal",children:[u.jsx(s,{...e,href:"https://vitals.ubie.life/"}),u.jsx(s,{...e,href:"https://vitals.ubie.life/"})]}),args:t},i={render:e=>u.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:c}),args:t},n={render:e=>u.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:c}),args:{...t,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"}},l={render:e=>u.jsxs(y,{spacing:"md",alignItems:"normal",children:[u.jsx(s,{...e,href:"https://vitals.ubie.life/",size:"small"}),u.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:c,size:"small"}),u.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:c,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。",size:"small"})]}),args:t},o={render:e=>u.jsx(s,{...e,href:"https://vitals.ubie.life/"}),args:{...t,"data-test-id":"link-card-custom-attribute"}};var E,h,A;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Stack spacing="md" alignItems="normal">
      <LinkCard {...args} href="https://vitals.ubie.life/" />
      <LinkCard {...args} href="https://vitals.ubie.life/" />
    </Stack>,
  args: defaultArgs
}`,...(A=(h=a.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var F,v,x;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />,
  args: defaultArgs
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var B,_,k;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />,
  args: {
    ...defaultArgs,
    description: 'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。'
  }
}`,...(k=(_=n.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var j,V,b;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    return <Stack spacing="md" alignItems="normal">
        <LinkCard {...args} href="https://vitals.ubie.life/" size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。" size="small" />
      </Stack>;
  },
  args: defaultArgs
}`,...(b=(V=l.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var H,S,L;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" />,
  args: {
    ...defaultArgs,
    'data-test-id': 'link-card-custom-attribute'
  }
}`,...(L=(S=o.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const eu=["Default","WithIcon","WithDescription","SizeSmall","CustomDataAttribute"];export{o as CustomDataAttribute,a as Default,l as SizeSmall,n as WithDescription,i as WithIcon,eu as __namedExportsOrder,uu as default};
