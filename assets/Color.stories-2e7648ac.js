import{j as o}from"./jsx-runtime-69eee039.js";import{c as u}from"./style-e9a2251f.js";import{B as p}from"./Box-7eff7901.js";import{S as C}from"./Stack-ac2b4f0f.js";import{T as x}from"./Text-b9f311a8.js";import"./index-7c191284.js";import"./clsx-1229b3e0.js";const h="_color_emffn_1",b={color:h},r=({color:n="main",children:d})=>o.jsx("span",{className:b.color,style:{...u(n)},children:d});try{r.displayName="Color",r.__docgenInfo={description:"",displayName:"Color",props:{color:{defaultValue:{value:"main"},description:"文字色",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'},{value:'"link"'},{value:'"main"'},{value:'"sub"'},{value:'"linkSub"'},{value:'"disabled"'},{value:'"accent"'},{value:'"white"'}]}}}}}catch{}const S={title:"Typography/Font/Color",component:r},e={render:()=>o.jsxs(C,{spacing:"md",children:[o.jsx(r,{children:"default(main)"}),o.jsx(r,{color:"main",children:"main"}),o.jsx(r,{color:"sub",children:"sub"}),o.jsx(r,{color:"primary",children:"primary"}),o.jsx(r,{color:"accent",children:"accent"}),o.jsx(r,{color:"alert",children:"alert"}),o.jsx(r,{color:"disabled",children:"disabled"}),o.jsx(r,{color:"link",children:"link"}),o.jsx(r,{color:"linkSub",children:"linkSub"}),o.jsx(p,{pt:"sm",pr:"sm",pb:"sm",pl:"sm",backgroundColor:"primaryDarken",children:o.jsx(r,{color:"white",children:"white"})})]})},l={render:()=>o.jsxs(x,{type:"body",size:"lg",color:"main",children:["一部だけ",o.jsx(r,{color:"accent",children:"色"}),"を変えたい"]})};var a,c,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var i,t,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <Text type="body" size="lg" color="main">
        一部だけ<Color color="accent">色</Color>を変えたい
      </Text>;
  }
}`,...(m=(t=l.parameters)==null?void 0:t.docs)==null?void 0:m.source}}};const T=["Colors","WithText"];export{e as Colors,l as WithText,T as __namedExportsOrder,S as default};
