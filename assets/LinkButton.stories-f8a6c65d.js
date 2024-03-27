import{j as n}from"./jsx-runtime-9c4ae004.js";import{S as i,a as u,b as a}from"./UbieIcon-c951d3f6.js";import{c as K}from"./clsx-1229b3e0.js";import{r as h}from"./index-1b03fe98.js";import{s,V as g}from"./VariantIcon-b335cb87.js";import{S as l}from"./Stack-4d97e226.js";const e=h.forwardRef(({render:p,children:R,variant:r="primary",size:_="large",block:O=!1,icon:v,fixedIcon:m,suffixIcon:j,href:C,disabled:k=!1,...G},H)=>{const y=v==="default"?n.jsx(g,{variant:r}):v,I=m==="default"?n.jsx(g,{variant:r}):m,L=j==="default"?n.jsx(g,{variant:r}):j,J=K({[s.button]:!0,[s[r]]:!0,[s[_]]:!0,[s.block]:O,[s.disabled]:k});return((B,A)=>p?h.cloneElement(p,B,A):n.jsx("a",{...B,children:A}))({className:J,href:k?void 0:C,...G,ref:H},n.jsxs(n.Fragment,{children:[I&&n.jsx("span",{className:s.fixedIcon,children:I}),n.jsxs("span",{className:s.label,children:[y&&n.jsx("span",{className:s.icon,children:y}),R,L&&n.jsx("span",{className:s.suffixIcon,children:L})]})]}))});e.displayName="Link";e.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'large'",computed:!1},required:!1},block:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const an={title:"Button/LinkButton",component:e},t={children:"ボタン",href:"https://vitals.ubie.life/"},o={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{...t}),n.jsx(e,{...t,variant:"secondary"}),n.jsx(e,{...t,variant:"accent"}),n.jsx(e,{...t,variant:"alert"}),n.jsx(e,{...t,variant:"text"}),n.jsx(e,{...t,variant:"textAlert"})]})})},d={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{...t,size:"small",children:"Small"}),n.jsx(e,{...t,size:"medium",children:"Medium"}),n.jsx(e,{...t,children:"Large"})]})})},c={render:()=>n.jsxs(l,{spacing:"lg",children:[n.jsxs(l,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Default Position"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{icon:n.jsx(i,{}),...t}),n.jsx(e,{icon:n.jsx(i,{}),...t,variant:"secondary"}),n.jsx(e,{icon:n.jsx(i,{}),...t,variant:"accent"}),n.jsx(e,{icon:n.jsx(i,{}),...t,variant:"alert"}),n.jsx(e,{icon:n.jsx(i,{}),...t,variant:"text"}),n.jsx(e,{icon:n.jsx(u,{}),...t,variant:"textAlert"})]})})]}),n.jsxs(l,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{suffixIcon:n.jsx(a,{}),...t}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"secondary"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"accent"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"alert"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"text"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"textAlert"}),n.jsx(e,{suffixIcon:n.jsx(u,{}),...t,variant:"textAlert"})]})})]}),n.jsxs(l,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{fixedIcon:n.jsx(a,{}),...t}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"secondary"}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"accent"}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"alert"}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"text"}),n.jsx(e,{fixedIcon:n.jsx(u,{}),...t,variant:"textAlert"})]})})]})]})},x={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsx("div",{children:n.jsx(e,{...t,size:"small",variant:"secondary",block:!0})}),n.jsx("div",{children:n.jsx(e,{...t,size:"medium",variant:"secondary",block:!0})}),n.jsx("div",{children:n.jsx(e,{...t,size:"large",variant:"secondary",block:!0})})]})},f={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{...t,disabled:!0}),n.jsx(e,{...t,variant:"secondary",disabled:!0}),n.jsx(e,{...t,variant:"accent",disabled:!0}),n.jsx(e,{...t,variant:"alert",disabled:!0}),n.jsx(e,{...t,variant:"text",disabled:!0}),n.jsx(e,{...t,variant:"textAlert",disabled:!0})]})};var b,S,D;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var w,z,W;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(W=(z=d.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var N,E,P;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(E=c.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var U,V,q;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(V=x.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var T,F,M;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(F=f.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const sn=["Default","Size","WithIcon","Block","Disabled"];export{x as Block,o as Default,f as Disabled,d as Size,c as WithIcon,sn as __namedExportsOrder,an as default};
