import{a as e,j as l,c as D}from"./clsx-0a53246e.js";import{r as m}from"./index-76fb7be0.js";import{S as h}from"./Stack-ac0bc903.js";import"./_commonjsHelpers-de833af9.js";function y(n){return e("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.8839 7.11612C21.372 7.60427 21.372 8.39573 20.8839 8.88388L10.8839 18.8839C10.3957 19.372 9.60427 19.372 9.11612 18.8839L3.11612 12.8839C2.62796 12.3957 2.62796 11.6043 3.11612 11.1161C3.60427 10.628 4.39573 10.628 4.88388 11.1161L10 16.2322L19.1161 7.11612C19.6043 6.62796 20.3957 6.62796 20.8839 7.11612Z",fill:"currentColor"},void 0)}),void 0)}const F="_container_13zh9_1",A="_checkbox_13zh9_13",L="_checkIconContainer_13zh9_23",N="_medium_13zh9_33",V="_small_13zh9_38",j="_checkIcon_13zh9_23",s={container:F,checkbox:A,checkIconContainer:L,medium:N,small:V,checkIcon:j},a=({size:n="medium",children:t,...u})=>l("label",{className:D(s.container,s[n]),children:[e("input",{type:"checkbox",className:s.checkbox,...u}),e("span",{className:s.checkIconContainer,children:e(y,{className:s.checkIcon})}),t]});try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}},name:{defaultValue:null,description:"ネイティブ要素のname属性。グループ化したい項目に同じ名前をつける",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"選択時のコールバックに渡される値",name:"value",required:!0,type:{name:"string | number"}},children:{defaultValue:null,description:"ラベルとして表示される文字列、または要素",name:"children",required:!0,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"値が変化した場合のコールバック",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const O={title:"Form/Checkbox",component:a},p=["option1","option2","option3"],r={render:()=>{const[n,t]=m.useState([p[0]]),u=m.useCallback(c=>{c.target.checked?t([...n,c.target.value]):t(n.filter(B=>B!==c.target.value))},[n]);return l(h,{spacing:"md",children:[p.map(c=>e(a,{name:"options",value:c,onChange:u,checked:n.includes(c),children:c},c)),l("dl",{children:[e("dt",{children:"Values"}),e("dd",{children:n.join(",")})]})]})}},o={render:()=>{const[n,t]=m.useState(!1),u=m.useCallback(c=>t(c.target.checked),[]);return e(a,{name:"single-use",value:"enable",checked:n,onChange:u,children:"Enable Option"})}},d={render:()=>l(h,{spacing:"xs",children:[e(a,{name:"size",value:"medium",children:"Medium"}),e(a,{name:"size",value:"small",size:"small",children:"Small"})]})},i={render:()=>l(h,{spacing:"xs",children:[e(a,{name:"disabled",value:"checked",checked:!0,disabled:!0,children:"Checked"}),e(a,{name:"disabled",value:"unchecked",disabled:!0,children:"Unchecked"})]})};var k,C,g;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.target.checked) {
        setSelectedItem([...selectedItem, event.target.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.target.value));
      }
    }, [selectedItem]);
    return <Stack spacing="md">
        {options.map(option => <Checkbox name="options" value={option} onChange={onChange} checked={selectedItem.includes(option)} key={option}>
            {option}
          </Checkbox>)}

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem.join(',')}</dd>
        </dl>
      </Stack>;
  }
}`,...(g=(C=r.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var b,v,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => setChecked(event.target.checked), []);
    return <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>;
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var _,S,f;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
    </Stack>
}`,...(f=(S=d.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var E,I,z;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>
    </Stack>
}`,...(z=(I=i.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};const U=["Default","SingleUse","Size","Disabled"];export{r as Default,i as Disabled,o as SingleUse,d as Size,U as __namedExportsOrder,O as default};
//# sourceMappingURL=Checkbox.stories-2a133869.js.map
