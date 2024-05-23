import{j as e}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{c as b}from"./clsx-1229b3e0.js";import{o as ne}from"./style-e9a2251f.js";import{B as F}from"./Button-f867c37e.js";import{t as ue,_ as B}from"./transition-0e1e6442.js";import"./VariantIcon-8b056d32.js";import"./index-ecbee218.js";const ae="_modal_1ie1o_1",te="_overlay_1ie1o_11",re="_normalOverlay_1ie1o_16",oe="_darkerOverlay_1ie1o_20",se="_modalBody_1ie1o_24",le="_headerLess_1ie1o_40",ie="_fixedHeight_1ie1o_44",de="_contents_1ie1o_48",ce="_header_1ie1o_40",pe="_buttonContainer_1ie1o_62",me="_panelEnter_1ie1o_67",Ae="_panelEnterFrom_1ie1o_73",fe="_panelEnterTo_1ie1o_77",Ce="_panelLeave_1ie1o_81",ye="_panelLeaveFrom_1ie1o_86",Ee="_panelLeaveTo_1ie1o_90",t={modal:ae,overlay:te,normalOverlay:re,darkerOverlay:oe,modalBody:se,headerLess:le,fixedHeight:ie,contents:de,header:ce,buttonContainer:pe,panelEnter:me,panelEnterFrom:Ae,panelEnterTo:fe,panelLeave:Ce,panelLeaveFrom:ye,panelLeaveTo:Ee},r=({children:u,onClose:a,onPrimaryAction:n,onSecondaryAction:i,header:l,primaryActionLabel:g,secondaryActionLabel:h,primaryActionColor:G,closeLabel:J="閉じる",overlayOpacity:K="normal",fixedHeight:Q=!1,showClose:U=!0,open:X=!0,isStatic:Y=!1,ariaLabelledby:d,...Z})=>{const $=ne(K),ee=o.useCallback(c=>{c!==null&&l==null&&d!=null?c.setAttribute("aria-labelledby",d):c!==null&&l==null&&d==null&&c.removeAttribute("aria-labelledby")},[d,l]);return e.jsx(ue,{show:X,as:o.Fragment,enter:t.panelEnter,enterFrom:t.panelEnterFrom,enterTo:t.panelEnterTo,leave:t.panelLeave,leaveFrom:t.panelLeaveFrom,leaveTo:t.panelLeaveTo,children:e.jsxs(B,{ref:ee,static:Y,onClose:a,className:t.modal,"aria-labelledby":d,...Z,children:[e.jsx(B.Overlay,{className:b(t.overlay,t[$])}),e.jsxs("div",{className:b(t.modalBody,!l&&t.headerLess,Q&&t.fixedHeight),children:[l&&e.jsx(B.Title,{className:t.header,children:l}),e.jsx("div",{className:t.contents,children:u}),e.jsxs("div",{className:t.buttonContainer,children:[n&&g&&e.jsx(F,{block:!0,onClick:n,variant:G,children:g}),i&&h&&e.jsx(F,{block:!0,variant:"secondary",onClick:i,children:h}),U&&e.jsx(F,{variant:"text",onClick:a,children:J})]})]})]})})};try{r.displayName="ActionModal",r.__docgenInfo={description:"",displayName:"ActionModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"ネイティブ要素のid属性。ページで固有のIDを指定",name:"id",required:!1,type:{name:"string"}},ariaLabelledby:{defaultValue:null,description:"ネイティブのaria-labelledby属性。独自の見出しを実装する場合にダイアログとの紐づけに使用。ページで固有のIDを指定",name:"ariaLabelledby",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const xe={title:"Modal/ActionModal",component:r},s={header:"モーダル",overlayOpacity:"normal",primaryActionLabel:"回答結果を見る",fixedHeight:!1,isStatic:!1},p={render:u=>{const[a,n]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:s},m={render:u=>{const[a,n]=o.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),secondaryActionLabel:"このまま回答を続ける",onSecondaryAction:()=>n(!1),onClose:()=>n(!1),children:"Default"})]})},args:s},A={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,fixedHeight:!0}},f={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,header:"削除します",primaryActionColor:"alert",overlayOpacity:"darker",closeLabel:"キャンセル"}},C={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,"data-test-id":"some-id"}},y={render:u=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsx(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),children:e.jsx("p",{children:"Default"})})]})},args:{...s,id:"dialog-id"}},E={render:u=>{const[a,n]=o.useState(!1),i="header-id";return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{...u,open:a,onPrimaryAction:()=>n(!1),onClose:()=>n(!1),ariaLabelledby:i,children:[e.jsx("h2",{id:i,children:"Custom Heading"}),e.jsx("p",{children:"Default"})]})]})},args:{...s,header:void 0}};var O,_,D;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)}>
          Default
        </ActionModal>
      </>;
  },
  args: defaultArgs
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var x,v,j;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(v=m.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var M,S,k;A.parameters={...A.parameters,docs:{...(M=A.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    fixedHeight: true
  }
}`,...(k=(S=A.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var L,H,q;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    header: '削除します',
    primaryActionColor: 'alert',
    overlayOpacity: 'darker',
    closeLabel: 'キャンセル'
  }
}`,...(q=(H=f.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var P,V,T;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(V=C.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var N,I,w;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(I=y.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var z,R,W;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const headerId = 'header-id';
    return <>
        <button type="button" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <ActionModal {...args} open={open} onPrimaryAction={() => setOpen(false)} onClose={() => setOpen(false)} ariaLabelledby={headerId}>
          <h2 id={headerId}>Custom Heading</h2>
          <p>Default</p>
        </ActionModal>
      </>;
  },
  args: {
    ...defaultArgs,
    header: undefined
  }
}`,...(W=(R=E.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const ve=["Default","Secondary","FixedHeight","Customized","CustomDataAttribute","WithId","CustomHeader"];export{C as CustomDataAttribute,E as CustomHeader,f as Customized,p as Default,A as FixedHeight,m as Secondary,y as WithId,ve as __namedExportsOrder,xe as default};
