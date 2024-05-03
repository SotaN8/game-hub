import { Genre } from '../../services/genre-service';
import useData from '../useData';

const useGenres = () => useData<Genre>('/genres');

export default useGenres;
