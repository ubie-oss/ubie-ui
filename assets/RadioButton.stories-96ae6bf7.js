import{j as a}from"./jsx-runtime-69eee039.js";import{r as d}from"./index-7c191284.js";import{R as n}from"./RadioButton-1b6bdf9f.js";import{S as R}from"./Stack-495f0d7b.js";import{R as k}from"./RadioGroup-24ed235f.js";import"./clsx-1229b3e0.js";import"./style-e9a2251f.js";import"./RequiredLabel-0530a236.js";import"./Flex-a7003af2.js";const K={title:"Form/RadioButton",component:n},r={disabled:!1},o=["option1","option2","option3"],c={render:t=>{const[s,l]=d.useState(o[0]),i=d.useCallback(e=>{l(e.target.value)},[]);return a.jsxs(R,{spacing:"lg",children:[a.jsx(k,{label:"RadioButton",children:o.map(e=>a.jsx(n,{...t,value:e,id:e,onChange:i,checked:s===e,name:"default",children:e},e))}),a.jsxs("dl",{children:[a.jsx("dt",{children:"Values"}),a.jsx("dd",{children:s})]})]})},args:{...r,name:"default"}},u={render:t=>{const[s,l]=d.useState(o[0]),i=d.useCallback(e=>{l(e.target.value)},[]);return a.jsx(k,{label:"RadioButton",direction:"row",children:o.map(e=>a.jsx(n,{...t,value:e,id:e,onChange:i,checked:s===e,name:"horizontally",children:e},e))})},args:{...r,name:"default"}},m={render:t=>a.jsxs(R,{spacing:"xs",children:[a.jsx(n,{...t,value:"medium",id:"medium",name:"size",children:"Medium"}),a.jsx(n,{...t,value:"small",id:"small",size:"small",name:"size",children:"Small"})]}),args:{...r,name:"size"}},p={render:t=>a.jsxs(R,{spacing:"xs",children:[a.jsx(n,{...t,value:"checked",id:"checked",checked:!0,disabled:!0,name:"disabled",children:"Checked"}),a.jsx(n,{...t,value:"unchecked",id:"unchecked",disabled:!0,name:"disabled",children:"Unchecked"})]}),args:{...r,name:"disabled"}},g={render:t=>{const[s,l]=d.useState(o[0]),i=d.useCallback(e=>{l(e.target.value)},[]);return a.jsx(k,{label:"RadioButton",showRequiredLabel:!0,children:o.map(e=>a.jsx(n,{...t,value:e,id:e,onChange:i,checked:s===e,name:"default",children:e},e))})},args:{...r,name:"default"}},h={render:t=>a.jsxs(R,{spacing:"xs",children:[a.jsx(n,{...t,value:"data1",id:"data1",name:"customData","data-test-id":"1",children:"Data 1"}),a.jsx(n,{...t,value:"data2",id:"data2",name:"customData","data-test-id":"2",children:"Data 2"})]}),args:r};var S,v,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,B,f;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(B=u.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var C,I,j;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(I=m.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var z,D,A;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(A=(D=p.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var E,H,y;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(y=(H=g.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};var G,L,w;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <Stack spacing="xs">
      <RadioButton {...args} value="data1" id="data1" name="customData" data-test-id="1">
        Data 1
      </RadioButton>
      <RadioButton {...args} value="data2" id="data2" name="customData" data-test-id="2">
        Data 2
      </RadioButton>
    </Stack>,
  args: defaultArgs
}`,...(w=(L=h.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const N=["Default","Horizontally","Size","Disabled","ShowRequiredLabel","CustomDataAttribute"];export{h as CustomDataAttribute,c as Default,p as Disabled,u as Horizontally,g as ShowRequiredLabel,m as Size,N as __namedExportsOrder,K as default};
