import{j as r,a as t}from"./clsx-0a53246e.js";import{S as i,a as u,b as n}from"./UbieIcon-1bddaa39.js";import{B as a}from"./Button-2b4c4db0.js";import{S as s}from"./Stack-ac0bc903.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./VariantIcon-48b0f305.js";const _={title:"Button/Button",component:a},e={children:"ボタン",disabled:!1},l={render:()=>r("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[t(a,{...e}),t(a,{...e,variant:"secondary"}),t(a,{...e,variant:"accent"}),t(a,{...e,variant:"alert"}),t(a,{...e,variant:"text"}),t(a,{...e,variant:"textAlert"})]})},d={render:()=>r("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[t(a,{...e,size:"small",children:"Small"}),t(a,{...e,size:"medium",children:"Medium"}),t(a,{...e,children:"Large"})]}),args:e},o={render:()=>r(s,{spacing:"lg",children:[r(s,{spacing:"lg",as:"dl",children:[t("dt",{style:{fontWeight:"bold"},children:"Default Position"}),t("dd",{style:{margin:0},children:r("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[t(a,{icon:t(i,{}),...e}),t(a,{icon:t(i,{}),...e,variant:"secondary"}),t(a,{icon:t(i,{}),...e,variant:"accent"}),t(a,{icon:t(i,{}),...e,variant:"alert"}),t(a,{icon:t(i,{}),...e,variant:"text"}),t(a,{icon:t(u,{}),...e,variant:"textAlert"})]})})]}),r(s,{spacing:"lg",as:"dl",children:[t("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),t("dd",{style:{margin:0},children:r("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[t(a,{suffixIcon:t(n,{}),...e}),t(a,{suffixIcon:t(n,{}),...e,variant:"secondary"}),t(a,{suffixIcon:t(n,{}),...e,variant:"accent"}),t(a,{suffixIcon:t(n,{}),...e,variant:"alert"}),t(a,{suffixIcon:t(n,{}),...e,variant:"text"}),t(a,{suffixIcon:t(u,{}),...e,variant:"textAlert"})]})})]}),r(s,{spacing:"lg",as:"dl",children:[t("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),t("dd",{style:{margin:0},children:r("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[t(a,{fixedIcon:t(n,{}),...e}),t(a,{fixedIcon:t(n,{}),...e,variant:"secondary"}),t(a,{fixedIcon:t(n,{}),...e,variant:"accent"}),t(a,{fixedIcon:t(n,{}),...e,variant:"alert"}),t(a,{fixedIcon:t(n,{}),...e,variant:"text"}),t(a,{fixedIcon:t(u,{}),...e,variant:"textAlert"})]})})]})]}),args:e},c={render:()=>r("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[t("div",{children:t(a,{...e,size:"small",variant:"secondary"})}),t("div",{children:t(a,{...e,size:"medium",variant:"secondary"})}),t("div",{children:t(a,{...e,size:"large",variant:"secondary"})})]}),args:{...e,block:!0}},f={render:()=>r("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[t(a,{...e,disabled:!0}),t(a,{...e,variant:"secondary",disabled:!0}),t(a,{...e,variant:"accent",disabled:!0}),t(a,{...e,variant:"alert",disabled:!0}),t(a,{...e,variant:"text",disabled:!0}),t(a,{...e,variant:"textAlert",disabled:!0})]}),args:e};var g,x,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var p,m,I;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(I=(m=d.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};var B,y,A;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var h,k,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var S,D,L;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(D=f.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const F=["Default","Size","WithIcon","Block","Disabled"];export{c as Block,l as Default,f as Disabled,d as Size,o as WithIcon,F as __namedExportsOrder,_ as default};
//# sourceMappingURL=Button.stories-26756134.js.map
