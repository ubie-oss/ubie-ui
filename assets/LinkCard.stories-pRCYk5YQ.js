import{j as t}from"./jsx-runtime-BJwPuJt0.js";import{A as J,I as q,H as a}from"./Icon-BS3BzWco.js";import{c as O}from"./clsx-B-dksMZM.js";import{r as f}from"./index-DX35FyXq.js";import{S as m}from"./Stack-g6MWvloX.js";import"./ArrowBDownIcon-DHfX99Bt.js";import"./UbieIcon-Dt0Travo.js";import"./UnfoldMoreIcon-N-Pb1J02.js";import"./style-D1Pgu1yr.js";const U="_card_1nkwn_1",X="_icon_1nkwn_21",G="_text_1nkwn_32",K="_title_1nkwn_39",M="_description_1nkwn_46",Q="_caret_1nkwn_53",Y="_medium_1nkwn_60",Z="_small_1nkwn_67",r={card:U,icon:X,text:G,title:K,description:M,caret:Q,medium:Y,small:Z},$=e=>f.isValidElement(e),ee=e=>{if(e==null)return null;if(typeof e=="string")return t.jsx(q,{icon:e});if($(e))return e;const p=e;return t.jsx(p,{})},s=f.forwardRef(({title:e,size:p="medium",className:R,icon:h,description:g,render:C,...W},T)=>{const P=O(r[p],r.card,R);return((x,_)=>C?f.cloneElement(C,x,_):t.jsx("a",{...x,children:_}))({className:P,...W,ref:T},t.jsxs(t.Fragment,{children:[h!=null&&t.jsx("span",{className:r.icon,children:ee(h)}),t.jsxs("div",{className:r.text,children:[t.jsx("p",{className:r.title,children:e}),g&&t.jsx("p",{className:r.description,children:g})]}),t.jsx(J,{className:r.caret})]}))});s.displayName="LinkCard";try{s.displayName="LinkCard",s.__docgenInfo={description:"",displayName:"LinkCard",props:{href:{defaultValue:null,description:"遷移先URL",name:"href",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},title:{defaultValue:null,description:"見出しのテキスト",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"説明のテキスト",name:"description",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSSのクラス
*
@deprecated マージンなどをつけたい場合は<Box>や<Stack>を使ってください`,name:"className",required:!1,type:{name:"string"}},render:{defaultValue:null,description:"レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定",name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:"IconProp"}}}}}catch{}const de={component:s},i={title:"見出しテキスト"},n={render:e=>t.jsxs(m,{spacing:"md",alignItems:"normal",children:[t.jsx(s,{...e,href:"https://vitals.ubie.life/"}),t.jsx(s,{...e,href:"https://vitals.ubie.life/"})]}),args:i},u={render:e=>t.jsxs(m,{spacing:"md",children:[t.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:a}),t.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:t.jsx(q,{icon:"HospitalIcon"})})]}),args:i},l={render:e=>t.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:a}),args:{...i,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。"}},o={render:e=>t.jsxs(m,{spacing:"md",alignItems:"normal",children:[t.jsx(s,{...e,href:"https://vitals.ubie.life/",size:"small"}),t.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:a,size:"small"}),t.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:a,description:"これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。",size:"small"})]}),args:i},c={render:e=>t.jsx(s,{...e,href:"https://vitals.ubie.life/"}),args:{...i,"data-test-id":"link-card-custom-attribute"}},d={render:e=>t.jsxs(m,{spacing:"md",children:[t.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:"HospitalIcon",title:"Icon Name"}),t.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:t.jsx(a,{}),title:"RectElement"}),t.jsx(s,{...e,href:"https://vitals.ubie.life/",icon:a,title:"ComponentType"})]}),args:i};var k,j,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Stack spacing="md" alignItems="normal">
      <LinkCard {...args} href="https://vitals.ubie.life/" />
      <LinkCard {...args} href="https://vitals.ubie.life/" />
    </Stack>,
  args: defaultArgs
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var I,b,A;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Stack spacing="md">
      <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />
      <LinkCard {...args} href="https://vitals.ubie.life/" icon={<Icon icon="HospitalIcon" />} />
    </Stack>,
  args: defaultArgs
}`,...(A=(b=u.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var S,E,F;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} />,
  args: {
    ...defaultArgs,
    description: 'これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。'
  }
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var y,L,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    return <Stack spacing="md" alignItems="normal">
        <LinkCard {...args} href="https://vitals.ubie.life/" size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} size="small" />
        <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} description="これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。これはこのカードの遷移先の説明です。" size="small" />
      </Stack>;
  },
  args: defaultArgs
}`,...(B=(L=o.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var D,N,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <LinkCard {...args} href="https://vitals.ubie.life/" />,
  args: {
    ...defaultArgs,
    'data-test-id': 'link-card-custom-attribute'
  }
}`,...(H=(N=c.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var V,w,z;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <Stack spacing="md">
      <LinkCard {...args} href="https://vitals.ubie.life/" icon="HospitalIcon" title="Icon Name" />
      <LinkCard {...args} href="https://vitals.ubie.life/" icon={<HospitalIcon />} title="RectElement" />
      <LinkCard {...args} href="https://vitals.ubie.life/" icon={HospitalIcon} title="ComponentType" />
    </Stack>,
  args: defaultArgs
}`,...(z=(w=d.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const me=["Default","WithIcon","WithDescription","SizeSmall","CustomDataAttribute","VariousWaysToSpecifyIcon"];export{c as CustomDataAttribute,n as Default,o as SizeSmall,d as VariousWaysToSpecifyIcon,l as WithDescription,u as WithIcon,me as __namedExportsOrder,de as default};
