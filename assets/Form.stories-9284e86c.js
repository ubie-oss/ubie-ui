import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as s}from"./index-1b03fe98.js";import{S as d}from"./Stack-4d97e226.js";import{L as S}from"./Label-8cdba214.js";import{I as j}from"./Input-9c0ebab7.js";import{H as o}from"./HelperMessage-918e0de9.js";import{E as m}from"./ErrorMessage-cc78df93.js";import{R as f}from"./RadioGroup-bb08bfd4.js";import{R as A}from"./RadioButton-6b30ea70.js";import"./clsx-1229b3e0.js";const T={title:"Form/Form"},l={render:()=>{const[r,a]=s.useState(""),u=s.useCallback(t=>{a(t.target.value)},[]);return e.jsxs(d,{spacing:"xs",children:[e.jsx(S,{htmlFor:"field",children:"項目"}),e.jsx(j,{id:"field",value:r,onChange:u}),e.jsx(o,{children:"説明文です"}),e.jsx(o,{children:"説明文です"})]})}},c={render:()=>{const[r,a]=s.useState(""),u=s.useCallback(t=>{a(t.target.value)},[]);return e.jsxs(d,{spacing:"xs",children:[e.jsx(S,{htmlFor:"error-field",children:"項目"}),e.jsx(j,{value:r,id:"error-field",onChange:u,isInvalid:!0}),e.jsx(m,{children:"全角カタカナでご入力ください"}),e.jsx(m,{children:"全角カタカナでご入力ください"}),e.jsx(o,{children:"説明文です"})]})}},i={render:()=>{const r=["項目1","項目2","項目3"],[a,u]=s.useState(r[0]),t=s.useCallback(n=>{u(n.target.value)},[]);return e.jsxs(d,{spacing:"md",alignItems:"normal",children:[e.jsx(f,{label:"通院状況",children:r.map(n=>e.jsx(A,{name:"commuting",value:n,onChange:t,checked:a.includes(n),children:n},n))}),e.jsxs(d,{spacing:"xs",children:[e.jsx(m,{children:"何かしらのエラーメッセージ"}),e.jsx(m,{children:"何かしらのエラーメッセージ"}),e.jsx(o,{children:"説明文です"}),e.jsx(o,{children:"説明文です"})]})]})}};var p,g,E;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(e => {
      setValue(e.target.value);
    }, []);
    return <Stack spacing="xs">
        <Label htmlFor="field">項目</Label>
        <Input id="field" value={value} onChange={onChange} />
        <HelperMessage>説明文です</HelperMessage>
        <HelperMessage>説明文です</HelperMessage>
      </Stack>;
  }
}`,...(E=(g=l.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var h,C,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        <RadioGroup label="通院状況">
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
}`,...(B=(M=i.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const _=["Default","Error","RadioButtons"];export{l as Default,c as Error,i as RadioButtons,_ as __namedExportsOrder,T as default};
