// modules
import pageInit from './modules/page-init.js';
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll.js';
import animTextAppearance from './modules/anim-text-appearance.js';
import svgStrokeFill from "./modules/svg-stroke-fill.js";
import timer from "./modules/timer.js";

// init modules
pageInit();
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

animTextAppearance();
svgStrokeFill();
timer();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
