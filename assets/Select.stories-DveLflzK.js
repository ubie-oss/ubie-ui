import{j as e}from"./jsx-runtime-DuyR_K1q.js";import{r as g}from"./index-yUhCOHB4.js";import{U as D}from"./UnfoldMoreIcon-BpmwIn3S.js";import{c as B}from"./clsx-B-dksMZM.js";import{S as E}from"./Stack-B0WUE-sr.js";import"./style-BnM3_UOs.js";const k="_wrapper_15l2j_1",N="_select_15l2j_5",F="_icon_15l2j_42",V="_disabled_15l2j_53",w="_isInvalid_15l2j_63",r={wrapper:k,select:N,icon:F,disabled:V,isInvalid:w},a=g.forwardRef(({isInvalid:s=!1,disabled:t=!1,children:o,className:p,...m},n)=>e.jsxs("div",{className:B({[r.isInvalid]:s,[r.disabled]:t},r.wrapper,p),children:[e.jsx("select",{...m,disabled:t,className:r.select,ref:n,"aria-invalid":s,children:o}),e.jsx(D,{"aria-hidden":!0,className:r.icon})]}));a.displayName="Select";try{a.displayName="Select",a.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化する",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSSのクラス",name:"className",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Form/Select",component:a},c={isInvalid:!1,disabled:!1},i={render:s=>{const t=["option1","option2","option3"],[o,p]=g.useState(t[0]),m=g.useCallback(n=>{p(n.target.value)},[]);return e.jsxs(E,{spacing:"md",alignItems:"normal",children:[e.jsx(a,{...s,value:o,onChange:m,children:t.map(n=>e.jsx("option",{children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Value"}),e.jsx("dd",{children:o})]})]})},args:c},l={render:s=>{const t=["option1","option2","option3"];return e.jsx(a,{...s,value:t[0],children:t.map(o=>e.jsx("option",{children:o},o))})},args:{...c,disabled:!0}},d={render:s=>{const t=["option1","option2","option3"];return e.jsx(a,{...s,value:t[0],children:t.map(o=>e.jsx("option",{children:o},o))})},args:{...c,isInvalid:!0}},u={render:s=>{const t=["option1","option2","option3"];return e.jsx(a,{...s,value:t[0],children:t.map(o=>e.jsx("option",{"data-test-id":s["data-test-id"],children:o},o))})},args:{...c,"data-test-id":"select-custom-data-attribute"}};var f,S,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var _,I,j;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(j=(I=l.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var x,h,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var C,A,y;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(A=u.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const T=["Default","Disabled","IsInvalid","CustomDataAttribute"];export{u as CustomDataAttribute,i as Default,l as Disabled,d as IsInvalid,T as __namedExportsOrder,O as default};
