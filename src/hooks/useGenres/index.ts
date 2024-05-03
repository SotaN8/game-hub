import { useEffect, useState } from 'react';
import { CanceledError } from '../../services/api-client';
import gameService, {
  Genre,
  FetchGenresResponse,
} from '../../services/genre-service';

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  // Get Genres
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getAll<FetchGenresResponse>();
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // return cancel();
  }, []);

  return { genres, setGenres, error, setError, isLoading };
};

export default useGenres;
