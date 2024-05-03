import{j as a}from"./jsx-runtime-9c4ae004.js";import{r as t}from"./index-1b03fe98.js";import{c as p}from"./clsx-1229b3e0.js";import{o as S}from"./style-9d9d09b6.js";import{B as N}from"./Button-5ac5dfd0.js";import{t as m,_ as i}from"./transition-4b5a40e6.js";import"./VariantIcon-7c8218a9.js";import"./index-6fd5a17b.js";const q="_modal_hbc5r_1",B="_overlay_hbc5r_11",H="_normalOverlay_hbc5r_19",V="_darkerOverlay_hbc5r_23",w="_contents_hbc5r_27",A="_modalBody_hbc5r_31",D="_bodyScroll_hbc5r_51",I="_headerLess_hbc5r_55",R="_fullscreen_hbc5r_59",z="_header_hbc5r_55",G="_buttonContainer_hbc5r_77",J="_overlayEnter_hbc5r_83",K="_overlayEnterFrom_hbc5r_89",P="_overlayEnterTo_hbc5r_93",Q="_overlayLeave_hbc5r_97",U="_overlayLeaveFrom_hbc5r_102",W="_overlayLeaveTo_hbc5r_106",X="_panelEnter_hbc5r_110",Y="_panelEnterFrom_hbc5r_116",Z="_panelEnterTo_hbc5r_121",$="_panelLeave_hbc5r_126",ee="_panelLeaveFrom_hbc5r_131",ae="_panelLeaveTo_hbc5r_136",e={modal:q,overlay:B,normalOverlay:H,darkerOverlay:V,contents:w,modalBody:A,bodyScroll:D,headerLess:I,fullscreen:R,header:z,buttonContainer:G,overlayEnter:J,overlayEnterFrom:K,overlayEnterTo:P,overlayLeave:Q,overlayLeaveFrom:U,overlayLeaveTo:W,panelEnter:X,panelEnterFrom:Y,panelEnterTo:Z,panelLeave:$,panelLeaveFrom:ee,panelLeaveTo:ae},l=({children:s,onClose:n,header:r,closeLabel:o="閉じる",overlayOpacity:F="normal",showClose:O=!0,open:x=!0,isStatic:M=!1,fullscreen:f=!1,bodyScroll:j=!0})=>{const k=S(F);return a.jsx(m,{show:x,children:a.jsxs(i,{static:M,onClose:n,className:p(e.modal,f&&e.fullscreen),children:[a.jsx(m.Child,{as:t.Fragment,enter:e.overlayEnter,enterFrom:e.overlayEnterFrom,enterTo:e.overlayEnterTo,leave:e.overlayLeave,leaveFrom:e.overlayLeaveFrom,leaveTo:e.overlayLeaveTo,children:a.jsx(i.Overlay,{className:p(e.overlay,e[k])})}),a.jsx(m.Child,{as:t.Fragment,enter:e.panelEnter,enterFrom:e.panelEnterFrom,enterTo:e.panelEnterTo,leave:e.panelLeave,leaveFrom:e.panelLeaveFrom,leaveTo:e.panelLeaveTo,children:a.jsxs("div",{className:p(e.modalBody,!r&&e.headerLess,f&&e.fullscreen,j&&e.bodyScroll),children:[r&&a.jsx(i.Title,{className:e.header,children:r}),a.jsx("div",{className:e.contents,children:s}),a.jsx("div",{className:e.buttonContainer,children:O&&a.jsx(N,{variant:"primary",onClick:n,"aria-label":o,children:o})})]})})]})})};l.__docgenInfo={description:"",methods:[],displayName:"MessageHalfModal",props:{onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるアクションが実行された場合のコールバック"},header:{required:!1,tsType:{name:"string"},description:"ヘッダーに表示する見出しテキスト"},closeLabel:{required:!1,tsType:{name:"string"},description:`閉じるボタンのラベル
@default 閉じる`,defaultValue:{value:"'閉じる'",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"union",raw:"'normal' | 'darker'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'darker'"}]},description:`オーバーレイの透過度
@default normal`,defaultValue:{value:"'normal'",computed:!1}},showClose:{required:!1,tsType:{name:"boolean"},description:`閉じるボタンを表示するかどうか
@default true`,defaultValue:{value:"true",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:`モーダルを開くかどうか
@default true`,defaultValue:{value:"true",computed:!1}},isStatic:{required:!1,tsType:{name:"boolean"},description:`openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
@default false`,defaultValue:{value:"false",computed:!1}},fullscreen:{required:!1,tsType:{name:"boolean"},description:`モーダルをフルスクリーンで表示するかどうか
@default false`,defaultValue:{value:"false",computed:!1}},bodyScroll:{required:!1,tsType:{name:"boolean"},description:`モーダルボディ部分のスクロールを許可するかどうか
@default true`,defaultValue:{value:"true",computed:!1}}}};const de={title:"Modal/MessageHalfModal",component:l},v={header:"モーダル",children:"body"},c={render:s=>{const[n,r]=t.useState(!0),o=t.useCallback(()=>{r(!1)},[]);return a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",onClick:()=>r(!0),children:"Open Modal"}),a.jsx(l,{...s,open:n,onClose:o})]})},args:v},u={render:s=>{const[n,r]=t.useState(!1),o=t.useCallback(()=>{r(!1)},[]);return a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",onClick:()=>r(!0),children:"Open Modal"}),a.jsx(l,{...s,open:n,onClose:o,fullscreen:!0})]})},args:v},d={render:s=>{const[n,r]=t.useState(!1),o=t.useCallback(()=>{r(!1)},[]);return a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",onClick:()=>r(!0),children:"Open Modal"}),a.jsx(l,{showClose:!1,...s,open:n,onClose:o})]})},args:v};var _,y,b;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(b=(y=c.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,C,g;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(C=u.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var T,L,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const pe=["Default","Fullscreen","NoCloseButton"];export{c as Default,u as Fullscreen,d as NoCloseButton,pe as __namedExportsOrder,de as default};
