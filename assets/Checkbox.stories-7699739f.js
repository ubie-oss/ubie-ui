import{j as e}from"./jsx-runtime-9c4ae004.js";import{r}from"./index-1b03fe98.js";import{c as L}from"./clsx-1229b3e0.js";import{S as p}from"./Stack-9024e87d.js";import{F as M}from"./Flex-a0623128.js";import"./style-d1e19ac4.js";function N(n){return e.jsx("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.8839 7.11612C21.372 7.60427 21.372 8.39573 20.8839 8.88388L10.8839 18.8839C10.3957 19.372 9.60427 19.372 9.11612 18.8839L3.11612 12.8839C2.62796 12.3957 2.62796 11.6043 3.11612 11.1161C3.60427 10.628 4.39573 10.628 4.88388 11.1161L10 16.2322L19.1161 7.11612C19.6043 6.62796 20.3957 6.62796 20.8839 7.11612Z",fill:"currentColor"},void 0)}),void 0)}const A="_container_1rqv0_1",G="_checkbox_1rqv0_13",R="_checkIconContainer_1rqv0_23",V="_medium_1rqv0_33",D="_small_1rqv0_38",O="_checkIcon_1rqv0_23",l={container:A,checkbox:G,checkIconContainer:R,medium:V,small:D,checkIcon:O},a=({size:n="medium",children:c,...s})=>e.jsxs("label",{className:L(l.container,l[n]),children:[e.jsx("input",{type:"checkbox",className:l.checkbox,...s}),e.jsx("span",{className:l.checkIconContainer,children:e.jsx(N,{className:l.checkIcon})}),c]});a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:`サイズ
@default medium`,defaultValue:{value:"'medium'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:"ネイティブ要素のname属性。グループ化したい項目に同じ名前をつける"},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"選択時のコールバックに渡される値"},children:{required:!0,tsType:{name:"InputHTMLAttributes['children']",raw:"InputHTMLAttributes<HTMLInputElement>['children']"},description:"ラベルとして表示される文字列、または要素"},onChange:{required:!1,tsType:{name:"InputHTMLAttributes['onChange']",raw:"InputHTMLAttributes<HTMLInputElement>['onChange']"},description:"値が変化した場合のコールバック"}}};const U="_wrapper_i503t_1",F="_legend_i503t_7",g={wrapper:U,legend:F},x=({children:n,label:c,direction:s="column"})=>e.jsxs("fieldset",{className:g.wrapper,children:[e.jsx("legend",{className:g.legend,children:c}),e.jsx(M,{spacing:"md",direction:s,children:n})]});x.__docgenInfo={description:"",methods:[],displayName:"CheckboxGroup",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"Checkbox"}],raw:"ReactElement<typeof Checkbox>"}],raw:"ReactElement<typeof Checkbox>[]"},description:""},label:{required:!0,tsType:{name:"string"},description:"チェックボックスグループの見出し（legend要素）"},direction:{required:!1,tsType:{name:"union",raw:"'column' | 'row'",elements:[{name:"literal",value:"'column'"},{name:"literal",value:"'row'"}]},description:`チェックボックスの配置方向
@default column`,defaultValue:{value:"'column'",computed:!1}}}};const Q={title:"Form/Checkbox",component:a},h=["option1","option2","option3"],o={render:()=>{const[n,c]=r.useState([h[0]]),s=r.useCallback(t=>{t.target.checked?c([...n,t.target.value]):c(n.filter(k=>k!==t.target.value))},[n]);return e.jsxs(p,{spacing:"lg",children:[e.jsx(x,{label:"Checkbox",children:h.map(t=>e.jsx(a,{name:"default",value:t,onChange:s,checked:n.includes(t),children:t},t))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:n.join(",")})]})]})}},d={render:()=>{const[n,c]=r.useState([h[0]]),s=r.useCallback(t=>{t.target.checked?c([...n,t.target.value]):c(n.filter(k=>k!==t.target.value))},[n]);return e.jsxs(p,{spacing:"lg",children:[e.jsx(x,{label:"Checkbox",direction:"row",children:h.map(t=>e.jsx(a,{name:"horizontally",value:t,onChange:s,checked:n.includes(t),children:t},t))}),e.jsxs("dl",{children:[e.jsx("dt",{children:"Values"}),e.jsx("dd",{children:n.join(",")})]})]})}},i={render:()=>{const[n,c]=r.useState(!1),s=r.useCallback(t=>c(t.target.checked),[]);return e.jsx(a,{name:"single-use",value:"enable",checked:n,onChange:s,children:"Enable Option"})}},m={render:()=>e.jsxs(p,{spacing:"xs",children:[e.jsx(a,{name:"size",value:"medium",children:"Medium"}),e.jsx(a,{name:"size",value:"small",size:"small",children:"Small"})]})},u={render:()=>e.jsxs(p,{spacing:"xs",children:[e.jsx(a,{name:"disabled",value:"checked",checked:!0,disabled:!0,children:"Checked"}),e.jsx(a,{name:"disabled",value:"unchecked",disabled:!0,children:"Unchecked"})]})};var C,b,v;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var I,f,S;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,_,y;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<boolean>(false);
    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => setChecked(event.target.checked), []);
    return <Checkbox name="single-use" value="enable" checked={checked} onChange={onChange}>
        Enable Option
      </Checkbox>;
  }
}`,...(y=(_=i.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var w,T,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="size" value="medium">
        Medium
      </Checkbox>
      <Checkbox name="size" value="small" size="small">
        Small
      </Checkbox>
    </Stack>
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var q,H,z;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Stack spacing="xs">
      <Checkbox name="disabled" value="checked" checked disabled>
        Checked
      </Checkbox>

      <Checkbox name="disabled" value="unchecked" disabled>
        Unchecked
      </Checkbox>
    </Stack>
}`,...(z=(H=u.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};const W=["Default","Horizontally","SingleUse","Size","Disabled"];export{o as Default,u as Disabled,d as Horizontally,i as SingleUse,m as Size,W as __namedExportsOrder,Q as default};
