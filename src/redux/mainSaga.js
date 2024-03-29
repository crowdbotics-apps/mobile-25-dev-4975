import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth4548Saga from '../features/EmailAuth4548/redux/sagas';
import EmailAuth4547Saga from '../features/EmailAuth4547/redux/sagas';
import EmailAuth4546Saga from '../features/EmailAuth4546/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth4548Saga,
EmailAuth4547Saga,
EmailAuth4546Saga,
EmailAuthSaga,
    
  ]);
}