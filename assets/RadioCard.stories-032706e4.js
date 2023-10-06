import{j as p,c as m,a as r}from"./clsx-0a53246e.js";import{r as s}from"./index-76fb7be0.js";import{S as b}from"./Stack-ac0bc903.js";import"./_commonjsHelpers-de833af9.js";const v="_block_b30q0_1",D="_radio_b30q0_5",f="_label_b30q0_10",S="_checked_b30q0_29",c={block:v,radio:D,label:f,checked:S},n=s.forwardRef(({name:t,value:o,checked:a,children:e,className:i,block:u=!1,...A},_)=>p("label",{className:m(c.label,u&&c.block,a&&c.checked),children:[r("input",{type:"radio",name:t,value:o,checked:a,className:m(i,c.radio),...A,ref:_}),e]}));n.displayName="RadioCard";try{n.displayName="RadioCard",n.__docgenInfo={description:`アクセシビリティに配慮したラジオボタン。
TimeQuestionContentのような、選択した後自動で遷移しないタイプのラジオボタン（選択してもなにもおきないボタン）に使用する。`,displayName:"RadioCard",props:{name:{defaultValue:null,description:"グループ化（排他制御）したい要素には同じ名前をつける",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"選択時のコールバックで渡される値",name:"value",required:!0,type:{name:"string | number"}},children:{defaultValue:null,description:"* ラベルに表示されるテキストまたは要素",name:"children",required:!0,type:{name:"ReactNode"}},block:{defaultValue:{value:"false"},description:"横幅を100%占有するかどうか",name:"block",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"Form/RadioCard",component:n},y={},C=["option1","option2","option3"],l={render:()=>{const[t,o]=s.useState(C[0]),a=s.useCallback(e=>{o(e.target.value)},[]);return p(b,{spacing:"md",children:[C.map(e=>r(n,{name:"options",value:e,onChange:a,checked:t===e,id:e,children:e},e)),p("dl",{children:[r("dt",{children:"Values"}),r("dd",{children:t})]})]})}},d={render:t=>{const o=["option1","option2","option3"],[a,e]=s.useState("option1"),i=u=>{e(u.target.value)};return r(b,{spacing:"sm",children:o.map(u=>s.createElement(n,{...t,key:u,checked:a===u,value:u,onChange:i},u))})},args:{...y,name:"block",block:!0}};var g,F,B;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Stack spacing="md">
        {options.map(option => <RadioCard name="options" value={option} onChange={onChange} checked={selectedItem === option} id={option} key={option}>
            {option}
          </RadioCard>)}

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem}</dd>
        </dl>
      </Stack>;
  }
}`,...(B=(F=l.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var k,h,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const options = ['option1', 'option2', 'option3'];
    const [value, setValue] = useState<string>('option1');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
    return <Stack spacing="sm">
        {options.map(option => <RadioCard {...args} key={option} checked={value === option} value={option} onChange={onChange}>
            {option}
          </RadioCard>)}
      </Stack>;
  },
  args: {
    ...defaultArgs,
    name: 'block',
    block: true
  }
}`,...(E=(h=d.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const N=["Default","Block"];export{d as Block,l as Default,N as __namedExportsOrder,x as default};
//# sourceMappingURL=RadioCard.stories-032706e4.js.map
