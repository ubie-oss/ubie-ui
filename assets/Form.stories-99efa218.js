import{j as e}from"./jsx-runtime-69eee039.js";import{r as s}from"./index-7c191284.js";import{S as d}from"./Stack-3105aa16.js";import{L as S}from"./Label-c240eb8a.js";import{I as j}from"./Input-68dd2592.js";import{H as o}from"./HelperMessage-18da0523.js";import{E as m}from"./ErrorMessage-19a742c2.js";import{R as f}from"./RadioGroup-fc50846a.js";import{R as A}from"./RadioButton-de75a288.js";import"./clsx-1229b3e0.js";import"./style-62efef97.js";import"./RequiredLabel-0530a236.js";import"./Flex-4fbea599.js";const _={title:"Form/Form"},l={render:()=>{const[r,a]=s.useState(""),u=s.useCallback(t=>{a(t.target.value)},[]);return e.jsxs(d,{spacing:"xs",children:[e.jsx(S,{htmlFor:"field",showRequiredLabel:!0,children:"項目"}),e.jsx(j,{id:"field",value:r,onChange:u}),e.jsx(o,{children:"説明文です"}),e.jsx(o,{children:"説明文です"})]})}},c={render:()=>{const[r,a]=s.useState(""),u=s.useCallback(t=>{a(t.target.value)},[]);return e.jsxs(d,{spacing:"xs",children:[e.jsx(S,{htmlFor:"error-field",children:"項目"}),e.jsx(j,{value:r,id:"error-field",onChange:u,isInvalid:!0}),e.jsx(m,{children:"全角カタカナでご入力ください"}),e.jsx(m,{children:"全角カタカナでご入力ください"}),e.jsx(o,{children:"説明文です"})]})}},i={render:()=>{const r=["項目1","項目2","項目3"],[a,u]=s.useState(r[0]),t=s.useCallback(n=>{u(n.target.value)},[]);return e.jsxs(d,{spacing:"md",alignItems:"normal",children:[e.jsx(f,{label:"通院状況",showRequiredLabel:!0,children:r.map(n=>e.jsx(A,{name:"commuting",value:n,onChange:t,checked:a.includes(n),children:n},n))}),e.jsxs(d,{spacing:"xs",children:[e.jsx(m,{children:"何かしらのエラーメッセージ"}),e.jsx(m,{children:"何かしらのエラーメッセージ"}),e.jsx(o,{children:"説明文です"}),e.jsx(o,{children:"説明文です"})]})]})}};var p,g,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(e => {
      setValue(e.target.value);
    }, []);
    return <Stack spacing="xs">
        <Label htmlFor="field" showRequiredLabel>
          項目
        </Label>
        <Input id="field" value={value} onChange={onChange} />
        <HelperMessage>説明文です</HelperMessage>
        <HelperMessage>説明文です</HelperMessage>
      </Stack>;
  }
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var E,C,x;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(e => {
      setValue(e.target.value);
    }, []);
    return <Stack spacing="xs">
        <Label htmlFor="error-field">項目</Label>
        <Input value={value} id="error-field" onChange={onChange} isInvalid />
        <ErrorMessage>全角カタカナでご入力ください</ErrorMessage>
        <ErrorMessage>全角カタカナでご入力ください</ErrorMessage>
        <HelperMessage>説明文です</HelperMessage>
      </Stack>;
  }
}`,...(x=(C=c.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var v,M,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const options = ['項目1', '項目2', '項目3'];
    const [selectedItem, setSelectedItem] = useState<string>(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Stack spacing="md" alignItems="normal">
        <RadioGroup label="通院状況" showRequiredLabel>
          {options.map(option => <RadioButton name="commuting" value={option} onChange={onChange} checked={selectedItem.includes(option)} key={option}>
              {option}
            </RadioButton>)}
        </RadioGroup>

        <Stack spacing="xs">
          <ErrorMessage>何かしらのエラーメッセージ</ErrorMessage>
          <ErrorMessage>何かしらのエラーメッセージ</ErrorMessage>
          <HelperMessage>説明文です</HelperMessage>
          <HelperMessage>説明文です</HelperMessage>
        </Stack>
      </Stack>;
  }
}`,...(B=(M=i.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const y=["Default","Error","RadioButtons"];export{l as Default,c as Error,i as RadioButtons,y as __namedExportsOrder,_ as default};
