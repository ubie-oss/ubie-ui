import{c as z,a as e,j as u}from"./clsx-0a53246e.js";import{r as a}from"./index-76fb7be0.js";import{S as k}from"./Stack-ac0bc903.js";import"./_commonjsHelpers-de833af9.js";const O="_input_bsmgn_1",R="_isInvalid_bsmgn_17",v={input:O,isInvalid:R},l=a.forwardRef(({isInvalid:n,...s},o)=>{const d=z({[v.isInvalid]:n&&!s.disabled},v.input,s.className);return e("input",{...s,className:d,ref:o})});l.displayName="Input";try{l.displayName="Input",l.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},isInvalid:{defaultValue:null,description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"値",name:"value",required:!0,type:{name:"string | number"}},disabled:{defaultValue:null,description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"値が変化した場合のコールバック",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const W={title:"Form/Input",component:l},i={render:()=>{const[n,s]=a.useState("Lorem ipsum"),o=a.useCallback(d=>{s(d.target.value)},[]);return u(k,{spacing:"md",children:[e(l,{value:n,onChange:o}),u("dl",{children:[e("dt",{children:"Value"}),e("dd",{children:n})]})]})}},c={render:()=>{const[n,s]=a.useState("lorem ipsum"),[o,d]=a.useState("test@example.com"),[f,F]=a.useState("abcd1234"),[_,B]=a.useState("000-0000-0000"),[H,M]=a.useState("http://www.example.com"),[D,N]=a.useState("10"),L=a.useCallback(t=>{s(t.target.value)},[]),A=a.useCallback(t=>{d(t.target.value)},[]),P=a.useCallback(t=>{F(t.target.value)},[]),U=a.useCallback(t=>{B(t.target.value)},[]),q=a.useCallback(t=>{M(t.target.value)},[]),j=a.useCallback(t=>{N(t.target.value)},[]),r={display:"inline-block",paddingBottom:"8px",fontSize:"13px"};return u(k,{spacing:"md",children:[u("div",{children:[e("label",{htmlFor:"tv-text",style:r,children:"text"}),e(l,{id:"tv-text",value:n,onChange:L})]}),u("div",{children:[e("label",{htmlFor:"tv-mail",style:r,children:"mail"}),e(l,{type:"email",id:"tv-mail",value:o,onChange:A})]}),u("div",{children:[e("label",{htmlFor:"tv-password",style:r,children:"password"}),e(l,{type:"password",id:"tv-password",value:f,onChange:P})]}),u("div",{children:[e("label",{htmlFor:"tv-tel",style:r,children:"tel"}),e(l,{type:"tel",id:"tv-tel",value:_,onChange:U})]}),u("div",{children:[e("label",{htmlFor:"tv-url",style:r,children:"url"}),e(l,{type:"url",id:"tv-url",value:H,onChange:q})]}),u("div",{children:[e("label",{htmlFor:"tv-number",style:r,children:"number"}),e(l,{type:"number",id:"tv-number",value:D,onChange:j})]})]})}},m={render:()=>e(l,{value:"lorem ipsum"})},p={render:()=>e(l,{value:"wrong value"})};var b,g,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var V,C,y;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var I,S,x;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Input value="lorem ipsum" />
}`,...(x=(S=m.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var w,E,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Input value="wrong value" />
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const X=["Default","Types","Disabled","IsInvalid"];export{i as Default,m as Disabled,p as IsInvalid,c as Types,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Input.stories-baec68a8.js.map
