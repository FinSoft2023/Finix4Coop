import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { ModapiGeneratorSchema } from './schema';
import type { ModuleRealmBlueprint } from 'bigplatdefibp';
import { readModuleBlueprint } from '../accelerator';

export async function modapiGenerator(
  tree: Tree,
  options: ModapiGeneratorSchema,
) {
  const { projectRoot, blueprint, moduleOptions } = readModuleBlueprint(
    options.name,
  );
  const serverRoot = `${projectRoot}/server`;
  const apiRoot = `${serverRoot}/api`;
  const genOptions = {
    ...moduleOptions,
    ...options,
  };
  generateFiles(tree, path.join(__dirname, 'files'), apiRoot, genOptions);

  const moduleApiRoute = `${apiRoot}/${blueprint.name}`;
  generateListOtherApi(
    blueprint.list,
    tree,
    __dirname,
    moduleApiRoute,
    genOptions,
  );
  generateCreateOtherApi(
    blueprint.create,
    tree,
    __dirname,
    moduleApiRoute,
    genOptions,
  );
  generateEachOtherApi(
    blueprint.each,
    tree,
    __dirname,
    moduleApiRoute,
    genOptions,
  );
  await formatFiles(tree);
}

export default modapiGenerator;

function generateListOtherApi(
  realm: ModuleRealmBlueprint,
  tree: Tree,
  template: string,
  dir: string,
  options: ModapiGeneratorSchema,
) {
  generateRealmApi(
    realm,
    tree,
    path.join(template, 'list'),
    `${dir}/_by`,
    options,
  );
}

function generateCreateOtherApi(
  realm: ModuleRealmBlueprint,
  tree: Tree,
  template: string,
  dir: string,
  options: ModapiGeneratorSchema,
) {
  generateRealmApi(
    realm,
    tree,
    path.join(template, 'create'),
    `${dir}/create`,
    options,
  );
}

function generateEachOtherApi(
  realm: ModuleRealmBlueprint,
  tree: Tree,
  template: string,
  dir: string,
  options: ModapiGeneratorSchema,
) {
  generateRealmApi(
    realm,
    tree,
    path.join(template, 'each'),
    `${dir}/[id]`,
    options,
  );
}

function generateRealmApi(
  realm: ModuleRealmBlueprint,
  tree: Tree,
  template: string,
  dir: string,
  options: ModapiGeneratorSchema,
) {
  realm.others.forEach((item) => {
    const pathUrl = item.pathUrl;
    const subName = item.subName;
    if (!!pathUrl.get) {
      const fname = path.basename(pathUrl.get, path.extname(pathUrl.get));
      const itemOptions = {
        fname,
        subName,
        ...options,
      };
      let srcFolder = `${template}-get`;
      switch (item.role) {
        case 'addsub':
        case 'confirm':
        case 'steps':
          srcFolder = srcFolder + item.role;
          break;

        default:
          break;
      }
      generateFiles(tree, srcFolder, dir, itemOptions);
    }
    if (!!pathUrl.post) {
      const fname = path.basename(pathUrl.post, path.extname(pathUrl.post));
      const itemOptions = {
        fname,
        subName,
        ...options,
      };
      let srcFolder = `${template}-post`;
      switch (item.role) {
        case 'addsub':
        case 'confirm':
        case 'edit':
          srcFolder = srcFolder + item.role;
          break;

        default:
          break;
      }
      generateFiles(tree, srcFolder, dir, itemOptions);
    }
  });
}
