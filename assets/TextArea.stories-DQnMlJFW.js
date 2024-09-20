import{j as r}from"./jsx-runtime-BJwPuJt0.js";import{r as i}from"./index-DX35FyXq.js";import{c as S}from"./clsx-B-dksMZM.js";const E="_textArea_3r6j2_1",w="_isInvalid_3r6j2_30",m={textArea:E,isInvalid:w},e=i.forwardRef(({isInvalid:a=!1,className:l,...d},c)=>{const y=S({[m.isInvalid]:a},m.textArea,l);return r.jsx("textarea",{ref:c,...d,className:y,"aria-invalid":a})});e.displayName="TextArea";try{e.displayName="TextArea",e.__docgenInfo={description:"",displayName:"TextArea",props:{isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const F={title:"Form/TextArea",component:e},t={render:()=>{const[a,l]=i.useState(`Lorem
ipsum`),d=i.useCallback(c=>{l(c.target.value)},[]);return r.jsx(e,{value:a,onChange:d})}},s={render:()=>r.jsx(e,{value:`Lorem
ipsum`,disabled:!0})},n={render:()=>r.jsx(e,{value:`wrong
value`,isInvalid:!0})},u={render:()=>r.jsx(e,{placeholder:`place
holder`})},o={args:{"data-test-id":"textarea-custom-attribute"},render:a=>r.jsx(e,{...a,value:"This is a text area with a custom data attribute."})};var p,x,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(_=(A=s.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var b,f,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'wrong\\nvalue'} isInvalid />;
  }
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,I,C;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <TextArea placeholder={'place\\nholder'} />;
  }
}`,...(C=(I=u.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var j,B,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'textarea-custom-attribute'
  },
  render: args => <TextArea {...args} value="This is a text area with a custom data attribute." />
}`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const k=["Default","Disabled","IsInvalid","Placeholder","CustomDataAttribute"];export{o as CustomDataAttribute,t as Default,s as Disabled,n as IsInvalid,u as Placeholder,k as __namedExportsOrder,F as default};
