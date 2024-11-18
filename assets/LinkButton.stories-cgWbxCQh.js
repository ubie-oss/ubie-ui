import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{T as o,B as a}from"./Icon-Ba3xvLNb.js";import{U as l}from"./UbieIcon-Dt0Travo.js";import{c as oe}from"./clsx-B-dksMZM.js";import{r as j}from"./index-DX35FyXq.js";import{u as v,s as i}from"./useIcon-BQMRDXPl.js";import{m as ce}from"./style-D1Pgu1yr.js";import{S as r}from"./Stack-BgQUu0jm.js";import"./ArrowBDownIcon-DHfX99Bt.js";import"./UnfoldMoreIcon-N-Pb1J02.js";const n=j.forwardRef(({render:u,children:X,variant:s="primary",size:M="large",block:O=!1,icon:H,prefixIcon:K,fixedIcon:Q,suffixIcon:Y,whiteSpace:Z="normal",m:$,mx:ee,my:ne,mt:te,mr:ae,mb:le,ml:ie,...ue},re)=>{const I=v(H||K,s),k=v(Q,s),y=v(Y,s),se=oe({[i.button]:!0,[i[s]]:!0,[i[M]]:!0,[i.block]:O});return((B,A)=>u?j.cloneElement(u,B,A):e.jsx("a",{...B,children:A}))({className:se,style:{...ce({m:$,mx:ee,my:ne,mt:te,mr:ae,mb:le,ml:ie}),"--white-space":Z},...ue,ref:re},e.jsxs(e.Fragment,{children:[k&&e.jsx("span",{className:i.fixedIcon,children:k}),e.jsxs("span",{className:i.label,children:[I&&e.jsx("span",{className:i.icon,children:I}),X,y&&e.jsx("span",{className:i.suffixIcon,children:y})]})]}))});n.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{children:{defaultValue:null,description:"ボタンのラベルとして表示する内容",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"ボタンの種類",name:"variant",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"text"'},{value:'"primary"'},{value:'"accent"'},{value:'"secondary"'},{value:'"textAlert"'},{value:'"authGoogle"'},{value:'"authLINE"'},{value:'"authApple"'}]}},size:{defaultValue:{value:"large"},description:"種類",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},block:{defaultValue:{value:"false"},description:"横幅を100%占有する",name:"block",required:!1,type:{name:"boolean"}},fixedIcon:{defaultValue:null,description:"Fixedアイコン",name:"fixedIcon",required:!1,type:{name:'ReactElement<any, string | JSXElementConstructor<any>> | "default" | "AccountIcon" | "AccountSettingIcon" | "AddressIcon" | "AlertIcon" | ... 192 more ...'}},suffixIcon:{defaultValue:null,description:"後方配置のアイコン",name:"suffixIcon",required:!1,type:{name:'ReactElement<any, string | JSXElementConstructor<any>> | "default" | "AccountIcon" | "AccountSettingIcon" | "AddressIcon" | "AlertIcon" | ... 192 more ...'}},whiteSpace:{defaultValue:{value:"normal"},description:"ラベルの折り返しを指定",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"pre"'},{value:'"pre-wrap"'},{value:'"pre-line"'},{value:'"break-spaces"'},{value:'"normal"'},{value:'"nowrap"'}]}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:'ReactElement<any, string | JSXElementConstructor<any>> | "default" | "AccountIcon" | "AccountSettingIcon" | "AddressIcon" | "AlertIcon" | ... 192 more ...'}},prefixIcon:{defaultValue:null,description:"アイコン",name:"prefixIcon",required:!1,type:{name:'ReactElement<any, string | JSXElementConstructor<any>> | "default" | "AccountIcon" | "AccountSettingIcon" | "AddressIcon" | "AlertIcon" | ... 192 more ...'}},m:{defaultValue:null,description:`四方のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"m",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mx:{defaultValue:null,description:`水平方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mx",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},my:{defaultValue:null,description:`垂直方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"my",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mt:{defaultValue:null,description:"上方向のマージン。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:`右方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mr",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:`下方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mb",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:`左方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"ml",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},render:{defaultValue:null,description:"レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定",name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const Ae={title:"Button/LinkButton",component:n},t={children:"ボタン",href:"https://vitals.ubie.life/"},c={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{...t}),e.jsx(n,{...t,variant:"secondary"}),e.jsx(n,{...t,variant:"accent"}),e.jsx(n,{...t,variant:"alert"}),e.jsx(n,{...t,variant:"text"}),e.jsx(n,{...t,variant:"textAlert"})]})})},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{...t,size:"small",children:"Small"}),e.jsx(n,{...t,size:"medium",children:"Medium"}),e.jsx(n,{...t,children:"Large"})]})})},x={render:()=>e.jsxs(r,{spacing:"lg",children:[e.jsxs(r,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Position Prefix"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{prefixIcon:e.jsx(l,{}),...t}),e.jsx(n,{prefixIcon:e.jsx(l,{}),...t,variant:"secondary"}),e.jsx(n,{prefixIcon:e.jsx(l,{}),...t,variant:"accent"}),e.jsx(n,{prefixIcon:e.jsx(l,{}),...t,variant:"alert"}),e.jsx(n,{prefixIcon:e.jsx(l,{}),...t,variant:"text"}),e.jsx(n,{prefixIcon:e.jsx(o,{}),...t,variant:"textAlert"})]})})]}),e.jsxs(r,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{suffixIcon:e.jsx(a,{}),...t}),e.jsx(n,{suffixIcon:e.jsx(a,{}),...t,variant:"secondary"}),e.jsx(n,{suffixIcon:e.jsx(a,{}),...t,variant:"accent"}),e.jsx(n,{suffixIcon:e.jsx(a,{}),...t,variant:"alert"}),e.jsx(n,{suffixIcon:e.jsx(a,{}),...t,variant:"text"}),e.jsx(n,{suffixIcon:e.jsx(a,{}),...t,variant:"textAlert"}),e.jsx(n,{suffixIcon:e.jsx(o,{}),...t,variant:"textAlert"})]})})]}),e.jsxs(r,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{fixedIcon:e.jsx(a,{}),...t}),e.jsx(n,{fixedIcon:e.jsx(a,{}),...t,variant:"secondary"}),e.jsx(n,{fixedIcon:e.jsx(a,{}),...t,variant:"accent"}),e.jsx(n,{fixedIcon:e.jsx(a,{}),...t,variant:"alert"}),e.jsx(n,{fixedIcon:e.jsx(a,{}),...t,variant:"text"}),e.jsx(n,{fixedIcon:e.jsx(o,{}),...t,variant:"textAlert"})]})})]}),e.jsxs(r,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Name specification"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{icon:"BlankLinkIcon",...t,children:"Icon"}),e.jsx(n,{suffixIcon:"BlankLinkIcon",...t,children:"Suffix Icon"}),e.jsx(n,{fixedIcon:"BlankLinkIcon",...t,children:"Fixed Icon"})]})})]}),e.jsxs(r,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"Auth Icon"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{variant:"authGoogle",icon:"default",...t,children:"Icon"}),e.jsx(n,{variant:"authGoogle",suffixIcon:"default",...t,children:"Suffix Icon"}),e.jsx(n,{variant:"authGoogle",fixedIcon:"default",...t,children:"Fixed Icon"})]})})]}),e.jsxs(r,{spacing:"lg",as:"dl",children:[e.jsx("dt",{style:{fontWeight:"bold"},children:"icon prop(deprecated)"}),e.jsx("dd",{style:{margin:0},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e.jsx(n,{icon:e.jsx(l,{}),...t}),e.jsx(n,{icon:e.jsx(l,{}),...t,variant:"secondary"}),e.jsx(n,{icon:e.jsx(l,{}),...t,variant:"accent"}),e.jsx(n,{icon:e.jsx(l,{}),...t,variant:"alert"}),e.jsx(n,{icon:e.jsx(l,{}),...t,variant:"text"}),e.jsx(n,{icon:e.jsx(o,{}),...t,variant:"textAlert"})]})})]})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx("div",{children:e.jsx(n,{...t,size:"small",variant:"secondary",block:!0})}),e.jsx("div",{children:e.jsx(n,{...t,size:"medium",variant:"secondary",block:!0})}),e.jsx("div",{children:e.jsx(n,{...t,size:"large",variant:"secondary",block:!0})})]})},p={render:()=>e.jsx("div",{style:{backgroundColor:"var(--color-background-gray)",width:"fit-content",overflow:"hidden"},children:e.jsx(n,{...t,mt:"lg",mr:"lg",mb:"lg",ml:"lg"})})},m={args:{...t,"data-test-id":"link-button-custom-attribute"},render:u=>e.jsx(n,{...u,children:"Please enter in English"})},g={render:u=>e.jsx(n,{...u}),args:{...t,children:`[抽選で謝礼あり]
アンケートにご協力ください`,whiteSpace:"pre-wrap",block:!0}};var h,L,E;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var D,b,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(F=(b=d.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var S,C,w;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Stack spacing="lg">
      <Stack spacing="lg" as="dl">
        <dt style={{
        fontWeight: 'bold'
      }}>Position Prefix</dt>

        <dd style={{
        margin: 0
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '32px'
        }}>
            <LinkButton prefixIcon={<UbieIcon />} {...defaultArgs} />
            <LinkButton prefixIcon={<UbieIcon />} {...defaultArgs} variant="secondary" />
            <LinkButton prefixIcon={<UbieIcon />} {...defaultArgs} variant="accent" />
            <LinkButton prefixIcon={<UbieIcon />} {...defaultArgs} variant="alert" />
            <LinkButton prefixIcon={<UbieIcon />} {...defaultArgs} variant="text" />
            <LinkButton prefixIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
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

      <Stack spacing="lg" as="dl">
        <dt style={{
        fontWeight: 'bold'
      }}>Name specification</dt>
        <dd style={{
        margin: 0
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '32px'
        }}>
            <LinkButton icon="BlankLinkIcon" {...defaultArgs}>
              Icon
            </LinkButton>
            <LinkButton suffixIcon="BlankLinkIcon" {...defaultArgs}>
              Suffix Icon
            </LinkButton>
            <LinkButton fixedIcon="BlankLinkIcon" {...defaultArgs}>
              Fixed Icon
            </LinkButton>
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{
        fontWeight: 'bold'
      }}>Auth Icon</dt>
        <dd style={{
        margin: 0
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '32px'
        }}>
            <LinkButton variant="authGoogle" icon="default" {...defaultArgs}>
              Icon
            </LinkButton>
            <LinkButton variant="authGoogle" suffixIcon="default" {...defaultArgs}>
              Suffix Icon
            </LinkButton>
            <LinkButton variant="authGoogle" fixedIcon="default" {...defaultArgs}>
              Fixed Icon
            </LinkButton>
          </div>
        </dd>
      </Stack>

      <Stack spacing="lg" as="dl">
        <dt style={{
        fontWeight: 'bold'
      }}>icon prop(deprecated)</dt>

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
    </Stack>
}`,...(w=(C=x.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var V,q,W;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(q=f.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var T,z,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: 'var(--color-background-gray)',
    width: 'fit-content',
    overflow: 'hidden'
  }}>
      <LinkButton {...defaultArgs} mt="lg" mr="lg" mb="lg" ml="lg" />
    </div>
}`,...(_=(z=p.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var N,U,P;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    'data-test-id': 'link-button-custom-attribute'
  },
  render: args => <LinkButton {...args}>Please enter in English</LinkButton>
}`,...(P=(U=m.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var R,G,J;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    return <LinkButton {...args} />;
  },
  args: {
    ...defaultArgs,
    children: '[抽選で謝礼あり]\\nアンケートにご協力ください',
    whiteSpace: 'pre-wrap',
    block: true
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const je=["Default","Size","WithIcon","Block","Margin","CustomDataAttribute","TextWrap"];export{f as Block,m as CustomDataAttribute,c as Default,p as Margin,d as Size,g as TextWrap,x as WithIcon,je as __namedExportsOrder,Ae as default};
