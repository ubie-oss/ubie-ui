import{a as e,j as n}from"./jsx-runtime-03b4ddbf.js";import{c as M}from"./clsx-1229b3e0.js";import{S as d}from"./Stack-60de74b5.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const O="_text_b5qlw_1",G="_bold_b5qlw_7",J="_body_b5qlw_12",K="_sm_b5qlw_12",P="_md_b5qlw_16",Q="_lg_b5qlw_20",U="_heading_b5qlw_24",W="_xs_b5qlw_24",X="_xl_b5qlw_40",Y="_note_b5qlw_44",Z="_button_b5qlw_56",ee="_tag_b5qlw_68",ne="_narrow_b5qlw_104",te="_tight_b5qlw_108",re="_main_b5qlw_113",de="_sub_b5qlw_117",ie="_link_b5qlw_121",ae="_linkSub_b5qlw_125",le="_disabled_b5qlw_129",se="_primary_b5qlw_133",oe="_accent_b5qlw_137",ce="_alert_b5qlw_141",ue="_white_b5qlw_145",a={text:O,bold:G,body:J,sm:K,md:P,lg:Q,heading:U,xs:W,xl:X,note:Y,button:Z,tag:ee,default:"_default_b5qlw_81",narrow:ne,tight:te,main:re,sub:de,link:ie,linkSub:ae,disabled:le,primary:se,accent:oe,alert:ce,white:ue},t=({as:r="p",size:E="md",type:L="body",leading:F="default",bold:V=!1,color:j="main",children:H,className:R})=>e(r,{className:M(R,a.text,V&&a.bold,a[E],a[L],a[F],a[j]),children:H});try{t.displayName="Text",t.__docgenInfo={description:"Design Systemに則ったTypographyのスタイルを提供",displayName:"Text",props:{as:{defaultValue:{value:"p"},description:"コンポーネントのHTML要素",name:"as",required:!1,type:{name:"ElementType<{ className?: string; children: ReactNode; }>"}},size:{defaultValue:{value:"md"},description:"フォントサイズの抽象値",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},type:{defaultValue:{value:"body"},description:"テキストの種類",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"heading"'},{value:'"note"'},{value:'"body"'},{value:'"tag"'}]}},leading:{defaultValue:{value:"default"},description:"行送りの抽象値（`line-height`）",name:"leading",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"narrow"'},{value:'"tight"'}]}},bold:{defaultValue:{value:"false"},description:"太字とするかどうか",name:"bold",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"main"},description:"文字色の抽象値",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"alert"'},{value:'"disabled"'},{value:'"link"'},{value:'"main"'},{value:'"sub"'},{value:'"accent"'},{value:'"linkSub"'},{value:'"white"'}]}},children:{defaultValue:null,description:"子要素",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSSのクラス",name:"className",required:!1,type:{name:"string"}}}}}catch{}const he={component:t},i={},l={render:()=>e(t,{as:"h1",type:"heading",size:"xl",leading:"tight",color:"primary",children:"Dummy Text"}),args:i},s={render:()=>n(d,{spacing:"md",direction:"row",children:[e(t,{color:"main",children:"main"}),e(t,{color:"sub",children:"sub"}),e(t,{color:"link",children:"link"}),e(t,{color:"linkSub",children:"linkSub"}),e(t,{color:"disabled",children:"disabled"}),e(t,{color:"primary",children:"primary"}),e(t,{color:"accent",children:"accent"}),e(t,{color:"alert",children:"alert"}),e("span",{style:{background:"black",padding:"0 0.5em"},children:e(t,{color:"white",children:"white"})})]}),args:i},o={render:()=>{const r="近くの医療機関から調べる";return n(d,{spacing:"md",direction:"row",alignItems:"center",children:[n(t,{bold:!0,type:"heading",size:"xs",children:["xs",e("br",{}),`${r}`]}),n(t,{bold:!0,type:"heading",size:"sm",children:["sm",e("br",{}),`${r}`]}),n(t,{bold:!0,type:"heading",size:"md",children:["md",e("br",{}),`${r}`]}),n(t,{bold:!0,type:"heading",size:"lg",children:["lg",e("br",{}),`${r}`]}),n(t,{bold:!0,type:"heading",size:"xl",children:["xl",e("br",{}),`${r}`]})]})},args:i},c={render:()=>{const r="症状検索エンジン「ユビー」は「適切なタイミングでの適切な医療との出会い」の橋渡しによって、みなさんの健康・安全をサポートし、医療についての不安・悩み・苦痛を和らげます。";return n(d,{as:"dl",spacing:"md",children:[n("div",{children:[e("dt",{children:"Default Leading"}),e("dd",{children:n(d,{spacing:"md",direction:"row",alignItems:"center",children:[n(t,{type:"body",size:"sm",children:["sm",e("br",{}),`${r}`]}),n(t,{type:"body",size:"md",children:["md",e("br",{}),`${r}`]}),n(t,{type:"body",size:"lg",children:["lg",e("br",{}),`${r}`]})]})})]}),n("div",{children:[e("dt",{children:"Narrow Leading"}),e("dd",{children:n(d,{spacing:"md",direction:"row",alignItems:"center",children:[n(t,{leading:"narrow",type:"body",size:"sm",children:["sm",e("br",{}),`${r}`]}),n(t,{leading:"narrow",type:"body",size:"md",children:["md",e("br",{}),`${r}`]}),n(t,{leading:"narrow",type:"body",size:"lg",children:["lg",e("br",{}),`${r}`]})]})})]}),n("div",{children:[e("dt",{children:"Tight Leading"}),e("dd",{children:n(d,{spacing:"md",direction:"row",alignItems:"center",children:[n(t,{leading:"tight",type:"body",size:"sm",children:["sm",e("br",{}),`${r}`]}),n(t,{leading:"tight",type:"body",size:"md",children:["md",e("br",{}),`${r}`]}),n(t,{leading:"tight",type:"body",size:"lg",children:["lg",e("br",{}),`${r}`]})]})})]})]})},args:i},u={render:()=>{const r="症状検索エンジン「ユビー」は「適切なタイミングでの適切な医療との出会い」の橋渡しによって、みなさんの健康・安全をサポートし、医療についての不安・悩み・苦痛を和らげます。";return n(d,{as:"dl",spacing:"md",children:[n("div",{children:[e("dt",{children:"Default Leading"}),e("dd",{children:n(d,{spacing:"md",direction:"row",alignItems:"center",children:[n(t,{type:"note",size:"sm",children:["sm",e("br",{}),`${r}`]}),n(t,{type:"note",size:"md",children:["md",e("br",{}),`${r}`]}),n(t,{type:"note",size:"lg",children:["lg",e("br",{}),`${r}`]})]})})]}),n("div",{children:[e("dt",{children:"Narrow Leading"}),e("dd",{children:n(d,{spacing:"md",direction:"row",alignItems:"center",children:[n(t,{leading:"narrow",type:"note",size:"sm",children:["sm",e("br",{}),`${r}`]}),n(t,{leading:"narrow",type:"note",size:"md",children:["md",e("br",{}),`${r}`]}),n(t,{leading:"narrow",type:"note",size:"lg",children:["lg",e("br",{}),`${r}`]})]})})]}),n("div",{children:[e("dt",{children:"Tight Leading"}),e("dd",{children:n(d,{spacing:"md",direction:"row",alignItems:"center",children:[n(t,{leading:"tight",type:"note",size:"sm",children:["sm",e("br",{}),`${r}`]}),n(t,{leading:"tight",type:"note",size:"md",children:["md",e("br",{}),`${r}`]}),n(t,{leading:"tight",type:"note",size:"lg",children:["lg",e("br",{}),`${r}`]})]})})]})]})},args:i},g={render:()=>{const r="同意して症状から調べる";return n(d,{spacing:"md",direction:"row",alignItems:"center",children:[n(t,{type:"button",size:"sm",children:["sm",e("br",{}),`${r}`]}),n(t,{type:"button",size:"md",children:["md",e("br",{}),`${r}`]}),n(t,{type:"button",size:"lg",children:["lg",e("br",{}),`${r}`]})]})},args:i},m={render:()=>{const r="循環器内科";return n(d,{spacing:"md",direction:"row",alignItems:"center",children:[n(t,{type:"tag",size:"sm",children:["sm",e("br",{}),`${r}`]}),n(t,{type:"tag",size:"md",children:["md",e("br",{}),`${r}`]}),n(t,{type:"tag",size:"lg",children:["lg",e("br",{}),`${r}`]})]})},args:i};var b,p,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Text as="h1" type="heading" size="xl" leading="tight" color="primary">
      Dummy Text
    </Text>,
  args: defaultArgs
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,T,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(T=s.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var _,w,z;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var $,v,k;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(k=(v=c.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,f,q;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(f=u.parameters)==null?void 0:f.docs)==null?void 0:q.source}}};var B,D,I;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var A,N,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(N=m.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const Te=["Default","Color","Heading","Body","Note","Button","Tag"];export{c as Body,g as Button,s as Color,l as Default,o as Heading,u as Note,m as Tag,Te as __namedExportsOrder,he as default};
//# sourceMappingURL=Text.stories-689c535e.js.map
