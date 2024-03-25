import{j as c,a}from"./jsx-runtime-03b4ddbf.js";import{r as i}from"./index-76fb7be0.js";import{R as d}from"./RadioButton-0ad7aac9.js";import{S as h}from"./Stack-60de74b5.js";import{a as E}from"./RadioGroup-095de142.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";const w={title:"Form/RadioButton",component:d},m={disabled:!1},u=["option1","option2","option3"],s={render:t=>{const[o,p]=i.useState(u[0]),g=i.useCallback(e=>{p(e.target.value)},[]);return c(h,{spacing:"lg",children:[a(E,{label:"RadioButton",children:u.map(e=>a(d,{...t,value:e,id:e,onChange:g,checked:o===e,name:"default",children:e},e))}),c("dl",{children:[a("dt",{children:"Values"}),a("dd",{children:o})]})]})},args:{...m,name:"default"}},r={render:t=>{const[o,p]=i.useState(u[0]),g=i.useCallback(e=>{p(e.target.value)},[]);return a(E,{label:"RadioButton",direction:"row",children:u.map(e=>a(d,{...t,value:e,id:e,onChange:g,checked:o===e,name:"horizontally",children:e},e))})},args:{...m,name:"default"}},n={render:t=>c(h,{spacing:"xs",children:[a(d,{...t,value:"medium",id:"medium",name:"size",children:"Medium"}),a(d,{...t,value:"small",id:"small",size:"small",name:"size",children:"Small"})]}),args:{...m,name:"size"}},l={render:t=>c(h,{spacing:"xs",children:[a(d,{...t,value:"checked",id:"checked",checked:!0,disabled:!0,name:"disabled",children:"Checked"}),a(d,{...t,value:"unchecked",id:"unchecked",disabled:!0,name:"disabled",children:"Unchecked"})]}),args:{...m,name:"disabled"}};var k,S,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Stack spacing="lg">
        <RadioGroup label="RadioButton">
          {options.map(option => <RadioButton key={option} {...args} value={option} id={option} onChange={onChange} checked={selectedItem === option} name="default">
              {option}
            </RadioButton>)}
        </RadioGroup>

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
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var v,b,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <RadioGroup label="RadioButton" direction="row">
        {options.map(option => <RadioButton key={option} {...args} value={option} id={option} onChange={onChange} checked={selectedItem === option} name="horizontally">
            {option}
          </RadioButton>)}
      </RadioGroup>;
  },
  args: {
    ...defaultArgs,
    name: 'default'
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var B,C,I;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Stack spacing="xs">
      <RadioButton {...args} value="medium" id="medium" name="size">
        Medium
      </RadioButton>
      <RadioButton {...args} value="small" id="small" size="small" name="size">
        Small
      </RadioButton>
    </Stack>,
  args: {
    ...defaultArgs,
    name: 'size'
  }
}`,...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var z,x,y;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Stack spacing="xs">
      <RadioButton {...args} value="checked" id="checked" checked disabled name="disabled">
        Checked
      </RadioButton>

      <RadioButton {...args} value="unchecked" id="unchecked" disabled name="disabled">
        Unchecked
      </RadioButton>
    </Stack>,
  args: {
    ...defaultArgs,
    name: 'disabled'
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const L=["Default","Horizontally","Size","Disabled"];export{s as Default,l as Disabled,r as Horizontally,n as Size,L as __namedExportsOrder,w as default};
//# sourceMappingURL=RadioButton.stories-29b79308.js.map
