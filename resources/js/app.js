import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { createI18n } from 'vue-i18n';
import { createScrollRevealDirective } from 'vue-scroll-reveal'; // Import the directive

import axios from "axios";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
import en from './lang/en.json';
import ar from './lang/ar.json';

window.axios = axios;
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang')||'ar',
  messages: {
    en,
    ar,
  },
});

const slideUp = {
  distance: '10%',
  easing: 'ease-in',
  origin: 'bottom',
  duration: 500,
};
const fadeDown = {
  distance: '0',
  origin: 'top',
  opacity: 0,
  scale: 1,
  easing: 'ease-in-out',
  delay: 100,
  duration: 300,
  rotate: { x: 0, y: 0, z: 0 },
};
const fadeUp = {
  distance: '30%',
  origin: 'bottom',
  opacity: 1,
  scale: 1,
  easing: 'ease-in',
  delay: 100,
  duration: 600,
  rotate: { x: 0, y: 0, z: 0 },
};
const ZoomIn = {
  opacity:1,
  scale: 0,
  easing: 'ease-in',
  delay: 100,
  duration: 1000,
};
const vScrollReveal = createScrollRevealDirective(slideUp);
const vScrollRevealFadeDown = createScrollRevealDirective(fadeDown);
const vScrollRevealFadeUp = createScrollRevealDirective(fadeUp);
const vScrollRevealZoomIn = createScrollRevealDirective(ZoomIn);


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(i18n)
            .use(ZiggyVue, Ziggy)
            .directive('scroll-reveal', vScrollReveal) // Register the vScrollReveal directive
            .directive('scroll-reveal-fade-up', vScrollRevealFadeUp) // Register the vScrollRevealFadeDown directive
            .directive('scroll-reveal-fade-down', vScrollRevealFadeDown) // Register the vScrollRevealFadeDown directive
            .directive('scroll-reveal-zoom-in', vScrollRevealZoomIn) // Register the vScrollRevealFadeDown directive
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
