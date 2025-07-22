import{j as e}from"./jsx-runtime-DuyR_K1q.js";import{r as a}from"./index-yUhCOHB4.js";import{c}from"./clsx-B-dksMZM.js";import{u as He,X as De,P as M,L as H,$ as Ie,V as we}from"./VisuallyHidden-EwnkIPnb.js";import{o as Te}from"./style-BnM3_UOs.js";import{B as d}from"./Button-C5E0Dnb8.js";import{B as fe}from"./Box-BmVexmXc.js";import{F as Ae}from"./Flex-BZjMOQJE.js";import{T as ge}from"./Text-BVcE78oz.js";import"./index-DGmQaTsW.js";import"./component-NUmYR5Q2.js";import"./useIcon-Cvrme7RA.js";import"./Icon-BgZ2ddQx.js";import"./ArrowBDownIcon-DhMIqqai.js";import"./UnfoldMoreIcon-BpmwIn3S.js";const Pe="_modal_1imay_1",Ne="_overlay_1imay_8",Ve="_normalOverlay_1imay_13",qe="_darkerOverlay_1imay_17",Re="_contents_1imay_21",ze="_dialog_1imay_25",We="_fullscreen_1imay_43",Xe="_scrollContainer_1imay_47",$e="_mainContent_1imay_52",Ge="_headerLess_1imay_57",Ue="_header_1imay_57",Je="_sticky_1imay_78",Ke="_canScroll_1imay_86",Qe="_body_1imay_90",Ye="_buttonContainer_1imay_109",Ze="_overlayEnter_1imay_125",en="_overlayEnterFrom_1imay_131",nn="_overlayEnterTo_1imay_135",tn="_overlayLeave_1imay_139",on="_overlayLeaveFrom_1imay_144",an="_overlayLeaveTo_1imay_148",rn="_panelEnter_1imay_152",sn="_panelEnterFrom_1imay_158",un="_panelEnterTo_1imay_163",ln="_panelLeave_1imay_168",cn="_panelLeaveFrom_1imay_173",dn="_panelLeaveTo_1imay_178",o={modal:Pe,overlay:Ne,normalOverlay:Ve,darkerOverlay:qe,contents:Re,dialog:ze,fullscreen:We,scrollContainer:Xe,mainContent:$e,headerLess:Ge,header:Ue,sticky:Je,canScroll:Ke,body:Qe,buttonContainer:Ye,overlayEnter:Ze,overlayEnterFrom:en,overlayEnterTo:nn,overlayLeave:tn,overlayLeaveFrom:on,overlayLeaveTo:an,panelEnter:rn,panelEnterFrom:sn,panelEnterTo:un,panelLeave:ln,panelLeaveFrom:cn,panelLeaveTo:dn},l=({children:r,onClose:s,onPrimaryAction:n,onSecondaryAction:t,header:u,primaryActionLabel:_,secondaryActionLabel:O,primaryActionColor:be,closeLabel:S="閉じる",overlayOpacity:Fe="normal",showClose:ve=!0,open:xe=!0,isStatic:Be=!1,fullscreen:p=!1,ariaLabelledby:m,hero:j,stickyHeader:Ee=!1,stickyFooter:ke=!1,..._e})=>{const Oe=Te(Fe),L=a.useRef(null),je=a.useCallback(y=>{y!==null&&(u==null||u===void 0)&&m!=null?y.setAttribute("aria-labelledby",m):y!==null&&(u==null||u===void 0)&&m==null&&y.removeAttribute("aria-labelledby")},[m,u]),{scrollContainerRef:Le,canScrollUp:Se,canScrollDown:Me}=He();return e.jsx(De,{show:xe,children:e.jsxs(M,{ref:je,static:Be,onClose:s,className:c(o.modal,p&&o.fullscreen),initialFocus:L,..._e,children:[e.jsx(H,{as:a.Fragment,enter:o.overlayEnter,enterFrom:o.overlayEnterFrom,enterTo:o.overlayEnterTo,leave:o.overlayLeave,leaveFrom:o.overlayLeaveFrom,leaveTo:o.overlayLeaveTo,children:e.jsx("div",{className:c(o.overlay,o[Oe])})}),e.jsx(H,{as:a.Fragment,enter:o.panelEnter,enterFrom:o.panelEnterFrom,enterTo:o.panelEnterTo,leave:o.panelLeave,leaveFrom:o.panelLeaveFrom,leaveTo:o.panelLeaveTo,children:e.jsxs(Ie,{className:c(o.dialog,{[o.fullscreen]:p}),children:[u==null?e.jsx(we,{as:"p",tabIndex:-1,ref:L,children:"ダイアログ"}):null,e.jsx("div",{className:o.scrollContainer,ref:Le,children:e.jsxs("div",{className:c(o.mainContent,{[o.headerLess]:u==null&&j===void 0,[o.fullscreen]:p}),children:[j!==void 0?e.jsx("div",{className:o.hero,children:j}):null,u!=null?e.jsx(M.Title,{tabIndex:-1,ref:L,className:c(o.header,Ee&&o.sticky,Se&&o.canScroll),children:u}):null,e.jsx("div",{className:c(o.body,{[o.fullscreen]:p}),children:r}),e.jsxs("div",{className:c(o.buttonContainer,ke&&o.sticky,Me&&o.canScroll),children:[n&&_&&e.jsx(d,{block:!0,onClick:n,"aria-label":_,variant:be,children:_}),t&&O&&e.jsx(d,{block:!0,variant:"secondary",onClick:t,"aria-label":O,children:O}),ve&&e.jsx(d,{variant:"text",onClick:s,"aria-label":S,children:S})]})]})})]})})]})})};try{l.displayName="ActionHalfModal",l.__docgenInfo={description:"",displayName:"ActionHalfModal",props:{children:{defaultValue:null,description:"コンテンツとして表示する内容",name:"children",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキストまたはReactノード",name:"header",required:!1,type:{name:"ReactNode"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"primary"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:"ヘッダーを固定表示",name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションボタンが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const _n={title:"Modal/ActionHalfModal",component:l},he=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),i={header:"モーダル",children:e.jsx(he,{}),stickyHeader:!1,stickyFooter:!1},C={render:r=>{const[s,n]=a.useState(!0),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション",onPrimaryAction:t,...r,open:s,onClose:t})]})},args:i},f={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション1",onPrimaryAction:t,secondaryActionLabel:"アクション2",onSecondaryAction:t,...r,open:s,onClose:t})]})},args:i},A={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{...r,open:s,onClose:t,fullscreen:!0})]})},args:i},g={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{onPrimaryAction:t,primaryActionLabel:"確認",showClose:!1,...r,open:s,onClose:t})]})},args:{...i,"data-test-id":"some-id"}},h={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:t,overlayOpacity:"darker",closeLabel:"キャンセル",...r,open:s,onClose:t})]})},args:i},b={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{...r,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:t,open:s,onClose:t})]})},args:{...i,id:"dialog-id"}},F={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]),u="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(l,{ariaLabelledby:u,primaryActionLabel:"Action",onPrimaryAction:t,...r,open:s,onClose:t,children:[e.jsx("h2",{id:u,children:"Header"}),e.jsx(he,{})]})]})},args:{...i,header:void 0}},v={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),primaryActionLabel:"Action",onPrimaryAction:t,...r,open:s,onClose:t,children:e.jsx("p",{children:"Content"})})]})},args:{...i}},x={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"Action",onPrimaryAction:t,...r,open:s,onClose:t,children:e.jsx("p",{children:"Content"})})]})},args:{...i,fullscreen:!0,hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315})}},B={render:r=>{const[s,n]=a.useState(!0),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション",onPrimaryAction:t,...r,open:s,onClose:t})]})},args:{...i,stickyHeader:!0,stickyFooter:!0}},E={render:r=>{const[s,n]=a.useState(!0),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション",onPrimaryAction:t,...r,open:s,onClose:t})]})},args:{...i,header:e.jsx(fe,{children:e.jsxs(Ae,{gap:"xs",alignItems:"center",justifyContent:"space-between",children:[e.jsx(ge,{size:"lg",color:"main",children:"カスタムヘッダー"}),e.jsx(d,{variant:"text",size:"small",children:"設定"})]})}),stickyHeader:!0}},k={render:r=>{const[s,n]=a.useState(!0),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(l,{primaryActionLabel:"アクション",onPrimaryAction:t,...r,open:s,onClose:t})]})},args:{...i,header:e.jsx(fe,{children:e.jsxs(Ae,{gap:"xs",alignItems:"center",justifyContent:"space-between",children:[e.jsx(ge,{size:"lg",color:"main",children:"Hero付きカスタムヘッダー"}),e.jsx(d,{variant:"text",size:"small",children:"メニュー"})]})}),hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),stickyHeader:!0}};var D,I,w;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(w=(I=C.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var T,P,N;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(P=f.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var V,q,R;A.parameters={...A.parameters,docs:{...(V=A.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(q=A.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var z,W,X;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var $,G,U;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(G=h.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=F.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,oe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,re,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ue,le,ie;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ie=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,pe;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
    header: <Box>
        <Flex gap="xs" alignItems="center" justifyContent="space-between">
          <Text size="lg" color="main">
            カスタムヘッダー
          </Text>
          <Button variant="text" size="small">
            設定
          </Button>
        </Flex>
      </Box>,
    stickyHeader: true
  }
}`,...(pe=(de=E.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ye,Ce;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
    header: <Box>
        <Flex gap="xs" alignItems="center" justifyContent="space-between">
          <Text size="lg" color="main">
            Hero付きカスタムヘッダー
          </Text>
          <Button variant="text" size="small">
            メニュー
          </Button>
        </Flex>
      </Box>,
    hero: <img src="/images/placeholder.svg" alt="Illustration: Modal" style={{
      width: '100%',
      height: 'auto',
      verticalAlign: 'bottom'
    }} width={560} height={315} />,
    stickyHeader: true
  }
}`,...(Ce=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};const On=["Default","Secondary","Fullscreen","NoCloseButton","Customized","WithId","CustomHeader","WithHero","WithHeroAndFullScreen","StickyHeaderAndFooter","ReactNodeHeader","ReactNodeHeaderWithHero"];export{F as CustomHeader,h as Customized,C as Default,A as Fullscreen,g as NoCloseButton,E as ReactNodeHeader,k as ReactNodeHeaderWithHero,f as Secondary,B as StickyHeaderAndFooter,v as WithHero,x as WithHeroAndFullScreen,b as WithId,On as __namedExportsOrder,_n as default};
