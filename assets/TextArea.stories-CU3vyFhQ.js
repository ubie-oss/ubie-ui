import{j as r}from"./jsx-runtime-BJwPuJt0.js";import{r as i}from"./index-DX35FyXq.js";import{c as S}from"./clsx-B-dksMZM.js";const w="_textArea_3r6j2_1",B="_isInvalid_3r6j2_30",m={textArea:w,isInvalid:B},e=i.forwardRef(({isInvalid:a=!1,className:l,...d},c)=>{const E=S({[m.isInvalid]:a},m.textArea,l);return r.jsx("textarea",{ref:c,...d,className:E,"aria-invalid":a})});e.displayName="TextArea";try{e.displayName="TextArea",e.__docgenInfo={description:"",displayName:"TextArea",props:{isInvalid:{defaultValue:{value:"false"},description:"値が不正であることを示す",name:"isInvalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"フィールドを無効化する",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Form/TextArea",component:e},t={render:()=>{const[a,l]=i.useState(`Lorem
ipsum`),d=i.useCallback(c=>{l(c.target.value)},[]);return r.jsx(e,{value:a,onChange:d})}},s={render:()=>r.jsx(e,{value:`Lorem
ipsum`,disabled:!0})},n={render:()=>r.jsx(e,{value:`wrong
value`,isInvalid:!0})},o={render:()=>r.jsx(e,{placeholder:`place
holder`})},u={args:{"data-test-id":"textarea-custom-attribute"},render:a=>r.jsx(e,{...a,value:"This is a text area with a custom data attribute."})};var p,x,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Lorem\\nipsum');
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <TextArea value={value} onChange={onChange} />;
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,A,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'Lorem\\nipsum'} disabled />;
  }
}`,...(_=(A=s.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var b,h,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'wrong\\nvalue'} isInvalid />;
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var T,C,I;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <TextArea placeholder={'place\\nholder'} />;
  }
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var j,y,D;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'textarea-custom-attribute'
  },
  render: args => <TextArea {...args} value="This is a text area with a custom data attribute." />
}`,...(D=(y=u.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const q=["Default","Disabled","IsInvalid","Placeholder","CustomDataAttribute"];export{u as CustomDataAttribute,t as Default,s as Disabled,n as IsInvalid,o as Placeholder,q as __namedExportsOrder,k as default};
