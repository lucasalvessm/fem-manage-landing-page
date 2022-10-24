const primaryHeader = document.querySelector('.primary-header')!;
const navToggle = document.querySelector('.mobile-nav-toggle')!;
const primaryNav: HTMLElement = document.querySelector('.primary-navigation')!;

declare const A11YSlider: any;

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible')
        ? navToggle.setAttribute('aria-expanded', 'false')
        : navToggle.setAttribute('aria-expanded', 'true');
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
});

const slider: any = new A11YSlider(document.querySelector(".slider"), {
    adaptiveHeight: false,
    dots: true,
    arrows: false,
    responsive: {
        480: {
            dots: false,
        }
    }
});

console.log(slider);

export { };