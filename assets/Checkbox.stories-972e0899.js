import{j as e}from"./jsx-runtime-69eee039.js";import{r as d}from"./index-7c191284.js";import{S as K,a as P}from"./Icon-c7625186.js";import{c as m}from"./clsx-1229b3e0.js";import{S as i}from"./Stack-97a6d331.js";import{a as g}from"./CheckboxGroup-d7aedb96.js";import"./ArrowBDownIcon-86826e18.js";import"./TrashIcon-de957c6c.js";import"./ThumbUpOutlineIcon-17e2fa33.js";import"./UbieIcon-105662b4.js";import"./UnfoldMoreIcon-402a05cb.js";import"./style-1d55b7c3.js";import"./RequiredLabel-0530a236.js";import"./Flex-aebcbf4a.js";const Q="_checkbox_5uudy_1",W="_label_5uudy_14",X="_symbol_5uudy_15",Y="_medium_5uudy_38",Z="_small_5uudy_43",$="_isIndeterminate_5uudy_72",ee="_symbolCheckIcon_5uudy_108",ne="_symbolIndeterminate_5uudy_117",c={checkbox:Q,label:W,symbol:X,medium:Y,small:Z,isIndeterminate:$,symbolCheckIcon:ee,symbolIndeterminate:ne},a=d.forwardRef(({size:t="medium",children:s,disabled:r,isIndeterminate:n=!1,...l},J)=>e.jsxs("label",{className:m(c.label,c[t]),children:[e.jsx("input",{ref:J,type:"checkbox",className:c.checkbox,disabled:r,...l}),e.jsx("span",{className:m(c.symbol,c[t],n&&c.isIndeterminate),children:n?e.jsx(K,{className:m(c.symbolIndeterminate,c[t]),"aria-hidden":"true"}):e.jsx(P,{className:m(c.symbolCheckIcon,c[t]),"aria-hidden":"true"})}),s]}));a.displayName="Checkbox";try{a.displayName="Checkbox",a.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isIndeterminate:{defaultValue:{value:"false"},description:"中間状態の見た目とする。input要素のindeterminateプロパティの変更は行わないため注意。",name:"isIndeterminate",required:!1,type:{name:"boolean"}}}}}catch{}const pe={title:"Form/Checkbox",component:a},o=["option1","option2","option3","option4","option5"],u={render:()=>{const[t,s]=d.useState([o[0]]),r=d.useCallback(n=>{n.target.checked?s([...t,n.target.value]):s(t.filter(l=>l!==n.target.value))},[t]);return e.jsxs(i,{spacing:"lg",children:[e.jsx(g,{label:"Checkbox",children:o.map(n=>e.jsx(a,{name:"default",value:n,onChange:r,checked:t.includes(n),children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:t.join(",")})]})]})}},h={render:()=>{const[t,s]=d.useState([o[0]]),r=d.useCallback(n=>{n.target.checked?s([...t,n.target.value]):s(t.filter(l=>l!==n.target.value))},[t]);return e.jsxs(i,{spacing:"lg",children:[e.jsx(g,{label:"Checkbox",direction:"row",children:o.map(n=>e.jsx(a,{name:"horizontally",value:n,onChange:r,checked:t.includes(n),children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:t.join(",")})]})]})}},k={render:()=>{const[t,s]=d.useState(!1),r=d.useCallback(n=>s(n.target.checked),[]);return e.jsx(a,{name:"single-use",value:"enable",checked:t,onChange:r,children:"Enable Option"})}},b={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(a,{name:"indeterminate",isIndeterminate:!0,checked:!0,children:"Indeterminate (checked)"}),e.jsx(a,{name:"indeterminate",isIndeterminate:!0,children:"Indeterminate"})]})},p={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(a,{name:"size",value:"medium",children:"Medium"}),e.jsx(a,{name:"size",value:"small",size:"small",children:"Small"}),e.jsx(a,{name:"size",value:"medium",isIndeterminate:!0,children:"Indeterminate & Medium"}),e.jsx(a,{name:"size",value:"small",size:"small",isIndeterminate:!0,children:"Indeterminate & Small"})]})},x={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(a,{name:"disabled",value:"checked",checked:!0,disabled:!0,children:"Checked"}),e.jsx(a,{name:"disabled",value:"unchecked",disabled:!0,children:"Unchecked"}),e.jsx(a,{name:"disabled",value:"isIndeterminate",disabled:!0,isIndeterminate:!0,checked:!0,children:"isIndeterminate (checked)"}),e.jsx(a,{name:"disabled",value:"isIndeterminate",disabled:!0,isIndeterminate:!0,children:"isIndeterminate"})]})},C={render:()=>{const[t,s]=d.useState([o[0]]),r=d.useCallback(n=>{n.target.checked?s([...t,n.target.value]):s(t.filter(l=>l!==n.target.value))},[t]);return e.jsx(g,{label:"Checkbox",showRequiredLabel:!0,children:o.map(n=>e.jsx(a,{name:"default",value:n,onChange:r,checked:t.includes(n),children:n},n))})}},I={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(a,{name:"custom-data",value:"data1","data-test-id":"checkbox-data1",children:"Data 1"}),e.jsx(a,{name:"custom-data",value:"data2","data-test-id":"checkbox-data2",children:"Data 2"})]})};var v,S,j;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(S=u.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var f,y,_;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(_=(y=h.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var E,z,D;k.parameters={...k.parameters,docs:{...(E=k.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => setChecked(event.target.checked), []);
    return <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>;
  }
}`,...(D=(z=k.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var H,M,A;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    return <Stack spacing="xs">
        <Checkbox name="indeterminate" isIndeterminate checked>
          Indeterminate (checked)
        </Checkbox>

        <Checkbox name="indeterminate" isIndeterminate>
          Indeterminate
        </Checkbox>
      </Stack>;
  }
}`,...(A=(M=b.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var L,N,w;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
      <Checkbox name="size" value="medium" isIndeterminate>
        Indeterminate & Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small" isIndeterminate>
        Indeterminate & Small
      </Checkbox>
    </Stack>
}`,...(w=(N=p.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var F,G,q;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>

      <Checkbox name="disabled" value="isIndeterminate" disabled isIndeterminate checked>
        isIndeterminate (checked)
      </Checkbox>

      <Checkbox name="disabled" value="isIndeterminate" disabled isIndeterminate>
        isIndeterminate
      </Checkbox>
    </Stack>
}`,...(q=(G=x.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var B,R,V;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(V=(R=C.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var T,U,O;I.parameters={...I.parameters,docs:{...(T=I.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="custom-data" value="data1" data-test-id="checkbox-data1">
        Data 1
      </Checkbox>
      <Checkbox name="custom-data" value="data2" data-test-id="checkbox-data2">
        Data 2
      </Checkbox>
    </Stack>
}`,...(O=(U=I.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};const xe=["Default","Horizontally","SingleUse","Intermediate","Size","Disabled","ShowRequiredLabel","CustomDataAttribute"];export{I as CustomDataAttribute,u as Default,x as Disabled,h as Horizontally,b as Intermediate,C as ShowRequiredLabel,k as SingleUse,p as Size,xe as __namedExportsOrder,pe as default};
