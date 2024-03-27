import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as t}from"./index-1b03fe98.js";import{c as _}from"./clsx-1229b3e0.js";import{t as C,_ as b,o as G}from"./style-40427f8e.js";import{B as g}from"./Button-8b4c3d26.js";import"./index-6fd5a17b.js";import"./VariantIcon-b335cb87.js";const J="_modal_15f80_1",K="_overlay_15f80_11",Q="_normalOverlay_15f80_19",U="_darkerOverlay_15f80_23",W="_contents_15f80_27",X="_modalBody_15f80_31",Y="_headerLess_15f80_51",Z="_fullscreen_15f80_55",$="_header_15f80_51",ee="_buttonContainer_15f80_73",ne="_overlayEnter_15f80_79",ae="_overlayEnterFrom_15f80_85",oe="_overlayEnterTo_15f80_89",re="_overlayLeave_15f80_93",te="_overlayLeaveFrom_15f80_98",se="_overlayLeaveTo_15f80_102",le="_panelEnter_15f80_106",ce="_panelEnterFrom_15f80_112",ue="_panelEnterTo_15f80_117",ie="_panelLeave_15f80_122",pe="_panelLeaveFrom_15f80_127",de="_panelLeaveTo_15f80_132",n={modal:J,overlay:K,normalOverlay:Q,darkerOverlay:U,contents:W,modalBody:X,headerLess:Y,fullscreen:Z,header:$,buttonContainer:ee,overlayEnter:ne,overlayEnterFrom:ae,overlayEnterTo:oe,overlayLeave:re,overlayLeaveFrom:te,overlayLeaveTo:se,panelEnter:le,panelEnterFrom:ce,panelEnterTo:ue,panelLeave:ie,panelLeaveFrom:pe,panelLeaveTo:de},l=({children:s,onClose:r,onPrimaryAction:a,onSecondaryAction:o,header:f,primaryActionLabel:y,secondaryActionLabel:v,primaryActionColor:P,closeLabel:A="閉じる",overlayOpacity:V="normal",showClose:D=!0,open:z=!0,isStatic:I=!1,fullscreen:O=!1})=>{const R=G(V);return e.jsx(C,{show:z,children:e.jsxs(b,{static:I,onClose:r,className:_(n.modal,O&&n.fullscreen),children:[e.jsx(C.Child,{as:t.Fragment,enter:n.overlayEnter,enterFrom:n.overlayEnterFrom,enterTo:n.overlayEnterTo,leave:n.overlayLeave,leaveFrom:n.overlayLeaveFrom,leaveTo:n.overlayLeaveTo,children:e.jsx(b.Overlay,{className:_(n.overlay,n[R])})}),e.jsx(C.Child,{as:t.Fragment,enter:n.panelEnter,enterFrom:n.panelEnterFrom,enterTo:n.panelEnterTo,leave:n.panelLeave,leaveFrom:n.panelLeaveFrom,leaveTo:n.panelLeaveTo,children:e.jsxs("div",{className:_(n.modalBody,!f&&n.headerLess,O&&n.fullscreen),children:[f&&e.jsx(b.Title,{className:n.header,children:f}),e.jsx("div",{className:n.contents,children:s}),e.jsxs("div",{className:n.buttonContainer,children:[a&&y&&e.jsx(g,{block:!0,onClick:a,"aria-label":y,variant:P,children:y}),o&&v&&e.jsx(g,{block:!0,variant:"secondary",onClick:o,"aria-label":v,children:v}),D&&e.jsx(g,{variant:"text",onClick:r,"aria-label":A,children:A})]})]})})]})})};l.__docgenInfo={description:"",methods:[],displayName:"ActionHalfModal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるアクションが実行された場合のコールバック"},header:{required:!1,tsType:{name:"string"},description:"ヘッダーに表示する見出しテキスト"},primaryActionColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'alert'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'alert'"}]},description:"プライマリーアクションボタンのカラースキーム"},closeLabel:{required:!1,tsType:{name:"string"},description:`閉じるボタンのラベル
@default 閉じる`,defaultValue:{value:"'閉じる'",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"union",raw:"'normal' | 'darker'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'darker'"}]},description:`オーバーレイの透過度
@default normal`,defaultValue:{value:"'normal'",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:`閉じるボタンを表示するかどうか
@default true`,defaultValue:{value:"true",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:`モーダルを開くかどうか
@default true`,defaultValue:{value:"true",computed:!1}},isStatic:{required:!1,tsType:{name:"boolean"},description:`openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
@default false`,defaultValue:{value:"false",computed:!1}},fullscreen:{required:!1,tsType:{name:"boolean"},description:`モーダルをフルスクリーンで表示するかどうか
@default true`,defaultValue:{value:"false",computed:!1}}}};const ge={title:"Modal/ActionHalfModal",component:l},c={header:"モーダル",children:"body"},u={render:s=>{const[r,a]=t.useState(!0),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション",onPrimaryAction:o,...s,open:r,onClose:o})]})},args:c},i={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション1",onPrimaryAction:o,secondaryActionLabel:"アクション2",onSecondaryAction:o,...s,open:r,onClose:o})]})},args:c},p={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{...s,open:r,onClose:o,fullscreen:!0})]})},args:c},d={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{onPrimaryAction:o,primaryActionLabel:"確認",showClose:!1,...s,open:r,onClose:o})]})},args:c},m={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:o,overlayOpacity:"darker",closeLabel:"キャンセル",...s,open:r,onClose:o})]})},args:c};var h,F,L;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(L=(F=u.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var x,E,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(E=i.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var T,j,M;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(j=p.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var S,B,N;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(N=(B=d.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var H,q,w;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(w=(q=m.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const Ae=["Default","Secondary","Fullscreen","NoCloseButton","Customized"];export{m as Customized,u as Default,p as Fullscreen,d as NoCloseButton,i as Secondary,Ae as __namedExportsOrder,ge as default};
