import{j as n,F as K,a as e}from"./jsx-runtime-03b4ddbf.js";import{S as l,a as g,b as i}from"./UbieIcon-e62b6213.js";import{c as Q}from"./clsx-1229b3e0.js";import{r as D}from"./index-76fb7be0.js";import{s as r,V as v}from"./VariantIcon-d6278878.js";import{S as o}from"./Stack-60de74b5.js";import"./_commonjsHelpers-de833af9.js";const t=D.forwardRef(({render:p,children:j,variant:s="primary",size:M="large",block:G=!1,icon:m,fixedIcon:k,suffixIcon:y,href:J,disabled:B=!1,...O},X)=>{const I=m==="default"?e(v,{variant:s}):m,A=k==="default"?e(v,{variant:s}):k,L=y==="default"?e(v,{variant:s}):y,H=Q({[r.button]:!0,[r[s]]:!0,[r[M]]:!0,[r.block]:G,[r.disabled]:B});return((h,b)=>p?D.cloneElement(p,h,b):e("a",{...h,children:b}))({className:H,href:B?void 0:J,...O,ref:X},n(K,{children:[A&&e("span",{className:r.fixedIcon,children:A}),n("span",{className:r.label,children:[I&&e("span",{className:r.icon,children:I}),j,L&&e("span",{className:r.suffixIcon,children:L})]})]}))});t.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{variant:{defaultValue:{value:"primary"},description:"ボタンの種類",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'},{value:'"secondary"'},{value:'"accent"'},{value:'"text"'},{value:'"textAlert"'},{value:'"authGoogle"'},{value:'"authLINE"'},{value:'"authApple"'}]}},size:{defaultValue:{value:"large"},description:"種類",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},block:{defaultValue:{value:"false"},description:"横幅を100%占有するかどうか",name:"block",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"アイコン",name:"icon",required:!1,type:{name:"ReactNode"}},fixedIcon:{defaultValue:null,description:"Fixedアイコン",name:"fixedIcon",required:!1,type:{name:"ReactNode"}},suffixIcon:{defaultValue:null,description:"後方配置のアイコン",name:"suffixIcon",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"ボタンを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}},render:{defaultValue:null,description:"レンダリングされる要素を変更。フレームワークのリンクコンポーネントなどを指定",name:"render",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}}}catch{}const le={title:"Button/LinkButton",component:t},a={children:"ボタン",href:"https://vitals.ubie.life/"},d={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e(t,{...a}),e(t,{...a,variant:"secondary"}),e(t,{...a,variant:"accent"}),e(t,{...a,variant:"alert"}),e(t,{...a,variant:"text"}),e(t,{...a,variant:"textAlert"})]})})},u={render:()=>e("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e(t,{...a,size:"small",children:"Small"}),e(t,{...a,size:"medium",children:"Medium"}),e(t,{...a,children:"Large"})]})})},c={render:()=>n(o,{spacing:"lg",children:[n(o,{spacing:"lg",as:"dl",children:[e("dt",{style:{fontWeight:"bold"},children:"Default Position"}),e("dd",{style:{margin:0},children:n("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e(t,{icon:e(l,{}),...a}),e(t,{icon:e(l,{}),...a,variant:"secondary"}),e(t,{icon:e(l,{}),...a,variant:"accent"}),e(t,{icon:e(l,{}),...a,variant:"alert"}),e(t,{icon:e(l,{}),...a,variant:"text"}),e(t,{icon:e(g,{}),...a,variant:"textAlert"})]})})]}),n(o,{spacing:"lg",as:"dl",children:[e("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),e("dd",{style:{margin:0},children:n("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e(t,{suffixIcon:e(i,{}),...a}),e(t,{suffixIcon:e(i,{}),...a,variant:"secondary"}),e(t,{suffixIcon:e(i,{}),...a,variant:"accent"}),e(t,{suffixIcon:e(i,{}),...a,variant:"alert"}),e(t,{suffixIcon:e(i,{}),...a,variant:"text"}),e(t,{suffixIcon:e(i,{}),...a,variant:"textAlert"}),e(t,{suffixIcon:e(g,{}),...a,variant:"textAlert"})]})})]}),n(o,{spacing:"lg",as:"dl",children:[e("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),e("dd",{style:{margin:0},children:n("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e(t,{fixedIcon:e(i,{}),...a}),e(t,{fixedIcon:e(i,{}),...a,variant:"secondary"}),e(t,{fixedIcon:e(i,{}),...a,variant:"accent"}),e(t,{fixedIcon:e(i,{}),...a,variant:"alert"}),e(t,{fixedIcon:e(i,{}),...a,variant:"text"}),e(t,{fixedIcon:e(g,{}),...a,variant:"textAlert"})]})})]})]})},f={render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e("div",{children:e(t,{...a,size:"small",variant:"secondary",block:!0})}),e("div",{children:e(t,{...a,size:"medium",variant:"secondary",block:!0})}),e("div",{children:e(t,{...a,size:"large",variant:"secondary",block:!0})})]})},x={render:()=>n("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[e(t,{...a,disabled:!0}),e(t,{...a,variant:"secondary",disabled:!0}),e(t,{...a,variant:"accent",disabled:!0}),e(t,{...a,variant:"alert",disabled:!0}),e(t,{...a,variant:"text",disabled:!0}),e(t,{...a,variant:"textAlert",disabled:!0})]})};var F,S,E;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var z,w,C;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,V,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var W,_,P;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(_=f.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var U,R,T;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '32px'
  }}>
      <LinkButton {...defaultArgs} disabled />
      <LinkButton {...defaultArgs} variant="secondary" disabled />
      <LinkButton {...defaultArgs} variant="accent" disabled />
      <LinkButton {...defaultArgs} variant="alert" disabled />
      <LinkButton {...defaultArgs} variant="text" disabled />
      <LinkButton {...defaultArgs} variant="textAlert" disabled />
    </div>
}`,...(T=(R=x.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const se=["Default","Size","WithIcon","Block","Disabled"];export{f as Block,d as Default,x as Disabled,u as Size,c as WithIcon,se as __namedExportsOrder,le as default};
//# sourceMappingURL=LinkButton.stories-da2cd5ab.js.map
