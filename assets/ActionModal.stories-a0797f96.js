import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as s}from"./index-1b03fe98.js";import{c as O}from"./clsx-1229b3e0.js";import{o as G}from"./style-d1e19ac4.js";import{B as m}from"./Button-38e19fab.js";import{t as J,_}from"./transition-4b5a40e6.js";import"./VariantIcon-c466fe49.js";import"./index-6fd5a17b.js";const K="_modal_1fc98_1",Q="_overlay_1fc98_14",U="_normalOverlay_1fc98_22",W="_darkerOverlay_1fc98_26",X="_modalBody_1fc98_30",Y="_headerLess_1fc98_46",Z="_fixedHeight_1fc98_50",$="_contents_1fc98_54",ee="_header_1fc98_46",ne="_buttonContainer_1fc98_68",te="_panelEnter_1fc98_73",ae="_panelEnterFrom_1fc98_79",oe="_panelEnterTo_1fc98_83",re="_panelLeave_1fc98_87",se="_panelLeaveFrom_1fc98_92",le="_panelLeaveTo_1fc98_96",t={modal:K,overlay:Q,normalOverlay:U,darkerOverlay:W,modalBody:X,headerLess:Y,fixedHeight:Z,contents:$,header:ee,buttonContainer:ne,panelEnter:te,panelEnterFrom:ae,panelEnterTo:oe,panelLeave:re,panelLeaveFrom:se,panelLeaveTo:le},r=({children:o,onClose:a,onPrimaryAction:n,onSecondaryAction:y,header:f,primaryActionLabel:g,secondaryActionLabel:h,primaryActionColor:H,closeLabel:N="閉じる",overlayOpacity:P="normal",fixedHeight:q=!1,showClose:V=!0,open:w=!0,isStatic:z=!1,...I})=>{const R=G(P);return e.jsx(J,{show:w,as:s.Fragment,enter:t.panelEnter,enterFrom:t.panelEnterFrom,enterTo:t.panelEnterTo,leave:t.panelLeave,leaveFrom:t.panelLeaveFrom,leaveTo:t.panelLeaveTo,children:e.jsxs(_,{static:z,onClose:a,className:t.modal,...I,children:[e.jsx(_.Overlay,{className:O(t.overlay,t[R])}),e.jsxs("div",{className:O(t.modalBody,!f&&t.headerLess,q&&t.fixedHeight),children:[f&&e.jsx(_.Title,{className:t.header,children:f}),e.jsx("div",{className:t.contents,children:o}),e.jsxs("div",{className:t.buttonContainer,children:[n&&g&&e.jsx(m,{block:!0,onClick:n,variant:H,children:g}),y&&h&&e.jsx(m,{block:!0,variant:"secondary",onClick:y,children:h}),V&&e.jsx(m,{variant:"text",onClick:a,children:N})]})]})]})})};r.__docgenInfo={description:"",methods:[],displayName:"ActionModal",props:{closeLabel:{defaultValue:{value:"'閉じる'",computed:!1},required:!1},overlayOpacity:{defaultValue:{value:"'normal'",computed:!1},required:!1},fixedHeight:{defaultValue:{value:"false",computed:!1},required:!1},showClose:{defaultValue:{value:"true",computed:!1},required:!1},open:{defaultValue:{value:"true",computed:!1},required:!1},isStatic:{defaultValue:{value:"false",computed:!1},required:!1}}};const ye={title:"Modal/ActionModal",component:r},l={header:"モーダル",overlayOpacity:"normal",primaryActionLabel:"回答結果を見る",fixedHeight:!1,isStatic:!1},c={render:o=>{const[a,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...o,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:l},u={render:o=>{const[a,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...o,open:a,onPrimaryAction:()=>n(!1),secondaryActionLabel:"このまま回答を続ける",onSecondaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:l},d={render:o=>{const[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...o,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...l,fixedHeight:!0}},i={render:o=>{const[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...o,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...l,header:"削除します",primaryActionColor:"alert",overlayOpacity:"darker",closeLabel:"キャンセル"}},p={render:o=>{const[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...o,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...l,"data-test-id":"some-id"}};var x,v,A;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var b,C,j;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(C=u.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var M,E,k;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(k=(E=d.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var L,S,F;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var D,T,B;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
    [\`data-test-id\`]: 'some-id'
  }
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const ge=["Default","Secondary","FixedHeight","Customized","CustomDataAttribute"];export{p as CustomDataAttribute,i as Customized,c as Default,d as FixedHeight,u as Secondary,ge as __namedExportsOrder,ye as default};
