import{j as e}from"./jsx-runtime-69eee039.js";import{r as t}from"./index-7c191284.js";import{I as a}from"./Input-68dd2592.js";import{S as f}from"./Stack-9a3a61db.js";import"./clsx-1229b3e0.js";import"./style-62efef97.js";const ee={title:"Form/Input",component:a},d={render:()=>{const[l,r]=t.useState("Lorem ipsum"),u=t.useCallback(o=>{r(o.target.value)},[]);return e.jsxs(f,{spacing:"md",children:[e.jsx(a,{value:l,onChange:u}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Value"}),e.jsx("dd",{children:l})]})]})}},c={render:()=>{const[l,r]=t.useState("lorem ipsum"),[u,o]=t.useState("test@example.com"),[D,N]=t.useState("abcd1234"),[P,U]=t.useState("000-0000-0000"),[q,R]=t.useState("http://www.example.com"),[_,z]=t.useState("10"),A=t.useCallback(n=>{r(n.target.value)},[]),B=t.useCallback(n=>{o(n.target.value)},[]),O=t.useCallback(n=>{N(n.target.value)},[]),G=t.useCallback(n=>{U(n.target.value)},[]),J=t.useCallback(n=>{R(n.target.value)},[]),K=t.useCallback(n=>{z(n.target.value)},[]),s={display:"inline-block",paddingBottom:"8px",fontSize:"13px"};return e.jsxs(f,{spacing:"md",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-text",style:s,children:"text"}),e.jsx(a,{id:"tv-text",value:l,onChange:A})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-mail",style:s,children:"mail"}),e.jsx(a,{type:"email",id:"tv-mail",value:u,onChange:B})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-password",style:s,children:"password"}),e.jsx(a,{type:"password",id:"tv-password",value:D,onChange:O})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-tel",style:s,children:"tel"}),e.jsx(a,{type:"tel",id:"tv-tel",value:P,onChange:G})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-url",style:s,children:"url"}),e.jsx(a,{type:"url",id:"tv-url",value:q,onChange:J})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-number",style:s,children:"number"}),e.jsx(a,{type:"number",id:"tv-number",value:_,onChange:K})]})]})}},i={render:()=>e.jsx(a,{value:"lorem ipsum"})},m={render:()=>e.jsx(a,{value:"wrong value",isInvalid:!0})},v={render:()=>{const[l,r]=t.useState(""),u=t.useCallback(o=>{r(o.target.value)},[]);return e.jsx(a,{required:!0,value:l,onChange:u})}},p={args:{"data-test-id":"input-custom-attribute"},render:l=>e.jsx(a,{...l})};var b,g,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var V,x,C;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(C=(x=c.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var S,y,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Input value="lorem ipsum" />
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var I,w,k;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Input value="wrong value" isInvalid />
}`,...(k=(w=m.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var T,E,H;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const onChangeValue: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <Input required value={value} onChange={onChangeValue} />;
  }
}`,...(H=(E=v.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var M,F,L;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'input-custom-attribute'
  },
  render: args => <Input {...args} />
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const te=["Default","Types","Disabled","IsInvalid","Required","CustomDataAttribute"];export{p as CustomDataAttribute,d as Default,i as Disabled,m as IsInvalid,v as Required,c as Types,te as __namedExportsOrder,ee as default};
