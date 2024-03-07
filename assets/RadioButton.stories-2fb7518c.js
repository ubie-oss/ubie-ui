import{j as c,a as t}from"./jsx-runtime-03b4ddbf.js";import{r as u}from"./index-76fb7be0.js";import{R as d}from"./RadioButton-5bcde963.js";import{S as n}from"./Stack-0a7abb46.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";const j={title:"Form/RadioButton",component:d},i={disabled:!1},m=["option1","option2","option3"],s={render:e=>{const[l,b]=u.useState(m[0]),x=u.useCallback(a=>{b(a.target.value)},[]);return c(n,{spacing:"xs",children:[m.map(a=>t(d,{...e,value:a,id:a,onChange:x,checked:l===a,children:a},a)),c("dl",{children:[t("dt",{children:"Values"}),t("dd",{children:l})]})]})},args:{...i,name:"default"}},r={render:e=>c(n,{spacing:"xs",children:[t(d,{...e,value:"medium",id:"medium",children:"Medium"}),t(d,{...e,value:"small",id:"small",size:"small",children:"Small"})]}),args:{...i,name:"size"}},o={render:e=>c(n,{spacing:"xs",children:[t(d,{...e,value:"checked",id:"checked",checked:!0,disabled:!0,children:"Checked"}),t(d,{...e,value:"unchecked",id:"unchecked",disabled:!0,children:"Unchecked"})]}),args:{...i,name:"disabled"}};var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Stack spacing="xs">
        {options.map(option => <RadioButton key={option} {...args} value={option} id={option} onChange={onChange} checked={selectedItem === option}>
            {option}
          </RadioButton>)}

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem}</dd>
        </dl>
      </Stack>;
  },
  args: {
    ...defaultArgs,
    name: 'default'
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,S,v;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Stack spacing="xs">
      <RadioButton {...args} value="medium" id="medium">
        Medium
      </RadioButton>
      <RadioButton {...args} value="small" id="small" size="small">
        Small
      </RadioButton>
    </Stack>,
  args: {
    ...defaultArgs,
    name: 'size'
  }
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var f,R,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Stack spacing="xs">
      <RadioButton {...args} value="checked" id="checked" checked disabled>
        Checked
      </RadioButton>

      <RadioButton {...args} value="unchecked" id="unchecked" disabled>
        Unchecked
      </RadioButton>
    </Stack>,
  args: {
    ...defaultArgs,
    name: 'disabled'
  }
}`,...(B=(R=o.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const M=["Default","Size","Disabled"];export{s as Default,o as Disabled,r as Size,M as __namedExportsOrder,j as default};
//# sourceMappingURL=RadioButton.stories-2fb7518c.js.map
