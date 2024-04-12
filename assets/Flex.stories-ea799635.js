import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as A}from"./clsx-1229b3e0.js";import"./index-1b03fe98.js";const E="_flex_1f77r_1",N="_heightFull_1f77r_9",O="_widthFull_1f77r_13",d={flex:E,heightFull:N,widthFull:O},n=({children:D,direction:q="row",alignItems:T="flex-start",justifyContent:k="flex-start",wrap:V=!1,spacing:c,height:B,width:W})=>{const z=c?`var(--size-spacing-${c})`:"0";return e.jsx("div",{className:A(d.flex,B==="full"&&d.heightFull,W==="full"&&d.widthFull),style:{"--gap":z,"--flex-direction":q,"--align-items":T,"--justify-content":k,"--flex-wrap":V?"wrap":"nowrap"},children:D})};n.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{spacing:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"子要素同士の間隔"},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:`direction 重ねる向き
@default row`,defaultValue:{value:"'row'",computed:!1}},alignItems:{required:!1,tsType:{name:"union",raw:"'normal' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:"主軸方向における子要素のレイアウトを定める。`direction` prop が `column` の場合は水平軸、 `row` の場合は垂直軸のレイアウトを制御する。水平軸の場合に、ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと\n@default flex-start",defaultValue:{value:"'flex-start'",computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:`| 'normal'
| 'flex-start'
| 'center'
| 'flex-end'
| 'space-between'
| 'space-around'
| 'space-evenly'`,elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"交差軸方向における子要素のレイアウトを定める。directionが `column` の場合は垂軸直、`row` の場合は水平軸のレイアウトを制御する。水平軸の場合に、ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと\n@default flex-start",defaultValue:{value:"'flex-start'",computed:!1}},wrap:{required:!1,tsType:{name:"boolean"},description:`折り返しの有無
@default false`,defaultValue:{value:"false",computed:!1}},height:{required:!1,tsType:{name:"literal",value:"'full'"},description:"親要素に対し、100%としたい場合に使用"},width:{required:!1,tsType:{name:"literal",value:"'full'"},description:"デフォルトで<Flex>は横幅いっぱいを専有する。しかし例えば、フレックスコンテナの子要素として配置した場合、横幅が自身の子に合わせて小さくなる。これが不都合の場合に100%とする事が可能"}}};const H={component:n},s={render:()=>e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx("div",{children:"none"}),e.jsx("div",{children:"none"}),e.jsx("div",{children:"none"})]}),e.jsxs(n,{spacing:"xxs",children:[e.jsx("div",{children:"xxs"}),e.jsx("div",{children:"xxs"}),e.jsx("div",{children:"xxs"})]}),e.jsxs(n,{spacing:"xs",children:[e.jsx("div",{children:"xs"}),e.jsx("div",{children:"xs"}),e.jsx("div",{children:"xs"})]}),e.jsxs(n,{spacing:"sm",children:[e.jsx("div",{children:"sm"}),e.jsx("div",{children:"sm"}),e.jsx("div",{children:"sm"})]}),e.jsxs(n,{spacing:"md",children:[e.jsx("div",{children:"md"}),e.jsx("div",{children:"md"}),e.jsx("div",{children:"md"})]}),e.jsxs(n,{spacing:"lg",children:[e.jsx("div",{children:"lg"}),e.jsx("div",{children:"lg"}),e.jsx("div",{children:"lg"})]}),e.jsxs(n,{spacing:"xl",children:[e.jsx("div",{children:"xl"}),e.jsx("div",{children:"xl"}),e.jsx("div",{children:"xl"})]}),e.jsxs(n,{spacing:"xxl",children:[e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"}),e.jsx("div",{children:"xxl"})]})]})},l={render:()=>e.jsxs("div",{children:[e.jsxs(n,{direction:"column",spacing:"md",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]}),e.jsx("p",{children:"※特別な理由がなければStackをつかってください"})]})},a={render:()=>e.jsx("div",{style:{height:500},children:e.jsxs(n,{spacing:"lg",alignItems:"stretch",height:"full",children:[e.jsx("p",{style:{margin:0,background:"#DDD"},children:"Stretched"}),e.jsx("p",{style:{margin:0,background:"#DDD"},children:"Stretched"})]})})},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{justifyContent:"space-between",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]}),e.jsxs(n,{justifyContent:"space-between",children:[e.jsx("p",{children:"Item"}),e.jsx("p",{children:"Item"})]})]})},i={render:()=>e.jsxs(n,{direction:"row",justifyContent:"center",alignItems:"center",spacing:"sm",children:[e.jsxs("span",{children:["Words",e.jsx("br",{}),"crowded"]}),e.jsx("span",{children:"in"}),e.jsxs("span",{children:["simply",e.jsx("br",{}),"dummy",e.jsx("br",{}),"text"]})]})},t={render:()=>e.jsx("div",{style:{width:500},children:e.jsxs(n,{direction:"row",alignItems:"center",spacing:"lg",wrap:!0,children:[e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"}),e.jsx("span",{children:"Item"})]})})};var p,x,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(x=s.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var o,u,h;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div>
      <Flex direction="column" spacing="md">
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </Flex>

      <p>※特別な理由がなければStackをつかってください</p>
    </div>
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,j,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(j=a.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var g,f,F;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(F=(f=r.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var w,y,b;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,_,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const J=["Spacing","Vertical","StretchedChildren","SpaceBetween","Centralized","Wrap"];export{i as Centralized,r as SpaceBetween,s as Spacing,a as StretchedChildren,l as Vertical,t as Wrap,J as __namedExportsOrder,H as default};
