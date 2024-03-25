import{j as u,a as e}from"./jsx-runtime-03b4ddbf.js";import{r as m}from"./index-76fb7be0.js";import{c as B}from"./clsx-1229b3e0.js";import{S as y}from"./Stack-60de74b5.js";import"./_commonjsHelpers-de833af9.js";function A(t){return u("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1161 3.11612C11.6043 2.62796 12.3957 2.62796 12.8839 3.11612L16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388C16.3957 9.37204 15.6043 9.37204 15.1161 8.88388L12 5.76777L8.88388 8.88388C8.39573 9.37204 7.60427 9.37204 7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612L11.1161 3.11612Z",fill:"currentColor"},void 0),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.11612 15.1161C7.60427 14.628 8.39573 14.628 8.88388 15.1161L12 18.2322L15.1161 15.1161C15.6043 14.628 16.3957 14.628 16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839L12.8839 20.8839C12.3957 21.372 11.6043 21.372 11.1161 20.8839L7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161Z",fill:"currentColor"},void 0)]}),void 0)}const D="_wrapper_4fabw_1",E="_select_4fabw_5",L="_icon_4fabw_39",k="_disabled_4fabw_50",x="_isInvalid_4fabw_60",r={wrapper:D,select:E,icon:L,disabled:k,isInvalid:x},a=m.forwardRef(({isInvalid:t=!1,disabled:n=!1,children:o,className:c,...p},s)=>u("div",{className:B({[r.isInvalid]:t,[r.disabled]:n},r.wrapper,c),children:[e("select",{...p,disabled:n,className:r.select,ref:s,"aria-invalid":t,children:o}),e(A,{"aria-hidden":!0,className:r.icon})]}));a.displayName="Select";try{a.displayName="Select",a.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSSのクラス",name:"className",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Form/Select",component:a},f={isInvalid:!1,disabled:!1},l={render:t=>{const n=["option1","option2","option3"],[o,c]=m.useState(n[0]),p=m.useCallback(s=>{c(s.target.value)},[]);return u(y,{spacing:"md",alignItems:"normal",children:[e(a,{...t,value:o,onChange:p,children:n.map(s=>e("option",{children:s},s))}),u("dl",{children:[e("dt",{children:"Value"}),e("dd",{children:o})]})]})},args:f},i={render:t=>{const n=["option1","option2","option3"];return e(a,{...t,value:n[0],children:n.map(o=>e("option",{children:o},o))})},args:{...f,disabled:!0}},d={render:t=>{const n=["option1","option2","option3"];return e(a,{...t,value:n[0],children:n.map(o=>e("option",{children:o},o))})},args:{...f,isInvalid:!0}};var g,v,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,_,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(h=(_=i.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var I,b,w;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(b=d.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const M=["Default","Disabled","IsInvalid"];export{l as Default,i as Disabled,d as IsInvalid,M as __namedExportsOrder,q as default};
//# sourceMappingURL=Select.stories-39901fb1.js.map
