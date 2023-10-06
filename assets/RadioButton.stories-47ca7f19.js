import{j as r,c as v,a as n}from"./clsx-0a53246e.js";import{r as c}from"./index-76fb7be0.js";import{S as f}from"./Stack-ac0bc903.js";import"./_commonjsHelpers-de833af9.js";const S="_icon_m680j_1",k="_medium_m680j_10",C="_small_m680j_15",I="_label_m680j_21",b="_radio_m680j_45",a={icon:S,medium:k,small:C,label:I,radio:b},t=({size:e="medium",checked:s,onChange:d,value:l,id:m,name:_,children:g,...h})=>r("div",{className:v(a.container,a[e]),children:[n("input",{type:"radio",id:m,checked:s,name:_,value:l,className:a.radio,onChange:d,...h}),r("label",{htmlFor:m,className:a.label,children:[n("span",{className:a.icon}),g]})]});try{t.displayName="RadioButton",t.__docgenInfo={description:"",displayName:"RadioButton",props:{size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}}}}}catch{}const N={component:t},j={disabled:!1,name:"sample"},o={render:e=>{const[s,d]=c.useState("medium"),l=c.useCallback(m=>{d(m.target.value)},[]);return r(f,{spacing:"xs",children:[n(t,{...e,value:"medium",id:"medium",onChange:l,checked:s==="medium",children:"Medium"}),n(t,{...e,value:"small",id:"small",onChange:l,checked:s==="small",size:"small",children:"Small"})]})},args:j};var i,u,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const z=["Default"];export{o as Default,z as __namedExportsOrder,N as default};
//# sourceMappingURL=RadioButton.stories-47ca7f19.js.map
