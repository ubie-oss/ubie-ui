import{j as e}from"./jsx-runtime-9c4ae004.js";import{r}from"./index-1b03fe98.js";import{c as O}from"./clsx-1229b3e0.js";import{S as i}from"./Stack-8f9a2dc9.js";import{R as U}from"./RequiredLabel-f92501ea.js";import{F}from"./Flex-ffc67c66.js";import"./style-d1e19ac4.js";function B(t){return e.jsx("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.8839 7.11612C21.372 7.60427 21.372 8.39573 20.8839 8.88388L10.8839 18.8839C10.3957 19.372 9.60427 19.372 9.11612 18.8839L3.11612 12.8839C2.62796 12.3957 2.62796 11.6043 3.11612 11.1161C3.60427 10.628 4.39573 10.628 4.88388 11.1161L10 16.2322L19.1161 7.11612C19.6043 6.62796 20.3957 6.62796 20.8839 7.11612Z",fill:"currentColor"},void 0)}),void 0)}const Z="_container_1ob13_1",$="_checkbox_1ob13_13",J="_checkIconContainer_1ob13_23",K="_medium_1ob13_33",P="_small_1ob13_38",Q="_checkIcon_1ob13_23",d={container:Z,checkbox:$,checkIconContainer:J,medium:K,small:P,checkIcon:Q},c=({size:t="medium",children:a,...s})=>e.jsxs("label",{className:O(d.container,d[t]),children:[e.jsx("input",{type:"checkbox",className:d.checkbox,...s}),e.jsx("span",{className:d.checkIconContainer,children:e.jsx(B,{className:d.checkIcon})}),a]});c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:`サイズ
@default medium`,defaultValue:{value:"'medium'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:"ネイティブ要素のname属性。グループ化したい項目に同じ名前をつける"},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"選択時のコールバックに渡される値"},children:{required:!0,tsType:{name:"InputHTMLAttributes['children']",raw:"InputHTMLAttributes<HTMLInputElement>['children']"},description:"ラベルとして表示される文字列、または要素"},onChange:{required:!1,tsType:{name:"InputHTMLAttributes['onChange']",raw:"InputHTMLAttributes<HTMLInputElement>['onChange']"},description:"値が変化した場合のコールバック"}}};const W="_wrapper_a1vmf_1",X="_legend_a1vmf_7",C={wrapper:W,legend:X},g=({children:t,label:a,showRequiredLabel:s,direction:n="column",...o})=>e.jsxs("fieldset",{className:C.wrapper,...o,children:[e.jsxs("legend",{className:C.legend,children:[a,s&&e.jsx(U,{})]}),e.jsx(F,{spacing:"md",direction:n,children:t})]});g.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"Checkbox"}],raw:"ReactElement<typeof Checkbox>"}],raw:"ReactElement<typeof Checkbox>[]"},description:""},label:{required:!0,tsType:{name:"string"},description:"チェックボックスグループの見出し（legend要素）"},showRequiredLabel:{required:!1,tsType:{name:"boolean"},description:`必須マークを表示するか
注意: trueとしてもinput要素のrequired属性は付与されません`},direction:{required:!1,tsType:{name:"union",raw:"'column' | 'row'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'row'"}]},description:`チェックボックスの配置方向
@default column`,defaultValue:{value:"'column'",computed:!1}}}};const re={title:"Form/Checkbox",component:c},l=["option1","option2","option3"],m={render:()=>{const[t,a]=r.useState([l[0]]),s=r.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(o=>o!==n.target.value))},[t]);return e.jsxs(i,{spacing:"lg",children:[e.jsx(g,{label:"Checkbox",children:l.map(n=>e.jsx(c,{name:"default",value:n,onChange:s,checked:t.includes(n),children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:t.join(",")})]})]})}},u={render:()=>{const[t,a]=r.useState([l[0]]),s=r.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(o=>o!==n.target.value))},[t]);return e.jsxs(i,{spacing:"lg",children:[e.jsx(g,{label:"Checkbox",direction:"row",children:l.map(n=>e.jsx(c,{name:"horizontally",value:n,onChange:s,checked:t.includes(n),children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:t.join(",")})]})]})}},h={render:()=>{const[t,a]=r.useState(!1),s=r.useCallback(n=>a(n.target.checked),[]);return e.jsx(c,{name:"single-use",value:"enable",checked:t,onChange:s,children:"Enable Option"})}},p={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(c,{name:"size",value:"medium",children:"Medium"}),e.jsx(c,{name:"size",value:"small",size:"small",children:"Small"})]})},k={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(c,{name:"disabled",value:"checked",checked:!0,disabled:!0,children:"Checked"}),e.jsx(c,{name:"disabled",value:"unchecked",disabled:!0,children:"Unchecked"})]})},b={render:()=>{const[t,a]=r.useState([l[0]]),s=r.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(o=>o!==n.target.value))},[t]);return e.jsx(g,{label:"Checkbox",showRequiredLabel:!0,children:l.map(n=>e.jsx(c,{name:"default",value:n,onChange:s,checked:t.includes(n),children:n},n))})}},x={render:()=>e.jsxs(i,{spacing:"xs",children:[e.jsx(c,{name:"custom-data",value:"data1","data-test-id":"checkbox-data1",children:"Data 1"}),e.jsx(c,{name:"custom-data",value:"data2","data-test-id":"checkbox-data2",children:"Data 2"})]})};var v,I,f;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(I=m.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var S,j,_;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(_=(j=u.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var w,y,L;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => setChecked(event.target.checked), []);
    return <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>;
  }
}`,...(L=(y=h.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var T,E,q;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
    </Stack>
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var H,z,M;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>
    </Stack>
}`,...(M=(z=k.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var R,D,A;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(D=b.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var G,N,V;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="custom-data" value="data1" data-test-id="checkbox-data1">
        Data 1
      </Checkbox>
      <Checkbox name="custom-data" value="data2" data-test-id="checkbox-data2">
        Data 2
      </Checkbox>
    </Stack>
}`,...(V=(N=x.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const oe=["Default","Horizontally","SingleUse","Size","Disabled","ShowRequiredLabel","CustomDataAttribute"];export{x as CustomDataAttribute,m as Default,k as Disabled,u as Horizontally,b as ShowRequiredLabel,h as SingleUse,p as Size,oe as __namedExportsOrder,re as default};
