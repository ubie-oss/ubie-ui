import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as C}from"./clsx-1229b3e0.js";import{r as R}from"./index-1b03fe98.js";import{s,V as c}from"./VariantIcon-c466fe49.js";import{m as S}from"./style-d1e19ac4.js";const w="_root_vh1k2_1",P="_spin_vh1k2_1",z="_circle_vh1k2_7",h={root:w,spin:P,circle:z,"circular-progress":"_circular-progress_vh1k2_1"},a=44,j=3.6,_=({...t})=>e.jsx("span",{role:"progressbar",className:h.root,...t,children:e.jsx("svg",{role:"img","aria-label":"読み込み中",viewBox:`${a/2} ${a/2} ${a} ${a}`,children:e.jsx("circle",{className:h.circle,cx:a,cy:a,r:(a-j)/2,fill:"none",strokeWidth:j})})});_.__docgenInfo={description:"",methods:[],displayName:"CircularProgress"};const b=R.forwardRef(({children:t,variant:r="primary",size:g="large",block:v=!1,icon:i,fixedIcon:u,suffixIcon:n,type:N="button",disabled:d=!1,loading:l=!1,onClick:o,mt:y,mr:I,mb:V,ml:q,...k},B)=>{const f=l?e.jsx(_,{}):i==="default"?e.jsx(c,{variant:r}):i,p=u==="default"?e.jsx(c,{variant:r}):u,m=n==="default"?e.jsx(c,{variant:r}):n,E=C({[s.button]:!0,[s[r]]:!0,[s[g]]:!0,[s.block]:v,[s.disabled]:d,[s.loading]:l}),$=x=>{if(l){x.preventDefault();return}o==null||o(x)};return e.jsxs("button",{type:N,className:E,style:{...S({mt:y,mr:I,mb:V,ml:q})},ref:B,disabled:d,"aria-disabled":l,onClick:$,...k,children:[p&&e.jsx("span",{className:s.fixedIcon,children:p}),e.jsxs("span",{className:s.label,children:[f&&e.jsx("span",{className:s.icon,children:f}),t,m&&e.jsx("span",{className:s.suffixIcon,children:m})]})]})});b.displayName="Button";b.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'large'",computed:!1},required:!1},block:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1}}};export{b as B};
