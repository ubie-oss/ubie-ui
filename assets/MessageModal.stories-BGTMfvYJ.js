import{j as e}from"./jsx-runtime-B57y5fZt.js";import{r as o}from"./index-ebcBgdYO.js";import{c as l}from"./clsx-B-dksMZM.js";import{u as ne,q as ue,_ as A,V as le}from"./VisuallyHidden-BuZx8D21.js";import{o as ie}from"./style-BH_c6VN1.js";import{B as de}from"./Button-DXzGQLlR.js";import"./index-Cj2wNPAp.js";import"./component-BZs_CFbd.js";import"./VariantIcon-D4BSVN_y.js";const ce="_modal_pahed_1",pe="_overlay_pahed_10",me="_normalOverlay_pahed_15",he="_darkerOverlay_pahed_19",ge="_dialog_pahed_23",fe="_fixedHeight_pahed_37",ye="_scrollContainer_pahed_41",Ce="_mainContent_pahed_46",be="_headerLess_pahed_56",Fe="_header_pahed_56",_e="_sticky_pahed_73",ve="_canScroll_pahed_78",Ae="_body_pahed_82",xe="_hero_pahed_94",Ee="_footer_pahed_99",Oe="_panelEnter_pahed_113",Be="_panelEnterFrom_pahed_119",ke="_panelEnterTo_pahed_123",Me="_panelLeave_pahed_127",je="_panelLeaveFrom_pahed_132",Se="_panelLeaveTo_pahed_136",r={modal:ce,overlay:pe,normalOverlay:me,darkerOverlay:he,dialog:ge,fixedHeight:fe,scrollContainer:ye,mainContent:Ce,headerLess:be,header:Fe,sticky:_e,canScroll:ve,body:Ae,hero:xe,footer:Ee,panelEnter:Oe,panelEnterFrom:Be,panelEnterTo:ke,panelLeave:Me,panelLeaveFrom:je,panelLeaveTo:Se},n=({header:t,children:s,onClose:a,overlayOpacity:i="normal",closeLabel:x="閉じる",fixedHeight:_=!1,open:X=!0,isStatic:Y=!1,ariaLabelledby:d,hero:c,stickyHeader:Z=!1,stickyFooter:$=!1,...ee})=>{const ae=ie(i),v=o.useRef(null),te=o.useCallback(p=>{p!==null&&t==null&&d!=null?p.setAttribute("aria-labelledby",d):p!==null&&t==null&&d==null&&p.removeAttribute("aria-labelledby")},[d,t]),{scrollContainerRef:re,canScrollUp:se,canScrollDown:oe}=ne();return e.jsx(ue,{show:X,as:o.Fragment,enter:r.panelEnter,enterFrom:r.panelEnterFrom,enterTo:r.panelEnterTo,leave:r.panelLeave,leaveFrom:r.panelLeaveFrom,leaveTo:r.panelLeaveTo,children:e.jsxs(A,{ref:te,static:Y,onClose:a,className:r.modal,initialFocus:v,...ee,children:[e.jsx(A.Overlay,{className:l(r.overlay,r[ae])}),e.jsxs("div",{className:l(r.dialog,{[r.fixedHeight]:_}),children:[t===void 0?e.jsx(le,{as:"p",tabIndex:-1,ref:v,children:"ダイアログ"}):null,e.jsx("div",{className:r.scrollContainer,ref:re,children:e.jsxs("div",{className:l(r.mainContent,{[r.headerLess]:t===void 0&&c===void 0,[r.fixedHeight]:_}),children:[c!==void 0?e.jsx("div",{className:r.hero,children:c}):null,t!==void 0?e.jsx(A.Title,{tabIndex:-1,ref:v,className:l(r.header,!c&&Z&&r.sticky,se&&r.canScroll),children:t}):null,e.jsx("div",{className:l(r.body,{[r.fixedHeight]:_}),children:s}),e.jsx("footer",{className:l(r.footer,$&&r.sticky,oe&&r.canScroll),children:e.jsx(de,{block:!0,onClick:a,"aria-label":x,children:x})})]})})]})]})})};try{n.displayName="MessageModal",n.__docgenInfo={description:"",displayName:"MessageModal",props:{header:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"header",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:`ヘッダーを固定表示
heroが指定されている場合は無効`,name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}}}}}catch{}const Re={title:"Modal/MessageModal",component:n,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},Q=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),u={header:"メッセージ",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:e.jsx(Q,{}),stickyHeader:!1,stickyFooter:!1},m={render:t=>{const[s,a]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(n,{...t,open:s,onClose:()=>a(!1)})]})},args:{...u,header:"メッセージ"}},h={render:t=>{const[s,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(n,{...t,open:s,onClose:()=>a(!1)})]})},args:{...u,fixedHeight:!0}},g={render:t=>{const[s,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(n,{...t,open:s,onClose:()=>a(!1),fixedHeight:!0})]})},args:{...u,overlayOpacity:"darker"}},f={render:t=>{const[s,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(n,{...t,open:s,onClose:()=>a(!1)})]})},args:{...u,"data-test-id":"message-modal-custom"}},y={render:t=>{const[s,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(n,{...t,open:s,onClose:()=>a(!1)})]})},args:{...u,id:"dialog-id"}},C={render:t=>{const[s,a]=o.useState(!1),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsxs(n,{ariaLabelledby:i,...t,open:s,onClose:()=>a(!1),children:[e.jsx("h2",{id:i,children:"Heading"}),e.jsx(Q,{})]})]})},args:{...u,header:void 0}},b={render:t=>{const[s,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(n,{...t,open:s,onClose:()=>a(!1)})]})},args:{...u,header:"メッセージ",hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315})}},F={render:t=>{const[s,a]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>a(!0),children:"Open Modal"}),e.jsx(n,{...t,open:s,onClose:()=>a(!1)})]})},args:{...u,header:"メッセージ",stickyHeader:!0,stickyFooter:!0}};var E,O,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(O=m.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var k,M,j;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    fixedHeight: true
  }
}`,...(j=(M=h.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var S,D,L;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(D=g.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var H,I,T;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(T=(I=f.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,V,q;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(q=(V=y.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var N,R,W;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const headerId = 'header-id';
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal ariaLabelledby={headerId} {...args} open={open} onClose={() => setOpen(false)}>
          <h2 id={headerId}>Heading</h2>
          <LongBody />
        </MessageModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(W=(R=C.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var G,P,U;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    header: 'メッセージ',
    hero: <img src="/images/placeholder.svg" alt="Illustration: Modal" style={{
      width: '100%',
      height: 'auto',
      verticalAlign: 'bottom'
    }} width={560} height={315} />
  }
}`,...(U=(P=b.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var z,J,K;F.parameters={...F.parameters,docs:{...(z=F.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    header: 'メッセージ',
    stickyHeader: true,
    stickyFooter: true
  }
}`,...(K=(J=F.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const We=["Default","FixedHeight","OverlayDarker","CustomDataAttribute","WithId","CustomHeader","WithHero","StickyHeaderAndFooter"];export{f as CustomDataAttribute,C as CustomHeader,m as Default,h as FixedHeight,g as OverlayDarker,F as StickyHeaderAndFooter,b as WithHero,y as WithId,We as __namedExportsOrder,Re as default};
