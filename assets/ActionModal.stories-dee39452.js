import{j as a,a as r,c as v,F as C}from"./clsx-4547bf08.js";import{r as p}from"./index-76fb7be0.js";import{t as B,_ as d,o as D}from"./style-715f24ee.js";import{B as i}from"./Button-f8eac216.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./VariantIcon-aa29fde4.js";const H="_modal_1fc98_1",j="_overlay_1fc98_14",P="_normalOverlay_1fc98_22",w="_darkerOverlay_1fc98_26",q="_modalBody_1fc98_30",z="_headerLess_1fc98_46",G="_fixedHeight_1fc98_50",I="_contents_1fc98_54",J="_header_1fc98_46",K="_buttonContainer_1fc98_68",Q="_panelEnter_1fc98_73",R="_panelEnterFrom_1fc98_79",U="_panelEnterTo_1fc98_83",V="_panelLeave_1fc98_87",W="_panelLeaveFrom_1fc98_92",X="_panelLeaveTo_1fc98_96",e={modal:H,overlay:j,normalOverlay:P,darkerOverlay:w,modalBody:q,headerLess:z,fixedHeight:G,contents:I,header:J,buttonContainer:K,panelEnter:Q,panelEnterFrom:R,panelEnterTo:U,panelLeave:V,panelLeaveFrom:W,panelLeaveTo:X},m=({children:o,onClose:t,onPrimaryAction:n,onSecondaryAction:_,header:c,primaryActionLabel:u,secondaryActionLabel:f,primaryActionColor:E,closeLabel:F="閉じる",overlayOpacity:k="normal",fixedHeight:x=!1,showClose:T=!0,open:M=!0,isStatic:S=!1})=>{const N=D(k);return a(B,{show:M,as:p.Fragment,enter:e.panelEnter,enterFrom:e.panelEnterFrom,enterTo:e.panelEnterTo,leave:e.panelLeave,leaveFrom:e.panelLeaveFrom,leaveTo:e.panelLeaveTo,children:r(d,{static:S,onClose:t,className:e.modal,children:[a(d.Overlay,{className:v(e.overlay,e[N])}),r("div",{className:v(e.modalBody,!c&&e.headerLess,x&&e.fixedHeight),children:[c&&a(d.Title,{className:e.header,children:c}),a("div",{className:e.contents,children:o}),r("div",{className:e.buttonContainer,children:[n&&u&&a(i,{block:!0,onClick:n,variant:E,children:u}),_&&f&&a(i,{block:!0,variant:"secondary",onClick:_,children:f}),T&&a(i,{variant:"text",onClick:t,children:F})]})]})]})})},oe={component:m},A={header:"モーダル",overlayOpacity:"normal",primaryActionLabel:"回答結果を見る",fixedHeight:!1,isStatic:!1},s={render:o=>{const[t,n]=p.useState(!0);return r(C,{children:[a("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),a(m,{...o,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:A},l={render:o=>{const[t,n]=p.useState(!0);return r(C,{children:[a("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),a(m,{...o,open:t,onPrimaryAction:()=>n(!1),secondaryActionLabel:"このまま回答を続ける",onSecondaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:A};var y,h,O;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          Default
        </ActionModal>
      </>;
  },
  args: defaultArgs
}`,...(O=(h=s.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var g,b,L;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} secondaryActionLabel={'このまま回答を続ける'} onSecondaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          Default
        </ActionModal>
      </>;
  },
  args: defaultArgs
}`,...(L=(b=l.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const re=["Default","Secondary"];export{s as Default,l as Secondary,re as __namedExportsOrder,oe as default};
//# sourceMappingURL=ActionModal.stories-dee39452.js.map
