import{j as t}from"./jsx-runtime-DuyR_K1q.js";import{r as a}from"./index-yUhCOHB4.js";import{a as l,R as c}from"./RadioGroup-faGD4oBt.js";import{S as i}from"./Stack-pGcgVzue.js";import"./RequiredLabel-B2G5xUZG.js";import"./Flex-CtKWwGeh.js";import"./clsx-B-dksMZM.js";import"./style-BnM3_UOs.js";const X={title:"Form/RadioCard",component:l},_={},d=["option1","option2","option3"],u={render:()=>{const[n,o]=a.useState(d[0]),s=a.useCallback(e=>{o(e.target.value)},[]);return t.jsxs(i,{spacing:"lg",alignItems:"normal",children:[t.jsx(c,{label:"RadioCard",children:d.map(e=>t.jsx(l,{name:"options",value:e,onChange:s,checked:n===e,id:e,children:e},e))}),t.jsxs("dl",{children:[t.jsx("dt",{children:"Values"}),t.jsx("dd",{children:n})]})]})}},p={render:()=>{const[n,o]=a.useState(d[0]),s=a.useCallback(e=>{o(e.target.value)},[]);return t.jsx(c,{label:"RadioCard",direction:"row",children:d.map(e=>t.jsx(l,{name:"horizontally",value:e,onChange:s,checked:n===e,id:e,children:e},e))})}},m={render:n=>{const o=["option1","option2","option3"],[s,e]=a.useState("option1"),k=r=>{e(r.target.value)};return t.jsx(i,{spacing:"sm",children:o.map(r=>a.createElement(l,{...n,key:r,checked:s===r,value:r,onChange:k,name:"block"},r))})},args:{..._,name:"block",block:!0}},g={render:()=>{const[n,o]=a.useState(d[0]),s=a.useCallback(e=>{o(e.target.value)},[]);return t.jsx(c,{label:"RadioCard",showRequiredLabel:!0,children:d.map(e=>t.jsx(l,{name:"options",value:e,onChange:s,checked:n===e,id:e,children:e},e))})}},h={args:_,render:n=>{const o=["option1","option2","option3"],[s,e]=a.useState("option1"),k=r=>{e(r.target.value)};return t.jsx(i,{spacing:"sm",children:o.map((r,B)=>a.createElement(l,{...n,key:r,checked:s===r,value:r,onChange:k,name:"customDataAttribute","data-test-id":B},r))})}},C={render:()=>{const[n,o]=a.useState(d[0]),s=a.useCallback(e=>{o(e.target.value)},[]);return t.jsxs(i,{spacing:"lg",alignItems:"normal",children:[t.jsx(c,{label:"RadioCard",children:d.map(e=>t.jsx(l,{name:"options",value:e,onChange:s,checked:n===e,id:e,disabled:!0,children:e},e))}),t.jsxs("dl",{children:[t.jsx("dt",{children:"Values"}),t.jsx("dd",{children:n})]})]})}},v={render:()=>{const[n,o]=a.useState(d[0]),s=a.useCallback(e=>{o(e.target.value)},[]);return t.jsxs(i,{spacing:"lg",alignItems:"normal",children:[t.jsx(c,{children:d.map(e=>t.jsx(l,{name:"options",value:e,onChange:s,checked:n===e,id:e,children:e},e))}),t.jsxs("dl",{children:[t.jsx("dt",{children:"Values"}),t.jsx("dd",{children:n})]})]})}};var S,I,R;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(I=u.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var b,x,j;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var E,H,y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(y=(H=m.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};var G,L,V;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(V=(L=g.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var f,D,A;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(A=(D=h.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var M,T,w;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(w=(T=C.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var q,z,O;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Stack spacing="lg" alignItems="normal">
        <RadioGroup>
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
}`,...(O=(z=v.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const Y=["Default","Horizontally","Block","ShowRequiredLabel","CustomDataAttribute","Disabled","NoLabelOnGroup"];export{m as Block,h as CustomDataAttribute,u as Default,C as Disabled,p as Horizontally,v as NoLabelOnGroup,g as ShowRequiredLabel,Y as __namedExportsOrder,X as default};
