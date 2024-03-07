import{j as n,a as e}from"./jsx-runtime-03b4ddbf.js";import{r as t}from"./index-76fb7be0.js";import{I as l}from"./Input-7d988832.js";import{S as T}from"./Stack-0a7abb46.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";const Q={title:"Form/Input",component:l},u={render:()=>{const[r,i]=t.useState("Lorem ipsum"),v=t.useCallback(m=>{i(m.target.value)},[]);return n(T,{spacing:"md",children:[e(l,{value:r,onChange:v}),n("dl",{children:[e("dt",{children:"Value"}),e("dd",{children:r})]})]})}},o={render:()=>{const[r,i]=t.useState("lorem ipsum"),[v,m]=t.useState("test@example.com"),[E,H]=t.useState("abcd1234"),[F,M]=t.useState("000-0000-0000"),[f,L]=t.useState("http://www.example.com"),[N,P]=t.useState("10"),U=t.useCallback(a=>{i(a.target.value)},[]),D=t.useCallback(a=>{m(a.target.value)},[]),j=t.useCallback(a=>{H(a.target.value)},[]),_=t.useCallback(a=>{M(a.target.value)},[]),z=t.useCallback(a=>{L(a.target.value)},[]),B=t.useCallback(a=>{P(a.target.value)},[]),s={display:"inline-block",paddingBottom:"8px",fontSize:"13px"};return n(T,{spacing:"md",children:[n("div",{children:[e("label",{htmlFor:"tv-text",style:s,children:"text"}),e(l,{id:"tv-text",value:r,onChange:U})]}),n("div",{children:[e("label",{htmlFor:"tv-mail",style:s,children:"mail"}),e(l,{type:"email",id:"tv-mail",value:v,onChange:D})]}),n("div",{children:[e("label",{htmlFor:"tv-password",style:s,children:"password"}),e(l,{type:"password",id:"tv-password",value:E,onChange:j})]}),n("div",{children:[e("label",{htmlFor:"tv-tel",style:s,children:"tel"}),e(l,{type:"tel",id:"tv-tel",value:F,onChange:_})]}),n("div",{children:[e("label",{htmlFor:"tv-url",style:s,children:"url"}),e(l,{type:"url",id:"tv-url",value:f,onChange:z})]}),n("div",{children:[e("label",{htmlFor:"tv-number",style:s,children:"number"}),e(l,{type:"number",id:"tv-number",value:N,onChange:B})]})]})}},d={render:()=>e(l,{value:"lorem ipsum"})},c={render:()=>e(l,{value:"wrong value",isInvalid:!0})};var p,b,h;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(b=u.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,V,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(V=o.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var y,S,x;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Input value="lorem ipsum" />
}`,...(x=(S=d.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,w,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Input value="wrong value" isInvalid />
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const R=["Default","Types","Disabled","IsInvalid"];export{u as Default,d as Disabled,c as IsInvalid,o as Types,R as __namedExportsOrder,Q as default};
//# sourceMappingURL=Input.stories-cec65c9b.js.map
