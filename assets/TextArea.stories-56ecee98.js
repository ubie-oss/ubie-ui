import{j as t}from"./jsx-runtime-9c4ae004.js";import{r as l}from"./index-1b03fe98.js";import{c as _}from"./clsx-1229b3e0.js";const L="_textArea_1lf3s_1",H="_isInvalid_1lf3s_27",c={textArea:L,isInvalid:H},a=({isInvalid:e=!1,className:i,...u})=>{const d=_({[c.isInvalid]:e},c.textArea,i);return t.jsx("textarea",{...u,className:d,"aria-invalid":e})};a.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{required:!1,tsType:{name:"TextareaHTMLAttributes['id']",raw:"TextareaHTMLAttributes<HTMLTextAreaElement>['id']"},description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定"},isInvalid:{required:!1,tsType:{name:"boolean"},description:`有効でない入力を保持しているかどうか
@default false`,defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"string"},description:"値"},disabled:{required:!1,tsType:{name:"boolean"},description:`フィールドを無効化するかどうか
@default false`},onChange:{required:!1,tsType:{name:"TextareaHTMLAttributes['onChange']",raw:"TextareaHTMLAttributes<HTMLTextAreaElement>['onChange']"},description:"値が変化した場合のコールバック"}}};const E={title:"Form/TextArea",component:a},r={render:()=>{const[e,i]=l.useState(`Lorem
ipsum`),u=l.useCallback(d=>{i(d.target.value)},[]);return t.jsx(a,{value:e,onChange:u})}},s={render:()=>t.jsx(a,{value:`Lorem
ipsum`,disabled:!0})},n={render:()=>t.jsx(a,{value:`wrong
value`,isInvalid:!0})},o={args:{"data-test-id":"textarea-custom-attribute"},render:e=>t.jsx(a,{...e,value:"This is a text area with a custom data attribute."})};var m,p,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Lorem\\nipsum');
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <TextArea value={value} onChange={onChange} />;
  }
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var T,v,g;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'Lorem\\nipsum'} disabled />;
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,A,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'wrong\\nvalue'} isInvalid />;
  }
}`,...(b=(A=n.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var h,C,I;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    'data-test-id': 'textarea-custom-attribute'
  },
  render: args => <TextArea {...args} value="This is a text area with a custom data attribute." />
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const M=["Default","Disabled","IdInvalid","CustomDataAttribute"];export{o as CustomDataAttribute,r as Default,s as Disabled,n as IdInvalid,M as __namedExportsOrder,E as default};
