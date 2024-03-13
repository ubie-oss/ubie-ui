import{a as n,j as r}from"./jsx-runtime-03b4ddbf.js";import{r as s}from"./index-76fb7be0.js";import{c as H}from"./clsx-1229b3e0.js";import{S as u}from"./Stack-60de74b5.js";import"./_commonjsHelpers-de833af9.js";function j(e){return n("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:n("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.8839 7.11612C21.372 7.60427 21.372 8.39573 20.8839 8.88388L10.8839 18.8839C10.3957 19.372 9.60427 19.372 9.11612 18.8839L3.11612 12.8839C2.62796 12.3957 2.62796 11.6043 3.11612 11.1161C3.60427 10.628 4.39573 10.628 4.88388 11.1161L10 16.2322L19.1161 7.11612C19.6043 6.62796 20.3957 6.62796 20.8839 7.11612Z",fill:"currentColor"},void 0)}),void 0)}const A="_container_13zh9_1",L="_checkbox_13zh9_13",q="_checkIconContainer_13zh9_23",G="_medium_13zh9_33",M="_small_13zh9_38",O="_checkIcon_13zh9_23",o={container:A,checkbox:L,checkIconContainer:q,medium:G,small:M,checkIcon:O},c=({size:e="medium",children:a,...l})=>r("label",{className:H(o.container,o[e]),children:[n("input",{type:"checkbox",className:o.checkbox,...l}),n("span",{className:o.checkIconContainer,children:n(j,{className:o.checkIcon})}),a]});try{c.displayName="Checkbox",c.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},name:{defaultValue:null,description:"ネイティブ要素のname属性。グループ化したい項目に同じ名前をつける",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"選択時のコールバックに渡される値",name:"value",required:!0,type:{name:"string | number"}},children:{defaultValue:null,description:"ラベルとして表示される文字列、または要素",name:"children",required:!0,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"値が変化した場合のコールバック",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const T="_wrapper_i503t_1",U="_legend_i503t_7",b={wrapper:T,legend:U},k=({children:e,label:a,direction:l="column"})=>r("fieldset",{className:b.wrapper,children:[n("legend",{className:b.legend,children:a}),n(u,{spacing:"md",direction:l,children:e})]});try{k.displayName="CheckboxGroup",k.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},direction:{defaultValue:{value:"column"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}}}catch{}const P={title:"Form/Checkbox",component:c},C=["option1","option2","option3"],d={render:()=>{const[e,a]=s.useState([C[0]]),l=s.useCallback(t=>{t.target.checked?a([...e,t.target.value]):a(e.filter(g=>g!==t.target.value))},[e]);return r(u,{spacing:"lg",children:[n(k,{label:"Checkbox",children:C.map(t=>n(c,{name:"default",value:t,onChange:l,checked:e.includes(t),children:t},t))}),r("dl",{children:[n("dt",{children:"Values"}),n("dd",{children:e.join(",")})]})]})}},i={render:()=>{const[e,a]=s.useState([C[0]]),l=s.useCallback(t=>{t.target.checked?a([...e,t.target.value]):a(e.filter(g=>g!==t.target.value))},[e]);return r(u,{spacing:"lg",children:[n(k,{label:"Checkbox",direction:"row",children:C.map(t=>n(c,{name:"horizontally",value:t,onChange:l,checked:e.includes(t),children:t},t))}),r("dl",{children:[n("dt",{children:"Values"}),n("dd",{children:e.join(",")})]})]})}},m={render:()=>{const[e,a]=s.useState(!1),l=s.useCallback(t=>a(t.target.checked),[]);return n(c,{name:"single-use",value:"enable",checked:e,onChange:l,children:"Enable Option"})}},h={render:()=>r(u,{spacing:"xs",children:[n(c,{name:"size",value:"medium",children:"Medium"}),n(c,{name:"size",value:"small",size:"small",children:"Small"})]})},p={render:()=>r(u,{spacing:"xs",children:[n(c,{name:"disabled",value:"checked",checked:!0,disabled:!0,children:"Checked"}),n(c,{name:"disabled",value:"unchecked",disabled:!0,children:"Unchecked"})]})};var v,x,_;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.target.checked) {
        setSelectedItem([...selectedItem, event.target.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.target.value));
      }
    }, [selectedItem]);
    return <Stack spacing="lg">
        <CheckboxGroup label="Checkbox">
          {options.map(option => <Checkbox name="default" value={option} onChange={onChange} checked={selectedItem.includes(option)} key={option}>
              {option}
            </Checkbox>)}
        </CheckboxGroup>

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem.join(',')}</dd>
        </dl>
      </Stack>;
  }
}`,...(_=(x=d.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var f,I,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.target.checked) {
        setSelectedItem([...selectedItem, event.target.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.target.value));
      }
    }, [selectedItem]);
    return <Stack spacing="lg">
        <CheckboxGroup label="Checkbox" direction="row">
          {options.map(option => <Checkbox name="horizontally" value={option} onChange={onChange} checked={selectedItem.includes(option)} key={option}>
              {option}
            </Checkbox>)}
        </CheckboxGroup>

        <dl>
          <dt>Values</dt>
          <dd>{selectedItem.join(',')}</dd>
        </dl>
      </Stack>;
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var E,y,z;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => setChecked(event.target.checked), []);
    return <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>;
  }
}`,...(z=(y=m.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var B,D,w;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
    </Stack>
}`,...(w=(D=h.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var N,V,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>
    </Stack>
}`,...(F=(V=p.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const Q=["Default","Horizontally","SingleUse","Size","Disabled"];export{d as Default,p as Disabled,i as Horizontally,m as SingleUse,h as Size,Q as __namedExportsOrder,P as default};
//# sourceMappingURL=Checkbox.stories-812f112d.js.map
