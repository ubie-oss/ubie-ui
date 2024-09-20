import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{r as t}from"./index-DX35FyXq.js";import{c}from"./clsx-B-dksMZM.js";import{u as ve,X as Ee,P as j,L as S,$ as Be,V as _e}from"./VisuallyHidden-DKw5kirp.js";import{o as ke}from"./style-D1Pgu1yr.js";import{B as x}from"./Button-Zu2O9MZl.js";import"./index-I0DSigrg.js";import"./component-Jol18N2F.js";import"./VariantIcon-C9Tk4Z_m.js";const Oe="_modal_7sue4_1",xe="_overlay_7sue4_8",Le="_normalOverlay_7sue4_13",je="_darkerOverlay_7sue4_17",Se="_contents_7sue4_21",Me="_dialog_7sue4_25",De="_fullscreen_7sue4_43",He="_scrollContainer_7sue4_47",Ie="_mainContent_7sue4_52",Te="_headerLess_7sue4_57",we="_header_7sue4_57",Pe="_sticky_7sue4_78",Ve="_canScroll_7sue4_83",qe="_body_7sue4_87",Ne="_buttonContainer_7sue4_98",Re="_overlayEnter_7sue4_114",We="_overlayEnterFrom_7sue4_120",ze="_overlayEnterTo_7sue4_124",Xe="_overlayLeave_7sue4_128",$e="_overlayLeaveFrom_7sue4_133",Ge="_overlayLeaveTo_7sue4_137",Ue="_panelEnter_7sue4_141",Je="_panelEnterFrom_7sue4_147",Ke="_panelEnterTo_7sue4_152",Qe="_panelLeave_7sue4_157",Ye="_panelLeaveFrom_7sue4_162",Ze="_panelLeaveTo_7sue4_167",a={modal:Oe,overlay:xe,normalOverlay:Le,darkerOverlay:je,contents:Se,dialog:Me,fullscreen:De,scrollContainer:He,mainContent:Ie,headerLess:Te,header:we,sticky:Pe,canScroll:Ve,body:qe,buttonContainer:Ne,overlayEnter:Re,overlayEnterFrom:We,overlayEnterTo:ze,overlayLeave:Xe,overlayLeaveFrom:$e,overlayLeaveTo:Ge,panelEnter:Ue,panelEnterFrom:Je,panelEnterTo:Ke,panelLeave:Qe,panelLeaveFrom:Ye,panelLeaveTo:Ze},s=({children:r,onClose:u,onPrimaryAction:n,onSecondaryAction:o,header:l,primaryActionLabel:_,secondaryActionLabel:k,primaryActionColor:ie,closeLabel:L="閉じる",overlayOpacity:ce="normal",showClose:de=!0,open:pe=!0,isStatic:me=!1,fullscreen:d=!1,ariaLabelledby:p,hero:m,stickyHeader:Ce=!1,stickyFooter:ye=!1,...Ae})=>{const fe=ke(ce),O=t.useRef(null),be=t.useCallback(C=>{C!==null&&l==null&&p!=null?C.setAttribute("aria-labelledby",p):C!==null&&l==null&&p==null&&C.removeAttribute("aria-labelledby")},[p,l]),{scrollContainerRef:he,canScrollUp:Fe,canScrollDown:ge}=ve();return e.jsx(Ee,{show:pe,children:e.jsxs(j,{ref:be,static:me,onClose:u,className:c(a.modal,d&&a.fullscreen),initialFocus:O,...Ae,children:[e.jsx(S,{as:t.Fragment,enter:a.overlayEnter,enterFrom:a.overlayEnterFrom,enterTo:a.overlayEnterTo,leave:a.overlayLeave,leaveFrom:a.overlayLeaveFrom,leaveTo:a.overlayLeaveTo,children:e.jsx("div",{className:c(a.overlay,a[fe])})}),e.jsx(S,{as:t.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs(Be,{className:c(a.dialog,{[a.fullscreen]:d}),children:[l===void 0?e.jsx(_e,{as:"p",tabIndex:-1,ref:O,children:"ダイアログ"}):null,e.jsx("div",{className:a.scrollContainer,ref:he,children:e.jsxs("div",{className:c(a.mainContent,{[a.headerLess]:l===void 0&&m===void 0,[a.fullscreen]:d}),children:[m!==void 0?e.jsx("div",{className:a.hero,children:m}):null,l!==void 0?e.jsx(j.Title,{tabIndex:-1,ref:O,className:c(a.header,!m&&Ce&&a.sticky,Fe&&a.canScroll),children:l}):null,e.jsx("div",{className:c(a.body,{[a.fullscreen]:d}),children:r}),e.jsxs("div",{className:c(a.buttonContainer,ye&&a.sticky,ge&&a.canScroll),children:[n&&_&&e.jsx(x,{block:!0,onClick:n,"aria-label":_,variant:ie,children:_}),o&&k&&e.jsx(x,{block:!0,variant:"secondary",onClick:o,"aria-label":k,children:k}),de&&e.jsx(x,{variant:"text",onClick:u,"aria-label":L,children:L})]})]})})]})})]})})};try{s.displayName="ActionHalfModal",s.__docgenInfo={description:"",displayName:"ActionHalfModal",props:{children:{defaultValue:null,description:"コンテンツとして表示する内容",name:"children",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"primary"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:`ヘッダーを固定表示
heroが指定されている場合は無効`,name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションボタンが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const cn={title:"Modal/ActionHalfModal",component:s},le=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),i={header:"モーダル",children:e.jsx(le,{}),stickyHeader:!1,stickyFooter:!1},y={render:r=>{const[u,n]=t.useState(!0),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"アクション",onPrimaryAction:o,...r,open:u,onClose:o})]})},args:i},A={render:r=>{const[u,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"アクション1",onPrimaryAction:o,secondaryActionLabel:"アクション2",onSecondaryAction:o,...r,open:u,onClose:o})]})},args:i},f={render:r=>{const[u,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...r,open:u,onClose:o,fullscreen:!0})]})},args:i},b={render:r=>{const[u,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{onPrimaryAction:o,primaryActionLabel:"確認",showClose:!1,...r,open:u,onClose:o})]})},args:{...i,"data-test-id":"some-id"}},h={render:r=>{const[u,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:o,overlayOpacity:"darker",closeLabel:"キャンセル",...r,open:u,onClose:o})]})},args:i},F={render:r=>{const[u,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...r,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:o,open:u,onClose:o})]})},args:{...i,id:"dialog-id"}},g={render:r=>{const[u,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]),l="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(s,{ariaLabelledby:l,primaryActionLabel:"Action",onPrimaryAction:o,...r,open:u,onClose:o,children:[e.jsx("h2",{id:l,children:"Header"}),e.jsx(le,{})]})]})},args:{...i,header:void 0}},v={render:r=>{const[u,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),primaryActionLabel:"Action",onPrimaryAction:o,...r,open:u,onClose:o,children:e.jsx("p",{children:"Content"})})]})},args:{...i}},E={render:r=>{const[u,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"Action",onPrimaryAction:o,...r,open:u,onClose:o,children:e.jsx("p",{children:"Content"})})]})},args:{...i,fullscreen:!0,hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315})}},B={render:r=>{const[u,n]=t.useState(!0),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"アクション",onPrimaryAction:o,...r,open:u,onClose:o})]})},args:{...i,stickyHeader:!0,stickyFooter:!0}};var M,D,H;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(w=(T=A.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var P,V,q;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(V=f.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var N,R,W;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(W=(R=b.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var z,X,$;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(X=h.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var G,U,J;F.parameters={...F.parameters,docs:{...(G=F.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(U=F.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,Q,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,ae,te;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,ue,se;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:se.source}}};const dn=["Default","Secondary","Fullscreen","NoCloseButton","Customized","WithId","CustomHeader","WithHero","WithHeroAndFullScreen","StickyHeaderAndFooter"];export{g as CustomHeader,h as Customized,y as Default,f as Fullscreen,b as NoCloseButton,A as Secondary,B as StickyHeaderAndFooter,v as WithHero,E as WithHeroAndFullScreen,F as WithId,dn as __namedExportsOrder,cn as default};
