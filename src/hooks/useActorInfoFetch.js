import { useState, useEffect } from 'react';
import API from '../API';
// Helpers
import { isPersistedState } from '../helpers';

export const useActorInfoFetch = actorId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActorInfo = async () => {
      try {
        setLoading(true);
        setError(false);

        const actor = await API.fetchActorInfo(actorId);
        const actor_movies = await API.fetchActorMovies(actorId);
        
        // Get directors only
        /*const backdrops = credits.crew.filter(
          member => member.job === 'Director'
        );*/

        setState({
          ...actor,
          movies: actor_movies.cast
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(actorId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchActorInfo();
  }, [actorId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(actorId, JSON.stringify(state));
  }, [actorId, state]);

  return { state, loading, error };
};
