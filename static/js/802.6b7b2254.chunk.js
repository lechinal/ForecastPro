"use strict";(self.webpackChunkforecastpro=self.webpackChunkforecastpro||[]).push([[802],{8931:(e,t,a)=>{a.d(t,{F:()=>s});const s={key:"8d4cdf8f8a1e4cb1a3f8e886d69e86c3",base:"https://api.openweathermap.org/data/2.5/"}},5606:(e,t,a)=>{a.d(t,{A:()=>c});a(5043);var s=a(5475);const i="Navigation_links__7LFKj",n="Navigation_navLink__7PcdX",r="Navigation_nav__7WdPp";var o=a(579);const c=function(){return(0,o.jsx)("div",{className:r,children:(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("div",{className:n,children:(0,o.jsx)(s.k2,{to:"/",children:"Today"})}),(0,o.jsx)("div",{className:n,children:(0,o.jsx)(s.k2,{to:"/fivedays",children:"5 DAYS"})})]})})}},4802:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var s=a(5043),i=a(6213);const n="Today_today__DUVqK",r="Today_cityDetails__eGfXj",o="Today_navigation__2ZzQ7",c="Today_error__3UGT0",d="Today_noData__Ia3kG",l="Today_quoteBox__corCR",h="Today_timeAndDate__BbYdG",u="CityDetails_cityDetailsContainer__O-G2Y",m="CityDetails_details__I8V1c",_="CityDetails_location__FRa86",x="CityDetails_temperature__AXWLa",v="CityDetails_dailyTemp__rYi32",y="CityDetails_minmax__BDHVH",j="CityDetails_min__ZNopU",p="CityDetails_max__DuVI6",f="CityDetails_title__BYQyU",g="CityDetails_value__KoMaC",w="CityDetails_span__Jm5ZS",N="CityDetails_line__WVy6t";var D=a(579);const b=function(e){let{weather:t,tempMin:a,tempMax:s}=e;return(0,D.jsx)("div",{className:u,children:t&&0!==Object.keys(t).length?(0,D.jsxs)("div",{className:m,children:[(0,D.jsxs)("div",{className:_,children:[(0,D.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(t.weather[0].icon,".png"),alt:"icon",width:"75px",height:"75px"}),(0,D.jsxs)("h1",{children:[t.name,", ",t.sys&&t.sys.country]})]}),(0,D.jsxs)("div",{className:x,children:[(0,D.jsxs)("p",{className:v,children:[t.main&&Math.floor(t.main.temp-273.15)," \xb0C"]}),(0,D.jsxs)("div",{className:y,children:[(0,D.jsxs)("div",{className:j,children:[(0,D.jsx)("p",{className:f,children:"min"}),(0,D.jsx)("p",{className:g,children:a})]}),(0,D.jsx)("div",{className:w,children:(0,D.jsx)("span",{className:N})}),(0,D.jsxs)("div",{className:p,children:[(0,D.jsx)("p",{className:f,children:"max"}),(0,D.jsx)("p",{className:g,children:s})]})]})]})]}):null})},S={timeAndDateContainer:"TimeAndDate_timeAndDateContainer__xzwPZ",details:"TimeAndDate_details__I9ObH",date:"TimeAndDate_date__0vY0m",riseSet:"TimeAndDate_riseSet__oJIK0",monthTimeContainer:"TimeAndDate_monthTimeContainer__8OZ4g",riseSetContainer:"TimeAndDate_riseSetContainer__HhB7K",box:"TimeAndDate_box__1s32c",widthBox:"TimeAndDate_widthBox__VaLSW",month:"TimeAndDate_month__1k8tl",time:"TimeAndDate_time__npKj5"};var T=a(4597);const C=a.p+"static/media/sunrise.583650ef7ff72405188184509c1e4685.svg";const k=a.p+"static/media/sunset.79e9b12db157e92c4cd0398c34420ab6.svg";var A=a(7781);const M=function(e){let{sunrise:t,sunset:a,weather:i}=e;const[n,r]=(0,s.useState)(new Date),{formattedDate:o,formattedTime:c,formattedMonth:d,formattedYear:l}=(0,A.g)(n);(0,s.useEffect)((()=>{const e=setInterval((()=>{r(new Date)}),1e3);return()=>clearInterval(e)}),[]);const h=(0,A.c)(t),u=(0,A.c)(a);return i&&t&&a?(0,D.jsx)("div",{className:S.timeAndDateContainer,children:(0,D.jsxs)("div",{className:S.details,children:[(0,D.jsx)("div",{className:S.date,dangerouslySetInnerHTML:{__html:o}}),(0,D.jsxs)("div",{className:S.widthBox,children:[(0,D.jsxs)("div",{className:S.monthTimeContainer,children:[(0,D.jsxs)("div",{className:S.box,children:[(0,D.jsx)(T.WkS,{size:20,color:"#767d85"}),(0,D.jsxs)("p",{className:S.month,children:[d," ",l]})]}),(0,D.jsx)("div",{className:S.span,children:(0,D.jsx)("span",{className:S.line})}),(0,D.jsxs)("div",{className:S.box,children:[(0,D.jsx)(T.Mu3,{size:20,color:"#FF6B09"}),(0,D.jsx)("p",{className:S.time,children:c})]})]}),(0,D.jsxs)("div",{className:S.riseSetContainer,children:[(0,D.jsxs)("div",{className:S.box,children:[(0,D.jsx)("img",{src:C,alt:t,className:S.riseSet}),(0,D.jsx)("p",{children:h})]}),(0,D.jsx)("div",{className:S.span,children:(0,D.jsx)("span",{className:S.line})}),(0,D.jsxs)("div",{className:S.box,children:[(0,D.jsx)("img",{src:k,alt:a,className:S.riseSet}),(0,D.jsx)("p",{children:u})]})]})]})]})}):null};var q=a(5606),I=a(8931);const F="Quote_quoteContainer__H5Lpl",W="Quote_quoteOverlay__EI7ma",Q="Quote_iconQuote__m29nt",J="Quote_quote__SiZ2P",O="Quote_textQuote__b8Stx",B="Quote_authorQuote__vj-PN",L=JSON.parse('[{"id":1,"quote":"I love the rain. It\'s my favorite weather.","author":"Kristen Wiig"},{"id":2,"quote":"Conversation about the weather is the last refuge of the unimaginative.","author":"Oscar Wilde"},{"id":3,"quote":"My style varies on my mood or the weather of the day.","author":"Jennie"},{"id":4,"quote":"Weather forecast for tonight: dark.","author":"George Carlin"},{"id":5,"quote":"A bank is a place where they lend you an umbrella in fair weather and ask for it back when it begins to rain.","author":"Robert Frost"},{"id":6,"quote":"If you want to see the sunshine, you have to weather the storm.","author":"Frank Lane"},{"id":7,"quote":"What dreadful hot weather we have! It keeps me in a continual state of inelegance.","author":"Jane Austen"},{"id":8,"quote":"Sunshine is delicious, rain is refreshing, wind brace up, snow is exhilarating; there is no such thing as bad weather, only different kinds of good weather.","author":"Ruskin"},{"id":9,"quote":"One can\'t predict the weather more than a few days in advance.","author":"Stephen Hawking"},{"id":10,"quote":"A change in the weather is sufficient to recreate the world and ourselves.","author":"Marcel Proust"},{"id":11,"quote":"What good is the warmth of summer, without the cold of winter to give it sweetness.","author":"John Steinbeck"},{"id":12,"quote":"Climate is what we expect, weather is what we get.","author":"Mark Twain"},{"id":13,"quote":"Shut the door not that it lets in the cold, but that it lets out the coziness.","author":"Mark Twain"},{"id":14,"quote":"I like the cold weather. it means you get work done.","author":"Noam Chomsky"},{"id":15,"quote":"Who cares about the clouds when we\'re together? Just sing a song and bring the sunny weather.","author":"Dale Evan"}]');var P=a(463);const Y=function(){const[e,t]=(0,s.useState)(0);(0,s.useEffect)((()=>{const e=setInterval((()=>{t((e=>(e+1)%L.length))}),1e4);return()=>clearInterval(e)}),[]);const a=L[e];return(0,D.jsxs)("div",{className:F,children:[(0,D.jsx)("div",{className:W}),(0,D.jsx)("div",{className:Q,children:(0,D.jsx)(P.A,{style:{width:"20px"}})}),(0,D.jsxs)("div",{className:J,children:[(0,D.jsx)("div",{className:O,children:a.quote}),(0,D.jsx)("div",{className:B,children:a.author})]})]})};const H=function(e){let{city:t}=e;const[a,u]=(0,s.useState)({}),[m,_]=(0,s.useState)(""),[x,v]=(0,s.useState)(""),[y,j]=(0,s.useState)(""),[p,f]=(0,s.useState)(""),[g,w]=(0,s.useState)("");return(0,s.useEffect)((()=>{t&&(async()=>{try{const e=await i.A.get("".concat(I.F.base,"weather?q=").concat(t,"&appid=").concat(I.F.key));console.log(e.data),u(e.data),w("")}catch(g){w("There was an error fetching the weather data! Please try again.")}})()}),[t]),(0,s.useEffect)((()=>{if(0!==Object.keys(a).length){_(Math.floor(a.main.temp_max-273.15)+" \u2103"),v(Math.floor(a.main.temp_min-273.15)+" \u2103");const e=new Date(1e3*a.sys.sunrise).toLocaleTimeString(),t=new Date(1e3*a.sys.sunset).toLocaleTimeString();j(e),f(t)}}),[a]),(0,D.jsxs)("div",{className:n,children:[g&&(0,D.jsx)("div",{className:c,children:g}),(0,D.jsx)("div",{className:r,children:(0,D.jsx)(b,{weather:a,tempMin:x,tempMax:m})}),t?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("div",{className:o,children:(0,D.jsx)(q.A,{})}),(0,D.jsx)("div",{className:h,children:(0,D.jsx)(M,{sunrise:y,sunset:p,weather:a})}),(0,D.jsx)("div",{className:l,children:(0,D.jsx)(Y,{})})]}):(0,D.jsx)("p",{className:d,children:"No weather data available. Please enter a city or select a favorite city!"})]})}},7781:(e,t,a)=>{a.d(t,{c:()=>i,g:()=>s});const s=e=>{let t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][(e.getDay()+6)%7].substring(0,3),a=e.getDate(),s=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],i=e.getFullYear();return{formattedDate:"".concat(a,"<sup>").concat((e=>{if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(a),"</sup> &nbsp;&nbsp;").concat(t),formattedMonth:s,formattedTime:"".concat(e.getHours(),":").concat(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),":").concat(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()),formattedYear:i}},i=e=>{if(!e||"string"!==typeof e)return"";const[t,a]=e.split(" ");let[s,i,n]=t.split(":");return"12"===s&&(s="00"),"PM"===a&&(s=parseInt(s,10)+12),"".concat(s,":").concat(i,":").concat(n)}}}]);
//# sourceMappingURL=802.6b7b2254.chunk.js.map