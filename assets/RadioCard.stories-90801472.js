import{j as n}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{a as c,R as h}from"./RadioGroup-f1376ad3.js";import{S as C}from"./Stack-3105aa16.js";import"./RequiredLabel-0530a236.js";import"./Flex-4fbea599.js";import"./clsx-1229b3e0.js";import"./style-62efef97.js";const P={title:"Form/RadioCard",component:c},T={},d=["option1","option2","option3"],l={render:()=>{const[t,r]=o.useState(d[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return n.jsxs(C,{spacing:"lg",alignItems:"normal",children:[n.jsx(h,{label:"RadioCard",children:d.map(e=>n.jsx(c,{name:"options",value:e,onChange:s,checked:t===e,id:e,children:e},e))}),n.jsxs("dl",{children:[n.jsx("dt",{children:"Values"}),n.jsx("dd",{children:t})]})]})}},i={render:()=>{const[t,r]=o.useState(d[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return n.jsx(h,{label:"RadioCard",direction:"row",children:d.map(e=>n.jsx(c,{name:"horizontally",value:e,onChange:s,checked:t===e,id:e,children:e},e))})}},u={render:t=>{const r=["option1","option2","option3"],[s,e]=o.useState("option1"),v=a=>{e(a.target.value)};return n.jsx(C,{spacing:"sm",children:r.map(a=>o.createElement(c,{...t,key:a,checked:s===a,value:a,onChange:v,name:"block"},a))})},args:{...T,name:"block",block:!0}},p={render:()=>{const[t,r]=o.useState(d[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return n.jsx(h,{label:"RadioCard",showRequiredLabel:!0,children:d.map(e=>n.jsx(c,{name:"options",value:e,onChange:s,checked:t===e,id:e,children:e},e))})}},m={args:T,render:t=>{const r=["option1","option2","option3"],[s,e]=o.useState("option1"),v=a=>{e(a.target.value)};return n.jsx(C,{spacing:"sm",children:r.map((a,q)=>o.createElement(c,{...t,key:a,checked:s===a,value:a,onChange:v,name:"customDataAttribute","data-test-id":q},a))})}},g={render:()=>{const[t,r]=o.useState(d[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return n.jsxs(C,{spacing:"lg",alignItems:"normal",children:[n.jsx(h,{label:"RadioCard",children:d.map(e=>n.jsx(c,{name:"options",value:e,onChange:s,checked:t===e,id:e,disabled:!0,children:e},e))}),n.jsxs("dl",{children:[n.jsx("dt",{children:"Values"}),n.jsx("dd",{children:t})]})]})}};var k,S,R;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(S=l.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var I,b,x;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var j,E,y;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(E=u.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var H,f,L;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(f=p.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var V,G,D;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(G=m.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var A,w,M;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Stack spacing="lg" alignItems="normal">
        <RadioGroup label="RadioCard">
          {options.map(option => <RadioCard name="options" value={option} onChange={onChange} checked={selectedItem === option} id={option} key={option} disabled>
              {option}
            </RadioCard>)}
        </RadioGroup>

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem}</dd>
        </dl>
      </Stack>;
  }
}`,...(M=(w=g.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const Q=["Default","Horizontally","Block","ShowRequiredLabel","CustomDataAttribute","Disabled"];export{u as Block,m as CustomDataAttribute,l as Default,g as Disabled,i as Horizontally,p as ShowRequiredLabel,Q as __namedExportsOrder,P as default};
