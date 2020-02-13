import { useReducer, useEffect } from 'react';
import axios from "axios";
import {
  SET_APPLICATION_DATA
} from '../reducers/application';
import reducer from '../reducers/application';

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    catList: []
  });

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': '65cc8912-511b-47ae-8600-cee204a32217'
      }
    }).then(res => {
      const list = res.data;
      res.data.forEach(cat => {
        axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${cat.id}`)
          .then(item => {
            cat.image = item.data[0].url
            dispatch({ type: SET_APPLICATION_DATA, catList: list })
          })
      })
    })
  }, [])
  return { state }
}