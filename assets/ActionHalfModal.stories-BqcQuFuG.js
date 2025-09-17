import{j as e}from"./jsx-runtime-DuyR_K1q.js";import{r as a}from"./index-yUhCOHB4.js";import{c}from"./clsx-B-dksMZM.js";import{u as Pe,X as Ve,P as H,L as D,$ as Ne,V as qe}from"./VisuallyHidden-EwnkIPnb.js";import{o as Re}from"./style-BnM3_UOs.js";import{B as d}from"./Button-BdVNOR42.js";import{B as be}from"./Box-CAcJb2uI.js";import{F as Fe}from"./Flex-CtKWwGeh.js";import{T as ve}from"./Text-yZvi5lu_.js";import"./index-DGmQaTsW.js";import"./component-NUmYR5Q2.js";import"./useIcon-BaHTXOx7.js";import"./Icon-tldTwAAd.js";import"./ArrowBDownIcon-DhMIqqai.js";import"./UnfoldMoreIcon-BpmwIn3S.js";const ze="_modal_16p13_1",We="_overlay_16p13_8",Xe="_normalOverlay_16p13_13",$e="_darkerOverlay_16p13_17",Ge="_contents_16p13_21",Ue="_dialog_16p13_25",Je="_fullscreen_16p13_42",Ke="_scrollContainer_16p13_46",Qe="_mainContent_16p13_51",Ye="_headerLess_16p13_56",Ze="_header_16p13_56",en="_sticky_16p13_77",nn="_canScroll_16p13_85",tn="_body_16p13_89",on="_buttonContainer_16p13_108",an="_overlayEnter_16p13_124",rn="_overlayEnterFrom_16p13_130",sn="_overlayEnterTo_16p13_134",un="_overlayLeave_16p13_138",ln="_overlayLeaveFrom_16p13_143",cn="_overlayLeaveTo_16p13_147",dn="_panelEnter_16p13_151",pn="_panelEnterFrom_16p13_157",mn="_panelEnterTo_16p13_162",Cn="_panelLeave_16p13_167",yn="_panelLeaveFrom_16p13_172",fn="_panelLeaveTo_16p13_177",o={modal:ze,overlay:We,normalOverlay:Xe,darkerOverlay:$e,contents:Ge,dialog:Ue,fullscreen:Je,scrollContainer:Ke,mainContent:Qe,headerLess:Ye,header:Ze,sticky:en,canScroll:nn,body:tn,buttonContainer:on,overlayEnter:an,overlayEnterFrom:rn,overlayEnterTo:sn,overlayLeave:un,overlayLeaveFrom:ln,overlayLeaveTo:cn,panelEnter:dn,panelEnterFrom:pn,panelEnterTo:mn,panelLeave:Cn,panelLeaveFrom:yn,panelLeaveTo:fn},u=({children:r,onClose:s,onPrimaryAction:n,onSecondaryAction:t,header:l,primaryActionLabel:O,secondaryActionLabel:j,primaryActionColor:Ee,closeLabel:S="閉じる",overlayOpacity:Be="normal",showClose:ke=!0,open:_e=!0,isStatic:Oe=!1,fullscreen:p=!1,ariaLabelledby:m,hero:L,stickyHeader:je=!1,stickyFooter:Le=!1,maxHeight:Me="calc(100% - 24px)",...Se})=>{const He=Re(Be),M=a.useRef(null),De=a.useCallback(C=>{C!==null&&(l==null||l===void 0)&&m!=null?C.setAttribute("aria-labelledby",m):C!==null&&(l==null||l===void 0)&&m==null&&C.removeAttribute("aria-labelledby")},[m,l]),{scrollContainerRef:Ie,canScrollUp:we,canScrollDown:Te}=Pe();return e.jsx(Ve,{show:_e,children:e.jsxs(H,{ref:De,static:Oe,onClose:s,className:c(o.modal,p&&o.fullscreen),initialFocus:M,...Se,children:[e.jsx(D,{as:a.Fragment,enter:o.overlayEnter,enterFrom:o.overlayEnterFrom,enterTo:o.overlayEnterTo,leave:o.overlayLeave,leaveFrom:o.overlayLeaveFrom,leaveTo:o.overlayLeaveTo,children:e.jsx("div",{className:c(o.overlay,o[He])})}),e.jsx(D,{as:a.Fragment,enter:o.panelEnter,enterFrom:o.panelEnterFrom,enterTo:o.panelEnterTo,leave:o.panelLeave,leaveFrom:o.panelLeaveFrom,leaveTo:o.panelLeaveTo,children:e.jsxs(Ne,{className:c(o.dialog,{[o.fullscreen]:p}),style:{maxHeight:Me},children:[l==null?e.jsx(qe,{as:"p",tabIndex:-1,ref:M,children:"ダイアログ"}):null,e.jsx("div",{className:o.scrollContainer,ref:Ie,children:e.jsxs("div",{className:c(o.mainContent,{[o.headerLess]:l==null&&L===void 0,[o.fullscreen]:p}),children:[L!==void 0?e.jsx("div",{className:o.hero,children:L}):null,l!=null?e.jsx(H.Title,{tabIndex:-1,ref:M,className:c(o.header,je&&o.sticky,we&&o.canScroll),children:l}):null,e.jsx("div",{className:c(o.body,{[o.fullscreen]:p}),children:r}),e.jsxs("div",{className:c(o.buttonContainer,Le&&o.sticky,Te&&o.canScroll),children:[n&&O&&e.jsx(d,{block:!0,onClick:n,"aria-label":O,variant:Ee,children:O}),t&&j&&e.jsx(d,{block:!0,variant:"secondary",onClick:t,"aria-label":j,children:j}),ke&&e.jsx(d,{variant:"text",onClick:s,"aria-label":S,children:S})]})]})})]})})]})})};try{u.displayName="ActionHalfModal",u.__docgenInfo={description:"",displayName:"ActionHalfModal",props:{children:{defaultValue:null,description:"コンテンツとして表示する内容",name:"children",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキストまたはReactノード",name:"header",required:!1,type:{name:"ReactNode"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"primary"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:"ヘッダーを固定表示",name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:{value:"calc(100% - 24px)"},description:"モーダルの最大の高さ",name:"maxHeight",required:!1,type:{name:"CSSMaxWidth"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションボタンが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const Sn={title:"Modal/ActionHalfModal",component:u},xe=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),i={header:"モーダル",children:e.jsx(xe,{}),stickyHeader:!1,stickyFooter:!1},y={render:r=>{const[s,n]=a.useState(!0),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{primaryActionLabel:"アクション",onPrimaryAction:t,...r,open:s,onClose:t})]})},args:i},f={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{primaryActionLabel:"アクション1",onPrimaryAction:t,secondaryActionLabel:"アクション2",onSecondaryAction:t,...r,open:s,onClose:t})]})},args:i},A={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...r,open:s,onClose:t,fullscreen:!0})]})},args:i},g={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{onPrimaryAction:t,primaryActionLabel:"確認",showClose:!1,...r,open:s,onClose:t})]})},args:{...i,"data-test-id":"some-id"}},h={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:t,overlayOpacity:"darker",closeLabel:"キャンセル",...r,open:s,onClose:t})]})},args:i},b={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...r,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:t,open:s,onClose:t})]})},args:{...i,id:"dialog-id"}},F={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]),l="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(u,{ariaLabelledby:l,primaryActionLabel:"Action",onPrimaryAction:t,...r,open:s,onClose:t,children:[e.jsx("h2",{id:l,children:"Header"}),e.jsx(xe,{})]})]})},args:{...i,header:void 0}},v={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),primaryActionLabel:"Action",onPrimaryAction:t,...r,open:s,onClose:t,children:e.jsx("p",{children:"Content"})})]})},args:{...i}},x={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{primaryActionLabel:"Action",onPrimaryAction:t,...r,open:s,onClose:t,children:e.jsx("p",{children:"Content"})})]})},args:{...i,fullscreen:!0,hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315})}},E={render:r=>{const[s,n]=a.useState(!0),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{primaryActionLabel:"アクション",onPrimaryAction:t,...r,open:s,onClose:t})]})},args:{...i,stickyHeader:!0,stickyFooter:!0}},B={render:r=>{const[s,n]=a.useState(!0),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{primaryActionLabel:"アクション",onPrimaryAction:t,...r,open:s,onClose:t})]})},args:{...i,header:e.jsx(be,{children:e.jsxs(Fe,{gap:"xs",alignItems:"center",justifyContent:"space-between",children:[e.jsx(ve,{size:"lg",color:"main",children:"カスタムヘッダー"}),e.jsx(d,{variant:"text",size:"small",children:"設定"})]})}),stickyHeader:!0}},k={render:r=>{const[s,n]=a.useState(!0),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{primaryActionLabel:"アクション",onPrimaryAction:t,...r,open:s,onClose:t})]})},args:{...i,header:e.jsx(be,{children:e.jsxs(Fe,{gap:"xs",alignItems:"center",justifyContent:"space-between",children:[e.jsx(ve,{size:"lg",color:"main",children:"Hero付きカスタムヘッダー"}),e.jsx(d,{variant:"text",size:"small",children:"メニュー"})]})}),hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),stickyHeader:!0}},_={render:r=>{const[s,n]=a.useState(!1),t=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{primaryActionLabel:"アクション",onPrimaryAction:t,...r,open:s,onClose:t})]})},args:{...i,maxHeight:"80vh"}};var I,w,T;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(w=y.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var P,V,N;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(V=f.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var q,R,z;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(R=A.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var W,X,$;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(X=g.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var G,U,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(U=h.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,Q,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,oe,ae;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,se,ue;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ue=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var le,ie,ce;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,me;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var Ce,ye,fe;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(fe=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Ae,ge,he;_.parameters={..._.parameters,docs:{...(Ae=_.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
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
    maxHeight: '80vh'
  }
}`,...(he=(ge=_.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const Hn=["Default","Secondary","Fullscreen","NoCloseButton","Customized","WithId","CustomHeader","WithHero","WithHeroAndFullScreen","StickyHeaderAndFooter","ReactNodeHeader","ReactNodeHeaderWithHero","CustomMaxHeight"];export{F as CustomHeader,_ as CustomMaxHeight,h as Customized,y as Default,A as Fullscreen,g as NoCloseButton,B as ReactNodeHeader,k as ReactNodeHeaderWithHero,f as Secondary,E as StickyHeaderAndFooter,v as WithHero,x as WithHeroAndFullScreen,b as WithId,Hn as __namedExportsOrder,Sn as default};
