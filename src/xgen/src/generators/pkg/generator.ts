import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { PkgGeneratorSchema } from './schema';

export async function pkgGenerator(tree: Tree, options: PkgGeneratorSchema) {
  const projectRoot = `pkgs/${options.name}`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default pkgGenerator;
