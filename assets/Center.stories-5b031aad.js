import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as S}from"./clsx-1229b3e0.js";import{p as k}from"./style-6e220354.js";import{B as d}from"./Box-2da007f2.js";import"./index-1b03fe98.js";const N="_center_z1d6u_1",z="_textCenter_z1d6u_7",D="_childrenCenter_z1d6u_11",s={center:N,textCenter:z,childrenCenter:D},r=({children:f,pt:y,pr:T,pb:_,pl:j,textCenter:B,childrenCenter:w,id:W,maxWidth:q="none"})=>e.jsx("div",{id:W,className:S(s.center,B&&s.textCenter,w&&s.childrenCenter),style:{"--max-width":q,...k({pt:y,pr:T,pb:_,pl:j})},children:f});r.__docgenInfo={description:"",methods:[],displayName:"Center",props:{textCenter:{required:!1,tsType:{name:"boolean"},description:"内包するテキストを中央に配置。設定は継承され、子孫要素にも影響します"},childrenCenter:{required:!1,tsType:{name:"boolean"},description:"子要素を中央に配置。孫要素には影響しません"},maxWidth:{required:!1,tsType:{name:"string"},description:"横幅の最大値",defaultValue:{value:"'none'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTMLのID属性の値"},pt:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-topの値。Spacing Tokenのキーを指定"},pr:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-rightの値。Spacing Tokenのキーを指定"},pb:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-bottomの値。Spacing Tokenのキーを指定"},pl:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"padding-leftの値。Spacing Tokenのキーを指定"}}};const V={component:r},a={render:()=>e.jsx(r,{maxWidth:"400px",children:e.jsx(d,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Rendered as a centered container."})})},n={render:()=>e.jsx(r,{maxWidth:"400px",pt:"md",pl:"xl",pb:"md",pr:"xl",children:e.jsxs(d,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:["Narrow the screen.",e.jsx("br",{}),"There will be a gap on both sides of the box."]})})},t={render:()=>e.jsx(r,{maxWidth:"400px",textCenter:!0,children:e.jsx(d,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Center"})})},l={render:()=>e.jsx(r,{maxWidth:"400px",childrenCenter:!0,children:e.jsx(d,{border:"gray",pt:"md",pr:"md",pb:"md",pl:"md",children:"Centered Child"})})};var m,i,o;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Rendered as a centered container.
      </Box>
    </Center>
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var p,x,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" pt="md" pl="xl" pb="md" pr="xl">
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Narrow the screen.
        <br />
        There will be a gap on both sides of the box.
      </Box>
    </Center>
}`,...(c=(x=n.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" textCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Center
      </Box>
    </Center>
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var C,b,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Center maxWidth="400px" childrenCenter>
      <Box border="gray" pt="md" pr="md" pb="md" pl="md">
        Centered Child
      </Box>
    </Center>
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const H=["Default","PaddingOutside","TextCenter","ChildrenCenter"];export{l as ChildrenCenter,a as Default,n as PaddingOutside,t as TextCenter,H as __namedExportsOrder,V as default};
