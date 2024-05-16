import{j as n}from"./jsx-runtime-9c4ae004.js";import{r as o}from"./index-1b03fe98.js";import{R as t}from"./RadioButton-881c0ab9.js";import{S as h}from"./Stack-6136d9d8.js";import{R}from"./RadioGroup-0f772b44.js";import"./clsx-1229b3e0.js";import"./style-d1e19ac4.js";import"./RequiredLabel-a2a89590.js";import"./Flex-1220e7c3.js";const V={title:"Form/RadioButton",component:t},c={disabled:!1},d=["option1","option2","option3"],i={render:a=>{const[s,r]=o.useState(d[0]),l=o.useCallback(e=>{r(e.target.value)},[]);return n.jsxs(h,{spacing:"lg",children:[n.jsx(R,{label:"RadioButton",children:d.map(e=>n.jsx(t,{...a,value:e,id:e,onChange:l,checked:s===e,name:"default",children:e},e))}),n.jsxs("dl",{children:[n.jsx("dt",{children:"Values"}),n.jsx("dd",{children:s})]})]})},args:{...c,name:"default"}},u={render:a=>{const[s,r]=o.useState(d[0]),l=o.useCallback(e=>{r(e.target.value)},[]);return n.jsx(R,{label:"RadioButton",direction:"row",children:d.map(e=>n.jsx(t,{...a,value:e,id:e,onChange:l,checked:s===e,name:"horizontally",children:e},e))})},args:{...c,name:"default"}},m={render:a=>n.jsxs(h,{spacing:"xs",children:[n.jsx(t,{...a,value:"medium",id:"medium",name:"size",children:"Medium"}),n.jsx(t,{...a,value:"small",id:"small",size:"small",name:"size",children:"Small"})]}),args:{...c,name:"size"}},p={render:a=>n.jsxs(h,{spacing:"xs",children:[n.jsx(t,{...a,value:"checked",id:"checked",checked:!0,disabled:!0,name:"disabled",children:"Checked"}),n.jsx(t,{...a,value:"unchecked",id:"unchecked",disabled:!0,name:"disabled",children:"Unchecked"})]}),args:{...c,name:"disabled"}},g={render:a=>{const[s,r]=o.useState(d[0]),l=o.useCallback(e=>{r(e.target.value)},[]);return n.jsx(R,{label:"RadioButton",showRequiredLabel:!0,children:d.map(e=>n.jsx(t,{...a,value:e,id:e,onChange:l,checked:s===e,name:"default",children:e},e))})},args:{...c,name:"default"}};var k,S,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var v,f,x;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(f=u.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var B,C,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var j,z,E;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(z=p.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var H,y,G;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <RadioGroup label="RadioButton" showRequiredLabel>
        {options.map(option => <RadioButton key={option} {...args} value={option} id={option} onChange={onChange} checked={selectedItem === option} name="default">
            {option}
          </RadioButton>)}
      </RadioGroup>;
  },
  args: {
    ...defaultArgs,
    name: 'default'
  }
}`,...(G=(y=g.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};const F=["Default","Horizontally","Size","Disabled","ShowRequiredLabel"];export{i as Default,p as Disabled,u as Horizontally,g as ShowRequiredLabel,m as Size,F as __namedExportsOrder,V as default};
