import{j as n}from"./jsx-runtime-9c4ae004.js";import{S as s,a as x,b as a}from"./UbieIcon-c951d3f6.js";import{B as e}from"./Button-8b4c3d26.js";import{S as r}from"./Stack-9aaccb72.js";import"./index-1b03fe98.js";import"./clsx-1229b3e0.js";import"./VariantIcon-b335cb87.js";const T={title:"Button/Button",component:e},t={children:"ボタン",disabled:!1},i={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{...t}),n.jsx(e,{...t,variant:"secondary"}),n.jsx(e,{...t,variant:"accent"}),n.jsx(e,{...t,variant:"alert"}),n.jsx(e,{...t,variant:"text"}),n.jsx(e,{...t,variant:"textAlert"})]})},l={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{...t,size:"small",children:"Small"}),n.jsx(e,{...t,size:"medium",children:"Medium"}),n.jsx(e,{...t,children:"Large"})]}),args:t},d={render:()=>n.jsxs(r,{spacing:"lg",children:[n.jsxs(r,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Default Position"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{icon:n.jsx(s,{}),...t}),n.jsx(e,{icon:n.jsx(s,{}),...t,variant:"secondary"}),n.jsx(e,{icon:n.jsx(s,{}),...t,variant:"accent"}),n.jsx(e,{icon:n.jsx(s,{}),...t,variant:"alert"}),n.jsx(e,{icon:n.jsx(s,{}),...t,variant:"text"}),n.jsx(e,{icon:n.jsx(x,{}),...t,variant:"textAlert"})]})})]}),n.jsxs(r,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{suffixIcon:n.jsx(a,{}),...t}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"secondary"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"accent"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"alert"}),n.jsx(e,{suffixIcon:n.jsx(a,{}),...t,variant:"text"}),n.jsx(e,{suffixIcon:n.jsx(x,{}),...t,variant:"textAlert"})]})})]}),n.jsxs(r,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{fixedIcon:n.jsx(a,{}),...t}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"secondary"}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"accent"}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"alert"}),n.jsx(e,{fixedIcon:n.jsx(a,{}),...t,variant:"text"}),n.jsx(e,{fixedIcon:n.jsx(x,{}),...t,variant:"textAlert"})]})})]})]}),args:t},o={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsx("div",{children:n.jsx(e,{...t,size:"small",variant:"secondary"})}),n.jsx("div",{children:n.jsx(e,{...t,size:"medium",variant:"secondary"})}),n.jsx("div",{children:n.jsx(e,{...t,size:"large",variant:"secondary"})})]}),args:{...t,block:!0}},c={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(e,{...t,disabled:!0}),n.jsx(e,{...t,variant:"secondary",disabled:!0}),n.jsx(e,{...t,variant:"accent",disabled:!0}),n.jsx(e,{...t,variant:"alert",disabled:!0}),n.jsx(e,{...t,variant:"text",disabled:!0}),n.jsx(e,{...t,variant:"textAlert",disabled:!0})]}),args:t};var f,u,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '32px'
  }}>
      <Button {...defaultArgs} />
      <Button {...defaultArgs} variant="secondary" />
      <Button {...defaultArgs} variant="accent" />
      <Button {...defaultArgs} variant="alert" />
      <Button {...defaultArgs} variant="text" />
      <Button {...defaultArgs} variant="textAlert" />
    </div>
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,p,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '32px'
  }}>
      <Button {...defaultArgs} size="small">
        Small
      </Button>

      <Button {...defaultArgs} size="medium">
        Medium
      </Button>

      <Button {...defaultArgs}>Large</Button>
    </div>,
  args: defaultArgs
}`,...(j=(p=l.parameters)==null?void 0:p.docs)==null?void 0:j.source}}};var m,I,B;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
            <Button icon={<UbieIcon />} {...defaultArgs} />
            <Button icon={<UbieIcon />} {...defaultArgs} variant="secondary" />
            <Button icon={<UbieIcon />} {...defaultArgs} variant="accent" />
            <Button icon={<UbieIcon />} {...defaultArgs} variant="alert" />
            <Button icon={<UbieIcon />} {...defaultArgs} variant="text" />
            <Button icon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
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
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="secondary" />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="accent" />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="alert" />
            <Button suffixIcon={<BlankLinkIcon />} {...defaultArgs} variant="text" />
            <Button suffixIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
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
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} />
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="secondary" />
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="accent" />
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="alert" />
            <Button fixedIcon={<BlankLinkIcon />} {...defaultArgs} variant="text" />
            <Button fixedIcon={<TrashIcon />} {...defaultArgs} variant="textAlert" />
          </div>
        </dd>
      </Stack>
    </Stack>,
  args: defaultArgs
}`,...(B=(I=d.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var y,A,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Button {...defaultArgs} size="small" variant="secondary" />
      </div>
      <div>
        <Button {...defaultArgs} size="medium" variant="secondary" />
      </div>
      <div>
        <Button {...defaultArgs} size="large" variant="secondary" />
      </div>
    </div>,
  args: {
    ...defaultArgs,
    block: true
  }
}`,...(h=(A=o.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var k,b,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '32px'
  }}>
      <Button {...defaultArgs} disabled />
      <Button {...defaultArgs} variant="secondary" disabled />
      <Button {...defaultArgs} variant="accent" disabled />
      <Button {...defaultArgs} variant="alert" disabled />
      <Button {...defaultArgs} variant="text" disabled />
      <Button {...defaultArgs} variant="textAlert" disabled />
    </div>,
  args: defaultArgs
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const _=["Default","Size","WithIcon","Block","Disabled"];export{o as Block,i as Default,c as Disabled,l as Size,d as WithIcon,_ as __namedExportsOrder,T as default};
