import{j as m,a as t}from"./jsx-runtime-03b4ddbf.js";import{r as o}from"./index-76fb7be0.js";import{R as p,a as b}from"./RadioGroup-9962c6d0.js";import{S as f}from"./Stack-60de74b5.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";const L={title:"Form/RadioCard",component:p},y={},i=["option1","option2","option3"],c={render:()=>{const[n,r]=o.useState(i[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return m(f,{spacing:"lg",alignItems:"normal",children:[t(b,{label:"RadioCard",children:i.map(e=>t(p,{name:"options",value:e,onChange:s,checked:n===e,id:e,children:e},e))}),m("dl",{children:[t("dt",{children:"Values"}),t("dd",{children:n})]})]})}},d={render:()=>{const[n,r]=o.useState(i[0]),s=o.useCallback(e=>{r(e.target.value)},[]);return t(b,{label:"RadioCard",direction:"row",children:i.map(e=>t(p,{name:"horizontally",value:e,onChange:s,checked:n===e,id:e,children:e},e))})}},l={render:n=>{const r=["option1","option2","option3"],[s,e]=o.useState("option1"),E=a=>{e(a.target.value)};return t(f,{spacing:"sm",children:r.map(a=>o.createElement(p,{...n,key:a,checked:s===a,value:a,onChange:E,name:"block"},a))})},args:{...y,name:"block",block:!0}};var u,g,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,k,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(k=d.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var S,R,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(R=l.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const M=["Default","Horizontally","Block"];export{l as Block,c as Default,d as Horizontally,M as __namedExportsOrder,L as default};
//# sourceMappingURL=RadioCard.stories-860748c9.js.map
