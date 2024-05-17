import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as t}from"./index-1b03fe98.js";import{c as _}from"./clsx-1229b3e0.js";import{o as W}from"./style-d1e19ac4.js";import{B as b}from"./Button-38e19fab.js";import{t as A,_ as g}from"./transition-4b5a40e6.js";import"./VariantIcon-c466fe49.js";import"./index-6fd5a17b.js";const X="_modal_15f80_1",Y="_overlay_15f80_11",Z="_normalOverlay_15f80_19",$="_darkerOverlay_15f80_23",ee="_contents_15f80_27",ne="_modalBody_15f80_31",ae="_headerLess_15f80_51",oe="_fullscreen_15f80_55",re="_header_15f80_51",te="_buttonContainer_15f80_73",se="_overlayEnter_15f80_79",le="_overlayEnterFrom_15f80_85",ce="_overlayEnterTo_15f80_89",ue="_overlayLeave_15f80_93",ie="_overlayLeaveFrom_15f80_98",de="_overlayLeaveTo_15f80_102",pe="_panelEnter_15f80_106",me="_panelEnterFrom_15f80_112",fe="_panelEnterTo_15f80_117",ye="_panelLeave_15f80_122",ve="_panelLeaveFrom_15f80_127",Ce="_panelLeaveTo_15f80_132",n={modal:X,overlay:Y,normalOverlay:Z,darkerOverlay:$,contents:ee,modalBody:ne,headerLess:ae,fullscreen:oe,header:re,buttonContainer:te,overlayEnter:se,overlayEnterFrom:le,overlayEnterTo:ce,overlayLeave:ue,overlayLeaveFrom:ie,overlayLeaveTo:de,panelEnter:pe,panelEnterFrom:me,panelEnterTo:fe,panelLeave:ye,panelLeaveFrom:ve,panelLeaveTo:Ce},l=({children:s,onClose:r,onPrimaryAction:a,onSecondaryAction:o,header:y,primaryActionLabel:v,secondaryActionLabel:C,primaryActionColor:I,closeLabel:O="閉じる",overlayOpacity:R="normal",showClose:G=!0,open:J=!0,isStatic:K=!1,fullscreen:h=!1,...Q})=>{const U=W(R);return e.jsx(A,{show:J,children:e.jsxs(g,{static:K,onClose:r,className:_(n.modal,h&&n.fullscreen),...Q,children:[e.jsx(A.Child,{as:t.Fragment,enter:n.overlayEnter,enterFrom:n.overlayEnterFrom,enterTo:n.overlayEnterTo,leave:n.overlayLeave,leaveFrom:n.overlayLeaveFrom,leaveTo:n.overlayLeaveTo,children:e.jsx(g.Overlay,{className:_(n.overlay,n[U])})}),e.jsx(A.Child,{as:t.Fragment,enter:n.panelEnter,enterFrom:n.panelEnterFrom,enterTo:n.panelEnterTo,leave:n.panelLeave,leaveFrom:n.panelLeaveFrom,leaveTo:n.panelLeaveTo,children:e.jsxs("div",{className:_(n.modalBody,!y&&n.headerLess,h&&n.fullscreen),children:[y&&e.jsx(g.Title,{className:n.header,children:y}),e.jsx("div",{className:n.contents,children:s}),e.jsxs("div",{className:n.buttonContainer,children:[a&&v&&e.jsx(b,{block:!0,onClick:a,"aria-label":v,variant:I,children:v}),o&&C&&e.jsx(b,{block:!0,variant:"secondary",onClick:o,"aria-label":C,children:C}),G&&e.jsx(b,{variant:"text",onClick:r,"aria-label":O,children:O})]})]})})]})})};l.__docgenInfo={description:"",methods:[],displayName:"ActionHalfModal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるアクションが実行された場合のコールバック"},header:{required:!1,tsType:{name:"string"},description:"ヘッダーに表示する見出しテキスト"},primaryActionColor:{required:!1,tsType:{name:"union",raw:"'primary' | 'alert'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'alert'"}]},description:"プライマリーアクションボタンのカラースキーム"},closeLabel:{required:!1,tsType:{name:"string"},description:`閉じるボタンのラベル
@default 閉じる`,defaultValue:{value:"'閉じる'",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"union",raw:"'normal' | 'darker'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'darker'"}]},description:`オーバーレイの透過度
@default normal`,defaultValue:{value:"'normal'",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:`閉じるボタンを表示するかどうか
@default true`,defaultValue:{value:"true",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:`モーダルを開くかどうか
@default true`,defaultValue:{value:"true",computed:!1}},isStatic:{required:!1,tsType:{name:"boolean"},description:`openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
@default false`,defaultValue:{value:"false",computed:!1}},fullscreen:{required:!1,tsType:{name:"boolean"},description:`モーダルをフルスクリーンで表示するかどうか
@default false`,defaultValue:{value:"false",computed:!1}}}};const xe={title:"Modal/ActionHalfModal",component:l},c={header:"モーダル",children:"body"},u={render:s=>{const[r,a]=t.useState(!0),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション",onPrimaryAction:o,...s,open:r,onClose:o})]})},args:c},i={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション1",onPrimaryAction:o,secondaryActionLabel:"アクション2",onSecondaryAction:o,...s,open:r,onClose:o})]})},args:c},d={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{...s,open:r,onClose:o,fullscreen:!0})]})},args:c},p={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{onPrimaryAction:o,primaryActionLabel:"確認",showClose:!1,...s,open:r,onClose:o})]})},args:{...c,"data-test-id":"some-id"}},m={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:o,overlayOpacity:"darker",closeLabel:"キャンセル",...s,open:r,onClose:o})]})},args:c},f={render:s=>{const[r,a]=t.useState(!1),o=t.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(l,{...s,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:o,open:r,onClose:o})]})},args:c};var F,L,x;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(E=i.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var T,M,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(M=d.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var B,H,N;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(w=(P=m.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var D,V,z;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(V=f.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const ke=["Default","Secondary","Fullscreen","NoCloseButton","Customized","CustomDataAttribute"];export{f as CustomDataAttribute,m as Customized,u as Default,d as Fullscreen,p as NoCloseButton,i as Secondary,ke as __namedExportsOrder,xe as default};
