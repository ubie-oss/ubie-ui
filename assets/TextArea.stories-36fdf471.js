import{j as n}from"./jsx-runtime-9c4ae004.js";import{r as u}from"./index-1b03fe98.js";import{c as b}from"./clsx-1229b3e0.js";const I="_textArea_tce40_1",_="_isInvalid_tce40_27",d={textArea:I,isInvalid:_},e=({isInvalid:a=!1,className:o,...l})=>{const i=b({[d.isInvalid]:a},d.textArea,o);return n.jsx("textarea",{...l,className:i,"aria-invalid":a})};e.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{required:!1,tsType:{name:"TextareaHTMLAttributes['id']",raw:"TextareaHTMLAttributes<HTMLTextAreaElement>['id']"},description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定"},isInvalid:{required:!1,tsType:{name:"boolean"},description:`有効でない入力を保持しているかどうか
@default false`,defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"string"},description:"値"},disabled:{required:!1,tsType:{name:"boolean"},description:`フィールドを無効化するかどうか
@default false`},onChange:{required:!1,tsType:{name:"TextareaHTMLAttributes['onChange']",raw:"TextareaHTMLAttributes<HTMLTextAreaElement>['onChange']"},description:"値が変化した場合のコールバック"}}};const H={title:"Form/TextArea",component:e},r={render:()=>{const[a,o]=u.useState(`Lorem
ipsum`),l=u.useCallback(i=>{o(i.target.value)},[]);return n.jsx(e,{value:a,onChange:l})}},t={render:()=>n.jsx(e,{value:`Lorem
ipsum`,disabled:!0})},s={render:()=>n.jsx(e,{value:`wrong
value`,isInvalid:!0})};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Lorem\\nipsum');
    const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(event => {
      setValue(event.target.value);
    }, []);
    return <TextArea value={value} onChange={onChange} />;
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,v,T;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'Lorem\\nipsum'} disabled />;
  }
}`,...(T=(v=t.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,A,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <TextArea value={'wrong\\nvalue'} isInvalid />;
  }
}`,...(g=(A=s.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};const y=["Default","Disabled","IdInvalid"];export{r as Default,t as Disabled,s as IdInvalid,y as __namedExportsOrder,H as default};
