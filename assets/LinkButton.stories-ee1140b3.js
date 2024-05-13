import{j as n}from"./jsx-runtime-9c4ae004.js";import{S as u,a}from"./TrashIcon-0207f0d1.js";import{S as s}from"./UbieIcon-244c3ab1.js";import{c as X}from"./clsx-1229b3e0.js";import{r as h}from"./index-1b03fe98.js";import{s as i,V as g}from"./VariantIcon-c466fe49.js";import{m as Y}from"./style-d1e19ac4.js";import{S as l}from"./Stack-9024e87d.js";const e=h.forwardRef(({render:m,children:F,variant:r="primary",size:C="large",block:R=!1,icon:p,fixedIcon:v,suffixIcon:k,mt:_,mr:O,mb:G,ml:H,...J},K)=>{const j=p==="default"?n.jsx(g,{variant:r}):p,y=v==="default"?n.jsx(g,{variant:r}):v,I=k==="default"?n.jsx(g,{variant:r}):k,Q=X({[i.button]:!0,[i[r]]:!0,[i[C]]:!0,[i.block]:R});return((L,B)=>m?h.cloneElement(m,L,B):n.jsx("a",{...L,children:B}))({className:Q,style:{...Y({mt:_,mr:O,mb:G,ml:H})},...J,ref:K},n.jsxs(n.Fragment,{children:[y&&n.jsx("span",{className:i.fixedIcon,children:y}),n.jsxs("span",{className:i.label,children:[j&&n.jsx("span",{className:i.icon,children:j}),F,I&&n.jsx("span",{className:i.suffixIcon,children:I})]})]}))});e.displayName="Link";e.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'large'",computed:!1},required:!1},block:{defaultValue:{value:"false",computed:!1},required:!1}}};const on={title:"Button/LinkButton",component:e},t={children:"ボタン",href:"https://vitals.ubie.life/"},o={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{...t}),n.jsx(e,{...t,variant:"secondary"}),n.jsx(e,{...t,variant:"accent"}),n.jsx(e,{...t,variant:"alert"}),n.jsx(e,{...t,variant:"text"}),n.jsx(e,{...t,variant:"textAlert"})]})})},c={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{...t,size:"small",children:"Small"}),n.jsx(e,{...t,size:"medium",children:"Medium"}),n.jsx(e,{...t,children:"Large"})]})})},d={render:()=>n.jsxs(l,{spacing:"lg",children:[n.jsxs(l,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Default Position"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{icon:n.jsx(s,{}),...t}),n.jsx(e,{icon:n.jsx(s,{}),...t,variant:"secondary"}),n.jsx(e,{icon:n.jsx(s,{}),...t,variant:"accent"}),n.jsx(e,{icon:n.jsx(s,{}),...t,variant:"alert"}),n.jsx(e,{icon:n.jsx(s,{}),...t,variant:"text"}),n.jsx(e,{icon:n.jsx(u,{}),...t,variant:"textAlert"})]})})]}),n.jsxs(l,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{suffixIcon:n.jsx(a,{}),...t}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"secondary"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"accent"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"alert"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"text"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"textAlert"}),n.jsx(e,{suffixIcon:n.jsx(u,{}),...t,variant:"textAlert"})]})})]}),n.jsxs(l,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{fixedIcon:n.jsx(a,{}),...t}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"secondary"}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"accent"}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"alert"}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"text"}),n.jsx(e,{fixedIcon:n.jsx(u,{}),...t,variant:"textAlert"})]})})]})]})},x={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsx("div",{children:n.jsx(e,{...t,size:"small",variant:"secondary",block:!0})}),n.jsx("div",{children:n.jsx(e,{...t,size:"medium",variant:"secondary",block:!0})}),n.jsx("div",{children:n.jsx(e,{...t,size:"large",variant:"secondary",block:!0})})]})},f={render:()=>n.jsx("div",{style:{backgroundColor:"var(--color-background-gray)",width:"fit-content",overflow:"hidden"},children:n.jsx(e,{...t,mt:"lg",mr:"lg",mb:"lg",ml:"lg"})})};var A,b,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var D,w,z;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var W,N,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(N=d.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var P,U,V;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(V=(U=x.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var M,T,q;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: 'var(--color-background-gray)',
    width: 'fit-content',
    overflow: 'hidden'
  }}>
      <LinkButton {...defaultArgs} mt="lg" mr="lg" mb="lg" ml="lg" />
    </div>
}`,...(q=(T=f.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const cn=["Default","Size","WithIcon","Block","Margin"];export{x as Block,o as Default,f as Margin,c as Size,d as WithIcon,cn as __namedExportsOrder,on as default};
