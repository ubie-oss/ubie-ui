import{j as c}from"./jsx-runtime-DuyR_K1q.js";import{r as a}from"./index-yUhCOHB4.js";import{C as s,a as d}from"./CheckboxGroup-CPErwxf-.js";import{S as z}from"./Stack-BMH-C6VO.js";import"./RequiredLabel-BcCo87Zs.js";import"./clsx-B-dksMZM.js";import"./Icon-ULdndk7k.js";import"./ArrowBDownIcon-DhMIqqai.js";import"./UnfoldMoreIcon-BpmwIn3S.js";import"./style-BnM3_UOs.js";import"./Flex-BpteVeJY.js";const J={title:"Form/CheckboxCard",component:s},M={},l=["option1","option2","option3","option4","option5"],u={render:()=>{const[r,n]=a.useState([l[0]]),o=a.useCallback(e=>{e.currentTarget.checked?n([...r,e.currentTarget.value]):n(r.filter(t=>t!==e.currentTarget.value))},[r]);return c.jsxs(z,{spacing:"lg",children:[c.jsx(d,{label:"Checkbox",children:l.map(e=>c.jsx(s,{block:!0,name:"default",value:e,onChange:o,checked:r.includes(e),children:e},e))}),c.jsxs("dl",{children:[c.jsx("dt",{children:"Values"}),c.jsx("dd",{children:r.join(",")})]})]})}},m={render:()=>{const[r,n]=a.useState([l[0]]),o=a.useCallback(e=>{e.currentTarget.checked?n([...r,e.currentTarget.value]):n(r.filter(t=>t!==e.currentTarget.value))},[r]);return c.jsx(d,{label:"Checkbox",children:l.map(e=>c.jsx(s,{disabled:!0,name:"default",value:e,onChange:o,checked:r.includes(e),children:e},e))})}},i={render:()=>{const[r,n]=a.useState([l[0]]),o=a.useCallback(e=>{e.currentTarget.checked?n([...r,e.currentTarget.value]):n(r.filter(t=>t!==e.currentTarget.value))},[r]);return c.jsx(d,{label:"Checkbox",direction:"row",children:l.map(e=>c.jsx(s,{name:"horizontally",value:e,onChange:o,checked:r.includes(e),id:e,children:e},e))})}},k={render:r=>{const[n,o]=a.useState([l[0]]),e=a.useCallback(t=>{t.currentTarget.checked?o([...n,t.currentTarget.value]):o(n.filter(h=>h!==t.currentTarget.value))},[n]);return c.jsx(d,{label:"Checkbox",children:l.map(t=>a.createElement(s,{block:!0,...r,key:t,checked:n.includes(t),value:t,onChange:e,name:"block"},t))})},args:{...M,name:"block",block:!0}},p={render:r=>{const[n,o]=a.useState([l[0]]),e=a.useCallback(t=>{t.currentTarget.checked?o([...n,t.currentTarget.value]):o(n.filter(h=>h!==t.currentTarget.value))},[n]);return c.jsx(d,{children:l.map(t=>a.createElement(s,{block:!0,...r,key:t,checked:n.includes(t),value:t,onChange:e,name:"block"},t))})},args:{...M,name:"block",block:!0}};var C,g,b;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.currentTarget.checked) {
        setSelectedItem([...selectedItem, event.currentTarget.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.currentTarget.value));
      }
    }, [selectedItem]);
    return <Stack spacing="lg">
        <CheckboxGroup label="Checkbox">
          {options.map(option => <CheckboxCard block name="default" value={option} onChange={onChange} checked={selectedItem.includes(option)} key={option}>
              {option}
            </CheckboxCard>)}
        </CheckboxGroup>

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem.join(',')}</dd>
        </dl>
      </Stack>;
  }
}`,...(b=(g=u.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var I,x,v;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.currentTarget.checked) {
        setSelectedItem([...selectedItem, event.currentTarget.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.currentTarget.value));
      }
    }, [selectedItem]);
    return <CheckboxGroup label="Checkbox">
        {options.map(option => <CheckboxCard disabled name="default" value={option} onChange={onChange} checked={selectedItem.includes(option)} key={option}>
            {option}
          </CheckboxCard>)}
      </CheckboxGroup>;
  }
}`,...(v=(x=m.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,T,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.currentTarget.checked) {
        setSelectedItem([...selectedItem, event.currentTarget.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.currentTarget.value));
      }
    }, [selectedItem]);
    return <CheckboxGroup label="Checkbox" direction="row">
        {options.map(option => <CheckboxCard name="horizontally" value={option} onChange={onChange} checked={selectedItem.includes(option)} id={option} key={option}>
            {option}
          </CheckboxCard>)}
      </CheckboxGroup>;
  }
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var j,E,G;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.currentTarget.checked) {
        setSelectedItem([...selectedItem, event.currentTarget.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.currentTarget.value));
      }
    }, [selectedItem]);
    return <CheckboxGroup label="Checkbox">
        {options.map(option => <CheckboxCard block {...args} key={option} checked={selectedItem.includes(option)} value={option} onChange={onChange} name="block">
            {option}
          </CheckboxCard>)}
      </CheckboxGroup>;
  },
  args: {
    ...defaultArgs,
    name: 'block',
    block: true
  }
}`,...(G=(E=k.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var H,y,L;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.currentTarget.checked) {
        setSelectedItem([...selectedItem, event.currentTarget.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.currentTarget.value));
      }
    }, [selectedItem]);
    return <CheckboxGroup>
        {options.map(option => <CheckboxCard block {...args} key={option} checked={selectedItem.includes(option)} value={option} onChange={onChange} name="block">
            {option}
          </CheckboxCard>)}
      </CheckboxGroup>;
  },
  args: {
    ...defaultArgs,
    name: 'block',
    block: true
  }
}`,...(L=(y=p.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const K=["Default","Disabled","Horizontally","Block","NoLabelOnGroup"];export{k as Block,u as Default,m as Disabled,i as Horizontally,p as NoLabelOnGroup,K as __namedExportsOrder,J as default};
