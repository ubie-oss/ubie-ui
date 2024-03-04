import{a as u,j as r,F as p}from"./jsx-runtime-03b4ddbf.js";import{r as l}from"./index-76fb7be0.js";import{c as E}from"./clsx-1229b3e0.js";import{t as z,_ as A,o as I}from"./style-715f24ee.js";import{B as C}from"./Button-f56da743.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./VariantIcon-301a10e9.js";const G="_modal_1fc98_1",J="_overlay_1fc98_14",K="_normalOverlay_1fc98_22",Q="_darkerOverlay_1fc98_26",R="_modalBody_1fc98_30",U="_headerLess_1fc98_46",W="_fixedHeight_1fc98_50",X="_contents_1fc98_54",Y="_header_1fc98_46",Z="_buttonContainer_1fc98_68",$="_panelEnter_1fc98_73",ee="_panelEnterFrom_1fc98_79",ue="_panelEnterTo_1fc98_83",ae="_panelLeave_1fc98_87",ne="_panelLeaveFrom_1fc98_92",te="_panelLeaveTo_1fc98_96",a={modal:G,overlay:J,normalOverlay:K,darkerOverlay:Q,modalBody:R,headerLess:U,fixedHeight:W,contents:X,header:Y,buttonContainer:Z,panelEnter:$,panelEnterFrom:ee,panelEnterTo:ue,panelLeave:ae,panelLeaveFrom:ne,panelLeaveTo:te},o=({children:n,onClose:t,onPrimaryAction:e,onSecondaryAction:y,header:f,primaryActionLabel:F,secondaryActionLabel:B,primaryActionColor:q,closeLabel:V="閉じる",overlayOpacity:H="normal",fixedHeight:T=!1,showClose:N=!0,open:P=!0,isStatic:j=!1})=>{const w=I(H);return u(z,{show:P,as:l.Fragment,enter:a.panelEnter,enterFrom:a.panelEnterFrom,enterTo:a.panelEnterTo,leave:a.panelLeave,leaveFrom:a.panelLeaveFrom,leaveTo:a.panelLeaveTo,children:r(A,{static:j,onClose:t,className:a.modal,children:[u(A.Overlay,{className:E(a.overlay,a[w])}),r("div",{className:E(a.modalBody,!f&&a.headerLess,T&&a.fixedHeight),children:[f&&u(A.Title,{className:a.header,children:f}),u("div",{className:a.contents,children:n}),r("div",{className:a.buttonContainer,children:[e&&F&&u(C,{block:!0,onClick:e,variant:q,children:F}),y&&B&&u(C,{block:!0,variant:"secondary",onClick:y,children:B}),N&&u(C,{variant:"text",onClick:t,children:V})]})]})]})})};try{o.displayName="ActionModal",o.__docgenInfo={description:"",displayName:"ActionModal",props:{onClose:{defaultValue:null,description:"閉じるアクションが実行された場合のコールバック",name:"onClose",required:!0,type:{name:"() => void"}},onPrimaryAction:{defaultValue:null,description:"プライマリーアクションボタンが実行された場合のコールバック",name:"onPrimaryAction",required:!1,type:{name:"(() => void)"}},header:{defaultValue:null,description:"ヘッダーに表示する見出しテキスト",name:"header",required:!1,type:{name:"string"}},primaryActionLabel:{defaultValue:null,description:"プライマリーアクションボタンのラベル",name:"primaryActionLabel",required:!1,type:{name:"string"}},primaryActionColor:{defaultValue:null,description:"プライマリーアクションボタンのカラースキーム",name:"primaryActionColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'}]}},closeLabel:{defaultValue:{value:"閉じる"},description:"閉じるボタンのラベル",name:"closeLabel",required:!1,type:{name:"string"}},overlayOpacity:{defaultValue:{value:"normal"},description:"オーバーレイの透過度",name:"overlayOpacity",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"darker"'}]}},fixedHeight:{defaultValue:{value:"false"},description:"画面を占有する高さで固定するかどうか",name:"fixedHeight",required:!1,type:{name:"boolean"}},showClose:{defaultValue:{value:"true"},description:"閉じるボタンを表示するかどうか",name:"showClose",required:!1,type:{name:"boolean"}},open:{defaultValue:{value:"true"},description:"モーダルダイアログを開くかどうか",name:"open",required:!1,type:{name:"boolean"}},isStatic:{defaultValue:{value:"false"},description:"openを無視してモーダルを開いたままにするかどうか。アニメーションライブラリとの連携で、ActionHalfModal自身が開閉に関与しない場合に使用",name:"isStatic",required:!1,type:{name:"boolean"}},onSecondaryAction:{defaultValue:null,description:"セカンダリーアクションが実行された場合のコールバック",name:"onSecondaryAction",required:!1,type:{name:"(() => void)"}},secondaryActionLabel:{defaultValue:null,description:"セカンダリーアクションボタンのラベル",name:"secondaryActionLabel",required:!1,type:{name:"string"}}}}}catch{}const me={title:"Modal/ActionModal",component:o},m={header:"モーダル",overlayOpacity:"normal",primaryActionLabel:"回答結果を見る",fixedHeight:!1,isStatic:!1},s={render:n=>{const[t,e]=l.useState(!0);return r(p,{children:[u("button",{type:"button",onClick:()=>e(!0),children:"Open Modal"}),u(o,{...n,open:t,onPrimaryAction:()=>e(!1),onClose:()=>e(!1),children:"Default"})]})},args:m},c={render:n=>{const[t,e]=l.useState(!0);return r(p,{children:[u("button",{type:"button",onClick:()=>e(!0),children:"Open Modal"}),u(o,{...n,open:t,onPrimaryAction:()=>e(!1),secondaryActionLabel:"このまま回答を続ける",onSecondaryAction:()=>e(!1),onClose:()=>e(!1),children:"Default"})]})},args:m},i={render:n=>{const[t,e]=l.useState(!1);return r(p,{children:[u("button",{type:"button",onClick:()=>e(!0),children:"Open Modal"}),u(o,{...n,open:t,onPrimaryAction:()=>e(!1),onClose:()=>e(!1),children:u("p",{children:"Default"})})]})},args:{...m,fixedHeight:!0}},d={render:n=>{const[t,e]=l.useState(!1);return r(p,{children:[u("button",{type:"button",onClick:()=>e(!0),children:"Open Modal"}),u(o,{...n,open:t,onPrimaryAction:()=>e(!1),onClose:()=>e(!1),children:u("p",{children:"Default"})})]})},args:{...m,header:"削除します",primaryActionColor:"alert",overlayOpacity:"darker",closeLabel:"キャンセル"}};var _,v,h;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,O,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(O=c.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var D,L,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var S,k,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(k=d.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const fe=["Default","Secondary","FixedHeight","Customized"];export{d as Customized,s as Default,i as FixedHeight,c as Secondary,fe as __namedExportsOrder,me as default};
//# sourceMappingURL=ActionModal.stories-323ca0b2.js.map
