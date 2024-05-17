import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as o}from"./index-1b03fe98.js";import{c as g}from"./clsx-1229b3e0.js";import{o as D}from"./style-d1e19ac4.js";import{B as V}from"./Button-851343f6.js";import{t as w,_ as m}from"./transition-4b5a40e6.js";import"./VariantIcon-3a60e005.js";import"./index-6fd5a17b.js";const W="_modal_3q9l3_1",I="_overlay_3q9l3_11",R="_normalOverlay_3q9l3_16",z="_darkerOverlay_3q9l3_20",G="_modalBody_3q9l3_24",J="_fixedHeight_3q9l3_40",K="_contents_3q9l3_44",P="_header_3q9l3_54",Q="_panelEnter_3q9l3_62",U="_panelEnterFrom_3q9l3_68",X="_panelEnterTo_3q9l3_72",Y="_panelLeave_3q9l3_76",Z="_panelLeaveFrom_3q9l3_81",$="_panelLeaveTo_3q9l3_85",a={modal:W,overlay:I,normalOverlay:R,darkerOverlay:z,modalBody:G,fixedHeight:J,contents:K,header:P,panelEnter:Q,panelEnterFrom:U,panelEnterTo:X,panelLeave:Y,panelLeaveFrom:Z,panelLeaveTo:$},s=({header:t,children:r,onClose:n,overlayOpacity:E="normal",closeLabel:f="閉じる",fixedHeight:H=!1,open:L=!0,isStatic:A=!1,...B})=>{const N=D(E);return e.jsx(w,{show:L,as:o.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs(m,{static:A,onClose:n,className:a.modal,...B,children:[e.jsx(m.Overlay,{className:g(a.overlay,a[N])}),e.jsxs("div",{className:g(a.modalBody,H&&a.fixedHeight),children:[t&&e.jsx(m.Title,{className:a.header,children:t}),e.jsx("div",{className:a.contents,children:r}),e.jsx(V,{block:!0,onClick:n,"aria-label":f,children:f})]})]})})};s.__docgenInfo={description:"",methods:[],displayName:"MessageModal",props:{header:{required:!1,tsType:{name:"string"},description:"プライマリーアクションボタンのラベル"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"閉じるアクションが実行された場合のコールバック"},closeLabel:{required:!1,tsType:{name:"string"},description:`閉じるボタンのラベル
@default 閉じる`,defaultValue:{value:"'閉じる'",computed:!1}},overlayOpacity:{required:!1,tsType:{name:"union",raw:"'normal' | 'darker'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'darker'"}]},description:`オーバーレイの透過度
@default normal`,defaultValue:{value:"'normal'",computed:!1}},fixedHeight:{required:!1,tsType:{name:"boolean"},description:`画面を占有する高さで固定するかどうか
@default false`,defaultValue:{value:"false",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:`モーダルダイアログを開くかどうか
@default true`,defaultValue:{value:"true",computed:!1}},isStatic:{required:!1,tsType:{name:"boolean"},description:`openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用
@default false`,defaultValue:{value:"false",computed:!1}}}};const de={title:"Modal/MessageModal",component:s,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},l={header:"",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:e.jsx("p",{children:"Default"})},d={render:t=>{const[r,n]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...t,open:r,onClose:()=>n(!1)})]})},args:l},p={render:t=>{const[r,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...t,open:r,onClose:()=>n(!1)})]})},args:{...l,header:"メッセージ"}},u={render:t=>{const[r,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...t,open:r,onClose:()=>n(!1)})]})},args:{...l,fixedHeight:!0}},c={render:t=>{const[r,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...t,open:r,onClose:()=>n(!1),fixedHeight:!0})]})},args:{...l,overlayOpacity:"darker"}},i={render:t=>{const[r,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...t,open:r,onClose:()=>n(!1)})]})},args:{...l,"data-test-id":"message-modal-custom"}};var y,_,O;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var v,x,h;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(x=p.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,M,C;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(M=u.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var j,k,q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var T,F,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(S=(F=i.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const pe=["Default","WithHeader","FixedHeight","OverlayDarker","CustomDataAttribute"];export{i as CustomDataAttribute,d as Default,u as FixedHeight,c as OverlayDarker,p as WithHeader,pe as __namedExportsOrder,de as default};
