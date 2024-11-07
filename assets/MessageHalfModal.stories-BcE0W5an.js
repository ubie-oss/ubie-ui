import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{r as o}from"./index-DX35FyXq.js";import{c}from"./clsx-B-dksMZM.js";import{u as ue,X as le,P as ie,L as k,$ as ce,V as de,j as pe}from"./VisuallyHidden-DKw5kirp.js";import{o as me}from"./style-D1Pgu1yr.js";import{B as Ce}from"./Button-BTsT18nY.js";import"./index-I0DSigrg.js";import"./component-Jol18N2F.js";import"./useIcon-BBH32BFO.js";import"./Icon-D6joxYRq.js";import"./ArrowBDownIcon-DHfX99Bt.js";import"./UbieIcon-Dt0Travo.js";import"./UnfoldMoreIcon-N-Pb1J02.js";const fe="_modal_97q45_1",ye="_overlay_97q45_8",ge="_normalOverlay_97q45_13",he="_darkerOverlay_97q45_17",be="_contents_97q45_21",ve="_dialog_97q45_25",Fe="_fullscreen_97q45_43",_e="_scrollContainer_97q45_47",Ee="_mainContent_97q45_52",Be="_headerLess_97q45_61",Ae="_header_97q45_61",ke="_sticky_97q45_78",xe="_canScroll_97q45_83",Oe="_body_97q45_87",Me="_buttonContainer_97q45_98",je="_overlayEnter_97q45_114",Le="_overlayEnterFrom_97q45_120",qe="_overlayEnterTo_97q45_124",Se="_overlayLeave_97q45_128",He="_overlayLeaveFrom_97q45_133",De="_overlayLeaveTo_97q45_137",Ie="_panelEnter_97q45_141",Te="_panelEnterFrom_97q45_147",we="_panelEnterTo_97q45_152",Ne="_panelLeave_97q45_157",Ve="_panelLeaveFrom_97q45_162",Re="_panelLeaveTo_97q45_167",n={modal:fe,overlay:ye,normalOverlay:ge,darkerOverlay:he,contents:be,dialog:ve,fullscreen:Fe,scrollContainer:_e,mainContent:Ee,headerLess:Be,header:Ae,sticky:ke,canScroll:xe,body:Oe,buttonContainer:Me,overlayEnter:je,overlayEnterFrom:Le,overlayEnterTo:qe,overlayLeave:Se,overlayLeaveFrom:He,overlayLeaveTo:De,panelEnter:Ie,panelEnterFrom:Te,panelEnterTo:we,panelLeave:Ne,panelLeaveFrom:Ve,panelLeaveTo:Re},u=({children:t,onClose:s,header:a,closeLabel:r="閉じる",overlayOpacity:i="normal",showClose:E=!0,open:Q=!0,isStatic:Y=!1,fullscreen:d=!1,ariaLabelledby:p,hero:m,stickyHeader:Z=!1,stickyFooter:ee=!1,...ae})=>{const ne=me(i),B=o.useRef(null),oe=o.useCallback(C=>{C!==null&&a==null&&p!=null?C.setAttribute("aria-labelledby",p):C!==null&&a==null&&p==null&&C.removeAttribute("aria-labelledby")},[p,a]),{scrollContainerRef:te,canScrollUp:se,canScrollDown:re}=ue();return e.jsx(le,{show:Q,children:e.jsxs(ie,{ref:oe,static:Y,onClose:s,className:c(n.modal,d&&n.fullscreen),initialFocus:B,...ae,children:[e.jsx(k,{as:o.Fragment,enter:n.overlayEnter,enterFrom:n.overlayEnterFrom,enterTo:n.overlayEnterTo,leave:n.overlayLeave,leaveFrom:n.overlayLeaveFrom,leaveTo:n.overlayLeaveTo,children:e.jsx("div",{className:c(n.overlay,n[ne])})}),e.jsx(k,{as:o.Fragment,enter:n.panelEnter,enterFrom:n.panelEnterFrom,enterTo:n.panelEnterTo,leave:n.panelLeave,leaveFrom:n.panelLeaveFrom,leaveTo:n.panelLeaveTo,children:e.jsxs(ce,{className:c(n.dialog,{[n.fullscreen]:d}),children:[a===void 0?e.jsx(de,{as:"p",tabIndex:-1,ref:B,children:"ダイアログ"}):null,e.jsx("div",{className:n.scrollContainer,ref:te,children:e.jsxs("div",{className:c(n.mainContent,{[n.headerLess]:a===void 0&&m===void 0,[n.fullscreen]:d}),children:[m!==void 0?e.jsx("div",{className:n.hero,children:m}):null,a!==void 0?e.jsx(pe,{tabIndex:-1,ref:B,className:c(n.header,!m&&Z&&n.sticky,se&&n.canScroll),children:a}):null,e.jsx("div",{className:c(n.body,{[n.fullscreen]:d}),children:t}),e.jsx("div",{className:c(n.buttonContainer,E&&ee&&n.sticky,E&&re&&n.canScroll),children:E&&e.jsx(Ce,{variant:"primary",onClick:s,"aria-label":r,children:r})})]})})]})})]})})};try{u.displayName="MessageHalfModal",u.__docgenInfo={description:"",displayName:"MessageHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:`ヘッダーを固定表示
heroが指定されている場合は無効`,name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}}}}}catch{}const aa={title:"Modal/MessageHalfModal",component:u},A=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),l={header:"モーダル",children:e.jsx(A,{}),stickyHeader:!1,stickyFooter:!1},f={render:t=>{const[s,a]=o.useState(!0),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:l},y={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r,fullscreen:!0})]})},args:l},g={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{showClose:!1,...t,open:s,onClose:r})]})},args:l},h={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...l,"data-test-id":"message-half-modal-custom"}},b={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...l,id:"dialog-id"}},v={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsxs(u,{ariaLabelledby:i,...t,open:s,onClose:r,children:[e.jsx("h2",{id:i,children:"Heading"}),e.jsx(A,{})]})]})},args:{...l,header:void 0}},F={render:t=>{const[s,a]=o.useState(!1),r=o.useCallback(()=>{a(!1)},[]),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsxs(u,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),ariaLabelledby:i,...t,open:s,onClose:r,children:[e.jsx("h2",{id:i,children:"Heading"}),e.jsx(A,{})]})]})},args:{...l,header:void 0}},_={render:t=>{const[s,a]=o.useState(!0),r=o.useCallback(()=>{a(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(u,{...t,open:s,onClose:r})]})},args:{...l,stickyHeader:!0,stickyFooter:!0}};var x,O,M;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(O=f.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var j,L,q;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(L=y.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var S,H,D;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(H=g.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var I,T,w;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(T=h.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var N,V,R;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(V=b.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var W,P,X;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(X=(P=v.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var $,G,U;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(J=_.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const na=["Default","Fullscreen","NoCloseButton","WithCustomDataAttribute","WithId","CustomHeader","WithHero","StickyHeaderAndFooter"];export{v as CustomHeader,f as Default,y as Fullscreen,g as NoCloseButton,_ as StickyHeaderAndFooter,h as WithCustomDataAttribute,F as WithHero,b as WithId,na as __namedExportsOrder,aa as default};
