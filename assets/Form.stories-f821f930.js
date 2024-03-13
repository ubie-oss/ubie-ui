import{j as u,a as e}from"./jsx-runtime-03b4ddbf.js";import{r as s}from"./index-76fb7be0.js";import{S as m}from"./Stack-60de74b5.js";import{L as H}from"./Label-234f771f.js";import{I}from"./Input-7d988832.js";import{H as l}from"./HelperMessage-f943a72f.js";import{E as p}from"./ErrorMessage-5811c9b9.js";import{a as b}from"./RadioGroup-9962c6d0.js";import{R as x}from"./RadioButton-5bcde963.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";const O={title:"Form/Form"},c={render:()=>{const[r,t]=s.useState(""),o=s.useCallback(n=>{t(n.target.value)},[]);return u(m,{spacing:"xs",children:[e(H,{htmlFor:"field",children:"項目"}),e(I,{id:"field",value:r,onChange:o}),e(l,{children:"説明文です"}),e(l,{children:"説明文です"})]})}},i={render:()=>{const[r,t]=s.useState(""),o=s.useCallback(n=>{t(n.target.value)},[]);return u(m,{spacing:"xs",children:[e(H,{htmlFor:"error-field",children:"項目"}),e(I,{value:r,id:"error-field",onChange:o,isInvalid:!0}),e(p,{children:"全角カタカナでご入力ください"}),e(p,{children:"全角カタカナでご入力ください"}),e(l,{children:"説明文です"})]})}},d={render:()=>{const r=["項目1","項目2","項目3"],[t,o]=s.useState(r[0]),n=s.useCallback(a=>{o(a.target.value)},[]);return u(m,{spacing:"md",alignItems:"normal",children:[e(b,{label:"通院状況",children:r.map(a=>e(x,{name:"commuting",value:a,onChange:n,checked:t.includes(a),children:a},a))}),u(m,{spacing:"xs",children:[e(p,{children:"何かしらのエラーメッセージ"}),e(p,{children:"何かしらのエラーメッセージ"}),e(l,{children:"説明文です"}),e(l,{children:"説明文です"})]})]})}};var g,h,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var M,S,C;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var f,E,k;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(E=d.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const q=["Default","Error","RadioButtons"];export{c as Default,i as Error,d as RadioButtons,q as __namedExportsOrder,O as default};
//# sourceMappingURL=Form.stories-f821f930.js.map
