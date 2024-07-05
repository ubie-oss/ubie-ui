import{j as e}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{c as p}from"./clsx-1229b3e0.js";import{t as le,_ as x,V as ie}from"./VisuallyHidden-4a81f45e.js";import{o as de}from"./style-62efef97.js";import{B as v}from"./Button-0526907a.js";import"./index-ecbee218.js";import"./VariantIcon-530043c4.js";const ce="_modal_qp30t_1",pe="_overlay_qp30t_11",me="_normalOverlay_qp30t_16",ye="_darkerOverlay_qp30t_20",fe="_dialog_qp30t_24",he="_fixedHeight_qp30t_38",Ae="_mainContent_qp30t_42",ge="_headerLess_qp30t_54",Ce="_header_qp30t_54",Fe="_body_qp30t_69",be="_buttonContainer_qp30t_75",Be="_panelEnter_qp30t_80",Ee="_panelEnterFrom_qp30t_86",xe="_panelEnterTo_qp30t_90",ve="_panelLeave_qp30t_94",Oe="_panelLeaveFrom_qp30t_99",_e="_panelLeaveTo_qp30t_103",t={modal:ce,overlay:pe,normalOverlay:me,darkerOverlay:ye,dialog:fe,fixedHeight:he,mainContent:Ae,headerLess:ge,header:Ce,body:Fe,buttonContainer:be,panelEnter:Be,panelEnterFrom:Ee,panelEnterTo:xe,panelLeave:ve,panelLeaveFrom:Oe,panelLeaveTo:_e},r=({children:u,onClose:a,onPrimaryAction:n,onSecondaryAction:i,header:l,primaryActionLabel:O,secondaryActionLabel:_,primaryActionColor:$,closeLabel:ee="閉じる",overlayOpacity:ne="normal",fixedHeight:b=!1,showClose:te=!0,open:ue=!0,isStatic:ae=!1,ariaLabelledby:d,hero:B,...oe})=>{const re=de(ne),E=o.useRef(null),se=o.useCallback(c=>{c!==null&&l==null&&d!=null?c.setAttribute("aria-labelledby",d):c!==null&&l==null&&d==null&&c.removeAttribute("aria-labelledby")},[d,l]);return e.jsx(le,{show:ue,as:o.Fragment,enter:t.panelEnter,enterFrom:t.panelEnterFrom,enterTo:t.panelEnterTo,leave:t.panelLeave,leaveFrom:t.panelLeaveFrom,leaveTo:t.panelLeaveTo,children:e.jsxs(x,{ref:se,static:ae,onClose:a,className:t.modal,"aria-labelledby":d,initialFocus:E,...oe,children:[e.jsx(x.Overlay,{className:p(t.overlay,t[re])}),e.jsxs("div",{className:p(t.dialog,{[t.fixedHeight]:b}),children:[l===void 0?e.jsx(ie,{as:"p",tabIndex:-1,ref:E,children:"ダイアログ"}):null,B!==void 0?e.jsx("div",{className:t.hero,children:B}):null,e.jsxs("div",{className:p(t.mainContent,{[t.headerLess]:l===void 0&&B===void 0,[t.fixedHeight]:b}),children:[l!==void 0?e.jsx(x.Title,{tabIndex:-1,ref:E,className:t.header,children:l}):null,e.jsx("div",{className:p(t.body,{[t.fixedHeight]:b}),children:u}),e.jsxs("div",{className:t.buttonContainer,children:[n&&O&&e.jsx(v,{block:!0,onClick:n,variant:$,children:O}),i&&_&&e.jsx(v,{block:!0,variant:"secondary",onClick:i,children:_}),te&&e.jsx(v,{variant:"text",onClick:a,children:ee})]})]})]})]})})};try{r.displayName="ActionModal",r.__docgenInfo={description:"",displayName:"ActionModal",props:{children:{defaultValue:null,description:"コンテンツとして表示する内容",name:"children",required:!0,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},hero:{defaultValue:null,description:"ヒーローエリア（見出しの更に上）に配置するコンテンツ",name:"hero",required:!1,type:{name:"ReactNode"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const we={title:"Modal/ActionModal",component:r},s={header:"モーダル",overlayOpacity:"normal",primaryActionLabel:"回答結果を見る",fixedHeight:!1,isStatic:!1},Z=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{margin:0},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),e.jsx("p",{style:{margin:"12px 0 0"},children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'})]}),m={render:u=>{const[a,n]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx(Z,{})})]})},args:s},y={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),secondaryActionLabel:"このまま回答を続ける",onSecondaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:s},f={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{style:{margin:0},children:"Content"})})]})},args:{...s,fixedHeight:!0}},h={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Customized"})})]})},args:{...s,header:"削除します",primaryActionColor:"alert",overlayOpacity:"darker",closeLabel:"キャンセル"}},A={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,"data-test-id":"some-id"}},g={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,id:"dialog-id"}},C={render:u=>{const[a,n]=o.useState(!1),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),ariaLabelledby:i,children:[e.jsx("h2",{id:i,style:{margin:"0 0 12px"},children:"Custom Heading"}),e.jsx(Z,{})]})]})},args:{...s,header:void 0}},F={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{hero:e.jsx("img",{src:"/images/placeholder.svg",alt:"Illustration: Modal",style:{width:"100%",height:"auto",verticalAlign:"bottom"},width:560,height:315}),...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{style:{margin:0},children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})})]})},args:{...s}};var D,j,k;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var L,M,q;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
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
}`,...(q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var S,I,w;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p style={{
          margin: 0
        }}>Content</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    fixedHeight: true
  }
}`,...(w=(I=f.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var H,V,P;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(P=(V=h.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var T,N,R;A.parameters={...A.parameters,docs:{...(T=A.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(R=(N=A.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var z,W,G;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(W=g.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const headerId = 'header-id';
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)} ariaLabelledby={headerId}>
          <h2 id={headerId} style={{
          margin: '0 0 12px'
        }}>
            Custom Heading
          </h2>
          <LongBody />
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal hero={<img src="/images/placeholder.svg" alt="Illustration: Modal" style={{
        width: '100%',
        height: 'auto',
        verticalAlign: 'bottom'
      }} width={560} height={315} />} {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          <p style={{
          margin: 0
        }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs
  }
}`,...(Y=(X=F.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const He=["Default","Secondary","FixedHeight","Customized","CustomDataAttribute","WithId","CustomHeader","WithHero"];export{A as CustomDataAttribute,C as CustomHeader,h as Customized,m as Default,f as FixedHeight,y as Secondary,F as WithHero,g as WithId,He as __namedExportsOrder,we as default};
