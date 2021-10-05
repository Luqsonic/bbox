import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  BBOX_URL
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  nfetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `https://www.blackboxcinema.site/bbox.php?page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMediaLinks: async movieId => {
    const endpoint = `https://www.blackboxcinema.site/fetchlinks.php?movie=${movieId}`;
    return await (await fetch(endpoint)).json();
  },
  fetchVideo: async linkId => {
    const endpoint = `https://www.blackboxcinema.site/vlink.php?link_id=${linkId}`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async movieId => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData)
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken })
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value })
      })
    ).json();

    return rating;
  },
  myMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${BBOX_URL}page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  /*fetchSimilar: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&page=1`;
    return await (await fetch(endpoint)).json();
  },*/
  fetchSimilar: async movieId => {
   var res = [];
   for (let step = 1; step < 8; step++) {
    //var fetch = "https://api.themoviedb.org/3/movie/436969/similar?api_key=444475b4c1d215a09c24f515f81bc480&language=en-US&page="+step;
        const endpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&page=${step}`;
        const ret =  await (await fetch(endpoint)).json();
        ret.results.forEach(myFunction);
    function myFunction(item){
        var year = parseInt(item.release_date.slice(0,4));
        var diff = 2021 - year;
        if(diff<13){
            res.push(item)
            }
        }
    }
      return res;
   },

  //Actor's info
  fetchActorInfo: async actorId => {
    const endpoint = `${API_URL}person/${actorId}?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },
  fetchActorMovies: async actorId => {
    const endpoint = `${API_URL}person/${actorId}/movie_credits?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
