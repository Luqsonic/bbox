import { useState, useEffect } from 'react';
import API from '../API';
// Helpers
import { isPersistedState } from '../helpers';

export const useMediaLinksFetch = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMediaLinks = async () => {
      try {
        setLoading(true);
        setError(false);

        const media = await API.fetchMediaLinks(movieId);
        
        setState({
          ...media
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(movieId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMediaLinks();
  }, [movieId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state };
};
