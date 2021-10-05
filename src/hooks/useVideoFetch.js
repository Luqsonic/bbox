import { useState, useEffect } from 'react';
import API from '../API';
// Helpers
import { isPersistedState } from '../helpers';

export const useVideoFetch = (movieId,linkId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const video = await API.fetchVideo(linkId);


        setState({
          ...movie,
          video
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(linkId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchVideo();
  }, [movieId,linkId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(linkId, JSON.stringify(state));
  }, [linkId, state]);

  return { state, loading, error };
};
