import{j as e}from"./jsx-runtime-69eee039.js";import{F as n}from"./Flex-3f957398.js";import{B as g}from"./Box-20dbcffa.js";import{c as Fe}from"./clsx-1229b3e0.js";import{r as Ae}from"./index-7c191284.js";import{p as Be,m as De}from"./style-1d55b7c3.js";const Ee="_flexItem_1ydru_1",ye="_none_1ydru_8",fe="_longhand_1ydru_12",h={flexItem:Ee,none:ye,longhand:fe},u=Ae.forwardRef(({children:j,flex:s="none",minWidth:ne="auto",maxWidth:se="none",m:ue,mx:le,my:ae,mt:re,mr:xe,mb:ie,ml:de,p:te,px:pe,py:me,pt:ce,pr:oe,pb:ve,pl:ge,...he},je)=>{const Ie=typeof s=="object"?{"--flex-grow":s.grow!=null?s.grow.toString():"0","--flex-shrink":s.shrink!=null?s.shrink.toString():"1","--flex-basis":s.basis??"auto"}:{};return e.jsx("div",{className:Fe(h.flexItem,s==="none"&&h.none,typeof s=="object"&&h.longhand),ref:je,style:{"--min-width":ne,"--max-width":se,...Ie,...Be({p:te,px:pe,py:me,pt:ce,pr:oe,pb:ve,pl:ge}),...De({m:ue,mx:le,my:ae,mt:re,mr:xe,mb:ie,ml:de})},...he,children:j})});u.displayName="FlexItem";try{u.displayName="FlexItem",u.__docgenInfo={description:"FlexやStackの子として配置し、レイアウトを調整",displayName:"FlexItem",props:{flex:{defaultValue:{value:"none"},description:`flexの値を指定。 growなどを指定したい場合はオブジェクトで指定
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
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pl",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}}}}}catch{}const _e={component:n},l={render:()=>e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx("div",{children:"none"}),e.jsx("div",{children:"none"}),e.jsx("div",{children:"none"})]}),e.jsxs(n,{spacing:"xxs",children:[e.jsx("div",{children:"xxs"}),e.jsx("div",{children:"xxs"}),e.jsx("div",{children:"xxs"})]}),e.jsxs(n,{spacing:"xs",children:[e.jsx("div",{children:"xs"}),e.jsx("div",{children:"xs"}),e.jsx("div",{children:"xs"})]}),e.jsxs(n,{spacing:"sm",children:[e.jsx("div",{children:"sm"}),e.jsx("div",{children:"sm"}),e.jsx("div",{children:"sm"})]}),e.jsxs(n,{spacing:"md",children:[e.jsx("div",{children:"md"}),e.jsx("div",{children:"md"}),e.jsx("div",{children:"md"})]}),e.jsxs(n,{spacing:"lg",children:[e.jsx("div",{children:"lg"}),e.jsx("div",{children:"lg"}),e.jsx("div",{children:"lg"})]}),e.jsxs(n,{spacing:"xl",children:[e.jsx("div",{children:"xl"}),e.jsx("div",{children:"xl"}),e.jsx("div",{children:"xl"})]}),e.jsxs(n,{spacing:"xxl",children:[e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"})]})]})},a={render:()=>e.jsxs("div",{children:[e.jsxs(n,{direction:"column",spacing:"md",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]}),e.jsx("p",{children:"※特別な理由がなければStackをつかってください"})]})},r={render:()=>e.jsx("div",{style:{height:500},children:e.jsxs(n,{spacing:"lg",alignItems:"stretch",height:"full",children:[e.jsx("p",{style:{margin:0,background:"#DDD"},children:"Stretched"}),e.jsx("p",{style:{margin:0,background:"#DDD"},children:"Stretched"})]})})},x={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{justifyContent:"space-between",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]}),e.jsxs(n,{justifyContent:"space-between",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]})]})},i={render:()=>e.jsxs(n,{direction:"row",justifyContent:"center",alignItems:"center",spacing:"sm",children:[e.jsxs("span",{children:["Words",e.jsx("br",{}),"crowded"]}),e.jsx("span",{children:"in"}),e.jsxs("span",{children:["simply",e.jsx("br",{}),"dummy",e.jsx("br",{}),"text"]})]})},d={render:()=>e.jsx("div",{style:{width:500},children:e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]})})},t={render:()=>e.jsxs(n,{as:"section",spacing:"md",alignItems:"center",children:[e.jsx("h1",{children:"Heading"}),e.jsx("p",{children:"text"}),e.jsx("p",{children:"text"}),e.jsx("p",{children:"text"})]})},p={render:()=>e.jsxs(n,{spacing:"md",alignItems:"center",mt:"lg",mr:"lg",mb:"lg",ml:"lg",pt:"xxl",pr:"xxl",pb:"xxl",pl:"xxl",children:[e.jsx("h1",{children:"Heading"}),e.jsx("p",{children:"Section"}),e.jsx("p",{children:"Section"}),e.jsx("p",{children:"Section"})]})},m={render:()=>e.jsxs(n,{spacing:"md",as:e.jsx(g,{radius:"md",backgroundColor:"primary",pt:"lg",pr:"lg",pb:"lg",pl:"lg"}),children:[e.jsx("div",{children:"item"}),e.jsx("div",{children:"item"}),e.jsx("div",{children:"item"})]})},c={render:()=>e.jsx(n,{"data-test-id":"flex-custom-attribute",spacing:"md",alignItems:"center",children:e.jsx("div",{children:"Flex component with custom data attribute"})})},o={render:()=>e.jsx("div",{style:{height:500},children:e.jsxs(n,{spacing:"lg",alignItems:"stretch",height:"full",children:[e.jsxs("p",{style:{margin:0,background:"#DDD"},children:["column",e.jsx("br",{}),"Stretched"]}),e.jsx(u,{children:e.jsxs("p",{style:{margin:0,background:"#DDD"},children:["column",e.jsx("br",{}),"not",e.jsx("br",{}),"stretched"]})}),e.jsx(u,{flex:{grow:1},children:e.jsx("p",{style:{margin:0,background:"#DDD"},children:"row grow"})})]})})},v={render:()=>e.jsxs("p",{children:["文章文章文章文章文章文章",e.jsxs(n,{as:"span",spacing:"md",inline:!0,children:[e.jsx(g,{as:"span",inline:!0,backgroundColor:"primary",p:"xs",radius:"md",children:"Item"}),e.jsx(g,{as:"span",inline:!0,backgroundColor:"primary",p:"xs",radius:"md",children:"Item"}),e.jsx(g,{as:"span",inline:!0,backgroundColor:"primary",p:"xs",radius:"md",children:"Item"})]}),"文章"]})};var I,F,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(F=l.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var B,D,E;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div>
      <Flex direction="column" spacing="md">
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </Flex>

      <p>※特別な理由がなければStackをつかってください</p>
    </div>
}`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var y,f,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var b,S,k;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(S=x.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,V,_;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(V=i.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,T,W;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(T=d.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var H,M,N;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Flex as="section" spacing="md" alignItems="center">
      <h1>Heading</h1>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </Flex>
}`,...(N=(M=t.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var P,z,O;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Flex spacing="md" alignItems="center" mt="lg" mr="lg" mb="lg" ml="lg" pt="xxl" pr="xxl" pb="xxl" pl="xxl">
      <h1>Heading</h1>
      <p>Section</p>
      <p>Section</p>
      <p>Section</p>
    </Flex>
}`,...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var R,G,J;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Flex spacing="md" as={<Box radius="md" backgroundColor="primary" pt="lg" pr="lg" pb="lg" pl="lg" />}>
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </Flex>
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,Q;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Flex data-test-id="flex-custom-attribute" spacing="md" alignItems="center">
      <div>Flex component with custom data attribute</div>
    </Flex>
}`,...(Q=(L=c.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,Y;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=o.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const qe=["Spacing","Vertical","StretchedChildren","SpaceBetween","Centralized","Wrap","AsSection","MarginAndPadding","AsBox","CustomDataAttribute","WithFlexItem","Inline"];export{m as AsBox,t as AsSection,i as Centralized,c as CustomDataAttribute,v as Inline,p as MarginAndPadding,x as SpaceBetween,l as Spacing,r as StretchedChildren,a as Vertical,o as WithFlexItem,d as Wrap,qe as __namedExportsOrder,_e as default};
