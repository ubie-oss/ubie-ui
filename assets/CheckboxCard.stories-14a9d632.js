import{j as a}from"./jsx-runtime-69eee039.js";import{r}from"./index-7c191284.js";import{c as b}from"./clsx-1229b3e0.js";import{I as G}from"./Icon-1a39de0c.js";import{C as p}from"./CheckboxGroup-169f7e42.js";import{S as D}from"./Stack-3105aa16.js";import"./ArrowBDownIcon-86826e18.js";import"./TrashIcon-de957c6c.js";import"./MinusAIcon-79ce0cfc.js";import"./ThumbUpOutlineIcon-17e2fa33.js";import"./UbieIcon-105662b4.js";import"./UnfoldMoreIcon-402a05cb.js";import"./style-62efef97.js";import"./RequiredLabel-0530a236.js";import"./Flex-4fbea599.js";const N="_block_a0xch_1",z="_checkbox_a0xch_5",L="_label_a0xch_10",M="_checked_a0xch_39",T="_disabled_a0xch_60",w="_checkIcon_a0xch_105",d={block:N,checkbox:z,label:L,checked:M,disabled:T,checkIcon:w},s=r.forwardRef(({name:t,value:c,checked:o,children:e,className:n,block:k=!1,disabled:C,...F},H)=>a.jsxs("label",{className:b(d.label,k&&d.block,o&&d.checked,C&&d.disabled),children:[o&&a.jsx("span",{className:d.checkIcon,children:a.jsx(G,{size:"sm",icon:"CheckAIcon","aria-hidden":"true"})}),a.jsx("input",{type:"checkbox",name:t,value:c,checked:o,className:b(n,d.checkbox),ref:H,disabled:C,...F}),e]}));s.displayName="CheckboxCard";try{s.displayName="CheckboxCard",s.__docgenInfo={description:`カード状のチェックボックス
タップ・クリック可能エリアが広いため操作が容易`,displayName:"CheckboxCard",props:{block:{defaultValue:{value:"false"},description:"横幅を100%占有するかどうか",name:"block",required:!1,type:{name:"boolean"}}}}}catch{}const ne={title:"Form/CheckboxCard",component:s},V={},l=["option1","option2","option3"],u={render:()=>{const[t,c]=r.useState([l[0]]),o=r.useCallback(e=>{e.target.checked?c([...t,e.target.value]):c(t.filter(n=>n!==e.target.value))},[t]);return a.jsxs(D,{spacing:"lg",children:[a.jsx(p,{label:"Checkbox",children:l.map(e=>a.jsx(s,{name:"default",value:e,onChange:o,checked:t.includes(e),children:e},e))}),a.jsxs("dl",{children:[a.jsx("dt",{children:"Values"}),a.jsx("dd",{children:t.join(",")})]})]})}},i={render:()=>{const[t,c]=r.useState([l[0]]),o=r.useCallback(e=>{e.target.checked?c([...t,e.target.value]):c(t.filter(n=>n!==e.target.value))},[t]);return a.jsx(p,{label:"Checkbox",children:l.map(e=>a.jsx(s,{disabled:!0,name:"default",value:e,onChange:o,checked:t.includes(e),children:e},e))})}},m={render:()=>{const[t,c]=r.useState([l[0]]),o=r.useCallback(e=>{e.target.checked?c([...t,e.target.value]):c(t.filter(n=>n!==e.target.value))},[t]);return a.jsx(p,{label:"Checkbox",direction:"row",children:l.map(e=>a.jsx(s,{name:"horizontally",value:e,onChange:o,checked:t.includes(e),id:e,children:e},e))})}},h={render:t=>{const[c,o]=r.useState([l[0]]),e=r.useCallback(n=>{n.target.checked?o([...c,n.target.value]):o(c.filter(k=>k!==n.target.value))},[c]);return a.jsx(p,{label:"Checkbox",children:l.map(n=>r.createElement(s,{block:!0,...t,key:n,checked:c.includes(n),value:n,onChange:e,name:"block"},n))})},args:{...V,name:"block",block:!0}};var g,x,I;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.target.checked) {
        setSelectedItem([...selectedItem, event.target.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.target.value));
      }
    }, [selectedItem]);
    return <Stack spacing="lg">
        <CheckboxGroup label="Checkbox">
          {options.map(option => <CheckboxCard name="default" value={option} onChange={onChange} checked={selectedItem.includes(option)} key={option}>
              {option}
            </CheckboxCard>)}
        </CheckboxGroup>

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem.join(',')}</dd>
        </dl>
      </Stack>;
  }
}`,...(I=(x=u.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var f,v,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.target.checked) {
        setSelectedItem([...selectedItem, event.target.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.target.value));
      }
    }, [selectedItem]);
    return <CheckboxGroup label="Checkbox">
        {options.map(option => <CheckboxCard disabled name="default" value={option} onChange={onChange} checked={selectedItem.includes(option)} key={option}>
            {option}
          </CheckboxCard>)}
      </CheckboxGroup>;
  }
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var _,j,E;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.target.checked) {
        setSelectedItem([...selectedItem, event.target.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.target.value));
      }
    }, [selectedItem]);
    return <CheckboxGroup label="Checkbox" direction="row">
        {options.map(option => <CheckboxCard name="horizontally" value={option} onChange={onChange} checked={selectedItem.includes(option)} id={option} key={option}>
            {option}
          </CheckboxCard>)}
      </CheckboxGroup>;
  }
}`,...(E=(j=m.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var y,A,B;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.target.checked) {
        setSelectedItem([...selectedItem, event.target.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.target.value));
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
}`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const ce=["Default","Disabled","Horizontally","Block"];export{h as Block,u as Default,i as Disabled,m as Horizontally,ce as __namedExportsOrder,ne as default};
