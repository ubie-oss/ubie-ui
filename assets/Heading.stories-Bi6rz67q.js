import{j as e}from"./jsx-runtime-BJwPuJt0.js";import{T as d,S as o}from"./ThumbUpOutlineIcon-BvOMhkwn.js";import{U as n}from"./UbieIcon-DZeUlYpH.js";import{c as l}from"./clsx-B-dksMZM.js";import{S as s}from"./Stack-CTMv-666.js";import{B as u}from"./Box-jmq1XYvY.js";import"./index-DX35FyXq.js";import"./style-D1Pgu1yr.js";const te="_heading_1ekb3_1",ce="_bold_1ekb3_13",pe="_left_1ekb3_21",me="_center_1ekb3_25",ge="_right_1ekb3_29",he="_main_1ekb3_33",xe="_primary_1ekb3_37",ve="_accent_1ekb3_55",be="_white_1ekb3_66",He="_xs_1ekb3_87",je="_sm_1ekb3_92",ze="_md_1ekb3_97",ye="_lg_1ekb3_102",fe="_xl_1ekb3_107",Ie="_leadingBorder_1ekb3_112",Be="_icon_1ekb3_139",ke="_hasIcon_1ekb3_164",_e="_noWrap_1ekb3_209",i={heading:te,bold:ce,left:pe,center:me,right:ge,main:he,primary:xe,accent:ve,white:be,xs:He,sm:je,md:ze,lg:ye,xl:fe,leadingBorder:Ie,icon:Be,hasIcon:ke,noWrap:_e},a=({textAlign:r,children:ee,primaryIcon:j,accentIcon:z,whiteIcon:y,size:ae="md",color:ie="main",leadingBorder:f,as:ne="p",id:se,htmlFor:re,bold:de=!0,noWrap:oe=!1,...le})=>{const ue=l(i.heading,j||z||y?i.hasIcon:null,r?i[r]:null,i[ae],f?i.secondary:i[ie],f?i.leadingBorder:null,de&&i.bold,oe&&i.noWrap);return e.jsxs(ne,{className:ue,id:se,htmlFor:re,...le,children:[j&&e.jsx("span",{"aria-hidden":!0,className:l(i.icon,i.primary),children:j}),z&&e.jsx("span",{"aria-hidden":!0,className:l(i.icon,i.accent),children:z}),y&&e.jsx("span",{"aria-hidden":!0,className:l(i.icon,i.white),children:y}),ee]})};a.displayName="Heading";try{a.displayName="Heading",a.__docgenInfo={description:"",displayName:"Heading",props:{textAlign:{defaultValue:null,description:"テキストの配置。指定しない場合、親要素の配置を継承",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},primaryIcon:{defaultValue:null,description:"アイコン。プライマラーカラーで表示。icon propはどれかひとつのみを指定してください",name:"primaryIcon",required:!1,type:{name:"ReactNode"}},accentIcon:{defaultValue:null,description:"アイコン。アクセントカラーで表示。icon propはどれかひとつのみを指定してください",name:"accentIcon",required:!1,type:{name:"ReactNode"}},whiteIcon:{defaultValue:null,description:"アイコン。ホワイトカラーで表示。icon propはどれかひとつのみを指定してください",name:"whiteIcon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"md"},description:`サイズ。Typographyトークンの値を指定
xs=16px, sm=18px, md=20px, lg=24px, xl=28px`,name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},leadingBorder:{defaultValue:{value:"false"},description:"行の先頭にボーダーを表示",name:"leadingBorder",required:!1,type:{name:"boolean"}},as:{defaultValue:{value:"p"},description:"レンダリングされるHTML要素",name:"as",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"form"'},{value:'"slot"'},{value:'"style"'},{value:'"title"'},{value:'"search"'},{value:'"button"'},{value:'"time"'},{value:'"article"'},{value:'"dialog"'},{value:'"figure"'},{value:'"img"'},{value:'"link"'},{value:'"main"'},{value:'"menu"'},{value:'"option"'},{value:'"table"'},{value:'"span"'},{value:'"b"'},{value:'"strong"'},{value:'"em"'},{value:'"i"'},{value:'"header"'},{value:'"pre"'},{value:'"body"'},{value:'"p"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"aside"'},{value:'"audio"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"br"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"footer"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"iframe"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"map"'},{value:'"mark"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"output"'},{value:'"picture"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}},color:{defaultValue:{value:"main"},description:"テキストのカラーバリエーション",name:"color",required:!1,type:{name:"enum",value:[{value:'"main"'},{value:'"primary"'},{value:'"accent"'},{value:'"white"'}]}},id:{defaultValue:null,description:"HTMLのID属性",name:"id",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"HTMLのfor属性。label要素の場合に使用",name:"htmlFor",required:!1,type:{name:"string"}},bold:{defaultValue:{value:"true"},description:"太字とするかどうか、falseの場合はnormal",name:"bold",required:!1,type:{name:"boolean"}},noWrap:{defaultValue:{value:"false"},description:"ｚ",name:"noWrap",required:!1,type:{name:"boolean"}}}}}catch{}const Ue={title:"Typography/Heading",component:a},t={render:()=>e.jsxs(s,{spacing:"md",children:[e.jsx(a,{size:"xs",children:"xs: スマートフォン問診"}),e.jsxs(a,{size:"xs",children:["xs: スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{size:"sm",children:"sm: スマートフォン問診"}),e.jsxs(a,{size:"sm",children:["sm: スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{size:"md",children:"md: スマートフォン問診"}),e.jsxs(a,{size:"md",children:["md: スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{size:"lg",children:"lg: スマートフォン問診"}),e.jsxs(a,{size:"lg",children:["lg: スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{size:"xl",children:"xl: スマートフォン問診"}),e.jsxs(a,{size:"xl",children:["xl: スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]})]})},c={render:()=>e.jsxs(s,{spacing:"md",children:[e.jsx(a,{as:"p",color:"main",size:"md",children:"p"}),e.jsx(a,{as:"h1",color:"main",size:"md",id:"test-id",children:"h1 with id attribute"}),e.jsx(a,{as:"h2",color:"main",size:"md",children:"h2"}),e.jsx(a,{as:"h3",color:"main",size:"md",children:"h3"}),e.jsx(a,{as:"h4",color:"main",size:"md",children:"h4"}),e.jsx(a,{as:"h5",color:"main",size:"md",children:"h5"}),e.jsx(a,{as:"h6",color:"main",size:"md",children:"h6"}),e.jsx(a,{as:"label",color:"main",size:"md",htmlFor:"some-input-id",children:"label"})]})},p={render:()=>e.jsxs(s,{spacing:"md",children:[e.jsx(a,{as:"p",color:"main",size:"md",children:"スマートフォン問診（main）"}),e.jsx(a,{as:"p",color:"primary",size:"md",children:"スマートフォン問診（primary）"}),e.jsx(a,{as:"p",color:"accent",size:"md",children:"スマートフォン問診（accent）"}),e.jsx("div",{style:{backgroundColor:"var(--color-primary)",padding:"var(--size-spacing-xs)"},children:e.jsx(a,{as:"p",color:"white",size:"md",children:"スマートフォン問診（white）"})})]})},m={render:()=>e.jsxs(s,{spacing:"md",children:[e.jsxs(a,{as:"p",color:"main",size:"md",children:[e.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（main）"]}),e.jsxs(a,{as:"p",color:"primary",size:"md",children:[e.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（primary）"]}),e.jsxs(a,{as:"p",color:"accent",size:"md",children:[e.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（accent）"]}),e.jsx("div",{style:{backgroundColor:"var(--color-primary)",padding:"var(--size-spacing-xs)"},children:e.jsxs(a,{as:"p",color:"white",size:"md",children:[e.jsx("a",{href:"https://vitals.ubie.life/",children:"Vitals"})," スマートフォン問診（white）"]})})]})},g={render:()=>e.jsxs(s,{spacing:"md",children:[e.jsx(a,{as:"p",leadingBorder:!0,size:"xs",children:"スマートフォン問診"}),e.jsxs(a,{as:"p",leadingBorder:!0,size:"xs",children:["スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{as:"p",leadingBorder:!0,size:"sm",children:"スマートフォン問診"}),e.jsxs(a,{as:"p",leadingBorder:!0,size:"sm",children:["スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{as:"p",leadingBorder:!0,size:"md",children:"スマートフォン問診"}),e.jsxs(a,{as:"p",leadingBorder:!0,size:"md",children:["スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{as:"p",leadingBorder:!0,size:"lg",children:"スマートフォン問診"}),e.jsxs(a,{as:"p",leadingBorder:!0,size:"lg",children:["スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{as:"p",leadingBorder:!0,size:"xl",children:"スマートフォン問診"}),e.jsxs(a,{as:"p",leadingBorder:!0,size:"xl",children:["スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]})]})},h={render:()=>e.jsxs(s,{spacing:"md",alignItems:"normal",children:[e.jsx("div",{style:{textAlign:"center"},children:e.jsx(a,{as:"p",size:"md",children:"スマートフォン問診（inherit）"})}),e.jsx(a,{as:"p",size:"md",textAlign:"left",children:"スマートフォン問診（left）"}),e.jsx(a,{as:"p",size:"md",textAlign:"center",children:"スマートフォン問診（center）"}),e.jsx(a,{as:"p",size:"md",textAlign:"right",children:"スマートフォン問診（right）"})]})},x={render:()=>e.jsxs(s,{spacing:"md",children:[e.jsx(a,{as:"p",primaryIcon:e.jsx(n,{}),size:"xs",children:"スマートフォン問診"}),e.jsxs(a,{as:"p",primaryIcon:e.jsx(n,{}),size:"xs",children:["スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{as:"p",primaryIcon:e.jsx(n,{}),size:"sm",children:"スマートフォン問診"}),e.jsxs(a,{as:"p",primaryIcon:e.jsx(n,{}),size:"sm",children:["スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{as:"p",primaryIcon:e.jsx(n,{}),size:"md",children:"スマートフォン問診"}),e.jsxs(a,{as:"p",primaryIcon:e.jsx(n,{}),size:"md",children:["スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{as:"p",primaryIcon:e.jsx(n,{}),size:"lg",children:"スマートフォン問診"}),e.jsxs(a,{as:"p",primaryIcon:e.jsx(n,{}),size:"lg",children:["スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{as:"p",primaryIcon:e.jsx(n,{}),size:"xl",children:"スマートフォン問診"}),e.jsxs(a,{as:"p",primaryIcon:e.jsx(n,{}),size:"xl",children:["スマートフォン問診を利用できる",e.jsx("br",{}),"近くの医療機関から調べる"]}),e.jsx(a,{as:"p",accentIcon:e.jsx(d,{}),size:"xs",children:"スマートフォン問診"}),e.jsx(a,{as:"p",accentIcon:e.jsx(d,{}),size:"sm",children:"スマートフォン問診"}),e.jsx(a,{as:"p",accentIcon:e.jsx(d,{}),size:"md",children:"スマートフォン問診"}),e.jsx(a,{as:"p",accentIcon:e.jsx(d,{}),size:"lg",children:"スマートフォン問診"}),e.jsx(a,{as:"p",accentIcon:e.jsx(d,{}),size:"xl",children:"スマートフォン問診"}),e.jsx("div",{style:{backgroundColor:"var(--color-primary)",padding:"var(--size-spacing-xs)"},children:e.jsxs(s,{spacing:"md",children:[e.jsx(a,{as:"p",color:"white",whiteIcon:e.jsx(o,{}),size:"xs",children:"スマートフォン問診"}),e.jsx(a,{as:"p",color:"white",whiteIcon:e.jsx(o,{}),size:"sm",children:"スマートフォン問診"}),e.jsx(a,{as:"p",color:"white",whiteIcon:e.jsx(o,{}),size:"md",children:"スマートフォン問診"}),e.jsx(a,{as:"p",color:"white",whiteIcon:e.jsx(o,{}),size:"lg",children:"スマートフォン問診"}),e.jsx(a,{as:"p",color:"white",whiteIcon:e.jsx(o,{}),size:"xl",children:"スマートフォン問診"})]})})]})},v={render:()=>e.jsxs(s,{spacing:"md",children:[e.jsx(a,{as:"h1",color:"main",size:"md",children:"h1 bold"}),e.jsx(a,{as:"h1",color:"main",size:"md",bold:!1,children:"h1 normal"})]})},b={render:r=>e.jsx(a,{...r,children:"Heading with Custom Data Attribute"}),args:{"data-test-id":"heading-custom-attribute"}},H={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsxs(s,{spacing:"md",children:[e.jsx(u,{border:"gray",children:e.jsx(a,{children:"私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111"})}),e.jsx("div",{lang:"en",children:e.jsx(u,{border:"gray",children:e.jsx(a,{children:"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen booooooooooooooooooooooooooooooooooooooooooooook."})})}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("code",{children:"noWrap"})}),e.jsx(u,{border:"gray",children:e.jsx(a,{noWrap:!0,children:"私はすべてぼんやりその批評痛というのの中を押しだなけれ。現に十月の仕事方ももしこのお尋ねましたまでをふりまいとならませには刺戟待ったたて、とてもにはなろべきませたです。https://vitals.ubie.life/?hoge=1111111111111111111111111111111111111111111111111111"})})]}),e.jsxs("div",{children:[e.jsx("p",{children:e.jsx("code",{children:"noWrap"})}),e.jsx(u,{border:"gray",children:e.jsx(a,{noWrap:!0,children:"industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})})]})]})})};var I,B,k;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(B=t.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var _,A,w;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(A=c.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var F,C,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(S=(C=p.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var E,D,V;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(D=m.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var U,T,W;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(W=(T=g.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var q,L,N;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(L=h.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,R,M;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(M=(R=x.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Stack spacing="md">
      <Heading as="h1" color="main" size="md">
        h1 bold
      </Heading>
      <Heading as="h1" color="main" size="md" bold={false}>
        h1 normal
      </Heading>
    </Stack>
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,X;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <Heading {...args}>Heading with Custom Data Attribute</Heading>,
  args: {
    [\`data-test-id\`]: 'heading-custom-attribute'
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;H.parameters={...H.parameters,docs:{...(Y=H.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=H.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const Te=["Default","Element","Colors","HasLink","LeadingBorder","TextAlign","Icon","Bold","CustomDataAttribute","TextWrap"];export{v as Bold,p as Colors,b as CustomDataAttribute,t as Default,c as Element,m as HasLink,x as Icon,g as LeadingBorder,h as TextAlign,H as TextWrap,Te as __namedExportsOrder,Ue as default};
