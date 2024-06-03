import{j as e}from"./jsx-runtime-69eee039.js";import{S as R,a as c,I as W}from"./Icon-d25e7e8b.js";import{c as w}from"./clsx-1229b3e0.js";import{r as m}from"./index-7c191284.js";import{S as p}from"./Stack-495f0d7b.js";import"./ArrowBDownIcon-86826e18.js";import"./TrashIcon-de957c6c.js";import"./CheckAIcon-ee8e3678.js";import"./ThumbUpOutlineIcon-17e2fa33.js";import"./UbieIcon-105662b4.js";import"./UnfoldMoreIcon-402a05cb.js";import"./style-e9a2251f.js";const J="_card_1g98s_1",X="_icon_1g98s_15",O="_text_1g98s_26",P="_title_1g98s_33",T="_description_1g98s_40",U="_caret_1g98s_47",G="_medium_1g98s_54",K="_small_1g98s_61",t={card:J,icon:X,text:O,title:P,description:T,caret:U,medium:G,small:K},M=u=>m.isValidElement(u),Q=u=>{if(u==null)return null;if(M(u))return u;const d=u;return e.jsx(d,{})},s=m.forwardRef(({title:u,size:d="medium",className:z,icon:C,description:f,render:E,...V},q)=>{const H=w(t[d],t.card,z);return((g,A)=>E?m.cloneElement(E,g,A):e.jsx("a",{...g,children:A}))({className:H,...V,ref:q},e.jsxs(e.Fragment,{children:[C!=null&&e.jsx("span",{className:t.icon,children:Q(C)}),e.jsxs("div",{className:t.text,children:[e.jsx("p",{className:t.title,children:u}),f&&e.jsx("p",{className:t.description,children:f})]}),e.jsx(R,{className:t.caret})]}))});s.displayName="LinkCard";try{s.displayName="LinkCard",s.__docgenInfo={description:"",displayName:"LinkCard",props:{href:{defaultValue:null,description:"遷移先URL",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},title:{defaultValue:null,description:"見出しのテキスト",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"説明のテキスト",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSSのクラス
*
@deprecated マージンなどをつけたい場合は<Box>や<Stack>を使ってください`,name:"className",required:!1,type:{name:"string"}},render:{defaultValue:null,description:"レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定",name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ComponentType"}}}}}catch{}const cu={component:s},r={title:"見出しテキスト"},a={render:u=>e.jsxs(p,{spacing:"md",alignItems:"normal",children:[e.jsx(s,{...u,href:"https://vitals.ubie.life/"}),e.jsx(s,{...u,href:"https://vitals.ubie.life/"})]}),args:r},i={render:u=>e.jsxs(p,{spacing:"md",children:[e.jsx(s,{...u,href:"https://vitals.ubie.life/",icon:c}),e.jsx(s,{...u,href:"https://vitals.ubie.life/",icon:e.jsx(W,{icon:"HospitalIcon"})})]}),args:r},n={render:u=>e.jsx(s,{...u,href:"https://vitals.ubie.life/",icon:c}),args:{...r,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"}},l={render:u=>e.jsxs(p,{spacing:"md",alignItems:"normal",children:[e.jsx(s,{...u,href:"https://vitals.ubie.life/",size:"small"}),e.jsx(s,{...u,href:"https://vitals.ubie.life/",icon:c,size:"small"}),e.jsx(s,{...u,href:"https://vitals.ubie.life/",icon:c,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。",size:"small"})]}),args:r},o={render:u=>e.jsx(s,{...u,href:"https://vitals.ubie.life/"}),args:{...r,"data-test-id":"link-card-custom-attribute"}};var F,h,_;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Stack spacing="md" alignItems="normal">
      <LinkCard {...args} href="https://vitals.ubie.life/" />
      <LinkCard {...args} href="https://vitals.ubie.life/" />
    </Stack>,
  args: defaultArgs
}`,...(_=(h=a.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var B,x,v;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Stack spacing="md">
      <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />
      <LinkCard {...args} href="https://vitals.ubie.life/" icon={<Icon icon="HospitalIcon" />} />
    </Stack>,
  args: defaultArgs
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,k,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />,
  args: {
    ...defaultArgs,
    description: 'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。'
  }
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var b,I,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    return <Stack spacing="md" alignItems="normal">
        <LinkCard {...args} href="https://vitals.ubie.life/" size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。" size="small" />
      </Stack>;
  },
  args: defaultArgs
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var L,D,N;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" />,
  args: {
    ...defaultArgs,
    'data-test-id': 'link-card-custom-attribute'
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const du=["Default","WithIcon","WithDescription","SizeSmall","CustomDataAttribute"];export{o as CustomDataAttribute,a as Default,l as SizeSmall,n as WithDescription,i as WithIcon,du as __namedExportsOrder,cu as default};
