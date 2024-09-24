import { registerModule } from 'bigplatdefibp';
import { moduleBlueprint } from '../../../blueprint/directorfast.module';

const moduleRoot = registerModule(moduleBlueprint);

export const useDirectorfastModule = () => {
  setActiveModule(moduleRoot);
  return moduleRoot;
};
