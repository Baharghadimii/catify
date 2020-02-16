import { takeEvery, call, put } from "redux-saga/effects";
import axios from 'axios';
import { SET_APPLICATION_DATA, API_ERROR } from '../constants/action-types';

export default function* watcherSaga() {
  yield takeEvery(SET_APPLICATION_DATA, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: SET_APPLICATION_DATA, payload });
  } catch (e) {
    yield put({ type: API_ERROR, payload: e });
  }
}

function getData() {
  return axios.get('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': '65cc8912-511b-47ae-8600-cee204a32217'
    }
  }).then(res => {
    const list = res.data;
    res.data.forEach(cat => {
      axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${cat.id}`)
        .then(item => {
          cat.image = item.data[0].url
          return list;
        })
        .catch(err => err)
    })
  })
}