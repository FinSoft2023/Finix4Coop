import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { ModuleGeneratorSchema } from './schema';
import { readModuleBlueprint } from '../accelerator';

export async function moduleGenerator(
  tree: Tree,
  options: ModuleGeneratorSchema,
) {
  const { projectRoot, moduleOptions } = readModuleBlueprint(options.name);
  const genOptions = {
    ...moduleOptions,
    ...options,
  };
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, genOptions);

  await formatFiles(tree);
}

export default moduleGenerator;
