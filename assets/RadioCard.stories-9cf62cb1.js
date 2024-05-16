import{j as n}from"./jsx-runtime-9c4ae004.js";import{r as a}from"./index-1b03fe98.js";import{a as c,R as m}from"./RadioGroup-0f772b44.js";import{S as f}from"./Stack-6136d9d8.js";import"./RequiredLabel-a2a89590.js";import"./Flex-1220e7c3.js";import"./clsx-1229b3e0.js";import"./style-d1e19ac4.js";const _={title:"Form/RadioCard",component:c},H={},d=["option1","option2","option3"],l={render:()=>{const[t,o]=a.useState(d[0]),r=a.useCallback(e=>{o(e.target.value)},[]);return n.jsxs(f,{spacing:"lg",alignItems:"normal",children:[n.jsx(m,{label:"RadioCard",children:d.map(e=>n.jsx(c,{name:"options",value:e,onChange:r,checked:t===e,id:e,children:e},e))}),n.jsxs("dl",{children:[n.jsx("dt",{children:"Values"}),n.jsx("dd",{children:t})]})]})}},i={render:()=>{const[t,o]=a.useState(d[0]),r=a.useCallback(e=>{o(e.target.value)},[]);return n.jsx(m,{label:"RadioCard",direction:"row",children:d.map(e=>n.jsx(c,{name:"horizontally",value:e,onChange:r,checked:t===e,id:e,children:e},e))})}},p={render:t=>{const o=["option1","option2","option3"],[r,e]=a.useState("option1"),y=s=>{e(s.target.value)};return n.jsx(f,{spacing:"sm",children:o.map(s=>a.createElement(c,{...t,key:s,checked:r===s,value:s,onChange:y,name:"block"},s))})},args:{...H,name:"block",block:!0}},u={render:()=>{const[t,o]=a.useState(d[0]),r=a.useCallback(e=>{o(e.target.value)},[]);return n.jsx(m,{label:"RadioCard",showRequiredLabel:!0,children:d.map(e=>n.jsx(c,{name:"options",value:e,onChange:r,checked:t===e,id:e,children:e},e))})}};var g,h,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(h=l.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,v,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(R=(v=i.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var S,I,b;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(b=(I=p.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var x,j,E;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(j=u.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const A=["Default","Horizontally","Block","ShowRequiredLabel"];export{p as Block,l as Default,i as Horizontally,u as ShowRequiredLabel,A as __namedExportsOrder,_ as default};
