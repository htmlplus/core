import { register } from '../register.js';

register('fade-out-left-big', [
  { offset: 0, opacity: '1' },
  { offset: 1, opacity: '0', transform: 'translate3d(-2000px, 0, 0)' }
]);
