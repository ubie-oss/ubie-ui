import{a as t}from"./jsx-runtime-03b4ddbf.js";import{r as d}from"./index-76fb7be0.js";import{c as _}from"./clsx-1229b3e0.js";import"./_commonjsHelpers-de833af9.js";const B="_textArea_tce40_1",D="_isInvalid_tce40_27",i={textArea:B,isInvalid:D},e=({isInvalid:a=!1,className:s,...l})=>{const o=_({[i.isInvalid]:a},i.textArea,s);return t("textarea",{...l,className:o,"aria-invalid":a})};try{e.displayName="TextArea",e.__docgenInfo={description:"",displayName:"TextArea",props:{id:{defaultValue:null,description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"値",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"値が変化した場合のコールバック",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}}}}}catch{}const y={title:"Form/TextArea",component:e},u={render:()=>{const[a,s]=d.useState(`Lorem
ipsum`),l=d.useCallback(o=>{s(o.target.value)},[]);return t(e,{value:a,onChange:l})}},r={render:()=>t(e,{value:`Lorem
ipsum`,disabled:!0})},n={render:()=>t(e,{value:`wrong
value`,isInvalid:!0})};var c,m,p;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Lorem\\nipsum');
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <TextArea value={value} onChange={onChange} />;
  }
}`,...(p=(m=u.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,A,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'Lorem\\nipsum'} disabled />;
  }
}`,...(x=(A=r.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var g,C,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'wrong\\nvalue'} isInvalid />;
  }
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const h=["Default","Disabled","IdInvalid"];export{u as Default,r as Disabled,n as IdInvalid,h as __namedExportsOrder,y as default};
//# sourceMappingURL=TextArea.stories-ae42abdd.js.map
