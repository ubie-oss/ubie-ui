import{j as e}from"./jsx-runtime-69eee039.js";import{c as $}from"./clsx-1229b3e0.js";import{r as g}from"./index-7c191284.js";import{p as ee,d as C}from"./style-e9a2251f.js";import{B as a}from"./Box-60833473.js";const re="_center_a95oc_1",ne="_textCenter_a95oc_9",ae="_childrenCenter_a95oc_13",m={center:re,textCenter:ne,childrenCenter:ae},r=({as:n="div",children:I,pt:J,pr:K,pb:X,pl:z,mt:c,mb:x,textCenter:G,childrenCenter:Q,id:U,maxWidth:Y="none",...Z})=>((h,v)=>g.isValidElement(n)?e.jsx("div",{...h,children:g.cloneElement(n,n.props,v)}):e.jsx(n,{...h,children:v}))({id:U,className:$(m.center,G&&m.textCenter,Q&&m.childrenCenter),style:{"--max-width":Y,...ee({pt:J,pr:K,pb:X,pl:z}),"--margin-top":c?C(c):0,"--margin-bottom":x?C(x):0},...Z},I);try{r.displayName="Center",r.__docgenInfo={description:"",displayName:"Center",props:{as:{defaultValue:{value:"div"},description:"レンダリングされるHTML要素",name:"as",required:!1,type:{name:"keyof HTMLElementTagNameMap | ReactElement<ComponentType<FC<PropsWithChildren<PropsWithoutText | PropsWithTextBody | PropsWithTextNote>>>, string | JSXElementConstructor<...>>"}},textCenter:{defaultValue:{value:"false"},description:"内包するテキストを中央に配置。設定は継承され、子孫要素にも影響します",name:"textCenter",required:!1,type:{name:"boolean"}},childrenCenter:{defaultValue:{value:"false"},description:"子要素を中央に配置。孫要素には影響しません",name:"childrenCenter",required:!1,type:{name:"boolean"}},maxWidth:{defaultValue:{value:"none"},description:"横幅の最大値",name:"maxWidth",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"HTMLのID属性の値",name:"id",required:!1,type:{name:"string"}},mt:{defaultValue:null,description:"margin-topの値。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:"margin-bottomの値。Spacing Tokenのキーを指定",name:"mb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pt:{defaultValue:null,description:"padding-topの値。Spacing Tokenのキーを指定",name:"pt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pr:{defaultValue:null,description:"padding-rightの値。Spacing Tokenのキーを指定",name:"pr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pb:{defaultValue:null,description:"padding-bottomの値。Spacing Tokenのキーを指定",name:"pb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pl:{defaultValue:null,description:"padding-leftの値。Spacing Tokenのキーを指定",name:"pl",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}}}}}catch{}const ie={component:r},t={render:()=>e.jsx(r,{maxWidth:"400px",children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Rendered as a centered container."})})},u={render:()=>e.jsx(r,{maxWidth:"400px",pt:"md",pl:"xl",pb:"md",pr:"xl",children:e.jsxs(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:["Narrow the screen.",e.jsx("br",{}),"There will be a gap on both sides of the box."]})})},d={render:()=>e.jsx(r,{maxWidth:"400px",textCenter:!0,children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Center"})})},l={render:()=>e.jsx(r,{maxWidth:"400px",childrenCenter:!0,children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Centered Child"})})},s={render:()=>e.jsxs(r,{as:"section",maxWidth:"400px",children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})},o={render:()=>e.jsxs("div",{style:{backgroundColor:"var(--color-background-primary)",overflow:"hidden"},children:[e.jsx("div",{children:"prev element"}),e.jsx(r,{mt:"lg",mb:"lg",pt:"xxl",pr:"xxl",pb:"xxl",pl:"xxl",maxWidth:"400px",children:e.jsxs("div",{style:{width:"100%",backgroundColor:"var(--color-background-accent-darken)",overflow:"hidden"},children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})}),e.jsx("div",{children:"next element"})]})},i={render:()=>e.jsx(r,{maxWidth:"320px",pr:"sm",pl:"sm",as:e.jsx(a,{radius:"md",backgroundColor:"primary",pt:"lg",pr:"lg",pb:"lg",pl:"lg"}),children:e.jsx("div",{children:"Center"})})},p={render:()=>e.jsx(r,{maxWidth:"400px","data-test-id":"some-id",children:"Center"})};var b,f,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Rendered as a centered container.
      </Box>
    </Center>
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var E,B,j;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" pt="md" pl="xl" pb="md" pr="xl">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
      </Box>
    </Center>
}`,...(j=(B=u.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var A,D,W;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" textCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Center
      </Box>
    </Center>
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var F,_,k;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" childrenCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Centered Child
      </Box>
    </Center>
}`,...(k=(_=l.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var S,T,V;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Center as="section" maxWidth="400px">
      <h2>Heading</h2>

      <p>body</p>
    </Center>
}`,...(V=(T=s.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var q,w,P;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(w=o.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var H,N,M;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Center maxWidth="320px" pr="sm" pl="sm" as={<Box radius="md" backgroundColor="primary" pt="lg" pr="lg" pb="lg" pl="lg" />}>
      <div>Center</div>
    </Center>
}`,...(M=(N=i.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var R,L,O;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" data-test-id="some-id">
      Center
    </Center>
}`,...(O=(L=p.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const pe=["Default","PaddingOutside","TextCenter","ChildrenCenter","AsSection","MarginAndPadding","AsBox","CustomDataAttribute"];export{i as AsBox,s as AsSection,l as ChildrenCenter,p as CustomDataAttribute,t as Default,o as MarginAndPadding,u as PaddingOutside,d as TextCenter,pe as __namedExportsOrder,ie as default};
