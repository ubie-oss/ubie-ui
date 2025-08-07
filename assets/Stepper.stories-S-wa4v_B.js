import{j as e}from"./jsx-runtime-DuyR_K1q.js";import{c as v}from"./clsx-B-dksMZM.js";import{I as F}from"./Icon-ULdndk7k.js";import{m as oe}from"./style-BnM3_UOs.js";import"./index-yUhCOHB4.js";import"./ArrowBDownIcon-DhMIqqai.js";import"./UnfoldMoreIcon-BpmwIn3S.js";const re="_stepper_6vs77_1",ce="_stepperItem_6vs77_9",ue="_borderLine_6vs77_18",te="_iconSpacer_6vs77_29",ve="_leftBorder_6vs77_34",ie="_rightBorder_6vs77_35",se="_border_6vs77_18",de="_hidden_6vs77_41",Ie="_iconWrapper_6vs77_51",pe="_borderColorBlue_6vs77_63",me="_borderColorGray_6vs77_67",be="_doneCircle_6vs77_72",he="_currentCircle_6vs77_85",xe="_undoneCircle_6vs77_93",Se="_current_6vs77_85",Ce="_done_6vs77_72",ge="_undone_6vs77_93",fe="_label_6vs77_114",Ae="_currentLabel_6vs77_124",we="_doneLabel_6vs77_129",_e="_undoneLabel_6vs77_134",n={stepper:re,stepperItem:ce,borderLine:ue,iconSpacer:te,leftBorder:ve,rightBorder:ie,border:se,hidden:de,iconWrapper:Ie,borderColorBlue:pe,borderColorGray:me,doneCircle:be,currentCircle:he,undoneCircle:xe,current:Se,done:Ce,undone:ge,label:fe,currentLabel:Ae,doneLabel:we,undoneLabel:_e},B=({label:a,icon:c,doneIcon:I,status:o="undone",isFirst:i=!1,isLast:s=!1,stepIndex:u=0,currentStep:t=0,...A})=>{const w=()=>o==="done"&&I?e.jsx(F,{icon:I}):(o==="current"||o==="undone")&&c?e.jsx(F,{icon:c}):o==="done"?e.jsx("div",{className:n.doneCircle,children:e.jsx(F,{icon:"CheckAIcon"})}):o==="current"?e.jsx("div",{className:n.currentCircle}):e.jsx("div",{className:n.undoneCircle}),_=v({[n.stepperItem]:!0,[n.current]:o==="current",[n.done]:o==="done",[n.undone]:o==="undone"}),d=v({[n.leftBorder]:!0}),r=v({[n.rightBorder]:!0}),y=v({[n.border]:!0,[n.hidden]:i,[n.borderColorBlue]:!i&&u<=t,[n.borderColorGray]:!i&&u>t}),le=v({[n.border]:!0,[n.hidden]:s,[n.borderColorBlue]:!s&&u<t,[n.borderColorGray]:!s&&u>=t}),ae=v({[n.label]:!0,[n.currentLabel]:o==="current",[n.doneLabel]:o==="done",[n.undoneLabel]:o==="undone"});return e.jsxs("div",{className:_,...A,children:[e.jsxs("div",{className:n.borderLine,children:[e.jsx("div",{className:d,children:e.jsx("div",{className:y})}),e.jsx("div",{className:n.iconSpacer}),e.jsx("div",{className:r,children:e.jsx("div",{className:le})})]}),e.jsx("div",{className:n.iconWrapper,children:w()}),e.jsx("div",{className:ae,children:a})]})};try{B.displayName="StepperItem",B.__docgenInfo={description:"",displayName:"StepperItem",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"AccountIcon"'},{value:'"AccountSettingIcon"'},{value:'"AddressIcon"'},{value:'"AlertIcon"'},{value:'"AmbulanceIcon"'},{value:'"ArrowADownIcon"'},{value:'"ArrowALeftIcon"'},{value:'"ArrowARightIcon"'},{value:'"ArrowAUpIcon"'},{value:'"ArrowBDownIcon"'},{value:'"ArrowBLeftIcon"'},{value:'"ArrowBRightIcon"'},{value:'"ArrowBUpIcon"'},{value:'"ArrowCDownFillIcon"'},{value:'"ArrowCDownIcon"'},{value:'"ArrowCLeftFillIcon"'},{value:'"ArrowCLeftIcon"'},{value:'"ArrowCRightFillIcon"'},{value:'"ArrowCRightIcon"'},{value:'"ArrowCUpFillIcon"'},{value:'"ArrowCUpIcon"'},{value:'"ArrowDDownIcon"'},{value:'"ArrowDLeftIcon"'},{value:'"ArrowDRightIcon"'},{value:'"ArrowDUpIcon"'},{value:'"ArrowEDownIcon"'},{value:'"ArrowELeftIcon"'},{value:'"ArrowERightIcon"'},{value:'"ArrowEUpIcon"'},{value:'"BeginnerIcon"'},{value:'"BikeIcon"'},{value:'"BirthdayIcon"'},{value:'"BlankLinkIcon"'},{value:'"BookmarkFillIcon"'},{value:'"BookmarkOutlineIcon"'},{value:'"BoyIcon"'},{value:'"CalendarIcon"'},{value:'"CameraIcon"'},{value:'"CancelIcon"'},{value:'"CapsuleIcon"'},{value:'"CapsuleTabletIcon"'},{value:'"CarIcon"'},{value:'"CheckAIcon"'},{value:'"CheckBFillIcon"'},{value:'"CheckBIcon"'},{value:'"CheckboxOffOutlineIcon"'},{value:'"CheckboxOnOutlineIcon"'},{value:'"CircleFillIcon"'},{value:'"CircleOutlineIcon"'},{value:'"CloseAIcon"'},{value:'"CloseBIcon"'},{value:'"CommentBubbleIcon"'},{value:'"CommentFillIcon"'},{value:'"CommentOutlineIcon"'},{value:'"CommentWritingFillIcon"'},{value:'"CommentWritingOutlineIcon"'},{value:'"ConditionBad1Icon"'},{value:'"ConditionBad2Icon"'},{value:'"ConditionBad3Icon"'},{value:'"ConditionGood1Icon"'},{value:'"ConditionGood2Icon"'},{value:'"ConditionGood3Icon"'},{value:'"ConditionNormalIcon"'},{value:'"CopyIcon"'},{value:'"CreditCardIcon"'},{value:'"CropIcon"'},{value:'"DevicesIcon"'},{value:'"DisplayIcon"'},{value:'"DoctorBagIcon"'},{value:'"DoctorIcon"'},{value:'"DoublecircleIcon"'},{value:'"DownloadIcon"'},{value:'"DrawerIcon"'},{value:'"EcgHeartFillIcon"'},{value:'"EcgOutlineIcon"'},{value:'"EditIcon"'},{value:'"ExpansionIcon"'},{value:'"FavoliteAddIcon"'},{value:'"FavoliteOutlineIcon"'},{value:'"FavoriteAddIcon"'},{value:'"FavoriteFillIcon"'},{value:'"FavoriteOutlineIcon"'},{value:'"FavoriteRemoveIcon"'},{value:'"FemaleHumanIcon"'},{value:'"FemaleSymbolIcon"'},{value:'"FileIcon"'},{value:'"FilterIcon"'},{value:'"FingerDownIcon"'},{value:'"FingerLeftIcon"'},{value:'"FingerRightIcon"'},{value:'"FingerUpIcon"'},{value:'"FirstAidBoxIcon"'},{value:'"FlagIcon"'},{value:'"FolderIcon"'},{value:'"GenderHumanIcon"'},{value:'"GenderSymbolIcon"'},{value:'"GirlIcon"'},{value:'"HelpIcon"'},{value:'"HideFillIcon"'},{value:'"HideOutlineIcon"'},{value:'"HistoryIcon"'},{value:'"HomeOutlineIcon"'},{value:'"HospitalIcon"'},{value:'"ImageIcon"'},{value:'"InformationIcon"'},{value:'"InjectionIcon"'},{value:'"InsuranceCardIcon"'},{value:'"LaptopIcon"'},{value:'"LeaderHorizontalIcon"'},{value:'"LeaderVerticalIcon"'},{value:'"LightIcon"'},{value:'"LightOnIcon"'},{value:'"LockIcon"'},{value:'"LoginIcon"'},{value:'"LogoutIcon"'},{value:'"MailOutlineIcon"'},{value:'"MaleHumanIcon"'},{value:'"MaleSymbolIcon"'},{value:'"ManIcon"'},{value:'"MapIcon"'},{value:'"MaskIcon"'},{value:'"MedicalIdIcon"'},{value:'"MedicalIdOffIcon"'},{value:'"MedicalFormIcon"'},{value:'"MedicalHeartIcon"'},{value:'"MedicalSymbolFillIcon"'},{value:'"MedicalSymbolOutlineIcon"'},{value:'"MemoIcon"'},{value:'"MenuIcon"'},{value:'"MicIcon"'},{value:'"MicMuteIcon"'},{value:'"MinusAIcon"'},{value:'"MinusBIcon"'},{value:'"MoveIcon"'},{value:'"MuteIcon"'},{value:'"MynumberCardIcon"'},{value:'"NotificationIcon"'},{value:'"NurseIcon"'},{value:'"OldManIcon"'},{value:'"OldWomanIcon"'},{value:'"PenIcon"'},{value:'"PersonAddIcon"'},{value:'"PersonRemoveIcon"'},{value:'"PhoneIcon"'},{value:'"PinIcon"'},{value:'"PlusAIcon"'},{value:'"PlusBIcon"'},{value:'"PostIcon"'},{value:'"PostalCodeIcon"'},{value:'"PrinterIcon"'},{value:'"QrCodeReaderIcon"'},{value:'"RangeSelectionIcon"'},{value:'"ReceptionIcon"'},{value:'"RedoIcon"'},{value:'"ReloadIcon"'},{value:'"ReturnIcon"'},{value:'"RotateIcon"'},{value:'"SearchIcon"'},{value:'"SecurityIcon"'},{value:'"SendIcon"'},{value:'"SettingIcon"'},{value:'"SetupIcon"'},{value:'"ShareIcon"'},{value:'"ShareBIcon"'},{value:'"ShowFillIcon"'},{value:'"ShowOutlineIcon"'},{value:'"ShrinkIcon"'},{value:'"SickIcon"'},{value:'"SmartphoneIcon"'},{value:'"SortAtozIcon"'},{value:'"SortIcon"'},{value:'"SquareIcon"'},{value:'"StarFillIcon"'},{value:'"StarHalfIcon"'},{value:'"StarOutlineIcon"'},{value:'"StethoscopeIcon"'},{value:'"TabletIcon"'},{value:'"ThumbDownFillIcon"'},{value:'"ThumbDownOutlineIcon"'},{value:'"ThumbUpFillIcon"'},{value:'"ThumbUpOutlineIcon"'},{value:'"TrainIcon"'},{value:'"TrashEmptyIcon"'},{value:'"TrashIcon"'},{value:'"TriangleDownIcon"'},{value:'"TriangleUpIcon"'},{value:'"UbieIcon"'},{value:'"UnfoldMoreIcon"'},{value:'"UnlockIcon"'},{value:'"UploadIcon"'},{value:'"VirusIcon"'},{value:'"VolumeIcon"'},{value:'"WalkIcon"'},{value:'"WeightScaleIcon"'},{value:'"WheelchairIcon"'},{value:'"WomanIcon"'}]}},doneIcon:{defaultValue:null,description:"",name:"doneIcon",required:!1,type:{name:"enum",value:[{value:'"AccountIcon"'},{value:'"AccountSettingIcon"'},{value:'"AddressIcon"'},{value:'"AlertIcon"'},{value:'"AmbulanceIcon"'},{value:'"ArrowADownIcon"'},{value:'"ArrowALeftIcon"'},{value:'"ArrowARightIcon"'},{value:'"ArrowAUpIcon"'},{value:'"ArrowBDownIcon"'},{value:'"ArrowBLeftIcon"'},{value:'"ArrowBRightIcon"'},{value:'"ArrowBUpIcon"'},{value:'"ArrowCDownFillIcon"'},{value:'"ArrowCDownIcon"'},{value:'"ArrowCLeftFillIcon"'},{value:'"ArrowCLeftIcon"'},{value:'"ArrowCRightFillIcon"'},{value:'"ArrowCRightIcon"'},{value:'"ArrowCUpFillIcon"'},{value:'"ArrowCUpIcon"'},{value:'"ArrowDDownIcon"'},{value:'"ArrowDLeftIcon"'},{value:'"ArrowDRightIcon"'},{value:'"ArrowDUpIcon"'},{value:'"ArrowEDownIcon"'},{value:'"ArrowELeftIcon"'},{value:'"ArrowERightIcon"'},{value:'"ArrowEUpIcon"'},{value:'"BeginnerIcon"'},{value:'"BikeIcon"'},{value:'"BirthdayIcon"'},{value:'"BlankLinkIcon"'},{value:'"BookmarkFillIcon"'},{value:'"BookmarkOutlineIcon"'},{value:'"BoyIcon"'},{value:'"CalendarIcon"'},{value:'"CameraIcon"'},{value:'"CancelIcon"'},{value:'"CapsuleIcon"'},{value:'"CapsuleTabletIcon"'},{value:'"CarIcon"'},{value:'"CheckAIcon"'},{value:'"CheckBFillIcon"'},{value:'"CheckBIcon"'},{value:'"CheckboxOffOutlineIcon"'},{value:'"CheckboxOnOutlineIcon"'},{value:'"CircleFillIcon"'},{value:'"CircleOutlineIcon"'},{value:'"CloseAIcon"'},{value:'"CloseBIcon"'},{value:'"CommentBubbleIcon"'},{value:'"CommentFillIcon"'},{value:'"CommentOutlineIcon"'},{value:'"CommentWritingFillIcon"'},{value:'"CommentWritingOutlineIcon"'},{value:'"ConditionBad1Icon"'},{value:'"ConditionBad2Icon"'},{value:'"ConditionBad3Icon"'},{value:'"ConditionGood1Icon"'},{value:'"ConditionGood2Icon"'},{value:'"ConditionGood3Icon"'},{value:'"ConditionNormalIcon"'},{value:'"CopyIcon"'},{value:'"CreditCardIcon"'},{value:'"CropIcon"'},{value:'"DevicesIcon"'},{value:'"DisplayIcon"'},{value:'"DoctorBagIcon"'},{value:'"DoctorIcon"'},{value:'"DoublecircleIcon"'},{value:'"DownloadIcon"'},{value:'"DrawerIcon"'},{value:'"EcgHeartFillIcon"'},{value:'"EcgOutlineIcon"'},{value:'"EditIcon"'},{value:'"ExpansionIcon"'},{value:'"FavoliteAddIcon"'},{value:'"FavoliteOutlineIcon"'},{value:'"FavoriteAddIcon"'},{value:'"FavoriteFillIcon"'},{value:'"FavoriteOutlineIcon"'},{value:'"FavoriteRemoveIcon"'},{value:'"FemaleHumanIcon"'},{value:'"FemaleSymbolIcon"'},{value:'"FileIcon"'},{value:'"FilterIcon"'},{value:'"FingerDownIcon"'},{value:'"FingerLeftIcon"'},{value:'"FingerRightIcon"'},{value:'"FingerUpIcon"'},{value:'"FirstAidBoxIcon"'},{value:'"FlagIcon"'},{value:'"FolderIcon"'},{value:'"GenderHumanIcon"'},{value:'"GenderSymbolIcon"'},{value:'"GirlIcon"'},{value:'"HelpIcon"'},{value:'"HideFillIcon"'},{value:'"HideOutlineIcon"'},{value:'"HistoryIcon"'},{value:'"HomeOutlineIcon"'},{value:'"HospitalIcon"'},{value:'"ImageIcon"'},{value:'"InformationIcon"'},{value:'"InjectionIcon"'},{value:'"InsuranceCardIcon"'},{value:'"LaptopIcon"'},{value:'"LeaderHorizontalIcon"'},{value:'"LeaderVerticalIcon"'},{value:'"LightIcon"'},{value:'"LightOnIcon"'},{value:'"LockIcon"'},{value:'"LoginIcon"'},{value:'"LogoutIcon"'},{value:'"MailOutlineIcon"'},{value:'"MaleHumanIcon"'},{value:'"MaleSymbolIcon"'},{value:'"ManIcon"'},{value:'"MapIcon"'},{value:'"MaskIcon"'},{value:'"MedicalIdIcon"'},{value:'"MedicalIdOffIcon"'},{value:'"MedicalFormIcon"'},{value:'"MedicalHeartIcon"'},{value:'"MedicalSymbolFillIcon"'},{value:'"MedicalSymbolOutlineIcon"'},{value:'"MemoIcon"'},{value:'"MenuIcon"'},{value:'"MicIcon"'},{value:'"MicMuteIcon"'},{value:'"MinusAIcon"'},{value:'"MinusBIcon"'},{value:'"MoveIcon"'},{value:'"MuteIcon"'},{value:'"MynumberCardIcon"'},{value:'"NotificationIcon"'},{value:'"NurseIcon"'},{value:'"OldManIcon"'},{value:'"OldWomanIcon"'},{value:'"PenIcon"'},{value:'"PersonAddIcon"'},{value:'"PersonRemoveIcon"'},{value:'"PhoneIcon"'},{value:'"PinIcon"'},{value:'"PlusAIcon"'},{value:'"PlusBIcon"'},{value:'"PostIcon"'},{value:'"PostalCodeIcon"'},{value:'"PrinterIcon"'},{value:'"QrCodeReaderIcon"'},{value:'"RangeSelectionIcon"'},{value:'"ReceptionIcon"'},{value:'"RedoIcon"'},{value:'"ReloadIcon"'},{value:'"ReturnIcon"'},{value:'"RotateIcon"'},{value:'"SearchIcon"'},{value:'"SecurityIcon"'},{value:'"SendIcon"'},{value:'"SettingIcon"'},{value:'"SetupIcon"'},{value:'"ShareIcon"'},{value:'"ShareBIcon"'},{value:'"ShowFillIcon"'},{value:'"ShowOutlineIcon"'},{value:'"ShrinkIcon"'},{value:'"SickIcon"'},{value:'"SmartphoneIcon"'},{value:'"SortAtozIcon"'},{value:'"SortIcon"'},{value:'"SquareIcon"'},{value:'"StarFillIcon"'},{value:'"StarHalfIcon"'},{value:'"StarOutlineIcon"'},{value:'"StethoscopeIcon"'},{value:'"TabletIcon"'},{value:'"ThumbDownFillIcon"'},{value:'"ThumbDownOutlineIcon"'},{value:'"ThumbUpFillIcon"'},{value:'"ThumbUpOutlineIcon"'},{value:'"TrainIcon"'},{value:'"TrashEmptyIcon"'},{value:'"TrashIcon"'},{value:'"TriangleDownIcon"'},{value:'"TriangleUpIcon"'},{value:'"UbieIcon"'},{value:'"UnfoldMoreIcon"'},{value:'"UnlockIcon"'},{value:'"UploadIcon"'},{value:'"VirusIcon"'},{value:'"VolumeIcon"'},{value:'"WalkIcon"'},{value:'"WeightScaleIcon"'},{value:'"WheelchairIcon"'},{value:'"WomanIcon"'}]}},status:{defaultValue:{value:"undone"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"current"'},{value:'"done"'},{value:'"undone"'}]}},isFirst:{defaultValue:{value:"false"},description:"",name:"isFirst",required:!1,type:{name:"boolean"}},isLast:{defaultValue:{value:"false"},description:"",name:"isLast",required:!1,type:{name:"boolean"}},stepIndex:{defaultValue:{value:"0"},description:"",name:"stepIndex",required:!1,type:{name:"number"}},currentStep:{defaultValue:{value:"0"},description:"",name:"currentStep",required:!1,type:{name:"number"}}}}}catch{}const l=({steps:a,currentStep:c=0,m:I,mx:o,my:i,mt:s,mr:u,mb:t,ml:A,...w})=>{const _=oe({m:I,mx:o,my:i,mt:s,mr:u,mb:t,ml:A});return e.jsx("div",{className:n.stepper,style:_,...w,children:a.map((d,r)=>{const y=r<c?"done":r===c?"current":"undone";return e.jsx(B,{label:d.label,icon:d.icon,doneIcon:d.doneIcon,status:y,isFirst:r===0,isLast:r===a.length-1,stepIndex:r,currentStep:c},r)})})};try{l.displayName="Stepper",l.__docgenInfo={description:"",displayName:"Stepper",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"StepData[]"}},currentStep:{defaultValue:{value:"0"},description:"",name:"currentStep",required:!1,type:{name:"number"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:"enum",value:[{value:'"md"'},{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'}]}}}}}catch{}const ke={title:"Navigation/Stepper",component:l,parameters:{docs:{description:{component:"ステップ形式のナビゲーションコンポーネント。進行状況を視覚的に表示します。"}}}},ye={currentStep:1},p={render:a=>e.jsx(l,{...a,steps:[{label:"ステップ1"},{label:"ステップ2"},{label:"ステップ3"}]}),args:ye},m={render:()=>{const a=[{label:"ステップ1"},{label:"ステップ2"},{label:"ステップ3"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Current Step: 0"}),e.jsx(l,{currentStep:0,steps:a})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"Current Step: 1"}),e.jsx(l,{currentStep:1,steps:a})]}),e.jsxs("div",{children:[e.jsx("h2",{children:"Current Step: 2"}),e.jsx(l,{currentStep:2,steps:a})]})]})}},b={render:()=>e.jsx(l,{currentStep:1,steps:[{label:"知りたいこと"},{label:"受診について"},{label:"他に知りたいこと"},{label:"確認と入力"}]})},h={render:()=>e.jsx(l,{currentStep:2,steps:[{label:"ステップ1"},{label:"ステップ2"},{label:"ステップ3"},{label:"ステップ4"},{label:"ステップ5"}]})},x={render:()=>e.jsx(l,{currentStep:1,steps:[{label:"ステップステップステップステップステップステップ"},{label:`改行
も
できます`},{label:"ステップステップステップステップステップステップステップステップステップステップ"}]})},S={render:()=>e.jsx(l,{currentStep:1,steps:[{label:"ホーム",icon:"HomeOutlineIcon"},{label:"設定",icon:"SetupIcon"},{label:"完了",icon:"CheckAIcon",doneIcon:"CheckAIcon"}]})},C={render:()=>{const a=[{label:"ステップ1"},{label:"ステップ2"},{label:"ステップ3"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Step 0 (開始)"}),e.jsx(l,{currentStep:0,steps:a})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Step 1 (進行中)"}),e.jsx(l,{currentStep:1,steps:a})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Step 2 (完了間近)"}),e.jsx(l,{currentStep:2,steps:a})]})]})}},g={render:()=>e.jsx("div",{style:{border:"1px dashed #ccc",padding:"16px"},children:e.jsx(l,{m:"lg",currentStep:1,steps:[{label:"ステップ1"},{label:"ステップ2"},{label:"ステップ3"}]})})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{style:{width:"280px",border:"1px solid #eee",padding:"16px"},children:[e.jsx("h4",{children:"幅280px"}),e.jsx(l,{currentStep:1,steps:[{label:"ステップ"},{label:"ステップ"},{label:"ステップ"}]})]}),e.jsxs("div",{style:{width:"440px",border:"1px solid #eee",padding:"16px"},children:[e.jsx("h4",{children:"幅440px"}),e.jsx(l,{currentStep:1,steps:[{label:"知りたいこと"},{label:"受診について"},{label:"他に知りたいこと"},{label:"確認と入力"}]})]}),e.jsxs("div",{style:{width:"640px",border:"1px solid #eee",padding:"16px"},children:[e.jsx("h4",{children:"幅640px"}),e.jsx(l,{currentStep:1,steps:[{label:"ステップステップステップステップステップステップ"},{label:`改行
も
できます`},{label:"ステップステップステップステップステップステップステップステップステップステップ"}]})]})]})};var j,L,D;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Stepper {...args} steps={[{
    label: 'ステップ1'
  }, {
    label: 'ステップ2'
  }, {
    label: 'ステップ3'
  }]} />,
  args: defaultArgs
}`,...(D=(L=p.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var M,O,k;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const steps = [{
      label: 'ステップ1'
    }, {
      label: 'ステップ2'
    }, {
      label: 'ステップ3'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        <div>
          <h2>Current Step: 0</h2>
          <Stepper currentStep={0} steps={steps} />
        </div>

        <div>
          <h2>Current Step: 1</h2>
          <Stepper currentStep={1} steps={steps} />
        </div>

        <div>
          <h2>Current Step: 2</h2>
          <Stepper currentStep={2} steps={steps} />
        </div>
      </div>;
  }
}`,...(k=(O=m.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var R,H,U;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Stepper currentStep={1} steps={[{
    label: '知りたいこと'
  }, {
    label: '受診について'
  }, {
    label: '他に知りたいこと'
  }, {
    label: '確認と入力'
  }]} />
}`,...(U=(H=b.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var N,T,V;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Stepper currentStep={2} steps={[{
    label: 'ステップ1'
  }, {
    label: 'ステップ2'
  }, {
    label: 'ステップ3'
  }, {
    label: 'ステップ4'
  }, {
    label: 'ステップ5'
  }]} />
}`,...(V=(T=h.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var P,W,E;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Stepper currentStep={1} steps={[{
    label: 'ステップステップステップステップステップステップ'
  }, {
    label: '改行\\nも\\nできます'
  }, {
    label: 'ステップステップステップステップステップステップステップステップステップステップ'
  }]} />
}`,...(E=(W=x.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var q,G,z;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Stepper currentStep={1} steps={[{
    label: 'ホーム',
    icon: 'HomeOutlineIcon'
  }, {
    label: '設定',
    icon: 'SetupIcon'
  }, {
    label: '完了',
    icon: 'CheckAIcon',
    doneIcon: 'CheckAIcon'
  }]} />
}`,...(z=(G=S.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var Q,J,K;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const steps = [{
      label: 'ステップ1'
    }, {
      label: 'ステップ2'
    }, {
      label: 'ステップ3'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        <div>
          <h3>Step 0 (開始)</h3>
          <Stepper currentStep={0} steps={steps} />
        </div>

        <div>
          <h3>Step 1 (進行中)</h3>
          <Stepper currentStep={1} steps={steps} />
        </div>

        <div>
          <h3>Step 2 (完了間近)</h3>
          <Stepper currentStep={2} steps={steps} />
        </div>
      </div>;
  }
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px dashed #ccc',
    padding: '16px'
  }}>
      <Stepper m="lg" currentStep={1} steps={[{
      label: 'ステップ1'
    }, {
      label: 'ステップ2'
    }, {
      label: 'ステップ3'
    }]} />
    </div>
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div style={{
      width: '280px',
      border: '1px solid #eee',
      padding: '16px'
    }}>
        <h4>幅280px</h4>
        <Stepper currentStep={1} steps={[{
        label: 'ステップ'
      }, {
        label: 'ステップ'
      }, {
        label: 'ステップ'
      }]} />
      </div>

      <div style={{
      width: '440px',
      border: '1px solid #eee',
      padding: '16px'
    }}>
        <h4>幅440px</h4>
        <Stepper currentStep={1} steps={[{
        label: '知りたいこと'
      }, {
        label: '受診について'
      }, {
        label: '他に知りたいこと'
      }, {
        label: '確認と入力'
      }]} />
      </div>

      <div style={{
      width: '640px',
      border: '1px solid #eee',
      padding: '16px'
    }}>
        <h4>幅640px</h4>
        <Stepper currentStep={1} steps={[{
        label: 'ステップステップステップステップステップステップ'
      }, {
        label: '改行\\nも\\nできます'
      }, {
        label: 'ステップステップステップステップステップステップステップステップステップステップ'
      }]} />
      </div>
    </div>
}`,...(ne=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Re=["Default","ThreeSteps","FourSteps","FiveSteps","LongLabels","CustomIcons","ProgressStates","WithMargins","DifferentWidths"];export{S as CustomIcons,p as Default,f as DifferentWidths,h as FiveSteps,b as FourSteps,x as LongLabels,C as ProgressStates,m as ThreeSteps,g as WithMargins,Re as __namedExportsOrder,ke as default};
