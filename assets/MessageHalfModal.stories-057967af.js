import{j as e}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{c as _}from"./clsx-1229b3e0.js";import{o as P}from"./style-e9a2251f.js";import{B as Q}from"./Button-f867c37e.js";import{t as E,_ as b}from"./transition-0e1e6442.js";import"./VariantIcon-8b056d32.js";import"./index-ecbee218.js";const U="_modal_1myfo_1",X="_overlay_1myfo_8",Y="_normalOverlay_1myfo_13",Z="_darkerOverlay_1myfo_17",$="_contents_1myfo_21",ee="_modalBody_1myfo_25",ne="_bodyScroll_1myfo_45",ae="_headerLess_1myfo_49",oe="_fullscreen_1myfo_53",ue="_header_1myfo_49",se="_buttonContainer_1myfo_71",re="_overlayEnter_1myfo_77",te="_overlayEnterFrom_1myfo_83",le="_overlayEnterTo_1myfo_87",de="_overlayLeave_1myfo_91",ce="_overlayLeaveFrom_1myfo_96",pe="_overlayLeaveTo_1myfo_100",ie="_panelEnter_1myfo_104",me="_panelEnterFrom_1myfo_110",fe="_panelEnterTo_1myfo_115",ye="_panelLeave_1myfo_120",Ce="_panelLeaveFrom_1myfo_125",ve="_panelLeaveTo_1myfo_130",a={modal:U,overlay:X,normalOverlay:Y,darkerOverlay:Z,contents:$,modalBody:ee,bodyScroll:ne,headerLess:ae,fullscreen:oe,header:ue,buttonContainer:se,overlayEnter:re,overlayEnterFrom:te,overlayEnterTo:le,overlayLeave:de,overlayLeaveFrom:ce,overlayLeaveTo:pe,panelEnter:ie,panelEnterFrom:me,panelEnterTo:fe,panelLeave:ye,panelLeaveFrom:Ce,panelLeaveTo:ve},t=({children:u,onClose:s,header:n,closeLabel:r="閉じる",overlayOpacity:d="normal",showClose:w=!0,open:W=!0,isStatic:R=!1,fullscreen:g=!1,bodyScroll:z=!0,ariaLabelledby:c,...G})=>{const J=P(d),K=o.useCallback(p=>{p!==null&&n==null&&c!=null?p.setAttribute("aria-labelledby",c):p!==null&&n==null&&c==null&&p.removeAttribute("aria-labelledby")},[c,n]);return e.jsx(E,{show:W,children:e.jsxs(b,{ref:K,static:R,onClose:s,className:_(a.modal,g&&a.fullscreen),...G,children:[e.jsx(E.Child,{as:o.Fragment,enter:a.overlayEnter,enterFrom:a.overlayEnterFrom,enterTo:a.overlayEnterTo,leave:a.overlayLeave,leaveFrom:a.overlayLeaveFrom,leaveTo:a.overlayLeaveTo,children:e.jsx(b.Overlay,{className:_(a.overlay,a[J])})}),e.jsx(E.Child,{as:o.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs("div",{className:_(a.modalBody,!n&&a.headerLess,g&&a.fullscreen,z&&a.bodyScroll),children:[n&&e.jsx(b.Title,{className:a.header,children:n}),e.jsx("div",{className:a.contents,children:u}),e.jsx("div",{className:a.buttonContainer,children:w&&e.jsx(Q,{variant:"primary",onClick:s,"aria-label":r,children:r})})]})})]})})};try{t.displayName="MessageHalfModal",t.__docgenInfo={description:"",displayName:"MessageHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},bodyScroll:{defaultValue:{value:"true"},description:"モーダルボディ部分のスクロールを許可するかどうか",name:"bodyScroll",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}}}}}catch{}const Oe={title:"Modal/MessageHalfModal",component:t},l={header:"モーダル",children:"body"},i={render:u=>{const[s,n]=o.useState(!0),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(t,{...u,open:s,onClose:r})]})},args:l},m={render:u=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(t,{...u,open:s,onClose:r,fullscreen:!0})]})},args:l},f={render:u=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(t,{showClose:!1,...u,open:s,onClose:r})]})},args:l},y={render:u=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(t,{...u,open:s,onClose:r})]})},args:{...l,"data-test-id":"message-half-modal-custom"}},C={render:u=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(t,{...u,open:s,onClose:r})]})},args:{...l,id:"dialog-id"}},v={render:u=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]),d="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(t,{ariaLabelledby:d,...u,open:s,onClose:r,children:[e.jsx("h2",{id:d,children:"Heading"}),e.jsx("p",{children:"Body"})]})]})},args:{...l,header:void 0}};var F,B,h;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(h=(B=i.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var A,O,M;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} fullscreen />
      </>;
  },
  args: defaultArgs
}`,...(M=(O=m.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var x,j,k;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal showClose={false} {...args} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(k=(j=f.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var L,D,S;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} />
      </>;
  },
  args: {
    ...defaultArgs,
    'data-test-id': 'message-half-modal-custom'
  }
}`,...(S=(D=y.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var T,H,N;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageHalfModal {...args} open={open} onClose={onClose} />
      </>;
  },
  args: {
    ...defaultArgs,
    id: 'dialog-id'
  }
}`,...(N=(H=C.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var q,V,I;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        <MessageHalfModal ariaLabelledby={headerId} {...args} open={open} onClose={onClose}>
          <h2 id={headerId}>Heading</h2>
          <p>Body</p>
        </MessageHalfModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(I=(V=v.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const Me=["Default","Fullscreen","NoCloseButton","WithCustomDataAttribute","WithId","CustomHeader"];export{v as CustomHeader,i as Default,m as Fullscreen,f as NoCloseButton,y as WithCustomDataAttribute,C as WithId,Me as __namedExportsOrder,Oe as default};
