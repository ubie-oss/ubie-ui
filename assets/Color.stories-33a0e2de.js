import{j as r}from"./jsx-runtime-69eee039.js";import{c as f}from"./style-1d55b7c3.js";import{B as _}from"./Box-20dbcffa.js";import{S}from"./Stack-3a809a50.js";import{T as v}from"./Text-5bc2979e.js";import"./index-7c191284.js";import"./clsx-1229b3e0.js";import"./component-22a2265d.js";const D="_color_emffn_1",A={color:D},o=({color:e="main",children:y,id:j,...k})=>r.jsx("span",{id:j,className:A.color,style:{...f(e)},...k,children:y});try{o.displayName="Color",o.__docgenInfo={description:"",displayName:"Color",props:{color:{defaultValue:{value:"main"},description:"文字色",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'},{value:'"link"'},{value:'"main"'},{value:'"sub"'},{value:'"disabled"'},{value:'"linkSub"'},{value:'"accent"'},{value:'"white"'}]}},id:{defaultValue:null,description:"ネイティブ要素の`id`属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Typography/Font/Color",component:o},a={render:()=>r.jsxs(S,{spacing:"md",children:[r.jsx(o,{children:"default(main)"}),r.jsx(o,{color:"main",children:"main"}),r.jsx(o,{color:"sub",children:"sub"}),r.jsx(o,{color:"primary",children:"primary"}),r.jsx(o,{color:"accent",children:"accent"}),r.jsx(o,{color:"alert",children:"alert"}),r.jsx(o,{color:"disabled",children:"disabled"}),r.jsx(o,{color:"link",children:"link"}),r.jsx(o,{color:"linkSub",children:"linkSub"}),r.jsx(_,{pt:"sm",pr:"sm",pb:"sm",pl:"sm",backgroundColor:"primaryDarken",children:r.jsx(o,{color:"white",children:"white"})})]})},l={render:()=>r.jsxs(v,{type:"body",size:"lg",color:"main",children:["一部だけ",r.jsx(o,{color:"accent",children:"色"}),"を変えたい"]})},n={render:e=>r.jsx(o,{...e,children:"色"}),args:{id:"some-id"}},s={render:e=>r.jsx(o,{...e,children:"色"}),args:{"data-test-id":"some-id"}};var t,c,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    return <Stack spacing="md">
        <Color>default(main)</Color>
        <Color color="main">main</Color>
        <Color color="sub">sub</Color>
        <Color color="primary">primary</Color>
        <Color color="accent">accent</Color>
        <Color color="alert">alert</Color>
        <Color color="disabled">disabled</Color>
        <Color color="link">link</Color>
        <Color color="linkSub">linkSub</Color>
        <Box pt="sm" pr="sm" pb="sm" pl="sm" backgroundColor="primaryDarken">
          <Color color="white">white</Color>
        </Box>
      </Stack>;
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,d,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    return <Text type="body" size="lg" color="main">
        一部だけ<Color color="accent">色</Color>を変えたい
      </Text>;
  }
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,C,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    return <Color {...args}>色</Color>;
  },
  args: {
    id: 'some-id'
  }
}`,...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var x,b,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    return <Color {...args}>色</Color>;
  },
  args: {
    'data-test-id': 'some-id'
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const q=["Colors","WithText","WithId","WithCustomDataAttribute"];export{a as Colors,s as WithCustomDataAttribute,n as WithId,l as WithText,q as __namedExportsOrder,V as default};
