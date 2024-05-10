import { Spinner } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer, isLoading, error } = useTrailers(gameId);

  if (error) return null;
  if (isLoading) return <Spinner />;
  const first = trailer?.results[0];

  return first ? (
    <video controls src={first.data[480]} poster={first.preview} />
  ) : null;
};

export default GameTrailer;
