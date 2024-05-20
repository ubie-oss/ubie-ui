import{j as t}from"./jsx-runtime-69eee039.js";import{c as h}from"./clsx-1229b3e0.js";import{r}from"./index-7c191284.js";import{p as V,m as w}from"./style-e9a2251f.js";const _="_flex_x27nz_1",q="_heightFull_x27nz_11",T="_widthFull_x27nz_15",e={flex:_,heightFull:q,widthFull:T},i=({as:u="div",children:s,direction:m="row",alignItems:v="flex-start",justifyContent:d="flex-start",wrap:o,spacing:l,height:p,width:x,pt:E,pr:c,pb:F,pl:f,mt:B,mr:A,mb:g,ml:C,...D})=>{const y=l?`var(--size-spacing-${l})`:"0";return((a,n)=>r.isValidElement(u)?r.cloneElement(u,u.props,t.jsx("div",{...a,children:n})):t.jsx(u,{...a,children:n}))({className:h(e.flex,p==="full"&&e.heightFull,x==="full"&&e.widthFull),style:{"--gap":y,"--flex-direction":m,"--align-items":v,"--justify-content":d,"--flex-wrap":o?"wrap":"nowrap",...V({pt:E,pr:c,pb:F,pl:f}),...w({mt:B,mr:A,mb:g,ml:C})},...D},s)};try{i.displayName="Flex",i.__docgenInfo={description:"",displayName:"Flex",props:{as:{defaultValue:{value:"div"},description:"レンダリングされるHTML要素",name:"as",required:!1,type:{name:"keyof HTMLElementTagNameMap | ReactElement<ComponentType<FC<PropsWithChildren<PropsWithoutText | PropsWithTextBody | PropsWithTextNote>>>, string | JSXElementConstructor<...>>"}},spacing:{defaultValue:null,description:"子要素同士の間隔",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},direction:{defaultValue:{value:"row"},description:"direction 重ねる向き",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},alignItems:{defaultValue:{value:"flex-start"},description:"主軸方向における子要素のレイアウトを定める。`direction` prop が `column` の場合は水平軸、 `row` の場合は垂直軸のレイアウトを制御する。水平軸の場合に、ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと",name:"alignItems",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"center"'},{value:'"stretch"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"baseline"'}]}},justifyContent:{defaultValue:{value:"flex-start"},description:"交差軸方向における子要素のレイアウトを定める。directionが `column` の場合は垂軸直、`row` の場合は水平軸のレイアウトを制御する。水平軸の場合に、ブロックレベル要素を幅いっぱいに占有させたい場合は `normal` を使うこと",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"center"'},{value:'"space-around"'},{value:'"space-between"'},{value:'"space-evenly"'},{value:'"flex-end"'},{value:'"flex-start"'}]}},wrap:{defaultValue:{value:"false"},description:"折り返しの有無",name:"wrap",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"親要素に対し、100%としたい場合に使用",name:"height",required:!1,type:{name:"enum",value:[{value:'"full"'}]}},width:{defaultValue:null,description:"デフォルト<Flex>は横幅いっぱいを専有する。しかし例えば、フレックスコンテナの子要素として配置した場合、横幅が自身の子に合わせて小さくなる。これが不都合の場合に100%とする事が可能",name:"width",required:!1,type:{name:"enum",value:[{value:'"full"'}]}},mt:{defaultValue:null,description:"margin-topの値。Spacing Tokenのキーを指定",name:"mt",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mr:{defaultValue:null,description:"margin-rightの値。Spacing Tokenのキーを指定",name:"mr",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},mb:{defaultValue:null,description:"margin-bottomの値。Spacing Tokenのキーを指定",name:"mb",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},ml:{defaultValue:null,description:"margin-leftの値。Spacing Tokenのキーを指定",name:"ml",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pt:{defaultValue:null,description:"padding-topの値。Spacing Tokenのキーを指定",name:"pt",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pr:{defaultValue:null,description:"padding-rightの値。Spacing Tokenのキーを指定",name:"pr",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pb:{defaultValue:null,description:"padding-bottomの値。Spacing Tokenのキーを指定",name:"pb",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}},pl:{defaultValue:null,description:"padding-leftの値。Spacing Tokenのキーを指定",name:"pl",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxs"'},{value:'"xxl"'}]}}}}}catch{}export{i as F};
