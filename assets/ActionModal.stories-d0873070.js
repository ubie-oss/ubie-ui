import{j as e}from"./jsx-runtime-69eee039.js";import{r}from"./index-7c191284.js";import{c as x}from"./clsx-1229b3e0.js";import{t as te,_ as B,V as ae}from"./VisuallyHidden-61f1f4d5.js";import{o as re}from"./style-e9a2251f.js";import{B as F}from"./Button-fc98eb93.js";import"./index-ecbee218.js";import"./VariantIcon-ec19a65a.js";const oe="_modal_14p0r_1",se="_overlay_14p0r_11",le="_normalOverlay_14p0r_16",ie="_darkerOverlay_14p0r_20",de="_modalBody_14p0r_24",ce="_headerLess_14p0r_40",pe="_fixedHeight_14p0r_44",me="_contents_14p0r_48",fe="_header_14p0r_40",Ae="_buttonContainer_14p0r_65",ye="_panelEnter_14p0r_70",Ce="_panelEnterFrom_14p0r_76",he="_panelEnterTo_14p0r_80",ge="_panelLeave_14p0r_84",Be="_panelLeaveFrom_14p0r_89",Fe="_panelLeaveTo_14p0r_93",a={modal:oe,overlay:se,normalOverlay:le,darkerOverlay:ie,modalBody:de,headerLess:ce,fixedHeight:pe,contents:me,header:fe,buttonContainer:Ae,panelEnter:ye,panelEnterFrom:Ce,panelEnterTo:he,panelLeave:ge,panelLeaveFrom:Be,panelLeaveTo:Fe},o=({children:u,onClose:t,onPrimaryAction:n,onSecondaryAction:i,header:l,primaryActionLabel:E,secondaryActionLabel:b,primaryActionColor:K,closeLabel:Q="閉じる",overlayOpacity:U="normal",fixedHeight:X=!1,showClose:Y=!0,open:Z=!0,isStatic:$=!1,ariaLabelledby:d,...ee})=>{const ne=re(U),g=r.useRef(null),ue=r.useCallback(c=>{c!==null&&l==null&&d!=null?c.setAttribute("aria-labelledby",d):c!==null&&l==null&&d==null&&c.removeAttribute("aria-labelledby")},[d,l]);return e.jsx(te,{show:Z,as:r.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:e.jsxs(B,{ref:ue,static:$,onClose:t,className:a.modal,"aria-labelledby":d,initialFocus:g,...ee,children:[e.jsx(B.Overlay,{className:x(a.overlay,a[ne])}),e.jsxs("div",{className:x(a.modalBody,!l&&a.headerLess,X&&a.fixedHeight),children:[l!=null?e.jsx(B.Title,{tabIndex:-1,ref:g,className:a.header,children:l}):e.jsx(ae,{tabIndex:-1,ref:g,children:"ダイアログ"}),e.jsx("div",{className:a.contents,children:u}),e.jsxs("div",{className:a.buttonContainer,children:[n&&E&&e.jsx(F,{block:!0,onClick:n,variant:K,children:E}),i&&b&&e.jsx(F,{block:!0,variant:"secondary",onClick:i,children:b}),Y&&e.jsx(F,{variant:"text",onClick:t,children:Q})]})]})]})})};try{o.displayName="ActionModal",o.__docgenInfo={description:"",displayName:"ActionModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const Le={title:"Modal/ActionModal",component:o},s={header:"モーダル",overlayOpacity:"normal",primaryActionLabel:"回答結果を見る",fixedHeight:!1,isStatic:!1},J=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),p={render:u=>{const[t,n]=r.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...u,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx(J,{})})]})},args:s},m={render:u=>{const[t,n]=r.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...u,open:t,onPrimaryAction:()=>n(!1),secondaryActionLabel:"このまま回答を続ける",onSecondaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:s},f={render:u=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...u,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Content"})})]})},args:{...s,fixedHeight:!0}},A={render:u=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...u,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Customized"})})]})},args:{...s,header:"削除します",primaryActionColor:"alert",overlayOpacity:"darker",closeLabel:"キャンセル"}},y={render:u=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...u,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,"data-test-id":"some-id"}},C={render:u=>{const[t,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(o,{...u,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,id:"dialog-id"}},h={render:u=>{const[t,n]=r.useState(!1),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(o,{...u,open:t,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),ariaLabelledby:i,children:[e.jsx("h2",{id:i,children:"Custom Heading"}),e.jsx(J,{})]})]})},args:{...s,header:void 0}};var v,O,_;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <LongBody />
        </ActionModal>
      </>;
  },
  args: defaultArgs
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var D,j,L;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} secondaryActionLabel={'このまま回答を続ける'} onSecondaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          Default
        </ActionModal>
      </>;
  },
  args: defaultArgs
}`,...(L=(j=m.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var M,k,S;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Content</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    fixedHeight: true
  }
}`,...(S=(k=f.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var I,H,V;A.parameters={...A.parameters,docs:{...(I=A.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Customized</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: '削除します',
    primaryActionColor: 'alert',
    overlayOpacity: 'darker',
    closeLabel: 'キャンセル'
  }
}`,...(V=(H=A.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var P,q,T;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Default</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    [\`data-test-id\`]: 'some-id'
  }
}`,...(T=(q=y.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var w,N,R;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p>Default</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    id: 'dialog-id'
  }
}`,...(R=(N=C.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var z,W,G;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const headerId = 'header-id';
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)} ariaLabelledby={headerId}>
          <h2 id={headerId}>Custom Heading</h2>
          <LongBody />
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(G=(W=h.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const Me=["Default","Secondary","FixedHeight","Customized","CustomDataAttribute","WithId","CustomHeader"];export{y as CustomDataAttribute,h as CustomHeader,A as Customized,p as Default,f as FixedHeight,m as Secondary,C as WithId,Me as __namedExportsOrder,Le as default};
