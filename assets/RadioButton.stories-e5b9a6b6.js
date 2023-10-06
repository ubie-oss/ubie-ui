import{a as e,c as D,j as d}from"./clsx-0a53246e.js";import{r as h}from"./index-76fb7be0.js";import{S as m}from"./Stack-ac0bc903.js";import"./_commonjsHelpers-de833af9.js";const E="_icon_1tlvy_1",F="_medium_1tlvy_12",A="_small_1tlvy_17",I="_label_1tlvy_23",z="_radio_1tlvy_43",N="_text_1tlvy_56",s={icon:E,medium:F,small:A,label:I,radio:z,text:N},u=({size:a="medium",checked:r,onChange:i,value:o,name:t,children:x,...R})=>e("div",{className:D(s.container,s[a]),children:d("label",{className:s.label,children:[e("input",{type:"radio",checked:r,name:t,value:o,className:s.radio,onChange:i,...R}),e("span",{className:s.icon}),e("span",{className:s.text,children:x})]})});try{u.displayName="RadioButton",u.__docgenInfo={description:"",displayName:"RadioButton",props:{name:{defaultValue:null,description:"グループ化（排他制御）したい要素には同じ名前をつける",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"選択時のコールバックで渡される値",name:"value",required:!0,type:{name:"string | number"}},children:{defaultValue:null,description:"ラベルに表示されるテキストまたは要素",name:"children",required:!0,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}}}}}catch{}const H={title:"Form/RadioButton",component:u},p={disabled:!1},g=["option1","option2","option3"],l={render:a=>{const[r,i]=h.useState(g[0]),o=h.useCallback(t=>{i(t.target.value)},[]);return d(m,{spacing:"xs",children:[g.map(t=>e(u,{...a,value:t,id:t,onChange:o,checked:r===t,children:t},t)),d("dl",{children:[e("dt",{children:"Values"}),e("dd",{children:r})]})]})},args:{...p,name:"default"}},n={render:a=>d(m,{spacing:"xs",children:[e(u,{...a,value:"medium",id:"medium",children:"Medium"}),e(u,{...a,value:"small",id:"small",size:"small",children:"Small"})]}),args:{...p,name:"size"}},c={render:a=>d(m,{spacing:"xs",children:[e(u,{...a,value:"checked",id:"checked",checked:!0,disabled:!0,children:"Checked"}),e(u,{...a,value:"unchecked",id:"unchecked",disabled:!0,children:"Unchecked"})]}),args:{...p,name:"disabled"}};var _,v,B;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState(options[0]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      setSelectedItem(event.target.value);
    }, []);
    return <Stack spacing="xs">
        {options.map(option => <RadioButton key={option} {...args} value={option} id={option} onChange={onChange} checked={selectedItem === option}>
            {option}
          </RadioButton>)}

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem}</dd>
        </dl>
      </Stack>;
  },
  args: {
    ...defaultArgs,
    name: 'default'
  }
}`,...(B=(v=l.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var k,S,f;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Stack spacing="xs">
      <RadioButton {...args} value="medium" id="medium">
        Medium
      </RadioButton>
      <RadioButton {...args} value="small" id="small" size="small">
        Small
      </RadioButton>
    </Stack>,
  args: {
    ...defaultArgs,
    name: 'size'
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var b,y,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Stack spacing="xs">
      <RadioButton {...args} value="checked" id="checked" checked disabled>
        Checked
      </RadioButton>

      <RadioButton {...args} value="unchecked" id="unchecked" disabled>
        Unchecked
      </RadioButton>
    </Stack>,
  args: {
    ...defaultArgs,
    name: 'disabled'
  }
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const U=["Default","Size","Disabled"];export{l as Default,c as Disabled,n as Size,U as __namedExportsOrder,H as default};
//# sourceMappingURL=RadioButton.stories-e5b9a6b6.js.map
