import{j as r}from"./jsx-runtime-69eee039.js";import{r as d}from"./index-7c191284.js";import{c as B}from"./clsx-1229b3e0.js";const y="_textArea_1lf3s_1",D="_isInvalid_1lf3s_27",c={textArea:y,isInvalid:D},e=d.forwardRef(({isInvalid:a=!1,className:o,...l},i)=>{const h=B({[c.isInvalid]:a},c.textArea,o);return r.jsx("textarea",{ref:i,...l,className:h,"aria-invalid":a})});e.displayName="TextArea";try{e.displayName="TextArea",e.__docgenInfo={description:"",displayName:"TextArea",props:{isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"値",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const V={title:"Form/TextArea",component:e},t={render:()=>{const[a,o]=d.useState(`Lorem
ipsum`),l=d.useCallback(i=>{o(i.target.value)},[]);return r.jsx(e,{value:a,onChange:l})}},s={render:()=>r.jsx(e,{value:`Lorem
ipsum`,disabled:!0})},u={render:()=>r.jsx(e,{value:`wrong
value`,isInvalid:!0})},n={args:{"data-test-id":"textarea-custom-attribute"},render:a=>r.jsx(e,{...a,value:"This is a text area with a custom data attribute."})};var m,p,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Lorem\\nipsum');
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <TextArea value={value} onChange={onChange} />;
  }
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'Lorem\\nipsum'} disabled />;
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var A,_,b;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'wrong\\nvalue'} isInvalid />;
  }
}`,...(b=(_=u.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var T,I,C;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'textarea-custom-attribute'
  },
  render: args => <TextArea {...args} value="This is a text area with a custom data attribute." />
}`,...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const w=["Default","Disabled","IdInvalid","CustomDataAttribute"];export{n as CustomDataAttribute,t as Default,s as Disabled,u as IdInvalid,w as __namedExportsOrder,V as default};
