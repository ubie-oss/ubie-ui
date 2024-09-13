import{j as e}from"./jsx-runtime-69eee039.js";import{r as a}from"./index-7c191284.js";import{c}from"./clsx-1229b3e0.js";import{u as ve,t as x,_ as L,V as Ee}from"./VisuallyHidden-d64fca01.js";import{o as Be}from"./style-282c756e.js";import{B as j}from"./Button-f48927cf.js";import"./index-ecbee218.js";import"./component-22a2265d.js";import"./VariantIcon-f53fea35.js";const _e="_modal_7sue4_1",ke="_overlay_7sue4_8",Oe="_normalOverlay_7sue4_13",xe="_darkerOverlay_7sue4_17",Le="_contents_7sue4_21",je="_dialog_7sue4_25",Se="_fullscreen_7sue4_43",Me="_scrollContainer_7sue4_47",De="_mainContent_7sue4_52",He="_headerLess_7sue4_57",Ie="_header_7sue4_57",Te="_sticky_7sue4_78",we="_canScroll_7sue4_83",Ve="_body_7sue4_87",Pe="_buttonContainer_7sue4_98",qe="_overlayEnter_7sue4_114",Ne="_overlayEnterFrom_7sue4_120",Re="_overlayEnterTo_7sue4_124",We="_overlayLeave_7sue4_128",ze="_overlayLeaveFrom_7sue4_133",Ge="_overlayLeaveTo_7sue4_137",Ue="_panelEnter_7sue4_141",Je="_panelEnterFrom_7sue4_147",Ke="_panelEnterTo_7sue4_152",Qe="_panelLeave_7sue4_157",Xe="_panelLeaveFrom_7sue4_162",Ye="_panelLeaveTo_7sue4_167",t={modal:_e,overlay:ke,normalOverlay:Oe,darkerOverlay:xe,contents:Le,dialog:je,fullscreen:Se,scrollContainer:Me,mainContent:De,headerLess:He,header:Ie,sticky:Te,canScroll:we,body:Ve,buttonContainer:Pe,overlayEnter:qe,overlayEnterFrom:Ne,overlayEnterTo:Re,overlayLeave:We,overlayLeaveFrom:ze,overlayLeaveTo:Ge,panelEnter:Ue,panelEnterFrom:Je,panelEnterTo:Ke,panelLeave:Qe,panelLeaveFrom:Xe,panelLeaveTo:Ye},s=({children:u,onClose:r,onPrimaryAction:n,onSecondaryAction:o,header:l,primaryActionLabel:_,secondaryActionLabel:k,primaryActionColor:ie,closeLabel:S="閉じる",overlayOpacity:ce="normal",showClose:de=!0,open:pe=!0,isStatic:me=!1,fullscreen:d=!1,ariaLabelledby:p,hero:m,stickyHeader:Ce=!1,stickyFooter:ye=!1,...Ae})=>{const fe=Be(ce),O=a.useRef(null),Fe=a.useCallback(C=>{C!==null&&l==null&&p!=null?C.setAttribute("aria-labelledby",p):C!==null&&l==null&&p==null&&C.removeAttribute("aria-labelledby")},[p,l]),{scrollContainerRef:be,canScrollUp:he,canScrollDown:ge}=ve();return e.jsx(x,{show:pe,children:e.jsxs(L,{ref:Fe,static:me,onClose:r,className:c(t.modal,d&&t.fullscreen),initialFocus:O,...Ae,children:[e.jsx(x.Child,{as:a.Fragment,enter:t.overlayEnter,enterFrom:t.overlayEnterFrom,enterTo:t.overlayEnterTo,leave:t.overlayLeave,leaveFrom:t.overlayLeaveFrom,leaveTo:t.overlayLeaveTo,children:e.jsx(L.Overlay,{className:c(t.overlay,t[fe])})}),e.jsx(x.Child,{as:a.Fragment,enter:t.panelEnter,enterFrom:t.panelEnterFrom,enterTo:t.panelEnterTo,leave:t.panelLeave,leaveFrom:t.panelLeaveFrom,leaveTo:t.panelLeaveTo,children:e.jsxs("div",{className:c(t.dialog,{[t.fullscreen]:d}),children:[l===void 0?e.jsx(Ee,{as:"p",tabIndex:-1,ref:O,children:"ダイアログ"}):null,e.jsx("div",{className:t.scrollContainer,ref:be,children:e.jsxs("div",{className:c(t.mainContent,{[t.headerLess]:l===void 0&&m===void 0,[t.fullscreen]:d}),children:[m!==void 0?e.jsx("div",{className:t.hero,children:m}):null,l!==void 0?e.jsx(L.Title,{tabIndex:-1,ref:O,className:c(t.header,!m&&Ce&&t.sticky,he&&t.canScroll),children:l}):null,e.jsx("div",{className:c(t.body,{[t.fullscreen]:d}),children:u}),e.jsxs("div",{className:c(t.buttonContainer,ye&&t.sticky,ge&&t.canScroll),children:[n&&_&&e.jsx(j,{block:!0,onClick:n,"aria-label":_,variant:ie,children:_}),o&&k&&e.jsx(j,{block:!0,variant:"secondary",onClick:o,"aria-label":k,children:k}),de&&e.jsx(j,{variant:"text",onClick:r,"aria-label":S,children:S})]})]})})]})})]})})};try{s.displayName="ActionHalfModal",s.__docgenInfo={description:"",displayName:"ActionHalfModal",props:{children:{defaultValue:null,description:"コンテンツとして表示する内容",name:"children",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:`ヘッダーを固定表示
heroが指定されている場合は無効`,name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションボタンが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const sn={title:"Modal/ActionHalfModal",component:s},le=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),i={header:"モーダル",children:e.jsx(le,{}),stickyHeader:!1,stickyFooter:!1},y={render:u=>{const[r,n]=a.useState(!0),o=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"アクション",onPrimaryAction:o,...u,open:r,onClose:o})]})},args:i},A={render:u=>{const[r,n]=a.useState(!1),o=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"アクション1",onPrimaryAction:o,secondaryActionLabel:"アクション2",onSecondaryAction:o,...u,open:r,onClose:o})]})},args:i},f={render:u=>{const[r,n]=a.useState(!1),o=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...u,open:r,onClose:o,fullscreen:!0})]})},args:i},F={render:u=>{const[r,n]=a.useState(!1),o=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{onPrimaryAction:o,primaryActionLabel:"確認",showClose:!1,...u,open:r,onClose:o})]})},args:{...i,"data-test-id":"some-id"}},b={render:u=>{const[r,n]=a.useState(!1),o=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:o,overlayOpacity:"darker",closeLabel:"キャンセル",...u,open:r,onClose:o})]})},args:i},h={render:u=>{const[r,n]=a.useState(!1),o=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...u,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:o,open:r,onClose:o})]})},args:{...i,id:"dialog-id"}},g={render:u=>{const[r,n]=a.useState(!1),o=a.useCallback(()=>{n(!1)},[]),l="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(s,{ariaLabelledby:l,primaryActionLabel:"Action",onPrimaryAction:o,...u,open:r,onClose:o,children:[e.jsx("h2",{id:l,children:"Header"}),e.jsx(le,{})]})]})},args:{...i,header:void 0}},v={render:u=>{const[r,n]=a.useState(!1),o=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),primaryActionLabel:"Action",onPrimaryAction:o,...u,open:r,onClose:o,children:e.jsx("p",{children:"Content"})})]})},args:{...i}},E={render:u=>{const[r,n]=a.useState(!1),o=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"Action",onPrimaryAction:o,...u,open:r,onClose:o,children:e.jsx("p",{children:"Content"})})]})},args:{...i,fullscreen:!0,hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315})}},B={render:u=>{const[r,n]=a.useState(!0),o=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"アクション",onPrimaryAction:o,...u,open:r,onClose:o})]})},args:{...i,stickyHeader:!0,stickyFooter:!0}};var M,D,H;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal primaryActionLabel="アクション" onPrimaryAction={onClose} {...args} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(H=(D=y.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var I,T,w;A.parameters={...A.parameters,docs:{...(I=A.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal primaryActionLabel="アクション1" onPrimaryAction={onClose} secondaryActionLabel="アクション2" onSecondaryAction={onClose} {...args} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(w=(T=A.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var V,P,q;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal {...args} open={open} onClose={onClose} fullscreen />
      </>;
  },
  args: defaultArgs
}`,...(q=(P=f.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var N,R,W;F.parameters={...F.parameters,docs:{...(N=F.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal onPrimaryAction={onClose} primaryActionLabel="確認" showClose={false} {...args} open={open} onClose={onClose} />
      </>;
  },
  args: {
    ...defaultArgs,
    [\`data-test-id\`]: 'some-id'
  }
}`,...(W=(R=F.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var z,G,U;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal header="削除します" primaryActionColor="alert" primaryActionLabel="削除" onPrimaryAction={onClose} overlayOpacity="darker" closeLabel="キャンセル" {...args} open={open} onClose={onClose} />
      </>;
  },
  args: defaultArgs
}`,...(U=(G=b.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal {...args} data-test-id="some-id" primaryActionLabel="アクション" onPrimaryAction={onClose} open={open} onClose={onClose} />
      </>;
  },
  args: {
    ...defaultArgs,
    id: 'dialog-id'
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
        <ActionHalfModal ariaLabelledby={headerId} primaryActionLabel="Action" onPrimaryAction={onClose} {...args} open={open} onClose={onClose}>
          <h2 id={headerId}>Header</h2>
          <LongBody />
        </ActionHalfModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal hero={<img src="/images/placeholder.svg" alt="Illustration: Modal" style={{
        width: '100%',
        height: 'auto',
        verticalAlign: 'bottom'
      }} width={560} height={315} />} primaryActionLabel="Action" onPrimaryAction={onClose} {...args} open={open} onClose={onClose}>
          <p>Content</p>
        </ActionHalfModal>
      </>;
  },
  args: {
    ...defaultArgs
  }
}`,...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,te,ae;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal primaryActionLabel="Action" onPrimaryAction={onClose} {...args} open={open} onClose={onClose}>
          <p>Content</p>
        </ActionHalfModal>
      </>;
  },
  args: {
    ...defaultArgs,
    fullscreen: true,
    hero: <img src="/images/placeholder.svg" alt="Illustration: Modal" style={{
      width: '100%',
      height: 'auto',
      verticalAlign: 'bottom'
    }} width={560} height={315} />
  }
}`,...(ae=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ue,re,se;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    const onClose = useCallback(() => {
      setOpen(false);
    }, []);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionHalfModal primaryActionLabel="アクション" onPrimaryAction={onClose} {...args} open={open} onClose={onClose} />
      </>;
  },
  args: {
    ...defaultArgs,
    stickyHeader: true,
    stickyFooter: true
  }
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const ln=["Default","Secondary","Fullscreen","NoCloseButton","Customized","WithId","CustomHeader","WithHero","WithHeroAndFullScreen","StickyHeaderAndFooter"];export{g as CustomHeader,b as Customized,y as Default,f as Fullscreen,F as NoCloseButton,A as Secondary,B as StickyHeaderAndFooter,v as WithHero,E as WithHeroAndFullScreen,h as WithId,ln as __namedExportsOrder,sn as default};
