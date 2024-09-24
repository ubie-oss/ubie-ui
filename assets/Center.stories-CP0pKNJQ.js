import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{c as xe}from"./clsx-B-dksMZM.js";import{r as h}from"./index-DX35FyXq.js";import{p as se,m as pe,w as ie}from"./style-D1Pgu1yr.js";import{B as a}from"./Box-CN3-KJuv.js";const me="_center_10fie_1",oe="_textCenter_10fie_11",ce="_childrenCenter_10fie_15",o={center:me,textCenter:oe,childrenCenter:ce},u=({as:r="div",children:X,p:z,px:G,py:K,pt:Q,pr:U,pb:Y,pl:Z,my:$,mt:ee,mb:ue,textCenter:re,childrenCenter:ae,id:ne,width:le,minWidth:te,maxWidth:c,...de})=>((v,C)=>h.isValidElement(r)?e.jsx("div",{...v,children:h.cloneElement(r,r.props,C)}):e.jsx(r,{...v,children:C}))({id:ne,className:xe(o.center,re&&o.textCenter,ae&&o.childrenCenter),style:{"--max-width":c,...se({p:z,px:G,py:K,pt:Q,pr:U,pb:Y,pl:Z}),...pe({my:$,mt:ee,mb:ue}),...ie({width:le,minWidth:te,maxWidth:c})},...de},X);try{u.displayName="Center",u.__docgenInfo={description:"",displayName:"Center",props:{as:{defaultValue:{value:"div"},description:"レンダリングされるHTML要素",name:"as",required:!1,type:{name:"keyof HTMLElementTagNameMap | ReactElement<ComponentType<FC<PropsWithoutText | PropsWithTextBody>>, string | JSXElementConstructor<...>>"}},textCenter:{defaultValue:{value:"false"},description:"内包するテキストを中央に配置。設定は継承され、子孫要素にも影響します",name:"textCenter",required:!1,type:{name:"boolean"}},childrenCenter:{defaultValue:{value:"false"},description:"子要素を中央に配置。孫要素には影響しません",name:"childrenCenter",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"HTMLのID属性の値",name:"id",required:!1,type:{name:"string"}},my:{defaultValue:null,description:`垂直方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"my",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mt:{defaultValue:null,description:"上方向のマージン。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:`下方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},p:{defaultValue:null,description:`四方のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"p",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},px:{defaultValue:null,description:`水平方向のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"px",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},py:{defaultValue:null,description:`垂直方向のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"py",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pt:{defaultValue:null,description:"上方向のパディング。Spacing Tokenのキーを指定",name:"pt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pr:{defaultValue:null,description:`右方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pb:{defaultValue:null,description:`下方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pl:{defaultValue:null,description:`左方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pl",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},width:{defaultValue:null,description:`幅を指定
@defaultValue auto`,name:"width",required:!1,type:{name:"CSSWitdh"}},minWidth:{defaultValue:null,description:`最小幅
@defaultValue auto`,name:"minWidth",required:!1,type:{name:"CSSMinWidth"}},maxWidth:{defaultValue:null,description:`最大幅
@defaultValue none`,name:"maxWidth",required:!1,type:{name:"CSSMaxWidth"}}}}}catch{}const be={component:u},n={render:()=>e.jsx(u,{maxWidth:"400px",children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Rendered as a centered container."})})},l={render:()=>e.jsx(u,{maxWidth:"400px",pt:"md",pl:"xl",pb:"md",pr:"xl",children:e.jsxs(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:["Narrow the screen.",e.jsx("br",{}),"There will be a gap on both sides of the box."]})})},t={render:()=>e.jsx(u,{maxWidth:"400px",textCenter:!0,children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Center"})})},d={render:()=>e.jsx(u,{maxWidth:"400px",childrenCenter:!0,children:e.jsx(a,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Centered Child"})})},x={render:()=>e.jsxs(u,{as:"section",maxWidth:"400px",children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})},s={render:()=>e.jsxs("div",{style:{backgroundColor:"var(--color-background-primary)",overflow:"hidden"},children:[e.jsx("div",{children:"prev element"}),e.jsx(u,{mt:"lg",mb:"lg",pt:"xxl",pr:"xxl",pb:"xxl",pl:"xxl",maxWidth:"400px",children:e.jsxs("div",{style:{width:"100%",backgroundColor:"var(--color-background-accent-darken)",overflow:"hidden"},children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})}),e.jsx("div",{children:"next element"})]})},p={render:()=>e.jsx(u,{maxWidth:"320px",pr:"sm",pl:"sm",as:e.jsx(a,{radius:"md",backgroundColor:"primary",pt:"lg",pr:"lg",pb:"lg",pl:"lg"}),children:e.jsx("div",{children:"Center"})})},i={render:()=>e.jsx(u,{maxWidth:"400px","data-test-id":"some-id",children:"Center"})},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{maxWidth:"100%",textCenter:!0,children:e.jsx("p",{children:"width: 100%"})}),e.jsx("br",{}),e.jsx(u,{maxWidth:"500px",textCenter:!0,children:e.jsx("p",{children:"max-width: 500px"})}),e.jsx("br",{}),e.jsx(u,{minWidth:"500px",textCenter:!0,children:e.jsx("p",{children:"min-width: 500px"})})]})};var g,B,E;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Rendered as a centered container.
      </Box>
    </Center>
}`,...(E=(B=n.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var b,f,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" pt="md" pl="xl" pb="md" pr="xl">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
      </Box>
    </Center>
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var A,D,F;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" textCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Center
      </Box>
    </Center>
}`,...(F=(D=t.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var j,W,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" childrenCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Centered Child
      </Box>
    </Center>
}`,...(S=(W=d.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var V,k,w;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Center as="section" maxWidth="400px">
      <h2>Heading</h2>

      <p>body</p>
    </Center>
}`,...(w=(k=x.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var T,_,q;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(_=s.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var M,H,N;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Center maxWidth="320px" pr="sm" pl="sm" as={<Box radius="md" backgroundColor="primary" pt="lg" pr="lg" pb="lg" pl="lg" />}>
      <div>Center</div>
    </Center>
}`,...(N=(H=p.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var P,R,L;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" data-test-id="some-id">
      Center
    </Center>
}`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var O,I,J;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <>
      <Center maxWidth="100%" textCenter>
        <p>width: 100%</p>
      </Center>

      <br />

      <Center maxWidth="500px" textCenter>
        <p>max-width: 500px</p>
      </Center>

      <br />

      <Center minWidth="500px" textCenter>
        <p>min-width: 500px</p>
      </Center>
    </>
}`,...(J=(I=m.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const fe=["Default","PaddingOutside","TextCenter","ChildrenCenter","AsSection","MarginAndPadding","AsBox","CustomDataAttribute","Width"];export{p as AsBox,x as AsSection,d as ChildrenCenter,i as CustomDataAttribute,n as Default,s as MarginAndPadding,l as PaddingOutside,t as TextCenter,m as Width,fe as __namedExportsOrder,be as default};
