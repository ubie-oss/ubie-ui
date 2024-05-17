import{j as a}from"./jsx-runtime-9c4ae004.js";import{r as t}from"./index-1b03fe98.js";import{c as m}from"./clsx-1229b3e0.js";import{o as S}from"./style-d1e19ac4.js";import{B as N}from"./Button-851343f6.js";import{t as p,_ as f}from"./transition-4b5a40e6.js";import"./VariantIcon-3a60e005.js";import"./index-6fd5a17b.js";const q="_modal_1myfo_1",B="_overlay_1myfo_8",H="_normalOverlay_1myfo_13",V="_darkerOverlay_1myfo_17",w="_contents_1myfo_21",A="_modalBody_1myfo_25",D="_bodyScroll_1myfo_45",I="_headerLess_1myfo_49",R="_fullscreen_1myfo_53",z="_header_1myfo_49",G="_buttonContainer_1myfo_71",J="_overlayEnter_1myfo_77",K="_overlayEnterFrom_1myfo_83",P="_overlayEnterTo_1myfo_87",Q="_overlayLeave_1myfo_91",U="_overlayLeaveFrom_1myfo_96",W="_overlayLeaveTo_1myfo_100",X="_panelEnter_1myfo_104",Y="_panelEnterFrom_1myfo_110",Z="_panelEnterTo_1myfo_115",$="_panelLeave_1myfo_120",ee="_panelLeaveFrom_1myfo_125",ae="_panelLeaveTo_1myfo_130",e={modal:q,overlay:B,normalOverlay:H,darkerOverlay:V,contents:w,modalBody:A,bodyScroll:D,headerLess:I,fullscreen:R,header:z,buttonContainer:G,overlayEnter:J,overlayEnterFrom:K,overlayEnterTo:P,overlayLeave:Q,overlayLeaveFrom:U,overlayLeaveTo:W,panelEnter:X,panelEnterFrom:Y,panelEnterTo:Z,panelLeave:$,panelLeaveFrom:ee,panelLeaveTo:ae},l=({children:s,onClose:n,header:o,closeLabel:r="閉じる",overlayOpacity:F="normal",showClose:O=!0,open:x=!0,isStatic:M=!1,fullscreen:y=!1,bodyScroll:j=!0})=>{const k=S(F);return a.jsx(p,{show:x,children:a.jsxs(f,{static:M,onClose:n,className:m(e.modal,y&&e.fullscreen),children:[a.jsx(p.Child,{as:t.Fragment,enter:e.overlayEnter,enterFrom:e.overlayEnterFrom,enterTo:e.overlayEnterTo,leave:e.overlayLeave,leaveFrom:e.overlayLeaveFrom,leaveTo:e.overlayLeaveTo,children:a.jsx(f.Overlay,{className:m(e.overlay,e[k])})}),a.jsx(p.Child,{as:t.Fragment,enter:e.panelEnter,enterFrom:e.panelEnterFrom,enterTo:e.panelEnterTo,leave:e.panelLeave,leaveFrom:e.panelLeaveFrom,leaveTo:e.panelLeaveTo,children:a.jsxs("div",{className:m(e.modalBody,!o&&e.headerLess,y&&e.fullscreen,j&&e.bodyScroll),children:[o&&a.jsx(f.Title,{className:e.header,children:o}),a.jsx("div",{className:e.contents,children:s}),a.jsx("div",{className:e.buttonContainer,children:O&&a.jsx(N,{variant:"primary",onClick:n,"aria-label":r,children:r})})]})})]})})};l.__docgenInfo={description:"",methods:[],displayName:"MessageHalfModal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるアクションが実行された場合のコールバック"},header:{required:!1,tsType:{name:"string"},description:"ヘッダーに表示する見出しテキスト"},closeLabel:{required:!1,tsType:{name:"string"},description:`閉じるボタンのラベル
@default 閉じる`,defaultValue:{value:"'閉じる'",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"union",raw:"'normal' | 'darker'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'darker'"}]},description:`オーバーレイの透過度
@default normal`,defaultValue:{value:"'normal'",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:`閉じるボタンを表示するかどうか
@default true`,defaultValue:{value:"true",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:`モーダルを開くかどうか
@default true`,defaultValue:{value:"true",computed:!1}},isStatic:{required:!1,tsType:{name:"boolean"},description:`openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
@default false`,defaultValue:{value:"false",computed:!1}},fullscreen:{required:!1,tsType:{name:"boolean"},description:`モーダルをフルスクリーンで表示するかどうか
@default false`,defaultValue:{value:"false",computed:!1}},bodyScroll:{required:!1,tsType:{name:"boolean"},description:`モーダルボディ部分のスクロールを許可するかどうか
@default true`,defaultValue:{value:"true",computed:!1}}}};const de={title:"Modal/MessageHalfModal",component:l},i={header:"モーダル",children:"body"},c={render:s=>{const[n,o]=t.useState(!0),r=t.useCallback(()=>{o(!1)},[]);return a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",onClick:()=>o(!0),children:"Open Modal"}),a.jsx(l,{...s,open:n,onClose:r})]})},args:i},u={render:s=>{const[n,o]=t.useState(!1),r=t.useCallback(()=>{o(!1)},[]);return a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",onClick:()=>o(!0),children:"Open Modal"}),a.jsx(l,{...s,open:n,onClose:r,fullscreen:!0})]})},args:i},d={render:s=>{const[n,o]=t.useState(!1),r=t.useCallback(()=>{o(!1)},[]);return a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",onClick:()=>o(!0),children:"Open Modal"}),a.jsx(l,{showClose:!1,...s,open:n,onClose:r})]})},args:i};var v,_,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(_=c.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var b,g,T;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(g=u.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var h,L,E;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const me=["Default","Fullscreen","NoCloseButton"];export{c as Default,u as Fullscreen,d as NoCloseButton,me as __namedExportsOrder,de as default};
