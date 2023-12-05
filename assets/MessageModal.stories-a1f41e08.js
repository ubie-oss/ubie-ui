import{a,j as o,c as f,F as c}from"./clsx-0a53246e.js";import{r as s}from"./index-76fb7be0.js";import{t as T,_ as y,o as N}from"./style-715f24ee.js";import{B as q}from"./Button-2b4c4db0.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./VariantIcon-48b0f305.js";const V="_modal_1iy0i_1",j="_overlay_1iy0i_14",W="_normalOverlay_1iy0i_22",w="_darkerOverlay_1iy0i_26",I="_modalBody_1iy0i_30",z="_fixedHeight_1iy0i_46",G="_contents_1iy0i_50",J="_header_1iy0i_60",K="_panelEnter_1iy0i_68",P="_panelEnterFrom_1iy0i_74",Q="_panelEnterTo_1iy0i_78",R="_panelLeave_1iy0i_82",U="_panelLeaveFrom_1iy0i_87",X="_panelLeaveTo_1iy0i_91",t={modal:V,overlay:j,normalOverlay:W,darkerOverlay:w,modalBody:I,fixedHeight:z,contents:G,header:J,panelEnter:K,panelEnterFrom:P,panelEnterTo:Q,panelLeave:R,panelLeaveFrom:U,panelLeaveTo:X},u=({header:r,children:n,onClose:e,overlayOpacity:x="normal",closeLabel:_="閉じる",fixedHeight:D=!1,open:H=!0,isStatic:S=!1})=>{const L=N(x);return a(T,{show:H,as:s.Fragment,enter:t.panelEnter,enterFrom:t.panelEnterFrom,enterTo:t.panelEnterTo,leave:t.panelLeave,leaveFrom:t.panelLeaveFrom,leaveTo:t.panelLeaveTo,children:o(y,{static:S,onClose:e,className:t.modal,children:[a(y.Overlay,{className:f(t.overlay,t[L])}),o("div",{className:f(t.modalBody,D&&t.fixedHeight),children:[r&&a(y.Title,{className:t.header,children:r}),a("div",{className:t.contents,children:n}),a(q,{block:!0,onClick:e,"aria-label":_,children:_})]})]})})};try{u.displayName="MessageModal",u.__docgenInfo={description:"",displayName:"MessageModal",props:{header:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"header",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}}}}}catch{}const ne={title:"Modal/MessageModal",component:u,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},m={header:"",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:a("p",{children:"Default"})},l={render:r=>{const[n,e]=s.useState(!0);return o(c,{children:[a("button",{type:"button",onClick:()=>e(!0),children:"Open Modal"}),a(u,{...r,open:n,onClose:()=>e(!1)})]})},args:m},i={render:r=>{const[n,e]=s.useState(!0);return o(c,{children:[a("button",{type:"button",onClick:()=>e(!0),children:"Open Modal"}),a(u,{...r,open:n,onClose:()=>e(!1)})]})},args:{...m,header:"メッセージ"}},p={render:r=>{const[n,e]=s.useState(!0);return o(c,{children:[a("button",{type:"button",onClick:()=>e(!0),children:"Open Modal"}),a(u,{...r,open:n,onClose:()=>e(!1)})]})},args:{...m,fixedHeight:!0}},d={render:r=>{const[n,e]=s.useState(!0);return o(c,{children:[a("button",{type:"button",onClick:()=>e(!0),children:"Open Modal"}),a(u,{...r,open:n,onClose:()=>e(!1),fixedHeight:!0})]})},args:{...m,overlayOpacity:"darker"}};var g,E,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(E=l.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var B,h,F;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(h=i.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var O,C,A;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(C=p.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var b,M,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(M=d.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const ue=["Default","WithHeader","FixedHeight","OverlayDarker"];export{l as Default,p as FixedHeight,d as OverlayDarker,i as WithHeader,ue as __namedExportsOrder,ne as default};
//# sourceMappingURL=MessageModal.stories-a1f41e08.js.map
