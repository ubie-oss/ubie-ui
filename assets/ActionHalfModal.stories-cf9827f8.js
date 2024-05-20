import{j as e}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{c as b}from"./clsx-1229b3e0.js";import{o as ae}from"./style-e9a2251f.js";import{B as v}from"./Button-a175e6d5.js";import{t as _,_ as h}from"./transition-0e1e6442.js";import"./VariantIcon-8b056d32.js";import"./index-ecbee218.js";const oe="_modal_fdrch_1",re="_overlay_fdrch_8",te="_normalOverlay_fdrch_13",le="_darkerOverlay_fdrch_17",se="_contents_fdrch_21",ce="_modalBody_fdrch_25",de="_bodyScroll_fdrch_44",ie="_headerLess_fdrch_48",pe="_fullscreen_fdrch_52",me="_header_fdrch_48",Ce="_buttonContainer_fdrch_70",Ae="_overlayEnter_fdrch_76",ye="_overlayEnterFrom_fdrch_82",fe="_overlayEnterTo_fdrch_86",Fe="_overlayLeave_fdrch_90",Ee="_overlayLeaveFrom_fdrch_95",Be="_overlayLeaveTo_fdrch_99",be="_panelEnter_fdrch_103",ve="_panelEnterFrom_fdrch_109",_e="_panelEnterTo_fdrch_114",he="_panelLeave_fdrch_119",ge="_panelLeaveFrom_fdrch_124",Oe="_panelLeaveTo_fdrch_129",a={modal:oe,overlay:re,normalOverlay:te,darkerOverlay:le,contents:se,modalBody:ce,bodyScroll:de,headerLess:ie,fullscreen:pe,header:me,buttonContainer:Ce,overlayEnter:Ae,overlayEnterFrom:ye,overlayEnterTo:fe,overlayLeave:Fe,overlayLeaveFrom:Ee,overlayLeaveTo:Be,panelEnter:be,panelEnterFrom:ve,panelEnterTo:_e,panelLeave:he,panelLeaveFrom:ge,panelLeaveTo:Oe},l=({children:r,onClose:t,onPrimaryAction:n,onSecondaryAction:u,header:s,primaryActionLabel:E,secondaryActionLabel:B,primaryActionColor:Q,closeLabel:g="閉じる",overlayOpacity:U="normal",showClose:X=!0,open:Y=!0,isStatic:Z=!1,fullscreen:O=!1,bodyScroll:$=!0,ariaLabelledby:d,...ee})=>{const ne=ae(U),ue=o.useCallback(i=>{i!==null&&s==null&&d!=null?i.setAttribute("aria-labelledby",d):i!==null&&s==null&&d==null&&i.removeAttribute("aria-labelledby")},[d,s]);return e.jsx(_,{show:Y,children:e.jsxs(h,{ref:ue,static:Z,onClose:t,className:b(a.modal,O&&a.fullscreen),...ee,children:[e.jsx(_.Child,{as:o.Fragment,enter:a.overlayEnter,enterFrom:a.overlayEnterFrom,enterTo:a.overlayEnterTo,leave:a.overlayLeave,leaveFrom:a.overlayLeaveFrom,leaveTo:a.overlayLeaveTo,children:e.jsx(h.Overlay,{className:b(a.overlay,a[ne])})}),e.jsx(_.Child,{as:o.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs("div",{className:b(a.modalBody,!s&&a.headerLess,O&&a.fullscreen,$&&a.bodyScroll),children:[s&&e.jsx(h.Title,{className:a.header,children:s}),e.jsx("div",{className:a.contents,children:r}),e.jsxs("div",{className:a.buttonContainer,children:[n&&E&&e.jsx(v,{block:!0,onClick:n,"aria-label":E,variant:Q,children:E}),u&&B&&e.jsx(v,{block:!0,variant:"secondary",onClick:u,"aria-label":B,children:B}),X&&e.jsx(v,{variant:"text",onClick:t,"aria-label":g,children:g})]})]})})]})})};try{l.displayName="ActionHalfModal",l.__docgenInfo={description:"",displayName:"ActionHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},bodyScroll:{defaultValue:{value:"true"},description:"モーダルボディ部分のスクロールを許可するかどうか",name:"bodyScroll",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションボタンが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const He={title:"Modal/ActionHalfModal",component:l},c={header:"モーダル",children:"body"},p={render:r=>{const[t,n]=o.useState(!0),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション",onPrimaryAction:u,...r,open:t,onClose:u})]})},args:c},m={render:r=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション1",onPrimaryAction:u,secondaryActionLabel:"アクション2",onSecondaryAction:u,...r,open:t,onClose:u})]})},args:c},C={render:r=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{...r,open:t,onClose:u,fullscreen:!0})]})},args:c},A={render:r=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{onPrimaryAction:u,primaryActionLabel:"確認",showClose:!1,...r,open:t,onClose:u})]})},args:{...c,"data-test-id":"some-id"}},y={render:r=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:u,overlayOpacity:"darker",closeLabel:"キャンセル",...r,open:t,onClose:u})]})},args:c},f={render:r=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{...r,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:u,open:t,onClose:u})]})},args:{...c,id:"dialog-id"}},F={render:r=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]),s="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(l,{ariaLabelledby:s,primaryActionLabel:"Action",onPrimaryAction:u,...r,open:t,onClose:u,children:[e.jsx("h2",{id:s,children:"Header"}),e.jsx("p",{children:"Body"})]})]})},args:{...c,header:void 0}};var L,x,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(D=(x=p.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var k,j,S;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var M,T,H;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(T=C.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var q,V,P;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(V=A.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var N,I,w;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(I=y.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var z,R,W;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  args: {
    ...defaultArgs,
    id: 'dialog-id'
  }
}`,...(W=(R=f.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var G,J,K;F.parameters={...F.parameters,docs:{...(G=F.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    const headerId = 'header-id';
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal ariaLabelledby={headerId} primaryActionLabel="Action" onPrimaryAction={onClose} {...args} open={open} onClose={onClose}>
          <h2 id={headerId}>Header</h2>
          <p>Body</p>
        </ActionHalfModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(K=(J=F.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const qe=["Default","Secondary","Fullscreen","NoCloseButton","Customized","WithId","CustomHeader"];export{F as CustomHeader,y as Customized,p as Default,C as Fullscreen,A as NoCloseButton,m as Secondary,f as WithId,qe as __namedExportsOrder,He as default};
