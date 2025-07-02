import{j as r}from"./jsx-runtime-DuyR_K1q.js";import{c as v}from"./style-BnM3_UOs.js";import{B as y}from"./Box-DFL_LIJy.js";import{S as _}from"./Stack-B0WUE-sr.js";import{T as f}from"./Text-C7G5QT9C.js";import"./index-yUhCOHB4.js";import"./clsx-B-dksMZM.js";import"./component-NUmYR5Q2.js";const S="_color_emffn_1",A={color:S},o=({color:e="main",children:h,id:x,...j})=>r.jsx("span",{id:x,className:A.color,style:{...v(e)},...j,children:h});try{o.displayName="Color",o.__docgenInfo={description:"",displayName:"Color",props:{color:{defaultValue:{value:"main"},description:"文字色",name:"color",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"main"'},{value:'"disabled"'},{value:'"sub"'},{value:'"white"'},{value:'"black"'},{value:'"blue"'},{value:'"pink"'},{value:'"orange"'},{value:'"purple"'},{value:'"green"'},{value:'"red"'},{value:'"blackDarken"'},{value:'"blueDarken"'},{value:'"pinkDarken"'},{value:'"orangeDarken"'},{value:'"purpleDarken"'},{value:'"greenDarken"'},{value:'"redDarken"'},{value:'"linkSub"'}]}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Typography/Font/Color",component:o},l={render:()=>r.jsxs(_,{spacing:"md",children:[r.jsx(o,{color:"main",children:"main"}),r.jsx(o,{color:"sub",children:"sub"}),r.jsx(o,{color:"link",children:"link"}),r.jsx(o,{color:"linkSub",children:"linkSub"}),r.jsx(o,{color:"disabled",children:"disabled"}),r.jsx(o,{color:"blue",children:"blue"}),r.jsx(o,{color:"blueDarken",children:"blueDarken"}),r.jsx(o,{color:"pink",children:"pink"}),r.jsx(o,{color:"pinkDarken",children:"pinkDarken"}),r.jsx(o,{color:"orange",children:"orange"}),r.jsx(o,{color:"orangeDarken",children:"orangeDarken"}),r.jsx(o,{color:"purple",children:"purple"}),r.jsx(o,{color:"purpleDarken",children:"purpleDarken"}),r.jsx(o,{color:"green",children:"green"}),r.jsx(o,{color:"greenDarken",children:"greenDarken"}),r.jsx(o,{color:"red",children:"red"}),r.jsx(o,{color:"redDarken",children:"redDarken"}),r.jsx(o,{color:"black",children:"black"}),r.jsx(o,{color:"blackDarken",children:"blackDarken"}),r.jsx(y,{pt:"sm",pr:"sm",pb:"sm",pl:"sm",backgroundColor:"blackInverseDarken",children:r.jsx(o,{color:"white",children:"white"})})]})},n={render:()=>r.jsxs(f,{type:"body",size:"lg",color:"main",children:["一部だけ",r.jsx(o,{color:"pink",children:"色"}),"を変えたい"]})},a={render:e=>r.jsx(o,{...e,children:"色"}),args:{id:"some-id"}},s={render:e=>r.jsx(o,{...e,children:"色"}),args:{"data-test-id":"some-id"}};var c,i,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <Stack spacing="md">
        <Color color="main">main</Color>
        <Color color="sub">sub</Color>
        <Color color="link">link</Color>
        <Color color="linkSub">linkSub</Color>
        <Color color="disabled">disabled</Color>
        <Color color="blue">blue</Color>
        <Color color="blueDarken">blueDarken</Color>
        <Color color="pink">pink</Color>
        <Color color="pinkDarken">pinkDarken</Color>
        <Color color="orange">orange</Color>
        <Color color="orangeDarken">orangeDarken</Color>
        <Color color="purple">purple</Color>
        <Color color="purpleDarken">purpleDarken</Color>
        <Color color="green">green</Color>
        <Color color="greenDarken">greenDarken</Color>
        <Color color="red">red</Color>
        <Color color="redDarken">redDarken</Color>
        <Color color="black">black</Color>
        <Color color="blackDarken">blackDarken</Color>
        <Box pt="sm" pr="sm" pb="sm" pl="sm" backgroundColor="blackInverseDarken">
          <Color color="white">white</Color>
        </Box>
      </Stack>;
  }
}`,...(u=(i=l.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var t,d,p;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <Text type="body" size="lg" color="main">
        一部だけ<Color color="pink">色</Color>を変えたい
      </Text>;
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var k,m,C;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    return <Color {...args}>色</Color>;
  },
  args: {
    id: 'some-id'
  }
}`,...(C=(m=a.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var b,D,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    return <Color {...args}>色</Color>;
  },
  args: {
    'data-test-id': 'some-id'
  }
}`,...(g=(D=s.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};const q=["Colors","WithText","WithId","WithCustomDataAttribute"];export{l as Colors,s as WithCustomDataAttribute,a as WithId,n as WithText,q as __namedExportsOrder,V as default};
