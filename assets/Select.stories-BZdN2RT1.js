import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{r as g}from"./index-DX35FyXq.js";import{U as D}from"./UnfoldMoreIcon-N-Pb1J02.js";import{c as B}from"./clsx-B-dksMZM.js";import{S as E}from"./Stack-BgQUu0jm.js";import"./style-D1Pgu1yr.js";const k="_wrapper_uambt_1",N="_select_uambt_5",F="_icon_uambt_39",V="_disabled_uambt_50",w="_isInvalid_uambt_60",r={wrapper:k,select:N,icon:F,disabled:V,isInvalid:w},s=g.forwardRef(({isInvalid:o=!1,disabled:t=!1,children:a,className:p,...m},n)=>e.jsxs("div",{className:B({[r.isInvalid]:o,[r.disabled]:t},r.wrapper,p),children:[e.jsx("select",{...m,disabled:t,className:r.select,ref:n,"aria-invalid":o,children:a}),e.jsx(D,{"aria-hidden":!0,className:r.icon})]}));s.displayName="Select";try{s.displayName="Select",s.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化する",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSSのクラス",name:"className",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Form/Select",component:s},c={isInvalid:!1,disabled:!1},i={render:o=>{const t=["option1","option2","option3"],[a,p]=g.useState(t[0]),m=g.useCallback(n=>{p(n.target.value)},[]);return e.jsxs(E,{spacing:"md",alignItems:"normal",children:[e.jsx(s,{...o,value:a,onChange:m,children:t.map(n=>e.jsx("option",{children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Value"}),e.jsx("dd",{children:a})]})]})},args:c},l={render:o=>{const t=["option1","option2","option3"];return e.jsx(s,{...o,value:t[0],children:t.map(a=>e.jsx("option",{children:a},a))})},args:{...c,disabled:!0}},u={render:o=>{const t=["option1","option2","option3"];return e.jsx(s,{...o,value:t[0],children:t.map(a=>e.jsx("option",{children:a},a))})},args:{...c,isInvalid:!0}},d={render:o=>{const t=["option1","option2","option3"];return e.jsx(s,{...o,value:t[0],children:t.map(a=>e.jsx("option",{"data-test-id":o["data-test-id"],children:a},a))})},args:{...c,"data-test-id":"select-custom-data-attribute"}};var f,S,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var _,I,b;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(b=(I=l.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var x,h,j;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(h=u.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var C,A,y;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(A=d.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const T=["Default","Disabled","IsInvalid","CustomDataAttribute"];export{d as CustomDataAttribute,i as Default,l as Disabled,u as IsInvalid,T as __namedExportsOrder,O as default};
