import { formatFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { EachGeneratorSchema } from './schema';
import { readModuleBlueprint, generateRealmPages } from '../accelerator';

export async function eachGenerator(tree: Tree, options: EachGeneratorSchema) {
  const { projectRoot, blueprint, moduleOptions } = readModuleBlueprint(
    options.name,
  );
  const genOptions = {
    ...moduleOptions,
    ...options,
  };

  const pageRoot = `${projectRoot}/pages/${blueprint.name}`;
  generateRealmPages(
    blueprint.each,
    tree,
    path.join(__dirname, 'files'),
    `${pageRoot}/[id]`,
    genOptions,
  );

  await formatFiles(tree);
}

export default eachGenerator;
