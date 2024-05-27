import{j as e}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{c as v}from"./clsx-1229b3e0.js";import{t as g,_,V as U}from"./VisuallyHidden-61f1f4d5.js";import{o as X}from"./style-e9a2251f.js";import{B as Y}from"./Button-cdcb9874.js";import"./index-ecbee218.js";import"./VariantIcon-499be72b.js";const Z="_modal_19hhb_1",$="_overlay_19hhb_8",ee="_normalOverlay_19hhb_13",ne="_darkerOverlay_19hhb_17",ae="_contents_19hhb_21",oe="_modalBody_19hhb_25",se="_bodyScroll_19hhb_45",te="_headerLess_19hhb_49",ue="_fullscreen_19hhb_53",re="_header_19hhb_49",le="_buttonContainer_19hhb_74",de="_overlayEnter_19hhb_80",ie="_overlayEnterFrom_19hhb_86",ce="_overlayEnterTo_19hhb_90",pe="_overlayLeave_19hhb_94",me="_overlayLeaveFrom_19hhb_99",he="_overlayLeaveTo_19hhb_103",fe="_panelEnter_19hhb_107",Ce="_panelEnterFrom_19hhb_113",be="_panelEnterTo_19hhb_118",ye="_panelLeave_19hhb_123",ve="_panelLeaveFrom_19hhb_128",ge="_panelLeaveTo_19hhb_133",a={modal:Z,overlay:$,normalOverlay:ee,darkerOverlay:ne,contents:ae,modalBody:oe,bodyScroll:se,headerLess:te,fullscreen:ue,header:re,buttonContainer:le,overlayEnter:de,overlayEnterFrom:ie,overlayEnterTo:ce,overlayLeave:pe,overlayLeaveFrom:me,overlayLeaveTo:he,panelEnter:fe,panelEnterFrom:Ce,panelEnterTo:be,panelLeave:ye,panelLeaveFrom:ve,panelLeaveTo:ge},r=({children:s,onClose:t,header:n,closeLabel:u="閉じる",overlayOpacity:d="normal",showClose:W=!0,open:G=!0,isStatic:P=!1,fullscreen:E=!1,bodyScroll:z=!0,ariaLabelledby:i,...J})=>{const K=X(d),y=o.useRef(null),Q=o.useCallback(c=>{c!==null&&n==null&&i!=null?c.setAttribute("aria-labelledby",i):c!==null&&n==null&&i==null&&c.removeAttribute("aria-labelledby")},[i,n]);return e.jsx(g,{show:G,children:e.jsxs(_,{ref:Q,static:P,onClose:t,className:v(a.modal,E&&a.fullscreen),initialFocus:y,...J,children:[e.jsx(g.Child,{as:o.Fragment,enter:a.overlayEnter,enterFrom:a.overlayEnterFrom,enterTo:a.overlayEnterTo,leave:a.overlayLeave,leaveFrom:a.overlayLeaveFrom,leaveTo:a.overlayLeaveTo,children:e.jsx(_.Overlay,{className:v(a.overlay,a[K])})}),e.jsx(g.Child,{as:o.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs("div",{className:v(a.modalBody,!n&&a.headerLess,E&&a.fullscreen,z&&a.bodyScroll),children:[n!=null?e.jsx(_.Title,{tabIndex:-1,ref:y,className:a.header,children:n}):e.jsx(U,{tabIndex:-1,ref:y,children:"ダイアログ"}),e.jsx("div",{className:a.contents,children:s}),e.jsx("div",{className:a.buttonContainer,children:W&&e.jsx(Y,{variant:"primary",onClick:t,"aria-label":u,children:u})})]})})]})})};try{r.displayName="MessageHalfModal",r.__docgenInfo={description:"",displayName:"MessageHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},bodyScroll:{defaultValue:{value:"true"},description:"モーダルボディ部分のスクロールを許可するかどうか",name:"bodyScroll",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}}}}}catch{}const ke={title:"Modal/MessageHalfModal",component:r},R=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),l={header:"モーダル",children:e.jsx(R,{})},p={render:s=>{const[t,n]=o.useState(!0),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...s,open:t,onClose:u})]})},args:l},m={render:s=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...s,open:t,onClose:u,fullscreen:!0})]})},args:l},h={render:s=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{showClose:!1,...s,open:t,onClose:u})]})},args:l},f={render:s=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...s,open:t,onClose:u})]})},args:{...l,"data-test-id":"message-half-modal-custom"}},C={render:s=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...s,open:t,onClose:u})]})},args:{...l,id:"dialog-id"}},b={render:s=>{const[t,n]=o.useState(!1),u=o.useCallback(()=>{n(!1)},[]),d="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{ariaLabelledby:d,...s,open:t,onClose:u,children:[e.jsx("h2",{id:d,children:"Heading"}),e.jsx(R,{})]})]})},args:{...l,header:void 0}};var F,B,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var x,O,L;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(O=m.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var k,M,j;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(M=h.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var S,D,T;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(D=f.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var I,H,w;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(H=C.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var V,N,q;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(N=b.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const Me=["Default","Fullscreen","NoCloseButton","WithCustomDataAttribute","WithId","CustomHeader"];export{b as CustomHeader,p as Default,m as Fullscreen,h as NoCloseButton,f as WithCustomDataAttribute,C as WithId,Me as __namedExportsOrder,ke as default};
