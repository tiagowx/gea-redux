import {createStore} from 'redux';

import reducers from './reducer';

export default createStore([reducers])




// export function addTodo(text) {
//   return {
//     type: 'ADD_TODO',
//     payload:{
//       id: Math.randon(),
//       name: text
//     }
//   }
// }