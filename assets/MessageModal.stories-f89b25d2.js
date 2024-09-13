import{j as e}from"./jsx-runtime-69eee039.js";import{r as s}from"./index-7c191284.js";import{c as l}from"./clsx-1229b3e0.js";import{u as oe,t as ue,_ as v,V as le}from"./VisuallyHidden-d64fca01.js";import{o as ie}from"./style-282c756e.js";import{B as de}from"./Button-f48927cf.js";import"./index-ecbee218.js";import"./component-22a2265d.js";import"./VariantIcon-f53fea35.js";const ce="_modal_pahed_1",pe="_overlay_pahed_10",me="_normalOverlay_pahed_15",he="_darkerOverlay_pahed_19",ge="_dialog_pahed_23",fe="_fixedHeight_pahed_37",ye="_scrollContainer_pahed_41",Ce="_mainContent_pahed_46",Fe="_headerLess_pahed_56",be="_header_pahed_56",_e="_sticky_pahed_73",Be="_canScroll_pahed_78",ve="_body_pahed_82",Ee="_hero_pahed_94",Ae="_footer_pahed_99",xe="_panelEnter_pahed_113",Oe="_panelEnterFrom_pahed_119",ke="_panelEnterTo_pahed_123",Me="_panelLeave_pahed_127",je="_panelLeaveFrom_pahed_132",Se="_panelLeaveTo_pahed_136",t={modal:ce,overlay:pe,normalOverlay:me,darkerOverlay:he,dialog:ge,fixedHeight:fe,scrollContainer:ye,mainContent:Ce,headerLess:Fe,header:be,sticky:_e,canScroll:Be,body:ve,hero:Ee,footer:Ae,panelEnter:xe,panelEnterFrom:Oe,panelEnterTo:ke,panelLeave:Me,panelLeaveFrom:je,panelLeaveTo:Se},o=({header:a,children:r,onClose:n,overlayOpacity:i="normal",closeLabel:E="閉じる",fixedHeight:_=!1,open:X=!0,isStatic:Y=!1,ariaLabelledby:d,hero:c,stickyHeader:Z=!1,stickyFooter:$=!1,...ee})=>{const ne=ie(i),B=s.useRef(null),ae=s.useCallback(p=>{p!==null&&a==null&&d!=null?p.setAttribute("aria-labelledby",d):p!==null&&a==null&&d==null&&p.removeAttribute("aria-labelledby")},[d,a]),{scrollContainerRef:te,canScrollUp:re,canScrollDown:se}=oe();return e.jsx(ue,{show:X,as:s.Fragment,enter:t.panelEnter,enterFrom:t.panelEnterFrom,enterTo:t.panelEnterTo,leave:t.panelLeave,leaveFrom:t.panelLeaveFrom,leaveTo:t.panelLeaveTo,children:e.jsxs(v,{ref:ae,static:Y,onClose:n,className:t.modal,initialFocus:B,...ee,children:[e.jsx(v.Overlay,{className:l(t.overlay,t[ne])}),e.jsxs("div",{className:l(t.dialog,{[t.fixedHeight]:_}),children:[a===void 0?e.jsx(le,{as:"p",tabIndex:-1,ref:B,children:"ダイアログ"}):null,e.jsx("div",{className:t.scrollContainer,ref:te,children:e.jsxs("div",{className:l(t.mainContent,{[t.headerLess]:a===void 0&&c===void 0,[t.fixedHeight]:_}),children:[c!==void 0?e.jsx("div",{className:t.hero,children:c}):null,a!==void 0?e.jsx(v.Title,{tabIndex:-1,ref:B,className:l(t.header,!c&&Z&&t.sticky,re&&t.canScroll),children:a}):null,e.jsx("div",{className:l(t.body,{[t.fixedHeight]:_}),children:r}),e.jsx("footer",{className:l(t.footer,$&&t.sticky,se&&t.canScroll),children:e.jsx(de,{block:!0,onClick:n,"aria-label":E,children:E})})]})})]})]})})};try{o.displayName="MessageModal",o.__docgenInfo={description:"",displayName:"MessageModal",props:{header:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"header",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},stickyHeader:{defaultValue:{value:"false"},description:`ヘッダーを固定表示
heroが指定されている場合は無効`,name:"stickyHeader",required:!1,type:{name:"boolean"}},stickyFooter:{defaultValue:{value:"false"},description:"フッターを固定表示",name:"stickyFooter",required:!1,type:{name:"boolean"}}}}}catch{}const Re={title:"Modal/MessageModal",component:o,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},Q=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),u={header:"メッセージ",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:e.jsx(Q,{}),stickyHeader:!1,stickyFooter:!1},m={render:a=>{const[r,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:r,onClose:()=>n(!1)})]})},args:{...u,header:"メッセージ"}},h={render:a=>{const[r,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:r,onClose:()=>n(!1)})]})},args:{...u,fixedHeight:!0}},g={render:a=>{const[r,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:r,onClose:()=>n(!1),fixedHeight:!0})]})},args:{...u,overlayOpacity:"darker"}},f={render:a=>{const[r,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:r,onClose:()=>n(!1)})]})},args:{...u,"data-test-id":"message-modal-custom"}},y={render:a=>{const[r,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:r,onClose:()=>n(!1)})]})},args:{...u,id:"dialog-id"}},C={render:a=>{const[r,n]=s.useState(!1),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(o,{ariaLabelledby:i,...a,open:r,onClose:()=>n(!1),children:[e.jsx("h2",{id:i,children:"Heading"}),e.jsx(Q,{})]})]})},args:{...u,header:void 0}},F={render:a=>{const[r,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:r,onClose:()=>n(!1)})]})},args:{...u,header:"メッセージ",hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315})}},b={render:a=>{const[r,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...a,open:r,onClose:()=>n(!1)})]})},args:{...u,header:"メッセージ",stickyHeader:!0,stickyFooter:!0}};var A,x,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(O=(x=m.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var k,M,j;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(T=(I=f.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,V,N;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(V=y.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var q,R,W;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(R=C.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var G,P,U;F.parameters={...F.parameters,docs:{...(G=F.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(P=F.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var z,J,K;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const We=["Default","FixedHeight","OverlayDarker","CustomDataAttribute","WithId","CustomHeader","WithHero","StickyHeaderAndFooter"];export{f as CustomDataAttribute,C as CustomHeader,m as Default,h as FixedHeight,g as OverlayDarker,b as StickyHeaderAndFooter,F as WithHero,y as WithId,We as __namedExportsOrder,Re as default};
