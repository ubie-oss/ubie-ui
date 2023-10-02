import{j as e,a as t,c as h}from"./clsx-4547bf08.js";import{S as d}from"./Stack-b3b2c406.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function u(c){return e("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.8839 7.11612C21.372 7.60427 21.372 8.39573 20.8839 8.88388L10.8839 18.8839C10.3957 19.372 9.60427 19.372 9.11612 18.8839L3.11612 12.8839C2.62796 12.3957 2.62796 11.6043 3.11612 11.1161C3.60427 10.628 4.39573 10.628 4.88388 11.1161L10 16.2322L19.1161 7.11612C19.6043 6.62796 20.3957 6.62796 20.8839 7.11612Z",fill:"currentColor"},void 0)}),void 0)}const k="_container_13zh9_1",_="_checkbox_13zh9_13",x="_checkIconContainer_13zh9_23",p="_medium_13zh9_33",C="_small_13zh9_38",g="_checkIcon_13zh9_23",n={container:k,checkbox:_,checkIconContainer:x,medium:p,small:C,checkIcon:g},o=({size:c="medium",children:i,...m})=>t("label",{className:h(n.container,n[c]),children:[e("input",{type:"checkbox",className:n.checkbox,...m}),e("span",{className:n.checkIconContainer,children:e(u,{className:n.checkIcon})}),i]}),S={component:o},b={disabled:!1},s={render:c=>t(d,{spacing:"xs",children:[e(o,{...c,value:"medium",children:"Medium"}),e(o,{...c,value:"small",size:"small",children:"Small"})]}),args:b};var a,r,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    return <Stack spacing="xs">
        <Checkbox {...args} value="medium">
          Medium
        </Checkbox>
        <Checkbox {...args} value="small" size="small">
          Small
        </Checkbox>
      </Stack>;
  },
  args: defaultArgs
}`,...(l=(r=s.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const w=["Default"];export{s as Default,w as __namedExportsOrder,S as default};
//# sourceMappingURL=Checkbox.stories-56842f2b.js.map
