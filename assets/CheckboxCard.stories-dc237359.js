import{j as c}from"./jsx-runtime-69eee039.js";import{r as a}from"./index-7c191284.js";import{C as s,a as d}from"./CheckboxGroup-f2814c5d.js";import{S as z}from"./Stack-66f086af.js";import"./RequiredLabel-0530a236.js";import"./clsx-1229b3e0.js";import"./Icon-858d0d22.js";import"./ArrowBDownIcon-86826e18.js";import"./TrashIcon-de957c6c.js";import"./ThumbUpOutlineIcon-17e2fa33.js";import"./UbieIcon-105662b4.js";import"./UnfoldMoreIcon-402a05cb.js";import"./style-1d55b7c3.js";import"./Flex-82d33e47.js";const Q={title:"Form/CheckboxCard",component:s},M={},l=["option1","option2","option3","option4","option5"],u={render:()=>{const[n,r]=a.useState([l[0]]),o=a.useCallback(e=>{e.currentTarget.checked?r([...n,e.currentTarget.value]):r(n.filter(t=>t!==e.currentTarget.value))},[n]);return c.jsxs(z,{spacing:"lg",children:[c.jsx(d,{label:"Checkbox",children:l.map(e=>c.jsx(s,{block:!0,name:"default",value:e,onChange:o,checked:n.includes(e),children:e},e))}),c.jsxs("dl",{children:[c.jsx("dt",{children:"Values"}),c.jsx("dd",{children:n.join(",")})]})]})}},m={render:()=>{const[n,r]=a.useState([l[0]]),o=a.useCallback(e=>{e.currentTarget.checked?r([...n,e.currentTarget.value]):r(n.filter(t=>t!==e.currentTarget.value))},[n]);return c.jsx(d,{label:"Checkbox",children:l.map(e=>c.jsx(s,{disabled:!0,name:"default",value:e,onChange:o,checked:n.includes(e),children:e},e))})}},i={render:()=>{const[n,r]=a.useState([l[0]]),o=a.useCallback(e=>{e.currentTarget.checked?r([...n,e.currentTarget.value]):r(n.filter(t=>t!==e.currentTarget.value))},[n]);return c.jsx(d,{label:"Checkbox",direction:"row",children:l.map(e=>c.jsx(s,{name:"horizontally",value:e,onChange:o,checked:n.includes(e),id:e,children:e},e))})}},p={render:n=>{const[r,o]=a.useState([l[0]]),e=a.useCallback(t=>{t.currentTarget.checked?o([...r,t.currentTarget.value]):o(r.filter(h=>h!==t.currentTarget.value))},[r]);return c.jsx(d,{label:"Checkbox",children:l.map(t=>a.createElement(s,{block:!0,...n,key:t,checked:r.includes(t),value:t,onChange:e,name:"block"},t))})},args:{...M,name:"block",block:!0}},k={render:n=>{const[r,o]=a.useState([l[0]]),e=a.useCallback(t=>{t.currentTarget.checked?o([...r,t.currentTarget.value]):o(r.filter(h=>h!==t.currentTarget.value))},[r]);return c.jsx(d,{children:l.map(t=>a.createElement(s,{block:!0,...n,key:t,checked:r.includes(t),value:t,onChange:e,name:"block"},t))})},args:{...M,name:"block",block:!0}};var C,g,b;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var j,E,G;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(G=(E=p.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var H,y,L;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(y=k.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const U=["Default","Disabled","Horizontally","Block","NoLabelOnGroup"];export{p as Block,u as Default,m as Disabled,i as Horizontally,k as NoLabelOnGroup,U as __namedExportsOrder,Q as default};
