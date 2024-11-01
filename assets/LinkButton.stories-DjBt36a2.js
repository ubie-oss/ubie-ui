import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{T as v,B as n}from"./TrashIcon-DlD8Lef1.js";import{U as s}from"./UbieIcon-DZeUlYpH.js";import{c as ie}from"./clsx-B-dksMZM.js";import{r as L}from"./index-DX35FyXq.js";import{s as u,V as g}from"./VariantIcon-DS9gwvxu.js";import{m as oe}from"./style-D1Pgu1yr.js";import{S as i}from"./Stack-CGfCKGcX.js";const a=L.forwardRef(({render:l,children:H,variant:r="primary",size:K="large",block:Q=!1,icon:k,fixedIcon:B,suffixIcon:y,whiteSpace:Y="normal",m:Z,mx:$,my:ee,mt:ae,mr:te,mb:ne,ml:ue,...le},se)=>{const A=k==="default"?e.jsx(g,{variant:r}):k,j=B==="default"?e.jsx(g,{variant:r}):B,I=y==="default"?e.jsx(g,{variant:r}):y,re=ie({[u.button]:!0,[u[r]]:!0,[u[K]]:!0,[u.block]:Q});return((h,E)=>l?L.cloneElement(l,h,E):e.jsx("a",{...h,children:E}))({className:re,style:{...oe({m:Z,mx:$,my:ee,mt:ae,mr:te,mb:ne,ml:ue}),"--white-space":Y},...le,ref:se},e.jsxs(e.Fragment,{children:[j&&e.jsx("span",{className:u.fixedIcon,children:j}),e.jsxs("span",{className:u.label,children:[A&&e.jsx("span",{className:u.icon,children:A}),H,I&&e.jsx("span",{className:u.suffixIcon,children:I})]})]}))});a.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{children:{defaultValue:null,description:"ボタンのラベルとして表示する内容",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"ボタンの種類",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"accent"'},{value:'"alert"'},{value:'"text"'},{value:'"secondary"'},{value:'"textAlert"'},{value:'"authGoogle"'},{value:'"authLINE"'},{value:'"authApple"'}]}},size:{defaultValue:{value:"large"},description:"種類",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'},{value:'"large"'}]}},block:{defaultValue:{value:"false"},description:"横幅を100%占有するかどうか",name:"block",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:"ReactNode"}},fixedIcon:{defaultValue:null,description:"Fixedアイコン",name:"fixedIcon",required:!1,type:{name:"ReactNode"}},suffixIcon:{defaultValue:null,description:"後方配置のアイコン",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},whiteSpace:{defaultValue:{value:"normal"},description:"ラベルの折り返しを指定",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"pre"'},{value:'"normal"'},{value:'"pre-wrap"'},{value:'"pre-line"'},{value:'"break-spaces"'},{value:'"nowrap"'}]}},m:{defaultValue:null,description:`四方のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"m",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mx:{defaultValue:null,description:`水平方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mx",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},my:{defaultValue:null,description:`垂直方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"my",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mt:{defaultValue:null,description:"上方向のマージン。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:`右方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:`下方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:`左方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"ml",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},render:{defaultValue:null,description:"レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定",name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const Be={title:"Button/LinkButton",component:a},t={children:"ボタン",href:"https://vitals.ubie.life/"},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(a,{...t}),e.jsx(a,{...t,variant:"secondary"}),e.jsx(a,{...t,variant:"accent"}),e.jsx(a,{...t,variant:"alert"}),e.jsx(a,{...t,variant:"text"}),e.jsx(a,{...t,variant:"textAlert"})]})})},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(a,{...t,size:"small",children:"Small"}),e.jsx(a,{...t,size:"medium",children:"Medium"}),e.jsx(a,{...t,children:"Large"})]})})},x={render:()=>e.jsxs(i,{spacing:"lg",children:[e.jsxs(i,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Default Position"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(a,{icon:e.jsx(s,{}),...t}),e.jsx(a,{icon:e.jsx(s,{}),...t,variant:"secondary"}),e.jsx(a,{icon:e.jsx(s,{}),...t,variant:"accent"}),e.jsx(a,{icon:e.jsx(s,{}),...t,variant:"alert"}),e.jsx(a,{icon:e.jsx(s,{}),...t,variant:"text"}),e.jsx(a,{icon:e.jsx(v,{}),...t,variant:"textAlert"})]})})]}),e.jsxs(i,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(a,{suffixIcon:e.jsx(n,{}),...t}),e.jsx(a,{suffixIcon:e.jsx(n,{}),...t,variant:"secondary"}),e.jsx(a,{suffixIcon:e.jsx(n,{}),...t,variant:"accent"}),e.jsx(a,{suffixIcon:e.jsx(n,{}),...t,variant:"alert"}),e.jsx(a,{suffixIcon:e.jsx(n,{}),...t,variant:"text"}),e.jsx(a,{suffixIcon:e.jsx(n,{}),...t,variant:"textAlert"}),e.jsx(a,{suffixIcon:e.jsx(v,{}),...t,variant:"textAlert"})]})})]}),e.jsxs(i,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(a,{fixedIcon:e.jsx(n,{}),...t}),e.jsx(a,{fixedIcon:e.jsx(n,{}),...t,variant:"secondary"}),e.jsx(a,{fixedIcon:e.jsx(n,{}),...t,variant:"accent"}),e.jsx(a,{fixedIcon:e.jsx(n,{}),...t,variant:"alert"}),e.jsx(a,{fixedIcon:e.jsx(n,{}),...t,variant:"text"}),e.jsx(a,{fixedIcon:e.jsx(v,{}),...t,variant:"textAlert"})]})})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx("div",{children:e.jsx(a,{...t,size:"small",variant:"secondary",block:!0})}),e.jsx("div",{children:e.jsx(a,{...t,size:"medium",variant:"secondary",block:!0})}),e.jsx("div",{children:e.jsx(a,{...t,size:"large",variant:"secondary",block:!0})})]})},p={render:()=>e.jsx("div",{style:{backgroundColor:"var(--color-background-gray)",width:"fit-content",overflow:"hidden"},children:e.jsx(a,{...t,mt:"lg",mr:"lg",mb:"lg",ml:"lg"})})},m={args:{...t,"data-test-id":"link-button-custom-attribute"},render:l=>e.jsx(a,{...l,children:"Please enter in English"})},f={render:l=>e.jsx(a,{...l}),args:{...t,children:`[抽選で謝礼あり]
アンケートにご協力ください`,whiteSpace:"pre-wrap",block:!0}};var D,F,b;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '48px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '32px'
    }}>
        <LinkButton {...defaultArgs} />
        <LinkButton {...defaultArgs} variant="secondary" />
        <LinkButton {...defaultArgs} variant="accent" />
        <LinkButton {...defaultArgs} variant="alert" />
        <LinkButton {...defaultArgs} variant="text" />
        <LinkButton {...defaultArgs} variant="textAlert" />
      </div>
    </div>
}`,...(b=(F=o.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var C,S,w;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '48px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '32px'
    }}>
        <LinkButton {...defaultArgs} size="small">
          Small
        </LinkButton>
        <LinkButton {...defaultArgs} size="medium">
          Medium
        </LinkButton>
        <LinkButton {...defaultArgs}>Large</LinkButton>
      </div>
    </div>
}`,...(w=(S=d.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var V,q,z;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Stack spacing="lg">
      <Stack spacing="lg" as="dl">
        <dt style={{
        fontWeight: 'bold'
      }}>Default Position</dt>

        <dd style={{
        margin: 0
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '32px'
        }}>
            <LinkButton icon={<UbieIcon />} {...defaultArgs} />
            <LinkButton icon={<UbieIcon />} {...defaultArgs} variant="secondary" />
            <LinkButton icon={<UbieIcon />} {...defaultArgs} variant="accent" />
            <LinkButton icon={<UbieIcon />} {...defaultArgs} variant="alert" />
            <LinkButton icon={<UbieIcon />} {...defaultArgs} variant="text" />
            <LinkButton icon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{
        fontWeight: 'bold'
      }}>Position Suffix</dt>
        <dd style={{
        margin: 0
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '32px'
        }}>
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} />
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="secondary" />
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="accent" />
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="alert" />
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="text" />
            <LinkButton suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="textAlert" />
            <LinkButton suffixIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{
        fontWeight: 'bold'
      }}>Position Fixed</dt>

        <dd style={{
        margin: 0
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '32px'
        }}>
            <LinkButton fixedIcon={<BlankLinkIcon />} {...defaultArgs} />
            <LinkButton fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="secondary" />
            <LinkButton fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="accent" />
            <LinkButton fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="alert" />
            <LinkButton fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="text" />
            <LinkButton fixedIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>
    </Stack>
}`,...(z=(q=x.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var T,N,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <LinkButton {...defaultArgs} size="small" variant="secondary" block />
      </div>
      <div>
        <LinkButton {...defaultArgs} size="medium" variant="secondary" block />
      </div>
      <div>
        <LinkButton {...defaultArgs} size="large" variant="secondary" block />
      </div>
    </div>
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var W,P,R;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: 'var(--color-background-gray)',
    width: 'fit-content',
    overflow: 'hidden'
  }}>
      <LinkButton {...defaultArgs} mt="lg" mr="lg" mb="lg" ml="lg" />
    </div>
}`,...(R=(P=p.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,M,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    'data-test-id': 'link-button-custom-attribute'
  },
  render: args => <LinkButton {...args}>Please enter in English</LinkButton>
}`,...(G=(M=m.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var J,O,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    return <LinkButton {...args} />;
  },
  args: {
    ...defaultArgs,
    children: '[抽選で謝礼あり]\\nアンケートにご協力ください',
    whiteSpace: 'pre-wrap',
    block: true
  }
}`,...(X=(O=f.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};const ye=["Default","Size","WithIcon","Block","Margin","CustomDataAttribute","TextWrap"];export{c as Block,m as CustomDataAttribute,o as Default,p as Margin,d as Size,f as TextWrap,x as WithIcon,ye as __namedExportsOrder,Be as default};
