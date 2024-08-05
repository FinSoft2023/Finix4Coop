import { formatFiles, Tree } from '@nx/devkit';
import { PagesGeneratorSchema } from './schema';
import { listGenerator } from '../list/generator';
import { createGenerator } from '../create/generator';
import { eachGenerator } from '../each/generator';

export async function pagesGenerator(
  tree: Tree,
  options: PagesGeneratorSchema,
) {
  await listGenerator(tree, options);
  await createGenerator(tree, options);
  await eachGenerator(tree, options);

  await formatFiles(tree);
}

export default pagesGenerator;
