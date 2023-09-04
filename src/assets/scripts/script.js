// Burger
// const burger = document.querySelector('.under__head__burger')
// const menu = document.querySelector('.under__head__menu')

// burger.addEventListener('click', () => {
// 	burger.classList.toggle('active')
// 	menu.classList.toggle('active')
// })

// Animations
gsap.registerPlugin(ScrollTrigger)

// Main
gsap.fromTo(
	'#mainText',
	{ opacity: 0 },
	{ opacity: 1, delay: 0.3, duration: 0.3, ease: 'expo.in' }
)

// Results
gsap.fromTo(
	'#exampleCard_1',
	{ y: 50, opacity: 0 },
	{ y: 0, opacity: 1, delay: 0.7, duration: 0.5, ease: 'expo.in' }
)
gsap.fromTo(
	'#exampleCard_2',
	{ y: 50, opacity: 0 },
	{ y: 0, opacity: 1, delay: 0.8, duration: 0.5, ease: 'expo.in' }
)
gsap.fromTo(
	'#exampleCard_3',
	{ y: 50, opacity: 0 },
	{ y: 0, opacity: 1, delay: 0.9, duration: 0.5, ease: 'expo.in' }
)

// gsap.fromTo(
// 	'.paper__image',
// 	{ x: -70, opacity: 0 },
// 	{
// 		x: 0,
// 		opacity: 1,
// 		delay: 0.5,
// 		duration: 0.5,
// 		ease: 'linear',
// 		scrollTrigger: {
// 			trigger: '.paper__text',
// 			start: '200px bottom',
// 		},
// 	}
// )
// gsap.fromTo(
// 	'.paper__text',
// 	{ x: 70, opacity: 0 },
// 	{
// 		x: 0,
// 		opacity: 1,
// 		delay: 0.5,
// 		duration: 0.5,
// 		ease: 'linear',
// 		scrollTrigger: {
// 			trigger: '.paper__text',
// 			start: '200px bottom',
// 		},
// 	}
// )

// Assortment
gsap.fromTo(
	'#assortmentCard_1',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.2,
		duration: 0.5,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.assortment__content',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'#assortmentCard_2',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.3,
		duration: 0.5,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.assortment__content',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'#assortmentCard_3',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.4,
		duration: 0.5,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.assortment__content',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'#assortmentCard_4',
	{ y: 50, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		delay: 0.5,
		duration: 0.5,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.assortment__content',
			start: '200px bottom',
		},
	}
)

// Partners
gsap.fromTo(
	'.partners__content',
	{ x: -200, opacity: 0 },
	{
		x: 0,
		opacity: 1,
		duration: 0.8,
		ease: 'linear',
		scrollTrigger: {
			trigger: '.partners__content',
			start: '200px bottom',
		},
	}
)

// Scetchbook
// gsap.fromTo(
// 	'.scetchbook__text',
// 	{ x: -70, opacity: 0 },
// 	{
// 		x: 0,
// 		opacity: 1,
// 		delay: 0.5,
// 		duration: 0.5,
// 		ease: 'linear',
// 		scrollTrigger: {
// 			trigger: '.scetchbook__text',
// 			start: '200px bottom',
// 		},
// 	}
// )
// gsap.fromTo(
// 	'.scetchbook__image',
// 	{ x: 70, opacity: 0 },
// 	{
// 		x: 0,
// 		opacity: 1,
// 		delay: 0.5,
// 		duration: 0.5,
// 		ease: 'linear',
// 		scrollTrigger: {
// 			trigger: '.scetchbook__text',
// 			start: '200px bottom',
// 		},
// 	}
// )
