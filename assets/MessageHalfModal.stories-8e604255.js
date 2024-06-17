import{j as e}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{c as i}from"./clsx-1229b3e0.js";import{t as E,_ as B,V as ee}from"./VisuallyHidden-4a81f45e.js";import{o as ne}from"./style-e9a2251f.js";import{B as ae}from"./Button-0c4e8ea7.js";import"./index-ecbee218.js";import"./VariantIcon-ec19a65a.js";const oe="_modal_qcjem_1",te="_overlay_qcjem_8",se="_normalOverlay_qcjem_13",re="_darkerOverlay_qcjem_17",ue="_contents_qcjem_21",le="_dialog_qcjem_25",de="_bodyScroll_qcjem_42",ie="_fullscreen_qcjem_46",ce="_mainContent_qcjem_50",pe="_headerLess_qcjem_61",me="_header_qcjem_61",Ce="_body_qcjem_42",fe="_buttonContainer_qcjem_82",he="_overlayEnter_qcjem_87",ge="_overlayEnterFrom_qcjem_93",ye="_overlayEnterTo_qcjem_97",ve="_overlayLeave_qcjem_101",be="_overlayLeaveFrom_qcjem_106",_e="_overlayLeaveTo_qcjem_110",Fe="_panelEnter_qcjem_114",Ee="_panelEnterFrom_qcjem_120",Be="_panelEnterTo_qcjem_125",je="_panelLeave_qcjem_130",Ae="_panelLeaveFrom_qcjem_135",xe="_panelLeaveTo_qcjem_140",a={modal:oe,overlay:te,normalOverlay:se,darkerOverlay:re,contents:ue,dialog:le,bodyScroll:de,fullscreen:ie,mainContent:ce,headerLess:pe,header:me,body:Ce,buttonContainer:fe,overlayEnter:he,overlayEnterFrom:ge,overlayEnterTo:ye,overlayLeave:ve,overlayLeaveFrom:be,overlayLeaveTo:_e,panelEnter:Fe,panelEnterFrom:Ee,panelEnterTo:Be,panelLeave:je,panelLeaveFrom:Ae,panelLeaveTo:xe},u=({children:t,onClose:s,header:n,closeLabel:r="閉じる",overlayOpacity:l="normal",showClose:K=!0,open:Q=!0,isStatic:U=!1,fullscreen:c=!1,bodyScroll:X=!0,ariaLabelledby:p,hero:_,...Y})=>{const Z=ne(l),F=o.useRef(null),$=o.useCallback(m=>{m!==null&&n==null&&p!=null?m.setAttribute("aria-labelledby",p):m!==null&&n==null&&p==null&&m.removeAttribute("aria-labelledby")},[p,n]);return e.jsx(E,{show:Q,children:e.jsxs(B,{ref:$,static:U,onClose:s,className:i(a.modal,c&&a.fullscreen),initialFocus:F,...Y,children:[e.jsx(E.Child,{as:o.Fragment,enter:a.overlayEnter,enterFrom:a.overlayEnterFrom,enterTo:a.overlayEnterTo,leave:a.overlayLeave,leaveFrom:a.overlayLeaveFrom,leaveTo:a.overlayLeaveTo,children:e.jsx(B.Overlay,{className:i(a.overlay,a[Z])})}),e.jsx(E.Child,{as:o.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs("div",{className:i(a.dialog,{[a.fullscreen]:c,[a.bodyScroll]:X}),children:[n===void 0?e.jsx(ee,{as:"p",tabIndex:-1,ref:F,children:"ダイアログ"}):null,_!==void 0?e.jsx("div",{className:a.hero,children:_}):null,e.jsxs("div",{className:i(a.mainContent,{[a.headerLess]:n===void 0&&_===void 0,[a.fullscreen]:c}),children:[n!==void 0?e.jsx(B.Title,{tabIndex:-1,ref:F,className:a.header,children:n}):null,e.jsx("div",{className:i(a.body,{[a.fullscreen]:c}),children:t}),e.jsx("div",{className:a.buttonContainer,children:K&&e.jsx(ae,{variant:"primary",onClick:s,"aria-label":r,children:r})})]})]})})]})})};try{u.displayName="MessageHalfModal",u.__docgenInfo={description:"",displayName:"MessageHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},bodyScroll:{defaultValue:{value:"true"},description:"モーダルボディ部分のスクロールを許可するかどうか",name:"bodyScroll",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}}}}}catch{}const He={title:"Modal/MessageHalfModal",component:u},j=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),d={header:"モーダル",children:e.jsx(j,{})},C={render:t=>{const[s,n]=o.useState(!0),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:d},f={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r,fullscreen:!0})]})},args:d},h={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{showClose:!1,...t,open:s,onClose:r})]})},args:d},g={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...d,"data-test-id":"message-half-modal-custom"}},y={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...d,id:"dialog-id"}},v={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]),l="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(u,{ariaLabelledby:l,...t,open:s,onClose:r,children:[e.jsx("h2",{id:l,children:"Heading"}),e.jsx(j,{})]})]})},args:{...d,header:void 0}},b={render:t=>{const[s,n]=o.useState(!1),r=o.useCallback(()=>{n(!1)},[]),l="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(u,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),ariaLabelledby:l,...t,open:s,onClose:r,children:[e.jsx("h2",{id:l,children:"Heading"}),e.jsx(j,{})]})]})},args:{...d,header:void 0}};var A,x,O;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(x=C.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var M,L,k;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(k=(L=f.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var q,S,D;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(S=h.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var I,H,T;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(H=g.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var w,N,V;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(N=y.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var R,W,G;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
          <LongBody />
        </MessageHalfModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(G=(W=v.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var P,z,J;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        <MessageHalfModal hero={<img src="/images/placeholder.svg" alt="Illustration: Modal" style={{
        width: '100%',
        height: 'auto',
        verticalAlign: 'bottom'
      }} width={560} height={315} />} ariaLabelledby={headerId} {...args} open={open} onClose={onClose}>
          <h2 id={headerId}>Heading</h2>
          <LongBody />
        </MessageHalfModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(J=(z=b.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const Te=["Default","Fullscreen","NoCloseButton","WithCustomDataAttribute","WithId","CustomHeader","WithHero"];export{v as CustomHeader,C as Default,f as Fullscreen,h as NoCloseButton,g as WithCustomDataAttribute,b as WithHero,y as WithId,Te as __namedExportsOrder,He as default};
