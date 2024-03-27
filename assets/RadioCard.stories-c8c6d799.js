import{j as n}from"./jsx-runtime-9c4ae004.js";import{r as o}from"./index-1b03fe98.js";import{a as p,R as I}from"./RadioGroup-bb08bfd4.js";import{S as b}from"./Stack-4d97e226.js";import"./clsx-1229b3e0.js";const V={title:"Form/RadioCard",component:p},j={},i=["option1","option2","option3"],c={render:()=>{const[t,r]=o.useState(i[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return n.jsxs(b,{spacing:"lg",alignItems:"normal",children:[n.jsx(I,{label:"RadioCard",children:i.map(e=>n.jsx(p,{name:"options",value:e,onChange:s,checked:t===e,id:e,children:e},e))}),n.jsxs("dl",{children:[n.jsx("dt",{children:"Values"}),n.jsx("dd",{children:t})]})]})}},d={render:()=>{const[t,r]=o.useState(i[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return n.jsx(I,{label:"RadioCard",direction:"row",children:i.map(e=>n.jsx(p,{name:"horizontally",value:e,onChange:s,checked:t===e,id:e,children:e},e))})}},l={render:t=>{const r=["option1","option2","option3"],[s,e]=o.useState("option1"),x=a=>{e(a.target.value)};return n.jsx(b,{spacing:"sm",children:r.map(a=>o.createElement(p,{...t,key:a,checked:s===a,value:a,onChange:x,name:"block"},a))})},args:{...j,name:"block",block:!0}};var m,u,g;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,C,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(k=(C=d.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var v,R,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(R=l.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const z=["Default","Horizontally","Block"];export{l as Block,c as Default,d as Horizontally,z as __namedExportsOrder,V as default};
