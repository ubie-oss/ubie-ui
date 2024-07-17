import{j as e}from"./jsx-runtime-69eee039.js";import{a as p,S as t}from"./TrashIcon-de957c6c.js";import{S as s}from"./UbieIcon-105662b4.js";import{c as te}from"./clsx-1229b3e0.js";import{r as L}from"./index-7c191284.js";import{s as u,V as v}from"./VariantIcon-23f7151c.js";import{m as ue}from"./style-1d55b7c3.js";import{S as r}from"./Stack-3a809a50.js";const n=L.forwardRef(({render:l,children:G,variant:i="primary",size:J="large",block:O=!1,icon:g,fixedIcon:k,suffixIcon:B,m:X,mx:H,my:K,mt:Q,mr:Y,mb:Z,ml:$,...ee},ne)=>{const y=g==="default"?e.jsx(v,{variant:i}):g,A=k==="default"?e.jsx(v,{variant:i}):k,j=B==="default"?e.jsx(v,{variant:i}):B,ae=te({[u.button]:!0,[u[i]]:!0,[u[J]]:!0,[u.block]:O});return((I,E)=>l?L.cloneElement(l,I,E):e.jsx("a",{...I,children:E}))({className:ae,style:{...ue({m:X,mx:H,my:K,mt:Q,mr:Y,mb:Z,ml:$})},...ee,ref:ne},e.jsxs(e.Fragment,{children:[A&&e.jsx("span",{className:u.fixedIcon,children:A}),e.jsxs("span",{className:u.label,children:[y&&e.jsx("span",{className:u.icon,children:y}),G,j&&e.jsx("span",{className:u.suffixIcon,children:j})]})]}))});n.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{children:{defaultValue:null,description:"ボタンのラベルとして表示する内容",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"ボタンの種類",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'},{value:'"text"'},{value:'"accent"'},{value:'"secondary"'},{value:'"textAlert"'},{value:'"authGoogle"'},{value:'"authLINE"'},{value:'"authApple"'}]}},size:{defaultValue:{value:"large"},description:"種類",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},block:{defaultValue:{value:"false"},description:"横幅を100%占有するかどうか",name:"block",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:"ReactNode"}},fixedIcon:{defaultValue:null,description:"Fixedアイコン",name:"fixedIcon",required:!1,type:{name:"ReactNode"}},suffixIcon:{defaultValue:null,description:"後方配置のアイコン",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},m:{defaultValue:null,description:`四方のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"m",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mx:{defaultValue:null,description:`水平方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mx",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},my:{defaultValue:null,description:`垂直方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"my",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mt:{defaultValue:null,description:"上方向のマージン。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:`右方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:`下方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:`左方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"ml",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},render:{defaultValue:null,description:"レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定",name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const me={title:"Button/LinkButton",component:n},a={children:"ボタン",href:"https://vitals.ubie.life/"},o={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{...a}),e.jsx(n,{...a,variant:"secondary"}),e.jsx(n,{...a,variant:"accent"}),e.jsx(n,{...a,variant:"alert"}),e.jsx(n,{...a,variant:"text"}),e.jsx(n,{...a,variant:"textAlert"})]})})},x={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{...a,size:"small",children:"Small"}),e.jsx(n,{...a,size:"medium",children:"Medium"}),e.jsx(n,{...a,children:"Large"})]})})},d={render:()=>e.jsxs(r,{spacing:"lg",children:[e.jsxs(r,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Default Position"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{icon:e.jsx(s,{}),...a}),e.jsx(n,{icon:e.jsx(s,{}),...a,variant:"secondary"}),e.jsx(n,{icon:e.jsx(s,{}),...a,variant:"accent"}),e.jsx(n,{icon:e.jsx(s,{}),...a,variant:"alert"}),e.jsx(n,{icon:e.jsx(s,{}),...a,variant:"text"}),e.jsx(n,{icon:e.jsx(p,{}),...a,variant:"textAlert"})]})})]}),e.jsxs(r,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{suffixIcon:e.jsx(t,{}),...a}),e.jsx(n,{suffixIcon:e.jsx(t,{}),...a,variant:"secondary"}),e.jsx(n,{suffixIcon:e.jsx(t,{}),...a,variant:"accent"}),e.jsx(n,{suffixIcon:e.jsx(t,{}),...a,variant:"alert"}),e.jsx(n,{suffixIcon:e.jsx(t,{}),...a,variant:"text"}),e.jsx(n,{suffixIcon:e.jsx(t,{}),...a,variant:"textAlert"}),e.jsx(n,{suffixIcon:e.jsx(p,{}),...a,variant:"textAlert"})]})})]}),e.jsxs(r,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{fixedIcon:e.jsx(t,{}),...a}),e.jsx(n,{fixedIcon:e.jsx(t,{}),...a,variant:"secondary"}),e.jsx(n,{fixedIcon:e.jsx(t,{}),...a,variant:"accent"}),e.jsx(n,{fixedIcon:e.jsx(t,{}),...a,variant:"alert"}),e.jsx(n,{fixedIcon:e.jsx(t,{}),...a,variant:"text"}),e.jsx(n,{fixedIcon:e.jsx(p,{}),...a,variant:"textAlert"})]})})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx("div",{children:e.jsx(n,{...a,size:"small",variant:"secondary",block:!0})}),e.jsx("div",{children:e.jsx(n,{...a,size:"medium",variant:"secondary",block:!0})}),e.jsx("div",{children:e.jsx(n,{...a,size:"large",variant:"secondary",block:!0})})]})},f={render:()=>e.jsx("div",{style:{backgroundColor:"var(--color-background-gray)",width:"fit-content",overflow:"hidden"},children:e.jsx(n,{...a,mt:"lg",mr:"lg",mb:"lg",ml:"lg"})})},m={args:{...a,"data-test-id":"link-button-custom-attribute"},render:l=>e.jsx(n,{...l,children:"Please enter in English"})};var h,D,F;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(F=(D=o.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var b,C,S;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(C=x.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var V,q,w;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(w=(q=d.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var z,N,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var P,W,_;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: 'var(--color-background-gray)',
    width: 'fit-content',
    overflow: 'hidden'
  }}>
      <LinkButton {...defaultArgs} mt="lg" mr="lg" mb="lg" ml="lg" />
    </div>
}`,...(_=(W=f.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var R,U,M;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    'data-test-id': 'link-button-custom-attribute'
  },
  render: args => <LinkButton {...args}>Please enter in English</LinkButton>
}`,...(M=(U=m.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};const pe=["Default","Size","WithIcon","Block","Margin","CustomDataAttribute"];export{c as Block,m as CustomDataAttribute,o as Default,f as Margin,x as Size,d as WithIcon,pe as __namedExportsOrder,me as default};
