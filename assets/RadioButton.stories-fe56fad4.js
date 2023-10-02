import{a as c,c as S,j as n}from"./clsx-4547bf08.js";import{r}from"./index-76fb7be0.js";import{S as v}from"./Stack-b3b2c406.js";import"./_commonjsHelpers-de833af9.js";const f="_icon_m680j_1",k="_medium_m680j_10",C="_small_m680j_15",b="_label_m680j_21",j="_radio_m680j_45",e={icon:f,medium:k,small:C,label:b,radio:j},d=({size:a="medium",checked:t,onChange:o,value:s,id:l,name:g,children:_,...h})=>c("div",{className:S(e.container,e[a]),children:[n("input",{type:"radio",id:l,checked:t,name:g,value:s,className:e.radio,onChange:o,...h}),c("label",{htmlFor:l,className:e.label,children:[n("span",{className:e.icon}),_]})]}),N={component:d},x={disabled:!1,name:"sample"},m={render:a=>{const[t,o]=r.useState("medium"),s=r.useCallback(l=>{o(l.target.value)},[]);return c(v,{spacing:"xs",children:[n(d,{...a,value:"medium",id:"medium",onChange:s,checked:t==="medium",children:"Medium"}),n(d,{...a,value:"small",id:"small",onChange:s,checked:t==="small",size:"small",children:"Small"})]})},args:x};var i,u,p;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState('medium');
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Stack spacing="xs">
        <RadioButton {...args} value="medium" id="medium" onChange={onChange} checked={selectedItem === 'medium'}>
          Medium
        </RadioButton>
        <RadioButton {...args} value="small" id="small" onChange={onChange} checked={selectedItem === 'small'} size="small">
          Small
        </RadioButton>
      </Stack>;
  },
  args: defaultArgs
}`,...(p=(u=m.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const M=["Default"];export{m as Default,M as __namedExportsOrder,N as default};
//# sourceMappingURL=RadioButton.stories-fe56fad4.js.map
