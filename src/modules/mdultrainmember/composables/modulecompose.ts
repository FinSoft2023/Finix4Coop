import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/trainmember.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useTrainmemberModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
