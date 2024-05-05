(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
<div class="wrapper">
<div class="content">

	<header class="hero-section">
		<!-- data-lag=".5"-отставание объекта/ data-speed=".6" - скорость прокрутки объекта -->
		<img data-speed=".6" class="hero" src="images/hero.png" alt="main hero's face">
		<div class="container">
			<div data-speed=".75" class="main-header">
				<h1 class="main-title">creative scroll</h1>
			</div>
		</div>
	</header>

	<div class="portfolio">
		<div class="container">
			<main class="gallery">
				<div data-speed=".9" class="gallery__left">

					<img class="gallery__item" src="images/work/1.jpg" alt="alt">
					<img class="gallery__item" src="images/work/2.jpg" alt="alt">

					<div class="text-block gallery__item"> 
						<h2 class="text-block__h">Creative floating scroll with amazing parallax effect</h2>
						<p class="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</pc>
					</div>

					<img class="gallery__item" src="images/work/6.jpg" alt="alt">


				</div>
				<div data-speed="1.1" class="gallery__right">

					<div class="text-block gallery__item"> 
						<h2 class="text-block__h">Creative floating scroll with amazing parallax effect</h2>
						<p class="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</pc>
					</div>

					<img class="gallery__item" src="images/work/3.jpg" alt="alt">
					<img class="gallery__item" src="images/work/4.jpg" alt="alt">
					<img class="gallery__item" src="images/work/5.jpg" alt="alt">


				</div>
			</main>
		</div>
	</div>

</div>
</div>

`;gsap.registerPlugin(ScrollTrigger,ScrollSmoother);ScrollTrigger.isTouch!==1&&(ScrollSmoother.create({wrapper:".wrapper",content:".content",smooth:1.5,effects:!0}),gsap.fromTo(".hero-section",{opacity:1},{opacity:0,scrollTrigger:{trigger:".hero-section",start:"center",end:"820",scrub:!0}}),gsap.utils.toArray(".gallery__left .gallery__item").forEach(t=>{gsap.fromTo(t,{x:-50,opacity:0},{opacity:1,x:0,scrollTrigger:{trigger:t,start:"-800",end:"-100",scrub:!0}})}),gsap.utils.toArray(".gallery__right .gallery__item").forEach(t=>{gsap.fromTo(t,{x:50,opacity:0},{opacity:1,x:0,scrollTrigger:{trigger:t,start:"-800",end:"-100",scrub:!0}})}));
