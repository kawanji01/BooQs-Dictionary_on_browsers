(()=>{function e(){let e=document.getElementById("booqs-dict-extension-wrapper");if(null==e){jsFrame=new JSFrame({horizontalAlign:"right"});const i='\n        <div id="booqs-dict-extension-wrapper">\n        <a>\n        <div id="booqs-dict-logged-in-user" style="font-size: 10px;">　</div>\n        </a>\n        <form method="get" action=""><input type="text" name="keyword" id="booqs-dict-search-form"></form>\n        <div id="booqs-dict-search-status">\n        "<span id="booqs-dict-search-keyword" style="font-size: 12px;"></span>"<span id="booqs-dict-search-status-text"></span>\n        </div>\n        <div id="search-booqs-dict-results"></div>\n        </div>';let s=jsFrame.create({name:"booqs-dict-window",title:"BooQs",width:320,height:480,movable:!0,resizable:!0,appearanceName:"material",appearanceParam:{border:{shadow:"2px 2px 10px  rgba(0, 0, 0, 0.5)",width:0,radius:6},titleBar:{name:"booqs-dict-window-bar",color:"white",background:"#273132",leftMargin:16,height:30,fontSize:14,buttonWidth:36,buttonHeight:16,buttonColor:"white",buttons:[{fa:"fas fa-times",name:"closeButton",visible:!0}]}},style:{overflow:"auto"},html:i});s.setPosition(-20,100,["RIGHT_TOP"]),s.show();let a=document.querySelector("#booqs-dict-search-form");document.addEventListener("mouseup",(function(e){t(),e.stopPropagation()}),!1),(n=a).addEventListener("keyup",(function(){let e=n.value,t=document.querySelector("#booqs-dict-search-keyword").textContent;setTimeout((()=>{let n=document.querySelector("#booqs-dict-search-form").value;e==n&&e!=t&&e.length<1e3?o(e):e.length>=1e3&&(document.querySelector("#search-booqs-dict-results").innerHTML='<p style="color: #EE5A5A; font-size: 12px;">検索できるのは1000文字未満までです。</p>')}),500)})),function(e){e.addEventListener("keydown",(function(e){"Enter"==e.key&&e.preventDefault()}))}(a),e=s.$("#booqs-dict-extension-wrapper"),e.parentNode.parentNode.parentNode.parentNode.parentNode.style.zIndex="2147483647",t(),function(){let e=chrome.runtime.connect({name:"inspectCurrentUser"});e.postMessage({action:"inspectCurrentUser"}),e.onMessage.addListener((function(e){let t=document.querySelector("#booqs-dict-logged-in-user");e.data?chrome.storage.local.get(["booqsDictUserName"],(function(e){t.innerHTML=`<i class="fal fa-user"></i> ${e.booqsDictUserName}`})):t.innerHTML='<i class="fal fa-user"></i> ログインする'})),document.querySelector("#booqs-dict-logged-in-user").addEventListener("click",(function(){chrome.runtime.sendMessage({action:"openOptionsPage"})}))}()}else e.parentNode.parentNode.parentNode.parentNode.parentNode.remove();var n}function t(){const e=window.getSelection().toString();let t,n=document.querySelector("#booqs-dict-search-keyword");if(t=n?n.textContent:"",e.length>=1e3)document.querySelector("#search-booqs-dict-results").innerHTML='<p style="color: #EE5A5A; font-size: 12px;">検索できるのは1000文字未満までです。</p>';else if(""!=e&&t!=e&&e.length<1e3){let t=document.querySelector("#booqs-dict-search-form");t&&(t.value=e,o(e))}}function o(e){let t;document.querySelector("#booqs-dict-search-keyword").textContent=e,e.length<50&&e.length>0?document.querySelector("#booqs-dict-search-status-text").textContent="の検索結果":document.querySelector("#booqs-dict-search-status-text").textContent="",document.querySelector("#search-booqs-dict-results").innerHTML='<div class="center"><div class="lds-ripple-booqs-dict"><div></div><div></div></div></div>',t=e.length>50?encodeURIComponent(e.slice(0,50)):encodeURIComponent(e);let a=chrome.runtime.connect({name:"search"});a.postMessage({action:"search",keyword:t}),a.onMessage.addListener((function(e){!function(e){let t=document.querySelector("#search-booqs-dict-results");t.innerHTML="",chrome.storage.local.get(["booqsDictToken"],(function(a){let r=a.booqsDictToken;if(console.log(e),null!=e.data)e.data.forEach((function(e,o,a){let c,d=function(e){if(null==e)return'<div class="booqs-dict-word-tags-wrapper"></div>';let t=e.split(","),o=[];if(t.includes("ngsl")){let e='<a href="https://www.booqs.net/ja/chapters/c63ab6e5" target="_blank" rel="noopener" class="booqs-dict-word-tag"><i class="fal fa-tag"></i>基礎英単語</a>';o.push(e)}if(t.includes("nawl")){let e='<a href="https://www.booqs.net/ja/chapters/5cedf1da" target="_blank" rel="noopener" class="booqs-dict-word-tag"><i class="fal fa-tag"></i>学術頻出語</a>';o.push(e)}if(t.includes("tsl")){let e='<a href="https://www.booqs.net/ja/chapters/26c399f0" target="_blank" rel="noopener" class="booqs-dict-word-tag"><i class="fal fa-tag"></i>TOEIC頻出語</a>';o.push(e)}if(t.includes("bsl")){let e='<a href="https://www.booqs.net/ja/chapters/4d46ce7f" target="_blank" rel="noopener" class="booqs-dict-word-tag"><i class="fal fa-tag"></i>ビジネス頻出語</a>';o.push(e)}if(t.includes("phrase")){let e='<a href="https://www.booqs.net/ja/chapters/c112b566" target="_blank" rel="noopener" class="booqs-dict-word-tag"><i class="fal fa-tag"></i>頻出英熟語</a>';o.push(e)}if(t.includes("phave")){let e='<a href="https://www.booqs.net/ja/chapters/3623e0d5" target="_blank" rel="noopener" class="booqs-dict-word-tag"><i class="fal fa-tag"></i>頻出句動詞</a>';o.push(e)}return`<div class="booqs-dict-word-tags-wrapper">${o.join("")}</div>`}(e.tags),l=`https://www.booqs.net/ja/words/${e.id}`,u=`<div class="booqs-dict-entry">\n                <span>${e.entry}</span><button class="booqs-dict-speech-btn"><i class="fas fa-volume-up"></i></button>\n                <a href="${l}" target="_blank" rel="noopener" style="color: #6e6e6e;"><i class="far fa-external-link-alt" style="float: right; margin-top: 4px; margin-right: 8px;"></i></a>\n                </div>`,p='<div class="booqs-dict-meaning">'+e.meaning+"</div>";c=r?`<div class="booqs-dict-async-review-btn booqs-dict-review-btn" id="booqs-dict-review-${e.id}" style="font-weight: bold;">復習する</div><div class="booqs-dict-review-form" id="booqs-dict-review-form-${e.id}"></div>`:`<div class="booqs-dict-review-btn not-logged-in-review-btn-${e.id}" style="font-weight: bold;">復習する</div></a>`;let b=`<div class="booqs-dict-explanation">${n(e.explanation)}</div>`,v=`<div class="booqs-dict-explanation">${n(e.sentence.original)}</div><div class="booqs-dict-explanation">${e.sentence.translation}</div>`;sentenceReviewBtn=r?`<div class="booqs-dict-async-review-btn booqs-dict-review-btn" id="booqs-dict-sentence-review-${e.sentence_id}" style="font-weight: bold;">例文を復習する</div><div class="booqs-dict-review-form" id="booqs-dict-sentence-review-form-${e.sentence_id}"></div>`:`<div class="booqs-dict-review-btn not-logged-in-review-btn-${e.id}" style="font-weight: bold;">例文を復習する</div></a>`;let m=d+u+p+c+'<div style="text-align: left; margin-top: 16px"><div class="booqs-dict-label">解説</div></div>'+b+'<div style="text-align: left; margin-top: 16px"><div class="booqs-dict-label">例文</div></div>'+v+sentenceReviewBtn+`<a href="${l+"/edit"}" target="_blank" rel="noopener" class="booqs-dict-link-to-improve">この項目を改善する</a>`;t.insertAdjacentHTML("beforeend",m),r?function(e){let t=e.id,o=document.querySelector("#booqs-dict-review-"+t),n=o.nextSibling;o.addEventListener("click",(function(){n.innerHTML='<div class="center"><div class="lds-ripple-booqs-dict"><div></div><div></div></div></div>',function(e){let t=document.querySelector("#booqs-dict-review-form-"+e),o=chrome.runtime.connect({name:"renderReviewForm"});o.postMessage({action:"renderReviewForm",wordId:e}),o.onMessage.addListener((function(e){let o=e.data;if("401"==o.status)t.innerHTML=`<p style="font-size: 12px; margin: 16px 0; color: #ee5a5aff;">${o.message}</p>`;else{let e=o.data;t.innerHTML=function(e){let t,o=e.word_id;return t=e.reminder_id?`\n        <div class="boqqs-dict-reminder-status">\n        <p>復習予定：${e.review_day}</p>\n        <p>復習設定：${i(e.setting)}に復習する</p>  \n        <div class="booqs-dict-destroy-review-btn" id="booqs-dict-destroy-review-btn-${o}"><i class="far fa-trash"></i> 復習設定を削除する</div>\n        </div>      \n<div class="booqs-dict-select-form cp_sl01">\n<select id="booqs-dict-select-form-${o}" style="height: 40px;" required>\n\t${s(e)}\n</select>\n</div>\n<button class="booqs-dict-submit-review-btn" id="booqs-dict-update-review-btn-${o}">設定する</button>\n<div class="booqs-dict-recommend-premium" id="booqs-dict-recommend-premium-${o}"></div>`:`      \n<div class="booqs-dict-select-form cp_sl01">\n<select id="booqs-dict-select-form-${o}" style="height: 40px;" required>\n\t${s(e)}\n</select>\n</div>\n<button class="booqs-dict-submit-review-btn" id="booqs-dict-create-review-btn-${o}">設定する</button>\n<div class="booqs-dict-recommend-premium" id="booqs-dict-recommend-premium-${o}"></div>`,t}(e),function(e){let t=e.word_id,o=e.quiz_id;e.reminder_id?(function(e,t){let o=document.querySelector("#booqs-dict-update-review-btn-"+e);o.addEventListener("click",(function(){o.textContent="設定中...";let n=document.querySelector("#booqs-dict-select-form-"+e).value,s=chrome.runtime.connect({name:"updateReminder"});s.postMessage({action:"updateReminder",quizId:t,settingNumber:n}),s.onMessage.addListener((function(e){let t=e.data;if("401"==t.status)return void(o.textContent=t.message);let n=t.data,s=document.querySelector("#booqs-dict-review-form-"+n.word_id);s.innerHTML="",s.previousSibling.textContent=`${i(n.setting)}に復習する`}))}))}(t,o),function(e,t){let o=document.querySelector(`#booqs-dict-destroy-review-btn-${e}`);o.addEventListener("click",(function(){o.textContent="設定中...";let e=chrome.runtime.connect({name:"destroyReminder"});e.postMessage({action:"destroyReminder",quizId:t}),e.onMessage.addListener((function(e){let t=e.data;if("401"==t.status)return void(o.textContent=t.message);let n=t.data,i=document.querySelector("#booqs-dict-review-form-"+n.word_id);i.innerHTML="",i.previousSibling.textContent="復習する"}))}))}(t,o)):function(e,t){let o=document.querySelector("#booqs-dict-create-review-btn-"+e);o.addEventListener("click",(function(){o.textContent="設定中...";let n=document.querySelector("#booqs-dict-select-form-"+e).value,s=chrome.runtime.connect({name:"createReminder"});s.postMessage({action:"createReminder",quizId:t,settingNumber:n}),s.onMessage.addListener((function(e){let t=e.data;if("401"==t.status)return void(o.textContent=t.message);let n=t.data,s=document.querySelector("#booqs-dict-review-form-"+n.word_id);s.innerHTML="",s.previousSibling.textContent=`${i(n.setting)}に復習する`}))}))}(t,o),"false"==e.premium&&function(e){const t=document.querySelector(`#booqs-dict-recommend-premium-${e}`),o=t.previousElementSibling,n=document.querySelector(`#booqs-dict-select-form-${e}`);let i=Number(n.value);const s='<p>プレミアム会員になることで、復習を自由に設定できるようになります！</p>\n    <p><a href="https://www.booqs.net/ja/select_plan" target="_blank" rel="noopener"><i class="far fa-crown"></i> プレミアムプランの詳細を見る</a></p>';0!=i&&(o.classList.add("hidden"),t.innerHTML=s),n.addEventListener("change",(function(){i=Number(this.value),0==i?(o.classList.remove("hidden"),t.innerHTML=""):(o.classList.add("hidden"),t.innerHTML=s)}))}(t)}(e)}}))}(t)}));let a=e.sentence_id;if(a){let e=document.querySelector("#booqs-dict-sentence-review-"+a),t=e.nextSibling;e.addEventListener("click",(function(){t.innerHTML='<div class="center"><div class="lds-ripple-booqs-dict"><div></div><div></div></div></div>'}))}}(e):document.querySelectorAll(`.not-logged-in-review-btn-${e.id}`).forEach((function(e,t,o){e.addEventListener("click",(function(){chrome.runtime.sendMessage({action:"openOptionsPage"})}))}))})),function(e){const t=e.querySelectorAll(".booqs-notation-link"),n=document.querySelector("#booqs-dict-search-form");t.forEach((function(e){e.addEventListener("click",(function(e){let t=e.target.dataset.value;return n.value!=t&&(n.value=t,o(t)),!1}))}))}(t),function(e){const t=e.querySelectorAll(".booqs-dict-speech-btn");speechSynthesis.getVoices(),t.forEach((function(e){e.addEventListener("click",(function(t){speechSynthesis.cancel();let o=e.previousElementSibling.textContent,n=new SpeechSynthesisUtterance,i=speechSynthesis.getVoices().find((function(e){return"Samantha"===e.name}));return n.voice=i,n.lang="en-US",n.volume=1,n.rate=1,n.pitch=1,n.text=o,speechSynthesis.speak(n),!1}))}))}(t);else if(null==e.status){let e='<div class="booqs-dict-meaning" style="margin: 24px 0;">大変申し訳ございません。辞書にアクセスできませんでした。<a id="booqs-dict-option-btn" style="color: #27ae60;">こちら</a>にアクセスした後、再び検索してください。</div>';t.insertAdjacentHTML("afterbegin",e),document.querySelector("#booqs-dict-option-btn").addEventListener("click",(function(){chrome.runtime.sendMessage({action:"openOptionsPage"})}))}else{let e,o,n,i=document.querySelector("#booqs-dict-search-keyword").textContent;i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"),i.length<50&&i.length>0?(e=`<div class="booqs-dict-meaning" style="margin: 24px 0;">${i}は辞書に登録されていません。</div>`,o=`<a href="https://www.booqs.net/ja/words/new?dict_uid=c6bbf748&text=${i}" target="_blank" rel="noopener" style="text-decoration: none;">\n                <div class="booqs-dict-review-btn" style="font-weight: bold;">辞書に登録する</div></a>`):(e="",o=""),n=r?'<div id="booqs-dict-translation-form">\n                <div id="booqs-dict-google-translation"><div class="booqs-dict-review-btn" style="font-weight: bold;">Googleで翻訳する</div></div>\n                <div id="booqs-dict-deepl-translation"><div class="booqs-dict-review-btn" style="font-weight: bold;">DeepLで翻訳する</div></div>\n                </div>':'<div id="booqs-dict-translation-form">\n                <div id="booqs-dict-google-translation"><div class="booqs-dict-review-btn" style="font-weight: bold;">Googleで翻訳する</div></div>\n                <div id="booqs-dict-deepl-translation"><div class="booqs-dict-review-btn" style="font-weight: bold;">DeepLで翻訳する</div></div>\n                <p><a id="booqs-dict-login-for-translation" style="color: #27ae60;">ログイン</a>することで、機械翻訳が利用できるようになります。</p>\n                </div>';let s=e+o+n;t.insertAdjacentHTML("afterbegin",s),function(e,t){const o=document.querySelector("#booqs-dict-google-translation"),n=document.querySelector("#booqs-dict-deepl-translation");e?(o.addEventListener("click",(function(){o.innerHTML='<div class="center"><div class="lds-ripple-booqs-dict"><div></div><div></div></div></div>';let e=chrome.runtime.connect({name:"googleTranslation"});e.postMessage({action:"googleTranslation",keyword:t}),e.onMessage.addListener((function(e){let t=e.data;if("200"==t.status){let e=`<p style="font-size: 14px; color: #27ae60; margin-top: 24px;"><b>Google翻訳：</b></p>\n                    <p style="font-size: 14px; color: #6e6e6e; margin-bottom: 16px;">${t.data.translation}</p>`;o.innerHTML=e}else{let e=`<p style="margin: 24px 0;"><a href="https://www.booqs.net/ja/select_plan" target="_blank" rel="noopener" style="font-size: 14px; color: #27ae60;">${t.message}</a></p>`;o.innerHTML=e}}))})),n.addEventListener("click",(function(){n.innerHTML='<div class="center"><div class="lds-ripple-booqs-dict"><div></div><div></div></div></div>';let e=chrome.runtime.connect({name:"deeplTranslation"});e.postMessage({action:"deeplTranslation",keyword:t}),e.onMessage.addListener((function(e){let t=e.data;if("200"==t.status){let e=`<p style="font-size: 14px; color: #27ae60; margin-top: 24px;"><b>DeepL翻訳：</b></p>\n                    <p style="font-size: 14px; color: #6e6e6e; margin-bottom: 16px;">${t.data.translation}</p>`;n.innerHTML=e}else{let e=`<p style="margin: 24px 0;"><a href="https://www.booqs.net/ja/select_plan" target="_blank" rel="noopener" style="font-size: 14px; color: #27ae60;">${t.message}</a></p>`;n.innerHTML=e}}))}))):(o.addEventListener("click",(function(){chrome.runtime.sendMessage({action:"openOptionsPage"})})),n.addEventListener("click",(function(){chrome.runtime.sendMessage({action:"openOptionsPage"})})),document.querySelector("#booqs-dict-login-for-translation").addEventListener("click",(function(){chrome.runtime.sendMessage({action:"openOptionsPage"})})))}(r,i)}}))}(e.data)}))}function n(e){let t=e.replace(/\r?\n/g,"<br>").split(/(\[{2}.*?\]{2})/),o=[];return t.forEach((function(e,t,n){if(null==e.match(/\[{2}.+\]{2}/))o.push(e);else{let t;t=null==(e=(e=e.replace(/\[{2}/g,"").replace(/\]{2}/g,"")).split(/\|/,2))[1]?`<a class="booqs-notation-link" data-value="${e[0]}">${e[0]}</a>`:`<a class="booqs-notation-link" data-value="${e[1]}">${e[0]}</a>`,o.push(t)}})),o.join("")}function i(e){let t="";switch(e=Number(e)){case 0:t="明日";break;case 1:t="3日後";break;case 2:t="１週間後";break;case 3:t="２週間後";break;case 4:t="３週間後";break;case 5:t="１ヶ月後";break;case 6:t="２ヶ月後";break;case 7:t="３ヶ月後";break;case 8:t="６ヶ月後";break;case 9:t="1年後"}return t}function s(e){let t=0;e.setting&&(t=Number(e.setting));let o="";for(let n=0;n<10;n++){let s="";0!=n&&"false"==e.premium&&(s="🔒 "),o+=n==t?`<option value="${n}" selected>${s}${i(n)}に復習する</option>`:`<option value="${n}">${s}${i(n)}に復習する</option>`}return o}chrome.runtime.onMessage.addListener((function(t,o,n){switch(t){case"Action":e();break;case"Updated":chrome.storage.local.get(["booqsDictPopupDisplayed"],(function(t){if(!1===t.booqsDictPopupDisplayed||""===t.booqsDictPopupDisplayed)return;document.addEventListener("selectionchange",(()=>{const t=document.querySelector("#booqs-dict-extension-wrapper"),o=window.getSelection().toString();let n=document.querySelector("#booqs-dict-popup-to-display-window");if(n&&n.remove(),null==t&&""!=o){const t=window.getSelection().getRangeAt(0),o=document.createRange();if(0==t.endOffset)return;o.setStart(t.endContainer,t.endOffset-1),o.setEnd(t.endContainer,t.endOffset);const i=o.getBoundingClientRect();if(0==i.top&&0==i.left)return;const s=`<button id="booqs-dict-popup-to-display-window" style="position: absolute; width: 32px; height: 32px; background-color: #273132; top: ${window.pageYOffset+i.top+32}px; left: ${window.pageXOffset+i.left}px; z-index: 2147483647; border: 0; border-radius: 4px; padding: 0; margin: 0;">\n                    <img src="https://kawanji.s3.ap-northeast-1.amazonaws.com/assets/BooQs_logo.svg" alt="BooQs Icon" style="height: 24px;width: 24px; margin: 4px 2px 2px 3px; padding: 0;">\n                    </button>`;document.querySelector("html body").insertAdjacentHTML("beforeend",s),n=document.querySelector("button#booqs-dict-popup-to-display-window"),n.addEventListener("click",(function(){e(),n.remove()}))}}))}))}}))})();