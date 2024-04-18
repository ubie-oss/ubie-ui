import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as t}from"./index-1b03fe98.js";import{I as a}from"./Input-9c0ebab7.js";import{S as w}from"./Stack-b9a4a6fa.js";import"./clsx-1229b3e0.js";const G={title:"Form/Input",component:a},r={render:()=>{const[s,c]=t.useState("Lorem ipsum"),i=t.useCallback(v=>{c(v.target.value)},[]);return e.jsxs(w,{spacing:"md",children:[e.jsx(a,{value:s,onChange:i}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Value"}),e.jsx("dd",{children:s})]})]})}},u={render:()=>{const[s,c]=t.useState("lorem ipsum"),[i,v]=t.useState("test@example.com"),[k,T]=t.useState("abcd1234"),[E,H]=t.useState("000-0000-0000"),[F,M]=t.useState("http://www.example.com"),[f,L]=t.useState("10"),N=t.useCallback(l=>{c(l.target.value)},[]),P=t.useCallback(l=>{v(l.target.value)},[]),U=t.useCallback(l=>{T(l.target.value)},[]),D=t.useCallback(l=>{H(l.target.value)},[]),_=t.useCallback(l=>{M(l.target.value)},[]),z=t.useCallback(l=>{L(l.target.value)},[]),n={display:"inline-block",paddingBottom:"8px",fontSize:"13px"};return e.jsxs(w,{spacing:"md",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-text",style:n,children:"text"}),e.jsx(a,{id:"tv-text",value:s,onChange:N})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-mail",style:n,children:"mail"}),e.jsx(a,{type:"email",id:"tv-mail",value:i,onChange:P})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-password",style:n,children:"password"}),e.jsx(a,{type:"password",id:"tv-password",value:k,onChange:U})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-tel",style:n,children:"tel"}),e.jsx(a,{type:"tel",id:"tv-tel",value:E,onChange:D})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-url",style:n,children:"url"}),e.jsx(a,{type:"url",id:"tv-url",value:F,onChange:_})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-number",style:n,children:"number"}),e.jsx(a,{type:"number",id:"tv-number",value:f,onChange:z})]})]})}},o={render:()=>e.jsx(a,{value:"lorem ipsum"})},d={render:()=>e.jsx(a,{value:"wrong value",isInvalid:!0})};var m,p,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,g,x;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(g=u.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var V,C,y;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Input value="lorem ipsum" />
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var S,j,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Input value="wrong value" isInvalid />
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const J=["Default","Types","Disabled","IsInvalid"];export{r as Default,o as Disabled,d as IsInvalid,u as Types,J as __namedExportsOrder,G as default};
