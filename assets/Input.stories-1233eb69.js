import{j as e}from"./jsx-runtime-69eee039.js";import{r as t}from"./index-7c191284.js";import{I as n}from"./Input-e40dbda3.js";import{S as H}from"./Stack-79a82653.js";import"./clsx-1229b3e0.js";import"./style-e9a2251f.js";const X={title:"Form/Input",component:n},r={render:()=>{const[l,i]=t.useState("Lorem ipsum"),m=t.useCallback(v=>{i(v.target.value)},[]);return e.jsxs(H,{spacing:"md",children:[e.jsx(n,{value:l,onChange:m}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Value"}),e.jsx("dd",{children:l})]})]})}},u={render:()=>{const[l,i]=t.useState("lorem ipsum"),[m,v]=t.useState("test@example.com"),[F,M]=t.useState("abcd1234"),[f,L]=t.useState("000-0000-0000"),[D,N]=t.useState("http://www.example.com"),[P,U]=t.useState("10"),_=t.useCallback(a=>{i(a.target.value)},[]),z=t.useCallback(a=>{v(a.target.value)},[]),A=t.useCallback(a=>{M(a.target.value)},[]),B=t.useCallback(a=>{L(a.target.value)},[]),O=t.useCallback(a=>{N(a.target.value)},[]),R=t.useCallback(a=>{U(a.target.value)},[]),s={display:"inline-block",paddingBottom:"8px",fontSize:"13px"};return e.jsxs(H,{spacing:"md",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-text",style:s,children:"text"}),e.jsx(n,{id:"tv-text",value:l,onChange:_})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-mail",style:s,children:"mail"}),e.jsx(n,{type:"email",id:"tv-mail",value:m,onChange:z})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-password",style:s,children:"password"}),e.jsx(n,{type:"password",id:"tv-password",value:F,onChange:A})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-tel",style:s,children:"tel"}),e.jsx(n,{type:"tel",id:"tv-tel",value:f,onChange:B})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-url",style:s,children:"url"}),e.jsx(n,{type:"url",id:"tv-url",value:D,onChange:O})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"tv-number",style:s,children:"number"}),e.jsx(n,{type:"number",id:"tv-number",value:P,onChange:R})]})]})}},o={render:()=>e.jsx(n,{value:"lorem ipsum"})},d={render:()=>e.jsx(n,{value:"wrong value",isInvalid:!0})},c={args:{"data-test-id":"input-custom-attribute"},render:l=>e.jsx(n,{...l})};var p,b,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,x,V;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(V=(x=u.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var C,S,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Input value="lorem ipsum" />
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var j,I,w;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Input value="wrong value" isInvalid />
}`,...(w=(I=d.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var k,T,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'input-custom-attribute'
  },
  render: args => <Input {...args} />
}`,...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const Y=["Default","Types","Disabled","IsInvalid","CustomDataAttribute"];export{c as CustomDataAttribute,r as Default,o as Disabled,d as IsInvalid,u as Types,Y as __namedExportsOrder,X as default};
