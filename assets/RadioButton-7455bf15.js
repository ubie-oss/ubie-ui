import{j as u}from"./jsx-runtime-69eee039.js";import{c as d}from"./clsx-1229b3e0.js";import{r as c}from"./index-7c191284.js";const p="_icon_13g4b_1",_="_text_13g4b_12",B="_medium_13g4b_17",x="_small_13g4b_22",b="_label_13g4b_28",F="_radio_13g4b_48",e={icon:p,text:_,medium:B,small:x,label:b,radio:F},a=c.forwardRef(({size:t="medium",checked:s,onChange:l,value:i,name:r,children:n,...o},m)=>u.jsx("div",{className:d(e[t]),children:u.jsxs("label",{className:e.label,children:[u.jsx("input",{type:"radio",checked:s,name:r,value:i,className:e.radio,onChange:l,ref:m,...o}),u.jsx("span",{className:e.icon}),u.jsx("span",{className:e.text,children:n})]})}));a.displayName="RadioButton";try{a.displayName="RadioButton",a.__docgenInfo={description:"",displayName:"RadioButton",props:{name:{defaultValue:null,description:"グループ化（排他制御）したい要素には同じ名前をつける",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"選択時のコールバックで渡される値",name:"value",required:!0,type:{name:"string | number"}},children:{defaultValue:null,description:"ラベルに表示されるテキストまたは要素",name:"children",required:!0,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}}}catch{}export{a as R};