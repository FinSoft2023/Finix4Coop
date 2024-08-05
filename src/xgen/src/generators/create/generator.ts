import { formatFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { CreateGeneratorSchema } from './schema';
import { readModuleBlueprint, generateRealmPages } from '../accelerator';

export async function createGenerator(
  tree: Tree,
  options: CreateGeneratorSchema,
) {
  const { projectRoot, blueprint, moduleOptions } = readModuleBlueprint(
    options.name,
  );
  const genOptions = {
    ...moduleOptions,
    ...options,
  };

  const pageRoot = `${projectRoot}/pages/${blueprint.name}`;
  generateRealmPages(
    blueprint.create,
    tree,
    path.join(__dirname, 'files'),
    `${pageRoot}/create`,
    genOptions,
  );

  await formatFiles(tree);
}

export default createGenerator;
