import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as t}from"./index-1b03fe98.js";import{c as _}from"./clsx-1229b3e0.js";import{o as W}from"./style-d1e19ac4.js";import{B as b}from"./Button-851343f6.js";import{t as h,_ as A}from"./transition-4b5a40e6.js";import"./VariantIcon-3a60e005.js";import"./index-6fd5a17b.js";const X="_modal_1h6z0_1",Y="_overlay_1h6z0_8",Z="_normalOverlay_1h6z0_13",$="_darkerOverlay_1h6z0_17",ee="_contents_1h6z0_21",ne="_modalBody_1h6z0_25",ae="_headerLess_1h6z0_45",oe="_fullscreen_1h6z0_49",re="_header_1h6z0_45",te="_buttonContainer_1h6z0_67",se="_overlayEnter_1h6z0_73",le="_overlayEnterFrom_1h6z0_79",ce="_overlayEnterTo_1h6z0_83",ue="_overlayLeave_1h6z0_87",ie="_overlayLeaveFrom_1h6z0_92",de="_overlayLeaveTo_1h6z0_96",pe="_panelEnter_1h6z0_100",me="_panelEnterFrom_1h6z0_106",ye="_panelEnterTo_1h6z0_111",fe="_panelLeave_1h6z0_116",ve="_panelLeaveFrom_1h6z0_121",Ce="_panelLeaveTo_1h6z0_126",n={modal:X,overlay:Y,normalOverlay:Z,darkerOverlay:$,contents:ee,modalBody:ne,headerLess:ae,fullscreen:oe,header:re,buttonContainer:te,overlayEnter:se,overlayEnterFrom:le,overlayEnterTo:ce,overlayLeave:ue,overlayLeaveFrom:ie,overlayLeaveTo:de,panelEnter:pe,panelEnterFrom:me,panelEnterTo:ye,panelLeave:fe,panelLeaveFrom:ve,panelLeaveTo:Ce},l=({children:s,onClose:r,onPrimaryAction:a,onSecondaryAction:o,header:f,primaryActionLabel:v,secondaryActionLabel:C,primaryActionColor:I,closeLabel:g="閉じる",overlayOpacity:R="normal",showClose:G=!0,open:J=!0,isStatic:K=!1,fullscreen:O=!1,...Q})=>{const U=W(R);return e.jsx(h,{show:J,children:e.jsxs(A,{static:K,onClose:r,className:_(n.modal,O&&n.fullscreen),...Q,children:[e.jsx(h.Child,{as:t.Fragment,enter:n.overlayEnter,enterFrom:n.overlayEnterFrom,enterTo:n.overlayEnterTo,leave:n.overlayLeave,leaveFrom:n.overlayLeaveFrom,leaveTo:n.overlayLeaveTo,children:e.jsx(A.Overlay,{className:_(n.overlay,n[U])})}),e.jsx(h.Child,{as:t.Fragment,enter:n.panelEnter,enterFrom:n.panelEnterFrom,enterTo:n.panelEnterTo,leave:n.panelLeave,leaveFrom:n.panelLeaveFrom,leaveTo:n.panelLeaveTo,children:e.jsxs("div",{className:_(n.modalBody,!f&&n.headerLess,O&&n.fullscreen),children:[f&&e.jsx(A.Title,{className:n.header,children:f}),e.jsx("div",{className:n.contents,children:s}),e.jsxs("div",{className:n.buttonContainer,children:[a&&v&&e.jsx(b,{block:!0,onClick:a,"aria-label":v,variant:I,children:v}),o&&C&&e.jsx(b,{block:!0,variant:"secondary",onClick:o,"aria-label":C,children:C}),G&&e.jsx(b,{variant:"text",onClick:r,"aria-label":g,children:g})]})]})})]})})};l.__docgenInfo={description:"",methods:[],displayName:"ActionHalfModal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるアクションが実行された場合のコールバック"},header:{required:!1,tsType:{name:"string"},description:"ヘッダーに表示する見出しテキスト"},primaryActionColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'alert'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'alert'"}]},description:"プライマリーアクションボタンのカラースキーム"},closeLabel:{required:!1,tsType:{name:"string"},description:`閉じるボタンのラベル
@default 閉じる`,defaultValue:{value:"'閉じる'",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"union",raw:"'normal' | 'darker'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'darker'"}]},description:`オーバーレイの透過度
@default normal`,defaultValue:{value:"'normal'",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:`閉じるボタンを表示するかどうか
@default true`,defaultValue:{value:"true",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:`モーダルを開くかどうか
@default true`,defaultValue:{value:"true",computed:!1}},isStatic:{required:!1,tsType:{name:"boolean"},description:`openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
@default false`,defaultValue:{value:"false",computed:!1}},fullscreen:{required:!1,tsType:{name:"boolean"},description:`モーダルをフルスクリーンで表示するかどうか
@default false`,defaultValue:{value:"false",computed:!1}}}};const xe={title:"Modal/ActionHalfModal",component:l},c={header:"モーダル",children:"body"},u={render:s=>{const[r,a]=t.useState(!0),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション",onPrimaryAction:o,...s,open:r,onClose:o})]})},args:c},i={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション1",onPrimaryAction:o,secondaryActionLabel:"アクション2",onSecondaryAction:o,...s,open:r,onClose:o})]})},args:c},d={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{...s,open:r,onClose:o,fullscreen:!0})]})},args:c},p={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{onPrimaryAction:o,primaryActionLabel:"確認",showClose:!1,...s,open:r,onClose:o})]})},args:{...c,"data-test-id":"some-id"}},m={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:o,overlayOpacity:"darker",closeLabel:"キャンセル",...s,open:r,onClose:o})]})},args:c},y={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{...s,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:o,open:r,onClose:o})]})},args:c};var F,L,x;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(x=(L=u.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var k,E,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(E=i.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var T,z,M;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(M=(z=d.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var S,B,H;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var N,q,P;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(P=(q=m.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var w,D,V;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(D=y.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const ke=["Default","Secondary","Fullscreen","NoCloseButton","Customized","CustomDataAttribute"];export{y as CustomDataAttribute,m as Customized,u as Default,d as Fullscreen,p as NoCloseButton,i as Secondary,ke as __namedExportsOrder,xe as default};
