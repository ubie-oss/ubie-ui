import{j as e}from"./jsx-runtime-69eee039.js";import{r as s}from"./index-7c191284.js";import{c as B}from"./clsx-1229b3e0.js";import{o as G}from"./style-e9a2251f.js";import{B as J}from"./Button-f867c37e.js";import{t as K,_ as C}from"./transition-0e1e6442.js";import"./VariantIcon-8b056d32.js";import"./index-ecbee218.js";const P="_modal_3q9l3_1",Q="_overlay_3q9l3_11",U="_normalOverlay_3q9l3_16",X="_darkerOverlay_3q9l3_20",Y="_modalBody_3q9l3_24",Z="_fixedHeight_3q9l3_40",$="_contents_3q9l3_44",ee="_header_3q9l3_54",ne="_panelEnter_3q9l3_62",ae="_panelEnterFrom_3q9l3_68",ue="_panelEnterTo_3q9l3_72",te="_panelLeave_3q9l3_76",re="_panelLeaveFrom_3q9l3_81",se="_panelLeaveTo_3q9l3_85",t={modal:P,overlay:Q,normalOverlay:U,darkerOverlay:X,modalBody:Y,fixedHeight:Z,contents:$,header:ee,panelEnter:ne,panelEnterFrom:ae,panelEnterTo:ue,panelLeave:te,panelLeaveFrom:re,panelLeaveTo:se},r=({header:a,children:u,onClose:n,overlayOpacity:l="normal",closeLabel:E="閉じる",fixedHeight:N=!1,open:V=!0,isStatic:R=!1,ariaLabelledby:d,...W})=>{const w=G(l),z=s.useCallback(p=>{p!==null&&a==null&&d!=null?p.setAttribute("aria-labelledby",d):p!==null&&a==null&&d==null&&p.removeAttribute("aria-labelledby")},[d,a]);return e.jsx(K,{show:V,as:s.Fragment,enter:t.panelEnter,enterFrom:t.panelEnterFrom,enterTo:t.panelEnterTo,leave:t.panelLeave,leaveFrom:t.panelLeaveFrom,leaveTo:t.panelLeaveTo,children:e.jsxs(C,{ref:z,static:R,onClose:n,className:t.modal,...W,children:[e.jsx(C.Overlay,{className:B(t.overlay,t[w])}),e.jsxs("div",{className:B(t.modalBody,N&&t.fixedHeight),children:[a&&e.jsx(C.Title,{className:t.header,children:a}),e.jsx("div",{className:t.contents,children:u}),e.jsx(J,{block:!0,onClick:n,"aria-label":E,children:E})]})]})})};try{r.displayName="MessageModal",r.__docgenInfo={description:"",displayName:"MessageModal",props:{header:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"header",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}}}}}catch{}const fe={title:"Modal/MessageModal",component:r,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},o={header:"メッセージ",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:e.jsx("p",{children:"Default"})},i={render:a=>{const[u,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...a,open:u,onClose:()=>n(!1)})]})},args:{...o,header:"メッセージ"}},c={render:a=>{const[u,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...a,open:u,onClose:()=>n(!1)})]})},args:o},m={render:a=>{const[u,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...a,open:u,onClose:()=>n(!1),fixedHeight:!0})]})},args:{...o,overlayOpacity:"darker"}},g={render:a=>{const[u,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...a,open:u,onClose:()=>n(!1)})]})},args:{...o,"data-test-id":"message-modal-custom"}},f={render:a=>{const[u,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...a,open:u,onClose:()=>n(!1)})]})},args:{...o,id:"dialog-id"}},y={render:a=>{const[u,n]=s.useState(!1),l="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{ariaLabelledby:l,...a,open:u,onClose:()=>n(!1),children:[e.jsx("h2",{id:l,children:"Heading"}),e.jsx("p",{children:"Body"})]})]})},args:{...o,header:void 0}};var _,h,F;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(h=i.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var O,A,b;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: defaultArgs
}`,...(b=(A=c.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var v,x,M;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(M=(x=m.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var j,D,k;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(k=(D=g.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var q,S,H;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    id: 'dialog-id'
  }
}`,...(H=(S=f.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var L,T,I;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const headerId = 'header-id';
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal ariaLabelledby={headerId} {...args} open={open} onClose={() => setOpen(false)}>
          <h2 id={headerId}>Heading</h2>
          <p>Body</p>
        </MessageModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(I=(T=y.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const ye=["Default","FixedHeight","OverlayDarker","CustomDataAttribute","WithId","CustomHeader"];export{g as CustomDataAttribute,y as CustomHeader,i as Default,c as FixedHeight,m as OverlayDarker,f as WithId,ye as __namedExportsOrder,fe as default};
