!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("iU1Pc");function c(e,o){return new Promise((function(n,t){var i=Math.random()>.3;setTimeout((function(){i?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}({inputeForm:document.querySelector(".form"),createPromisesBtn:document.querySelector(".form button")}).inputeForm.addEventListener("submit",(function(o){o.preventDefault();for(var n=o.currentTarget.elements,t=n.delay,i=n.step,l=n.amount,u=Number(t.value)+Number(i.value),a=1;a<=l.value;a+=1)c(a,u).then((function(o){var n=o.position,t=o.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")),e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"),{clickToClose:!0,timeout:3e3})})).catch((function(o){var n=o.position,t=o.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"),{clickToClose:!0,timeout:3e3}),console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.7bae1e22.js.map
