import{j as u}from"./jsx-runtime-69eee039.js";import{S as r,a as d}from"./ThumbUpOutlineIcon-17e2fa33.js";import{S as a}from"./UbieIcon-105662b4.js";import{c as l}from"./clsx-1229b3e0.js";import{S as i}from"./Stack-495f0d7b.js";import"./index-7c191284.js";import"./style-e9a2251f.js";const iu="_heading_1g2d3_1",su="_bold_1g2d3_11",ru="_left_1g2d3_19",du="_center_1g2d3_23",lu="_right_1g2d3_27",cu="_main_1g2d3_31",ou="_primary_1g2d3_35",tu="_accent_1g2d3_53",mu="_white_1g2d3_64",Fu="_xs_1g2d3_85",gu="_sm_1g2d3_90",pu="_md_1g2d3_95",Au="_lg_1g2d3_100",hu="_xl_1g2d3_105",xu="_leadingBorder_1g2d3_110",Bu="_icon_1g2d3_137",vu="_hasIcon_1g2d3_162",n={heading:iu,bold:su,left:ru,center:du,right:lu,main:cu,primary:ou,accent:tu,white:mu,xs:Fu,sm:gu,md:pu,lg:Au,xl:hu,leadingBorder:xu,icon:Bu,hasIcon:vu},e=({textAlign:s,children:W,primaryIcon:x,accentIcon:B,whiteIcon:v,size:X="md",color:Y="main",leadingBorder:D,as:Z="p",id:$,htmlFor:uu,bold:eu=!0,...nu})=>{const au=l(n.heading,x||B||v?n.hasIcon:null,s?n[s]:null,n[X],D?n.secondary:n[Y],D?n.leadingBorder:null,eu?n.bold:null);return u.jsxs(Z,{className:au,id:$,htmlFor:uu,...nu,children:[x&&u.jsx("span",{"aria-hidden":!0,className:l(n.icon,n.primary),children:x}),B&&u.jsx("span",{"aria-hidden":!0,className:l(n.icon,n.accent),children:B}),v&&u.jsx("span",{"aria-hidden":!0,className:l(n.icon,n.white),children:v}),W]})};e.displayName="Heading";try{e.displayName="Heading",e.__docgenInfo={description:"",displayName:"Heading",props:{textAlign:{defaultValue:null,description:"テキストの配置。指定しない場合、親要素の配置を継承",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},primaryIcon:{defaultValue:null,description:"アイコン。プライマラーカラーで表示。icon propはどれかひとつのみを指定してください",name:"primaryIcon",required:!1,type:{name:"ReactNode"}},accentIcon:{defaultValue:null,description:"アイコン。アクセントカラーで表示。icon propはどれかひとつのみを指定してください",name:"accentIcon",required:!1,type:{name:"ReactNode"}},whiteIcon:{defaultValue:null,description:"アイコン。ホワイトカラーで表示。icon propはどれかひとつのみを指定してください",name:"whiteIcon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:"サイズ。Typographyトークンの値を指定",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},leadingBorder:{defaultValue:{value:"false"},description:"行の先頭にボーダーを表示",name:"leadingBorder",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"p"},description:"レンダリングされるHTML要素",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"header"'},{value:'"small"'},{value:'"span"'},{value:'"b"'},{value:'"strong"'},{value:'"em"'},{value:'"i"'},{value:'"body"'},{value:'"button"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"search"'},{value:'"section"'},{value:'"select"'},{value:'"slot"'},{value:'"source"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},color:{defaultValue:{value:"main"},description:"テキストのカラーバリエーション",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"main"'},{value:'"accent"'},{value:'"white"'}]}},id:{defaultValue:null,description:"HTMLのID属性",name:"id",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"HTMLのfor属性。label要素の場合に使用",name:"htmlFor",required:!1,type:{name:"string"}},bold:{defaultValue:{value:"true"},description:"太字とするかどうか、falseの場合はnormal",name:"bold",required:!1,type:{name:"boolean"}}}}}catch{}const yu={title:"Typography/Heading",component:e},c={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{size:"xs",children:"xs: スマートフォン問診"}),u.jsxs(e,{size:"xs",children:["xs: スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{size:"sm",children:"sm: スマートフォン問診"}),u.jsxs(e,{size:"sm",children:["sm: スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{size:"md",children:"md: スマートフォン問診"}),u.jsxs(e,{size:"md",children:["md: スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{size:"lg",children:"lg: スマートフォン問診"}),u.jsxs(e,{size:"lg",children:["lg: スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{size:"xl",children:"xl: スマートフォン問診"}),u.jsxs(e,{size:"xl",children:["xl: スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]})]})},o={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"p",color:"main",size:"md",children:"p"}),u.jsx(e,{as:"h1",color:"main",size:"md",id:"test-id",children:"h1 with id attribute"}),u.jsx(e,{as:"h2",color:"main",size:"md",children:"h2"}),u.jsx(e,{as:"h3",color:"main",size:"md",children:"h3"}),u.jsx(e,{as:"h4",color:"main",size:"md",children:"h4"}),u.jsx(e,{as:"h5",color:"main",size:"md",children:"h5"}),u.jsx(e,{as:"h6",color:"main",size:"md",children:"h6"}),u.jsx(e,{as:"label",color:"main",size:"md",htmlFor:"some-input-id",children:"label"})]})},t={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"p",color:"main",size:"md",children:"スマートフォン問診（main）"}),u.jsx(e,{as:"p",color:"primary",size:"md",children:"スマートフォン問診（primary）"}),u.jsx(e,{as:"p",color:"accent",size:"md",children:"スマートフォン問診（accent）"}),u.jsx("div",{style:{backgroundColor:"var(--color-primary)",padding:"var(--size-spacing-xs)"},children:u.jsx(e,{as:"p",color:"white",size:"md",children:"スマートフォン問診（white）"})})]})},m={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsxs(e,{as:"p",color:"main",size:"md",children:[u.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（main）"]}),u.jsxs(e,{as:"p",color:"primary",size:"md",children:[u.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（primary）"]}),u.jsxs(e,{as:"p",color:"accent",size:"md",children:[u.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（accent）"]}),u.jsx("div",{style:{backgroundColor:"var(--color-primary)",padding:"var(--size-spacing-xs)"},children:u.jsxs(e,{as:"p",color:"white",size:"md",children:[u.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（white）"]})})]})},F={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"p",leadingBorder:!0,size:"xs",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",leadingBorder:!0,size:"xs",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",leadingBorder:!0,size:"sm",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",leadingBorder:!0,size:"sm",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",leadingBorder:!0,size:"md",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",leadingBorder:!0,size:"md",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",leadingBorder:!0,size:"lg",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",leadingBorder:!0,size:"lg",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",leadingBorder:!0,size:"xl",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",leadingBorder:!0,size:"xl",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]})]})},g={render:()=>u.jsxs(i,{spacing:"md",alignItems:"normal",children:[u.jsx("div",{style:{textAlign:"center"},children:u.jsx(e,{as:"p",size:"md",children:"スマートフォン問診（inherit）"})}),u.jsx(e,{as:"p",size:"md",textAlign:"left",children:"スマートフォン問診（left）"}),u.jsx(e,{as:"p",size:"md",textAlign:"center",children:"スマートフォン問診（center）"}),u.jsx(e,{as:"p",size:"md",textAlign:"right",children:"スマートフォン問診（right）"})]})},p={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"xs",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"xs",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"sm",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"sm",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"md",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"md",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"lg",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"lg",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"xl",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"xl",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",accentIcon:u.jsx(r,{}),size:"xs",children:"スマートフォン問診"}),u.jsx(e,{as:"p",accentIcon:u.jsx(r,{}),size:"sm",children:"スマートフォン問診"}),u.jsx(e,{as:"p",accentIcon:u.jsx(r,{}),size:"md",children:"スマートフォン問診"}),u.jsx(e,{as:"p",accentIcon:u.jsx(r,{}),size:"lg",children:"スマートフォン問診"}),u.jsx(e,{as:"p",accentIcon:u.jsx(r,{}),size:"xl",children:"スマートフォン問診"}),u.jsx("div",{style:{backgroundColor:"var(--color-primary)",padding:"var(--size-spacing-xs)"},children:u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"p",color:"white",whiteIcon:u.jsx(d,{}),size:"xs",children:"スマートフォン問診"}),u.jsx(e,{as:"p",color:"white",whiteIcon:u.jsx(d,{}),size:"sm",children:"スマートフォン問診"}),u.jsx(e,{as:"p",color:"white",whiteIcon:u.jsx(d,{}),size:"md",children:"スマートフォン問診"}),u.jsx(e,{as:"p",color:"white",whiteIcon:u.jsx(d,{}),size:"lg",children:"スマートフォン問診"}),u.jsx(e,{as:"p",color:"white",whiteIcon:u.jsx(d,{}),size:"xl",children:"スマートフォン問診"})]})})]})},A={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"h1",color:"main",size:"md",children:"h1 bold"}),u.jsx(e,{as:"h1",color:"main",size:"md",bold:!1,children:"h1 normal"})]})},h={render:s=>u.jsx(e,{...s,children:"Heading with Custom Data Attribute"}),args:{"data-test-id":"heading-custom-attribute"}};var C,H,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <Heading size="xs">xs: スマートフォン問診</Heading>
      <Heading size="xs">
        xs: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="sm">sm: スマートフォン問診</Heading>
      <Heading size="sm">
        sm: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="md">md: スマートフォン問診</Heading>
      <Heading size="md">
        md: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="lg">lg: スマートフォン問診</Heading>
      <Heading size="lg">
        lg: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading size="xl">xl: スマートフォン問診</Heading>
      <Heading size="xl">
        xl: スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
    </Stack>
}`,...(z=(H=c.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var j,b,E;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        p
      </Heading>
      <Heading as="h1" color="main" size="md" id="test-id">
        h1 with id attribute
      </Heading>
      <Heading as="h2" color="main" size="md">
        h2
      </Heading>
      <Heading as="h3" color="main" size="md">
        h3
      </Heading>
      <Heading as="h4" color="main" size="md">
        h4
      </Heading>
      <Heading as="h5" color="main" size="md">
        h5
      </Heading>
      <Heading as="h6" color="main" size="md">
        h6
      </Heading>
      {/* markuplint-disable-next-line */}
      <Heading as="label" color="main" size="md" htmlFor="some-input-id">
        label
      </Heading>
    </Stack>
}`,...(E=(b=o.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var y,I,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        スマートフォン問診（main）
      </Heading>

      <Heading as="p" color="primary" size="md">
        スマートフォン問診（primary）
      </Heading>

      <Heading as="p" color="accent" size="md">
        スマートフォン問診（accent）
      </Heading>

      <div style={{
      backgroundColor: 'var(--color-primary)',
      padding: 'var(--size-spacing-xs)'
    }}>
        <Heading as="p" color="white" size="md">
          スマートフォン問診（white）
        </Heading>
      </div>
    </Stack>
}`,...(f=(I=t.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var _,S,w;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <Heading as="p" color="main" size="md">
        <a href="https://vitals.ubie.life/">Vitals</a> スマートフォン問診（main）
      </Heading>

      <Heading as="p" color="primary" size="md">
        <a href="https://vitals.ubie.life/">Vitals</a> スマートフォン問診（primary）
      </Heading>

      <Heading as="p" color="accent" size="md">
        <a href="https://vitals.ubie.life/">Vitals</a> スマートフォン問診（accent）
      </Heading>

      <div style={{
      backgroundColor: 'var(--color-primary)',
      padding: 'var(--size-spacing-xs)'
    }}>
        <Heading as="p" color="white" size="md">
          <a href="https://vitals.ubie.life/">Vitals</a> スマートフォン問診（white）
        </Heading>
      </div>
    </Stack>
}`,...(w=(S=m.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,V,U;F.parameters={...F.parameters,docs:{...(k=F.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <Heading as="p" leadingBorder size="xs">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="xs">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="sm">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="sm">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="md">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="md">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="lg">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="lg">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" leadingBorder size="xl">
        スマートフォン問診
      </Heading>
      <Heading as="p" leadingBorder size="xl">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
    </Stack>
}`,...(U=(V=F.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var q,T,N;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Stack spacing="md" alignItems="normal">
      <div style={{
      textAlign: 'center'
    }}>
        <Heading as="p" size="md">
          スマートフォン問診（inherit）
        </Heading>
      </div>

      <Heading as="p" size="md" textAlign="left">
        スマートフォン問診（left）
      </Heading>
      <Heading as="p" size="md" textAlign="center">
        スマートフォン問診（center）
      </Heading>
      <Heading as="p" size="md" textAlign="right">
        スマートフォン問診（right）
      </Heading>
    </Stack>
}`,...(N=(T=g.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var L,O,R;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <Heading as="p" primaryIcon={<UbieIcon />} size="xs">
        スマートフォン問診
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="xs">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="sm">
        スマートフォン問診
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="sm">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="md">
        スマートフォン問診
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="md">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="lg">
        スマートフォン問診
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="lg">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="xl">
        スマートフォン問診
      </Heading>
      <Heading as="p" primaryIcon={<UbieIcon />} size="xl">
        スマートフォン問診を利用できる
        <br />
        近くの医療機関から調べる
      </Heading>

      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />} size="xs">
        スマートフォン問診
      </Heading>
      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />} size="sm">
        スマートフォン問診
      </Heading>
      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />} size="md">
        スマートフォン問診
      </Heading>
      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />} size="lg">
        スマートフォン問診
      </Heading>
      <Heading as="p" accentIcon={<ThumbUpOutlineIcon />} size="xl">
        スマートフォン問診
      </Heading>

      <div style={{
      backgroundColor: 'var(--color-primary)',
      padding: 'var(--size-spacing-xs)'
    }}>
        <Stack spacing="md">
          <Heading as="p" color="white" whiteIcon={<SetupIcon />} size="xs">
            スマートフォン問診
          </Heading>
          <Heading as="p" color="white" whiteIcon={<SetupIcon />} size="sm">
            スマートフォン問診
          </Heading>
          <Heading as="p" color="white" whiteIcon={<SetupIcon />} size="md">
            スマートフォン問診
          </Heading>
          <Heading as="p" color="white" whiteIcon={<SetupIcon />} size="lg">
            スマートフォン問診
          </Heading>
          <Heading as="p" color="white" whiteIcon={<SetupIcon />} size="xl">
            スマートフォン問診
          </Heading>
        </Stack>
      </div>
    </Stack>
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var M,G,J;A.parameters={...A.parameters,docs:{...(M=A.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <Heading as="h1" color="main" size="md">
        h1 bold
      </Heading>
      <Heading as="h1" color="main" size="md" bold={false}>
        h1 normal
      </Heading>
    </Stack>
}`,...(J=(G=A.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,P,Q;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <Heading {...args}>Heading with Custom Data Attribute</Heading>,
  args: {
    [\`data-test-id\`]: 'heading-custom-attribute'
  }
}`,...(Q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const Iu=["Default","Element","Colors","HasLink","LeadingBorder","TextAlign","Icon","Bold","CustomDataAttribute"];export{A as Bold,t as Colors,h as CustomDataAttribute,c as Default,o as Element,m as HasLink,p as Icon,F as LeadingBorder,g as TextAlign,Iu as __namedExportsOrder,yu as default};
