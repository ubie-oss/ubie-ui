import{j as t}from"./jsx-runtime-B57y5fZt.js";import{A as q,H as c,I as R}from"./Icon-F3c9ObKA.js";import{c as W}from"./clsx-B-dksMZM.js";import{r as m}from"./index-ebcBgdYO.js";import{S as p}from"./Stack-C27sQmuN.js";import"./ArrowBDownIcon-BCJEnGoH.js";import"./TrashIcon-B_ewUANd.js";import"./ThumbUpOutlineIcon-BigBtPUM.js";import"./UbieIcon-B6eDHF2O.js";import"./UnfoldMoreIcon-BhaEsN1i.js";import"./style-BH_c6VN1.js";const J="_card_1nkwn_1",X="_icon_1nkwn_21",O="_text_1nkwn_32",P="_title_1nkwn_39",T="_description_1nkwn_46",U="_caret_1nkwn_53",G="_medium_1nkwn_60",K="_small_1nkwn_67",s={card:J,icon:X,text:O,title:P,description:T,caret:U,medium:G,small:K},M=e=>m.isValidElement(e),Q=e=>{if(e==null)return null;if(M(e))return e;const d=e;return t.jsx(d,{})},r=m.forwardRef(({title:e,size:d="medium",className:w,icon:f,description:g,render:h,...z},V)=>{const H=W(s[d],s.card,w);return((_,C)=>h?m.cloneElement(h,_,C):t.jsx("a",{..._,children:C}))({className:H,...z,ref:V},t.jsxs(t.Fragment,{children:[f!=null&&t.jsx("span",{className:s.icon,children:Q(f)}),t.jsxs("div",{className:s.text,children:[t.jsx("p",{className:s.title,children:e}),g&&t.jsx("p",{className:s.description,children:g})]}),t.jsx(q,{className:s.caret})]}))});r.displayName="LinkCard";try{r.displayName="LinkCard",r.__docgenInfo={description:"",displayName:"LinkCard",props:{href:{defaultValue:null,description:"遷移先URL",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},title:{defaultValue:null,description:"見出しのテキスト",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"説明のテキスト",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSSのクラス
*
@deprecated マージンなどをつけたい場合は<Box>や<Stack>を使ってください`,name:"className",required:!1,type:{name:"string"}},render:{defaultValue:null,description:"レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定",name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ComponentType"}}}}}catch{}const oe={component:r},a={title:"見出しテキスト"},n={render:e=>t.jsxs(p,{spacing:"md",alignItems:"normal",children:[t.jsx(r,{...e,href:"https://vitals.ubie.life/"}),t.jsx(r,{...e,href:"https://vitals.ubie.life/"})]}),args:a},i={render:e=>t.jsxs(p,{spacing:"md",children:[t.jsx(r,{...e,href:"https://vitals.ubie.life/",icon:c}),t.jsx(r,{...e,href:"https://vitals.ubie.life/",icon:t.jsx(R,{icon:"HospitalIcon"})})]}),args:a},u={render:e=>t.jsx(r,{...e,href:"https://vitals.ubie.life/",icon:c}),args:{...a,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"}},l={render:e=>t.jsxs(p,{spacing:"md",alignItems:"normal",children:[t.jsx(r,{...e,href:"https://vitals.ubie.life/",size:"small"}),t.jsx(r,{...e,href:"https://vitals.ubie.life/",icon:c,size:"small"}),t.jsx(r,{...e,href:"https://vitals.ubie.life/",icon:c,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。",size:"small"})]}),args:a},o={render:e=>t.jsx(r,{...e,href:"https://vitals.ubie.life/"}),args:{...a,"data-test-id":"link-card-custom-attribute"}};var k,x,A;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Stack spacing="md" alignItems="normal">
      <LinkCard {...args} href="https://vitals.ubie.life/" />
      <LinkCard {...args} href="https://vitals.ubie.life/" />
    </Stack>,
  args: defaultArgs
}`,...(A=(x=n.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var E,F,j;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Stack spacing="md">
      <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />
      <LinkCard {...args} href="https://vitals.ubie.life/" icon={<Icon icon="HospitalIcon" />} />
    </Stack>,
  args: defaultArgs
}`,...(j=(F=i.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var v,b,S;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />,
  args: {
    ...defaultArgs,
    description: 'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。'
  }
}`,...(S=(b=u.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var I,y,B;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    return <Stack spacing="md" alignItems="normal">
        <LinkCard {...args} href="https://vitals.ubie.life/" size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。" size="small" />
      </Stack>;
  },
  args: defaultArgs
}`,...(B=(y=l.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var L,D,N;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" />,
  args: {
    ...defaultArgs,
    'data-test-id': 'link-card-custom-attribute'
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const ce=["Default","WithIcon","WithDescription","SizeSmall","CustomDataAttribute"];export{o as CustomDataAttribute,n as Default,l as SizeSmall,u as WithDescription,i as WithIcon,ce as __namedExportsOrder,oe as default};
