import{j as e}from"./jsx-runtime-9c4ae004.js";import{c as H}from"./clsx-1229b3e0.js";import{S as s}from"./Stack-9aaccb72.js";import"./index-1b03fe98.js";const M="_text_kmh28_1",O="_bold_kmh28_12",G="_body_kmh28_17",J="_sm_kmh28_17",K="_md_kmh28_21",P="_lg_kmh28_25",Q="_heading_kmh28_29",U="_xs_kmh28_29",W="_xl_kmh28_45",X="_note_kmh28_49",Y="_button_kmh28_61",Z="_tag_kmh28_73",ee="_narrow_kmh28_109",ne="_tight_kmh28_113",te="_main_kmh28_118",se="_sub_kmh28_122",re="_link_kmh28_126",ae="_linkSub_kmh28_130",de="_disabled_kmh28_134",ie="_primary_kmh28_138",le="_accent_kmh28_142",ue="_alert_kmh28_146",oe="_white_kmh28_150",a={text:M,bold:O,body:G,sm:J,md:K,lg:P,heading:Q,xs:U,xl:W,note:X,button:Y,tag:Z,default:"_default_kmh28_86",narrow:ee,tight:ne,main:te,sub:se,link:re,linkSub:ae,disabled:de,primary:ie,accent:le,alert:ue,white:oe},n=({as:t="p",size:C="md",type:I="body",leading:N="default",bold:L=!1,color:q="main",children:V,className:R})=>e.jsx(t,{className:H(R,a.text,L&&a.bold,a[C],a[I],a[N],a[q]),children:V});n.__docgenInfo={description:"Design Systemに則ったTypographyのスタイルを提供",methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"ElementType",elements:[{name:"signature",type:"object",raw:"{ className?: string; children: ReactNode }",signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}],raw:"ElementType<{ className?: string; children: ReactNode }>"},description:`コンポーネントのHTML要素
@default p`,defaultValue:{value:"'p'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`フォントサイズの抽象値
@default md`,defaultValue:{value:"'md'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'body' | 'heading' | 'note' | 'button' | 'tag'",elements:[{name:"literal",value:"'body'"},{name:"literal",value:"'heading'"},{name:"literal",value:"'note'"},{name:"literal",value:"'button'"},{name:"literal",value:"'tag'"}]},description:`テキストの種類
@default body`,defaultValue:{value:"'body'",computed:!1}},leading:{required:!1,tsType:{name:"union",raw:"'default' | 'narrow' | 'tight'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'narrow'"},{name:"literal",value:"'tight'"}]},description:"行送りの抽象値（`line-height`）\n@default default",defaultValue:{value:"'default'",computed:!1}},bold:{required:!1,tsType:{name:"boolean"},description:"太字とするかどうか",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'main' | 'sub' | 'link' | 'linkSub' | 'disabled' | 'primary' | 'accent' | 'alert' | 'white'",elements:[{name:"literal",value:"'main'"},{name:"literal",value:"'sub'"},{name:"literal",value:"'link'"},{name:"literal",value:"'linkSub'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'accent'"},{name:"literal",value:"'alert'"},{name:"literal",value:"'white'"}]},description:`文字色の抽象値
@default textMain`,defaultValue:{value:"'main'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"子要素"},className:{required:!1,tsType:{name:"string"},description:"CSSのクラス"}}};const pe={component:n},r={},d={render:()=>e.jsx(n,{as:"h1",type:"heading",size:"xl",leading:"tight",color:"primary",children:"Dummy Text"}),args:r},i={render:()=>e.jsxs(s,{spacing:"md",direction:"row",children:[e.jsx(n,{color:"main",children:"main"}),e.jsx(n,{color:"sub",children:"sub"}),e.jsx(n,{color:"link",children:"link"}),e.jsx(n,{color:"linkSub",children:"linkSub"}),e.jsx(n,{color:"disabled",children:"disabled"}),e.jsx(n,{color:"primary",children:"primary"}),e.jsx(n,{color:"accent",children:"accent"}),e.jsx(n,{color:"alert",children:"alert"}),e.jsx("span",{style:{background:"black",padding:"0 0.5em"},children:e.jsx(n,{color:"white",children:"white"})})]}),args:r},l={render:()=>{const t="近くの医療機関から調べる";return e.jsxs(s,{spacing:"md",direction:"row",alignItems:"center",children:[e.jsxs(n,{bold:!0,type:"heading",size:"xs",children:["xs",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{bold:!0,type:"heading",size:"sm",children:["sm",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{bold:!0,type:"heading",size:"md",children:["md",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{bold:!0,type:"heading",size:"lg",children:["lg",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{bold:!0,type:"heading",size:"xl",children:["xl",e.jsx("br",{}),`${t}`]})]})},args:r},u={render:()=>{const t="症状検索エンジン「ユビー」は「適切なタイミングでの適切な医療との出会い」の橋渡しによって、みなさんの健康・安全をサポートし、医療についての不安・悩み・苦痛を和らげます。";return e.jsxs(s,{as:"dl",spacing:"md",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Default Leading"}),e.jsx("dd",{children:e.jsxs(s,{spacing:"md",direction:"row",alignItems:"center",children:[e.jsxs(n,{type:"body",size:"sm",children:["sm",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{type:"body",size:"md",children:["md",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{type:"body",size:"lg",children:["lg",e.jsx("br",{}),`${t}`]})]})})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Narrow Leading"}),e.jsx("dd",{children:e.jsxs(s,{spacing:"md",direction:"row",alignItems:"center",children:[e.jsxs(n,{leading:"narrow",type:"body",size:"sm",children:["sm",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{leading:"narrow",type:"body",size:"md",children:["md",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{leading:"narrow",type:"body",size:"lg",children:["lg",e.jsx("br",{}),`${t}`]})]})})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Tight Leading"}),e.jsx("dd",{children:e.jsxs(s,{spacing:"md",direction:"row",alignItems:"center",children:[e.jsxs(n,{leading:"tight",type:"body",size:"sm",children:["sm",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{leading:"tight",type:"body",size:"md",children:["md",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{leading:"tight",type:"body",size:"lg",children:["lg",e.jsx("br",{}),`${t}`]})]})})]})]})},args:r},o={render:()=>{const t="症状検索エンジン「ユビー」は「適切なタイミングでの適切な医療との出会い」の橋渡しによって、みなさんの健康・安全をサポートし、医療についての不安・悩み・苦痛を和らげます。";return e.jsxs(s,{as:"dl",spacing:"md",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"Default Leading"}),e.jsx("dd",{children:e.jsxs(s,{spacing:"md",direction:"row",alignItems:"center",children:[e.jsxs(n,{type:"note",size:"sm",children:["sm",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{type:"note",size:"md",children:["md",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{type:"note",size:"lg",children:["lg",e.jsx("br",{}),`${t}`]})]})})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Narrow Leading"}),e.jsx("dd",{children:e.jsxs(s,{spacing:"md",direction:"row",alignItems:"center",children:[e.jsxs(n,{leading:"narrow",type:"note",size:"sm",children:["sm",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{leading:"narrow",type:"note",size:"md",children:["md",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{leading:"narrow",type:"note",size:"lg",children:["lg",e.jsx("br",{}),`${t}`]})]})})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"Tight Leading"}),e.jsx("dd",{children:e.jsxs(s,{spacing:"md",direction:"row",alignItems:"center",children:[e.jsxs(n,{leading:"tight",type:"note",size:"sm",children:["sm",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{leading:"tight",type:"note",size:"md",children:["md",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{leading:"tight",type:"note",size:"lg",children:["lg",e.jsx("br",{}),`${t}`]})]})})]})]})},args:r},c={render:()=>{const t="同意して症状から調べる";return e.jsxs(s,{spacing:"md",direction:"row",alignItems:"center",children:[e.jsxs(n,{type:"button",size:"sm",children:["sm",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{type:"button",size:"md",children:["md",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{type:"button",size:"lg",children:["lg",e.jsx("br",{}),`${t}`]})]})},args:r},m={render:()=>{const t="循環器内科";return e.jsxs(s,{spacing:"md",direction:"row",alignItems:"center",children:[e.jsxs(n,{type:"tag",size:"sm",children:["sm",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{type:"tag",size:"md",children:["md",e.jsx("br",{}),`${t}`]}),e.jsxs(n,{type:"tag",size:"lg",children:["lg",e.jsx("br",{}),`${t}`]})]})},args:r};var x,g,p;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Text as="h1" type="heading" size="xl" leading="tight" color="primary">
      Dummy Text
    </Text>,
  args: defaultArgs
}`,...(p=(g=d.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,b,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Stack spacing="md" direction="row">
      <Text color="main">main</Text>
      <Text color="sub">sub</Text>
      <Text color="link">link</Text>
      <Text color="linkSub">linkSub</Text>
      <Text color="disabled">disabled</Text>
      <Text color="primary">primary</Text>
      <Text color="accent">accent</Text>
      <Text color="alert">alert</Text>
      <span style={{
      background: 'black',
      padding: '0 0.5em'
    }}>
        <Text color="white">white</Text>
      </span>
    </Stack>,
  args: defaultArgs
}`,...(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var y,j,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const headingText = '近くの医療機関から調べる';
    return <Stack spacing="md" direction="row" alignItems="center">
        <Text bold type="heading" size="xs">
          xs
          <br />
          {\`\${headingText}\`}
        </Text>
        <Text bold type="heading" size="sm">
          sm
          <br />
          {\`\${headingText}\`}
        </Text>
        <Text bold type="heading" size="md">
          md
          <br />
          {\`\${headingText}\`}
        </Text>
        <Text bold type="heading" size="lg">
          lg
          <br />
          {\`\${headingText}\`}
        </Text>
        <Text bold type="heading" size="xl">
          xl
          <br />
          {\`\${headingText}\`}
        </Text>
      </Stack>;
  },
  args: defaultArgs
}`,...(_=(j=l.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var k,z,$;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const bodyText = '症状検索エンジン「ユビー」は「適切なタイミングでの適切な医療との出会い」の橋渡しによって、みなさんの健康・安全をサポートし、医療についての不安・悩み・苦痛を和らげます。';
    return <Stack as="dl" spacing="md">
        <div>
          <dt>Default Leading</dt>
          <dd>
            <Stack spacing="md" direction="row" alignItems="center">
              <Text type="body" size="sm">
                sm
                <br />
                {\`\${bodyText}\`}
              </Text>
              <Text type="body" size="md">
                md
                <br />
                {\`\${bodyText}\`}
              </Text>
              <Text type="body" size="lg">
                lg
                <br />
                {\`\${bodyText}\`}
              </Text>
            </Stack>
          </dd>
        </div>

        <div>
          <dt>Narrow Leading</dt>
          <dd>
            <Stack spacing="md" direction="row" alignItems="center">
              <Text leading="narrow" type="body" size="sm">
                sm
                <br />
                {\`\${bodyText}\`}
              </Text>
              <Text leading="narrow" type="body" size="md">
                md
                <br />
                {\`\${bodyText}\`}
              </Text>
              <Text leading="narrow" type="body" size="lg">
                lg
                <br />
                {\`\${bodyText}\`}
              </Text>
            </Stack>
          </dd>
        </div>

        <div>
          <dt>Tight Leading</dt>
          <dd>
            <Stack spacing="md" direction="row" alignItems="center">
              <Text leading="tight" type="body" size="sm">
                sm
                <br />
                {\`\${bodyText}\`}
              </Text>
              <Text leading="tight" type="body" size="md">
                md
                <br />
                {\`\${bodyText}\`}
              </Text>
              <Text leading="tight" type="body" size="lg">
                lg
                <br />
                {\`\${bodyText}\`}
              </Text>
            </Stack>
          </dd>
        </div>
      </Stack>;
  },
  args: defaultArgs
}`,...($=(z=u.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var w,f,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const noteText = '症状検索エンジン「ユビー」は「適切なタイミングでの適切な医療との出会い」の橋渡しによって、みなさんの健康・安全をサポートし、医療についての不安・悩み・苦痛を和らげます。';
    return <Stack as="dl" spacing="md">
        <div>
          <dt>Default Leading</dt>
          <dd>
            <Stack spacing="md" direction="row" alignItems="center">
              <Text type="note" size="sm">
                sm
                <br />
                {\`\${noteText}\`}
              </Text>
              <Text type="note" size="md">
                md
                <br />
                {\`\${noteText}\`}
              </Text>
              <Text type="note" size="lg">
                lg
                <br />
                {\`\${noteText}\`}
              </Text>
            </Stack>
          </dd>
        </div>

        <div>
          <dt>Narrow Leading</dt>
          <dd>
            <Stack spacing="md" direction="row" alignItems="center">
              <Text leading="narrow" type="note" size="sm">
                sm
                <br />
                {\`\${noteText}\`}
              </Text>
              <Text leading="narrow" type="note" size="md">
                md
                <br />
                {\`\${noteText}\`}
              </Text>
              <Text leading="narrow" type="note" size="lg">
                lg
                <br />
                {\`\${noteText}\`}
              </Text>
            </Stack>
          </dd>
        </div>
        <div>
          <dt>Tight Leading</dt>
          <dd>
            <Stack spacing="md" direction="row" alignItems="center">
              <Text leading="tight" type="note" size="sm">
                sm
                <br />
                {\`\${noteText}\`}
              </Text>
              <Text leading="tight" type="note" size="md">
                md
                <br />
                {\`\${noteText}\`}
              </Text>
              <Text leading="tight" type="note" size="lg">
                lg
                <br />
                {\`\${noteText}\`}
              </Text>
            </Stack>
          </dd>
        </div>
      </Stack>;
  },
  args: defaultArgs
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var B,S,F;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const buttonText = '同意して症状から調べる';
    return <Stack spacing="md" direction="row" alignItems="center">
        <Text type="button" size="sm">
          sm
          <br />
          {\`\${buttonText}\`}
        </Text>
        <Text type="button" size="md">
          md
          <br />
          {\`\${buttonText}\`}
        </Text>
        <Text type="button" size="lg">
          lg
          <br />
          {\`\${buttonText}\`}
        </Text>
      </Stack>;
  },
  args: defaultArgs
}`,...(F=(S=c.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var A,D,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const tagText = '循環器内科';
    return <Stack spacing="md" direction="row" alignItems="center">
        <Text type="tag" size="sm">
          sm
          <br />
          {\`\${tagText}\`}
        </Text>
        <Text type="tag" size="md">
          md
          <br />
          {\`\${tagText}\`}
        </Text>
        <Text type="tag" size="lg">
          lg
          <br />
          {\`\${tagText}\`}
        </Text>
      </Stack>;
  },
  args: defaultArgs
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const he=["Default","Color","Heading","Body","Note","Button","Tag"];export{u as Body,c as Button,i as Color,d as Default,l as Heading,o as Note,m as Tag,he as __namedExportsOrder,pe as default};
