import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{F as n}from"./Flex-D7QfXpGR.js";import{B as v}from"./Box-DnwTfOWR.js";import{c as ye}from"./clsx-B-dksMZM.js";import{r as fe}from"./index-DX35FyXq.js";import{p as Ee,m as Ce}from"./style-D1Pgu1yr.js";const be="_flexItem_1ydru_1",Se="_none_1ydru_8",we="_longhand_1ydru_12",g={flexItem:be,none:Se,longhand:we},a=fe.forwardRef(({children:j,flex:s="none",minWidth:re="auto",maxWidth:pe="none",m:ue,mx:te,my:ie,mt:xe,mr:de,mb:me,ml:ce,p:oe,px:he,py:Ie,pt:ve,pr:ge,pb:je,pl:Fe,...De},Be)=>{const Ae=typeof s=="object"?{"--flex-grow":s.grow!=null?s.grow.toString():"0","--flex-shrink":s.shrink!=null?s.shrink.toString():"1","--flex-basis":s.basis??"auto"}:{};return e.jsx("div",{className:ye(g.flexItem,s==="none"&&g.none,typeof s=="object"&&g.longhand),ref:Be,style:{"--min-width":re,"--max-width":pe,...Ae,...Ee({p:oe,px:he,py:Ie,pt:ve,pr:ge,pb:je,pl:Fe}),...Ce({m:ue,mx:te,my:ie,mt:xe,mr:de,mb:me,ml:ce})},...De,children:j})});a.displayName="FlexItem";try{a.displayName="FlexItem",a.__docgenInfo={description:"FlexやStackの子として配置し、レイアウトを調整",displayName:"FlexItem",props:{flex:{defaultValue:{value:"none"},description:"flexの値を指定。 growなどを指定したい場合はオブジェクトで指定",name:"flex",required:!1,type:{name:'"none" | FlexProperty'}},minWidth:{defaultValue:{value:"auto"},description:"最小幅",name:"minWidth",required:!1,type:{name:"CSSMinWidth"}},maxWidth:{defaultValue:{value:"none"},description:"最大幅",name:"maxWidth",required:!1,type:{name:"CSSMaxWidth"}},m:{defaultValue:null,description:`四方のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"m",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mx:{defaultValue:null,description:`水平方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mx",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},my:{defaultValue:null,description:`垂直方向のマージンを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"my",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mt:{defaultValue:null,description:"上方向のマージン。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:`右方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mr",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:`下方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"mb",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:`左方向のマージン。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"ml",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},p:{defaultValue:null,description:`四方のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"p",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},px:{defaultValue:null,description:`水平方向のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"px",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},py:{defaultValue:null,description:`垂直方向のパディングを一括で設定。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"py",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pt:{defaultValue:null,description:"上方向のパディング。Spacing Tokenのキーを指定",name:"pt",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pr:{defaultValue:null,description:`右方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pr",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pb:{defaultValue:null,description:`下方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pb",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pl:{defaultValue:null,description:`左方向のパディング。Spacing Tokenのキーを指定
xxs=4px, xs=8px, sm=12px, md=16px, lg=24px, xl=40px, xxl=64px`,name:"pl",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}}}}}catch{}const He={component:n},l={render:()=>e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx("div",{children:"none"}),e.jsx("div",{children:"none"}),e.jsx("div",{children:"none"})]}),e.jsxs(n,{spacing:"xxs",children:[e.jsx("div",{children:"xxs"}),e.jsx("div",{children:"xxs"}),e.jsx("div",{children:"xxs"})]}),e.jsxs(n,{spacing:"xs",children:[e.jsx("div",{children:"xs"}),e.jsx("div",{children:"xs"}),e.jsx("div",{children:"xs"})]}),e.jsxs(n,{spacing:"sm",children:[e.jsx("div",{children:"sm"}),e.jsx("div",{children:"sm"}),e.jsx("div",{children:"sm"})]}),e.jsxs(n,{spacing:"md",children:[e.jsx("div",{children:"md"}),e.jsx("div",{children:"md"}),e.jsx("div",{children:"md"})]}),e.jsxs(n,{spacing:"lg",children:[e.jsx("div",{children:"lg"}),e.jsx("div",{children:"lg"}),e.jsx("div",{children:"lg"})]}),e.jsxs(n,{spacing:"xl",children:[e.jsx("div",{children:"xl"}),e.jsx("div",{children:"xl"}),e.jsx("div",{children:"xl"})]}),e.jsxs(n,{spacing:"xxl",children:[e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"})]})]})},r={render:()=>e.jsxs("div",{children:[e.jsxs(n,{direction:"column",spacing:"md",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]}),e.jsx("p",{children:"※特別な理由がなければStackをつかってください"})]})},p={render:()=>e.jsx("div",{style:{height:500},children:e.jsxs(n,{spacing:"lg",alignItems:"stretch",height:"full",children:[e.jsx("p",{style:{margin:0,background:"#DDD"},children:"Stretched"}),e.jsx("p",{style:{margin:0,background:"#DDD"},children:"Stretched"})]})})},u={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{justifyContent:"space-between",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]}),e.jsxs(n,{justifyContent:"space-between",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]})]})},t={render:()=>e.jsxs(n,{direction:"row",justifyContent:"center",alignItems:"center",spacing:"sm",children:[e.jsxs("span",{children:["Words",e.jsx("br",{}),"crowded"]}),e.jsx("span",{children:"in"}),e.jsxs("span",{children:["simply",e.jsx("br",{}),"dummy",e.jsx("br",{}),"text"]})]})},i={render:()=>e.jsx("div",{style:{width:500},children:e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]})})},x={render:()=>e.jsxs(n,{as:"section",spacing:"md",alignItems:"center",children:[e.jsx("h1",{children:"Heading"}),e.jsx("p",{children:"text"}),e.jsx("p",{children:"text"}),e.jsx("p",{children:"text"})]})},d={render:()=>e.jsxs(n,{spacing:"md",alignItems:"center",mt:"lg",mr:"lg",mb:"lg",ml:"lg",pt:"xxl",pr:"xxl",pb:"xxl",pl:"xxl",children:[e.jsx("h1",{children:"Heading"}),e.jsx("p",{children:"Section"}),e.jsx("p",{children:"Section"}),e.jsx("p",{children:"Section"})]})},m={render:()=>e.jsxs(n,{spacing:"md",as:e.jsx(v,{radius:"md",backgroundColor:"primary",pt:"lg",pr:"lg",pb:"lg",pl:"lg"}),children:[e.jsx("div",{children:"item"}),e.jsx("div",{children:"item"}),e.jsx("div",{children:"item"})]})},c={render:()=>e.jsx(n,{"data-test-id":"flex-custom-attribute",spacing:"md",alignItems:"center",children:e.jsx("div",{children:"Flex component with custom data attribute"})})},o={render:()=>e.jsx("div",{style:{height:500},children:e.jsxs(n,{spacing:"lg",alignItems:"stretch",height:"full",children:[e.jsxs("p",{style:{margin:0,background:"#DDD"},children:["column",e.jsx("br",{}),"Stretched"]}),e.jsx(a,{children:e.jsxs("p",{style:{margin:0,background:"#DDD"},children:["column",e.jsx("br",{}),"not",e.jsx("br",{}),"stretched"]})}),e.jsx(a,{flex:{grow:1},children:e.jsx("p",{style:{margin:0,background:"#DDD"},children:"row grow"})})]})})},h={render:()=>e.jsxs("div",{children:[e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,width:"100%",children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]}),e.jsx("br",{}),e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,maxWidth:"500px",children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]}),e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,minWidth:"500px",children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]})]})},I={render:()=>e.jsxs("p",{children:["文章文章文章文章文章文章",e.jsxs(n,{as:"span",spacing:"md",inline:!0,children:[e.jsx(v,{as:"span",inline:!0,backgroundColor:"primary",p:"xs",radius:"md",children:"Item"}),e.jsx(v,{as:"span",inline:!0,backgroundColor:"primary",p:"xs",radius:"md",children:"Item"}),e.jsx(v,{as:"span",inline:!0,backgroundColor:"primary",p:"xs",radius:"md",children:"Item"})]}),"文章"]})};var F,D,B;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(D=l.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var A,y,f;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div>
      <Flex direction="column" spacing="md">
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </Flex>

      <p>※特別な理由がなければStackをつかってください</p>
    </div>
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var E,C,b;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(C=p.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var S,w,k;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(w=u.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var V,_,W;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(_=t.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var q,T,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(T=i.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var M,N,P;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Flex as="section" spacing="md" alignItems="center">
      <h1>Heading</h1>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </Flex>
}`,...(P=(N=x.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var z,O,R;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex spacing="md" alignItems="center" mt="lg" mr="lg" mb="lg" ml="lg" pt="xxl" pr="xxl" pb="xxl" pl="xxl">
      <h1>Heading</h1>
      <p>Section</p>
      <p>Section</p>
      <p>Section</p>
    </Flex>
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Flex spacing="md" as={<Box radius="md" backgroundColor="primary" pt="lg" pr="lg" pb="lg" pl="lg" />}>
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </Flex>
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,U;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex data-test-id="flex-custom-attribute" spacing="md" alignItems="center">
      <div>Flex component with custom data attribute</div>
    </Flex>
}`,...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ne=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var se,ae,le;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Me=["Spacing","Vertical","StretchedChildren","SpaceBetween","Centralized","Wrap","AsSection","MarginAndPadding","AsBox","CustomDataAttribute","WithFlexItem","Width","Inline"];export{m as AsBox,x as AsSection,t as Centralized,c as CustomDataAttribute,I as Inline,d as MarginAndPadding,u as SpaceBetween,l as Spacing,p as StretchedChildren,r as Vertical,h as Width,o as WithFlexItem,i as Wrap,Me as __namedExportsOrder,He as default};
