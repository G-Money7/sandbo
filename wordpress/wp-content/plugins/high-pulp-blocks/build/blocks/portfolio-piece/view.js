document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".portfolio-piece").forEach((e=>{e.addEventListener("click",(()=>{!function(e){const n=document.createElement("div");n.innerHTML=`\n            <div class="modal-content">\n                <span class="close">&times;</span>\n                ${e}\n            </div>\n        `,n.className="modal",Object.assign(n.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"#fff",padding:"20px",zIndex:1e3,maxWidth:"80%",maxHeight:"80%",overflowY:"auto"}),n.querySelector(".close").addEventListener("click",(()=>{n.remove()})),document.body.appendChild(n)}(e.dataset.description)}))}))}));