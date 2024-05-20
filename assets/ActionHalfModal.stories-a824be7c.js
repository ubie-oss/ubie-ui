import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as t}from"./index-1b03fe98.js";import{c as _}from"./clsx-1229b3e0.js";import{o as X}from"./style-d1e19ac4.js";import{B as b}from"./Button-851343f6.js";import{t as h,_ as A}from"./transition-4b5a40e6.js";import"./VariantIcon-3a60e005.js";import"./index-6fd5a17b.js";const Y="_modal_fdrch_1",Z="_overlay_fdrch_8",$="_normalOverlay_fdrch_13",ee="_darkerOverlay_fdrch_17",ne="_contents_fdrch_21",oe="_modalBody_fdrch_25",ae="_bodyScroll_fdrch_44",re="_headerLess_fdrch_48",te="_fullscreen_fdrch_52",se="_header_fdrch_48",le="_buttonContainer_fdrch_70",ce="_overlayEnter_fdrch_76",ue="_overlayEnterFrom_fdrch_82",de="_overlayEnterTo_fdrch_86",ie="_overlayLeave_fdrch_90",pe="_overlayLeaveFrom_fdrch_95",me="_overlayLeaveTo_fdrch_99",fe="_panelEnter_fdrch_103",ye="_panelEnterFrom_fdrch_109",ve="_panelEnterTo_fdrch_114",Ce="_panelLeave_fdrch_119",_e="_panelLeaveFrom_fdrch_124",be="_panelLeaveTo_fdrch_129",n={modal:Y,overlay:Z,normalOverlay:$,darkerOverlay:ee,contents:ne,modalBody:oe,bodyScroll:ae,headerLess:re,fullscreen:te,header:se,buttonContainer:le,overlayEnter:ce,overlayEnterFrom:ue,overlayEnterTo:de,overlayLeave:ie,overlayLeaveFrom:pe,overlayLeaveTo:me,panelEnter:fe,panelEnterFrom:ye,panelEnterTo:ve,panelLeave:Ce,panelLeaveFrom:_e,panelLeaveTo:be},l=({children:s,onClose:r,onPrimaryAction:o,onSecondaryAction:a,header:y,primaryActionLabel:v,secondaryActionLabel:C,primaryActionColor:I,closeLabel:g="閉じる",overlayOpacity:R="normal",showClose:G=!0,open:J=!0,isStatic:K=!1,fullscreen:O=!1,bodyScroll:Q=!0,...U})=>{const W=X(R);return e.jsx(h,{show:J,children:e.jsxs(A,{static:K,onClose:r,className:_(n.modal,O&&n.fullscreen),...U,children:[e.jsx(h.Child,{as:t.Fragment,enter:n.overlayEnter,enterFrom:n.overlayEnterFrom,enterTo:n.overlayEnterTo,leave:n.overlayLeave,leaveFrom:n.overlayLeaveFrom,leaveTo:n.overlayLeaveTo,children:e.jsx(A.Overlay,{className:_(n.overlay,n[W])})}),e.jsx(h.Child,{as:t.Fragment,enter:n.panelEnter,enterFrom:n.panelEnterFrom,enterTo:n.panelEnterTo,leave:n.panelLeave,leaveFrom:n.panelLeaveFrom,leaveTo:n.panelLeaveTo,children:e.jsxs("div",{className:_(n.modalBody,!y&&n.headerLess,O&&n.fullscreen,Q&&n.bodyScroll),children:[y&&e.jsx(A.Title,{className:n.header,children:y}),e.jsx("div",{className:n.contents,children:s}),e.jsxs("div",{className:n.buttonContainer,children:[o&&v&&e.jsx(b,{block:!0,onClick:o,"aria-label":v,variant:I,children:v}),a&&C&&e.jsx(b,{block:!0,variant:"secondary",onClick:a,"aria-label":C,children:C}),G&&e.jsx(b,{variant:"text",onClick:r,"aria-label":g,children:g})]})]})})]})})};l.__docgenInfo={description:"",methods:[],displayName:"ActionHalfModal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるアクションが実行された場合のコールバック"},header:{required:!1,tsType:{name:"string"},description:"ヘッダーに表示する見出しテキスト"},primaryActionColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'alert'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'alert'"}]},description:"プライマリーアクションボタンのカラースキーム"},closeLabel:{required:!1,tsType:{name:"string"},description:`閉じるボタンのラベル
@default 閉じる`,defaultValue:{value:"'閉じる'",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"union",raw:"'normal' | 'darker'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'darker'"}]},description:`オーバーレイの透過度
@default normal`,defaultValue:{value:"'normal'",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:`閉じるボタンを表示するかどうか
@default true`,defaultValue:{value:"true",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:`モーダルを開くかどうか
@default true`,defaultValue:{value:"true",computed:!1}},isStatic:{required:!1,tsType:{name:"boolean"},description:`openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
@default false`,defaultValue:{value:"false",computed:!1}},fullscreen:{required:!1,tsType:{name:"boolean"},description:`モーダルをフルスクリーンで表示するかどうか
@default false`,defaultValue:{value:"false",computed:!1}},bodyScroll:{required:!1,tsType:{name:"boolean"},description:`モーダルボディ部分のスクロールを許可するかどうか
@default true`,defaultValue:{value:"true",computed:!1}}}};const Ee={title:"Modal/ActionHalfModal",component:l},c={header:"モーダル",children:"body"},u={render:s=>{const[r,o]=t.useState(!0),a=t.useCallback(()=>{o(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>o(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション",onPrimaryAction:a,...s,open:r,onClose:a})]})},args:c},d={render:s=>{const[r,o]=t.useState(!1),a=t.useCallback(()=>{o(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>o(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション1",onPrimaryAction:a,secondaryActionLabel:"アクション2",onSecondaryAction:a,...s,open:r,onClose:a})]})},args:c},i={render:s=>{const[r,o]=t.useState(!1),a=t.useCallback(()=>{o(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>o(!0),children:"Open Modal"}),e.jsx(l,{...s,open:r,onClose:a,fullscreen:!0})]})},args:c},p={render:s=>{const[r,o]=t.useState(!1),a=t.useCallback(()=>{o(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>o(!0),children:"Open Modal"}),e.jsx(l,{onPrimaryAction:a,primaryActionLabel:"確認",showClose:!1,...s,open:r,onClose:a})]})},args:{...c,"data-test-id":"some-id"}},m={render:s=>{const[r,o]=t.useState(!1),a=t.useCallback(()=>{o(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>o(!0),children:"Open Modal"}),e.jsx(l,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:a,overlayOpacity:"darker",closeLabel:"キャンセル",...s,open:r,onClose:a})]})},args:c},f={render:s=>{const[r,o]=t.useState(!1),a=t.useCallback(()=>{o(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>o(!0),children:"Open Modal"}),e.jsx(l,{...s,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:a,open:r,onClose:a})]})},args:c};var F,L,x;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(x=(L=u.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var k,E,j;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(E=d.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var T,S,M;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(S=i.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var B,H,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(N=(H=p.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var q,P,w;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(w=(P=m.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var V,D,z;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(D=f.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const je=["Default","Secondary","Fullscreen","NoCloseButton","Customized","CustomDataAttribute"];export{f as CustomDataAttribute,m as Customized,u as Default,i as Fullscreen,p as NoCloseButton,d as Secondary,je as __namedExportsOrder,Ee as default};
