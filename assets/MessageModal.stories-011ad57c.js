import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as s}from"./index-1b03fe98.js";import{c as f}from"./clsx-1229b3e0.js";import{o as L}from"./style-9d9d09b6.js";import{B}from"./Button-5ac5dfd0.js";import{t as N,_ as c}from"./transition-4b5a40e6.js";import"./VariantIcon-7c8218a9.js";import"./index-6fd5a17b.js";const q="_modal_1iy0i_1",A="_overlay_1iy0i_14",D="_normalOverlay_1iy0i_22",V="_darkerOverlay_1iy0i_26",w="_modalBody_1iy0i_30",W="_fixedHeight_1iy0i_46",I="_contents_1iy0i_50",R="_header_1iy0i_60",z="_panelEnter_1iy0i_68",G="_panelEnterFrom_1iy0i_74",J="_panelEnterTo_1iy0i_78",K="_panelLeave_1iy0i_82",P="_panelLeaveFrom_1iy0i_87",Q="_panelLeaveTo_1iy0i_91",a={modal:q,overlay:A,normalOverlay:D,darkerOverlay:V,modalBody:w,fixedHeight:W,contents:I,header:R,panelEnter:z,panelEnterFrom:G,panelEnterTo:J,panelLeave:K,panelLeaveFrom:P,panelLeaveTo:Q},o=({header:t,children:r,onClose:n,overlayOpacity:T="normal",closeLabel:m="閉じる",fixedHeight:F=!1,open:E=!0,isStatic:H=!1})=>{const S=L(T);return e.jsx(N,{show:E,as:s.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs(c,{static:H,onClose:n,className:a.modal,children:[e.jsx(c.Overlay,{className:f(a.overlay,a[S])}),e.jsxs("div",{className:f(a.modalBody,F&&a.fixedHeight),children:[t&&e.jsx(c.Title,{className:a.header,children:t}),e.jsx("div",{className:a.contents,children:r}),e.jsx(B,{block:!0,onClick:n,"aria-label":m,children:m})]})]})})};o.__docgenInfo={description:"",methods:[],displayName:"MessageModal",props:{header:{required:!1,tsType:{name:"string"},description:"プライマリーアクションボタンのラベル"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるアクションが実行された場合のコールバック"},closeLabel:{required:!1,tsType:{name:"string"},description:`閉じるボタンのラベル
@default 閉じる`,defaultValue:{value:"'閉じる'",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"union",raw:"'normal' | 'darker'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'darker'"}]},description:`オーバーレイの透過度
@default normal`,defaultValue:{value:"'normal'",computed:!1}},fixedHeight:{required:!1,tsType:{name:"boolean"},description:`画面を占有する高さで固定するかどうか
@default false`,defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:`モーダルダイアログを開くかどうか
@default true`,defaultValue:{value:"true",computed:!1}},isStatic:{required:!1,tsType:{name:"boolean"},description:`openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
@default false`,defaultValue:{value:"false",computed:!1}}}};const te={title:"Modal/MessageModal",component:o,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},u={header:"",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:e.jsx("p",{children:"Default"})},l={render:t=>{const[r,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...t,open:r,onClose:()=>n(!1)})]})},args:u},i={render:t=>{const[r,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...t,open:r,onClose:()=>n(!1)})]})},args:{...u,header:"メッセージ"}},d={render:t=>{const[r,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...t,open:r,onClose:()=>n(!1)})]})},args:{...u,fixedHeight:!0}},p={render:t=>{const[r,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...t,open:r,onClose:()=>n(!1),fixedHeight:!0})]})},args:{...u,overlayOpacity:"darker"}};var y,g,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: defaultArgs
}`,...(_=(g=l.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var v,O,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    ...defaultArgs,
    header: 'メッセージ'
  }
}`,...(h=(O=i.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var x,b,M;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    ...defaultArgs,
    fixedHeight: true
  }
}`,...(M=(b=d.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var j,C,k;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} fixedHeight />
      </>;
  },
  args: {
    ...defaultArgs,
    overlayOpacity: 'darker'
  }
}`,...(k=(C=p.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const re=["Default","WithHeader","FixedHeight","OverlayDarker"];export{l as Default,d as FixedHeight,p as OverlayDarker,i as WithHeader,re as __namedExportsOrder,te as default};
