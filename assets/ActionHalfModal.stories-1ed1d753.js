import{j as e}from"./jsx-runtime-69eee039.js";import{r as a}from"./index-7c191284.js";import{c as v}from"./clsx-1229b3e0.js";import{t as h,_ as g,V as re}from"./VisuallyHidden-61f1f4d5.js";import{o as te}from"./style-e9a2251f.js";import{B as _}from"./Button-7d991ee2.js";import"./index-ecbee218.js";import"./VariantIcon-ec19a65a.js";const se="_modal_w3w4q_1",le="_overlay_w3w4q_8",ie="_normalOverlay_w3w4q_13",ce="_darkerOverlay_w3w4q_17",de="_contents_w3w4q_21",pe="_modalBody_w3w4q_25",me="_bodyScroll_w3w4q_44",Ce="_headerLess_w3w4q_48",ye="_fullscreen_w3w4q_52",Ae="_header_w3w4q_48",fe="_buttonContainer_w3w4q_73",Fe="_overlayEnter_w3w4q_79",Ee="_overlayEnterFrom_w3w4q_85",be="_overlayEnterTo_w3w4q_89",Be="_overlayLeave_w3w4q_93",ve="_overlayLeaveFrom_w3w4q_98",he="_overlayLeaveTo_w3w4q_102",ge="_panelEnter_w3w4q_106",_e="_panelEnterFrom_w3w4q_112",Le="_panelEnterTo_w3w4q_117",we="_panelLeave_w3w4q_122",Oe="_panelLeaveFrom_w3w4q_127",xe="_panelLeaveTo_w3w4q_132",o={modal:se,overlay:le,normalOverlay:ie,darkerOverlay:ce,contents:de,modalBody:pe,bodyScroll:me,headerLess:Ce,fullscreen:ye,header:Ae,buttonContainer:fe,overlayEnter:Fe,overlayEnterFrom:Ee,overlayEnterTo:be,overlayLeave:Be,overlayLeaveFrom:ve,overlayLeaveTo:he,panelEnter:ge,panelEnterFrom:_e,panelEnterTo:Le,panelLeave:we,panelLeaveFrom:Oe,panelLeaveTo:xe},s=({children:r,onClose:t,onPrimaryAction:n,onSecondaryAction:u,header:l,primaryActionLabel:E,secondaryActionLabel:b,primaryActionColor:X,closeLabel:L="閉じる",overlayOpacity:Y="normal",showClose:Z=!0,open:$=!0,isStatic:ee=!1,fullscreen:w=!1,bodyScroll:ne=!0,ariaLabelledby:c,...ue})=>{const oe=te(Y),B=a.useRef(null),ae=a.useCallback(d=>{d!==null&&l==null&&c!=null?d.setAttribute("aria-labelledby",c):d!==null&&l==null&&c==null&&d.removeAttribute("aria-labelledby")},[c,l]);return e.jsx(h,{show:$,children:e.jsxs(g,{ref:ae,static:ee,onClose:t,className:v(o.modal,w&&o.fullscreen),initialFocus:B,...ue,children:[e.jsx(h.Child,{as:a.Fragment,enter:o.overlayEnter,enterFrom:o.overlayEnterFrom,enterTo:o.overlayEnterTo,leave:o.overlayLeave,leaveFrom:o.overlayLeaveFrom,leaveTo:o.overlayLeaveTo,children:e.jsx(g.Overlay,{className:v(o.overlay,o[oe])})}),e.jsx(h.Child,{as:a.Fragment,enter:o.panelEnter,enterFrom:o.panelEnterFrom,enterTo:o.panelEnterTo,leave:o.panelLeave,leaveFrom:o.panelLeaveFrom,leaveTo:o.panelLeaveTo,children:e.jsxs("div",{className:v(o.modalBody,!l&&o.headerLess,w&&o.fullscreen,ne&&o.bodyScroll),children:[l!=null?e.jsx(g.Title,{tabIndex:-1,ref:B,className:o.header,children:l}):e.jsx(re,{tabIndex:-1,ref:B,children:"ダイアログ"}),e.jsx("div",{className:o.contents,children:r}),e.jsxs("div",{className:o.buttonContainer,children:[n&&E&&e.jsx(_,{block:!0,onClick:n,"aria-label":E,variant:X,children:E}),u&&b&&e.jsx(_,{block:!0,variant:"secondary",onClick:u,"aria-label":b,children:b}),Z&&e.jsx(_,{variant:"text",onClick:t,"aria-label":L,children:L})]})]})})]})})};try{s.displayName="ActionHalfModal",s.__docgenInfo={description:"",displayName:"ActionHalfModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:{value:"false"},description:"モーダルをフルスクリーンで表示するかどうか",name:"fullscreen",required:!1,type:{name:"boolean"}},bodyScroll:{defaultValue:{value:"true"},description:"モーダルボディ部分のスクロールを許可するかどうか",name:"bodyScroll",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションボタンが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const He={title:"Modal/ActionHalfModal",component:s},U=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),i={header:"モーダル",children:e.jsx(U,{})},p={render:r=>{const[t,n]=a.useState(!0),u=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"アクション",onPrimaryAction:u,...r,open:t,onClose:u})]})},args:i},m={render:r=>{const[t,n]=a.useState(!1),u=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{primaryActionLabel:"アクション1",onPrimaryAction:u,secondaryActionLabel:"アクション2",onSecondaryAction:u,...r,open:t,onClose:u})]})},args:i},C={render:r=>{const[t,n]=a.useState(!1),u=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...r,open:t,onClose:u,fullscreen:!0})]})},args:i},y={render:r=>{const[t,n]=a.useState(!1),u=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{onPrimaryAction:u,primaryActionLabel:"確認",showClose:!1,...r,open:t,onClose:u})]})},args:{...i,"data-test-id":"some-id"}},A={render:r=>{const[t,n]=a.useState(!1),u=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{header:"削除します",primaryActionColor:"alert",primaryActionLabel:"削除",onPrimaryAction:u,overlayOpacity:"darker",closeLabel:"キャンセル",...r,open:t,onClose:u})]})},args:i},f={render:r=>{const[t,n]=a.useState(!1),u=a.useCallback(()=>{n(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(s,{...r,"data-test-id":"some-id",primaryActionLabel:"アクション",onPrimaryAction:u,open:t,onClose:u})]})},args:{...i,id:"dialog-id"}},F={render:r=>{const[t,n]=a.useState(!1),u=a.useCallback(()=>{n(!1)},[]),l="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(s,{ariaLabelledby:l,primaryActionLabel:"Action",onPrimaryAction:u,...r,open:t,onClose:u,children:[e.jsx("h2",{id:l,children:"Header"}),e.jsx(U,{})]})]})},args:{...i,header:void 0}};var O,x,k;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(k=(x=p.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,D,q;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(D=m.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var S,M,T;C.parameters={...C.parameters,docs:{...(S=C.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(M=C.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var I,H,V;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(H=y.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var P,N,R;A.parameters={...A.parameters,docs:{...(P=A.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(R=(N=A.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var z,W,G;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(W=f.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,K,Q;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=F.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ve=["Default","Secondary","Fullscreen","NoCloseButton","Customized","WithId","CustomHeader"];export{F as CustomHeader,A as Customized,p as Default,C as Fullscreen,y as NoCloseButton,m as Secondary,f as WithId,Ve as __namedExportsOrder,He as default};
