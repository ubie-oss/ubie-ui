import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as z}from"./clsx-1229b3e0.js";import{p as D}from"./style-6e220354.js";import{B as s}from"./Box-633c7dea.js";import"./index-1b03fe98.js";const E="_center_z1d6u_1",L="_textCenter_z1d6u_7",O="_childrenCenter_z1d6u_11",i={center:E,textCenter:L,childrenCenter:O},r=({as:_="div",children:S,pt:W,pr:B,pb:q,pl:w,textCenter:H,childrenCenter:N,id:k,maxWidth:M="none"})=>e.jsx(_,{id:k,className:z(i.center,H&&i.textCenter,N&&i.childrenCenter),style:{"--max-width":M,...D({pt:W,pr:B,pb:q,pl:w})},children:S});r.__docgenInfo={description:"",methods:[],displayName:"Center",props:{as:{required:!1,tsType:{name:"HTMLElementTagNameMap"},description:`レンダリングされるHTML要素
@default div`,defaultValue:{value:"'div'",computed:!1}},textCenter:{required:!1,tsType:{name:"boolean"},description:"内包するテキストを中央に配置。設定は継承され、子孫要素にも影響します"},childrenCenter:{required:!1,tsType:{name:"boolean"},description:"子要素を中央に配置。孫要素には影響しません"},maxWidth:{required:!1,tsType:{name:"string"},description:"横幅の最大値",defaultValue:{value:"'none'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTMLのID属性の値"},pt:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-topの値。Spacing Tokenのキーを指定"},pr:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-rightの値。Spacing Tokenのキーを指定"},pb:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-bottomの値。Spacing Tokenのキーを指定"},pl:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-leftの値。Spacing Tokenのキーを指定"}}};const F={component:r},a={render:()=>e.jsx(r,{maxWidth:"400px",children:e.jsx(s,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Rendered as a centered container."})})},n={render:()=>e.jsx(r,{maxWidth:"400px",pt:"md",pl:"xl",pb:"md",pr:"xl",children:e.jsxs(s,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:["Narrow the screen.",e.jsx("br",{}),"There will be a gap on both sides of the box."]})})},t={render:()=>e.jsx(r,{maxWidth:"400px",textCenter:!0,children:e.jsx(s,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Center"})})},l={render:()=>e.jsx(r,{maxWidth:"400px",childrenCenter:!0,children:e.jsx(s,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Centered Child"})})},d={render:()=>e.jsxs(r,{as:"section",maxWidth:"400px",children:[e.jsx("h2",{children:"Heading"}),e.jsx("p",{children:"body"})]})};var m,o,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Rendered as a centered container.
      </Box>
    </Center>
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var x,c,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" pt="md" pl="xl" pb="md" pr="xl">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
      </Box>
    </Center>
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,g,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" textCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Center
      </Box>
    </Center>
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,v,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" childrenCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Centered Child
      </Box>
    </Center>
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,T,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Center as="section" maxWidth="400px">
      <h2>Heading</h2>

      <p>body</p>
    </Center>
}`,...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const G=["Default","PaddingOutside","TextCenter","ChildrenCenter","AsSection"];export{d as AsSection,l as ChildrenCenter,a as Default,n as PaddingOutside,t as TextCenter,G as __namedExportsOrder,F as default};
