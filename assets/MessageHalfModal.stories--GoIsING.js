import{j as e}from"./jsx-runtime-DuyR_K1q.js";import{r as o}from"./index-yUhCOHB4.js";import{c as i}from"./clsx-B-dksMZM.js";import{u as ue,X as le,P as ce,L as A,$ as ie,V as de,j as pe}from"./VisuallyHidden-EwnkIPnb.js";import{o as me}from"./style-BnM3_UOs.js";import{B as ve}from"./Button-DjtfWLha.js";import"./index-DGmQaTsW.js";import"./component-NUmYR5Q2.js";import"./useIcon-jM7ePnaG.js";import"./Icon-tldTwAAd.js";import"./ArrowBDownIcon-DhMIqqai.js";import"./UnfoldMoreIcon-BpmwIn3S.js";const Ce="_modal_c9vvj_1",fe="_overlay_c9vvj_8",ye="_normalOverlay_c9vvj_13",ge="_darkerOverlay_c9vvj_17",he="_contents_c9vvj_21",be="_dialog_c9vvj_25",Fe="_fullscreen_c9vvj_43",_e="_scrollContainer_c9vvj_47",je="_mainContent_c9vvj_52",Ee="_headerLess_c9vvj_61",Be="_header_c9vvj_61",Ae="_sticky_c9vvj_78",ke="_canScroll_c9vvj_86",xe="_body_c9vvj_90",Oe="_buttonContainer_c9vvj_109",Me="_overlayEnter_c9vvj_125",Le="_overlayEnterFrom_c9vvj_131",Se="_overlayEnterTo_c9vvj_135",He="_overlayLeave_c9vvj_139",De="_overlayLeaveFrom_c9vvj_144",Ie="_overlayLeaveTo_c9vvj_148",Te="_panelEnter_c9vvj_152",we="_panelEnterFrom_c9vvj_158",Ne="_panelEnterTo_c9vvj_163",Ve="_panelLeave_c9vvj_168",qe="_panelLeaveFrom_c9vvj_173",Re="_panelLeaveTo_c9vvj_178",n={modal:Ce,overlay:fe,normalOverlay:ye,darkerOverlay:ge,contents:he,dialog:be,fullscreen:Fe,scrollContainer:_e,mainContent:je,headerLess:Ee,header:Be,sticky:Ae,canScroll:ke,body:xe,buttonContainer:Oe,overlayEnter:Me,overlayEnterFrom:Le,overlayEnterTo:Se,overlayLeave:He,overlayLeaveFrom:De,overlayLeaveTo:Ie,panelEnter:Te,panelEnterFrom:we,panelEnterTo:Ne,panelLeave:Ve,panelLeaveFrom:qe,panelLeaveTo:Re},u=({children:t,onClose:s,header:a,closeLabel:r="閉じる",overlayOpacity:c="normal",showClose:j=!0,open:Q=!0,isStatic:Y=!1,fullscreen:d=!1,ariaLabelledby:p,hero:m,stickyHeader:Z=!1,stickyFooter:ee=!1,...ae})=>{const ne=me(c),E=o.useRef(null),oe=o.useCallback(v=>{v!==null&&a==null&&p!=null?v.setAttribute("aria-labelledby",p):v!==null&&a==null&&p==null&&v.removeAttribute("aria-labelledby")},[p,a]),{scrollContainerRef:te,canScrollUp:se,canScrollDown:re}=ue();return e.jsx(le,{show:Q,children:e.jsxs(ce,{ref:oe,static:Y,onClose:s,className:i(n.modal,d&&n.fullscreen),initialFocus:E,...ae,children:[e.jsx(A,{as:o.Fragment,enter:n.overlayEnter,enterFrom:n.overlayEnterFrom,enterTo:n.overlayEnterTo,leave:n.overlayLeave,leaveFrom:n.overlayLeaveFrom,leaveTo:n.overlayLeaveTo,children:e.jsx("div",{className:i(n.overlay,n[ne])})}),e.jsx(A,{as:o.Fragment,enter:n.panelEnter,enterFrom:n.panelEnterFrom,enterTo:n.panelEnterTo,leave:n.panelLeave,leaveFrom:n.panelLeaveFrom,leaveTo:n.panelLeaveTo,children:e.jsxs(ie,{className:i(n.dialog,{[n.fullscreen]:d}),children:[a===void 0?e.jsx(de,{as:"p",tabIndex:-1,ref:E,children:"ダイアログ"}):null,e.jsx("div",{className:n.scrollContainer,ref:te,children:e.jsxs("div",{className:i(n.mainContent,{[n.headerLess]:a===void 0&&m===void 0,[n.fullscreen]:d}),children:[m!==void 0?e.jsx("div",{className:n.hero,children:m}):null,a!==void 0?e.jsx(pe,{tabIndex:-1,ref:E,className:i(n.header,!m&&Z&&n.sticky,se&&n.canScroll),children:a}):null,e.jsx("div",{className:i(n.body,{[n.fullscreen]:d}),children:t}),e.jsx("div",{className:i(n.buttonContainer,j&&ee&&n.sticky,j&&re&&n.canScroll),children:j&&e.jsx(ve,{variant:"primary",onClick:s,"aria-label":r,children:r})})]})})]})})]})})};try{u.displayName="MessageHalfModal",u.__docgenInfo={description:"",displayName:"MessageHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示する",name:"fullscreen",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:`ヘッダーを固定表示
heroが指定されている場合は無効`,name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}}}}}catch{}const ea={title:"Modal/MessageHalfModal",component:u},B=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),l={header:"モーダル",children:e.jsx(B,{}),stickyHeader:!1,stickyFooter:!1},C={render:t=>{const[s,a]=o.useState(!0),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:l},f={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r,fullscreen:!0})]})},args:l},y={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{showClose:!1,...t,open:s,onClose:r})]})},args:l},g={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...l,"data-test-id":"message-half-modal-custom"}},h={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...l,id:"dialog-id"}},b={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]),c="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsxs(u,{ariaLabelledby:c,...t,open:s,onClose:r,children:[e.jsx("h2",{id:c,children:"Heading"}),e.jsx(B,{})]})]})},args:{...l,header:void 0}},F={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]),c="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsxs(u,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),ariaLabelledby:c,...t,open:s,onClose:r,children:[e.jsx("h2",{id:c,children:"Heading"}),e.jsx(B,{})]})]})},args:{...l,header:void 0}},_={render:t=>{const[s,a]=o.useState(!0),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...l,stickyHeader:!0,stickyFooter:!0}};var k,x,O;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(O=(x=C.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var M,L,S;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(S=(L=f.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var H,D,I;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(I=(D=y.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,w,N;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(w=g.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var V,q,R;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(q=h.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var W,P,X;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(X=(P=b.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var $,G,U;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(G=F.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var z,J,K;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
  args: {
    ...defaultArgs,
    stickyHeader: true,
    stickyFooter: true
  }
}`,...(K=(J=_.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const aa=["Default","Fullscreen","NoCloseButton","WithCustomDataAttribute","WithId","CustomHeader","WithHero","StickyHeaderAndFooter"];export{b as CustomHeader,C as Default,f as Fullscreen,y as NoCloseButton,_ as StickyHeaderAndFooter,g as WithCustomDataAttribute,F as WithHero,h as WithId,aa as __namedExportsOrder,ea as default};
