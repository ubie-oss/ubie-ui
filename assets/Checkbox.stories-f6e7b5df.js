import{j as n}from"./jsx-runtime-69eee039.js";import{r}from"./index-7c191284.js";import{S as T}from"./CheckAIcon-ee8e3678.js";import{c as U}from"./clsx-1229b3e0.js";import{S as i}from"./Stack-9750157b.js";import{R as O}from"./RequiredLabel-0530a236.js";import{F as $}from"./Flex-87cc0277.js";import"./style-4fb506a5.js";const J="_container_1ctaz_1",K="_checkbox_1ctaz_15",P="_checkIconContainer_1ctaz_25",Q="_medium_1ctaz_35",W="_small_1ctaz_40",X="_checkIcon_1ctaz_25",d={container:J,checkbox:K,checkIconContainer:P,medium:Q,small:W,checkIcon:X},c=r.forwardRef(({size:a="medium",children:t,...s},e)=>n.jsxs("label",{className:U(d.container,d[a]),children:[n.jsx("input",{ref:e,type:"checkbox",className:d.checkbox,...s}),n.jsx("span",{className:d.checkIconContainer,children:n.jsx(T,{className:d.checkIcon})}),t]}));c.displayName="Checkbox";try{c.displayName="Checkbox",c.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},name:{defaultValue:null,description:"ネイティブ要素のname属性。グループ化したい項目に同じ名前をつける",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"選択時のコールバックに渡される値",name:"value",required:!0,type:{name:"string | number"}},children:{defaultValue:null,description:"ラベルとして表示される文字列、または要素",name:"children",required:!0,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"値が変化した場合のコールバック",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const Y="_wrapper_a1vmf_1",Z="_legend_a1vmf_7",g={wrapper:Y,legend:Z},o=r.forwardRef(({children:a,label:t,showRequiredLabel:s,direction:e="column",...l},M)=>n.jsxs("fieldset",{className:g.wrapper,ref:M,...l,children:[n.jsxs("legend",{className:g.legend,children:[t,s&&n.jsx(O,{})]}),n.jsx($,{spacing:"md",direction:e,children:a})]}));o.displayName="CheckboxGroup";try{o.displayName="CheckboxGroup",o.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},showRequiredLabel:{defaultValue:null,description:"",name:"showRequiredLabel",required:!1,type:{name:"boolean"}},direction:{defaultValue:{value:"column"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}}}catch{}const oe={title:"Form/Checkbox",component:c},u=["option1","option2","option3"],m={render:()=>{const[a,t]=r.useState([u[0]]),s=r.useCallback(e=>{e.target.checked?t([...a,e.target.value]):t(a.filter(l=>l!==e.target.value))},[a]);return n.jsxs(i,{spacing:"lg",children:[n.jsx(o,{label:"Checkbox",children:u.map(e=>n.jsx(c,{name:"default",value:e,onChange:s,checked:a.includes(e),children:e},e))}),n.jsxs("dl",{children:[n.jsx("dt",{children:"Values"}),n.jsx("dd",{children:a.join(",")})]})]})}},h={render:()=>{const[a,t]=r.useState([u[0]]),s=r.useCallback(e=>{e.target.checked?t([...a,e.target.value]):t(a.filter(l=>l!==e.target.value))},[a]);return n.jsxs(i,{spacing:"lg",children:[n.jsx(o,{label:"Checkbox",direction:"row",children:u.map(e=>n.jsx(c,{name:"horizontally",value:e,onChange:s,checked:a.includes(e),children:e},e))}),n.jsxs("dl",{children:[n.jsx("dt",{children:"Values"}),n.jsx("dd",{children:a.join(",")})]})]})}},p={render:()=>{const[a,t]=r.useState(!1),s=r.useCallback(e=>t(e.target.checked),[]);return n.jsx(c,{name:"single-use",value:"enable",checked:a,onChange:s,children:"Enable Option"})}},k={render:()=>n.jsxs(i,{spacing:"xs",children:[n.jsx(c,{name:"size",value:"medium",children:"Medium"}),n.jsx(c,{name:"size",value:"small",size:"small",children:"Small"})]})},C={render:()=>n.jsxs(i,{spacing:"xs",children:[n.jsx(c,{name:"disabled",value:"checked",checked:!0,disabled:!0,children:"Checked"}),n.jsx(c,{name:"disabled",value:"unchecked",disabled:!0,children:"Unchecked"})]})},x={render:()=>{const[a,t]=r.useState([u[0]]),s=r.useCallback(e=>{e.target.checked?t([...a,e.target.value]):t(a.filter(l=>l!==e.target.value))},[a]);return n.jsx(o,{label:"Checkbox",showRequiredLabel:!0,children:u.map(e=>n.jsx(c,{name:"default",value:e,onChange:s,checked:a.includes(e),children:e},e))})}},b={render:()=>n.jsxs(i,{spacing:"xs",children:[n.jsx(c,{name:"custom-data",value:"data1","data-test-id":"checkbox-data1",children:"Data 1"}),n.jsx(c,{name:"custom-data",value:"data2","data-test-id":"checkbox-data2",children:"Data 2"})]})};var v,f,S;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(f=m.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var I,_,j;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(_=h.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var E,y,z;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => setChecked(event.target.checked), []);
    return <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>;
  }
}`,...(z=(y=p.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var D,q,w;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
    </Stack>
}`,...(w=(q=k.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var B,N,F;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>
    </Stack>
}`,...(F=(N=C.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var H,L,R;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [selectedItem, setSelectedItem] = useState<string[]>([options[0]]);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
      if (event.target.checked) {
        setSelectedItem([...selectedItem, event.target.value]);
      } else {
        setSelectedItem(selectedItem.filter(item => item !== event.target.value));
      }
    }, [selectedItem]);
    return <CheckboxGroup label="Checkbox" showRequiredLabel>
        {options.map(option => <Checkbox name="default" value={option} onChange={onChange} checked={selectedItem.includes(option)} key={option}>
            {option}
          </Checkbox>)}
      </CheckboxGroup>;
  }
}`,...(R=(L=x.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var V,A,G;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="custom-data" value="data1" data-test-id="checkbox-data1">
        Data 1
      </Checkbox>
      <Checkbox name="custom-data" value="data2" data-test-id="checkbox-data2">
        Data 2
      </Checkbox>
    </Stack>
}`,...(G=(A=b.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const ue=["Default","Horizontally","SingleUse","Size","Disabled","ShowRequiredLabel","CustomDataAttribute"];export{b as CustomDataAttribute,m as Default,C as Disabled,h as Horizontally,x as ShowRequiredLabel,p as SingleUse,k as Size,ue as __namedExportsOrder,oe as default};
