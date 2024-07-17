import{j as e}from"./jsx-runtime-69eee039.js";import{F as n}from"./Flex-5762e979.js";import{B as ve}from"./Box-a5485b35.js";import{c as ge}from"./clsx-1229b3e0.js";import{r as he}from"./index-7c191284.js";import{p as je,m as Fe}from"./style-1d55b7c3.js";const Ie="_flexItem_1ydru_1",De="_none_1ydru_8",Ae="_longhand_1ydru_12",v={flexItem:Ie,none:De,longhand:Ae},u=he.forwardRef(({children:g,flex:s="none",minWidth:X="auto",maxWidth:Y="none",m:Z,mx:$,my:ee,mt:ne,mr:se,mb:ue,ml:le,p:ae,px:xe,py:re,pt:ie,pr:de,pb:te,pl:pe,...me},ce)=>{const oe=typeof s=="object"?{"--flex-grow":s.grow!=null?s.grow.toString():"0","--flex-shrink":s.shrink!=null?s.shrink.toString():"1","--flex-basis":s.basis??"auto"}:{};return e.jsx("div",{className:ge(v.flexItem,s==="none"&&v.none,typeof s=="object"&&v.longhand),ref:ce,style:{"--min-width":X,"--max-width":Y,...oe,...je({p:ae,px:xe,py:re,pt:ie,pr:de,pb:te,pl:pe}),...Fe({m:Z,mx:$,my:ee,mt:ne,mr:se,mb:ue,ml:le})},...me,children:g})});u.displayName="FlexItem";try{u.displayName="FlexItem",u.__docgenInfo={description:"FlexやStackの子として配置し、レイアウトを調整",displayName:"FlexItem",props:{flex:{defaultValue:{value:"none"},description:`flexの値を指定。 growなどを指定したい場合はオブジェクトで指定
@defaultValue none`,name:"flex",required:!1,type:{name:'"none" | FlexProperty'}},minWidth:{defaultValue:{value:"auto"},description:"最小幅",name:"minWidth",required:!1,type:{name:"CSSMinWidth"}},maxWidth:{defaultValue:{value:"none"},description:"最大幅",name:"maxWidth",required:!1,type:{name:"CSSMaxWidth"}},m:{defaultValue:null,description:`四方のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"m",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mx:{defaultValue:null,description:`水平方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mx",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},my:{defaultValue:null,description:`垂直方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"my",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mt:{defaultValue:null,description:"上方向のマージン。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:`右方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:`下方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:`左方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"ml",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},p:{defaultValue:null,description:`四方のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"p",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},px:{defaultValue:null,description:`水平方向のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"px",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},py:{defaultValue:null,description:`垂直方向のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"py",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pt:{defaultValue:null,description:"上方向のパディング。Spacing Tokenのキーを指定",name:"pt",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pr:{defaultValue:null,description:`右方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pr",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pb:{defaultValue:null,description:`下方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pb",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},pl:{defaultValue:null,description:`左方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pl",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}}}}}catch{}const be={component:n},l={render:()=>e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx("div",{children:"none"}),e.jsx("div",{children:"none"}),e.jsx("div",{children:"none"})]}),e.jsxs(n,{spacing:"xxs",children:[e.jsx("div",{children:"xxs"}),e.jsx("div",{children:"xxs"}),e.jsx("div",{children:"xxs"})]}),e.jsxs(n,{spacing:"xs",children:[e.jsx("div",{children:"xs"}),e.jsx("div",{children:"xs"}),e.jsx("div",{children:"xs"})]}),e.jsxs(n,{spacing:"sm",children:[e.jsx("div",{children:"sm"}),e.jsx("div",{children:"sm"}),e.jsx("div",{children:"sm"})]}),e.jsxs(n,{spacing:"md",children:[e.jsx("div",{children:"md"}),e.jsx("div",{children:"md"}),e.jsx("div",{children:"md"})]}),e.jsxs(n,{spacing:"lg",children:[e.jsx("div",{children:"lg"}),e.jsx("div",{children:"lg"}),e.jsx("div",{children:"lg"})]}),e.jsxs(n,{spacing:"xl",children:[e.jsx("div",{children:"xl"}),e.jsx("div",{children:"xl"}),e.jsx("div",{children:"xl"})]}),e.jsxs(n,{spacing:"xxl",children:[e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"})]})]})},a={render:()=>e.jsxs("div",{children:[e.jsxs(n,{direction:"column",spacing:"md",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]}),e.jsx("p",{children:"※特別な理由がなければStackをつかってください"})]})},x={render:()=>e.jsx("div",{style:{height:500},children:e.jsxs(n,{spacing:"lg",alignItems:"stretch",height:"full",children:[e.jsx("p",{style:{margin:0,background:"#DDD"},children:"Stretched"}),e.jsx("p",{style:{margin:0,background:"#DDD"},children:"Stretched"})]})})},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{justifyContent:"space-between",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]}),e.jsxs(n,{justifyContent:"space-between",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]})]})},i={render:()=>e.jsxs(n,{direction:"row",justifyContent:"center",alignItems:"center",spacing:"sm",children:[e.jsxs("span",{children:["Words",e.jsx("br",{}),"crowded"]}),e.jsx("span",{children:"in"}),e.jsxs("span",{children:["simply",e.jsx("br",{}),"dummy",e.jsx("br",{}),"text"]})]})},d={render:()=>e.jsx("div",{style:{width:500},children:e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]})})},t={render:()=>e.jsxs(n,{as:"section",spacing:"md",alignItems:"center",children:[e.jsx("h1",{children:"Heading"}),e.jsx("p",{children:"text"}),e.jsx("p",{children:"text"}),e.jsx("p",{children:"text"})]})},p={render:()=>e.jsxs(n,{spacing:"md",alignItems:"center",mt:"lg",mr:"lg",mb:"lg",ml:"lg",pt:"xxl",pr:"xxl",pb:"xxl",pl:"xxl",children:[e.jsx("h1",{children:"Heading"}),e.jsx("p",{children:"Section"}),e.jsx("p",{children:"Section"}),e.jsx("p",{children:"Section"})]})},m={render:()=>e.jsxs(n,{spacing:"md",as:e.jsx(ve,{radius:"md",backgroundColor:"primary",pt:"lg",pr:"lg",pb:"lg",pl:"lg"}),children:[e.jsx("div",{children:"item"}),e.jsx("div",{children:"item"}),e.jsx("div",{children:"item"})]})},c={render:()=>e.jsx(n,{"data-test-id":"flex-custom-attribute",spacing:"md",alignItems:"center",children:e.jsx("div",{children:"Flex component with custom data attribute"})})},o={render:()=>e.jsx("div",{style:{height:500},children:e.jsxs(n,{spacing:"lg",alignItems:"stretch",height:"full",children:[e.jsxs("p",{style:{margin:0,background:"#DDD"},children:["column",e.jsx("br",{}),"Stretched"]}),e.jsx(u,{children:e.jsxs("p",{style:{margin:0,background:"#DDD"},children:["column",e.jsx("br",{}),"not",e.jsx("br",{}),"stretched"]})}),e.jsx(u,{flex:{grow:1},children:e.jsx("p",{style:{margin:0,background:"#DDD"},children:"row grow"})})]})})};var h,j,F;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(F=(j=l.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var I,D,A;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div>
      <Flex direction="column" spacing="md">
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </Flex>

      <p>※特別な理由がなければStackをつかってください</p>
    </div>
}`,...(A=(D=a.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var B,f,E;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(f=x.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var y,C,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,k,w;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var V,_,q;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var T,W,H;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Flex as="section" spacing="md" alignItems="center">
      <h1>Heading</h1>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </Flex>
}`,...(H=(W=t.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var M,N,P;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Flex spacing="md" alignItems="center" mt="lg" mr="lg" mb="lg" ml="lg" pt="xxl" pr="xxl" pb="xxl" pl="xxl">
      <h1>Heading</h1>
      <p>Section</p>
      <p>Section</p>
      <p>Section</p>
    </Flex>
}`,...(P=(N=p.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var z,O,R;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex spacing="md" as={<Box radius="md" backgroundColor="primary" pt="lg" pr="lg" pb="lg" pl="lg" />}>
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </Flex>
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var G,J,K;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Flex data-test-id="flex-custom-attribute" spacing="md" alignItems="center">
      <div>Flex component with custom data attribute</div>
    </Flex>
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,U;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ke=["Spacing","Vertical","StretchedChildren","SpaceBetween","Centralized","Wrap","AsSection","MarginAndPadding","AsBox","CustomDataAttribute","WithFlexItem"];export{m as AsBox,t as AsSection,i as Centralized,c as CustomDataAttribute,p as MarginAndPadding,r as SpaceBetween,l as Spacing,x as StretchedChildren,a as Vertical,o as WithFlexItem,d as Wrap,ke as __namedExportsOrder,be as default};
