import { formatFiles, Tree } from '@nx/devkit';
import { FullmoduleGeneratorSchema } from './schema';
import { moduleGenerator } from '../module/generator';
import { modapiGenerator } from '../modapi/generator';
import { pagesGenerator } from '../pages/generator';

export async function fullmoduleGenerator(
  tree: Tree,
  options: FullmoduleGeneratorSchema,
) {
  await moduleGenerator(tree, options);
  await modapiGenerator(tree, options);
  await pagesGenerator(tree, options);

  await formatFiles(tree);
}

export default fullmoduleGenerator;
