import{j as u}from"./jsx-runtime-69eee039.js";import{S as r,a as d}from"./ThumbUpOutlineIcon-17e2fa33.js";import{S as a}from"./UbieIcon-105662b4.js";import{c as o}from"./clsx-1229b3e0.js";import{S as i}from"./Stack-450fcfc8.js";import{B as l}from"./Box-ea5797f0.js";import"./index-7c191284.js";import"./style-62efef97.js";const tu="_heading_1ekb3_1",cu="_bold_1ekb3_13",pu="_left_1ekb3_21",mu="_center_1ekb3_25",Fu="_right_1ekb3_29",gu="_main_1ekb3_33",Au="_primary_1ekb3_37",hu="_accent_1ekb3_55",xu="_white_1ekb3_66",Bu="_xs_1ekb3_87",vu="_sm_1ekb3_92",Du="_md_1ekb3_97",Cu="_lg_1ekb3_102",bu="_xl_1ekb3_107",Hu="_leadingBorder_1ekb3_112",ju="_icon_1ekb3_139",zu="_hasIcon_1ekb3_164",Eu="_noWrap_1ekb3_209",n={heading:tu,bold:cu,left:pu,center:mu,right:Fu,main:gu,primary:Au,accent:hu,white:xu,xs:Bu,sm:vu,md:Du,lg:Cu,xl:bu,leadingBorder:Hu,icon:ju,hasIcon:zu,noWrap:Eu},e=({textAlign:s,children:uu,primaryIcon:v,accentIcon:D,whiteIcon:C,size:eu="md",color:nu="main",leadingBorder:b,as:au="p",id:iu,htmlFor:su,bold:ru=!0,noWrap:du=!1,...ou})=>{const lu=o(n.heading,v||D||C?n.hasIcon:null,s?n[s]:null,n[eu],b?n.secondary:n[nu],b?n.leadingBorder:null,ru&&n.bold,du&&n.noWrap);return u.jsxs(au,{className:lu,id:iu,htmlFor:su,...ou,children:[v&&u.jsx("span",{"aria-hidden":!0,className:o(n.icon,n.primary),children:v}),D&&u.jsx("span",{"aria-hidden":!0,className:o(n.icon,n.accent),children:D}),C&&u.jsx("span",{"aria-hidden":!0,className:o(n.icon,n.white),children:C}),uu]})};e.displayName="Heading";try{e.displayName="Heading",e.__docgenInfo={description:"",displayName:"Heading",props:{textAlign:{defaultValue:null,description:"テキストの配置。指定しない場合、親要素の配置を継承",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},primaryIcon:{defaultValue:null,description:"アイコン。プライマラーカラーで表示。icon propはどれかひとつのみを指定してください",name:"primaryIcon",required:!1,type:{name:"ReactNode"}},accentIcon:{defaultValue:null,description:"アイコン。アクセントカラーで表示。icon propはどれかひとつのみを指定してください",name:"accentIcon",required:!1,type:{name:"ReactNode"}},whiteIcon:{defaultValue:null,description:"アイコン。ホワイトカラーで表示。icon propはどれかひとつのみを指定してください",name:"whiteIcon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:`サイズ。Typographyトークンの値を指定
xs=16px, sm=18px, md=20px, lg=24px, xl=28px`,name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},leadingBorder:{defaultValue:{value:"false"},description:"行の先頭にボーダーを表示",name:"leadingBorder",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"p"},description:"レンダリングされるHTML要素",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"header"'},{value:'"small"'},{value:'"span"'},{value:'"b"'},{value:'"strong"'},{value:'"em"'},{value:'"i"'},{value:'"p"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"search"'},{value:'"section"'},{value:'"select"'},{value:'"slot"'},{value:'"source"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},color:{defaultValue:{value:"main"},description:"テキストのカラーバリエーション",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"main"'},{value:'"accent"'},{value:'"white"'}]}},id:{defaultValue:null,description:"HTMLのID属性",name:"id",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"HTMLのfor属性。label要素の場合に使用",name:"htmlFor",required:!1,type:{name:"string"}},bold:{defaultValue:{value:"true"},description:"太字とするかどうか、falseの場合はnormal",name:"bold",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:{value:"false"},description:"ｚ",name:"noWrap",required:!1,type:{name:"boolean"}}}}}catch{}const Uu={title:"Typography/Heading",component:e},t={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{size:"xs",children:"xs: スマートフォン問診"}),u.jsxs(e,{size:"xs",children:["xs: スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{size:"sm",children:"sm: スマートフォン問診"}),u.jsxs(e,{size:"sm",children:["sm: スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{size:"md",children:"md: スマートフォン問診"}),u.jsxs(e,{size:"md",children:["md: スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{size:"lg",children:"lg: スマートフォン問診"}),u.jsxs(e,{size:"lg",children:["lg: スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{size:"xl",children:"xl: スマートフォン問診"}),u.jsxs(e,{size:"xl",children:["xl: スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]})]})},c={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"p",color:"main",size:"md",children:"p"}),u.jsx(e,{as:"h1",color:"main",size:"md",id:"test-id",children:"h1 with id attribute"}),u.jsx(e,{as:"h2",color:"main",size:"md",children:"h2"}),u.jsx(e,{as:"h3",color:"main",size:"md",children:"h3"}),u.jsx(e,{as:"h4",color:"main",size:"md",children:"h4"}),u.jsx(e,{as:"h5",color:"main",size:"md",children:"h5"}),u.jsx(e,{as:"h6",color:"main",size:"md",children:"h6"}),u.jsx(e,{as:"label",color:"main",size:"md",htmlFor:"some-input-id",children:"label"})]})},p={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"p",color:"main",size:"md",children:"スマートフォン問診（main）"}),u.jsx(e,{as:"p",color:"primary",size:"md",children:"スマートフォン問診（primary）"}),u.jsx(e,{as:"p",color:"accent",size:"md",children:"スマートフォン問診（accent）"}),u.jsx("div",{style:{backgroundColor:"var(--color-primary)",padding:"var(--size-spacing-xs)"},children:u.jsx(e,{as:"p",color:"white",size:"md",children:"スマートフォン問診（white）"})})]})},m={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsxs(e,{as:"p",color:"main",size:"md",children:[u.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（main）"]}),u.jsxs(e,{as:"p",color:"primary",size:"md",children:[u.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（primary）"]}),u.jsxs(e,{as:"p",color:"accent",size:"md",children:[u.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（accent）"]}),u.jsx("div",{style:{backgroundColor:"var(--color-primary)",padding:"var(--size-spacing-xs)"},children:u.jsxs(e,{as:"p",color:"white",size:"md",children:[u.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（white）"]})})]})},F={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"p",leadingBorder:!0,size:"xs",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",leadingBorder:!0,size:"xs",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",leadingBorder:!0,size:"sm",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",leadingBorder:!0,size:"sm",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",leadingBorder:!0,size:"md",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",leadingBorder:!0,size:"md",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",leadingBorder:!0,size:"lg",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",leadingBorder:!0,size:"lg",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",leadingBorder:!0,size:"xl",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",leadingBorder:!0,size:"xl",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]})]})},g={render:()=>u.jsxs(i,{spacing:"md",alignItems:"normal",children:[u.jsx("div",{style:{textAlign:"center"},children:u.jsx(e,{as:"p",size:"md",children:"スマートフォン問診（inherit）"})}),u.jsx(e,{as:"p",size:"md",textAlign:"left",children:"スマートフォン問診（left）"}),u.jsx(e,{as:"p",size:"md",textAlign:"center",children:"スマートフォン問診（center）"}),u.jsx(e,{as:"p",size:"md",textAlign:"right",children:"スマートフォン問診（right）"})]})},A={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"xs",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"xs",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"sm",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"sm",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"md",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"md",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"lg",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"lg",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"xl",children:"スマートフォン問診"}),u.jsxs(e,{as:"p",primaryIcon:u.jsx(a,{}),size:"xl",children:["スマートフォン問診を利用できる",u.jsx("br",{}),"近くの医療機関から調べる"]}),u.jsx(e,{as:"p",accentIcon:u.jsx(r,{}),size:"xs",children:"スマートフォン問診"}),u.jsx(e,{as:"p",accentIcon:u.jsx(r,{}),size:"sm",children:"スマートフォン問診"}),u.jsx(e,{as:"p",accentIcon:u.jsx(r,{}),size:"md",children:"スマートフォン問診"}),u.jsx(e,{as:"p",accentIcon:u.jsx(r,{}),size:"lg",children:"スマートフォン問診"}),u.jsx(e,{as:"p",accentIcon:u.jsx(r,{}),size:"xl",children:"スマートフォン問診"}),u.jsx("div",{style:{backgroundColor:"var(--color-primary)",padding:"var(--size-spacing-xs)"},children:u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"p",color:"white",whiteIcon:u.jsx(d,{}),size:"xs",children:"スマートフォン問診"}),u.jsx(e,{as:"p",color:"white",whiteIcon:u.jsx(d,{}),size:"sm",children:"スマートフォン問診"}),u.jsx(e,{as:"p",color:"white",whiteIcon:u.jsx(d,{}),size:"md",children:"スマートフォン問診"}),u.jsx(e,{as:"p",color:"white",whiteIcon:u.jsx(d,{}),size:"lg",children:"スマートフォン問診"}),u.jsx(e,{as:"p",color:"white",whiteIcon:u.jsx(d,{}),size:"xl",children:"スマートフォン問診"})]})})]})},h={render:()=>u.jsxs(i,{spacing:"md",children:[u.jsx(e,{as:"h1",color:"main",size:"md",children:"h1 bold"}),u.jsx(e,{as:"h1",color:"main",size:"md",bold:!1,children:"h1 normal"})]})},x={render:s=>u.jsx(e,{...s,children:"Heading with Custom Data Attribute"}),args:{"data-test-id":"heading-custom-attribute"}},B={render:()=>u.jsx("div",{style:{width:"300px"},children:u.jsxs(i,{spacing:"md",children:[u.jsx(l,{border:"gray",children:u.jsx(e,{children:"私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111"})}),u.jsx("div",{lang:"en",children:u.jsx(l,{border:"gray",children:u.jsx(e,{children:"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen booooooooooooooooooooooooooooooooooooooooooooook."})})}),u.jsxs("div",{children:[u.jsx("p",{children:u.jsx("code",{children:"noWrap"})}),u.jsx(l,{border:"gray",children:u.jsx(e,{noWrap:!0,children:"私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111"})})]}),u.jsxs("div",{children:[u.jsx("p",{children:u.jsx("code",{children:"noWrap"})}),u.jsx(l,{border:"gray",children:u.jsx(e,{noWrap:!0,children:"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})})]})]})})};var H,j,z;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(j=t.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var E,y,f;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var I,k,_;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(k=p.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var w,S,V;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(S=m.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var U,W,T;F.parameters={...F.parameters,docs:{...(U=F.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(T=(W=F.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var q,L,N;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(L=g.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,R,M;A.parameters={...A.parameters,docs:{...(O=A.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(M=(R=A.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <Heading as="h1" color="main" size="md">
        h1 bold
      </Heading>
      <Heading as="h1" color="main" size="md" bold={false}>
        h1 normal
      </Heading>
    </Stack>
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,X;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <Heading {...args}>Heading with Custom Data Attribute</Heading>,
  args: {
    [\`data-test-id\`]: 'heading-custom-attribute'
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <Stack spacing="md">
        <Box border="gray">
          <Heading>
            私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111
          </Heading>
        </Box>

        <div lang="en">
          <Box border="gray">
            <Heading>
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              booooooooooooooooooooooooooooooooooooooooooooook.
            </Heading>
          </Box>
        </div>

        <div>
          <p>
            <code>noWrap</code>
          </p>

          <Box border="gray">
            <Heading noWrap>
              私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111
            </Heading>
          </Box>
        </div>

        <div>
          <p>
            <code>noWrap</code>
          </p>

          <Box border="gray">
            <Heading noWrap>
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Heading>
          </Box>
        </div>
      </Stack>
    </div>
}`,...($=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const Wu=["Default","Element","Colors","HasLink","LeadingBorder","TextAlign","Icon","Bold","CustomDataAttribute","TextWrap"];export{h as Bold,p as Colors,x as CustomDataAttribute,t as Default,c as Element,m as HasLink,A as Icon,F as LeadingBorder,g as TextAlign,B as TextWrap,Wu as __namedExportsOrder,Uu as default};
