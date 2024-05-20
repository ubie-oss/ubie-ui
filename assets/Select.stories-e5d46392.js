import{j as e}from"./jsx-runtime-69eee039.js";import{r as g}from"./index-7c191284.js";import{c as B}from"./clsx-1229b3e0.js";import{S as D}from"./Stack-53f1d35e.js";import"./style-e9a2251f.js";function w(t){return e.jsxs("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1161 3.11612C11.6043 2.62796 12.3957 2.62796 12.8839 3.11612L16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388C16.3957 9.37204 15.6043 9.37204 15.1161 8.88388L12 5.76777L8.88388 8.88388C8.39573 9.37204 7.60427 9.37204 7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612L11.1161 3.11612Z",fill:"currentColor"},void 0),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.11612 15.1161C7.60427 14.628 8.39573 14.628 8.88388 15.1161L12 18.2322L15.1161 15.1161C15.6043 14.628 16.3957 14.628 16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839L12.8839 20.8839C12.3957 21.372 11.6043 21.372 11.1161 20.8839L7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161Z",fill:"currentColor"},void 0)]}),void 0)}const E="_wrapper_1v6jb_1",k="_select_1v6jb_5",L="_icon_1v6jb_39",N="_disabled_1v6jb_50",F="_isInvalid_1v6jb_60",r={wrapper:E,select:k,icon:L,disabled:N,isInvalid:F},s=g.forwardRef(({isInvalid:t=!1,disabled:n=!1,children:o,className:p,...m},a)=>e.jsxs("div",{className:B({[r.isInvalid]:t,[r.disabled]:n},r.wrapper,p),children:[e.jsx("select",{...m,disabled:n,className:r.select,ref:a,"aria-invalid":t,children:o}),e.jsx(w,{"aria-hidden":!0,className:r.icon})]}));s.displayName="Select";try{s.displayName="Select",s.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSSのクラス",name:"className",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Form/Select",component:s},c={isInvalid:!1,disabled:!1},i={render:t=>{const n=["option1","option2","option3"],[o,p]=g.useState(n[0]),m=g.useCallback(a=>{p(a.target.value)},[]);return e.jsxs(D,{spacing:"md",alignItems:"normal",children:[e.jsx(s,{...t,value:o,onChange:m,children:n.map(a=>e.jsx("option",{children:a},a))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Value"}),e.jsx("dd",{children:o})]})]})},args:c},l={render:t=>{const n=["option1","option2","option3"];return e.jsx(s,{...t,value:n[0],children:n.map(o=>e.jsx("option",{children:o},o))})},args:{...c,disabled:!0}},d={render:t=>{const n=["option1","option2","option3"];return e.jsx(s,{...t,value:n[0],children:n.map(o=>e.jsx("option",{children:o},o))})},args:{...c,isInvalid:!0}},u={render:t=>{const n=["option1","option2","option3"];return e.jsx(s,{...t,value:n[0],children:n.map(o=>e.jsx("option",{"data-test-id":t["data-test-id"],children:o},o))})},args:{...c,"data-test-id":"select-custom-data-attribute"}};var v,f,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var C,h,j;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(h=l.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var x,_,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var I,A,y;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(y=(A=u.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const Z=["Default","Disabled","IsInvalid","CustomDataAttribute"];export{u as CustomDataAttribute,i as Default,l as Disabled,d as IsInvalid,Z as __namedExportsOrder,O as default};
