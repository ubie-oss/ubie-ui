import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as $}from"./clsx-1229b3e0.js";import{r as v}from"./index-1b03fe98.js";import{p as ee,d as b}from"./style-d1e19ac4.js";import{B as a}from"./Box-10e59430.js";const re="_center_a95oc_1",ae="_textCenter_a95oc_9",ne="_childrenCenter_a95oc_13",x={center:re,textCenter:ae,childrenCenter:ne},r=({as:n="div",children:F,pt:K,pr:z,pb:G,pl:J,mt:c,mb:u,textCenter:Q,childrenCenter:U,id:X,maxWidth:Y="none",...Z})=>((g,h)=>v.isValidElement(n)?e.jsx("div",{...g,children:v.cloneElement(n,n.props,h)}):e.jsx(n,{...g,children:h}))({id:X,className:$(x.center,Q&&x.textCenter,U&&x.childrenCenter),style:{"--max-width":Y,...ee({pt:K,pr:z,pb:G,pl:J}),"--margin-top":c?b(c):0,"--margin-bottom":u?b(u):0},...Z},F);r.__docgenInfo={description:"",methods:[],displayName:"Center",props:{as:{required:!1,tsType:{name:"union",raw:"HTMLTagname | ReactElement<ComponentType<typeof Box>>",elements:[{name:"HTMLElementTagNameMap"},{name:"ReactElement",elements:[{name:"ComponentType",elements:[{name:"Box"}],raw:"ComponentType<typeof Box>"}],raw:"ReactElement<ComponentType<typeof Box>>"}]},description:`レンダリングされるHTML要素
@default div`,defaultValue:{value:"'div'",computed:!1}},textCenter:{required:!1,tsType:{name:"boolean"},description:`内包するテキストを中央に配置。設定は継承され、子孫要素にも影響します
@default false`},childrenCenter:{required:!1,tsType:{name:"boolean"},description:`子要素を中央に配置。孫要素には影響しません
@default false`},maxWidth:{required:!1,tsType:{name:"string"},description:`横幅の最大値
@default none`,defaultValue:{value:"'none'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTMLのID属性の値"},mt:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"margin-topの値。Spacing Tokenのキーを指定"},mb:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"margin-bottomの値。Spacing Tokenのキーを指定"},pt:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-topの値。Spacing Tokenのキーを指定"},pr:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-rightの値。Spacing Tokenのキーを指定"},pb:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-bottomの値。Spacing Tokenのキーを指定"},pl:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-leftの値。Spacing Tokenのキーを指定"}}};const oe={component:r},l={render:()=>e.jsx(r,{maxWidth:"400px",children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Rendered as a centered container."})})},t={render:()=>e.jsx(r,{maxWidth:"400px",pt:"md",pl:"xl",pb:"md",pr:"xl",children:e.jsxs(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:["Narrow the screen.",e.jsx("br",{}),"There will be a gap on both sides of the box."]})})},d={render:()=>e.jsx(r,{maxWidth:"400px",textCenter:!0,children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Center"})})},s={render:()=>e.jsx(r,{maxWidth:"400px",childrenCenter:!0,children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Centered Child"})})},i={render:()=>e.jsxs(r,{as:"section",maxWidth:"400px",children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})},m={render:()=>e.jsxs("div",{style:{backgroundColor:"var(--color-background-primary)",overflow:"hidden"},children:[e.jsx("div",{children:"prev element"}),e.jsx(r,{mt:"lg",mb:"lg",pt:"xxl",pr:"xxl",pb:"xxl",pl:"xxl",maxWidth:"400px",children:e.jsxs("div",{style:{width:"100%",backgroundColor:"var(--color-background-accent-darken)",overflow:"hidden"},children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})}),e.jsx("div",{children:"next element"})]})},o={render:()=>e.jsx(r,{maxWidth:"320px",pr:"sm",pl:"sm",as:e.jsx(a,{radius:"md",backgroundColor:"primary",pt:"lg",pr:"lg",pb:"lg",pl:"lg"}),children:e.jsx("div",{children:"Center"})})},p={render:()=>e.jsx(r,{maxWidth:"400px","data-test-id":"some-id",children:"Center"})};var C,y,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Rendered as a centered container.
      </Box>
    </Center>
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var T,j,w;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" pt="md" pl="xl" pb="md" pr="xl">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
      </Box>
    </Center>
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,B,S;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" textCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Center
      </Box>
    </Center>
}`,...(S=(B=d.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var W,_,q;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" childrenCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Centered Child
      </Box>
    </Center>
}`,...(q=(_=s.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var E,A,H;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Center as="section" maxWidth="400px">
      <h2>Heading</h2>

      <p>body</p>
    </Center>
}`,...(H=(A=i.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var M,R,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var N,V,L;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Center maxWidth="320px" pr="sm" pl="sm" as={<Box radius="md" backgroundColor="primary" pt="lg" pr="lg" pb="lg" pl="lg" />}>
      <div>Center</div>
    </Center>
}`,...(L=(V=o.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var P,O,I;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" data-test-id="some-id">
      Center
    </Center>
}`,...(I=(O=p.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const pe=["Default","PaddingOutside","TextCenter","ChildrenCenter","AsSection","MarginAndPadding","AsBox","CustomDataAttribute"];export{o as AsBox,i as AsSection,s as ChildrenCenter,p as CustomDataAttribute,l as Default,m as MarginAndPadding,t as PaddingOutside,d as TextCenter,pe as __namedExportsOrder,oe as default};
