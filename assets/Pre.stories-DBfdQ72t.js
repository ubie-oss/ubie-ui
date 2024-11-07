import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{c as I}from"./clsx-B-dksMZM.js";import{r as k}from"./index-DX35FyXq.js";import{B as p}from"./Box-DnwTfOWR.js";import"./style-D1Pgu1yr.js";const A="_pre_1h4jz_1",B="_inline_1h4jz_6",d={pre:A,inline:B},s=k.forwardRef(({children:r,whiteSpace:j="pre-line",inline:P=!1,...b},S)=>e.jsx("span",{ref:S,className:I(d.pre,P&&d.inline),style:{"--white-space":j},...b,children:r}));s.displayName="Pre";try{s.displayName="Pre",s.__docgenInfo={description:"",displayName:"Pre",props:{whiteSpace:{defaultValue:{value:"pre-line"},description:"折り返しや空白、改行の扱い",name:"whiteSpace",required:!1,type:{name:"enum",value:[{value:'"pre"'},{value:'"pre-wrap"'},{value:'"pre-line"'},{value:'"break-spaces"'}]}},inline:{defaultValue:{value:"false"},description:"inline-blockとして扱う",name:"inline",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"typography/Pre",component:s},o={children:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`},a={render:r=>e.jsx("div",{style:{width:500},children:e.jsx(p,{border:"gray",p:"md",children:e.jsx(s,{...r})})}),args:o},t={render:r=>e.jsx("div",{style:{width:500},children:e.jsx(p,{border:"gray",p:"md",children:e.jsx(s,{...r})})}),args:{...o,whiteSpace:"pre"}},n={render:r=>e.jsx("div",{style:{width:500},children:e.jsx(p,{border:"gray",p:"md",children:e.jsx(s,{...r})})}),args:{...o,whiteSpace:"pre-wrap"}},i={render:r=>e.jsxs("p",{children:["Text",e.jsx(s,{...r}),"Text"]}),args:{...o,children:`Lorem Ipsum
is simply
dummy text
of the
printing and
typesetting industry.`,inline:!0}};var l,c,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 500
  }}>
      <Box border="gray" p="md">
        <Pre {...args} />
      </Box>
    </div>,
  args: defaultArgs
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,x,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var w,v,_;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(v=i.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const q=["Default","WhiteSpacePre","PreWrap","Inline"];export{a as Default,i as Inline,n as PreWrap,t as WhiteSpacePre,q as __namedExportsOrder,W as default};
