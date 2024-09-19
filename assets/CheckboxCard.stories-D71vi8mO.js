import{j as c}from"./jsx-runtime-B57y5fZt.js";import{r as a}from"./index-ebcBgdYO.js";import{C as s,a as d}from"./CheckboxGroup-BIe6kjea.js";import{S as z}from"./Stack-C27sQmuN.js";import"./RequiredLabel-BEfepObU.js";import"./clsx-B-dksMZM.js";import"./Icon-F3c9ObKA.js";import"./ArrowBDownIcon-BCJEnGoH.js";import"./TrashIcon-B_ewUANd.js";import"./ThumbUpOutlineIcon-BigBtPUM.js";import"./UbieIcon-B6eDHF2O.js";import"./UnfoldMoreIcon-BhaEsN1i.js";import"./style-BH_c6VN1.js";import"./Flex-DlDvINs3.js";const Q={title:"Form/CheckboxCard",component:s},M={},l=["option1","option2","option3","option4","option5"],u={render:()=>{const[r,n]=a.useState([l[0]]),o=a.useCallback(e=>{e.currentTarget.checked?n([...r,e.currentTarget.value]):n(r.filter(t=>t!==e.currentTarget.value))},[r]);return c.jsxs(z,{spacing:"lg",children:[c.jsx(d,{label:"Checkbox",children:l.map(e=>c.jsx(s,{block:!0,name:"default",value:e,onChange:o,checked:r.includes(e),children:e},e))}),c.jsxs("dl",{children:[c.jsx("dt",{children:"Values"}),c.jsx("dd",{children:r.join(",")})]})]})}},m={render:()=>{const[r,n]=a.useState([l[0]]),o=a.useCallback(e=>{e.currentTarget.checked?n([...r,e.currentTarget.value]):n(r.filter(t=>t!==e.currentTarget.value))},[r]);return c.jsx(d,{label:"Checkbox",children:l.map(e=>c.jsx(s,{disabled:!0,name:"default",value:e,onChange:o,checked:r.includes(e),children:e},e))})}},i={render:()=>{const[r,n]=a.useState([l[0]]),o=a.useCallback(e=>{e.currentTarget.checked?n([...r,e.currentTarget.value]):n(r.filter(t=>t!==e.currentTarget.value))},[r]);return c.jsx(d,{label:"Checkbox",direction:"row",children:l.map(e=>c.jsx(s,{name:"horizontally",value:e,onChange:o,checked:r.includes(e),id:e,children:e},e))})}},p={render:r=>{const[n,o]=a.useState([l[0]]),e=a.useCallback(t=>{t.currentTarget.checked?o([...n,t.currentTarget.value]):o(n.filter(h=>h!==t.currentTarget.value))},[n]);return c.jsx(d,{label:"Checkbox",children:l.map(t=>a.createElement(s,{block:!0,...r,key:t,checked:n.includes(t),value:t,onChange:e,name:"block"},t))})},args:{...M,name:"block",block:!0}},k={render:r=>{const[n,o]=a.useState([l[0]]),e=a.useCallback(t=>{t.currentTarget.checked?o([...n,t.currentTarget.value]):o(n.filter(h=>h!==t.currentTarget.value))},[n]);return c.jsx(d,{children:l.map(t=>a.createElement(s,{block:!0,...r,key:t,checked:n.includes(t),value:t,onChange:e,name:"block"},t))})},args:{...M,name:"block",block:!0}};var C,g,b;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
