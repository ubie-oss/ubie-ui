import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as g}from"./index-1b03fe98.js";import{c as k}from"./clsx-1229b3e0.js";import{S as L}from"./Stack-8f9a2dc9.js";import"./style-d1e19ac4.js";function A(n){return e.jsxs("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1161 3.11612C11.6043 2.62796 12.3957 2.62796 12.8839 3.11612L16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388C16.3957 9.37204 15.6043 9.37204 15.1161 8.88388L12 5.76777L8.88388 8.88388C8.39573 9.37204 7.60427 9.37204 7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612L11.1161 3.11612Z",fill:"currentColor"},void 0),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.11612 15.1161C7.60427 14.628 8.39573 14.628 8.88388 15.1161L12 18.2322L15.1161 15.1161C15.6043 14.628 16.3957 14.628 16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839L12.8839 20.8839C12.3957 21.372 11.6043 21.372 11.1161 20.8839L7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161Z",fill:"currentColor"},void 0)]}),void 0)}const D="_wrapper_1v6jb_1",N="_select_1v6jb_5",R="_icon_1v6jb_39",E="_disabled_1v6jb_50",T="_isInvalid_1v6jb_60",r={wrapper:D,select:N,icon:R,disabled:E,isInvalid:T},s=g.forwardRef(({isInvalid:n=!1,disabled:t=!1,children:o,className:u,...m},a)=>e.jsxs("div",{className:k({[r.isInvalid]:n,[r.disabled]:t},r.wrapper,u),children:[e.jsx("select",{...m,disabled:t,className:r.select,ref:a,"aria-invalid":n,children:o}),e.jsx(A,{"aria-hidden":!0,className:r.icon})]}));s.displayName="Select";s.__docgenInfo={description:"",methods:[],displayName:"Select",props:{id:{required:!1,tsType:{name:"string"},description:"ネイティブ要素の `id` 属性。ページで固有のIDを指定"},isInvalid:{required:!1,tsType:{name:"boolean"},description:`有効でない入力を保持しているかどうか
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`フィールドを無効化するかどうか
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSSのクラス"}}};const Z={title:"Form/Select",component:s},p={isInvalid:!1,disabled:!1},i={render:n=>{const t=["option1","option2","option3"],[o,u]=g.useState(t[0]),m=g.useCallback(a=>{u(a.target.value)},[]);return e.jsxs(L,{spacing:"md",alignItems:"normal",children:[e.jsx(s,{...n,value:o,onChange:m,children:t.map(a=>e.jsx("option",{children:a},a))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Value"}),e.jsx("dd",{children:o})]})]})},args:p},l={render:n=>{const t=["option1","option2","option3"];return e.jsx(s,{...n,value:t[0],children:t.map(o=>e.jsx("option",{children:o},o))})},args:{...p,disabled:!0}},d={render:n=>{const t=["option1","option2","option3"];return e.jsx(s,{...n,value:t[0],children:t.map(o=>e.jsx("option",{children:o},o))})},args:{...p,isInvalid:!0}},c={render:n=>{const t=["option1","option2","option3"];return e.jsx(s,{...n,value:t[0],children:t.map(o=>e.jsx("option",{"data-test-id":n["data-test-id"],children:o},o))})},args:{...p,"data-test-id":"select-custom-data-attribute"}};var v,f,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,j,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(j=l.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var b,I,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(I=d.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var _,w,y;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(w=c.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const B=["Default","Disabled","IsInvalid","CustomDataAttribute"];export{c as CustomDataAttribute,i as Default,l as Disabled,d as IsInvalid,B as __namedExportsOrder,Z as default};
