import{j as e}from"./jsx-runtime-69eee039.js";import{c as I}from"./clsx-1229b3e0.js";import{r as k}from"./index-7c191284.js";import{B as p}from"./Box-9fe7750b.js";import"./style-282c756e.js";const A="_pre_1h4jz_1",B="_inline_1h4jz_6",d={pre:A,inline:B},n=k.forwardRef(({children:r,whiteSpace:j="pre-line",inline:P=!1,...b},S)=>e.jsx("span",{ref:S,className:I(d.pre,P&&d.inline),style:{"--white-space":j},...b,children:r}));n.displayName="Pre";try{n.displayName="Pre",n.__docgenInfo={description:"",displayName:"Pre",props:{whiteSpace:{defaultValue:{value:"pre-line"},description:"折り返しや空白、改行の扱い",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"pre"'},{value:'"pre-wrap"'},{value:'"pre-line"'},{value:'"break-spaces"'}]}},inline:{defaultValue:{value:"false"},description:"inline-blockとして扱う",name:"inline",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"typography/Pre",component:n},o={children:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`},s={render:r=>e.jsx("div",{style:{width:500},children:e.jsx(p,{border:"gray",p:"md",children:e.jsx(n,{...r})})}),args:o},a={render:r=>e.jsx("div",{style:{width:500},children:e.jsx(p,{border:"gray",p:"md",children:e.jsx(n,{...r})})}),args:{...o,whiteSpace:"pre"}},t={render:r=>e.jsx("div",{style:{width:500},children:e.jsx(p,{border:"gray",p:"md",children:e.jsx(n,{...r})})}),args:{...o,whiteSpace:"pre-wrap"}},i={render:r=>e.jsxs("p",{children:["Text",e.jsx(n,{...r}),"Text"]}),args:{...o,children:`Lorem Ipsum
is simply
dummy text
of the
printing and
typesetting industry.`,inline:!0}};var l,c,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 500
  }}>
      <Box border="gray" p="md">
        <Pre {...args} />
      </Box>
    </div>,
  args: defaultArgs
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,g,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 500
  }}>
      <Box border="gray" p="md">
        <Pre {...args} />
      </Box>
    </div>,
  args: {
    ...defaultArgs,
    whiteSpace: 'pre'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 500
  }}>
      <Box border="gray" p="md">
        <Pre {...args} />
      </Box>
    </div>,
  args: {
    ...defaultArgs,
    whiteSpace: 'pre-wrap'
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var w,v,_;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <p>
      Text
      <Pre {...args} />
      Text
    </p>,
  args: {
    ...defaultArgs,
    children: \`Lorem Ipsum
is simply
dummy text
of the
printing and
typesetting industry.\`,
    inline: true
  }
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const q=["Default","WhiteSpacePre","PreWrap","Inline"];export{s as Default,i as Inline,t as PreWrap,a as WhiteSpacePre,q as __namedExportsOrder,W as default};
