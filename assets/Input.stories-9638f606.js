import{j as e}from"./jsx-runtime-69eee039.js";import{r as t}from"./index-7c191284.js";import{I as a}from"./Input-43c992ed.js";import{S as U}from"./Stack-6a87d4f9.js";import"./clsx-1229b3e0.js";import"./style-282c756e.js";const le={title:"Form/Input",component:a},d={render:()=>{const[l,r]=t.useState("Lorem ipsum"),u=t.useCallback(o=>{r(o.target.value)},[]);return e.jsxs(U,{spacing:"md",children:[e.jsx(a,{value:l,onChange:u}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Value"}),e.jsx("dd",{children:l})]})]})}},c={render:()=>{const[l,r]=t.useState("lorem ipsum"),[u,o]=t.useState("test@example.com"),[q,R]=t.useState("abcd1234"),[_,z]=t.useState("000-0000-0000"),[A,B]=t.useState("http://www.example.com"),[O,G]=t.useState("10"),J=t.useCallback(n=>{r(n.target.value)},[]),K=t.useCallback(n=>{o(n.target.value)},[]),Q=t.useCallback(n=>{R(n.target.value)},[]),W=t.useCallback(n=>{z(n.target.value)},[]),X=t.useCallback(n=>{B(n.target.value)},[]),Y=t.useCallback(n=>{G(n.target.value)},[]),s={display:"inline-block",paddingBottom:"8px",fontSize:"13px"};return e.jsxs(U,{spacing:"md",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-text",style:s,children:"text"}),e.jsx(a,{id:"tv-text",value:l,onChange:J})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-mail",style:s,children:"mail"}),e.jsx(a,{type:"email",id:"tv-mail",value:u,onChange:K})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-password",style:s,children:"password"}),e.jsx(a,{type:"password",id:"tv-password",value:q,onChange:Q})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-tel",style:s,children:"tel"}),e.jsx(a,{type:"tel",id:"tv-tel",value:_,onChange:W})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-url",style:s,children:"url"}),e.jsx(a,{type:"url",id:"tv-url",value:A,onChange:X})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-number",style:s,children:"number"}),e.jsx(a,{type:"number",id:"tv-number",value:O,onChange:Y})]})]})}},i={render:()=>e.jsx(a,{value:"lorem ipsum",disabled:!0})},m={render:()=>e.jsx(a,{value:"wrong value",isInvalid:!0})},p={render:()=>{const[l,r]=t.useState(""),u=t.useCallback(o=>{r(o.target.value)},[]);return e.jsx(a,{required:!0,value:l,onChange:u})}},v={render:()=>e.jsx(a,{placeholder:"placeholder"})},h={args:{"data-test-id":"input-custom-attribute"},render:l=>e.jsx(a,{...l})};var b,g,V;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Lorem ipsum');
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <Stack spacing="md">
        <Input value={value} onChange={onChange} />

        <dl>
          <dt>Value</dt>
          <dd>{value}</dd>
        </dl>
      </Stack>;
  }
}`,...(V=(g=d.parameters)==null?void 0:g.docs)==null?void 0:V.source}}};var x,C,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [textValue, setTextValue] = useState('lorem ipsum');
    const [mailValue, setMailValue] = useState('test@example.com');
    const [passwordValue, setPasswordValue] = useState('abcd1234');
    const [telValue, setTelValue] = useState('000-0000-0000');
    const [urlValue, setUrlValue] = useState('http://www.example.com');
    const [numberValue, setNumberValue] = useState('10');
    const onChangeText: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setTextValue(event.target.value);
    }, []);
    const onChangeMail: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setMailValue(event.target.value);
    }, []);
    const onPasswordValue: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setPasswordValue(event.target.value);
    }, []);
    const onTelValue: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setTelValue(event.target.value);
    }, []);
    const onUrlValue: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setUrlValue(event.target.value);
    }, []);
    const onNumberValue: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setNumberValue(event.target.value);
    }, []);
    const labelStyle = {
      display: 'inline-block',
      paddingBottom: '8px',
      fontSize: '13px'
    };
    return <Stack spacing="md">
        <div>
          <label htmlFor="tv-text" style={labelStyle}>
            text
          </label>
          <Input id="tv-text" value={textValue} onChange={onChangeText} />
        </div>

        <div>
          <label htmlFor="tv-mail" style={labelStyle}>
            mail
          </label>
          <Input type="email" id="tv-mail" value={mailValue} onChange={onChangeMail} />
        </div>

        <div>
          <label htmlFor="tv-password" style={labelStyle}>
            password
          </label>
          <Input type="password" id="tv-password" value={passwordValue} onChange={onPasswordValue} />
        </div>

        <div>
          <label htmlFor="tv-tel" style={labelStyle}>
            tel
          </label>
          <Input type="tel" id="tv-tel" value={telValue} onChange={onTelValue} />
        </div>

        <div>
          <label htmlFor="tv-url" style={labelStyle}>
            url
          </label>
          <Input type="url" id="tv-url" value={urlValue} onChange={onUrlValue} />
        </div>

        <div>
          <label htmlFor="tv-number" style={labelStyle}>
            number
          </label>
          <Input type="number" id="tv-number" value={numberValue} onChange={onNumberValue} />
        </div>
      </Stack>;
  }
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,j,I;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Input value="lorem ipsum" disabled />
}`,...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var w,k,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Input value="wrong value" isInvalid />
}`,...(T=(k=m.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var E,H,M;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const onChangeValue: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <Input required value={value} onChange={onChangeValue} />;
  }
}`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var F,L,f;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Input placeholder="placeholder" />
}`,...(f=(L=v.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var P,D,N;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'input-custom-attribute'
  },
  render: args => <Input {...args} />
}`,...(N=(D=h.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const se=["Default","Types","Disabled","IsInvalid","Required","Placeholder","CustomDataAttribute"];export{h as CustomDataAttribute,d as Default,i as Disabled,m as IsInvalid,v as Placeholder,p as Required,c as Types,se as __namedExportsOrder,le as default};
