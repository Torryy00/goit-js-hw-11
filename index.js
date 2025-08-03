import{a as d,S as f,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",m="51504630-db9fa299e862fff98d3dacf4e";async function y(r,s=1,t=40){const n={key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:t,lang:"uk"};try{return(await d.get(p,{params:n})).data}catch(e){throw console.error("Помилка запиту до Pixabay API:",e.message),e}}const a=document.querySelector(".gallery"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(){const r=document.querySelector(".loader");r&&r.classList.remove("is-hidden")}function l(){const r=document.querySelector(".loader");r&&r.classList.add("is-hidden")}function b(r){if(!a)return;const s=r.map(t=>`
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
  `).join("");a.insertAdjacentHTML("beforeend",s),g.refresh()}function L(){a&&(a.innerHTML="")}const u=document.querySelector(".form"),w=u.elements["search-text"];u.addEventListener("submit",async r=>{r.preventDefault();const s=w.value.trim();if(s===""){c.warning({title:"Oops",message:"Please enter a search query!",position:"topRight"});return}L(),h();try{const t=await y(s);if(l(),t.hits.length===0){c.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(t.hits)}catch(t){l(),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}});
//# sourceMappingURL=index.js.map
