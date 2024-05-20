import{j as o}from"./jsx-runtime-69eee039.js";import{r as l}from"./index-7c191284.js";import{c as m}from"./clsx-1229b3e0.js";import{o as j}from"./style-e9a2251f.js";import{B as k}from"./Button-a175e6d5.js";import{t as p,_ as i}from"./transition-0e1e6442.js";import"./VariantIcon-8b056d32.js";import"./index-ecbee218.js";const S="_modal_1myfo_1",D="_overlay_1myfo_8",N="_normalOverlay_1myfo_13",q="_darkerOverlay_1myfo_17",H="_contents_1myfo_21",V="_modalBody_1myfo_25",w="_bodyScroll_1myfo_45",I="_headerLess_1myfo_49",R="_fullscreen_1myfo_53",z="_header_1myfo_49",G="_buttonContainer_1myfo_71",J="_overlayEnter_1myfo_77",K="_overlayEnterFrom_1myfo_83",P="_overlayEnterTo_1myfo_87",Q="_overlayLeave_1myfo_91",U="_overlayLeaveFrom_1myfo_96",W="_overlayLeaveTo_1myfo_100",X="_panelEnter_1myfo_104",Y="_panelEnterFrom_1myfo_110",Z="_panelEnterTo_1myfo_115",$="_panelLeave_1myfo_120",ee="_panelLeaveFrom_1myfo_125",oe="_panelLeaveTo_1myfo_130",e={modal:S,overlay:D,normalOverlay:N,darkerOverlay:q,contents:H,modalBody:V,bodyScroll:w,headerLess:I,fullscreen:R,header:z,buttonContainer:G,overlayEnter:J,overlayEnterFrom:K,overlayEnterTo:P,overlayLeave:Q,overlayLeaveFrom:U,overlayLeaveTo:W,panelEnter:X,panelEnterFrom:Y,panelEnterTo:Z,panelLeave:$,panelLeaveFrom:ee,panelLeaveTo:oe},t=({children:n,onClose:u,header:a,closeLabel:r="閉じる",overlayOpacity:A="normal",showClose:L=!0,open:O=!0,isStatic:x=!1,fullscreen:f=!1,bodyScroll:M=!0})=>{const T=j(A);return o.jsx(p,{show:O,children:o.jsxs(i,{static:x,onClose:u,className:m(e.modal,f&&e.fullscreen),children:[o.jsx(p.Child,{as:l.Fragment,enter:e.overlayEnter,enterFrom:e.overlayEnterFrom,enterTo:e.overlayEnterTo,leave:e.overlayLeave,leaveFrom:e.overlayLeaveFrom,leaveTo:e.overlayLeaveTo,children:o.jsx(i.Overlay,{className:m(e.overlay,e[T])})}),o.jsx(p.Child,{as:l.Fragment,enter:e.panelEnter,enterFrom:e.panelEnterFrom,enterTo:e.panelEnterTo,leave:e.panelLeave,leaveFrom:e.panelLeaveFrom,leaveTo:e.panelLeaveTo,children:o.jsxs("div",{className:m(e.modalBody,!a&&e.headerLess,f&&e.fullscreen,M&&e.bodyScroll),children:[a&&o.jsx(i.Title,{className:e.header,children:a}),o.jsx("div",{className:e.contents,children:n}),o.jsx("div",{className:e.buttonContainer,children:L&&o.jsx(k,{variant:"primary",onClick:u,"aria-label":r,children:r})})]})})]})})};try{t.displayName="MessageHalfModal",t.__docgenInfo={description:"",displayName:"MessageHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},bodyScroll:{defaultValue:{value:"true"},description:"モーダルボディ部分のスクロールを許可するかどうか",name:"bodyScroll",required:!1,type:{name:"boolean"}}}}}catch{}const de={title:"Modal/MessageHalfModal",component:t},y={header:"モーダル",children:"body"},s={render:n=>{const[u,a]=l.useState(!0),r=l.useCallback(()=>{a(!1)},[]);return o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),o.jsx(t,{...n,open:u,onClose:r})]})},args:y},c={render:n=>{const[u,a]=l.useState(!1),r=l.useCallback(()=>{a(!1)},[]);return o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),o.jsx(t,{...n,open:u,onClose:r,fullscreen:!0})]})},args:y},d={render:n=>{const[u,a]=l.useState(!1),r=l.useCallback(()=>{a(!1)},[]);return o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),o.jsx(t,{showClose:!1,...n,open:u,onClose:r})]})},args:y};var v,_,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(_=s.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var E,F,B;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(F=c.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var b,g,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(g=d.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const me=["Default","Fullscreen","NoCloseButton"];export{s as Default,c as Fullscreen,d as NoCloseButton,me as __namedExportsOrder,de as default};
