import{a as d,S as f,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="51504630-db9fa299e862fff98d3dacf4e";async function y(s,o=1,t=40){const n={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:t,lang:"uk"};try{return(await d.get(p,{params:n})).data}catch(e){throw console.error("Помилка запиту до Pixabay API:",e.message),e}}const i=document.querySelector(".gallery"),g=new f(".gallery a");function h(){document.querySelector(".loader").classList.remove("is-hidden")}function l(){document.querySelector(".loader").classList.add("is-hidden")}function b(s){if(!i)return;const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </li>
  `).join("");i.insertAdjacentHTML("beforeend",o),g.refresh()}function L(){i&&(i.innerHTML="")}const u=document.querySelector(".form"),w=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=w.value.trim();if(o===""){c.warning({title:"Oops",message:"Please enter a search query!",position:"topRight"});return}L(),h();try{const t=await y(o);if(l(),t.hits.length===0){c.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(t.hits)}catch(t){l(),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}});
//# sourceMappingURL=index.js.map
