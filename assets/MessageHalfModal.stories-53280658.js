import{j as e}from"./jsx-runtime-69eee039.js";import{r as t}from"./index-7c191284.js";import{c}from"./clsx-1229b3e0.js";import{u as le,t as A,_ as k,V as ie}from"./VisuallyHidden-d64fca01.js";import{o as ce}from"./style-282c756e.js";import{B as de}from"./Button-f48927cf.js";import"./index-ecbee218.js";import"./component-22a2265d.js";import"./VariantIcon-f53fea35.js";const pe="_modal_97q45_1",me="_overlay_97q45_8",Ce="_normalOverlay_97q45_13",fe="_darkerOverlay_97q45_17",ye="_contents_97q45_21",ge="_dialog_97q45_25",he="_fullscreen_97q45_43",ve="_scrollContainer_97q45_47",be="_mainContent_97q45_52",Fe="_headerLess_97q45_61",_e="_header_97q45_61",Ee="_sticky_97q45_78",Be="_canScroll_97q45_83",Ae="_body_97q45_87",ke="_buttonContainer_97q45_98",xe="_overlayEnter_97q45_114",Oe="_overlayEnterFrom_97q45_120",Me="_overlayEnterTo_97q45_124",je="_overlayLeave_97q45_128",Le="_overlayLeaveFrom_97q45_133",qe="_overlayLeaveTo_97q45_137",Se="_panelEnter_97q45_141",He="_panelEnterFrom_97q45_147",De="_panelEnterTo_97q45_152",Ie="_panelLeave_97q45_157",Te="_panelLeaveFrom_97q45_162",we="_panelLeaveTo_97q45_167",a={modal:pe,overlay:me,normalOverlay:Ce,darkerOverlay:fe,contents:ye,dialog:ge,fullscreen:he,scrollContainer:ve,mainContent:be,headerLess:Fe,header:_e,sticky:Ee,canScroll:Be,body:Ae,buttonContainer:ke,overlayEnter:xe,overlayEnterFrom:Oe,overlayEnterTo:Me,overlayLeave:je,overlayLeaveFrom:Le,overlayLeaveTo:qe,panelEnter:Se,panelEnterFrom:He,panelEnterTo:De,panelLeave:Ie,panelLeaveFrom:Te,panelLeaveTo:we},u=({children:o,onClose:s,header:n,closeLabel:r="閉じる",overlayOpacity:i="normal",showClose:E=!0,open:Z=!0,isStatic:$=!1,fullscreen:d=!1,ariaLabelledby:p,hero:m,stickyHeader:ee=!1,stickyFooter:ne=!1,...ae})=>{const te=ce(i),B=t.useRef(null),oe=t.useCallback(C=>{C!==null&&n==null&&p!=null?C.setAttribute("aria-labelledby",p):C!==null&&n==null&&p==null&&C.removeAttribute("aria-labelledby")},[p,n]),{scrollContainerRef:se,canScrollUp:re,canScrollDown:ue}=le();return e.jsx(A,{show:Z,children:e.jsxs(k,{ref:oe,static:$,onClose:s,className:c(a.modal,d&&a.fullscreen),initialFocus:B,...ae,children:[e.jsx(A.Child,{as:t.Fragment,enter:a.overlayEnter,enterFrom:a.overlayEnterFrom,enterTo:a.overlayEnterTo,leave:a.overlayLeave,leaveFrom:a.overlayLeaveFrom,leaveTo:a.overlayLeaveTo,children:e.jsx(k.Overlay,{className:c(a.overlay,a[te])})}),e.jsx(A.Child,{as:t.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs("div",{className:c(a.dialog,{[a.fullscreen]:d}),children:[n===void 0?e.jsx(ie,{as:"p",tabIndex:-1,ref:B,children:"ダイアログ"}):null,e.jsx("div",{className:a.scrollContainer,ref:se,children:e.jsxs("div",{className:c(a.mainContent,{[a.headerLess]:n===void 0&&m===void 0,[a.fullscreen]:d}),children:[m!==void 0?e.jsx("div",{className:a.hero,children:m}):null,n!==void 0?e.jsx(k.Title,{tabIndex:-1,ref:B,className:c(a.header,!m&&ee&&a.sticky,re&&a.canScroll),children:n}):null,e.jsx("div",{className:c(a.body,{[a.fullscreen]:d}),children:o}),e.jsx("div",{className:c(a.buttonContainer,E&&ne&&a.sticky,E&&ue&&a.canScroll),children:E&&e.jsx(de,{variant:"primary",onClick:s,"aria-label":r,children:r})})]})})]})})]})})};try{u.displayName="MessageHalfModal",u.__docgenInfo={description:"",displayName:"MessageHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:`ヘッダーを固定表示
heroが指定されている場合は無効`,name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}}}}}catch{}const Ke={title:"Modal/MessageHalfModal",component:u},x=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),l={header:"モーダル",children:e.jsx(x,{}),stickyHeader:!1,stickyFooter:!1},f={render:o=>{const[s,n]=t.useState(!0),r=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...o,open:s,onClose:r})]})},args:l},y={render:o=>{const[s,n]=t.useState(!1),r=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...o,open:s,onClose:r,fullscreen:!0})]})},args:l},g={render:o=>{const[s,n]=t.useState(!1),r=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{showClose:!1,...o,open:s,onClose:r})]})},args:l},h={render:o=>{const[s,n]=t.useState(!1),r=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...o,open:s,onClose:r})]})},args:{...l,"data-test-id":"message-half-modal-custom"}},v={render:o=>{const[s,n]=t.useState(!1),r=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...o,open:s,onClose:r})]})},args:{...l,id:"dialog-id"}},b={render:o=>{const[s,n]=t.useState(!1),r=t.useCallback(()=>{n(!1)},[]),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(u,{ariaLabelledby:i,...o,open:s,onClose:r,children:[e.jsx("h2",{id:i,children:"Heading"}),e.jsx(x,{})]})]})},args:{...l,header:void 0}},F={render:o=>{const[s,n]=t.useState(!1),r=t.useCallback(()=>{n(!1)},[]),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(u,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),ariaLabelledby:i,...o,open:s,onClose:r,children:[e.jsx("h2",{id:i,children:"Heading"}),e.jsx(x,{})]})]})},args:{...l,header:void 0}},_={render:o=>{const[s,n]=t.useState(!0),r=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...o,open:s,onClose:r})]})},args:{...l,stickyHeader:!0,stickyFooter:!0}};var O,M,j;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(M=f.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var L,q,S;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(q=y.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var H,D,I;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,w,N;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(w=h.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var V,R,W;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(R=v.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var G,P,U;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(P=b.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var z,J,K;F.parameters={...F.parameters,docs:{...(z=F.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(J=F.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Qe=["Default","Fullscreen","NoCloseButton","WithCustomDataAttribute","WithId","CustomHeader","WithHero","StickyHeaderAndFooter"];export{b as CustomHeader,f as Default,y as Fullscreen,g as NoCloseButton,_ as StickyHeaderAndFooter,h as WithCustomDataAttribute,F as WithHero,v as WithId,Qe as __namedExportsOrder,Ke as default};
