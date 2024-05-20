import{j as r}from"./jsx-runtime-69eee039.js";import{r as d}from"./index-7c191284.js";import{c as B}from"./clsx-1229b3e0.js";const h="_textArea_1lf3s_1",E="_isInvalid_1lf3s_27",c={textArea:h,isInvalid:E},a=({isInvalid:e=!1,className:o,...l})=>{const i=B({[c.isInvalid]:e},c.textArea,o);return r.jsx("textarea",{...l,className:i,"aria-invalid":e})};try{a.displayName="TextArea",a.__docgenInfo={description:"",displayName:"TextArea",props:{id:{defaultValue:null,description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"値",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"値が変化した場合のコールバック",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}}}}}catch{}const V={title:"Form/TextArea",component:a},t={render:()=>{const[e,o]=d.useState(`Lorem
ipsum`),l=d.useCallback(i=>{o(i.target.value)},[]);return r.jsx(a,{value:e,onChange:l})}},u={render:()=>r.jsx(a,{value:`Lorem
ipsum`,disabled:!0})},s={render:()=>r.jsx(a,{value:`wrong
value`,isInvalid:!0})},n={args:{"data-test-id":"textarea-custom-attribute"},render:e=>r.jsx(a,{...e,value:"This is a text area with a custom data attribute."})};var m,p,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Lorem\\nipsum');
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <TextArea value={value} onChange={onChange} />;
  }
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var x,A,g;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'Lorem\\nipsum'} disabled />;
  }
}`,...(g=(A=u.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var f,C,_;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'wrong\\nvalue'} isInvalid />;
  }
}`,...(_=(C=s.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var b,D,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'textarea-custom-attribute'
  },
  render: args => <TextArea {...args} value="This is a text area with a custom data attribute." />
}`,...(T=(D=n.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const j=["Default","Disabled","IdInvalid","CustomDataAttribute"];export{n as CustomDataAttribute,t as Default,u as Disabled,s as IdInvalid,j as __namedExportsOrder,V as default};
