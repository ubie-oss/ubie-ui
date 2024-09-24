import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{r as a}from"./index-DX35FyXq.js";import{S as d}from"./Stack-B5gcNMwP.js";import{L as E}from"./Label-CDRa2DGo.js";import{I as f}from"./Input-Cf656JdX.js";import{H as l}from"./HelperMessage-PF0h92xo.js";import{E as m}from"./ErrorMessage-DTZXbBk0.js";import{R as k}from"./RadioGroup-DuEszoTy.js";import{R as H}from"./RadioButton-Cu2O6qRV.js";import"./clsx-B-dksMZM.js";import"./style-D1Pgu1yr.js";import"./RequiredLabel-BnU1Ni3D.js";import"./Flex-BXhwPs8f.js";const y={title:"Form/Form"},c={render:()=>{const[r,t]=a.useState(""),o=a.useCallback(n=>{t(n.target.value)},[]);return e.jsxs(d,{spacing:"xs",children:[e.jsx(E,{htmlFor:"field",showRequiredLabel:!0,children:"項目"}),e.jsx(f,{id:"field",value:r,onChange:o}),e.jsx(l,{children:"説明文です"}),e.jsx(l,{children:"説明文です"})]})}},i={render:()=>{const[r,t]=a.useState(""),o=a.useCallback(n=>{t(n.target.value)},[]);return e.jsxs(d,{spacing:"xs",children:[e.jsx(E,{htmlFor:"error-field",children:"項目"}),e.jsx(f,{value:r,id:"error-field",onChange:o,isInvalid:!0}),e.jsx(m,{children:"全角カタカナでご入力ください"}),e.jsx(m,{children:"全角カタカナでご入力ください"}),e.jsx(l,{children:"説明文です"})]})}},u={render:()=>{const r=["項目1","項目2","項目3"],[t,o]=a.useState(r[0]),n=a.useCallback(s=>{o(s.target.value)},[]);return e.jsxs(d,{spacing:"md",alignItems:"normal",children:[e.jsx(k,{label:"通院状況",showRequiredLabel:!0,children:r.map(s=>e.jsx(H,{name:"commuting",value:s,onChange:n,checked:t.includes(s),children:s},s))}),e.jsxs(d,{spacing:"xs",children:[e.jsx(m,{children:"何かしらのエラーメッセージ"}),e.jsx(m,{children:"何かしらのエラーメッセージ"}),e.jsx(l,{children:"説明文です"}),e.jsx(l,{children:"説明文です"})]})]})}};var p,g,h;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,v,M;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(v=i.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var S,j,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const O=["Default","Error","RadioButtons"];export{c as Default,i as Error,u as RadioButtons,O as __namedExportsOrder,y as default};
