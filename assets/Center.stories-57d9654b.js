import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as Q}from"./clsx-1229b3e0.js";import{r as v}from"./index-1b03fe98.js";import{p as U,d as h}from"./style-d1e19ac4.js";import{B as a}from"./Box-3dae8d2b.js";const X="_center_iias4_1",Y="_textCenter_iias4_9",Z="_childrenCenter_iias4_13",p={center:X,textCenter:Y,childrenCenter:Z},r=({as:n="div",children:P,pt:D,pr:O,pb:I,pl:F,mt:x,mb:c,textCenter:K,childrenCenter:z,id:G,maxWidth:J="none"})=>((u,g)=>v.isValidElement(n)?e.jsx("div",{...u,children:v.cloneElement(n,n.props,g)}):e.jsx(n,{...u,children:g}))({id:G,className:Q(p.center,K&&p.textCenter,z&&p.childrenCenter),style:{"--max-width":J,...U({pt:D,pr:O,pb:I,pl:F}),"--margin-top":x?h(x):0,"--margin-bottom":c?h(c):0}},P);r.__docgenInfo={description:"",methods:[],displayName:"Center",props:{as:{required:!1,tsType:{name:"union",raw:"HTMLTagname | ReactElement<ComponentType<typeof Box>>",elements:[{name:"HTMLElementTagNameMap"},{name:"ReactElement",elements:[{name:"ComponentType",elements:[{name:"Box"}],raw:"ComponentType<typeof Box>"}],raw:"ReactElement<ComponentType<typeof Box>>"}]},description:`レンダリングされるHTML要素
@default div`,defaultValue:{value:"'div'",computed:!1}},textCenter:{required:!1,tsType:{name:"boolean"},description:`内包するテキストを中央に配置。設定は継承され、子孫要素にも影響します
@default false`},childrenCenter:{required:!1,tsType:{name:"boolean"},description:`子要素を中央に配置。孫要素には影響しません
@default false`},maxWidth:{required:!1,tsType:{name:"string"},description:`横幅の最大値
@default none`,defaultValue:{value:"'none'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTMLのID属性の値"},mt:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"margin-topの値。Spacing Tokenのキーを指定"},mb:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"margin-bottomの値。Spacing Tokenのキーを指定"},pt:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-topの値。Spacing Tokenのキーを指定"},pr:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-rightの値。Spacing Tokenのキーを指定"},pb:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-bottomの値。Spacing Tokenのキーを指定"},pl:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-leftの値。Spacing Tokenのキーを指定"}}};const te={component:r},l={render:()=>e.jsx(r,{maxWidth:"400px",children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Rendered as a centered container."})})},t={render:()=>e.jsx(r,{maxWidth:"400px",pt:"md",pl:"xl",pb:"md",pr:"xl",children:e.jsxs(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:["Narrow the screen.",e.jsx("br",{}),"There will be a gap on both sides of the box."]})})},d={render:()=>e.jsx(r,{maxWidth:"400px",textCenter:!0,children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Center"})})},s={render:()=>e.jsx(r,{maxWidth:"400px",childrenCenter:!0,children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Centered Child"})})},i={render:()=>e.jsxs(r,{as:"section",maxWidth:"400px",children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})},m={render:()=>e.jsxs("div",{style:{backgroundColor:"var(--color-background-primary)",overflow:"hidden"},children:[e.jsx("div",{children:"prev element"}),e.jsx(r,{mt:"lg",mb:"lg",pt:"xxl",pr:"xxl",pb:"xxl",pl:"xxl",maxWidth:"400px",children:e.jsxs("div",{style:{width:"100%",backgroundColor:"var(--color-background-accent-darken)",overflow:"hidden"},children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})}),e.jsx("div",{children:"next element"})]})},o={render:()=>e.jsx(r,{maxWidth:"320px",pr:"sm",pl:"sm",as:e.jsx(a,{radius:"md",backgroundColor:"primary",pt:"lg",pr:"lg",pb:"lg",pl:"lg"}),children:e.jsx("div",{children:"Center"})})};var b,C,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Rendered as a centered container.
      </Box>
    </Center>
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var f,T,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" pt="md" pl="xl" pb="md" pr="xl">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
      </Box>
    </Center>
}`,...(j=(T=t.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var w,k,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" textCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Center
      </Box>
    </Center>
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var S,W,_;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" childrenCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Centered Child
      </Box>
    </Center>
}`,...(_=(W=s.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,E,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Center as="section" maxWidth="400px">
      <h2>Heading</h2>

      <p>body</p>
    </Center>
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var M,A,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    backgroundColor: 'var(--color-background-primary)',
    overflow: 'hidden'
  }}>
      <div>prev element</div>

      <Center mt="lg" mb="lg" pt="xxl" pr="xxl" pb="xxl" pl="xxl" maxWidth="400px">
        <div style={{
        width: '100%',
        backgroundColor: 'var(--color-background-accent-darken)',
        overflow: 'hidden'
      }}>
          <h2>Heading</h2>
          <p>body</p>
        </div>
      </Center>

      <div>next element</div>
    </div>
}`,...(R=(A=m.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var N,V,L;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Center maxWidth="320px" pr="sm" pl="sm" as={<Box radius="md" backgroundColor="primary" pt="lg" pr="lg" pb="lg" pl="lg" />}>
      <div>Center</div>
    </Center>
}`,...(L=(V=o.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const de=["Default","PaddingOutside","TextCenter","ChildrenCenter","AsSection","MarginAndPadding","AsBox"];export{o as AsBox,i as AsSection,s as ChildrenCenter,l as Default,m as MarginAndPadding,t as PaddingOutside,d as TextCenter,de as __namedExportsOrder,te as default};
