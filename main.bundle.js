var Main;(()=>{"use strict";var e,t,n={91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},433:(e,t,n)=>{e.exports=n.p+"9bfc0842faff5891071b.png"},849:(e,t,n)=>{e.exports=n.p+"2215d2cc89dadf1969c4.png"},769:(e,t,n)=>{e.exports=n.p+"dde4159f46067b814c26.png"},731:(e,t,n)=>{e.exports=n.p+"be123c21e3a90d652505.png"},634:(e,t,n)=>{e.exports=n.p+"f8b89c3483dc8b6d6c29.png"},16:(e,t,n)=>{e.exports=n.p+"6a8f6ad2521258a9bf57.png"},505:(e,t,n)=>{e.exports=n.p+"6ebfa749b1b980b9c485.png"}},s={};function r(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return n[e](a,a.exports,r),a.exports}r.m=n,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>({228:"zxcvbnCommonPackage",508:"zxcvbnNlBePackage"}[e]+".chunk.js"),r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="Main:",r.l=(n,s,a,o)=>{if(e[n])e[n].push(s);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var h=l[u];if(h.getAttribute("src")==n||h.getAttribute("data-webpack")==t+a){i=h;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+a),i.src=n),e[n]=[s];var d=(t,s)=>{i.onerror=i.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(s))),t)return t(s)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=document.baseURI||self.location.href;var e={179:0};r.f.j=(t,n)=>{var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var a=new Promise(((n,r)=>s=e[t]=[n,r]));n.push(s[2]=a);var o=r.p+r.u(t),i=new Error;r.l(o,(n=>{if(r.o(e,t)&&(0!==(s=e[t])&&(e[t]=void 0),s)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,s[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{var s,a,[o,i,c]=n,l=0;if(o.some((t=>0!==e[t]))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);c&&c(r)}for(t&&t(n);l<o.length;l++)a=o[l],r.o(e,a)&&e[a]&&e[a][0](),e[o[l]]=0},n=self.webpackChunkMain=self.webpackChunkMain||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a={};(()=>{r.r(a),r.d(a,{sendMessage:()=>Ae});var e=function(){return e=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},e.apply(this,arguments)};function t(e,t,n,s){return new(n||(n=Promise))((function(r,a){function o(e){try{c(s.next(e))}catch(e){a(e)}}function i(e){try{c(s.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,i)}c((s=s.apply(e,t||[])).next())}))}function n(e,t){var n,s,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,s&&(r=2&a[0]?s.return:a[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,a[1])).done)return r;switch(s=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,s=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((r=(r=o.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],s=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}Object.create,Object.create;const s=(e,t)=>e.push.apply(e,t),o=(e,t)=>e.split("").map((e=>t[e]||e)).join(""),i=e=>e.sort(((e,t)=>e.i-t.i||e.j-t.j)),c=e=>{const t={};let n=1;return e.forEach((e=>{t[e]=n,n+=1})),t},l={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]},u=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,h=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,d=/^[A-Z\xbf-\xdf]+$/,p=/^[^a-z\xdf-\xff]+$/,g=/^[a-z\xdf-\xff]+$/,f=/^[^A-Z\xbf-\xdf]+$/,m=/[a-z\xdf-\xff]/,b=/[A-Z\xbf-\xdf]/,k=/[^A-Za-z\xbf-\xdf]/gi,y=/^\d+$/,v=(new Date).getFullYear(),w={recentYear:/19\d\d|200\d|201\d|202\d/g};class M{match({password:e}){const t=[...this.getMatchesWithoutSeparator(e),...this.getMatchesWithSeparator(e)],n=this.filterNoise(t);return i(n)}getMatchesWithSeparator(e){const t=[],n=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let s=0;s<=Math.abs(e.length-6);s+=1)for(let r=s+5;r<=s+9&&!(r>=e.length);r+=1){const a=e.slice(s,+r+1||9e9),o=n.exec(a);if(null!=o){const e=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);null!=e&&t.push({pattern:"date",token:a,i:s,j:r,separator:o[2],year:e.year,month:e.month,day:e.day})}}return t}getMatchesWithoutSeparator(e){const t=[],n=/^\d{4,8}$/,s=e=>Math.abs(e.year-v);for(let r=0;r<=Math.abs(e.length-4);r+=1)for(let a=r+3;a<=r+7&&!(a>=e.length);a+=1){const o=e.slice(r,+a+1||9e9);if(n.exec(o)){const e=[],n=o.length;if(l[n].forEach((([t,n])=>{const s=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,t),10),parseInt(o.slice(t,n),10),parseInt(o.slice(n),10)]);null!=s&&e.push(s)})),e.length>0){let n=e[0],i=s(e[0]);e.slice(1).forEach((e=>{const t=s(e);t<i&&(n=e,i=t)})),t.push({pattern:"date",token:o,i:r,j:a,separator:"",year:n.year,month:n.month,day:n.day})}}}return t}filterNoise(e){return e.filter((t=>{let n=!1;const s=e.length;for(let r=0;r<s;r+=1){const s=e[r];if(t!==s&&s.i<=t.i&&s.j>=t.j){n=!0;break}}return!n}))}mapIntegersToDayMonthYear(e){if(e[1]>31||e[1]<=0)return null;let t=0,n=0,s=0;for(let r=0,a=e.length;r<a;r+=1){const a=e[r];if(a>99&&a<1e3||a>2050)return null;a>31&&(n+=1),a>12&&(t+=1),a<=0&&(s+=1)}return n>=2||3===t||s>=2?null:this.getDayMonth(e)}getDayMonth(e){const t=[[e[2],e.slice(0,2)],[e[0],e.slice(1,3)]],n=t.length;for(let e=0;e<n;e+=1){const[n,s]=t[e];if(1e3<=n&&n<=2050){const e=this.mapIntegersToDayMonth(s);return null!=e?{year:n,month:e.month,day:e.day}:null}}for(let e=0;e<n;e+=1){const[n,s]=t[e],r=this.mapIntegersToDayMonth(s);if(null!=r)return{year:this.twoToFourDigitYear(n),month:r.month,day:r.day}}return null}mapIntegersToDayMonth(e){const t=[e,e.slice().reverse()];for(let e=0;e<t.length;e+=1){const n=t[e],s=n[0],r=n[1];if(s>=1&&s<=31&&r>=1&&r<=12)return{day:s,month:r}}return null}twoToFourDigitYear(e){return e>99?e:e>50?e+1900:e+2e3}}var x={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},j={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}},T=new class{constructor(){this.matchers={},this.l33tTable=x,this.dictionary={userInputs:[]},this.rankedDictionaries={},this.translations=j,this.graphs={},this.availableGraphs=[],this.setRankedDictionaries()}setOptions(e={}){e.l33tTable&&(this.l33tTable=e.l33tTable),e.dictionary&&(this.dictionary=e.dictionary,this.setRankedDictionaries()),e.translations&&this.setTranslations(e.translations),e.graphs&&(this.graphs=e.graphs)}setTranslations(e){if(!this.checkCustomTranslations(e))throw new Error("Invalid translations object fallback to keys");this.translations=e}checkCustomTranslations(e){let t=!0;return Object.keys(j).forEach((n=>{if(n in e){const s=n;Object.keys(j[s]).forEach((n=>{n in e[s]||(t=!1)}))}else t=!1})),t}setRankedDictionaries(){const e={};Object.keys(this.dictionary).forEach((t=>{e[t]=this.getRankedDictionary(t)})),this.rankedDictionaries=e}getRankedDictionary(e){const t=this.dictionary[e];if("userInputs"===e){const e=[];return t.forEach((t=>{const n=typeof t;"string"!==n&&"number"!==n&&"boolean"!==n||e.push(t.toString().toLowerCase())})),c(e)}return c(t)}extendUserInputsDictionary(e){this.dictionary.userInputs?this.dictionary.userInputs=[...this.dictionary.userInputs,...e]:this.dictionary.userInputs=e,this.rankedDictionaries.userInputs=this.getRankedDictionary("userInputs")}addMatcher(e,t){this.matchers[e]?console.info("Matcher already exists"):this.matchers[e]=t}};class E{constructor(e){this.defaultMatch=e}match({password:e}){const t=e.split("").reverse().join("");return this.defaultMatch({password:t}).map((t=>({...t,token:t.token.split("").reverse().join(""),reversed:!0,i:e.length-1-t.j,j:e.length-1-t.i})))}}class I{constructor(e){this.defaultMatch=e}match({password:e}){const t=[],n=this.enumerateL33tSubs(this.relevantL33tSubtable(e,T.l33tTable));for(let r=0;r<n.length;r+=1){const a=n[r];if(s=a,0===Object.keys(s).length)break;const i=o(e,a);this.defaultMatch({password:i}).forEach((n=>{const s=e.slice(n.i,+n.j+1||9e9);if(s.toLowerCase()!==n.matchedWord){const e={};Object.keys(a).forEach((t=>{const n=a[t];-1!==s.indexOf(t)&&(e[t]=n)}));const r=Object.keys(e).map((t=>`${t} -> ${e[t]}`)).join(", ");t.push({...n,l33t:!0,token:s,sub:e,subDisplay:r})}}))}var s;return t.filter((e=>e.token.length>1))}relevantL33tSubtable(e,t){const n={},s={};return e.split("").forEach((e=>{n[e]=!0})),Object.keys(t).forEach((e=>{const r=t[e].filter((e=>e in n));r.length>0&&(s[e]=r)})),s}enumerateL33tSubs(e){const t=Object.keys(e);return this.getSubs(t,[[]],e).map((e=>{const t={};return e.forEach((([e,n])=>{t[e]=n})),t}))}getSubs(e,t,n){if(!e.length)return t;const s=e[0],r=e.slice(1),a=[];n[s].forEach((e=>{t.forEach((t=>{let n=-1;for(let s=0;s<t.length;s+=1)if(t[s][0]===e){n=s;break}if(-1===n){const n=t.concat([[e,s]]);a.push(n)}else{const r=t.slice(0);r.splice(n,1),r.push([e,s]),a.push(t),a.push(r)}}))}));const o=this.dedup(a);return r.length?this.getSubs(r,o,n):o}dedup(e){const t=[],n={};return e.forEach((e=>{const s=e.map(((e,t)=>[e,t]));s.sort();const r=s.map((([e,t])=>`${e},${t}`)).join("-");r in n||(n[r]=!0,t.push(e))})),t}}class S{constructor(){this.l33t=new I(this.defaultMatch),this.reverse=new E(this.defaultMatch)}match({password:e}){const t=[...this.defaultMatch({password:e}),...this.reverse.match({password:e}),...this.l33t.match({password:e})];return i(t)}defaultMatch({password:e}){const t=[],n=e.length,s=e.toLowerCase();return Object.keys(T.rankedDictionaries).forEach((r=>{const a=T.rankedDictionaries[r];for(let o=0;o<n;o+=1)for(let i=o;i<n;i+=1)if(s.slice(o,+i+1||9e9)in a){const n=s.slice(o,+i+1||9e9),c=a[n];t.push({pattern:"dictionary",i:o,j:i,token:e.slice(o,+i+1||9e9),matchedWord:n,rank:c,dictionaryName:r,reversed:!1,l33t:!1})}})),t}}class C{match({password:e,regexes:t=w}){const n=[];return Object.keys(t).forEach((s=>{const r=t[s];r.lastIndex=0;const a=r.exec(e);if(a){const e=a[0];n.push({pattern:"regex",token:e,i:a.index,j:a.index+a[0].length-1,regexName:s,regexMatch:a})}})),i(n)}}var L={nCk(e,t){let n=e;if(t>n)return 0;if(0===t)return 1;let s=1;for(let e=1;e<=t;e+=1)s*=n,s/=e,n-=1;return s},log10:e=>Math.log(e)/Math.log(10),log2:e=>Math.log(e)/Math.log(2),factorial(e){let t=1;for(let n=2;n<=e;n+=1)t*=n;return t}};const O={bruteforce:({token:e})=>{let t,n=10**e.length;return n===Number.POSITIVE_INFINITY&&(n=Number.MAX_VALUE),t=1===e.length?11:51,Math.max(n,t)},date:({year:e,separator:t})=>{let n=365*Math.max(Math.abs(e-v),20);return t&&(n*=4),n},dictionary:({rank:e,reversed:t,l33t:n,sub:s,token:r})=>{const a=e,o=(e=>{const t=e.replace(k,"");if(t.match(f)||t.toLowerCase()===t)return 1;const n=[u,h,p],s=n.length;for(let e=0;e<s;e+=1){const s=n[e];if(t.match(s))return 2}return(e=>{const t=e.split(""),n=t.filter((e=>e.match(m))).length,s=t.filter((e=>e.match(b))).length;let r=0;const a=Math.min(n,s);for(let e=1;e<=a;e+=1)r+=L.nCk(n+s,e);return r})(t)})(r),i=(({l33t:e,sub:t,token:n})=>{if(!e)return 1;let s=1;const r=t;return Object.keys(r).forEach((e=>{const{subbedCount:t,unsubbedCount:a}=(({subs:e,subbed:t,token:n})=>{const s=e[t],r=n.toLowerCase().split("");return{subbedCount:r.filter((e=>e===t)).length,unsubbedCount:r.filter((e=>e===s)).length}})({subs:r,subbed:e,token:n});if(0===t||0===a)s*=2;else{const e=Math.min(a,t);let n=0;for(let s=1;s<=e;s+=1)n+=L.nCk(a+t,s);s*=n}})),s})({l33t:n,sub:s,token:r});return{baseGuesses:a,uppercaseVariations:o,l33tVariations:i,calculation:a*o*i*(t?2:1)}},regex:({regexName:e,regexMatch:t,token:n})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};return e in s?s[e]**n.length:"recentYear"===e?Math.max(Math.abs(parseInt(t[0],10)-v),20):0},repeat:({baseGuesses:e,repeatCount:t})=>e*t,sequence:({token:e,ascending:t})=>{const n=e.charAt(0);let s=0;return s=["a","A","z","Z","0","1","9"].includes(n)?4:n.match(/\d/)?10:26,t||(s*=2),s*e.length},spatial:({graph:e,token:t,shiftedCount:n,turns:s})=>{let r=(({token:e,graph:t,turns:n})=>{const s=Object.keys(T.graphs[t]).length,r=(e=>{let t=0;return Object.keys(e).forEach((n=>{const s=e[n];t+=s.filter((e=>!!e)).length})),t/=Object.entries(e).length,t})(T.graphs[t]);let a=0;const o=e.length;for(let e=2;e<=o;e+=1){const t=Math.min(n,e-1);for(let n=1;n<=t;n+=1)a+=L.nCk(e-1,n-1)*s*r**n}return a})({token:t,graph:e,turns:s});if(n){const e=t.length-n;if(0===n||0===e)r*=2;else{let t=0;for(let s=1;s<=Math.min(n,e);s+=1)t+=L.nCk(n+e,s);r*=t}}return Math.round(r)}};const A={password:"",optimal:{},excludeAdditive:!1,fillArray(e,t){const n=[];for(let s=0;s<e;s+=1){let e=[];"object"===t&&(e={}),n.push(e)}return n},makeBruteforceMatch(e,t){return{pattern:"bruteforce",token:this.password.slice(e,+t+1||9e9),i:e,j:t}},update(e,t){const n=e.j,s=((e,t)=>{const n={};if("guesses"in e&&null!=e.guesses)return e;const s=((e,t)=>{let n=1;return e.token.length<t.length&&(n=1===e.token.length?10:50),n})(e,t),r=((e,t)=>O[e]?O[e](t):T.matchers[e]&&"scoring"in T.matchers[e]?T.matchers[e].scoring(t):0)(e.pattern,e);let a=0;"number"==typeof r?a=r:"dictionary"===e.pattern&&(a=r.calculation,n.baseGuesses=r.baseGuesses,n.uppercaseVariations=r.uppercaseVariations,n.l33tVariations=r.l33tVariations);const o=Math.max(a,s);return{...e,...n,guesses:o,guessesLog10:L.log10(o)}})(e,this.password);let r=s.guesses;t>1&&(r*=this.optimal.pi[s.i-1][t-1]);let a=L.factorial(t)*r;this.excludeAdditive||(a+=1e4**(t-1));let o=!1;Object.keys(this.optimal.g[n]).forEach((e=>{const s=this.optimal.g[n][e];parseInt(e,10)<=t&&s<=a&&(o=!0)})),o||(this.optimal.g[n][t]=a,this.optimal.m[n][t]=s,this.optimal.pi[n][t]=r)},bruteforceUpdate(e){let t=this.makeBruteforceMatch(0,e);this.update(t,1);for(let n=1;n<=e;n+=1){t=this.makeBruteforceMatch(n,e);const s=this.optimal.m[n-1];Object.keys(s).forEach((e=>{"bruteforce"!==s[e].pattern&&this.update(t,parseInt(e,10)+1)}))}},unwind(e){const t=[];let n=e-1,s=0,r=Infinity;const a=this.optimal.g[n];for(a&&Object.keys(a).forEach((e=>{const t=a[e];t<r&&(s=parseInt(e,10),r=t)}));n>=0;){const e=this.optimal.m[n][s];t.unshift(e),n=e.i-1,s-=1}return t}};var D={mostGuessableMatchSequence(e,t,n=!1){A.password=e,A.excludeAdditive=n;const s=e.length;let r=A.fillArray(s,"array");t.forEach((e=>{r[e.j].push(e)})),r=r.map((e=>e.sort(((e,t)=>e.i-t.i)))),A.optimal={m:A.fillArray(s,"object"),pi:A.fillArray(s,"object"),g:A.fillArray(s,"object")};for(let e=0;e<s;e+=1)r[e].forEach((e=>{e.i>0?Object.keys(A.optimal.m[e.i-1]).forEach((t=>{A.update(e,parseInt(t,10)+1)})):A.update(e,1)})),A.bruteforceUpdate(e);const a=A.unwind(s),o=a.length,i=this.getGuesses(e,o);return{password:e,guesses:i,guessesLog10:L.log10(i),sequence:a}},getGuesses(e,t){const n=e.length;let s=0;return s=0===e.length?1:A.optimal.g[n-1][t],s}};class N{match({password:e,omniMatch:t}){const n=[];let s=0;for(;s<e.length;){const r=this.getGreedyMatch(e,s),a=this.getLazyMatch(e,s);if(null==r)break;const{match:o,baseToken:i}=this.setMatchToken(r,a);if(o){const e=o.index+o[0].length-1,r=this.getBaseGuesses(i,t);n.push(this.normalizeMatch(i,e,o,r)),s=e+1}}return n.some((e=>e instanceof Promise))?Promise.all(n):n}normalizeMatch(e,t,n,s){const r={pattern:"repeat",i:n.index,j:t,token:n[0],baseToken:e,baseGuesses:0,repeatCount:n[0].length/e.length};return s instanceof Promise?s.then((e=>({...r,baseGuesses:e}))):{...r,baseGuesses:s}}getGreedyMatch(e,t){const n=/(.+)\1+/g;return n.lastIndex=t,n.exec(e)}getLazyMatch(e,t){const n=/(.+?)\1+/g;return n.lastIndex=t,n.exec(e)}setMatchToken(e,t){const n=/^(.+?)\1+$/;let s,r="";if(t&&e[0].length>t[0].length){s=e;const t=n.exec(s[0]);t&&(r=t[1])}else s=t,s&&(r=s[1]);return{match:s,baseToken:r}}getBaseGuesses(e,t){const n=t.match(e);return n instanceof Promise?n.then((t=>D.mostGuessableMatchSequence(e,t).guesses)):D.mostGuessableMatchSequence(e,n).guesses}}class P{constructor(){this.MAX_DELTA=5}match({password:e}){const t=[];if(1===e.length)return[];let n=0,s=null;const r=e.length;for(let a=1;a<r;a+=1){const r=e.charCodeAt(a)-e.charCodeAt(a-1);if(null==s&&(s=r),r!==s){const o=a-1;this.update({i:n,j:o,delta:s,password:e,result:t}),n=o,s=r}}return this.update({i:n,j:r-1,delta:s,password:e,result:t}),t}update({i:e,j:t,delta:n,password:s,result:r}){if(t-e>1||1===Math.abs(n)){const a=Math.abs(n);if(a>0&&a<=this.MAX_DELTA){const a=s.slice(e,+t+1||9e9),{sequenceName:o,sequenceSpace:i}=this.getSequence(a);return r.push({pattern:"sequence",i:e,j:t,token:s.slice(e,+t+1||9e9),sequenceName:o,sequenceSpace:i,ascending:n>0})}}return null}getSequence(e){let t="unicode",n=26;return g.test(e)?(t="lower",n=26):d.test(e)?(t="upper",n=26):y.test(e)&&(t="digits",n=10),{sequenceName:t,sequenceSpace:n}}}class R{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:e}){const t=[];return Object.keys(T.graphs).forEach((n=>{const r=T.graphs[n];s(t,this.helper(e,r,n))})),i(t)}checkIfShifted(e,t,n){return!e.includes("keypad")&&this.SHIFTED_RX.test(t.charAt(n))?1:0}helper(e,t,n){let s;const r=[];let a=0;const o=e.length;for(;a<o-1;){let i=a+1,c=0,l=0;for(s=this.checkIfShifted(n,e,a);;){const u=t[e.charAt(i-1)]||[];let h=!1,d=-1,p=-1;if(i<o){const t=e.charAt(i),n=u.length;for(let e=0;e<n;e+=1){const n=u[e];if(p+=1,n){const e=n.indexOf(t);if(-1!==e){h=!0,d=p,1===e&&(s+=1),c!==d&&(l+=1,c=d);break}}}}if(!h){i-a>2&&r.push({pattern:"spatial",i:a,j:i-1,token:e.slice(a,i),graph:n,turns:l,shiftedCount:s}),a=i;break}i+=1}}return r}}class q{constructor(){this.matchers={date:M,dictionary:S,regex:C,repeat:N,sequence:P,spatial:R}}match(e){const t=[],n=[];return[...Object.keys(this.matchers),...Object.keys(T.matchers)].forEach((r=>{if(!this.matchers[r]&&!T.matchers[r])return;const a=(new(this.matchers[r]?this.matchers[r]:T.matchers[r].Matching)).match({password:e,omniMatch:this});a instanceof Promise?(a.then((e=>{s(t,e)})),n.push(a)):s(t,a)})),n.length>0?new Promise((e=>{Promise.all(n).then((()=>{e(i(t))}))})):i(t)}}const B={second:1,minute:60,hour:3600,day:86400,month:2678400,year:32140800,century:321408e4};class U{translate(e,t){let n=e;void 0!==t&&1!==t&&(n+="s");const{timeEstimation:s}=T.translations;return s[n].replace("{base}",`${t}`)}estimateAttackTimes(e){const t={onlineThrottling100PerHour:e/(100/3600),onlineNoThrottling10PerSecond:e/10,offlineSlowHashing1e4PerSecond:e/1e4,offlineFastHashing1e10PerSecond:e/1e10},n={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(t).forEach((e=>{const s=t[e];n[e]=this.displayTime(s)})),{crackTimesSeconds:t,crackTimesDisplay:n,score:this.guessesToScore(e)}}guessesToScore(e){return e<1005?0:e<1000005?1:e<100000005?2:e<10000000005?3:4}displayTime(e){let t,n="centuries";const s=Object.keys(B),r=s.findIndex((t=>e<B[t]));return r>-1&&(n=s[r-1],0!==r?t=Math.round(e/B[n]):n="ltSecond"),this.translate(n,t)}}var G=()=>null,H=()=>({warning:T.translations.warnings.dates,suggestions:[T.translations.suggestions.dates]});var z=(e,t)=>{const n=((e,t)=>{let n="";const s=e.dictionaryName,r="lastnames"===s||s.toLowerCase().includes("firstnames");return"passwords"===s?n=((e,t)=>{let n="";return!t||e.l33t||e.reversed?e.guessesLog10<=4&&(n=T.translations.warnings.similarToCommon):n=e.rank<=10?T.translations.warnings.topTen:e.rank<=100?T.translations.warnings.topHundred:T.translations.warnings.common,n})(e,t):s.includes("wikipedia")?n=((e,t)=>{let n="";return t&&(n=T.translations.warnings.wordByItself),n})(0,t):r?n=((e,t)=>t?T.translations.warnings.namesByThemselves:T.translations.warnings.commonNames)(0,t):"userInputs"===s&&(n=T.translations.warnings.userInputs),n})(e,t),s=[],r=e.token;return r.match(u)?s.push(T.translations.suggestions.capitalization):r.match(p)&&r.toLowerCase()!==r&&s.push(T.translations.suggestions.allUppercase),e.reversed&&e.token.length>=4&&s.push(T.translations.suggestions.reverseWords),e.l33t&&s.push(T.translations.suggestions.l33t),{warning:n,suggestions:s}},W=e=>"recentYear"===e.regexName?{warning:T.translations.warnings.recentYears,suggestions:[T.translations.suggestions.recentYears,T.translations.suggestions.associatedYears]}:{warning:"",suggestions:[]},Y=e=>{let t=T.translations.warnings.extendedRepeat;return 1===e.baseToken.length&&(t=T.translations.warnings.simpleRepeat),{warning:t,suggestions:[T.translations.suggestions.repeated]}},$=()=>({warning:T.translations.warnings.sequences,suggestions:[T.translations.suggestions.sequences]}),V=e=>{let t=T.translations.warnings.keyPattern;return 1===e.turns&&(t=T.translations.warnings.straightRow),{warning:t,suggestions:[T.translations.suggestions.longerKeyboardPattern]}};const F={warning:"",suggestions:[]};class _{constructor(){this.matchers={bruteforce:G,date:H,dictionary:z,regex:W,repeat:Y,sequence:$,spatial:V},this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(T.translations.suggestions.useWords,T.translations.suggestions.noNeed)}getFeedback(e,t){if(0===t.length)return this.defaultFeedback;if(e>2)return F;const n=T.translations.suggestions.anotherWord,s=this.getLongestMatch(t);let r=this.getMatchFeedback(s,1===t.length);return null!=r?(r.suggestions.unshift(n),null==r.warning&&(r.warning="")):r={warning:"",suggestions:[n]},r}getLongestMatch(e){let t=e[0];return e.slice(1).forEach((e=>{e.token.length>t.token.length&&(t=e)})),t}getMatchFeedback(e,t){return this.matchers[e.pattern]?this.matchers[e.pattern](e,t):T.matchers[e.pattern]&&"feedback"in T.matchers[e.pattern]?T.matchers[e.pattern].feedback(e,t):F}}const Z=()=>(new Date).getTime(),K=(e,t,n)=>{const s=new _,r=new U,a=D.mostGuessableMatchSequence(t,e),o=Z()-n,i=r.estimateAttackTimes(a.guesses);return{calcTime:o,...a,...i,feedback:s.getFeedback(i.score,a.sequence)}},X=(e,t)=>{t&&T.extendUserInputsDictionary(t);const n=new q,s=Z(),r=n.match(e);return r instanceof Promise?r.then((t=>K(t,e,s))):K(r,e,s)};var J=r(91),Q=r.n(J),ee=new URL(r(433),r.b),te=new URL(r(505),r.b);const ne='<center><h1>Open Chrome</h1></center> <div class="desktop-container"> <div id="desktop"> <img src="'+Q()(ee)+'" usemap="#chrome"> <map name="chrome"> <area shape="rect" coords="12,97,102,185" onclick=\'Main.sendMessage("continue")\'> <area shape="rect" coords="152,727,193,768" onclick=\'Main.sendMessage("continue")\'> <area shape="rect" coords="0,727,50,768" onclick=\'Main.sendMessage("start")\'> </map> </div> <div id="start-menu" style="display:none"> <img src="'+Q()(te)+'" usemap="#chrome_start"> <map name="chrome_start"> <area shape="rect" coords="63,282,308,317" onclick=\'Main.sendMessage("continue")\'> <area shape="rect" coords="645,393,752,499" onclick=\'Main.sendMessage("continue")\'> <area shape="rect" coords="152,727,193,768" onclick=\'Main.sendMessage("continue")\'> <area shape="rect" coords="0,727,50,768" onclick=\'Main.sendMessage("closestart")\'> </map> </div> </div> ';var se=new URL(r(849),r.b),re=new URL(r(769),r.b);const ae='<center><h1>Schrijf een email</h1></center> <center><em>Schrijf een email naar \'fpcvanmesdag@vanmesdag.nl\' met als onderwerp \'Hallo\' en inhoud \'Dit is mijn bericht\' en verstuur het bericht</em></center> <div class="mail-container"> <div class="mail-header"><div>Nieuw bericht</div></div> <div class="mail-inp-container"> <input class="mail-input" id="reciever" placeholder="ontvangers"> <input class="mail-input" id="subject" placeholder="onderwerp"> <textarea class="mail-write" id="content"></textarea> <img src="'+Q()(se)+'" usemap="#gsave"> <map name="gsave"> <area shape="rect" coords="0,0,107,42" onclick="Main.sendMessage()"> </map> <img src="'+Q()(re)+'"> </div> </div> ';var oe=new URL(r(731),r.b);const ie='<center><h1>Klik op de link voor bol.com</h1></center> <div class="web-container"> <img src="'+Q()(oe)+'"> <button class="invis-button" onclick="Main.sendMessage()" style="top:7.5%;left:10%;width:9.8%;height:1%;cursor:pointer"></button> <button class="invis-button" onclick="Main.sendMessage()" style="top:8.5%;left:10%;width:20%;height:1.3%;cursor:pointer"></button> <button class="invis-button" onclick="Main.sendMessage()" style="top:25%;left:10%;width:9.8%;height:1%;cursor:pointer"></button> <button class="invis-button" onclick="Main.sendMessage()" style="top:26%;left:10%;width:20%;height:1.3%;cursor:pointer"></button> </div> ';var ce=new URL(r(16),r.b);const le='<center><h1>Zoek de route op van Groningen hoofdstation naar het Zuiderdiep</h1></center> <div class="web-container"> <img src="'+Q()(ce)+'" usemap="#reisplanner"> <button class="invis-button" onclick="Main.sendMessage()" style="top:40.5%;left:73%;width:7.6%;height:4%"></button> <map name="reisplanner"> <area shape="rect" coords="1277,447,1406,490" onclick="Main.sendMessage()"> </map> <input id="reisplanner-a" class="reisplanner" placeholder="adres, halte, station, etc."> <input id="reisplanner-b" class="reisplanner" placeholder="adres, halte, station, etc."> </div> ';var ue=new URL(r(634),r.b);function he(e){if(me[e].id=e)return me[e]}function de(){return me}function pe(e,t,n){var s=document.getElementById(e);if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){var r=s.value.trim().toLowerCase();return n&&r.endsWith(".")&&(r=r.substr(0,r.length-1)),r===t}}function ge(){return t(this,void 0,void 0,(function(){var t,s,a,o;return n(this,(function(n){switch(n.label){case 0:return[4,r.e(228).then(r.bind(r,23))];case 1:return t=n.sent().default,s={graphs:t.adjacencyGraphs,dictionary:e(e({},t.dictionary),{custom:["test","digi","vaardigheden"]})},T.setOptions(s),[4,r.e(508).then(r.bind(r,346))];case 2:return a=n.sent().default,o={translations:a.translations,graphs:t.adjacencyGraphs,dictionary:e(e(e({},t.dictionary),a.dictionary),{custom:["test","digi","vaardigheden"]})},T.setOptions(o),[2]}}))}))}function fe(e){return t(this,void 0,void 0,(function(){return n(this,(function(e){return[2,0]}))}))}var me=[{name:"Klikken",checkConditions:fe,html:'<h1 class="centered-txt">Druk op de knop om door te gaan</h1> <button onclick="Main.sendMessage()" class="continue-button">Doorgaan</button> '},{name:"Chrome openen",checkConditions:function(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return"continue"==e?[2,0]:("start"==e?(document.getElementById("desktop").style.display="none",document.getElementById("start-menu").style.display="flex"):"closestart"==e&&(document.getElementById("desktop").style.display="flex",document.getElementById("start-menu").style.display="none"),[2,3])}))}))},html:ne},{name:"Email versturen",checkConditions:function(e){return t(this,void 0,void 0,(function(){var e,t,s;return n(this,(function(n){return e=pe("reciever","fpcvanmesdag@vanmesdag.nl",!1),t=pe("subject","hallo",!0),s=pe("content","dit is mijn bericht",!0),e&&t&&s?[2,0]:[2,2]}))}))},html:ae},{name:"Google resultaten begrijpen",checkConditions:fe,html:ie},{name:"Reisplanner gebruiken",checkConditions:function(e){return t(this,void 0,void 0,(function(){var e,t;return n(this,(function(n){return e=pe("reisplanner-a","groningen hoofdstation",!0),t=pe("reisplanner-b","zuiderdiep",!0),[2,e&&t?0:2]}))}))},html:le},{name:"Budgetteren",checkConditions:function(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,"right"==e?0:2]}))}))},html:'<center> <h1>Je wil een tv kopen van €500, wat doe je</h1> <button class="multichoice" onclick=\'Main.sendMessage("wrong")\'>Ik koop de tv en betaal mijn zorgverzekering niet of ik geef minder uit aan boodschappen</button><br> <button class="multichoice" onclick=\'Main.sendMessage("right")\'>Ik bewaar wat ik nu over heb en koop de tv volgende maand</button><br> <button class="multichoice" onclick=\'Main.sendMessage("right")\'>Ik koop een goedkopere tv</button><br> <button class="multichoice" onclick=\'Main.sendMessage("wrong")\'>Ik ga een lening aan</button> </center> '},{name:"OV-chipkaart opladen",checkConditions:function(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,"right"==e?0:2]}))}))},html:'<center><h1>Je wil je ov-chipkaart opladen. Druk op de juiste knop</h1></center> <div class="desktop-container"> <div> <img src="'+Q()(ue)+'" usemap="#ov"> <map name="ov"> <area shape="rect" coords="38,138,123,185" onclick=\'Main.sendMessage("right")\'> <area shape="rect" coords="38,219,123,266" onclick=\'Main.sendMessage("wrong")\'> <area shape="rect" coords="24,304,112,349" onclick=\'Main.sendMessage("wrong")\'> <area shape="rect" coords="631,138,715,185" onclick=\'Main.sendMessage("wrong")\'> <area shape="rect" coords="631,219,715,266" onclick=\'Main.sendMessage("wrong")\'> <area shape="rect" coords="644,304,726,349" onclick=\'Main.sendMessage("wrong")\'> </map> </div> </div> ',onLoad:function(){ge()}},{name:"Spam email identificeren",checkConditions:function(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,"right"==e?0:2]}))}))},html:'<center> <h1>Welk van deze email addressen komt van Google?</h1> <button class="multichoice" onclick=\'Main.sendMessage("wrong")\'>beveiliging@gmail.com</button><br> <button class="multichoice" onclick=\'Main.sendMessage("wrong")\'>account@googlesearch.com</button><br> <button class="multichoice" onclick=\'Main.sendMessage("right")\'>no-reply@accounts.google.com</button><br> <button class="multichoice" onclick=\'Main.sendMessage("wrong")\'>security@googlemails.com</button> </center> '},{name:"Een veilig wachtwoord bedenken",checkConditions:function(e){return t(this,void 0,void 0,(function(){var e,t;return n(this,(function(n){switch(n.label){case 0:return(e=document.getElementById("pw-input"))instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?[4,X(e.value)]:[3,2];case 1:switch(t=n.sent(),console.log(t),t.score){case 0:case 1:case 2:return[2,2];case 3:return[2,1];default:return[2,0]}n.label=2;case 2:return[2]}}))}))},html:'<center> <h1>Verzin een nieuw sterk wachtwoord</h1> <input id="pw-input"> <button onclick="Main.sendMessage()">Verder</button> </center> ',onLoad:function(){ge()}}].map((function(e,t){var n;return n=null!=e.onLoad?e.onLoad:function(){},{id:t,name:e.name,checkConditions:e.checkConditions,html:e.html,onLoad:n}}));function be(e,t,n){t?(ke(e,!0),e.classList.add(n?"fading-in":"fading-out"),setTimeout((function(){e.classList.remove(n?"fading-in":"fading-out"),ke(e,n)}),2e3)):ke(e,n)}function ke(e,t){e.style.display=t?"unset":"none"}var ye,ve=function(){function e(){}return e.prototype.toUrlString=function(){return"s"},e.prototype.setVisibility=function(e,t){be(document.getElementById("start"),e,t)},e.prototype.onHtmlMessage=function(e){Se(new Me(me[0]))},e}(),we=function(){function e(){}return e.prototype.toUrlString=function(){return"r"},e.prototype.setVisibility=function(e,t){be(document.getElementById("result"),e,t);var n=document.getElementById("result-container"),s=Te().countCorrect(),r=document.createElement("h1");for(var a in s>0&&s<=3?r.textContent="Resultaat: module 1":s<=6?r.textContent="Resultaat: module 2":s<de().length?r.textContent="Resultaat: module 3":s==de().length&&(r.textContent="Resultaat: oefenen bij SJD"),n.append(r),de()){var o=de()[a],i=document.createElement("div");switch(i.textContent=o.name,i.className="test-result",Te().get(o.id)){case 0:i.className+=" good-test";break;case 1:i.className+=" quitegood-test";break;case 2:i.className+=" fail-test";break;default:i.className+=" unknown-test"}n.append(i)}},e.prototype.onHtmlMessage=function(e){window.location.assign(window.location.pathname)},e}(),Me=function(){function e(e){this.test=e,this.htmlRep=null}return e.prototype.toUrlString=function(){return"t"+btoa(""+this.test.id)},e.prototype.setVisibility=function(e,t){if(null!=this.htmlRep)be(this.htmlRep,e,t);else{var n=document.getElementById("main"),s=document.createElement("div"),r=document.createElement("div");r.innerHTML=this.test.html,r.className="margin-wrapper",s.append(r),s.className="state",n.append(s),this.test.onLoad(),be(s,e,t),this.htmlRep=s}},e.prototype.onHtmlMessage=function(e){return t(this,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return[4,this.test.checkConditions(e)];case 1:return t=n.sent(),function(e,t){je.addToTracker(e,t),e==de().length-1&&Se(new we),e>=2&&2==je.get(e)&&2==je.get(e-1)&&2==je.get(e-2)&&Se(new we),3!=t&&Le()}(this.test.id,t),[2]}}))}))},e}(),xe=function(){function e(){this.results=new Array(de().length)}return e.prototype.importUrlString=function(e){(e=atob(e)).length;for(var t=0;t<e.length;t++)this.results[t]=e.charCodeAt(t)},e.prototype.get=function(e){return this.results[e]},e.prototype.countCorrect=function(){for(var e=0,t=0;t<this.results.length;t++){var n=this.get(t);0!=n&&1!=n||(e+=1)}return e},e.prototype.addToTracker=function(e,t){this.results[e]=t},e.prototype.toUrlString=function(){return btoa(this.results.map((function(e){return String.fromCharCode(e)})).join(""))},e}(),je=new xe;function Te(){return je}function Ee(){return ye}function Ie(e){ye=e}function Se(e){Ee().setVisibility(!0,!1),e.setVisibility(!0,!0),Ie(e),Oe()}function Ce(e){Ee().setVisibility(!1,!1),e.setVisibility(!1,!0),Ie(e),Oe()}function Le(){var e,t=Ee();t instanceof Me&&(e=t.test.id+1,Se(new Me(he(e))))}function Oe(){window.location.replace(window.location.pathname+"#"+ye.toUrlString()+"-"+je.toUrlString())}function Ae(e){Ee().onHtmlMessage(e)}document.addEventListener("DOMContentLoaded",(function(){!function(){Ie(new ve);var e,t=window.location.hash.substring(1).split("-");if(2==t.length){var n=(e=t[0]).startsWith("t")&&e.length>=2?new Me(he(parseInt(atob(e.substring(1)),10))):e.startsWith("r")?new we:new ve;(je=new xe).importUrlString(t[1]),Ce(n),Oe()}else Ce(Ee())}()}))})(),Main=a})();