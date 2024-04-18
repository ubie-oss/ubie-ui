import{j as n}from"./jsx-runtime-9c4ae004.js";import{S as s,a as f,b as a}from"./UbieIcon-c951d3f6.js";import{c as _}from"./clsx-1229b3e0.js";import{r as B}from"./index-1b03fe98.js";import{s as i,V as u}from"./VariantIcon-b335cb87.js";import{S as l}from"./Stack-51d5a3f7.js";const t=B.forwardRef(({render:g,children:V,variant:r="primary",size:T="large",block:q=!1,icon:p,fixedIcon:m,suffixIcon:v,...F},M)=>{const j=p==="default"?n.jsx(u,{variant:r}):p,k=m==="default"?n.jsx(u,{variant:r}):m,I=v==="default"?n.jsx(u,{variant:r}):v,R=_({[i.button]:!0,[i[r]]:!0,[i[T]]:!0,[i.block]:q});return((y,L)=>g?B.cloneElement(g,y,L):n.jsx("a",{...y,children:L}))({className:R,...F,ref:M},n.jsxs(n.Fragment,{children:[k&&n.jsx("span",{className:i.fixedIcon,children:k}),n.jsxs("span",{className:i.label,children:[j&&n.jsx("span",{className:i.icon,children:j}),V,I&&n.jsx("span",{className:i.suffixIcon,children:I})]})]}))});t.displayName="Link";t.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'large'",computed:!1},required:!1},block:{defaultValue:{value:"false",computed:!1},required:!1}}};const X={title:"Button/LinkButton",component:t},e={children:"ボタン",href:"https://vitals.ubie.life/"},o={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(t,{...e}),n.jsx(t,{...e,variant:"secondary"}),n.jsx(t,{...e,variant:"accent"}),n.jsx(t,{...e,variant:"alert"}),n.jsx(t,{...e,variant:"text"}),n.jsx(t,{...e,variant:"textAlert"})]})})},c={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(t,{...e,size:"small",children:"Small"}),n.jsx(t,{...e,size:"medium",children:"Medium"}),n.jsx(t,{...e,children:"Large"})]})})},d={render:()=>n.jsxs(l,{spacing:"lg",children:[n.jsxs(l,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Default Position"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(t,{icon:n.jsx(s,{}),...e}),n.jsx(t,{icon:n.jsx(s,{}),...e,variant:"secondary"}),n.jsx(t,{icon:n.jsx(s,{}),...e,variant:"accent"}),n.jsx(t,{icon:n.jsx(s,{}),...e,variant:"alert"}),n.jsx(t,{icon:n.jsx(s,{}),...e,variant:"text"}),n.jsx(t,{icon:n.jsx(f,{}),...e,variant:"textAlert"})]})})]}),n.jsxs(l,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(t,{suffixIcon:n.jsx(a,{}),...e}),n.jsx(t,{suffixIcon:n.jsx(a,{}),...e,variant:"secondary"}),n.jsx(t,{suffixIcon:n.jsx(a,{}),...e,variant:"accent"}),n.jsx(t,{suffixIcon:n.jsx(a,{}),...e,variant:"alert"}),n.jsx(t,{suffixIcon:n.jsx(a,{}),...e,variant:"text"}),n.jsx(t,{suffixIcon:n.jsx(a,{}),...e,variant:"textAlert"}),n.jsx(t,{suffixIcon:n.jsx(f,{}),...e,variant:"textAlert"})]})})]}),n.jsxs(l,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(t,{fixedIcon:n.jsx(a,{}),...e}),n.jsx(t,{fixedIcon:n.jsx(a,{}),...e,variant:"secondary"}),n.jsx(t,{fixedIcon:n.jsx(a,{}),...e,variant:"accent"}),n.jsx(t,{fixedIcon:n.jsx(a,{}),...e,variant:"alert"}),n.jsx(t,{fixedIcon:n.jsx(a,{}),...e,variant:"text"}),n.jsx(t,{fixedIcon:n.jsx(f,{}),...e,variant:"textAlert"})]})})]})]})},x={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsx("div",{children:n.jsx(t,{...e,size:"small",variant:"secondary",block:!0})}),n.jsx("div",{children:n.jsx(t,{...e,size:"medium",variant:"secondary",block:!0})}),n.jsx("div",{children:n.jsx(t,{...e,size:"large",variant:"secondary",block:!0})})]})};var h,A,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var S,D,z;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var w,W,N;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(W=d.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var E,P,U;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(U=(P=x.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const Y=["Default","Size","WithIcon","Block"];export{x as Block,o as Default,c as Size,d as WithIcon,Y as __namedExportsOrder,X as default};
