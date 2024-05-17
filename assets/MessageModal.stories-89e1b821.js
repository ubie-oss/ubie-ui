import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as o}from"./index-1b03fe98.js";import{c as g}from"./clsx-1229b3e0.js";import{o as D}from"./style-d1e19ac4.js";import{B as V}from"./Button-38e19fab.js";import{t as w,_ as m}from"./transition-4b5a40e6.js";import"./VariantIcon-c466fe49.js";import"./index-6fd5a17b.js";const W="_modal_1iy0i_1",I="_overlay_1iy0i_14",R="_normalOverlay_1iy0i_22",z="_darkerOverlay_1iy0i_26",G="_modalBody_1iy0i_30",J="_fixedHeight_1iy0i_46",K="_contents_1iy0i_50",P="_header_1iy0i_60",Q="_panelEnter_1iy0i_68",U="_panelEnterFrom_1iy0i_74",X="_panelEnterTo_1iy0i_78",Y="_panelLeave_1iy0i_82",Z="_panelLeaveFrom_1iy0i_87",$="_panelLeaveTo_1iy0i_91",a={modal:W,overlay:I,normalOverlay:R,darkerOverlay:z,modalBody:G,fixedHeight:J,contents:K,header:P,panelEnter:Q,panelEnterFrom:U,panelEnterTo:X,panelLeave:Y,panelLeaveFrom:Z,panelLeaveTo:$},s=({header:t,children:r,onClose:n,overlayOpacity:H="normal",closeLabel:f="閉じる",fixedHeight:L=!1,open:A=!0,isStatic:B=!1,...N})=>{const q=D(H);return e.jsx(w,{show:A,as:o.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs(m,{static:B,onClose:n,className:a.modal,...N,children:[e.jsx(m.Overlay,{className:g(a.overlay,a[q])}),e.jsxs("div",{className:g(a.modalBody,L&&a.fixedHeight),children:[t&&e.jsx(m.Title,{className:a.header,children:t}),e.jsx("div",{className:a.contents,children:r}),e.jsx(V,{block:!0,onClick:n,"aria-label":f,children:f})]})]})})};s.__docgenInfo={description:"",methods:[],displayName:"MessageModal",props:{header:{required:!1,tsType:{name:"string"},description:"プライマリーアクションボタンのラベル"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるアクションが実行された場合のコールバック"},closeLabel:{required:!1,tsType:{name:"string"},description:`閉じるボタンのラベル
@default 閉じる`,defaultValue:{value:"'閉じる'",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"union",raw:"'normal' | 'darker'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'darker'"}]},description:`オーバーレイの透過度
@default normal`,defaultValue:{value:"'normal'",computed:!1}},fixedHeight:{required:!1,tsType:{name:"boolean"},description:`画面を占有する高さで固定するかどうか
@default false`,defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:`モーダルダイアログを開くかどうか
@default true`,defaultValue:{value:"true",computed:!1}},isStatic:{required:!1,tsType:{name:"boolean"},description:`openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
@default false`,defaultValue:{value:"false",computed:!1}}}};const ie={title:"Modal/MessageModal",component:s,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},l={header:"",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:e.jsx("p",{children:"Default"})},i={render:t=>{const[r,n]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...t,open:r,onClose:()=>n(!1)})]})},args:l},d={render:t=>{const[r,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...t,open:r,onClose:()=>n(!1)})]})},args:{...l,header:"メッセージ"}},p={render:t=>{const[r,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...t,open:r,onClose:()=>n(!1)})]})},args:{...l,fixedHeight:!0}},u={render:t=>{const[r,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...t,open:r,onClose:()=>n(!1),fixedHeight:!0})]})},args:{...l,overlayOpacity:"darker"}},c={render:t=>{const[r,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...t,open:r,onClose:()=>n(!1)})]})},args:{...l,"data-test-id":"message-modal-custom"}};var y,_,O;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var v,x,h;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
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
}`,...(h=(x=d.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,M,C;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
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
}`,...(C=(M=p.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var j,k,T;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
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
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var F,S,E;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    ...defaultArgs,
    'data-test-id': 'message-modal-custom'
  }
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const de=["Default","WithHeader","FixedHeight","OverlayDarker","CustomDataAttribute"];export{c as CustomDataAttribute,i as Default,p as FixedHeight,u as OverlayDarker,d as WithHeader,de as __namedExportsOrder,ie as default};
