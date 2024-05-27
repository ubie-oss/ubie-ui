import{j as e}from"./jsx-runtime-69eee039.js";import{r as s}from"./index-7c191284.js";import{c as E}from"./clsx-1229b3e0.js";import{t as J,_ as C,V as K}from"./VisuallyHidden-61f1f4d5.js";import{o as Q}from"./style-e9a2251f.js";import{B as U}from"./Button-f867c37e.js";import"./index-ecbee218.js";import"./VariantIcon-8b056d32.js";const X="_modal_161et_1",Y="_overlay_161et_11",Z="_normalOverlay_161et_16",$="_darkerOverlay_161et_20",ee="_modalBody_161et_24",ne="_fixedHeight_161et_40",te="_contents_161et_44",ae="_header_161et_54",re="_panelEnter_161et_65",se="_panelEnterFrom_161et_71",ue="_panelEnterTo_161et_75",oe="_panelLeave_161et_79",le="_panelLeaveFrom_161et_84",ie="_panelLeaveTo_161et_88",r={modal:X,overlay:Y,normalOverlay:Z,darkerOverlay:$,modalBody:ee,fixedHeight:ne,contents:te,header:ae,panelEnter:re,panelEnterFrom:se,panelEnterTo:ue,panelLeave:oe,panelLeaveFrom:le,panelLeaveTo:ie},u=({header:t,children:a,onClose:n,overlayOpacity:l="normal",closeLabel:b="閉じる",fixedHeight:N=!1,open:R=!0,isStatic:W=!1,ariaLabelledby:i,...G})=>{const P=Q(l),h=s.useRef(null),z=s.useCallback(d=>{d!==null&&t==null&&i!=null?d.setAttribute("aria-labelledby",i):d!==null&&t==null&&i==null&&d.removeAttribute("aria-labelledby")},[i,t]);return e.jsx(J,{show:R,as:s.Fragment,enter:r.panelEnter,enterFrom:r.panelEnterFrom,enterTo:r.panelEnterTo,leave:r.panelLeave,leaveFrom:r.panelLeaveFrom,leaveTo:r.panelLeaveTo,children:e.jsxs(C,{ref:z,static:W,onClose:n,className:r.modal,initialFocus:h,...G,children:[e.jsx(C.Overlay,{className:E(r.overlay,r[P])}),e.jsxs("div",{className:E(r.modalBody,N&&r.fixedHeight),children:[t!=null?e.jsx(C.Title,{tabIndex:-1,ref:h,className:r.header,children:t}):e.jsx(K,{tabIndex:-1,ref:h,children:"ダイアログ"}),e.jsx("div",{className:r.contents,children:a}),e.jsx(U,{block:!0,onClick:n,"aria-label":b,children:b})]})]})})};try{u.displayName="MessageModal",u.__docgenInfo={description:"",displayName:"MessageModal",props:{header:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"header",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}}}}}catch{}const Ce={title:"Modal/MessageModal",component:u,argTypes:{overlayOpacity:{options:["normal","darker"],control:{type:"radio"}}}},q=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),o={header:"メッセージ",overlayOpacity:"normal",isStatic:!1,fixedHeight:!1,children:e.jsx(q,{})},p={render:t=>{const[a,n]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:a,onClose:()=>n(!1)})]})},args:{...o,header:"メッセージ"}},c={render:t=>{const[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:a,onClose:()=>n(!1)})]})},args:o},m={render:t=>{const[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:a,onClose:()=>n(!1),fixedHeight:!0})]})},args:{...o,overlayOpacity:"darker"}},g={render:t=>{const[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:a,onClose:()=>n(!1)})]})},args:{...o,"data-test-id":"message-modal-custom"}},f={render:t=>{const[a,n]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(u,{...t,open:a,onClose:()=>n(!1)})]})},args:{...o,id:"dialog-id"}},y={render:t=>{const[a,n]=s.useState(!1),l="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(u,{ariaLabelledby:l,...t,open:a,onClose:()=>n(!1),children:[e.jsx("h2",{id:l,children:"Heading"}),e.jsx(q,{})]})]})},args:{...o,header:void 0}};var B,F,v;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(v=(F=p.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var x,_,O;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <MessageModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: defaultArgs
}`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var A,M,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(M=m.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var j,L,D;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(L=g.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var I,S,H;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(H=(S=f.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var T,V,w;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(V=y.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const be=["Default","FixedHeight","OverlayDarker","CustomDataAttribute","WithId","CustomHeader"];export{g as CustomDataAttribute,y as CustomHeader,p as Default,c as FixedHeight,m as OverlayDarker,f as WithId,be as __namedExportsOrder,Ce as default};
