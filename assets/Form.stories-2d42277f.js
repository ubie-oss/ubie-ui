import{j as p,a as e}from"./jsx-runtime-03b4ddbf.js";import{r as s}from"./index-76fb7be0.js";import{S as g}from"./Stack-0a7abb46.js";import{L as m}from"./Label-234f771f.js";import{I as k}from"./Input-7d988832.js";import{H as l}from"./HelperMessage-f943a72f.js";import{E as u}from"./ErrorMessage-5811c9b9.js";import{R as b}from"./RadioButton-5bcde963.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";const D={title:"Form/Form"},c={render:()=>{const[r,t]=s.useState(""),n=s.useCallback(o=>{t(o.target.value)},[]);return p(g,{spacing:"xs",children:[e(m,{htmlFor:"field",children:"項目"}),e(k,{id:"field",value:r,onChange:n}),e(l,{children:"説明文です"}),e(l,{children:"説明文です"})]})}},i={render:()=>{const[r,t]=s.useState(""),n=s.useCallback(o=>{t(o.target.value)},[]);return p(g,{spacing:"xs",children:[e(m,{htmlFor:"error-field",children:"項目"}),e(k,{value:r,id:"error-field",onChange:n,isInvalid:!0}),e(u,{children:"全角カタカナでご入力ください"}),e(u,{children:"全角カタカナでご入力ください"}),e(l,{children:"説明文です"})]})}},d={render:()=>{const r=["項目1","項目2","項目3"],[t,n]=s.useState(r[0]),o=s.useCallback(a=>{n(a.target.value)},[]);return e("fieldset",{style:{border:"none",padding:0},children:p(g,{spacing:"xs",alignItems:"normal",children:[e(m,{as:"legend",children:"通院状況"}),r.map(a=>e(b,{name:"commuting",value:a,onChange:o,checked:t.includes(a),children:a},a)),e(u,{children:"何かしらのエラーメッセージ"}),e(u,{children:"何かしらのエラーメッセージ"}),e(l,{children:"説明文です"}),e(l,{children:"説明文です"})]})})}};var h,v,M;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(M=(v=c.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var f,C,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,I,H;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const options = ['項目1', '項目2', '項目3'];
    const [selectedItem, setSelectedItem] = useState<string>(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <fieldset style={{
      border: 'none',
      padding: 0
    }}>
        <Stack spacing="xs" alignItems="normal">
          <Label as="legend">通院状況</Label>
          {options.map(option => <RadioButton name="commuting" value={option} onChange={onChange} checked={selectedItem.includes(option)} key={option}>
              {option}
            </RadioButton>)}
          <ErrorMessage>何かしらのエラーメッセージ</ErrorMessage>
          <ErrorMessage>何かしらのエラーメッセージ</ErrorMessage>
          <HelperMessage>説明文です</HelperMessage>
          <HelperMessage>説明文です</HelperMessage>
        </Stack>
      </fieldset>;
  }
}`,...(H=(I=d.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};const G=["Default","Error","InputGroup"];export{c as Default,i as Error,d as InputGroup,G as __namedExportsOrder,D as default};
//# sourceMappingURL=Form.stories-2d42277f.js.map
