import {NEWS_URL} from '../Url';
import {get, post} from '../main';

const getNewsApi = body => {
  const TodosUrl = NEWS_URL + body;
  console.log('get news api ', TodosUrl);
  return get(TodosUrl);
};

const getNewsLocalApi = detailUrl => {
  const newsUrl = +detailUrl;
  console.log('get newslocal api ', newsUrl);
  return get(newsUrl);
};

export default {getNewsApi, getNewsLocalApi};
