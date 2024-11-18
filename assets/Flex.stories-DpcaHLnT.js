import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{F as n}from"./Flex-DicRxfL2.js";import{B as g}from"./Box-DMAs68iX.js";import{c as be}from"./clsx-B-dksMZM.js";import{r as Se}from"./index-DX35FyXq.js";import{p as we,m as ke}from"./style-D1Pgu1yr.js";const Ve="_flexItem_1ydru_1",_e="_none_1ydru_8",We="_longhand_1ydru_12",j={flexItem:Ve,none:_e,longhand:We},a=Se.forwardRef(({children:F,flex:s="none",minWidth:ue="auto",maxWidth:te="none",m:de,mx:me,my:ce,mt:oe,mr:he,mb:Ie,ml:ve,p:ge,px:je,py:Fe,pt:De,pr:Be,pb:Ae,pl:ye,...fe},Ee)=>{const Ce=typeof s=="object"?{"--flex-grow":s.grow!=null?s.grow.toString():"0","--flex-shrink":s.shrink!=null?s.shrink.toString():"1","--flex-basis":s.basis??"auto"}:{};return e.jsx("div",{className:be(j.flexItem,s==="none"&&j.none,typeof s=="object"&&j.longhand),ref:Ee,style:{"--min-width":ue,"--max-width":te,...Ce,...we({p:ge,px:je,py:Fe,pt:De,pr:Be,pb:Ae,pl:ye}),...ke({m:de,mx:me,my:ce,mt:oe,mr:he,mb:Ie,ml:ve})},...fe,children:F})});a.displayName="FlexItem";try{a.displayName="FlexItem",a.__docgenInfo={description:"FlexやStackの子として配置し、レイアウトを調整",displayName:"FlexItem",props:{flex:{defaultValue:{value:"none"},description:"flexの値を指定。 growなどを指定したい場合はオブジェクトで指定",name:"flex",required:!1,type:{name:'"none" | FlexProperty'}},minWidth:{defaultValue:{value:"auto"},description:"最小幅",name:"minWidth",required:!1,type:{name:"CSSWitdh"}},maxWidth:{defaultValue:{value:"none"},description:"最大幅",name:"maxWidth",required:!1,type:{name:"CSSMaxWidth"}},m:{defaultValue:null,description:`四方のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"m",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mx:{defaultValue:null,description:`水平方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mx",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},my:{defaultValue:null,description:`垂直方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"my",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mt:{defaultValue:null,description:"上方向のマージン。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:`右方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mr",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:`下方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mb",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:`左方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"ml",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},p:{defaultValue:null,description:`四方のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"p",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},px:{defaultValue:null,description:`水平方向のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"px",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},py:{defaultValue:null,description:`垂直方向のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"py",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pt:{defaultValue:null,description:"上方向のパディング。Spacing Tokenのキーを指定",name:"pt",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pr:{defaultValue:null,description:`右方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pr",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pb:{defaultValue:null,description:`下方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pb",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pl:{defaultValue:null,description:`左方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pl",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}}}}}catch{}const ze={component:n},l={render:()=>e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx("div",{children:"none"}),e.jsx("div",{children:"none"}),e.jsx("div",{children:"none"})]}),e.jsxs(n,{spacing:"xxs",children:[e.jsx("div",{children:"xxs"}),e.jsx("div",{children:"xxs"}),e.jsx("div",{children:"xxs"})]}),e.jsxs(n,{spacing:"xs",children:[e.jsx("div",{children:"xs"}),e.jsx("div",{children:"xs"}),e.jsx("div",{children:"xs"})]}),e.jsxs(n,{spacing:"sm",children:[e.jsx("div",{children:"sm"}),e.jsx("div",{children:"sm"}),e.jsx("div",{children:"sm"})]}),e.jsxs(n,{spacing:"md",children:[e.jsx("div",{children:"md"}),e.jsx("div",{children:"md"}),e.jsx("div",{children:"md"})]}),e.jsxs(n,{spacing:"lg",children:[e.jsx("div",{children:"lg"}),e.jsx("div",{children:"lg"}),e.jsx("div",{children:"lg"})]}),e.jsxs(n,{spacing:"xl",children:[e.jsx("div",{children:"xl"}),e.jsx("div",{children:"xl"}),e.jsx("div",{children:"xl"})]}),e.jsxs(n,{spacing:"xxl",children:[e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"})]})]})},r={render:()=>e.jsxs(n,{gap:"xl",children:[e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"})]})},p={render:()=>e.jsxs("div",{children:[e.jsxs(n,{direction:"column",spacing:"md",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]}),e.jsx("p",{children:"※特別な理由がなければStackをつかってください"})]})},i={render:()=>e.jsx("div",{style:{height:500},children:e.jsxs(n,{spacing:"lg",alignItems:"stretch",height:"full",children:[e.jsx("p",{style:{margin:0,background:"#DDD"},children:"Stretched"}),e.jsx("p",{style:{margin:0,background:"#DDD"},children:"Stretched"})]})})},x={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{justifyContent:"space-between",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]}),e.jsxs(n,{justifyContent:"space-between",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]})]})},u={render:()=>e.jsxs(n,{direction:"row",justifyContent:"center",alignItems:"center",spacing:"sm",children:[e.jsxs("span",{children:["Words",e.jsx("br",{}),"crowded"]}),e.jsx("span",{children:"in"}),e.jsxs("span",{children:["simply",e.jsx("br",{}),"dummy",e.jsx("br",{}),"text"]})]})},t={render:()=>e.jsx("div",{style:{width:500},children:e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]})})},d={render:()=>e.jsxs(n,{as:"section",spacing:"md",alignItems:"center",children:[e.jsx("h1",{children:"Heading"}),e.jsx("p",{children:"text"}),e.jsx("p",{children:"text"}),e.jsx("p",{children:"text"})]})},m={render:()=>e.jsxs(n,{spacing:"md",alignItems:"center",mt:"lg",mr:"lg",mb:"lg",ml:"lg",pt:"xxl",pr:"xxl",pb:"xxl",pl:"xxl",children:[e.jsx("h1",{children:"Heading"}),e.jsx("p",{children:"Section"}),e.jsx("p",{children:"Section"}),e.jsx("p",{children:"Section"})]})},c={render:()=>e.jsxs(n,{spacing:"md",as:e.jsx(g,{radius:"md",backgroundColor:"primary",pt:"lg",pr:"lg",pb:"lg",pl:"lg"}),children:[e.jsx("div",{children:"item"}),e.jsx("div",{children:"item"}),e.jsx("div",{children:"item"})]})},o={render:()=>e.jsx(n,{"data-test-id":"flex-custom-attribute",spacing:"md",alignItems:"center",children:e.jsx("div",{children:"Flex component with custom data attribute"})})},h={render:()=>e.jsx("div",{style:{height:500},children:e.jsxs(n,{spacing:"lg",alignItems:"stretch",height:"full",children:[e.jsxs("p",{style:{margin:0,background:"#DDD"},children:["column",e.jsx("br",{}),"Stretched"]}),e.jsx(a,{children:e.jsxs("p",{style:{margin:0,background:"#DDD"},children:["column",e.jsx("br",{}),"not",e.jsx("br",{}),"stretched"]})}),e.jsx(a,{flex:{grow:1},children:e.jsx("p",{style:{margin:0,background:"#DDD"},children:"row grow"})})]})})},I={render:()=>e.jsxs("div",{children:[e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,width:"100%",children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]}),e.jsx("br",{}),e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,maxWidth:"500px",children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]}),e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,minWidth:"500px",children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]})]})},v={render:()=>e.jsxs("p",{children:["文章文章文章文章文章文章",e.jsxs(n,{as:"span",spacing:"md",inline:!0,children:[e.jsx(g,{as:"span",inline:!0,backgroundColor:"primary",p:"xs",radius:"md",children:"Item"}),e.jsx(g,{as:"span",inline:!0,backgroundColor:"primary",p:"xs",radius:"md",children:"Item"}),e.jsx(g,{as:"span",inline:!0,backgroundColor:"primary",p:"xs",radius:"md",children:"Item"})]}),"文章"]})};var D,B,A;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div>
      <Flex>
        <div>none</div>
        <div>none</div>
        <div>none</div>
      </Flex>

      <Flex spacing="xxs">
        <div>xxs</div>
        <div>xxs</div>
        <div>xxs</div>
      </Flex>

      <Flex spacing="xs">
        <div>xs</div>
        <div>xs</div>
        <div>xs</div>
      </Flex>

      <Flex spacing="sm">
        <div>sm</div>
        <div>sm</div>
        <div>sm</div>
      </Flex>

      <Flex spacing="md">
        <div>md</div>
        <div>md</div>
        <div>md</div>
      </Flex>

      <Flex spacing="lg">
        <div>lg</div>
        <div>lg</div>
        <div>lg</div>
      </Flex>

      <Flex spacing="xl">
        <div>xl</div>
        <div>xl</div>
        <div>xl</div>
      </Flex>

      <Flex spacing="xxl">
        <div>xxl</div>
        <div>xxl</div>
        <div>xxl</div>
      </Flex>
    </div>
}`,...(A=(B=l.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var y,f,E;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Flex gap="xl">
      <div>xxl</div>
      <div>xxl</div>
      <div>xxl</div>
    </Flex>
}`,...(E=(f=r.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var C,b,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div>
      <Flex direction="column" spacing="md">
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </Flex>

      <p>※特別な理由がなければStackをつかってください</p>
    </div>
}`,...(S=(b=p.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var w,k,V;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 500
  }}>
      <Flex spacing="lg" alignItems="stretch" height="full">
        <p style={{
        margin: 0,
        background: '#DDD'
      }}>Stretched</p>
        <p style={{
        margin: 0,
        background: '#DDD'
      }}>Stretched</p>
      </Flex>
    </div>
}`,...(V=(k=i.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var _,W,q;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <>
      <Flex justifyContent="space-between">
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </Flex>

      <Flex justifyContent="space-between">
        <p>Item</p>
        <p>Item</p>
      </Flex>
    </>
}`,...(q=(W=x.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var T,H,N;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Flex direction="row" justifyContent="center" alignItems="center" spacing="sm">
      <span>
        Words
        <br />
        crowded
      </span>
      <span>in</span>
      <span>
        simply
        <br />
        dummy
        <br />
        text
      </span>
    </Flex>
}`,...(N=(H=u.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var M,P,z;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 500
  }}>
      <Flex direction="row" alignItems="center" spacing="lg" wrap>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
      </Flex>
    </div>
}`,...(z=(P=t.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var G,O,R;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Flex as="section" spacing="md" alignItems="center">
      <h1>Heading</h1>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </Flex>
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Flex spacing="md" alignItems="center" mt="lg" mr="lg" mb="lg" ml="lg" pt="xxl" pr="xxl" pb="xxl" pl="xxl">
      <h1>Heading</h1>
      <p>Section</p>
      <p>Section</p>
      <p>Section</p>
    </Flex>
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,U,X;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Flex spacing="md" as={<Box radius="md" backgroundColor="primary" pt="lg" pr="lg" pb="lg" pl="lg" />}>
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </Flex>
}`,...(X=(U=c.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Flex data-test-id="flex-custom-attribute" spacing="md" alignItems="center">
      <div>Flex component with custom data attribute</div>
    </Flex>
}`,...($=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,se;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 500
  }}>
      <Flex spacing="lg" alignItems="stretch" height="full">
        <p style={{
        margin: 0,
        background: '#DDD'
      }}>
          column
          <br />
          Stretched
        </p>
        <FlexItem>
          <p style={{
          margin: 0,
          background: '#DDD'
        }}>
            column
            <br />
            not
            <br />
            stretched
          </p>
        </FlexItem>
        <FlexItem flex={{
        grow: 1
      }}>
          <p style={{
          margin: 0,
          background: '#DDD'
        }}>row grow</p>
        </FlexItem>
      </Flex>
    </div>
}`,...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,le,re;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div>
      <Flex direction="row" alignItems="center" spacing="lg" wrap width="100%">
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
      </Flex>

      <br />

      <Flex direction="row" alignItems="center" spacing="lg" wrap maxWidth="500px">
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
      </Flex>

      <Flex direction="row" alignItems="center" spacing="lg" wrap minWidth="500px">
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
        <span>Item</span>
      </Flex>
    </div>
}`,...(re=(le=I.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var pe,ie,xe;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <p>
      文章文章文章文章文章文章
      <Flex as="span" spacing="md" inline>
        <Box as="span" inline backgroundColor="primary" p="xs" radius="md">
          Item
        </Box>
        <Box as="span" inline backgroundColor="primary" p="xs" radius="md">
          Item
        </Box>
        <Box as="span" inline backgroundColor="primary" p="xs" radius="md">
          Item
        </Box>
      </Flex>
      文章
    </p>
}`,...(xe=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:xe.source}}};const Ge=["Spacing","Gap","Vertical","StretchedChildren","SpaceBetween","Centralized","Wrap","AsSection","MarginAndPadding","AsBox","CustomDataAttribute","WithFlexItem","Width","Inline"];export{c as AsBox,d as AsSection,u as Centralized,o as CustomDataAttribute,r as Gap,v as Inline,m as MarginAndPadding,x as SpaceBetween,l as Spacing,i as StretchedChildren,p as Vertical,I as Width,h as WithFlexItem,t as Wrap,Ge as __namedExportsOrder,ze as default};
