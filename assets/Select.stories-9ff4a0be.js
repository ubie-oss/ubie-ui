import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as u}from"./index-1b03fe98.js";import{c as b}from"./clsx-1229b3e0.js";import{S as j}from"./Stack-9024e87d.js";import"./style-d1e19ac4.js";function w(s){return e.jsxs("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1161 3.11612C11.6043 2.62796 12.3957 2.62796 12.8839 3.11612L16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388C16.3957 9.37204 15.6043 9.37204 15.1161 8.88388L12 5.76777L8.88388 8.88388C8.39573 9.37204 7.60427 9.37204 7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612L11.1161 3.11612Z",fill:"currentColor"},void 0),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.11612 15.1161C7.60427 14.628 8.39573 14.628 8.88388 15.1161L12 18.2322L15.1161 15.1161C15.6043 14.628 16.3957 14.628 16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839L12.8839 20.8839C12.3957 21.372 11.6043 21.372 11.1161 20.8839L7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161Z",fill:"currentColor"},void 0)]}),void 0)}const y="_wrapper_4fabw_1",L="_select_4fabw_5",k="_icon_4fabw_39",N="_disabled_4fabw_50",R="_isInvalid_4fabw_60",r={wrapper:y,select:L,icon:k,disabled:N,isInvalid:R},a=u.forwardRef(({isInvalid:s=!1,disabled:n=!1,children:t,className:c,...p},o)=>e.jsxs("div",{className:b({[r.isInvalid]:s,[r.disabled]:n},r.wrapper,c),children:[e.jsx("select",{...p,disabled:n,className:r.select,ref:o,"aria-invalid":s,children:t}),e.jsx(w,{"aria-hidden":!0,className:r.icon})]}));a.displayName="Select";a.__docgenInfo={description:"",methods:[],displayName:"Select",props:{id:{required:!1,tsType:{name:"string"},description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定"},isInvalid:{required:!1,tsType:{name:"boolean"},description:`有効でない入力を保持しているかどうか
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`フィールドを無効化するかどうか
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSSのクラス"}}};const M={title:"Form/Select",component:a},m={isInvalid:!1,disabled:!1},l={render:s=>{const n=["option1","option2","option3"],[t,c]=u.useState(n[0]),p=u.useCallback(o=>{c(o.target.value)},[]);return e.jsxs(j,{spacing:"md",alignItems:"normal",children:[e.jsx(a,{...s,value:t,onChange:p,children:n.map(o=>e.jsx("option",{children:o},o))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Value"}),e.jsx("dd",{children:t})]})]})},args:m},i={render:s=>{const n=["option1","option2","option3"];return e.jsx(a,{...s,value:n[0],children:n.map(t=>e.jsx("option",{children:t},t))})},args:{...m,disabled:!0}},d={render:s=>{const n=["option1","option2","option3"];return e.jsx(a,{...s,value:n[0],children:n.map(t=>e.jsx("option",{children:t},t))})},args:{...m,isInvalid:!0}};var f,g,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,h,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var I,C,_;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const V=["Default","Disabled","IsInvalid"];export{l as Default,i as Disabled,d as IsInvalid,V as __namedExportsOrder,M as default};
