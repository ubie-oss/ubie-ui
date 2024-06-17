import{j as e}from"./jsx-runtime-69eee039.js";import{r as t}from"./index-7c191284.js";import{c}from"./clsx-1229b3e0.js";import{t as x,_ as L,V as Ce}from"./VisuallyHidden-4a81f45e.js";import{o as ye}from"./style-e9a2251f.js";import{B as k}from"./Button-a877a8c1.js";import"./index-ecbee218.js";import"./VariantIcon-b319dbe3.js";const ve="_modal_evanv_1",Ae="_overlay_evanv_8",fe="_normalOverlay_evanv_13",be="_darkerOverlay_evanv_17",he="_contents_evanv_21",Fe="_dialog_evanv_25",ge="_bodyScroll_evanv_42",Ee="_fullscreen_evanv_46",Be="_mainContent_evanv_50",_e="_headerLess_evanv_57",Oe="_header_evanv_57",xe="_body_evanv_42",Le="_buttonContainer_evanv_82",ke="_overlayEnter_evanv_87",je="_overlayEnterFrom_evanv_93",De="_overlayEnterTo_evanv_97",Me="_overlayLeave_evanv_101",Se="_overlayLeaveFrom_evanv_106",He="_overlayLeaveTo_evanv_110",Ie="_panelEnter_evanv_114",Te="_panelEnterFrom_evanv_120",we="_panelEnterTo_evanv_125",Ve="_panelLeave_evanv_130",Pe="_panelLeaveFrom_evanv_135",qe="_panelLeaveTo_evanv_140",a={modal:ve,overlay:Ae,normalOverlay:fe,darkerOverlay:be,contents:he,dialog:Fe,bodyScroll:ge,fullscreen:Ee,mainContent:Be,headerLess:_e,header:Oe,body:xe,buttonContainer:Le,overlayEnter:ke,overlayEnterFrom:je,overlayEnterTo:De,overlayLeave:Me,overlayLeaveFrom:Se,overlayLeaveTo:He,panelEnter:Ie,panelEnterFrom:Te,panelEnterTo:we,panelLeave:Ve,panelLeaveFrom:Pe,panelLeaveTo:qe},s=({children:u,onClose:r,onPrimaryAction:n,onSecondaryAction:o,header:l,primaryActionLabel:E,secondaryActionLabel:B,primaryActionColor:ue,closeLabel:j="閉じる",overlayOpacity:re="normal",showClose:se=!0,open:le=!0,isStatic:ie=!1,fullscreen:d=!1,bodyScroll:ce=!0,ariaLabelledby:p,hero:_,...de})=>{const pe=ye(re),O=t.useRef(null),me=t.useCallback(m=>{m!==null&&l==null&&p!=null?m.setAttribute("aria-labelledby",p):m!==null&&l==null&&p==null&&m.removeAttribute("aria-labelledby")},[p,l]);return e.jsx(x,{show:le,children:e.jsxs(L,{ref:me,static:ie,onClose:r,className:c(a.modal,d&&a.fullscreen),initialFocus:O,...de,children:[e.jsx(x.Child,{as:t.Fragment,enter:a.overlayEnter,enterFrom:a.overlayEnterFrom,enterTo:a.overlayEnterTo,leave:a.overlayLeave,leaveFrom:a.overlayLeaveFrom,leaveTo:a.overlayLeaveTo,children:e.jsx(L.Overlay,{className:c(a.overlay,a[pe])})}),e.jsx(x.Child,{as:t.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs("div",{className:c(a.dialog,{[a.fullscreen]:d,[a.bodyScroll]:ce}),children:[l===void 0?e.jsx(Ce,{as:"p",tabIndex:-1,ref:O,children:"ダイアログ"}):null,_!==void 0?e.jsx("div",{className:a.hero,children:_}):null,e.jsxs("div",{className:c(a.mainContent,{[a.headerLess]:l===void 0&&_===void 0,[a.fullscreen]:d}),children:[l!==void 0?e.jsx(L.Title,{tabIndex:-1,ref:O,className:a.header,children:l}):null,e.jsx("div",{className:c(a.body,{[a.fullscreen]:d}),children:u}),e.jsxs("div",{className:a.buttonContainer,children:[n&&E&&e.jsx(k,{block:!0,onClick:n,"aria-label":E,variant:ue,children:E}),o&&B&&e.jsx(k,{block:!0,variant:"secondary",onClick:o,"aria-label":B,children:B}),se&&e.jsx(k,{variant:"text",onClick:r,"aria-label":j,children:j})]})]})]})})]})})};try{s.displayName="ActionHalfModal",s.__docgenInfo={description:"",displayName:"ActionHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},bodyScroll:{defaultValue:{value:"true"},description:"モーダルボディ部分のスクロールを許可するかどうか",name:"bodyScroll",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションボタンが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const Ue={title:"Modal/ActionHalfModal",component:s},te=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),i={header:"モーダル",children:e.jsx(te,{})},C={render:u=>{const[r,n]=t.useState(!0),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"アクション",onPrimaryAction:o,...u,open:r,onClose:o})]})},args:i},y={render:u=>{const[r,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"アクション1",onPrimaryAction:o,secondaryActionLabel:"アクション2",onSecondaryAction:o,...u,open:r,onClose:o})]})},args:i},v={render:u=>{const[r,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...u,open:r,onClose:o,fullscreen:!0})]})},args:i},A={render:u=>{const[r,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{onPrimaryAction:o,primaryActionLabel:"確認",showClose:!1,...u,open:r,onClose:o})]})},args:{...i,"data-test-id":"some-id"}},f={render:u=>{const[r,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:o,overlayOpacity:"darker",closeLabel:"キャンセル",...u,open:r,onClose:o})]})},args:i},b={render:u=>{const[r,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...u,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:o,open:r,onClose:o})]})},args:{...i,id:"dialog-id"}},h={render:u=>{const[r,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]),l="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(s,{ariaLabelledby:l,primaryActionLabel:"Action",onPrimaryAction:o,...u,open:r,onClose:o,children:[e.jsx("h2",{id:l,children:"Header"}),e.jsx(te,{})]})]})},args:{...i,header:void 0}},F={render:u=>{const[r,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),primaryActionLabel:"Action",onPrimaryAction:o,...u,open:r,onClose:o,children:e.jsx("p",{children:"Content"})})]})},args:{...i}},g={render:u=>{const[r,n]=t.useState(!1),o=t.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"Action",onPrimaryAction:o,...u,open:r,onClose:o,children:e.jsx("p",{children:"Content"})})]})},args:{...i,fullscreen:!0,hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315})}};var D,M,S;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(S=(M=C.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var H,I,T;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(T=(I=y.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,V,P;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(P=(V=v.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var q,N,R;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(N=A.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var W,z,G;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(z=f.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=F.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,oe,ae;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const Xe=["Default","Secondary","Fullscreen","NoCloseButton","Customized","WithId","CustomHeader","WithHero","WithHeroAndFullScreen"];export{h as CustomHeader,f as Customized,C as Default,v as Fullscreen,A as NoCloseButton,y as Secondary,F as WithHero,g as WithHeroAndFullScreen,b as WithId,Xe as __namedExportsOrder,Ue as default};
