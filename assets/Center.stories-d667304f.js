import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as R}from"./clsx-1229b3e0.js";import{p as I,d as p}from"./style-d1e19ac4.js";import{B as s}from"./Box-29ccebc9.js";import"./index-1b03fe98.js";const F="_center_iias4_1",K="_textCenter_iias4_9",z="_childrenCenter_iias4_13",m={center:F,textCenter:K,childrenCenter:z},r=({as:H="div",children:M,pt:N,pr:A,pb:P,pl:V,mt:o,mb:x,textCenter:D,childrenCenter:E,id:L,maxWidth:O="none"})=>e.jsx(H,{id:L,className:R(m.center,D&&m.textCenter,E&&m.childrenCenter),style:{"--max-width":O,...I({pt:N,pr:A,pb:P,pl:V}),"--margin-top":o?p(o):0,"--margin-bottom":x?p(x):0},children:M});r.__docgenInfo={description:"",methods:[],displayName:"Center",props:{as:{required:!1,tsType:{name:"HTMLElementTagNameMap"},description:`レンダリングされるHTML要素
@default div`,defaultValue:{value:"'div'",computed:!1}},textCenter:{required:!1,tsType:{name:"boolean"},description:`内包するテキストを中央に配置。設定は継承され、子孫要素にも影響します
@default false`},childrenCenter:{required:!1,tsType:{name:"boolean"},description:`子要素を中央に配置。孫要素には影響しません
@default false`},maxWidth:{required:!1,tsType:{name:"string"},description:`横幅の最大値
@default none`,defaultValue:{value:"'none'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTMLのID属性の値"},mt:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"margin-topの値。Spacing Tokenのキーを指定"},mb:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"margin-bottomの値。Spacing Tokenのキーを指定"},pt:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-topの値。Spacing Tokenのキーを指定"},pr:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-rightの値。Spacing Tokenのキーを指定"},pb:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-bottomの値。Spacing Tokenのキーを指定"},pl:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-leftの値。Spacing Tokenのキーを指定"}}};const Y={component:r},a={render:()=>e.jsx(r,{maxWidth:"400px",children:e.jsx(s,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Rendered as a centered container."})})},n={render:()=>e.jsx(r,{maxWidth:"400px",pt:"md",pl:"xl",pb:"md",pr:"xl",children:e.jsxs(s,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:["Narrow the screen.",e.jsx("br",{}),"There will be a gap on both sides of the box."]})})},l={render:()=>e.jsx(r,{maxWidth:"400px",textCenter:!0,children:e.jsx(s,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Center"})})},t={render:()=>e.jsx(r,{maxWidth:"400px",childrenCenter:!0,children:e.jsx(s,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Centered Child"})})},d={render:()=>e.jsxs(r,{as:"section",maxWidth:"400px",children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})},i={render:()=>e.jsxs("div",{style:{backgroundColor:"var(--color-background-primary)",overflow:"hidden"},children:[e.jsx("div",{children:"prev element"}),e.jsx(r,{mt:"lg",mb:"lg",pt:"xxl",pr:"xxl",pb:"xxl",pl:"xxl",maxWidth:"400px",children:e.jsxs("div",{style:{width:"100%",backgroundColor:"var(--color-background-accent-darken)",overflow:"hidden"},children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})}),e.jsx("div",{children:"next element"})]})};var c,u,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Rendered as a centered container.
      </Box>
    </Center>
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,h,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" pt="md" pl="xl" pb="md" pr="xl">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
      </Box>
    </Center>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var C,f,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" textCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Center
      </Box>
    </Center>
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var T,j,w;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" childrenCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Centered Child
      </Box>
    </Center>
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var k,S,_;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Center as="section" maxWidth="400px">
      <h2>Heading</h2>

      <p>body</p>
    </Center>
}`,...(_=(S=d.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var W,q,B;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(B=(q=i.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const Z=["Default","PaddingOutside","TextCenter","ChildrenCenter","AsSection","MarginAndPadding"];export{d as AsSection,t as ChildrenCenter,a as Default,i as MarginAndPadding,n as PaddingOutside,l as TextCenter,Z as __namedExportsOrder,Y as default};
