import{j as e}from"./jsx-runtime-69eee039.js";import{r as u}from"./index-7c191284.js";import{c as g}from"./clsx-1229b3e0.js";import{o as N}from"./style-e9a2251f.js";import{B as V}from"./Button-a175e6d5.js";import{t as W,_ as m}from"./transition-0e1e6442.js";import"./VariantIcon-8b056d32.js";import"./index-ecbee218.js";const w="_modal_3q9l3_1",I="_overlay_3q9l3_11",R="_normalOverlay_3q9l3_16",z="_darkerOverlay_3q9l3_20",G="_modalBody_3q9l3_24",J="_fixedHeight_3q9l3_40",K="_contents_3q9l3_44",P="_header_3q9l3_54",Q="_panelEnter_3q9l3_62",U="_panelEnterFrom_3q9l3_68",X="_panelEnterTo_3q9l3_72",Y="_panelLeave_3q9l3_76",Z="_panelLeaveFrom_3q9l3_81",$="_panelLeaveTo_3q9l3_85",t={modal:w,overlay:I,normalOverlay:R,darkerOverlay:z,modalBody:G,fixedHeight:J,contents:K,header:P,panelEnter:Q,panelEnterFrom:U,panelEnterTo:X,panelLeave:Y,panelLeaveFrom:Z,panelLeaveTo:$},s=({header:n,children:r,onClose:a,overlayOpacity:q="normal",closeLabel:f="閉じる",fixedHeight:D=!1,open:S=!0,isStatic:H=!1,...L})=>{const T=N(q);return e.jsx(W,{show:S,as:u.Fragment,enter:t.panelEnter,enterFrom:t.panelEnterFrom,enterTo:t.panelEnterTo,leave:t.panelLeave,leaveFrom:t.panelLeaveFrom,leaveTo:t.panelLeaveTo,children:e.jsxs(m,{static:H,onClose:a,className:t.modal,...L,children:[e.jsx(m.Overlay,{className:g(t.overlay,t[T])}),e.jsxs("div",{className:g(t.modalBody,D&&t.fixedHeight),children:[n&&e.jsx(m.Title,{className:t.header,children:n}),e.jsx("div",{className:t.contents,children:r}),e.jsx(V,{block:!0,onClick:a,"aria-label":f,children:f})]})]})})};try{s.displayName="MessageModal",s.__docgenInfo={description:"",displayName:"MessageModal",props:{header:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"header",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}}}}}catch{}const le={title:"Modal/MessageModal",component:s,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},o={header:"",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:e.jsx("p",{children:"Default"})},l={render:n=>{const[r,a]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(s,{...n,open:r,onClose:()=>a(!1)})]})},args:o},p={render:n=>{const[r,a]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(s,{...n,open:r,onClose:()=>a(!1)})]})},args:{...o,header:"メッセージ"}},d={render:n=>{const[r,a]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(s,{...n,open:r,onClose:()=>a(!1)})]})},args:{...o,fixedHeight:!0}},c={render:n=>{const[r,a]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(s,{...n,open:r,onClose:()=>a(!1),fixedHeight:!0})]})},args:{...o,overlayOpacity:"darker"}},i={render:n=>{const[r,a]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(s,{...n,open:r,onClose:()=>a(!1)})]})},args:{...o,"data-test-id":"message-modal-custom"}};var y,_,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(_=l.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var C,O,v;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(O=p.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var B,F,h;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(h=(F=d.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var x,b,A;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var M,j,k;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const pe=["Default","WithHeader","FixedHeight","OverlayDarker","CustomDataAttribute"];export{i as CustomDataAttribute,l as Default,d as FixedHeight,c as OverlayDarker,p as WithHeader,pe as __namedExportsOrder,le as default};
