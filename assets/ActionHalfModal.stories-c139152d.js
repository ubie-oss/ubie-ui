import{j as e}from"./jsx-runtime-69eee039.js";import{r as t}from"./index-7c191284.js";import{c as F}from"./clsx-1229b3e0.js";import{o as X}from"./style-e9a2251f.js";import{B as E}from"./Button-a175e6d5.js";import{t as v,_ as B}from"./transition-0e1e6442.js";import"./VariantIcon-8b056d32.js";import"./index-ecbee218.js";const Y="_modal_fdrch_1",Z="_overlay_fdrch_8",$="_normalOverlay_fdrch_13",ee="_darkerOverlay_fdrch_17",ne="_contents_fdrch_21",ue="_modalBody_fdrch_25",ae="_bodyScroll_fdrch_44",oe="_headerLess_fdrch_48",re="_fullscreen_fdrch_52",te="_header_fdrch_48",le="_buttonContainer_fdrch_70",se="_overlayEnter_fdrch_76",ce="_overlayEnterFrom_fdrch_82",de="_overlayEnterTo_fdrch_86",ie="_overlayLeave_fdrch_90",pe="_overlayLeaveFrom_fdrch_95",me="_overlayLeaveTo_fdrch_99",Ce="_panelEnter_fdrch_103",ye="_panelEnterFrom_fdrch_109",fe="_panelEnterTo_fdrch_114",Ae="_panelLeave_fdrch_119",Fe="_panelLeaveFrom_fdrch_124",Ee="_panelLeaveTo_fdrch_129",n={modal:Y,overlay:Z,normalOverlay:$,darkerOverlay:ee,contents:ne,modalBody:ue,bodyScroll:ae,headerLess:oe,fullscreen:re,header:te,buttonContainer:le,overlayEnter:se,overlayEnterFrom:ce,overlayEnterTo:de,overlayLeave:ie,overlayLeaveFrom:pe,overlayLeaveTo:me,panelEnter:Ce,panelEnterFrom:ye,panelEnterTo:fe,panelLeave:Ae,panelLeaveFrom:Fe,panelLeaveTo:Ee},l=({children:o,onClose:r,onPrimaryAction:u,onSecondaryAction:a,header:y,primaryActionLabel:f,secondaryActionLabel:A,primaryActionColor:I,closeLabel:_="閉じる",overlayOpacity:R="normal",showClose:G=!0,open:J=!0,isStatic:K=!1,fullscreen:b=!1,bodyScroll:Q=!0,...U})=>{const W=X(R);return e.jsx(v,{show:J,children:e.jsxs(B,{static:K,onClose:r,className:F(n.modal,b&&n.fullscreen),...U,children:[e.jsx(v.Child,{as:t.Fragment,enter:n.overlayEnter,enterFrom:n.overlayEnterFrom,enterTo:n.overlayEnterTo,leave:n.overlayLeave,leaveFrom:n.overlayLeaveFrom,leaveTo:n.overlayLeaveTo,children:e.jsx(B.Overlay,{className:F(n.overlay,n[W])})}),e.jsx(v.Child,{as:t.Fragment,enter:n.panelEnter,enterFrom:n.panelEnterFrom,enterTo:n.panelEnterTo,leave:n.panelLeave,leaveFrom:n.panelLeaveFrom,leaveTo:n.panelLeaveTo,children:e.jsxs("div",{className:F(n.modalBody,!y&&n.headerLess,b&&n.fullscreen,Q&&n.bodyScroll),children:[y&&e.jsx(B.Title,{className:n.header,children:y}),e.jsx("div",{className:n.contents,children:o}),e.jsxs("div",{className:n.buttonContainer,children:[u&&f&&e.jsx(E,{block:!0,onClick:u,"aria-label":f,variant:I,children:f}),a&&A&&e.jsx(E,{block:!0,variant:"secondary",onClick:a,"aria-label":A,children:A}),G&&e.jsx(E,{variant:"text",onClick:r,"aria-label":_,children:_})]})]})})]})})};try{l.displayName="ActionHalfModal",l.__docgenInfo={description:"",displayName:"ActionHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},bodyScroll:{defaultValue:{value:"true"},description:"モーダルボディ部分のスクロールを許可するかどうか",name:"bodyScroll",required:!1,type:{name:"boolean"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションボタンが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const xe={title:"Modal/ActionHalfModal",component:l},s={header:"モーダル",children:"body"},c={render:o=>{const[r,u]=t.useState(!0),a=t.useCallback(()=>{u(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>u(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション",onPrimaryAction:a,...o,open:r,onClose:a})]})},args:s},d={render:o=>{const[r,u]=t.useState(!1),a=t.useCallback(()=>{u(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>u(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション1",onPrimaryAction:a,secondaryActionLabel:"アクション2",onSecondaryAction:a,...o,open:r,onClose:a})]})},args:s},i={render:o=>{const[r,u]=t.useState(!1),a=t.useCallback(()=>{u(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>u(!0),children:"Open Modal"}),e.jsx(l,{...o,open:r,onClose:a,fullscreen:!0})]})},args:s},p={render:o=>{const[r,u]=t.useState(!1),a=t.useCallback(()=>{u(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>u(!0),children:"Open Modal"}),e.jsx(l,{onPrimaryAction:a,primaryActionLabel:"確認",showClose:!1,...o,open:r,onClose:a})]})},args:{...s,"data-test-id":"some-id"}},m={render:o=>{const[r,u]=t.useState(!1),a=t.useCallback(()=>{u(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>u(!0),children:"Open Modal"}),e.jsx(l,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:a,overlayOpacity:"darker",closeLabel:"キャンセル",...o,open:r,onClose:a})]})},args:s},C={render:o=>{const[r,u]=t.useState(!1),a=t.useCallback(()=>{u(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>u(!0),children:"Open Modal"}),e.jsx(l,{...o,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:a,open:r,onClose:a})]})},args:s};var h,g,O;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal primaryActionLabel="アクション" onPrimaryAction={onClose} {...args} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(O=(g=c.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var L,x,k;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal primaryActionLabel="アクション1" onPrimaryAction={onClose} secondaryActionLabel="アクション2" onSecondaryAction={onClose} {...args} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(k=(x=d.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var D,j,S;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal {...args} open={open} onClose={onClose} fullscreen />
      </>;
  },
  args: defaultArgs
}`,...(S=(j=i.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var M,T,q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal onPrimaryAction={onClose} primaryActionLabel="確認" showClose={false} {...args} open={open} onClose={onClose} />
      </>;
  },
  args: {
    ...defaultArgs,
    [\`data-test-id\`]: 'some-id'
  }
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var V,H,N;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal header="削除します" primaryActionColor="alert" primaryActionLabel="削除" onPrimaryAction={onClose} overlayOpacity="darker" closeLabel="キャンセル" {...args} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var P,w,z;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal {...args} data-test-id="some-id" primaryActionLabel="アクション" onPrimaryAction={onClose} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(z=(w=C.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const ke=["Default","Secondary","Fullscreen","NoCloseButton","Customized","CustomDataAttribute"];export{C as CustomDataAttribute,m as Customized,c as Default,i as Fullscreen,p as NoCloseButton,d as Secondary,ke as __namedExportsOrder,xe as default};
