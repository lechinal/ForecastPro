"use strict";(self.webpackChunkforecastpro=self.webpackChunkforecastpro||[]).push([[640],{8931:(e,s,t)=>{t.d(s,{F:()=>a});const a={key:"8d4cdf8f8a1e4cb1a3f8e886d69e86c3",base:"https://api.openweathermap.org/data/2.5/"}},5606:(e,s,t)=>{t.d(s,{A:()=>l});t(5043);var a=t(5475);const i="Navigation_links__7LFKj",n="Navigation_navLink__7PcdX",r="Navigation_nav__7WdPp";var c=t(579);const l=function(){return(0,c.jsx)("div",{className:r,children:(0,c.jsxs)("div",{className:i,children:[(0,c.jsx)("div",{className:n,children:(0,c.jsx)(a.k2,{to:"/",children:"Today"})}),(0,c.jsx)("div",{className:n,children:(0,c.jsx)(a.k2,{to:"/fivedays",children:"5 DAYS"})})]})})}},2640:(e,s,t)=>{t.r(s),t.d(s,{default:()=>I});var a=t(5043),i=t(6213);const n={fiveDays:"FiveDays_fiveDays__+BcFv",navigation:"FiveDays_navigation__iJaOR",title:"FiveDays_title__DafaV",forecast:"FiveDays_forecast__NrTrQ",pagination:"FiveDays_pagination__zj0cz",navButton:"FiveDays_navButton__yTmU7",noData:"FiveDays_noData__JVyPU",hourlyForecast:"FiveDays_hourlyForecast__RPDaz",hourlyEntries:"FiveDays_hourlyEntries__HKqcc",hourlyPagination:"FiveDays_hourlyPagination__1LjWU"};var r=t(5606),c=t(8931);const l="ForecastEntry_forecastEntry__A1jL-",o="ForecastEntry_formattedDate__bwm41",d="ForecastEntry_formattedMonth__gK1Zm",h="ForecastEntry_temp__cKMbl",m="ForecastEntry_feelsLike__SPXLF",u="ForecastEntry_feelsLikeTemp__1ceG5",x="ForecastEntry_minMaxtempBox__l-8Iw",_="ForecastEntry_minMax__mEAIo",p="ForecastEntry_tempMinMax__hCVQQ",y="ForecastEntry_span__2xaR4",j="ForecastEntry_line__vrTEO",g="ForecastEntry_moreInfo__S1zZh",v="ForecastEntry_hoursInfo__oH3Gi";var f=t(7781);const N={weatherDetails:"ForecastDetails_weatherDetails__tUdbu",weatherDescription:"ForecastDetails_weatherDescription__d64Zq",details:"ForecastDetails_details__OzPeP",windDetailsButton:"ForecastDetails_windDetailsButton__WzGa9",windDetailsBox:"ForecastDetails_windDetailsBox__zDaOh"},w=e=>["N","NE","E","SE","S","SW","W","NW"][Math.round(e/45)%8];const D=t.p+"static/media/barometer.2d089d7af97a00c54d5c903527049a60.svg";const F=t.p+"static/media/humidity.9ec22921d6c9f17b14631809a0dd6a15.svg";const S=t.p+"static/media/wind.c853b67fe91a88bef749043941fcbf02.svg";var b=t(8636),E=t(579);const k=function(e){let{entry:s}=e;const[t,i]=(0,a.useState)("");return(0,E.jsxs)("div",{className:N.weatherDetails,children:[(0,E.jsx)("div",{className:N.weatherDescription,children:(0,E.jsx)("p",{children:s.weather[0].description})}),s.rain&&s.rain["3h"]&&(0,E.jsxs)("div",{className:N.details,children:[(0,E.jsx)("img",{src:D,alt:"rain"}),(0,E.jsxs)("p",{children:[s.rain["3h"]," mm"]})]}),(0,E.jsxs)("div",{className:N.details,children:[(0,E.jsx)("img",{src:F,alt:"rain"}),(0,E.jsxs)("p",{children:[s.main.humidity,"%"]})]}),(0,E.jsxs)("div",{className:N.details,children:[(0,E.jsx)("img",{src:S,alt:"wind"}),(0,E.jsxs)("p",{children:[s.wind.speed," m/s"]})]}),(0,E.jsxs)("div",{className:N.details,children:[(0,E.jsx)(b.A,{sx:{fill:"white",fillOpacity:.4,width:"20px"}}),(0,E.jsxs)("p",{children:[s.main.pressure," hPa"]})]}),(0,E.jsx)("button",{className:N.windDetailsButton,onClick:()=>{i(!t)},children:t?"less details":"more details"}),t&&(0,E.jsxs)("div",{className:N.windDetailsBox,children:[(0,E.jsxs)("p",{className:N.direction,children:["Wind Direction:"," ",(0,E.jsx)("strong",{children:w(s.wind.deg)})]}),(0,E.jsxs)("p",{className:N.gust,children:["Wind Gust:",(0,E.jsxs)("strong",{children:[" ",s.wind.gust," m/s"]})]}),(0,E.jsxs)("p",{className:N.visibility,children:["Visibility:",(0,E.jsxs)("strong",{children:[" ",s.visibility/1e3," km"]})]})]})]})},M=e=>Math.round(e-273.15),A=e=>{let{entry:s,onSelect:t}=e;const[i,n]=(0,a.useState)(!1),r=new Date(1e3*s.dt),{formattedDate:c,formattedMonth:N}=(0,f.g)(r),w="https://openweathermap.org/img/w/".concat(s.weather[0].icon,".png"),D=M(s.main.temp),F=M(s.main.temp_min),S=M(s.main.temp_max),b=M(s.main.feels_like);return(0,E.jsxs)("div",{className:l,children:[(0,E.jsx)("div",{className:o,dangerouslySetInnerHTML:{__html:c}}),(0,E.jsxs)("p",{className:d,children:[" ",N]}),(0,E.jsx)("img",{src:w,alt:"weather icon",width:"75px",height:"75px"}),(0,E.jsxs)("div",{className:h,children:[" ",D," \xb0C"]}),(0,E.jsxs)("div",{className:m,children:["Feels like: ",(0,E.jsxs)("p",{className:u,children:[b," \xb0C"]})]}),(0,E.jsxs)("div",{className:x,children:[(0,E.jsxs)("div",{className:_,children:[(0,E.jsx)("p",{children:"min"}),(0,E.jsxs)("p",{className:p,children:[F,"\xb0 "]})]}),(0,E.jsx)("div",{className:y,children:(0,E.jsx)("span",{className:j})}),(0,E.jsxs)("div",{className:_,children:[(0,E.jsx)("p",{children:"max"}),(0,E.jsxs)("p",{className:p,children:[S,"\xb0 "]})]})]}),(0,E.jsx)("button",{className:g,onClick:()=>{n(!i)},children:i?"less info":"more info"}),(0,E.jsx)("button",{className:v,onClick:()=>{t(r)},children:"3 hour info"}),i&&(0,E.jsx)(k,{entry:s})]})};var H=t(2497),C=t(8855);const W={hourlyEntry:"HourlyForecast_hourlyEntry__RKLka",detailsWind:"HourlyForecast_detailsWind__OpWAq",temp:"HourlyForecast_temp__vRzsi",details:"HourlyForecast_details__QhSWq",wind:"HourlyForecast_wind__2bLp4",windDetails:"HourlyForecast_windDetails__-B+dt",feels:"HourlyForecast_feels__gJLHg"};const B=function(e){let{entry:s}=e;const[t,i]=(0,a.useState)(!1),n=new Date(1e3*s.dt),{formattedDate:r}=(0,f.g)(n),c=n.getHours(),l=Math.round(s.main.temp-273.15),o=M(s.main.feels_like),d=s.weather[0].description,h="https://openweathermap.org/img/w/".concat(s.weather[0].icon,".png");return console.log(s),(0,E.jsxs)("div",{className:W.hourlyEntry,children:[(0,E.jsx)("div",{className:W.date,children:(0,E.jsx)("p",{dangerouslySetInnerHTML:{__html:"".concat(r,"  ")}})}),(0,E.jsx)("div",{className:W.hour,children:(0,E.jsx)("p",{children:"".concat(c,":00")})}),(0,E.jsx)("div",{className:W.temp,children:(0,E.jsx)("p",{children:"".concat(l," \xb0C")})}),(0,E.jsx)("div",{className:W.description,children:(0,E.jsx)("p",{children:d})}),(0,E.jsx)("img",{src:h,alt:"weather icon",width:"35px",height:"35px"}),(0,E.jsxs)("div",{className:W.feels,children:["Feels like:",(0,E.jsxs)("p",{children:[o," \xb0C"]})]}),(0,E.jsxs)("div",{className:W.details,children:[(0,E.jsx)(b.A,{sx:{fill:"white",fillOpacity:.4,width:"20px"}}),(0,E.jsxs)("p",{children:[s.main.pressure," hPa"]})]}),(0,E.jsxs)("div",{className:W.details,children:[(0,E.jsx)("img",{src:F,alt:"rain"}),(0,E.jsxs)("p",{children:[s.main.humidity,"%"]})]}),s.rain&&s.rain["3h"]&&(0,E.jsxs)("div",{className:W.details,children:[(0,E.jsx)("img",{src:D,alt:"rain"}),(0,E.jsxs)("p",{children:[s.rain["3h"]," mm"]})]}),(0,E.jsxs)("div",{className:W.detailsWind,onClick:e=>{e.stopPropagation(),i(!t)},children:[(0,E.jsx)("img",{src:S,alt:"wind"}),(0,E.jsxs)("p",{children:[s.wind.speed," m/s"]})]}),t&&(0,E.jsxs)("div",{className:W.wind,children:[(0,E.jsxs)("div",{className:W.windDetails,children:[(0,E.jsx)("p",{children:"Wind Dir:"}),(0,E.jsx)("strong",{children:w(s.wind.deg)})]}),(0,E.jsxs)("div",{className:W.windDetails,children:[(0,E.jsx)("p",{children:"Wind Gust:"}),(0,E.jsxs)("strong",{children:[s.wind.gust," m/s"]})]}),(0,E.jsxs)("div",{className:W.windDetails,children:[(0,E.jsx)("p",{children:"Visibility:"}),(0,E.jsxs)("strong",{children:[s.visibility/1e3," km"]})]})]})]})};const I=function(e){let{city:s}=e;const[t,l]=(0,a.useState)([]),[o,d]=(0,a.useState)({}),[h,m]=(0,a.useState)(""),[u,x]=(0,a.useState)(0),[_,p]=(0,a.useState)(null),[y,j]=(0,a.useState)([]),[g,v]=(0,a.useState)(!1),[f,N]=(0,a.useState)(3),[w,D]=(0,a.useState)(8),[F,S]=(0,a.useState)(0);(0,a.useEffect)((()=>{if(!s)return;(async()=>{try{const e=localStorage.getItem("city"),t=localStorage.getItem("cityDetails"),a=localStorage.getItem("forecast"),n=localStorage.getItem("hourlyForecast");if(e&&t&&a&&n&&e===s)d(JSON.parse(t)),l(JSON.parse(a)),j(JSON.parse(n)),v(!!n),m("");else{const e=await i.A.get("https://api.openweathermap.org/geo/1.0/direct?q=".concat(s,"&limit=1&appid=").concat(c.F.key));if(0===e.data.length)return void m("City not found!");const{lat:t,lon:a,name:n,country:r}=e.data[0];d({city:n,country:r});const o=await i.A.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(t,"&lon=").concat(a,"&appid=").concat(c.F.key)),h=b(o.data.list);l(h),j(o.data.list),m(""),localStorage.setItem("city",s),localStorage.setItem("cityDetails",JSON.stringify({city:n,country:r})),localStorage.setItem("forecast",JSON.stringify(h)),localStorage.setItem("hourlyForecast",JSON.stringify(o.data.list)),v(!0)}}catch(h){m(h.message)}})()}),[s]);const b=e=>{const s={},t=[];return e.forEach((e=>{const a=new Date(1e3*e.dt),i=new Date;if(i.setHours(0,0,0,0),a>=i){const i="".concat(a.getFullYear(),"-").concat(a.getMonth(),"-").concat(a.getDate());s[i]||(s[i]=!0,t.push(e))}})),t.slice(0,6)},k=e=>{p(e),v(!0),S(0)},M=()=>{if(!_)return[];return y.filter((e=>{const s=new Date(1e3*e.dt);return s.getFullYear()===_.getFullYear()&&s.getMonth()===_.getMonth()&&s.getDate()===_.getDate()}))};return(0,a.useEffect)((()=>{const e=()=>{const e=window.innerWidth;e<=480?(N(1),D(1)):e<=768?(N(2),D(3)):e<=1024?(N(3),D(4)):e<=1200?(N(4),D(6)):(N(5),D(7))};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,E.jsxs)("div",{className:n.fiveDays,children:[(0,E.jsx)("div",{className:n.navigation,children:(0,E.jsx)(r.A,{})}),h&&(0,E.jsx)("div",{className:n.error,children:h}),o.city&&o.country&&(0,E.jsx)("div",{className:n.title,children:(0,E.jsx)("h2",{children:"".concat(o.city,", ").concat(o.country)})}),t.length>0?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("div",{className:n.forecast,children:t.slice(u,u+f).map((e=>(0,E.jsx)(A,{entry:e,onSelect:k},e.dt)))}),(0,E.jsxs)("div",{className:n.pagination,children:[(0,E.jsx)("button",{onClick:()=>{u-1>=0&&x(u-1)},disabled:0===u,className:n.navButton,children:(0,E.jsx)(C.A,{})}),(0,E.jsx)("button",{onClick:()=>{u+3<t.length&&x(u+1)},disabled:u+3>=t.length,className:n.navButton,children:(0,E.jsx)(H.A,{})})]}),g&&_&&(0,E.jsxs)("div",{className:n.hourlyForecast,children:[(0,E.jsx)("h3",{children:"Hourly Forecast"}),(0,E.jsx)("div",{className:n.hourlyEntries,children:M().slice(F*w,(F+1)*w).map((e=>(0,E.jsx)(B,{entry:e},e.dt)))}),(0,E.jsxs)("div",{className:n.hourlyPagination,children:[(0,E.jsx)("button",{onClick:()=>{F-1>=0&&S(F-1)},disabled:0===F,className:n.navButton,children:(0,E.jsx)(C.A,{})}),(0,E.jsx)("button",{onClick:()=>{F+1<Math.ceil(M().length/w)&&S(F+1)},disabled:(F+1)*w>=M().length,className:n.navButton,children:(0,E.jsx)(H.A,{})})]})]})]}):(0,E.jsx)("p",{className:n.noData,children:"No forecast data available. Please enter a city or select a favorite city!"})]})}},7781:(e,s,t)=>{t.d(s,{c:()=>i,g:()=>a});const a=e=>{let s=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][(e.getDay()+6)%7].substring(0,3),t=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],i=e.getFullYear();return{formattedDate:"".concat(t,"<sup>").concat((e=>{if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(t),"</sup> &nbsp;&nbsp;").concat(s),formattedMonth:a,formattedTime:"".concat(e.getHours(),":").concat(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),":").concat(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds()),formattedYear:i}},i=e=>{if(!e||"string"!==typeof e)return"";const[s,t]=e.split(" ");let[a,i,n]=s.split(":");return"12"===a&&(a="00"),"PM"===t&&(a=parseInt(a,10)+12),"".concat(a,":").concat(i,":").concat(n)}},8636:(e,s,t)=>{var a=t(4994);s.A=void 0;var i=a(t(39)),n=t(579);s.A=(0,i.default)((0,n.jsx)("path",{d:"M8 19h3v3h2v-3h3l-4-4zm8-15h-3V1h-2v3H8l4 4zM4 9v2h16V9zm0 3h16v2H4z"}),"Compress")}}]);
//# sourceMappingURL=640.69d735b5.chunk.js.map