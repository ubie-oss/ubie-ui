import{j as a}from"./jsx-runtime-BJwPuJt0.js";import{c as W}from"./clsx-B-dksMZM.js";import{r as w}from"./index-DX35FyXq.js";import{m as T,w as M}from"./style-D1Pgu1yr.js";import{S as N}from"./Stack-C1hM1lik.js";const R="_divider_76e26_1",I="_gray_76e26_10",O="_primary_76e26_14",d={divider:R,gray:I,primary:O},e=w.forwardRef(({border:u="gray",m:B,mx:A,my:C,mt:F,mr:S,mb:_,ml:h,width:V,minWidth:b,maxWidth:q,...k},j)=>a.jsx("hr",{className:W(d.divider,d[u]),style:{...T({m:B,mx:A,my:C,mt:F,mr:S,mb:_,ml:h}),...M({width:V,minWidth:b,maxWidth:q})},ref:j,...k}));e.displayName="Divider";try{e.displayName="Divider",e.__docgenInfo={description:"",displayName:"Divider",props:{border:{defaultValue:{value:"gray"},description:"ボーダーの種類",name:"border",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"gray"'}]}},width:{defaultValue:{value:"auto"},description:"幅を指定",name:"width",required:!1,type:{name:"CSSWitdh"}},minWidth:{defaultValue:{value:"auto"},description:"最小幅",name:"minWidth",required:!1,type:{name:"CSSMinWidth"}},maxWidth:{defaultValue:{value:"none"},description:"最大幅",name:"maxWidth",required:!1,type:{name:"CSSMaxWidth"}},m:{defaultValue:null,description:`四方のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"m",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mx:{defaultValue:null,description:`水平方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mx",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},my:{defaultValue:null,description:`垂直方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"my",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mt:{defaultValue:null,description:"上方向のマージン。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:`右方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mr",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:`下方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mb",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:`左方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"ml",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}}}}}catch{}const L={component:e},n={border:"gray"},r={render:u=>a.jsx(e,{...u}),args:n},l={render:()=>a.jsxs(N,{spacing:"md",children:[a.jsx(e,{border:"gray"}),a.jsx(e,{border:"primary"})]})},s={render:u=>a.jsx(e,{...u}),args:{...n,mt:"md",mr:"lg",mb:"xl",ml:"xxl"}},x={render:u=>a.jsx(e,{...u}),args:{...n,width:"50%"}};var m,i,t;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Divider {...args} />,
  args: defaultArgs
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var p,o,v;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Stack spacing="md">
        <Divider border="gray" />
        <Divider border="primary" />
      </Stack>;
  }
}`,...(v=(o=l.parameters)==null?void 0:o.docs)==null?void 0:v.source}}};var c,g,E;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Divider {...args} />,
  args: {
    ...defaultArgs,
    mt: 'md',
    mr: 'lg',
    mb: 'xl',
    ml: 'xxl'
  }
}`,...(E=(g=s.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var f,y,D;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Divider {...args} />,
  args: {
    ...defaultArgs,
    width: '50%'
  }
}`,...(D=(y=x.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const P=["Default","BorderVariants","Margins","Width"];export{l as BorderVariants,r as Default,s as Margins,x as Width,P as __namedExportsOrder,L as default};
