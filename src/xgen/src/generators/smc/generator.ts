import {
  formatFiles,
  Tree,
} from '@nx/devkit';
import { SmcGeneratorSchema } from './schema';
import { scanServerRoutes } from './smart-scan';

export async function smcGenerator(tree: Tree, options: SmcGeneratorSchema) {
  const contractRoot = 'contracts';
  const contractDirs = [tree.root];
  const routes = await scanServerRoutes(contractDirs, contractRoot);
  tree.write('smc.project_structure.json', JSON.stringify(routes, null, 2));

  await formatFiles(tree);
}

export default smcGenerator;
