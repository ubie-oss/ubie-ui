import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as s}from"./index-1b03fe98.js";import{c as v}from"./clsx-1229b3e0.js";import{t as V,_ as f,o as w}from"./style-40427f8e.js";import{B as m}from"./Button-8b4c3d26.js";import"./index-6fd5a17b.js";import"./VariantIcon-b335cb87.js";const z="_modal_1fc98_1",I="_overlay_1fc98_14",R="_normalOverlay_1fc98_22",G="_darkerOverlay_1fc98_26",J="_modalBody_1fc98_30",K="_headerLess_1fc98_46",Q="_fixedHeight_1fc98_50",U="_contents_1fc98_54",W="_header_1fc98_46",X="_buttonContainer_1fc98_68",Y="_panelEnter_1fc98_73",Z="_panelEnterFrom_1fc98_79",$="_panelEnterTo_1fc98_83",ee="_panelLeave_1fc98_87",ne="_panelLeaveFrom_1fc98_92",te="_panelLeaveTo_1fc98_96",t={modal:z,overlay:I,normalOverlay:R,darkerOverlay:G,modalBody:J,headerLess:K,fixedHeight:Q,contents:U,header:W,buttonContainer:X,panelEnter:Y,panelEnterFrom:Z,panelEnterTo:$,panelLeave:ee,panelLeaveFrom:ne,panelLeaveTo:te},r=({children:o,onClose:a,onPrimaryAction:n,onSecondaryAction:_,header:p,primaryActionLabel:y,secondaryActionLabel:h,primaryActionColor:S,closeLabel:D="閉じる",overlayOpacity:T="normal",fixedHeight:B=!1,showClose:H=!0,open:N=!0,isStatic:P=!1})=>{const q=w(T);return e.jsx(V,{show:N,as:s.Fragment,enter:t.panelEnter,enterFrom:t.panelEnterFrom,enterTo:t.panelEnterTo,leave:t.panelLeave,leaveFrom:t.panelLeaveFrom,leaveTo:t.panelLeaveTo,children:e.jsxs(f,{static:P,onClose:a,className:t.modal,children:[e.jsx(f.Overlay,{className:v(t.overlay,t[q])}),e.jsxs("div",{className:v(t.modalBody,!p&&t.headerLess,B&&t.fixedHeight),children:[p&&e.jsx(f.Title,{className:t.header,children:p}),e.jsx("div",{className:t.contents,children:o}),e.jsxs("div",{className:t.buttonContainer,children:[n&&y&&e.jsx(m,{block:!0,onClick:n,variant:S,children:y}),_&&h&&e.jsx(m,{block:!0,variant:"secondary",onClick:_,children:h}),H&&e.jsx(m,{variant:"text",onClick:a,children:D})]})]})]})})};r.__docgenInfo={description:"",methods:[],displayName:"ActionModal",props:{closeLabel:{defaultValue:{value:"'閉じる'",computed:!1},required:!1},overlayOpacity:{defaultValue:{value:"'normal'",computed:!1},required:!1},fixedHeight:{defaultValue:{value:"false",computed:!1},required:!1},showClose:{defaultValue:{value:"true",computed:!1},required:!1},open:{defaultValue:{value:"true",computed:!1},required:!1},isStatic:{defaultValue:{value:"false",computed:!1},required:!1}}};const de={title:"Modal/ActionModal",component:r},i={header:"モーダル",overlayOpacity:"normal",primaryActionLabel:"回答結果を見る",fixedHeight:!1,isStatic:!1},l={render:o=>{const[a,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...o,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:i},c={render:o=>{const[a,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...o,open:a,onPrimaryAction:()=>n(!1),secondaryActionLabel:"このまま回答を続ける",onSecondaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:i},u={render:o=>{const[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...o,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...i,fixedHeight:!0}},d={render:o=>{const[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...o,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...i,header:"削除します",primaryActionColor:"alert",overlayOpacity:"darker",closeLabel:"キャンセル"}};var g,x,O;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(O=(x=l.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var A,b,C;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(b=c.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var j,E,M;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Default</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    fixedHeight: true
  }
}`,...(M=(E=u.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var L,k,F;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Default</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: '削除します',
    primaryActionColor: 'alert',
    overlayOpacity: 'darker',
    closeLabel: 'キャンセル'
  }
}`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const ie=["Default","Secondary","FixedHeight","Customized"];export{d as Customized,l as Default,u as FixedHeight,c as Secondary,ie as __namedExportsOrder,de as default};
