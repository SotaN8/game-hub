import { useEffect, useState } from 'react';
import { CanceledError } from '../../services/api-client';
import gameService, {
  Game,
  FetchGamesResponse,
} from '../../services/game-service';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  // Get Games
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getAll<FetchGamesResponse>();
    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    setLoading(false);
    // return cancel();
  }, []);

  return { games, error, isLoading, setError, setGames };
};

export default useGames;
