import useData from '../useData';
import { Platform } from '../../services/game-service';

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
