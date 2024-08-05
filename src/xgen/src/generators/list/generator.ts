import { formatFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { ListGeneratorSchema } from './schema';
import { readModuleBlueprint, generateRealmPages } from '../accelerator';

export async function listGenerator(tree: Tree, options: ListGeneratorSchema) {
  const { projectRoot, blueprint, moduleOptions } = readModuleBlueprint(
    options.name,
  );
  const genOptions = {
    ...moduleOptions,
    ...options,
  };

  const pageRoot = `${projectRoot}/pages/${blueprint.name}`;
  generateRealmPages(
    blueprint.list,
    tree,
    path.join(__dirname, 'files'),
    pageRoot,
    genOptions,
  );

  await formatFiles(tree);
}

export default listGenerator;
