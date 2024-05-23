import{j as n}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{a as d,R as h}from"./RadioGroup-3b5b1531.js";import{S as C}from"./Stack-ac2b4f0f.js";import"./RequiredLabel-0530a236.js";import"./Flex-bb8b913b.js";import"./clsx-1229b3e0.js";import"./style-e9a2251f.js";const O={title:"Form/RadioCard",component:d},G={},c=["option1","option2","option3"],i={render:()=>{const[a,r]=o.useState(c[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return n.jsxs(C,{spacing:"lg",alignItems:"normal",children:[n.jsx(h,{label:"RadioCard",children:c.map(e=>n.jsx(d,{name:"options",value:e,onChange:s,checked:a===e,id:e,children:e},e))}),n.jsxs("dl",{children:[n.jsx("dt",{children:"Values"}),n.jsx("dd",{children:a})]})]})}},l={render:()=>{const[a,r]=o.useState(c[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return n.jsx(h,{label:"RadioCard",direction:"row",children:c.map(e=>n.jsx(d,{name:"horizontally",value:e,onChange:s,checked:a===e,id:e,children:e},e))})}},u={render:a=>{const r=["option1","option2","option3"],[s,e]=o.useState("option1"),g=t=>{e(t.target.value)};return n.jsx(C,{spacing:"sm",children:r.map(t=>o.createElement(d,{...a,key:t,checked:s===t,value:t,onChange:g,name:"block"},t))})},args:{...G,name:"block",block:!0}},p={render:()=>{const[a,r]=o.useState(c[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return n.jsx(h,{label:"RadioCard",showRequiredLabel:!0,children:c.map(e=>n.jsx(d,{name:"options",value:e,onChange:s,checked:a===e,id:e,children:e},e))})}},m={args:G,render:a=>{const r=["option1","option2","option3"],[s,e]=o.useState("option1"),g=t=>{e(t.target.value)};return n.jsx(C,{spacing:"sm",children:r.map((t,w)=>o.createElement(d,{...a,key:t,checked:s===t,value:t,onChange:g,name:"customDataAttribute","data-test-id":w},t))})}};var v,k,R;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Stack spacing="lg" alignItems="normal">
        <RadioGroup label="RadioCard">
          {options.map(option => <RadioCard name="options" value={option} onChange={onChange} checked={selectedItem === option} id={option} key={option}>
              {option}
            </RadioCard>)}
        </RadioGroup>

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem}</dd>
        </dl>
      </Stack>;
  }
}`,...(R=(k=i.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var S,b,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <RadioGroup label="RadioCard" direction="row">
        {options.map(option => <RadioCard name="horizontally" value={option} onChange={onChange} checked={selectedItem === option} id={option} key={option}>
            {option}
          </RadioCard>)}
      </RadioGroup>;
  }
}`,...(I=(b=l.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var x,E,j;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const options = ['option1', 'option2', 'option3'];
    const [value, setValue] = useState<string>('option1');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return <Stack spacing="sm">
        {options.map(option => <RadioCard {...args} key={option} checked={value === option} value={option} onChange={onChange} name="block">
            {option}
          </RadioCard>)}
      </Stack>;
  },
  args: {
    ...defaultArgs,
    name: 'block',
    block: true
  }
}`,...(j=(E=u.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var y,f,H;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <RadioGroup label="RadioCard" showRequiredLabel>
        {options.map(option => <RadioCard name="options" value={option} onChange={onChange} checked={selectedItem === option} id={option} key={option}>
            {option}
          </RadioCard>)}
      </RadioGroup>;
  }
}`,...(H=(f=p.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var L,V,A;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: defaultArgs,
  render: args => {
    const options = ['option1', 'option2', 'option3'];
    const [value, setValue] = useState<string>('option1');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return <Stack spacing="sm">
        {options.map((option, index) => <RadioCard {...args} key={option} checked={value === option} value={option} onChange={onChange} name="customDataAttribute" data-test-id={index}>
            {option}
          </RadioCard>)}
      </Stack>;
  }
}`,...(A=(V=m.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const J=["Default","Horizontally","Block","ShowRequiredLabel","CustomDataAttribute"];export{u as Block,m as CustomDataAttribute,i as Default,l as Horizontally,p as ShowRequiredLabel,J as __namedExportsOrder,O as default};
