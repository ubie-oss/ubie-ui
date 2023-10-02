import{a as v,j as t,c as g}from"./clsx-4547bf08.js";import{r as c}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function C(s){return v("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s,{children:[t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.1161 3.11612C11.6043 2.62796 12.3957 2.62796 12.8839 3.11612L16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388C16.3957 9.37204 15.6043 9.37204 15.1161 8.88388L12 5.76777L8.88388 8.88388C8.39573 9.37204 7.60427 9.37204 7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612L11.1161 3.11612Z",fill:"currentColor"},void 0),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.11612 15.1161C7.60427 14.628 8.39573 14.628 8.88388 15.1161L12 18.2322L15.1161 15.1161C15.6043 14.628 16.3957 14.628 16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839L12.8839 20.8839C12.3957 21.372 11.6043 21.372 11.1161 20.8839L7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161Z",fill:"currentColor"},void 0)]}),void 0)}const _="_wrapper_3ebu3_1",h="_select_3ebu3_5",S="_icon_3ebu3_37",b="_disabled_3ebu3_48",I="_isInvalid_3ebu3_58",n={wrapper:_,select:h,icon:S,disabled:b,isInvalid:I},i=c.forwardRef(({isInvalid:s=!1,disabled:o=!1,children:l,className:r,...e},f)=>v("div",{className:g({[n.isInvalid]:s,[n.disabled]:o},n.wrapper,r),children:[t("select",{...e,disabled:o,className:n.select,ref:f,children:l}),t(C,{"aria-hidden":!0,className:n.icon})]}));i.displayName="Select";const j={component:i},d=["option1","option2","option3"],w={isInvalid:!1,disabled:!1},a={render:s=>{const[o,l]=c.useState(d[0]),r=c.useCallback(e=>{l(e.target.value)},[]);return t(i,{...s,value:o,onChange:r,children:d.map(e=>t("option",{children:e},e))})},args:w};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLSelectElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Select {...args} value={selectedItem} onChange={onChange}>
        {options.map(o => <option key={o}>{o}</option>)}
      </Select>;
  },
  args: defaultArgs
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,j as default};
//# sourceMappingURL=Select.stories-1c5bac53.js.map
