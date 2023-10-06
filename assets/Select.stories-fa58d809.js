import{j as u,a as e,c as x}from"./clsx-0a53246e.js";import{r as m}from"./index-76fb7be0.js";import{S as y}from"./Stack-ac0bc903.js";import"./_commonjsHelpers-de833af9.js";function A(n){return u("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:[e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1161 3.11612C11.6043 2.62796 12.3957 2.62796 12.8839 3.11612L16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388C16.3957 9.37204 15.6043 9.37204 15.1161 8.88388L12 5.76777L8.88388 8.88388C8.39573 9.37204 7.60427 9.37204 7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612L11.1161 3.11612Z",fill:"currentColor"},void 0),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.11612 15.1161C7.60427 14.628 8.39573 14.628 8.88388 15.1161L12 18.2322L15.1161 15.1161C15.6043 14.628 16.3957 14.628 16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839L12.8839 20.8839C12.3957 21.372 11.6043 21.372 11.1161 20.8839L7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161Z",fill:"currentColor"},void 0)]}),void 0)}const D="_wrapper_xdshi_1",w="_select_xdshi_5",E="_icon_xdshi_39",L="_disabled_xdshi_50",k="_isInvalid_xdshi_60",r={wrapper:D,select:w,icon:E,disabled:L,isInvalid:k},s=m.forwardRef(({isInvalid:n=!1,disabled:t=!1,children:o,className:c,...p},a)=>u("div",{className:x({[r.isInvalid]:n,[r.disabled]:t},r.wrapper,c),children:[e("select",{...p,disabled:t,className:r.select,ref:a,children:o}),e(A,{"aria-hidden":!0,className:r.icon})]}));s.displayName="Select";try{s.displayName="Select",s.__docgenInfo={description:"",displayName:"Select",props:{id:{defaultValue:null,description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},isInvalid:{defaultValue:{value:"false"},description:"有効でない入力を保持しているかどうか",name:"isInvalid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"フィールドを無効化するかどうか",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSSのクラス",name:"className",required:!1,type:{name:"string"}}}}}catch{}const j={title:"Form/Select",component:s},g={isInvalid:!1,disabled:!1},l={render:n=>{const t=["option1","option2","option3"],[o,c]=m.useState(t[0]),p=m.useCallback(a=>{c(a.target.value)},[]);return u(y,{spacing:"md",alignItems:"normal",children:[e(s,{...n,value:o,onChange:p,children:t.map(a=>e("option",{children:a},a))}),u("dl",{children:[e("dt",{children:"Value"}),e("dd",{children:o})]})]})},args:g},i={render:n=>{const t=["option1","option2","option3"];return e(s,{...n,value:t[0],children:t.map(o=>e("option",{children:o},o))})},args:{...g,disabled:!0}},d={render:n=>{const t=["option1","option2","option3"];return e(s,{...n,value:t[0],children:t.map(o=>e("option",{children:o},o))})},args:{...g,isInvalid:!0}};var v,f,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,C,_;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(C=i.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var I,b,B;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(b=d.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const q=["Default","Disabled","IsInvalid"];export{l as Default,i as Disabled,d as IsInvalid,q as __namedExportsOrder,j as default};
//# sourceMappingURL=Select.stories-fa58d809.js.map
