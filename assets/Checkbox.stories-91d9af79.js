import{j as e}from"./jsx-runtime-69eee039.js";import{r as u}from"./index-7c191284.js";import{S as M}from"./CheckAIcon-ee8e3678.js";import{c as T}from"./clsx-1229b3e0.js";import{S as i}from"./Stack-79a82653.js";import{R as U}from"./RequiredLabel-0530a236.js";import{F as O}from"./Flex-bb8b913b.js";import"./style-e9a2251f.js";const $="_container_1ob13_1",J="_checkbox_1ob13_13",K="_checkIconContainer_1ob13_23",P="_medium_1ob13_33",Q="_small_1ob13_38",W="_checkIcon_1ob13_23",o={container:$,checkbox:J,checkIconContainer:K,medium:P,small:Q,checkIcon:W},c=({size:t="medium",children:a,...s})=>e.jsxs("label",{className:T(o.container,o[t]),children:[e.jsx("input",{type:"checkbox",className:o.checkbox,...s}),e.jsx("span",{className:o.checkIconContainer,children:e.jsx(M,{className:o.checkIcon})}),a]});try{c.displayName="Checkbox",c.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},name:{defaultValue:null,description:"ネイティブ要素のname属性。グループ化したい項目に同じ名前をつける",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"選択時のコールバックに渡される値",name:"value",required:!0,type:{name:"string | number"}},children:{defaultValue:null,description:"ラベルとして表示される文字列、または要素",name:"children",required:!0,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"値が変化した場合のコールバック",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const X="_wrapper_a1vmf_1",Y="_legend_a1vmf_7",g={wrapper:X,legend:Y},d=({children:t,label:a,showRequiredLabel:s,direction:n="column",...r})=>e.jsxs("fieldset",{className:g.wrapper,...r,children:[e.jsxs("legend",{className:g.legend,children:[a,s&&e.jsx(U,{})]}),e.jsx(O,{spacing:"md",direction:n,children:t})]});try{d.displayName="CheckboxGroup",d.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{label:{defaultValue:null,description:"チェックボックスグループの見出し（legend要素）",name:"label",required:!0,type:{name:"string"}},showRequiredLabel:{defaultValue:null,description:`必須マークを表示するか
注意: trueとしてもinput要素のrequired属性は付与されません`,name:"showRequiredLabel",required:!1,type:{name:"boolean"}},direction:{defaultValue:{value:"column"},description:"チェックボックスの配置方向",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}}}catch{}const re={title:"Form/Checkbox",component:c},l=["option1","option2","option3"],m={render:()=>{const[t,a]=u.useState([l[0]]),s=u.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(r=>r!==n.target.value))},[t]);return e.jsxs(i,{spacing:"lg",children:[e.jsx(d,{label:"Checkbox",children:l.map(n=>e.jsx(c,{name:"default",value:n,onChange:s,checked:t.includes(n),children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:t.join(",")})]})]})}},h={render:()=>{const[t,a]=u.useState([l[0]]),s=u.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(r=>r!==n.target.value))},[t]);return e.jsxs(i,{spacing:"lg",children:[e.jsx(d,{label:"Checkbox",direction:"row",children:l.map(n=>e.jsx(c,{name:"horizontally",value:n,onChange:s,checked:t.includes(n),children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:t.join(",")})]})]})}},p={render:()=>{const[t,a]=u.useState(!1),s=u.useCallback(n=>a(n.target.checked),[]);return e.jsx(c,{name:"single-use",value:"enable",checked:t,onChange:s,children:"Enable Option"})}},k={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(c,{name:"size",value:"medium",children:"Medium"}),e.jsx(c,{name:"size",value:"small",size:"small",children:"Small"})]})},C={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(c,{name:"disabled",value:"checked",checked:!0,disabled:!0,children:"Checked"}),e.jsx(c,{name:"disabled",value:"unchecked",disabled:!0,children:"Unchecked"})]})},b={render:()=>{const[t,a]=u.useState([l[0]]),s=u.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(r=>r!==n.target.value))},[t]);return e.jsx(d,{label:"Checkbox",showRequiredLabel:!0,children:l.map(n=>e.jsx(c,{name:"default",value:n,onChange:s,checked:t.includes(n),children:n},n))})}},x={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(c,{name:"custom-data",value:"data1","data-test-id":"checkbox-data1",children:"Data 1"}),e.jsx(c,{name:"custom-data",value:"data2","data-test-id":"checkbox-data2",children:"Data 2"})]})};var v,S,I;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(S=m.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var f,_,E;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(E=(_=h.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var j,D,F;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => setChecked(event.target.checked), []);
    return <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>;
  }
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var y,B,A;k.parameters={...k.parameters,docs:{...(y=k.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
    </Stack>
}`,...(A=(B=k.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var q,z,w;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>
    </Stack>
}`,...(w=(z=C.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var H,L,V;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(L=b.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var N,R,G;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="custom-data" value="data1" data-test-id="checkbox-data1">
        Data 1
      </Checkbox>
      <Checkbox name="custom-data" value="data2" data-test-id="checkbox-data2">
        Data 2
      </Checkbox>
    </Stack>
}`,...(G=(R=x.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};const le=["Default","Horizontally","SingleUse","Size","Disabled","ShowRequiredLabel","CustomDataAttribute"];export{x as CustomDataAttribute,m as Default,C as Disabled,h as Horizontally,b as ShowRequiredLabel,p as SingleUse,k as Size,le as __namedExportsOrder,re as default};
