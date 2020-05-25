import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4547Reducer from '../features/EmailAuth4547/redux/reducers';
import EmailAuth4546Reducer from '../features/EmailAuth4546/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4547: EmailAuth4547Reducer,
EmailAuth4546: EmailAuth4546Reducer,
EmailAuth: EmailAuthReducer,

});