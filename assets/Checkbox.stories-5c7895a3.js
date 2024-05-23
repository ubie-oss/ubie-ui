import{j as e}from"./jsx-runtime-69eee039.js";import{r as u}from"./index-7c191284.js";import{c as M}from"./clsx-1229b3e0.js";import{S as i}from"./Stack-ac2b4f0f.js";import{R as T}from"./RequiredLabel-0530a236.js";import{F as O}from"./Flex-bb8b913b.js";import"./style-e9a2251f.js";function U(t){return e.jsx("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.8839 7.11612C21.372 7.60427 21.372 8.39573 20.8839 8.88388L10.8839 18.8839C10.3957 19.372 9.60427 19.372 9.11612 18.8839L3.11612 12.8839C2.62796 12.3957 2.62796 11.6043 3.11612 11.1161C3.60427 10.628 4.39573 10.628 4.88388 11.1161L10 16.2322L19.1161 7.11612C19.6043 6.62796 20.3957 6.62796 20.8839 7.11612Z",fill:"currentColor"},void 0)}),void 0)}const Z="_container_1ob13_1",$="_checkbox_1ob13_13",J="_checkIconContainer_1ob13_23",K="_medium_1ob13_33",P="_small_1ob13_38",Q="_checkIcon_1ob13_23",o={container:Z,checkbox:$,checkIconContainer:J,medium:K,small:P,checkIcon:Q},c=({size:t="medium",children:a,...s})=>e.jsxs("label",{className:M(o.container,o[t]),children:[e.jsx("input",{type:"checkbox",className:o.checkbox,...s}),e.jsx("span",{className:o.checkIconContainer,children:e.jsx(U,{className:o.checkIcon})}),a]});try{c.displayName="Checkbox",c.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},name:{defaultValue:null,description:"ネイティブ要素のname属性。グループ化したい項目に同じ名前をつける",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"選択時のコールバックに渡される値",name:"value",required:!0,type:{name:"string | number"}},children:{defaultValue:null,description:"ラベルとして表示される文字列、または要素",name:"children",required:!0,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"値が変化した場合のコールバック",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const W="_wrapper_a1vmf_1",X="_legend_a1vmf_7",g={wrapper:W,legend:X},d=({children:t,label:a,showRequiredLabel:s,direction:n="column",...r})=>e.jsxs("fieldset",{className:g.wrapper,...r,children:[e.jsxs("legend",{className:g.legend,children:[a,s&&e.jsx(T,{})]}),e.jsx(O,{spacing:"md",direction:n,children:t})]});try{d.displayName="CheckboxGroup",d.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{label:{defaultValue:null,description:"チェックボックスグループの見出し（legend要素）",name:"label",required:!0,type:{name:"string"}},showRequiredLabel:{defaultValue:null,description:`必須マークを表示するか
注意: trueとしてもinput要素のrequired属性は付与されません`,name:"showRequiredLabel",required:!1,type:{name:"boolean"}},direction:{defaultValue:{value:"column"},description:"チェックボックスの配置方向",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}}}catch{}const ue={title:"Form/Checkbox",component:c},l=["option1","option2","option3"],m={render:()=>{const[t,a]=u.useState([l[0]]),s=u.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(r=>r!==n.target.value))},[t]);return e.jsxs(i,{spacing:"lg",children:[e.jsx(d,{label:"Checkbox",children:l.map(n=>e.jsx(c,{name:"default",value:n,onChange:s,checked:t.includes(n),children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:t.join(",")})]})]})}},h={render:()=>{const[t,a]=u.useState([l[0]]),s=u.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(r=>r!==n.target.value))},[t]);return e.jsxs(i,{spacing:"lg",children:[e.jsx(d,{label:"Checkbox",direction:"row",children:l.map(n=>e.jsx(c,{name:"horizontally",value:n,onChange:s,checked:t.includes(n),children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:t.join(",")})]})]})}},p={render:()=>{const[t,a]=u.useState(!1),s=u.useCallback(n=>a(n.target.checked),[]);return e.jsx(c,{name:"single-use",value:"enable",checked:t,onChange:s,children:"Enable Option"})}},C={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(c,{name:"size",value:"medium",children:"Medium"}),e.jsx(c,{name:"size",value:"small",size:"small",children:"Small"})]})},k={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(c,{name:"disabled",value:"checked",checked:!0,disabled:!0,children:"Checked"}),e.jsx(c,{name:"disabled",value:"unchecked",disabled:!0,children:"Unchecked"})]})},b={render:()=>{const[t,a]=u.useState([l[0]]),s=u.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(r=>r!==n.target.value))},[t]);return e.jsx(d,{label:"Checkbox",showRequiredLabel:!0,children:l.map(n=>e.jsx(c,{name:"default",value:n,onChange:s,checked:t.includes(n),children:n},n))})}},x={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(c,{name:"custom-data",value:"data1","data-test-id":"checkbox-data1",children:"Data 1"}),e.jsx(c,{name:"custom-data",value:"data2","data-test-id":"checkbox-data2",children:"Data 2"})]})};var v,f,I;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(f=m.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var S,_,j;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(_=h.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var E,D,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => setChecked(event.target.checked), []);
    return <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>;
  }
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var y,B,w;C.parameters={...C.parameters,docs:{...(y=C.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
    </Stack>
}`,...(w=(B=C.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var A,q,L;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>
    </Stack>
}`,...(L=(q=k.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var z,H,R;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(H=b.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var V,N,G;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="custom-data" value="data1" data-test-id="checkbox-data1">
        Data 1
      </Checkbox>
      <Checkbox name="custom-data" value="data2" data-test-id="checkbox-data2">
        Data 2
      </Checkbox>
    </Stack>
}`,...(G=(N=x.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};const re=["Default","Horizontally","SingleUse","Size","Disabled","ShowRequiredLabel","CustomDataAttribute"];export{x as CustomDataAttribute,m as Default,k as Disabled,h as Horizontally,b as ShowRequiredLabel,p as SingleUse,C as Size,re as __namedExportsOrder,ue as default};
