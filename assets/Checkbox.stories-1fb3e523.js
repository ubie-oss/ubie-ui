import{j as e}from"./jsx-runtime-9c4ae004.js";import{r}from"./index-1b03fe98.js";import{c as N}from"./clsx-1229b3e0.js";import{S as b}from"./Stack-9024e87d.js";import{R as A}from"./RequiredLabel-a2a89590.js";import{F as V}from"./Flex-a0623128.js";import"./style-d1e19ac4.js";function D(t){return e.jsx("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.8839 7.11612C21.372 7.60427 21.372 8.39573 20.8839 8.88388L10.8839 18.8839C10.3957 19.372 9.60427 19.372 9.11612 18.8839L3.11612 12.8839C2.62796 12.3957 2.62796 11.6043 3.11612 11.1161C3.60427 10.628 4.39573 10.628 4.88388 11.1161L10 16.2322L19.1161 7.11612C19.6043 6.62796 20.3957 6.62796 20.8839 7.11612Z",fill:"currentColor"},void 0)}),void 0)}const O="_container_1rqv0_1",U="_checkbox_1rqv0_13",F="_checkIconContainer_1rqv0_23",B="_medium_1rqv0_33",Z="_small_1rqv0_38",$="_checkIcon_1rqv0_23",d={container:O,checkbox:U,checkIconContainer:F,medium:B,small:Z,checkIcon:$},s=({size:t="medium",children:a,...c})=>e.jsxs("label",{className:N(d.container,d[t]),children:[e.jsx("input",{type:"checkbox",className:d.checkbox,...c}),e.jsx("span",{className:d.checkIconContainer,children:e.jsx(D,{className:d.checkIcon})}),a]});s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:`サイズ
@default medium`,defaultValue:{value:"'medium'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:"ネイティブ要素のname属性。グループ化したい項目に同じ名前をつける"},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"選択時のコールバックに渡される値"},children:{required:!0,tsType:{name:"InputHTMLAttributes['children']",raw:"InputHTMLAttributes<HTMLInputElement>['children']"},description:"ラベルとして表示される文字列、または要素"},onChange:{required:!1,tsType:{name:"InputHTMLAttributes['onChange']",raw:"InputHTMLAttributes<HTMLInputElement>['onChange']"},description:"値が変化した場合のコールバック"}}};const J="_wrapper_1r51a_1",K="_legend_1r51a_7",x={wrapper:J,legend:K},g=({children:t,label:a,showRequiredLabel:c,direction:n="column"})=>e.jsxs("fieldset",{className:x.wrapper,children:[e.jsxs("legend",{className:x.legend,children:[a,c&&e.jsx(A,{})]}),e.jsx(V,{spacing:"md",direction:n,children:t})]});g.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"Checkbox"}],raw:"ReactElement<typeof Checkbox>"}],raw:"ReactElement<typeof Checkbox>[]"},description:""},label:{required:!0,tsType:{name:"string"},description:"チェックボックスグループの見出し（legend要素）"},showRequiredLabel:{required:!1,tsType:{name:"boolean"},description:`必須マークを表示するか
注意: trueとしてもinput要素のrequired属性は付与されません`},direction:{required:!1,tsType:{name:"union",raw:"'column' | 'row'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'row'"}]},description:`チェックボックスの配置方向
@default column`,defaultValue:{value:"'column'",computed:!1}}}};const te={title:"Form/Checkbox",component:s},l=["option1","option2","option3"],i={render:()=>{const[t,a]=r.useState([l[0]]),c=r.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(o=>o!==n.target.value))},[t]);return e.jsxs(b,{spacing:"lg",children:[e.jsx(g,{label:"Checkbox",children:l.map(n=>e.jsx(s,{name:"default",value:n,onChange:c,checked:t.includes(n),children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:t.join(",")})]})]})}},m={render:()=>{const[t,a]=r.useState([l[0]]),c=r.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(o=>o!==n.target.value))},[t]);return e.jsxs(b,{spacing:"lg",children:[e.jsx(g,{label:"Checkbox",direction:"row",children:l.map(n=>e.jsx(s,{name:"horizontally",value:n,onChange:c,checked:t.includes(n),children:n},n))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:t.join(",")})]})]})}},u={render:()=>{const[t,a]=r.useState(!1),c=r.useCallback(n=>a(n.target.checked),[]);return e.jsx(s,{name:"single-use",value:"enable",checked:t,onChange:c,children:"Enable Option"})}},h={render:()=>e.jsxs(b,{spacing:"xs",children:[e.jsx(s,{name:"size",value:"medium",children:"Medium"}),e.jsx(s,{name:"size",value:"small",size:"small",children:"Small"})]})},p={render:()=>e.jsxs(b,{spacing:"xs",children:[e.jsx(s,{name:"disabled",value:"checked",checked:!0,disabled:!0,children:"Checked"}),e.jsx(s,{name:"disabled",value:"unchecked",disabled:!0,children:"Unchecked"})]})},k={render:()=>{const[t,a]=r.useState([l[0]]),c=r.useCallback(n=>{n.target.checked?a([...t,n.target.value]):a(t.filter(o=>o!==n.target.value))},[t]);return e.jsx(g,{label:"Checkbox",showRequiredLabel:!0,children:l.map(n=>e.jsx(s,{name:"default",value:n,onChange:c,checked:t.includes(n),children:n},n))})}};var C,v,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var f,S,j;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var _,w,y;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => setChecked(event.target.checked), []);
    return <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>;
  }
}`,...(y=(w=u.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var q,L,T;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
    </Stack>
}`,...(T=(L=h.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var E,H,z;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>
    </Stack>
}`,...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var M,R,G;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(R=k.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};const ae=["Default","Horizontally","SingleUse","Size","Disabled","ShowRequiredLabel"];export{i as Default,p as Disabled,m as Horizontally,k as ShowRequiredLabel,u as SingleUse,h as Size,ae as __namedExportsOrder,te as default};
