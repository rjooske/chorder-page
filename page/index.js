(()=>{function s(e){if(e.length===1){if(e===" ")return"space";if(e==="-")return"hyphen";if(e.match(/[A-Za-z]/))return e.toLowerCase()}}function c(e){let a=[];for(let r of e){let i=s(r);if(!i)return;a.push(i)}return a}var t=class{constructor(a,r){this.textarea=a;this.chorder=r;a.addEventListener("keydown",this.handleKeyDown.bind(this)),a.addEventListener("keyup",this.handleKeyUp.bind(this)),a.addEventListener("compositionupdate",()=>r.reset())}handleKeyDown(a){let r=g(a);!r||(a.preventDefault(),this.chorder.press(r))}handleKeyUp(a){let r=g(a);if(!r)return;a.preventDefault();let i=this.chorder.release(r);if(!i)return;let u=this.textarea.selectionStart,G=this.textarea.selectionEnd;this.textarea.setRangeText(i,u,G);let h=u+i.length;this.textarea.setSelectionRange(h,h)}};function g(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.isComposing))return s(e.key)}var n=class{constructor(a){this.keys=y(a)}equals(a){return this.keys.length!==a.keys.length?!1:this.keys.every(r=>a.keys.includes(r))}with(a){return new n([...this.keys,a])}};function y(e){let a=[];for(let r of e)a.includes(r)||a.push(r);return a}var m=class{constructor(a){this.map=a;this.keyStates=new Map}press(a){this.keyStates.set(a,"pressed")}release(a){if(this.keyStates.get(a)==="pressed"&&(this.keyStates.set(a,"released"),[...this.keyStates].every(([r,i])=>i==="released"))){let r=p(this.keyStates);return this.keyStates.clear(),this.map.map(r)}}reset(){this.keyStates.clear()}};function p(e){return new n([...e].map(([a])=>a))}var j=[{romajis:[" "],hiragana:" ",canGeminate:!1},{romajis:["-"],hiragana:"\u30FC",canGeminate:!1},{romajis:["a"],hiragana:"\u3042",canGeminate:!1},{romajis:["i"],hiragana:"\u3044",canGeminate:!1},{romajis:["u"],hiragana:"\u3046",canGeminate:!1},{romajis:["e"],hiragana:"\u3048",canGeminate:!1},{romajis:["o"],hiragana:"\u304A",canGeminate:!1},{romajis:["ka"],hiragana:"\u304B",canGeminate:!0},{romajis:["ki"],hiragana:"\u304D",canGeminate:!0},{romajis:["ku"],hiragana:"\u304F",canGeminate:!0},{romajis:["ke"],hiragana:"\u3051",canGeminate:!0},{romajis:["ko"],hiragana:"\u3053",canGeminate:!0},{romajis:["sa"],hiragana:"\u3055",canGeminate:!0},{romajis:["si","shi"],hiragana:"\u3057",canGeminate:!0},{romajis:["su"],hiragana:"\u3059",canGeminate:!0},{romajis:["se"],hiragana:"\u305B",canGeminate:!0},{romajis:["so"],hiragana:"\u305D",canGeminate:!0},{romajis:["ta"],hiragana:"\u305F",canGeminate:!0},{romajis:["ti","chi"],hiragana:"\u3061",canGeminate:!0},{romajis:["tu","tsu"],hiragana:"\u3064",canGeminate:!0},{romajis:["te"],hiragana:"\u3066",canGeminate:!0},{romajis:["to"],hiragana:"\u3068",canGeminate:!0},{romajis:["na"],hiragana:"\u306A",canGeminate:!0},{romajis:["ni"],hiragana:"\u306B",canGeminate:!0},{romajis:["nu"],hiragana:"\u306C",canGeminate:!0},{romajis:["ne"],hiragana:"\u306D",canGeminate:!0},{romajis:["no"],hiragana:"\u306E",canGeminate:!0},{romajis:["ha"],hiragana:"\u306F",canGeminate:!0},{romajis:["hi"],hiragana:"\u3072",canGeminate:!0},{romajis:["hu","fu"],hiragana:"\u3075",canGeminate:!0},{romajis:["he"],hiragana:"\u3078",canGeminate:!0},{romajis:["ho"],hiragana:"\u307B",canGeminate:!0},{romajis:["ma"],hiragana:"\u307E",canGeminate:!0},{romajis:["mi"],hiragana:"\u307F",canGeminate:!0},{romajis:["mu"],hiragana:"\u3080",canGeminate:!0},{romajis:["me"],hiragana:"\u3081",canGeminate:!0},{romajis:["mo"],hiragana:"\u3082",canGeminate:!0},{romajis:["ya"],hiragana:"\u3084",canGeminate:!0},{romajis:["yu"],hiragana:"\u3086",canGeminate:!0},{romajis:["yo"],hiragana:"\u3088",canGeminate:!0},{romajis:["ra"],hiragana:"\u3089",canGeminate:!0},{romajis:["ri"],hiragana:"\u308A",canGeminate:!0},{romajis:["ru"],hiragana:"\u308B",canGeminate:!0},{romajis:["re"],hiragana:"\u308C",canGeminate:!0},{romajis:["ro"],hiragana:"\u308D",canGeminate:!0},{romajis:["wa"],hiragana:"\u308F",canGeminate:!0},{romajis:["wo"],hiragana:"\u3092",canGeminate:!0},{romajis:["n"],hiragana:"\u3093",canGeminate:!1},{romajis:["ga"],hiragana:"\u304C",canGeminate:!0},{romajis:["gi"],hiragana:"\u304E",canGeminate:!0},{romajis:["gu"],hiragana:"\u3050",canGeminate:!0},{romajis:["ge"],hiragana:"\u3052",canGeminate:!0},{romajis:["go"],hiragana:"\u3054",canGeminate:!0},{romajis:["za"],hiragana:"\u3056",canGeminate:!0},{romajis:["zi","ji"],hiragana:"\u3058",canGeminate:!0},{romajis:["zu"],hiragana:"\u305A",canGeminate:!0},{romajis:["ze"],hiragana:"\u305C",canGeminate:!0},{romajis:["zo"],hiragana:"\u305E",canGeminate:!0},{romajis:["da"],hiragana:"\u3060",canGeminate:!0},{romajis:["di"],hiragana:"\u3062",canGeminate:!0},{romajis:["du"],hiragana:"\u3065",canGeminate:!0},{romajis:["de"],hiragana:"\u3067",canGeminate:!0},{romajis:["do"],hiragana:"\u3069",canGeminate:!0},{romajis:["ba"],hiragana:"\u3070",canGeminate:!0},{romajis:["bi"],hiragana:"\u3073",canGeminate:!0},{romajis:["bu"],hiragana:"\u3076",canGeminate:!0},{romajis:["be"],hiragana:"\u3079",canGeminate:!0},{romajis:["bo"],hiragana:"\u307C",canGeminate:!0},{romajis:["pa"],hiragana:"\u3071",canGeminate:!0},{romajis:["pi"],hiragana:"\u3074",canGeminate:!0},{romajis:["pu"],hiragana:"\u3077",canGeminate:!0},{romajis:["pe"],hiragana:"\u307A",canGeminate:!0},{romajis:["po"],hiragana:"\u307D",canGeminate:!0},{romajis:["la","xa"],hiragana:"\u3041",canGeminate:!0},{romajis:["li","xi"],hiragana:"\u3043",canGeminate:!0},{romajis:["lu","xu"],hiragana:"\u3045",canGeminate:!0},{romajis:["le","xe"],hiragana:"\u3047",canGeminate:!0},{romajis:["lo","xo"],hiragana:"\u3049",canGeminate:!0},{romajis:["ltu","ltsu","xtu","xtsu"],hiragana:"\u3063",canGeminate:!0},{romajis:["lya","xya"],hiragana:"\u3083",canGeminate:!0},{romajis:["lyu","xyu"],hiragana:"\u3085",canGeminate:!0},{romajis:["lyo","xyo"],hiragana:"\u3087",canGeminate:!0},{romajis:["ye"],hiragana:"\u3044\u3047",canGeminate:!0},{romajis:["wha"],hiragana:"\u3046\u3041",canGeminate:!0},{romajis:["whi","wi"],hiragana:"\u3046\u3043",canGeminate:!0},{romajis:["whe","we"],hiragana:"\u3046\u3047",canGeminate:!0},{romajis:["who"],hiragana:"\u3046\u3049",canGeminate:!0},{romajis:["wyi"],hiragana:"\u3090",canGeminate:!0},{romajis:["wye"],hiragana:"\u3091",canGeminate:!0},{romajis:["va"],hiragana:"\u3094\u3041",canGeminate:!0},{romajis:["vi"],hiragana:"\u3094\u3043",canGeminate:!0},{romajis:["vu"],hiragana:"\u3094",canGeminate:!0},{romajis:["ve"],hiragana:"\u3094\u3047",canGeminate:!0},{romajis:["vo"],hiragana:"\u3094\u3049",canGeminate:!0},{romajis:["vya"],hiragana:"\u3094\u3083",canGeminate:!0},{romajis:["vyu"],hiragana:"\u3094\u3085",canGeminate:!0},{romajis:["vyo"],hiragana:"\u3094\u3087",canGeminate:!0},{romajis:["kya"],hiragana:"\u304D\u3083",canGeminate:!0},{romajis:["kyi"],hiragana:"\u304D\u3043",canGeminate:!0},{romajis:["kyu"],hiragana:"\u304D\u3085",canGeminate:!0},{romajis:["kye"],hiragana:"\u304D\u3047",canGeminate:!0},{romajis:["kyo"],hiragana:"\u304D\u3087",canGeminate:!0},{romajis:["sya","sha"],hiragana:"\u3057\u3083",canGeminate:!0},{romajis:["syi"],hiragana:"\u3057\u3043",canGeminate:!0},{romajis:["syu","shu"],hiragana:"\u3057\u3085",canGeminate:!0},{romajis:["sye","she"],hiragana:"\u3057\u3047",canGeminate:!0},{romajis:["syo","sho"],hiragana:"\u3057\u3087",canGeminate:!0},{romajis:["swa"],hiragana:"\u3059\u3041",canGeminate:!0},{romajis:["swi"],hiragana:"\u3059\u3043",canGeminate:!0},{romajis:["swu"],hiragana:"\u3059\u3045",canGeminate:!0},{romajis:["swe"],hiragana:"\u3059\u3047",canGeminate:!0},{romajis:["swo"],hiragana:"\u3059\u3049",canGeminate:!0},{romajis:["tya","cha"],hiragana:"\u3061\u3083",canGeminate:!0},{romajis:["tyi"],hiragana:"\u3061\u3043",canGeminate:!0},{romajis:["tyu","chu"],hiragana:"\u3061\u3085",canGeminate:!0},{romajis:["tye","che"],hiragana:"\u3061\u3047",canGeminate:!0},{romajis:["tyo","cho"],hiragana:"\u3061\u3087",canGeminate:!0},{romajis:["tsa"],hiragana:"\u3064\u3041",canGeminate:!0},{romajis:["tsi"],hiragana:"\u3064\u3043",canGeminate:!0},{romajis:["tse"],hiragana:"\u3064\u3047",canGeminate:!0},{romajis:["tso"],hiragana:"\u3064\u3049",canGeminate:!0},{romajis:["tha"],hiragana:"\u3066\u3083",canGeminate:!0},{romajis:["thi"],hiragana:"\u3066\u3043",canGeminate:!0},{romajis:["thu"],hiragana:"\u3066\u3085",canGeminate:!0},{romajis:["the"],hiragana:"\u3066\u3047",canGeminate:!0},{romajis:["tho"],hiragana:"\u3066\u3087",canGeminate:!0},{romajis:["twa"],hiragana:"\u3068\u3041",canGeminate:!0},{romajis:["twi"],hiragana:"\u3068\u3043",canGeminate:!0},{romajis:["twu"],hiragana:"\u3068\u3045",canGeminate:!0},{romajis:["twe"],hiragana:"\u3068\u3047",canGeminate:!0},{romajis:["two"],hiragana:"\u3068\u3049",canGeminate:!0},{romajis:["nya"],hiragana:"\u306B\u3083",canGeminate:!0},{romajis:["nyi"],hiragana:"\u306B\u3043",canGeminate:!0},{romajis:["nyu"],hiragana:"\u306B\u3085",canGeminate:!0},{romajis:["nye"],hiragana:"\u306B\u3047",canGeminate:!0},{romajis:["nyo"],hiragana:"\u306B\u3087",canGeminate:!0},{romajis:["hya"],hiragana:"\u3072\u3083",canGeminate:!0},{romajis:["hyi"],hiragana:"\u3072\u3043",canGeminate:!0},{romajis:["hyu"],hiragana:"\u3072\u3085",canGeminate:!0},{romajis:["hye"],hiragana:"\u3072\u3047",canGeminate:!0},{romajis:["hyo"],hiragana:"\u3072\u3087",canGeminate:!0},{romajis:["fwa","fa","hwa"],hiragana:"\u3075\u3041",canGeminate:!0},{romajis:["fwi","fi","hwi"],hiragana:"\u3075\u3043",canGeminate:!0},{romajis:["fwu"],hiragana:"\u3075\u3045",canGeminate:!0},{romajis:["fwe","fe","hwe"],hiragana:"\u3075\u3047",canGeminate:!0},{romajis:["fwo","fo","hwo"],hiragana:"\u3075\u3049",canGeminate:!0},{romajis:["fya"],hiragana:"\u3075\u3083",canGeminate:!0},{romajis:["fyu"],hiragana:"\u3075\u3085",canGeminate:!0},{romajis:["fyo"],hiragana:"\u3075\u3087",canGeminate:!0},{romajis:["mya"],hiragana:"\u307F\u3083",canGeminate:!0},{romajis:["myi"],hiragana:"\u307F\u3043",canGeminate:!0},{romajis:["myu"],hiragana:"\u307F\u3085",canGeminate:!0},{romajis:["mye"],hiragana:"\u307F\u3047",canGeminate:!0},{romajis:["myo"],hiragana:"\u307F\u3087",canGeminate:!0},{romajis:["rya"],hiragana:"\u308A\u3083",canGeminate:!0},{romajis:["ryi"],hiragana:"\u308A\u3043",canGeminate:!0},{romajis:["ryu"],hiragana:"\u308A\u3085",canGeminate:!0},{romajis:["rye"],hiragana:"\u308A\u3047",canGeminate:!0},{romajis:["ryo"],hiragana:"\u308A\u3087",canGeminate:!0},{romajis:["gya"],hiragana:"\u304E\u3083",canGeminate:!0},{romajis:["gyi"],hiragana:"\u304E\u3043",canGeminate:!0},{romajis:["gyu"],hiragana:"\u304E\u3085",canGeminate:!0},{romajis:["gye"],hiragana:"\u304E\u3047",canGeminate:!0},{romajis:["gyo"],hiragana:"\u304E\u3087",canGeminate:!0},{romajis:["kwa","qa"],hiragana:"\u304F\u3041",canGeminate:!0},{romajis:["kwi","qi"],hiragana:"\u304F\u3043",canGeminate:!0},{romajis:["kwu","qu"],hiragana:"\u304F\u3045",canGeminate:!0},{romajis:["kwe","qe"],hiragana:"\u304F\u3047",canGeminate:!0},{romajis:["kwo","qo"],hiragana:"\u304F\u3049",canGeminate:!0},{romajis:["gwa"],hiragana:"\u3050\u3041",canGeminate:!0},{romajis:["gwi"],hiragana:"\u3050\u3043",canGeminate:!0},{romajis:["gwu"],hiragana:"\u3050\u3045",canGeminate:!0},{romajis:["gwe"],hiragana:"\u3050\u3047",canGeminate:!0},{romajis:["gwo"],hiragana:"\u3050\u3049",canGeminate:!0},{romajis:["zya","ja","jya"],hiragana:"\u3058\u3083",canGeminate:!0},{romajis:["zyi","jyi"],hiragana:"\u3058\u3043",canGeminate:!0},{romajis:["zyu","ju","jyu"],hiragana:"\u3058\u3085",canGeminate:!0},{romajis:["zye","jye"],hiragana:"\u3058\u3047",canGeminate:!0},{romajis:["zyo","jo","jyo"],hiragana:"\u3058\u3087",canGeminate:!0},{romajis:["dya"],hiragana:"\u3062\u3083",canGeminate:!0},{romajis:["dyi"],hiragana:"\u3062\u3043",canGeminate:!0},{romajis:["dyu"],hiragana:"\u3062\u3085",canGeminate:!0},{romajis:["dye"],hiragana:"\u3062\u3047",canGeminate:!0},{romajis:["dyo"],hiragana:"\u3062\u3087",canGeminate:!0},{romajis:["dha"],hiragana:"\u3067\u3083",canGeminate:!0},{romajis:["dhi"],hiragana:"\u3067\u3043",canGeminate:!0},{romajis:["dhu"],hiragana:"\u3067\u3085",canGeminate:!0},{romajis:["dhe"],hiragana:"\u3067\u3047",canGeminate:!0},{romajis:["dho"],hiragana:"\u3067\u3087",canGeminate:!0},{romajis:["dwa"],hiragana:"\u3069\u3041",canGeminate:!0},{romajis:["dwi"],hiragana:"\u3069\u3043",canGeminate:!0},{romajis:["dwu"],hiragana:"\u3069\u3045",canGeminate:!0},{romajis:["dwe"],hiragana:"\u3069\u3047",canGeminate:!0},{romajis:["dwo"],hiragana:"\u3069\u3049",canGeminate:!0},{romajis:["bya"],hiragana:"\u3073\u3083",canGeminate:!0},{romajis:["byi"],hiragana:"\u3073\u3043",canGeminate:!0},{romajis:["byu"],hiragana:"\u3073\u3085",canGeminate:!0},{romajis:["bye"],hiragana:"\u3073\u3047",canGeminate:!0},{romajis:["byo"],hiragana:"\u3073\u3087",canGeminate:!0},{romajis:["pya"],hiragana:"\u3074\u3083",canGeminate:!0},{romajis:["pyi"],hiragana:"\u3074\u3043",canGeminate:!0},{romajis:["pyu"],hiragana:"\u3074\u3085",canGeminate:!0},{romajis:["pye"],hiragana:"\u3074\u3047",canGeminate:!0},{romajis:["pyo"],hiragana:"\u3074\u3087",canGeminate:!0}];var f=j.flatMap(({romajis:e,hiragana:a,canGeminate:r})=>e.map(i=>c(i)).filter(i=>!!i).map(i=>new n(i)).flatMap(i=>r?[{chord:i,hiragana:a},{chord:i.with("space"),hiragana:"\u3063"+a}]:[{chord:i,hiragana:a}])),o=class{map(a){let r=l(a);return r?r.hiragana:""}};function l(e){return f.find(a=>a.chord.equals(e))}function w(){let e=document.querySelector("#editor");e instanceof HTMLTextAreaElement&&new t(e,new m(new o))}w();})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2RvbWFpbi9rZXkvS2V5LnRzIiwgIi4uL3NyYy9jb250cm9sbGVyL0VkaXRvci50cyIsICIuLi9zcmMvZG9tYWluL2Nob3JkL0Nob3JkLnRzIiwgIi4uL3NyYy9kb21haW4vY2hvcmQvQ2hvcmRlci50cyIsICIuLi9zcmMvZG9tYWluL2Nob3JkL0phcGFuZXNlQ2hvcmRNYXAudHMiLCAiLi4vc3JjL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgdHlwZSBLZXkgPVxuICB8IFwic3BhY2VcIlxuICB8IFwiaHlwaGVuXCJcbiAgfCBcImFcIlxuICB8IFwiYlwiXG4gIHwgXCJjXCJcbiAgfCBcImRcIlxuICB8IFwiZVwiXG4gIHwgXCJmXCJcbiAgfCBcImdcIlxuICB8IFwiaFwiXG4gIHwgXCJpXCJcbiAgfCBcImpcIlxuICB8IFwia1wiXG4gIHwgXCJsXCJcbiAgfCBcIm1cIlxuICB8IFwiblwiXG4gIHwgXCJvXCJcbiAgfCBcInBcIlxuICB8IFwicVwiXG4gIHwgXCJyXCJcbiAgfCBcInNcIlxuICB8IFwidFwiXG4gIHwgXCJ1XCJcbiAgfCBcInZcIlxuICB8IFwid1wiXG4gIHwgXCJ4XCJcbiAgfCBcInlcIlxuICB8IFwielwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENoYXJUb0tleShjaGFyOiBzdHJpbmcpOiBLZXkgfCB1bmRlZmluZWQge1xuICBpZiAoY2hhci5sZW5ndGggIT09IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hhciA9PT0gXCIgXCIpIHtcbiAgICByZXR1cm4gXCJzcGFjZVwiO1xuICB9XG5cbiAgaWYgKGNoYXIgPT09IFwiLVwiKSB7XG4gICAgcmV0dXJuIFwiaHlwaGVuXCI7XG4gIH1cblxuICBpZiAoY2hhci5tYXRjaCgvW0EtWmEtel0vKSkge1xuICAgIHJldHVybiBjaGFyLnRvTG93ZXJDYXNlKCkgYXMgS2V5O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0U3RyaW5nVG9LZXlzKHN0cmluZzogc3RyaW5nKSB7XG4gIGNvbnN0IGtleXM6IEtleVtdID0gW107XG5cbiAgZm9yIChjb25zdCBjaGFyIG9mIHN0cmluZykge1xuICAgIGNvbnN0IGtleSA9IGNvbnZlcnRDaGFyVG9LZXkoY2hhcik7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAga2V5cy5wdXNoKGtleSk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cbiIsICJpbXBvcnQgeyBDaG9yZGVyIH0gZnJvbSBcIi4uL2RvbWFpbi9jaG9yZC9DaG9yZGVyXCI7XG5pbXBvcnQgeyBjb252ZXJ0Q2hhclRvS2V5IH0gZnJvbSBcIi4uL2RvbWFpbi9rZXkvS2V5XCI7XG5cbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2hvcmRlcjogQ2hvcmRlclxuICApIHtcbiAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKSk7XG4gICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKSk7XG4gICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9udXBkYXRlXCIsICgpID0+IGNob3JkZXIucmVzZXQoKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUtleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBrZXkgPSBjb252ZXJ0S2V5Ym9hcmRFdmVudFRvS2V5KGV2ZW50KTtcbiAgICBpZiAoIWtleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmNob3JkZXIucHJlc3Moa2V5KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBrZXkgPSBjb252ZXJ0S2V5Ym9hcmRFdmVudFRvS2V5KGV2ZW50KTtcbiAgICBpZiAoIWtleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudCA9IHRoaXMuY2hvcmRlci5yZWxlYXNlKGtleSk7XG4gICAgaWYgKCFyZXBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0ID0gdGhpcy50ZXh0YXJlYS5zZWxlY3Rpb25TdGFydDtcbiAgICBjb25zdCBzZWxlY3Rpb25FbmQgPSB0aGlzLnRleHRhcmVhLnNlbGVjdGlvbkVuZDtcbiAgICB0aGlzLnRleHRhcmVhLnNldFJhbmdlVGV4dChyZXBsYWNlbWVudCwgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XG5cbiAgICBjb25zdCBzZWxlY3Rpb25Qb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0ICsgcmVwbGFjZW1lbnQubGVuZ3RoO1xuICAgIHRoaXMudGV4dGFyZWEuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uUG9zaXRpb24sIHNlbGVjdGlvblBvc2l0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0S2V5Ym9hcmRFdmVudFRvS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gIGlmIChcbiAgICBldmVudC5hbHRLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuaXNDb21wb3NpbmdcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRklYTUU6IGRvIG5vdCByZWx5IG9uIGV2ZW50LmtleVxuICByZXR1cm4gY29udmVydENoYXJUb0tleShldmVudC5rZXkpO1xufVxuIiwgImltcG9ydCB7IEtleSB9IGZyb20gXCIuLi9rZXkvS2V5XCI7XG5cbmV4cG9ydCBjbGFzcyBDaG9yZCB7XG4gIHByaXZhdGUgcmVhZG9ubHkga2V5czogS2V5W107XG5cbiAgY29uc3RydWN0b3Ioa2V5czogS2V5W10pIHtcbiAgICB0aGlzLmtleXMgPSBkZWR1cGUoa2V5cyk7XG4gIH1cblxuICBlcXVhbHMoY2hvcmQ6IENob3JkKSB7XG4gICAgaWYgKHRoaXMua2V5cy5sZW5ndGggIT09IGNob3JkLmtleXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMua2V5cy5ldmVyeSgoa2V5KSA9PiBjaG9yZC5rZXlzLmluY2x1ZGVzKGtleSkpO1xuICB9XG5cbiAgd2l0aChrZXk6IEtleSkge1xuICAgIHJldHVybiBuZXcgQ2hvcmQoWy4uLnRoaXMua2V5cywga2V5XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVkdXBlKGtleXM6IEtleVtdKSB7XG4gIGNvbnN0IHJlc3VsdDogS2V5W10gPSBbXTtcblxuICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgaWYgKCFyZXN1bHQuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwgImltcG9ydCB7IEtleSB9IGZyb20gXCIuLi9rZXkvS2V5XCI7XG5pbXBvcnQgeyBDaG9yZCB9IGZyb20gXCIuL0Nob3JkXCI7XG5pbXBvcnQgeyBDaG9yZE1hcCB9IGZyb20gXCIuL0Nob3JkTWFwXCI7XG5cbnR5cGUgS2V5U3RhdGUgPSBcInByZXNzZWRcIiB8IFwicmVsZWFzZWRcIjtcblxuZXhwb3J0IGNsYXNzIENob3JkZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IGtleVN0YXRlcyA9IG5ldyBNYXA8S2V5LCBLZXlTdGF0ZT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1hcDogQ2hvcmRNYXApIHt9XG5cbiAgcHJlc3Moa2V5OiBLZXkpIHtcbiAgICB0aGlzLmtleVN0YXRlcy5zZXQoa2V5LCBcInByZXNzZWRcIik7XG4gIH1cblxuICByZWxlYXNlKGtleTogS2V5KSB7XG4gICAgLy8gVE9ETzogaXQncyBhIGJpdCBhd2t3YXJkIHRvIG1hbmFnZSB0aGUgc3RhdGVzIG9mIHRoZSBrZXlzIGhlcmVcbiAgICBpZiAodGhpcy5rZXlTdGF0ZXMuZ2V0KGtleSkgIT09IFwicHJlc3NlZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5rZXlTdGF0ZXMuc2V0KGtleSwgXCJyZWxlYXNlZFwiKTtcblxuICAgIGlmIChbLi4udGhpcy5rZXlTdGF0ZXNdLmV2ZXJ5KChbXywgc3RhdGVdKSA9PiBzdGF0ZSA9PT0gXCJyZWxlYXNlZFwiKSkge1xuICAgICAgY29uc3QgY2hvcmQgPSBjb252ZXJ0S2V5U3RhdGVzVG9DaG9yZCh0aGlzLmtleVN0YXRlcyk7XG4gICAgICB0aGlzLmtleVN0YXRlcy5jbGVhcigpO1xuICAgICAgcmV0dXJuIHRoaXMubWFwLm1hcChjaG9yZCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5rZXlTdGF0ZXMuY2xlYXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0S2V5U3RhdGVzVG9DaG9yZChrZXlTdGF0ZXM6IE1hcDxLZXksIEtleVN0YXRlPikge1xuICByZXR1cm4gbmV3IENob3JkKFsuLi5rZXlTdGF0ZXNdLm1hcCgoW2tleV0pID0+IGtleSkpO1xufVxuIiwgImltcG9ydCB7IGNvbnZlcnRTdHJpbmdUb0tleXMsIEtleSB9IGZyb20gXCIuLi9rZXkvS2V5XCI7XG5pbXBvcnQgeyBDaG9yZCB9IGZyb20gXCIuL0Nob3JkXCI7XG5pbXBvcnQgeyBDaG9yZE1hcCB9IGZyb20gXCIuL0Nob3JkTWFwXCI7XG5pbXBvcnQgY29udmVyc2lvbnMgZnJvbSBcIi4vSmFwYW5lc2VDaG9yZE1hcC5qc29uXCI7XG5cbmNvbnN0IG1hcHBpbmdzID0gY29udmVyc2lvbnMuZmxhdE1hcCgoeyByb21hamlzLCBoaXJhZ2FuYSwgY2FuR2VtaW5hdGUgfSkgPT5cbiAgcm9tYWppc1xuICAgIC5tYXAoKGUpID0+IGNvbnZlcnRTdHJpbmdUb0tleXMoZSkpXG4gICAgLmZpbHRlcigoZSk6IGUgaXMgS2V5W10gPT4gISFlKVxuICAgIC5tYXAoKGUpID0+IG5ldyBDaG9yZChlKSlcbiAgICAuZmxhdE1hcCgoY2hvcmQpID0+IHtcbiAgICAgIGlmIChjYW5HZW1pbmF0ZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHsgY2hvcmQsIGhpcmFnYW5hIH0sXG4gICAgICAgICAgeyBjaG9yZDogY2hvcmQud2l0aChcInNwYWNlXCIpLCBoaXJhZ2FuYTogXCJcdTMwNjNcIiArIGhpcmFnYW5hIH0sXG4gICAgICAgIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW3sgY2hvcmQsIGhpcmFnYW5hIH1dO1xuICAgICAgfVxuICAgIH0pXG4pO1xuXG5leHBvcnQgY2xhc3MgSmFwYW5lc2VDaG9yZE1hcCBpbXBsZW1lbnRzIENob3JkTWFwIHtcbiAgbWFwKGNob3JkOiBDaG9yZCkge1xuICAgIGNvbnN0IG1hcHBpbmcgPSBmaW5kTWFwcGluZyhjaG9yZCk7XG4gICAgaWYgKCFtYXBwaW5nKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFwcGluZy5oaXJhZ2FuYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kTWFwcGluZyhjaG9yZDogQ2hvcmQpIHtcbiAgcmV0dXJuIG1hcHBpbmdzLmZpbmQoKGUpID0+IGUuY2hvcmQuZXF1YWxzKGNob3JkKSk7XG59XG4iLCAiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcIi4vY29udHJvbGxlci9FZGl0b3JcIjtcbmltcG9ydCB7IENob3JkZXIgfSBmcm9tIFwiLi9kb21haW4vY2hvcmQvQ2hvcmRlclwiO1xuaW1wb3J0IHsgSmFwYW5lc2VDaG9yZE1hcCB9IGZyb20gXCIuL2RvbWFpbi9jaG9yZC9KYXBhbmVzZUNob3JkTWFwXCI7XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0b3JcIik7XG4gIGlmICghKHRleHRhcmVhIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBuZXcgRWRpdG9yKHRleHRhcmVhLCBuZXcgQ2hvcmRlcihuZXcgSmFwYW5lc2VDaG9yZE1hcCgpKSk7XG59XG5cbm1haW4oKTtcbiJdLAogICJtYXBwaW5ncyI6ICJNQThCTyxXQUEwQixFQUErQixDQUM5RCxHQUFJLEVBQUssU0FBVyxFQUlwQixJQUFJLElBQVMsSUFDWCxNQUFPLFFBR1QsR0FBSSxJQUFTLElBQ1gsTUFBTyxTQUdULEdBQUksRUFBSyxNQUFNLFVBQVUsRUFDdkIsTUFBTyxHQUFLLFlBQVksRUFFNUIsQ0FFTyxXQUE2QixFQUFnQixDQUNsRCxHQUFNLEdBQWMsQ0FBQyxFQUVyQixPQUFXLEtBQVEsR0FBUSxDQUN6QixHQUFNLEdBQU0sRUFBaUIsQ0FBSSxFQUNqQyxHQUFJLENBQUMsRUFDSCxPQUVGLEVBQUssS0FBSyxDQUFHLENBQ2YsQ0FFQSxNQUFPLEVBQ1QsQ0N6RE8sV0FBYSxDQUNsQixZQUNtQixFQUNBLEVBQ2pCLENBRmlCLGdCQUNBLGVBRWpCLEVBQVMsaUJBQWlCLFVBQVcsS0FBSyxjQUFjLEtBQUssSUFBSSxDQUFDLEVBQ2xFLEVBQVMsaUJBQWlCLFFBQVMsS0FBSyxZQUFZLEtBQUssSUFBSSxDQUFDLEVBQzlELEVBQVMsaUJBQWlCLG9CQUFxQixJQUFNLEVBQVEsTUFBTSxDQUFDLENBQ3RFLENBRVEsY0FBYyxFQUFzQixDQUMxQyxHQUFNLEdBQU0sRUFBMEIsQ0FBSyxFQUMzQyxBQUFJLENBQUMsR0FJTCxHQUFNLGVBQWUsRUFFckIsS0FBSyxRQUFRLE1BQU0sQ0FBRyxF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
