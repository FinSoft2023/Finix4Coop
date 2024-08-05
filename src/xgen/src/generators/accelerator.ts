import { generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import type {
  ModuleBlueprint,
  ModuleRealmBlueprint,
  ModuleRealmItemBlueprint,
} from 'bigplatdefibp';

export function readModuleBlueprint(name: string) {
  const projectName = `mdul${name}`;
  const projectRoot = `modules/${projectName}`;
  const { moduleBlueprint } = require(`../../../blueprint/${name}.module`);
  const blueprint = moduleBlueprint as ModuleBlueprint;
  const moduleOptions = {
    projectName,
    urlpath: blueprint.name,
    pascalName: toPascalCase(blueprint.name),
  };

  return { projectName, projectRoot, blueprint, moduleOptions };
}

function toPascalCase(str: string) {
  return str.replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

export function generateRealmPages(
  realm: ModuleRealmBlueprint,
  tree: Tree,
  template: string,
  dir: string,
  options: object,
) {
  generateRealmItemPage(realm.root, tree, template, dir, options, 'index');
  realm.others.forEach((item) => {
    generateRealmItemPage(item, tree, template, dir, options);
  });
}

function generateRealmItemPage(
  item: ModuleRealmItemBlueprint,
  tree: Tree,
  template: string,
  dir: string,
  options: object,
  fname?: string,
) {
  const genOptions = {
    realmName: item.realmName,
    itemName: item.name,
    fname: fname ?? item.name,
    ...options,
  };
  generateFiles(tree, path.join(template, item.role), dir, genOptions);
}
