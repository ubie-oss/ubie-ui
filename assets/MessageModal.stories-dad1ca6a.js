import{j as e}from"./jsx-runtime-69eee039.js";import{r as s}from"./index-7c191284.js";import{c as p}from"./clsx-1229b3e0.js";import{t as Y,_ as F,V as Z}from"./VisuallyHidden-4a81f45e.js";import{o as $}from"./style-62efef97.js";import{B as ee}from"./Button-0526907a.js";import"./index-ecbee218.js";import"./VariantIcon-530043c4.js";const ne="_modal_x16ti_1",te="_overlay_x16ti_10",ae="_normalOverlay_x16ti_15",ue="_darkerOverlay_x16ti_19",se="_dialog_x16ti_23",re="_fixedHeight_x16ti_37",oe="_mainContent_x16ti_41",le="_body_x16ti_52",ie="_header_x16ti_62",de="_panelEnter_x16ti_73",pe="_panelEnterFrom_x16ti_79",ce="_panelEnterTo_x16ti_83",me="_panelLeave_x16ti_87",ge="_panelLeaveFrom_x16ti_92",he="_panelLeaveTo_x16ti_96",a={modal:ne,overlay:te,normalOverlay:ae,darkerOverlay:ue,dialog:se,fixedHeight:re,mainContent:oe,body:le,header:ie,panelEnter:de,panelEnterFrom:pe,panelEnterTo:ce,panelLeave:me,panelLeaveFrom:ge,panelLeaveTo:he},r=({header:t,children:u,onClose:n,overlayOpacity:l="normal",closeLabel:E="閉じる",fixedHeight:x=!1,open:J=!0,isStatic:K=!1,ariaLabelledby:i,hero:v,...Q})=>{const U=$(l),b=s.useRef(null),X=s.useCallback(d=>{d!==null&&t==null&&i!=null?d.setAttribute("aria-labelledby",i):d!==null&&t==null&&i==null&&d.removeAttribute("aria-labelledby")},[i,t]);return e.jsx(Y,{show:J,as:s.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs(F,{ref:X,static:K,onClose:n,className:a.modal,initialFocus:b,...Q,children:[e.jsx(F.Overlay,{className:p(a.overlay,a[U])}),e.jsxs("div",{className:p(a.dialog,{[a.fixedHeight]:x}),children:[t===void 0?e.jsx(Z,{as:"p",tabIndex:-1,ref:b,children:"ダイアログ"}):null,v!==void 0?e.jsx("div",{className:a.hero,children:v}):null,e.jsxs("div",{className:p(a.mainContent,{[a.fixedHeight]:x}),children:[t!==void 0?e.jsx(F.Title,{tabIndex:-1,ref:b,className:a.header,children:t}):null,e.jsx("div",{className:p(a.body,{[a.fixedHeight]:x}),children:u}),e.jsx(ee,{block:!0,onClick:n,"aria-label":E,children:E})]})]})]})})};try{r.displayName="MessageModal",r.__docgenInfo={description:"",displayName:"MessageModal",props:{header:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"header",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}}}}}catch{}const Be={title:"Modal/MessageModal",component:r,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},z=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),o={header:"メッセージ",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:e.jsx(z,{})},c={render:t=>{const[u,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...t,open:u,onClose:()=>n(!1)})]})},args:{...o,header:"メッセージ"}},m={render:t=>{const[u,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...t,open:u,onClose:()=>n(!1)})]})},args:{...o,fixedHeight:!0}},g={render:t=>{const[u,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...t,open:u,onClose:()=>n(!1),fixedHeight:!0})]})},args:{...o,overlayOpacity:"darker"}},h={render:t=>{const[u,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...t,open:u,onClose:()=>n(!1)})]})},args:{...o,"data-test-id":"message-modal-custom"}},f={render:t=>{const[u,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...t,open:u,onClose:()=>n(!1)})]})},args:{...o,id:"dialog-id"}},y={render:t=>{const[u,n]=s.useState(!1),l="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{ariaLabelledby:l,...t,open:u,onClose:()=>n(!1),children:[e.jsx("h2",{id:l,children:"Heading"}),e.jsx(z,{})]})]})},args:{...o,header:void 0}},C={render:t=>{const[u,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...t,open:u,onClose:()=>n(!1)})]})},args:{...o,header:"メッセージ",hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315})}};var B,A,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var _,M,j;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(j=(M=m.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var k,D,L;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(L=(D=g.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var S,I,H;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(I=h.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var T,w,V;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(w=f.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var N,q,R;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(q=y.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var W,G,P;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(G=C.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const Ae=["Default","FixedHeight","OverlayDarker","CustomDataAttribute","WithId","CustomHeader","WithHero"];export{h as CustomDataAttribute,y as CustomHeader,c as Default,m as FixedHeight,g as OverlayDarker,C as WithHero,f as WithId,Ae as __namedExportsOrder,Be as default};
