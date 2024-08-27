import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/trainingmembers.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useTrainingmembersModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
