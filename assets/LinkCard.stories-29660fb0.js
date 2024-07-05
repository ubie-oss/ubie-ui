import{j as e}from"./jsx-runtime-69eee039.js";import{b as R,c as o,I as W}from"./Icon-dce37118.js";import{c as w}from"./clsx-1229b3e0.js";import{r as m}from"./index-7c191284.js";import{S as p}from"./Stack-70714a9b.js";import"./ArrowBDownIcon-86826e18.js";import"./TrashIcon-de957c6c.js";import"./ThumbUpOutlineIcon-17e2fa33.js";import"./UbieIcon-105662b4.js";import"./UnfoldMoreIcon-402a05cb.js";import"./style-62efef97.js";const J="_card_13kff_1",X="_icon_13kff_21",O="_text_13kff_32",P="_title_13kff_39",T="_description_13kff_46",U="_caret_13kff_53",G="_medium_13kff_60",K="_small_13kff_67",r={card:J,icon:X,text:O,title:P,description:T,caret:U,medium:G,small:K},M=u=>m.isValidElement(u),Q=u=>{if(u==null)return null;if(M(u))return u;const d=u;return e.jsx(d,{})},t=m.forwardRef(({title:u,size:d="medium",className:z,icon:f,description:C,render:E,...V},q)=>{const H=w(r[d],r.card,z);return((A,F)=>E?m.cloneElement(E,A,F):e.jsx("a",{...A,children:F}))({className:H,...V,ref:q},e.jsxs(e.Fragment,{children:[f!=null&&e.jsx("span",{className:r.icon,children:Q(f)}),e.jsxs("div",{className:r.text,children:[e.jsx("p",{className:r.title,children:u}),C&&e.jsx("p",{className:r.description,children:C})]}),e.jsx(R,{className:r.caret})]}))});t.displayName="LinkCard";try{t.displayName="LinkCard",t.__docgenInfo={description:"",displayName:"LinkCard",props:{href:{defaultValue:null,description:"遷移先URL",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},title:{defaultValue:null,description:"見出しのテキスト",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"説明のテキスト",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSSのクラス
*
@deprecated マージンなどをつけたい場合は<Box>や<Stack>を使ってください`,name:"className",required:!1,type:{name:"string"}},render:{defaultValue:null,description:"レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定",name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ComponentType"}}}}}catch{}const cu={component:t},s={title:"見出しテキスト"},a={render:u=>e.jsxs(p,{spacing:"md",alignItems:"normal",children:[e.jsx(t,{...u,href:"https://vitals.ubie.life/"}),e.jsx(t,{...u,href:"https://vitals.ubie.life/"})]}),args:s},i={render:u=>e.jsxs(p,{spacing:"md",children:[e.jsx(t,{...u,href:"https://vitals.ubie.life/",icon:o}),e.jsx(t,{...u,href:"https://vitals.ubie.life/",icon:e.jsx(W,{icon:"HospitalIcon"})})]}),args:s},n={render:u=>e.jsx(t,{...u,href:"https://vitals.ubie.life/",icon:o}),args:{...s,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"}},l={render:u=>e.jsxs(p,{spacing:"md",alignItems:"normal",children:[e.jsx(t,{...u,href:"https://vitals.ubie.life/",size:"small"}),e.jsx(t,{...u,href:"https://vitals.ubie.life/",icon:o,size:"small"}),e.jsx(t,{...u,href:"https://vitals.ubie.life/",icon:o,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。",size:"small"})]}),args:s},c={render:u=>e.jsx(t,{...u,href:"https://vitals.ubie.life/"}),args:{...s,"data-test-id":"link-card-custom-attribute"}};var g,h,_;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Stack spacing="md" alignItems="normal">
      <LinkCard {...args} href="https://vitals.ubie.life/" />
      <LinkCard {...args} href="https://vitals.ubie.life/" />
    </Stack>,
  args: defaultArgs
}`,...(_=(h=a.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var B,k,x;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Stack spacing="md">
      <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />
      <LinkCard {...args} href="https://vitals.ubie.life/" icon={<Icon icon="HospitalIcon" />} />
    </Stack>,
  args: defaultArgs
}`,...(x=(k=i.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var v,S,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />,
  args: {
    ...defaultArgs,
    description: 'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。'
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var j,I,y;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    return <Stack spacing="md" alignItems="normal">
        <LinkCard {...args} href="https://vitals.ubie.life/" size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。" size="small" />
      </Stack>;
  },
  args: defaultArgs
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var L,D,N;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" />,
  args: {
    ...defaultArgs,
    'data-test-id': 'link-card-custom-attribute'
  }
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const ou=["Default","WithIcon","WithDescription","SizeSmall","CustomDataAttribute"];export{c as CustomDataAttribute,a as Default,l as SizeSmall,n as WithDescription,i as WithIcon,ou as __namedExportsOrder,cu as default};
