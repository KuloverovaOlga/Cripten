// import "@babel/polyfill"
import burgerMeny from './modules/burger';
import accordeon from './modules/accordeon';
import swiper from './modules/sviper';
import progressBar from './modules/progressBar';
import tabs from './modules/tabs';
import inputNumber from './modules/inputNumber';
import select from './modules/select';
import video from './modules/video';
import scroll from './modules/scroll';


burgerMeny()
accordeon();
swiper();
progressBar();
tabs();
inputNumber('#power', 15, 1, 0, 100);
inputNumber('#w', 0, 1, 0, 100);
inputNumber('#kwh', 0, 1, 0, 100);
inputNumber('#pool', 1, 1, 0, 100);
select();
video();
scroll();

