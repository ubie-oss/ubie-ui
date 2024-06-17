import{j as e}from"./jsx-runtime-69eee039.js";import{r as g}from"./index-7c191284.js";import{S as D}from"./UnfoldMoreIcon-402a05cb.js";import{c as B}from"./clsx-1229b3e0.js";import{S as E}from"./Stack-9e701cb5.js";import"./style-e9a2251f.js";const k="_wrapper_1v6jb_1",N="_select_1v6jb_5",F="_icon_1v6jb_39",V="_disabled_1v6jb_50",w="_isInvalid_1v6jb_60",r={wrapper:k,select:N,icon:F,disabled:V,isInvalid:w},s=g.forwardRef(({isInvalid:o=!1,disabled:t=!1,children:n,className:p,...m},a)=>e.jsxs("div",{className:B({[r.isInvalid]:o,[r.disabled]:t},r.wrapper,p),children:[e.jsx("select",{...m,disabled:t,className:r.select,ref:a,"aria-invalid":o,children:n}),e.jsx(D,{"aria-hidden":!0,className:r.icon})]}));s.displayName="Select";try{s.displayName="Select",s.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSSのクラス",name:"className",required:!1,type:{name:"string"}}}}}catch{}const T={title:"Form/Select",component:s},c={isInvalid:!1,disabled:!1},i={render:o=>{const t=["option1","option2","option3"],[n,p]=g.useState(t[0]),m=g.useCallback(a=>{p(a.target.value)},[]);return e.jsxs(E,{spacing:"md",alignItems:"normal",children:[e.jsx(s,{...o,value:n,onChange:m,children:t.map(a=>e.jsx("option",{children:a},a))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Value"}),e.jsx("dd",{children:n})]})]})},args:c},l={render:o=>{const t=["option1","option2","option3"];return e.jsx(s,{...o,value:t[0],children:t.map(n=>e.jsx("option",{children:n},n))})},args:{...c,disabled:!0}},d={render:o=>{const t=["option1","option2","option3"];return e.jsx(s,{...o,value:t[0],children:t.map(n=>e.jsx("option",{children:n},n))})},args:{...c,isInvalid:!0}},u={render:o=>{const t=["option1","option2","option3"];return e.jsx(s,{...o,value:t[0],children:t.map(n=>e.jsx("option",{"data-test-id":o["data-test-id"],children:n},n))})},args:{...c,"data-test-id":"select-custom-data-attribute"}};var v,S,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const options = ['option1', 'option2', 'option3'];
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Stack spacing="md" alignItems="normal">
        <Select {...args} value={selectedItem} onChange={onChange}>
          {options.map(o => <option key={o}>{o}</option>)}
        </Select>

        <dl>
          <dt>Value</dt>
          <dd>{selectedItem}</dd>
        </dl>
      </Stack>;
  },
  args: defaultArgs
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var _,I,b;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const options = ['option1', 'option2', 'option3'];
    return <Select {...args} value={options[0]}>
        {options.map(o => <option key={o}>{o}</option>)}
      </Select>;
  },
  args: {
    ...defaultArgs,
    disabled: true
  }
}`,...(b=(I=l.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var j,x,h;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const options = ['option1', 'option2', 'option3'];
    return <Select {...args} value={options[0]}>
        {options.map(o => <option key={o}>{o}</option>)}
      </Select>;
  },
  args: {
    ...defaultArgs,
    isInvalid: true
  }
}`,...(h=(x=d.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var C,A,y;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const options = ['option1', 'option2', 'option3'];
    return <Select {...args} value={options[0]}>
        {options.map(o => <option key={o} data-test-id={args['data-test-id']}>
            {o}
          </option>)}
      </Select>;
  },
  args: {
    ...defaultArgs,
    'data-test-id': 'select-custom-data-attribute'
  }
}`,...(y=(A=u.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const U=["Default","Disabled","IsInvalid","CustomDataAttribute"];export{u as CustomDataAttribute,i as Default,l as Disabled,d as IsInvalid,U as __namedExportsOrder,T as default};
