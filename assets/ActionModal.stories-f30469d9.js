import{j as e}from"./jsx-runtime-69eee039.js";import{r}from"./index-7c191284.js";import{c as F}from"./clsx-1229b3e0.js";import{o as G}from"./style-e9a2251f.js";import{B as A}from"./Button-a175e6d5.js";import{t as J,_ as f}from"./transition-0e1e6442.js";import"./VariantIcon-8b056d32.js";import"./index-ecbee218.js";const K="_modal_1ie1o_1",Q="_overlay_1ie1o_11",U="_normalOverlay_1ie1o_16",W="_darkerOverlay_1ie1o_20",X="_modalBody_1ie1o_24",Y="_headerLess_1ie1o_40",Z="_fixedHeight_1ie1o_44",$="_contents_1ie1o_48",ee="_header_1ie1o_40",ne="_buttonContainer_1ie1o_62",ue="_panelEnter_1ie1o_67",ae="_panelEnterFrom_1ie1o_73",te="_panelEnterTo_1ie1o_77",oe="_panelLeave_1ie1o_81",re="_panelLeaveFrom_1ie1o_86",se="_panelLeaveTo_1ie1o_90",u={modal:K,overlay:Q,normalOverlay:U,darkerOverlay:W,modalBody:X,headerLess:Y,fixedHeight:Z,contents:$,header:ee,buttonContainer:ne,panelEnter:ue,panelEnterFrom:ae,panelEnterTo:te,panelLeave:oe,panelLeaveFrom:re,panelLeaveTo:se},o=({children:a,onClose:t,onPrimaryAction:n,onSecondaryAction:C,header:m,primaryActionLabel:y,secondaryActionLabel:E,primaryActionColor:V,closeLabel:H="閉じる",overlayOpacity:T="normal",fixedHeight:P=!1,showClose:N=!0,open:w=!0,isStatic:z=!1,...I})=>{const R=G(T);return e.jsx(J,{show:w,as:r.Fragment,enter:u.panelEnter,enterFrom:u.panelEnterFrom,enterTo:u.panelEnterTo,leave:u.panelLeave,leaveFrom:u.panelLeaveFrom,leaveTo:u.panelLeaveTo,children:e.jsxs(f,{static:z,onClose:t,className:u.modal,...I,children:[e.jsx(f.Overlay,{className:F(u.overlay,u[R])}),e.jsxs("div",{className:F(u.modalBody,!m&&u.headerLess,P&&u.fixedHeight),children:[m&&e.jsx(f.Title,{className:u.header,children:m}),e.jsx("div",{className:u.contents,children:a}),e.jsxs("div",{className:u.buttonContainer,children:[n&&y&&e.jsx(A,{block:!0,onClick:n,variant:V,children:y}),C&&E&&e.jsx(A,{block:!0,variant:"secondary",onClick:C,children:E}),N&&e.jsx(A,{variant:"text",onClick:t,children:H})]})]})]})})};try{o.displayName="ActionModal",o.__docgenInfo={description:"",displayName:"ActionModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const Ce={title:"Modal/ActionModal",component:o},s={header:"モーダル",overlayOpacity:"normal",primaryActionLabel:"回答結果を見る",fixedHeight:!1,isStatic:!1},l={render:a=>{const[t,n]=r.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:s},i={render:a=>{const[t,n]=r.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:t,onPrimaryAction:()=>n(!1),secondaryActionLabel:"このまま回答を続ける",onSecondaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:s},c={render:a=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,fixedHeight:!0}},d={render:a=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,header:"削除します",primaryActionColor:"alert",overlayOpacity:"darker",closeLabel:"キャンセル"}},p={render:a=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,"data-test-id":"some-id"}};var B,_,g;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(g=(_=l.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var h,v,O;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(O=(v=i.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var b,x,D;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(x=c.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var j,M,L;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(M=d.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var S,k,q;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(k=p.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const ye=["Default","Secondary","FixedHeight","Customized","CustomDataAttribute"];export{p as CustomDataAttribute,d as Customized,l as Default,c as FixedHeight,i as Secondary,ye as __namedExportsOrder,Ce as default};
