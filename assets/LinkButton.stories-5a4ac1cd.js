import{j as n}from"./jsx-runtime-9c4ae004.js";import{S as m,a}from"./TrashIcon-0207f0d1.js";import{S as i}from"./UbieIcon-244c3ab1.js";import{c as nn}from"./clsx-1229b3e0.js";import{r as A}from"./index-1b03fe98.js";import{s,V as p}from"./VariantIcon-c466fe49.js";import{m as tn}from"./style-d1e19ac4.js";import{S as o}from"./Stack-8f9a2dc9.js";const t=A.forwardRef(({render:r,children:O,variant:l="primary",size:G="large",block:H=!1,icon:v,fixedIcon:k,suffixIcon:j,mt:J,mr:K,mb:Q,ml:X,...Y},Z)=>{const y=v==="default"?n.jsx(p,{variant:l}):v,I=k==="default"?n.jsx(p,{variant:l}):k,L=j==="default"?n.jsx(p,{variant:l}):j,$=nn({[s.button]:!0,[s[l]]:!0,[s[G]]:!0,[s.block]:H});return((B,h)=>r?A.cloneElement(r,B,h):n.jsx("a",{...B,children:h}))({className:$,style:{...tn({mt:J,mr:K,mb:Q,ml:X})},...Y,ref:Z},n.jsxs(n.Fragment,{children:[I&&n.jsx("span",{className:s.fixedIcon,children:I}),n.jsxs("span",{className:s.label,children:[y&&n.jsx("span",{className:s.icon,children:y}),O,L&&n.jsx("span",{className:s.suffixIcon,children:L})]})]}))});t.displayName="Link";t.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'large'",computed:!1},required:!1},block:{defaultValue:{value:"false",computed:!1},required:!1}}};const un={title:"Button/LinkButton",component:t},e={children:"ボタン",href:"https://vitals.ubie.life/"},c={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(t,{...e}),n.jsx(t,{...e,variant:"secondary"}),n.jsx(t,{...e,variant:"accent"}),n.jsx(t,{...e,variant:"alert"}),n.jsx(t,{...e,variant:"text"}),n.jsx(t,{...e,variant:"textAlert"})]})})},d={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(t,{...e,size:"small",children:"Small"}),n.jsx(t,{...e,size:"medium",children:"Medium"}),n.jsx(t,{...e,children:"Large"})]})})},x={render:()=>n.jsxs(o,{spacing:"lg",children:[n.jsxs(o,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Default Position"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(t,{icon:n.jsx(i,{}),...e}),n.jsx(t,{icon:n.jsx(i,{}),...e,variant:"secondary"}),n.jsx(t,{icon:n.jsx(i,{}),...e,variant:"accent"}),n.jsx(t,{icon:n.jsx(i,{}),...e,variant:"alert"}),n.jsx(t,{icon:n.jsx(i,{}),...e,variant:"text"}),n.jsx(t,{icon:n.jsx(m,{}),...e,variant:"textAlert"})]})})]}),n.jsxs(o,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Suffix"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(t,{suffixIcon:n.jsx(a,{}),...e}),n.jsx(t,{suffixIcon:n.jsx(a,{}),...e,variant:"secondary"}),n.jsx(t,{suffixIcon:n.jsx(a,{}),...e,variant:"accent"}),n.jsx(t,{suffixIcon:n.jsx(a,{}),...e,variant:"alert"}),n.jsx(t,{suffixIcon:n.jsx(a,{}),...e,variant:"text"}),n.jsx(t,{suffixIcon:n.jsx(a,{}),...e,variant:"textAlert"}),n.jsx(t,{suffixIcon:n.jsx(m,{}),...e,variant:"textAlert"})]})})]}),n.jsxs(o,{spacing:"lg",as:"dl",children:[n.jsx("dt",{style:{fontWeight:"bold"},children:"Position Fixed"}),n.jsx("dd",{style:{margin:0},children:n.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start",gap:"32px"},children:[n.jsx(t,{fixedIcon:n.jsx(a,{}),...e}),n.jsx(t,{fixedIcon:n.jsx(a,{}),...e,variant:"secondary"}),n.jsx(t,{fixedIcon:n.jsx(a,{}),...e,variant:"accent"}),n.jsx(t,{fixedIcon:n.jsx(a,{}),...e,variant:"alert"}),n.jsx(t,{fixedIcon:n.jsx(a,{}),...e,variant:"text"}),n.jsx(t,{fixedIcon:n.jsx(m,{}),...e,variant:"textAlert"})]})})]})]})},u={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsx("div",{children:n.jsx(t,{...e,size:"small",variant:"secondary",block:!0})}),n.jsx("div",{children:n.jsx(t,{...e,size:"medium",variant:"secondary",block:!0})}),n.jsx("div",{children:n.jsx(t,{...e,size:"large",variant:"secondary",block:!0})})]})},f={render:()=>n.jsx("div",{style:{backgroundColor:"var(--color-background-gray)",width:"fit-content",overflow:"hidden"},children:n.jsx(t,{...e,mt:"lg",mr:"lg",mb:"lg",ml:"lg"})})},g={args:{...e,"data-test-id":"link-button-custom-attribute"},render:r=>n.jsx(t,{...r,children:"Please enter in English"})};var b,S,D;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var w,z,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var P,W,N;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(W=x.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var U,V,C;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(C=(V=u.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var M,T,q;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: 'var(--color-background-gray)',
    width: 'fit-content',
    overflow: 'hidden'
  }}>
      <LinkButton {...defaultArgs} mt="lg" mr="lg" mb="lg" ml="lg" />
    </div>
}`,...(q=(T=f.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var F,R,_;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    'data-test-id': 'link-button-custom-attribute'
  },
  render: args => <LinkButton {...args}>Please enter in English</LinkButton>
}`,...(_=(R=g.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const fn=["Default","Size","WithIcon","Block","Margin","CustomDataAttribute"];export{u as Block,g as CustomDataAttribute,c as Default,f as Margin,d as Size,x as WithIcon,fn as __namedExportsOrder,un as default};
