import{j as n}from"./jsx-runtime-9c4ae004.js";import{r as i}from"./index-1b03fe98.js";import{R as t}from"./RadioButton-6b30ea70.js";import{S as g}from"./Stack-51d5a3f7.js";import{R as z}from"./RadioGroup-ec733385.js";import"./clsx-1229b3e0.js";import"./Flex-189461a1.js";const _={title:"Form/RadioButton",component:t},u={disabled:!1},c=["option1","option2","option3"],d={render:a=>{const[s,m]=i.useState(c[0]),p=i.useCallback(e=>{m(e.target.value)},[]);return n.jsxs(g,{spacing:"lg",children:[n.jsx(z,{label:"RadioButton",children:c.map(e=>n.jsx(t,{...a,value:e,id:e,onChange:p,checked:s===e,name:"default",children:e},e))}),n.jsxs("dl",{children:[n.jsx("dt",{children:"Values"}),n.jsx("dd",{children:s})]})]})},args:{...u,name:"default"}},o={render:a=>{const[s,m]=i.useState(c[0]),p=i.useCallback(e=>{m(e.target.value)},[]);return n.jsx(z,{label:"RadioButton",direction:"row",children:c.map(e=>n.jsx(t,{...a,value:e,id:e,onChange:p,checked:s===e,name:"horizontally",children:e},e))})},args:{...u,name:"default"}},r={render:a=>n.jsxs(g,{spacing:"xs",children:[n.jsx(t,{...a,value:"medium",id:"medium",name:"size",children:"Medium"}),n.jsx(t,{...a,value:"small",id:"small",size:"small",name:"size",children:"Small"})]}),args:{...u,name:"size"}},l={render:a=>n.jsxs(g,{spacing:"xs",children:[n.jsx(t,{...a,value:"checked",id:"checked",checked:!0,disabled:!0,name:"disabled",children:"Checked"}),n.jsx(t,{...a,value:"unchecked",id:"unchecked",disabled:!0,name:"disabled",children:"Unchecked"})]}),args:{...u,name:"disabled"}};var h,k,R;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var S,x,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var b,f,B;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(f=r.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var j,C,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const w=["Default","Horizontally","Size","Disabled"];export{d as Default,l as Disabled,o as Horizontally,r as Size,w as __namedExportsOrder,_ as default};
