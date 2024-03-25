import{a as n,j as l,F as c}from"./jsx-runtime-03b4ddbf.js";import{r as t}from"./index-76fb7be0.js";import{c as A}from"./clsx-1229b3e0.js";import{t as E,_,o as Q}from"./style-715f24ee.js";import{B}from"./Button-cc4155fd.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./VariantIcon-b5151426.js";const R="_modal_15f80_1",U="_overlay_15f80_11",W="_normalOverlay_15f80_19",X="_darkerOverlay_15f80_23",Y="_contents_15f80_27",Z="_modalBody_15f80_31",$="_headerLess_15f80_51",ee="_fullscreen_15f80_55",ne="_header_15f80_51",ae="_buttonContainer_15f80_73",oe="_overlayEnter_15f80_79",ue="_overlayEnterFrom_15f80_85",re="_overlayEnterTo_15f80_89",te="_overlayLeave_15f80_93",le="_overlayLeaveFrom_15f80_98",se="_overlayLeaveTo_15f80_102",ce="_panelEnter_15f80_106",ie="_panelEnterFrom_15f80_112",pe="_panelEnterTo_15f80_117",de="_panelLeave_15f80_122",me="_panelLeaveFrom_15f80_127",Ce="_panelLeaveTo_15f80_132",e={modal:R,overlay:U,normalOverlay:W,darkerOverlay:X,contents:Y,modalBody:Z,headerLess:$,fullscreen:ee,header:ne,buttonContainer:ae,overlayEnter:oe,overlayEnterFrom:ue,overlayEnterTo:re,overlayLeave:te,overlayLeaveFrom:le,overlayLeaveTo:se,panelEnter:ce,panelEnterFrom:ie,panelEnterTo:pe,panelLeave:de,panelLeaveFrom:me,panelLeaveTo:Ce},s=({children:u,onClose:r,onPrimaryAction:a,onSecondaryAction:o,header:f,primaryActionLabel:v,secondaryActionLabel:F,primaryActionColor:j,closeLabel:b="閉じる",overlayOpacity:z="normal",showClose:I=!0,open:G=!0,isStatic:J=!1,fullscreen:O=!1})=>{const K=Q(z);return n(E,{show:G,children:l(_,{static:J,onClose:r,className:A(e.modal,O&&e.fullscreen),children:[n(E.Child,{as:t.Fragment,enter:e.overlayEnter,enterFrom:e.overlayEnterFrom,enterTo:e.overlayEnterTo,leave:e.overlayLeave,leaveFrom:e.overlayLeaveFrom,leaveTo:e.overlayLeaveTo,children:n(_.Overlay,{className:A(e.overlay,e[K])})}),n(E.Child,{as:t.Fragment,enter:e.panelEnter,enterFrom:e.panelEnterFrom,enterTo:e.panelEnterTo,leave:e.panelLeave,leaveFrom:e.panelLeaveFrom,leaveTo:e.panelLeaveTo,children:l("div",{className:A(e.modalBody,!f&&e.headerLess,O&&e.fullscreen),children:[f&&n(_.Title,{className:e.header,children:f}),n("div",{className:e.contents,children:u}),l("div",{className:e.buttonContainer,children:[a&&v&&n(B,{block:!0,onClick:a,"aria-label":v,variant:j,children:v}),o&&F&&n(B,{block:!0,variant:"secondary",onClick:o,"aria-label":F,children:F}),I&&n(B,{variant:"text",onClick:r,"aria-label":b,children:b})]})]})})]})})};try{s.displayName="ActionHalfModal",s.__docgenInfo={description:"",displayName:"ActionHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションボタンが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const be={title:"Modal/ActionHalfModal",component:s},i={header:"モーダル",children:"body"},p={render:u=>{const[r,a]=t.useState(!0),o=t.useCallback(()=>{a(!1)},[]);return l(c,{children:[n("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),n(s,{primaryActionLabel:"アクション",onPrimaryAction:o,...u,open:r,onClose:o})]})},args:i},d={render:u=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return l(c,{children:[n("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),n(s,{primaryActionLabel:"アクション1",onPrimaryAction:o,secondaryActionLabel:"アクション2",onSecondaryAction:o,...u,open:r,onClose:o})]})},args:i},m={render:u=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return l(c,{children:[n("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),n(s,{...u,open:r,onClose:o,fullscreen:!0})]})},args:i},C={render:u=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return l(c,{children:[n("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),n(s,{onPrimaryAction:o,primaryActionLabel:"確認",showClose:!1,...u,open:r,onClose:o})]})},args:i},y={render:u=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return l(c,{children:[n("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),n(s,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:o,overlayOpacity:"darker",closeLabel:"キャンセル",...u,open:r,onClose:o})]})},args:i};var L,g,h;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,D,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var S,T,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var V,N,H;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  args: defaultArgs
}`,...(H=(N=C.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var P,x,w;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(w=(x=y.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const Oe=["Default","Secondary","Fullscreen","NoCloseButton","Customized"];export{y as Customized,p as Default,m as Fullscreen,C as NoCloseButton,d as Secondary,Oe as __namedExportsOrder,be as default};
//# sourceMappingURL=ActionHalfModal.stories-abe54e18.js.map
