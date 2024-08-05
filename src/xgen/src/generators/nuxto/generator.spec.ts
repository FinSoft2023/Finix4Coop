import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { nuxtoGenerator } from './generator';
import { NuxtoGeneratorSchema } from './schema';

describe('nuxto generator', () => {
  let tree: Tree;
  const options: NuxtoGeneratorSchema = { name: 'test', urlpath: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await nuxtoGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
