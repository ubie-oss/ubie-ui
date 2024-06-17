import{j as n}from"./jsx-runtime-69eee039.js";import{a as p,S as t}from"./TrashIcon-de957c6c.js";import{S as l}from"./UbieIcon-105662b4.js";import{c as nn}from"./clsx-1229b3e0.js";import{r as h}from"./index-7c191284.js";import{s as i,V as g}from"./VariantIcon-b319dbe3.js";import{m as en}from"./style-e9a2251f.js";import{S as u}from"./Stack-9e701cb5.js";const e=h.forwardRef(({render:s,children:G,variant:r="primary",size:J="large",block:O=!1,icon:v,fixedIcon:k,suffixIcon:y,mt:X,mr:H,mb:K,ml:Q,...Y},Z)=>{const j=v==="default"?n.jsx(g,{variant:r}):v,A=k==="default"?n.jsx(g,{variant:r}):k,B=y==="default"?n.jsx(g,{variant:r}):y,$=nn({[i.button]:!0,[i[r]]:!0,[i[J]]:!0,[i.block]:O});return((I,L)=>s?h.cloneElement(s,I,L):n.jsx("a",{...I,children:L}))({className:$,style:{...en({mt:X,mr:H,mb:K,ml:Q})},...Y,ref:Z},n.jsxs(n.Fragment,{children:[A&&n.jsx("span",{className:i.fixedIcon,children:A}),n.jsxs("span",{className:i.label,children:[j&&n.jsx("span",{className:i.icon,children:j}),G,B&&n.jsx("span",{className:i.suffixIcon,children:B})]})]}))});e.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:{value:"primary"},description:"ボタンの種類",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'},{value:'"accent"'},{value:'"text"'},{value:'"secondary"'},{value:'"textAlert"'},{value:'"authGoogle"'},{value:'"authLINE"'},{value:'"authApple"'}]}},size:{defaultValue:{value:"large"},description:"種類",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},block:{defaultValue:{value:"false"},description:"横幅を100%占有するかどうか",name:"block",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:"ReactNode"}},fixedIcon:{defaultValue:null,description:"Fixedアイコン",name:"fixedIcon",required:!1,type:{name:"ReactNode"}},suffixIcon:{defaultValue:null,description:"後方配置のアイコン",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},mt:{defaultValue:null,description:`margin-topの値。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:`margin-rightの値。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:`margin-bottomの値。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:`margin-leftの値。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"ml",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},render:{defaultValue:null,description:"レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定",name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const xn={title:"Button/LinkButton",component:e},a={children:"ボタン",href:"https://vitals.ubie.life/"},o={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{...a}),n.jsx(e,{...a,variant:"secondary"}),n.jsx(e,{...a,variant:"accent"}),n.jsx(e,{...a,variant:"alert"}),n.jsx(e,{...a,variant:"text"}),n.jsx(e,{...a,variant:"textAlert"})]})})},d={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{...a,size:"small",children:"Small"}),n.jsx(e,{...a,size:"medium",children:"Medium"}),n.jsx(e,{...a,children:"Large"})]})})},c={render:()=>n.jsxs(u,{spacing:"lg",children:[n.jsxs(u,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Default Position"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{icon:n.jsx(l,{}),...a}),n.jsx(e,{icon:n.jsx(l,{}),...a,variant:"secondary"}),n.jsx(e,{icon:n.jsx(l,{}),...a,variant:"accent"}),n.jsx(e,{icon:n.jsx(l,{}),...a,variant:"alert"}),n.jsx(e,{icon:n.jsx(l,{}),...a,variant:"text"}),n.jsx(e,{icon:n.jsx(p,{}),...a,variant:"textAlert"})]})})]}),n.jsxs(u,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{suffixIcon:n.jsx(t,{}),...a}),n.jsx(e,{suffixIcon:n.jsx(t,{}),...a,variant:"secondary"}),n.jsx(e,{suffixIcon:n.jsx(t,{}),...a,variant:"accent"}),n.jsx(e,{suffixIcon:n.jsx(t,{}),...a,variant:"alert"}),n.jsx(e,{suffixIcon:n.jsx(t,{}),...a,variant:"text"}),n.jsx(e,{suffixIcon:n.jsx(t,{}),...a,variant:"textAlert"}),n.jsx(e,{suffixIcon:n.jsx(p,{}),...a,variant:"textAlert"})]})})]}),n.jsxs(u,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{fixedIcon:n.jsx(t,{}),...a}),n.jsx(e,{fixedIcon:n.jsx(t,{}),...a,variant:"secondary"}),n.jsx(e,{fixedIcon:n.jsx(t,{}),...a,variant:"accent"}),n.jsx(e,{fixedIcon:n.jsx(t,{}),...a,variant:"alert"}),n.jsx(e,{fixedIcon:n.jsx(t,{}),...a,variant:"text"}),n.jsx(e,{fixedIcon:n.jsx(p,{}),...a,variant:"textAlert"})]})})]})]})},x={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsx("div",{children:n.jsx(e,{...a,size:"small",variant:"secondary",block:!0})}),n.jsx("div",{children:n.jsx(e,{...a,size:"medium",variant:"secondary",block:!0})}),n.jsx("div",{children:n.jsx(e,{...a,size:"large",variant:"secondary",block:!0})})]})},f={render:()=>n.jsx("div",{style:{backgroundColor:"var(--color-background-gray)",width:"fit-content",overflow:"hidden"},children:n.jsx(e,{...a,mt:"lg",mr:"lg",mb:"lg",ml:"lg"})})},m={args:{...a,"data-test-id":"link-button-custom-attribute"},render:s=>n.jsx(e,{...s,children:"Please enter in English"})};var b,E,D;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(E=o.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var S,F,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(F=d.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var w,z,V;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(z=c.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var N,q,P;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(q=x.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var T,W,_;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(U=m.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};const fn=["Default","Size","WithIcon","Block","Margin","CustomDataAttribute"];export{x as Block,m as CustomDataAttribute,o as Default,f as Margin,d as Size,c as WithIcon,fn as __namedExportsOrder,xn as default};
