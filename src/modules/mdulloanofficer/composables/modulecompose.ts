import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/loanofficer.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useLoanofficerModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
