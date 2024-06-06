import{j as r}from"./jsx-runtime-69eee039.js";import{r as d}from"./index-7c191284.js";import{c as h}from"./clsx-1229b3e0.js";const B="_textArea_1lf3s_1",D="_isInvalid_1lf3s_27",c={textArea:B,isInvalid:D},a=({isInvalid:e=!1,className:o,...l})=>{const i=h({[c.isInvalid]:e},c.textArea,o);return r.jsx("textarea",{...l,className:i,"aria-invalid":e})};try{a.displayName="TextArea",a.__docgenInfo={description:"",displayName:"TextArea",props:{isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"値",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const S={title:"Form/TextArea",component:a},t={render:()=>{const[e,o]=d.useState(`Lorem
ipsum`),l=d.useCallback(i=>{o(i.target.value)},[]);return r.jsx(a,{value:e,onChange:l})}},s={render:()=>r.jsx(a,{value:`Lorem
ipsum`,disabled:!0})},u={render:()=>r.jsx(a,{value:`wrong
value`,isInvalid:!0})},n={args:{"data-test-id":"textarea-custom-attribute"},render:e=>r.jsx(a,{...e,value:"This is a text area with a custom data attribute."})};var m,p,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Lorem\\nipsum');
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <TextArea value={value} onChange={onChange} />;
  }
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,g,A;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'Lorem\\nipsum'} disabled />;
  }
}`,...(A=(g=s.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var _,f,b;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'wrong\\nvalue'} isInvalid />;
  }
}`,...(b=(f=u.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var T,I,C;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'textarea-custom-attribute'
  },
  render: args => <TextArea {...args} value="This is a text area with a custom data attribute." />
}`,...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const V=["Default","Disabled","IdInvalid","CustomDataAttribute"];export{n as CustomDataAttribute,t as Default,s as Disabled,u as IdInvalid,V as __namedExportsOrder,S as default};
