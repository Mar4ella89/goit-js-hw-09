function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i);var r=i("eWCmQ");function l(e,o){return new Promise(((t,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}({inputeForm:document.querySelector(".form"),createPromisesBtn:document.querySelector(".form button")}).inputeForm.addEventListener("submit",(o=>{o.preventDefault();const{elements:{delay:t,step:n,amount:i}}=o.currentTarget,u=Number(t.value)+Number(n.value);for(let o=1;o<=i.value;o+=1)l(o,u).then((({position:o,delay:t})=>{console.log(`✅ Fulfilled promise ${o} in ${t}ms`),e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`,{clickToClose:!0,timeout:3e3})})).catch((({position:o,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`,{clickToClose:!0,timeout:3e3}),console.log(`❌ Rejected promise ${o} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.320c5e71.js.map
