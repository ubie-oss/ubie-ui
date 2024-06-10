import{j as r}from"./jsx-runtime-69eee039.js";import{r as d}from"./index-7c191284.js";import{c as B}from"./clsx-1229b3e0.js";const D="_textArea_1lf3s_1",y="_isInvalid_1lf3s_27",c={textArea:D,isInvalid:y},e=d.forwardRef(({isInvalid:a=!1,className:o,...l},i)=>{const h=B({[c.isInvalid]:a},c.textArea,o);return r.jsx("textarea",{ref:i,...l,className:h,"aria-invalid":a})});e.displayName="TextArea";try{e.displayName="TextArea",e.__docgenInfo={description:"",displayName:"TextArea",props:{isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const w={title:"Form/TextArea",component:e},t={render:()=>{const[a,o]=d.useState(`Lorem
ipsum`),l=d.useCallback(i=>{o(i.target.value)},[]);return r.jsx(e,{value:a,onChange:l})}},s={render:()=>r.jsx(e,{value:`Lorem
ipsum`,disabled:!0})},n={render:()=>r.jsx(e,{value:`wrong
value`,isInvalid:!0})},u={args:{"data-test-id":"textarea-custom-attribute"},render:a=>r.jsx(e,{...a,value:"This is a text area with a custom data attribute."})};var m,p,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Lorem\\nipsum');
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <TextArea value={value} onChange={onChange} />;
  }
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var v,g,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'Lorem\\nipsum'} disabled />;
  }
}`,...(A=(g=s.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var f,_,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'wrong\\nvalue'} isInvalid />;
  }
}`,...(b=(_=n.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var T,I,C;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'textarea-custom-attribute'
  },
  render: args => <TextArea {...args} value="This is a text area with a custom data attribute." />
}`,...(C=(I=u.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const L=["Default","Disabled","IdInvalid","CustomDataAttribute"];export{u as CustomDataAttribute,t as Default,s as Disabled,n as IdInvalid,L as __namedExportsOrder,w as default};
