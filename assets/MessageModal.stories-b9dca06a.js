import{a,j as l,F as O}from"./jsx-runtime-03b4ddbf.js";import{r as _}from"./index-76fb7be0.js";import{c}from"./clsx-1229b3e0.js";import{t as E,_ as s,o as F}from"./style-715f24ee.js";import{B as T}from"./Button-f1c201e8.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./VariantIcon-22342d2d.js";const x="_modal_1iy0i_1",L="_overlay_1iy0i_14",M="_normalOverlay_1iy0i_22",k="_darkerOverlay_1iy0i_26",N="_modalBody_1iy0i_30",b="_fixedHeight_1iy0i_46",B="_contents_1iy0i_50",C="_header_1iy0i_60",H="_panelEnter_1iy0i_68",D="_panelEnterFrom_1iy0i_74",S="_panelEnterTo_1iy0i_78",j="_panelLeave_1iy0i_82",A="_panelLeaveFrom_1iy0i_87",w="_panelLeaveTo_1iy0i_91",e={modal:x,overlay:L,normalOverlay:M,darkerOverlay:k,modalBody:N,fixedHeight:b,contents:B,header:C,panelEnter:H,panelEnterFrom:D,panelEnterTo:S,panelLeave:j,panelLeaveFrom:A,panelLeaveTo:w},y=({header:t,children:r,onClose:n,overlayOpacity:v="normal",closeLabel:i="閉じる",fixedHeight:u=!1,open:f=!0,isStatic:g=!1})=>{const h=F(v);return a(E,{show:f,as:_.Fragment,enter:e.panelEnter,enterFrom:e.panelEnterFrom,enterTo:e.panelEnterTo,leave:e.panelLeave,leaveFrom:e.panelLeaveFrom,leaveTo:e.panelLeaveTo,children:l(s,{static:g,onClose:n,className:e.modal,children:[a(s.Overlay,{className:c(e.overlay,e[h])}),l("div",{className:c(e.modalBody,u&&e.fixedHeight),children:[t&&a(s.Title,{className:e.header,children:t}),a("div",{className:e.contents,children:r}),a(T,{block:!0,onClick:n,"aria-label":i,children:i})]})]})})},U={component:y},q={overlayOpacity:"normal",isStatic:!1,fixedHeight:!1},o={render:t=>{const[r,n]=_.useState(!0);return l(O,{children:[a("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),a(y,{...t,open:r,onClose:()=>n(!1),children:a("p",{children:"Default"})})]})},args:q};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)}>
          <p>Default</p>
        </MessageModal>
      </>;
  },
  args: defaultArgs
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,U as default};
//# sourceMappingURL=MessageModal.stories-b9dca06a.js.map
