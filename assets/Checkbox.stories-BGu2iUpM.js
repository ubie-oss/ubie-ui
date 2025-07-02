import{j as e}from"./jsx-runtime-DuyR_K1q.js";import{r as d}from"./index-yUhCOHB4.js";import{M as K,C as P}from"./Icon-tldTwAAd.js";import{c as m}from"./clsx-B-dksMZM.js";import{S as i}from"./Stack-ynbR-vfG.js";import{a as g}from"./CheckboxGroup-DqLVVPSE.js";import"./ArrowBDownIcon-DhMIqqai.js";import"./UnfoldMoreIcon-BpmwIn3S.js";import"./style-BnM3_UOs.js";import"./RequiredLabel-B2G5xUZG.js";import"./Flex-Dee4-nxU.js";const Q="_checkbox_1wabp_1",W="_label_1wabp_14",X="_symbol_1wabp_15",Y="_medium_1wabp_38",Z="_small_1wabp_43",$="_isIndeterminate_1wabp_72",ee="_symbolCheckIcon_1wabp_108",te="_symbolIndeterminate_1wabp_117",c={checkbox:Q,label:W,symbol:X,medium:Y,small:Z,isIndeterminate:$,symbolCheckIcon:ee,symbolIndeterminate:te},n=d.forwardRef(({size:a="medium",children:s,disabled:r,isIndeterminate:t=!1,...l},J)=>e.jsxs("label",{className:m(c.label,c[a]),children:[e.jsx("input",{ref:J,type:"checkbox",className:c.checkbox,disabled:r,...l}),e.jsx("span",{className:m(c.symbol,c[a],t&&c.isIndeterminate),children:t?e.jsx(K,{className:m(c.symbolIndeterminate,c[a]),"aria-hidden":"true"}):e.jsx(P,{className:m(c.symbolCheckIcon,c[a]),"aria-hidden":"true"})}),s]}));n.displayName="Checkbox";try{n.displayName="Checkbox",n.__docgenInfo={description:"",displayName:"Checkbox",props:{size:{defaultValue:{value:"medium"},description:"サイズ",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isIndeterminate:{defaultValue:{value:"false"},description:"中間状態の見た目とする。input要素のindeterminateプロパティの変更は行わないため注意。",name:"isIndeterminate",required:!1,type:{name:"boolean"}}}}}catch{}const he={title:"Form/Checkbox",component:n},o=["option1","option2","option3","option4","option5"],u={render:()=>{const[a,s]=d.useState([o[0]]),r=d.useCallback(t=>{t.target.checked?s([...a,t.target.value]):s(a.filter(l=>l!==t.target.value))},[a]);return e.jsxs(i,{spacing:"lg",children:[e.jsx(g,{label:"Checkbox",children:o.map(t=>e.jsx(n,{name:"default",value:t,onChange:r,checked:a.includes(t),children:t},t))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:a.join(",")})]})]})}},h={render:()=>{const[a,s]=d.useState([o[0]]),r=d.useCallback(t=>{t.target.checked?s([...a,t.target.value]):s(a.filter(l=>l!==t.target.value))},[a]);return e.jsxs(i,{spacing:"lg",children:[e.jsx(g,{label:"Checkbox",direction:"row",children:o.map(t=>e.jsx(n,{name:"horizontally",value:t,onChange:r,checked:a.includes(t),children:t},t))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:a.join(",")})]})]})}},b={render:()=>{const[a,s]=d.useState(!1),r=d.useCallback(t=>s(t.target.checked),[]);return e.jsx(n,{name:"single-use",value:"enable",checked:a,onChange:r,children:"Enable Option"})}},k={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(n,{name:"indeterminate",isIndeterminate:!0,checked:!0,children:"Indeterminate (checked)"}),e.jsx(n,{name:"indeterminate",isIndeterminate:!0,children:"Indeterminate"})]})},p={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(n,{name:"size",value:"medium",children:"Medium"}),e.jsx(n,{name:"size",value:"small",size:"small",children:"Small"}),e.jsx(n,{name:"size",value:"medium",isIndeterminate:!0,children:"Indeterminate & Medium"}),e.jsx(n,{name:"size",value:"small",size:"small",isIndeterminate:!0,children:"Indeterminate & Small"})]})},x={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(n,{name:"disabled",value:"checked",checked:!0,disabled:!0,children:"Checked"}),e.jsx(n,{name:"disabled",value:"unchecked",disabled:!0,children:"Unchecked"}),e.jsx(n,{name:"disabled",value:"isIndeterminate",disabled:!0,isIndeterminate:!0,checked:!0,children:"isIndeterminate (checked)"}),e.jsx(n,{name:"disabled",value:"isIndeterminate",disabled:!0,isIndeterminate:!0,children:"isIndeterminate"})]})},C={render:()=>{const[a,s]=d.useState([o[0]]),r=d.useCallback(t=>{t.target.checked?s([...a,t.target.value]):s(a.filter(l=>l!==t.target.value))},[a]);return e.jsx(g,{label:"Checkbox",showRequiredLabel:!0,children:o.map(t=>e.jsx(n,{name:"default",value:t,onChange:r,checked:a.includes(t),children:t},t))})}},I={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(n,{name:"custom-data",value:"data1","data-test-id":"checkbox-data1",children:"Data 1"}),e.jsx(n,{name:"custom-data",value:"data2","data-test-id":"checkbox-data2",children:"Data 2"})]})};var v,S,j;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(S=u.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var f,_,y;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(_=h.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var E,z,w;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => setChecked(event.target.checked), []);
    return <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>;
  }
}`,...(w=(z=b.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var D,H,M;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(H=k.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var A,L,N;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var F,G,q;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(U=I.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};const be=["Default","Horizontally","SingleUse","Intermediate","Size","Disabled","ShowRequiredLabel","CustomDataAttribute"];export{I as CustomDataAttribute,u as Default,x as Disabled,h as Horizontally,k as Intermediate,C as ShowRequiredLabel,b as SingleUse,p as Size,be as __namedExportsOrder,he as default};
