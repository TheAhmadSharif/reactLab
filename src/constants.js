/* All aActions */

/*export default {
	CREATE_ACCOUNT: 'create account',
	WITHDRAW_FROM_ACCOUNT: 'withdraw from account',
	DEPOSIT_INTO_ACCOUNT: 'deposit into account'
};*/

/*export default function flipSwith(value) {
    return {
      type: 'FLIP_SWITCH',
      value
    }
 }*/


import {
  combineReducers,
  createStore,
} from 'redux';



// actions.js
export const activateGeod = geod => ({
  type: 'ACTIVATE_GEOD',
  geod,
});

export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
});