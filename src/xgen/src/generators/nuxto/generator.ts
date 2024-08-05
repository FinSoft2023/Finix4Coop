import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { NuxtoGeneratorSchema } from './schema';

export async function nuxtoGenerator(
  tree: Tree,
  options: NuxtoGeneratorSchema,
) {
  const projectRoot = `modules/${options.name}`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default nuxtoGenerator;
