import { z } from 'zod';

export type FieldDefinition = {
  model: string;
  component: string;
  spec: object;
  label: string;
  hint?: string;
  placeholder?: string;
  icon?: string;
  choices?: string;
};

export type DataDefinition = (FieldDefinition | FieldDefinition[])[];

export type NestedInformationDefinition = {
  name: string;
  ordinal?: '1' | '*';
  component: string;
  fields: DataDefinition;
};

export type ReferenceCollectionDefinition = {
  name: string;
  // ordinal: '1' | '*';
  component: string;
  link2: string;
  look4: string;
  // entity: EntityBlueprint;
  pick?: string[]; // Pick the fields to be presented, if not provided, all fields will be presented.
};

export type EntityDefinition = {
  name: string;
  root: DataDefinition;
  sub?: NestedInformationDefinition[];
  links?: ReferenceCollectionDefinition[];
};

export type NestedInformationBlueprint = {
  name: string;
  ordinal: '1' | '*';
  component: string;
  fields: DataDefinition;
  schema: z.Schema<any>;
};

export type ReferenceCollectionBlueprint = {
  name: string;
  // ordinal: '1' | '*';
  component: string;
  link2: string;
  look4: string;
  // entity: EntityBlueprint;
  pick: string[]; // Pick the fields to be presented, if not provided, all fields will be presented.
};

// TODO: Polishing
export type EntityBlueprint = {
  name: string;
  root: DataDefinition;
  schema: z.Schema<any>;
  sub?: NestedInformationBlueprint[];
  links?: ReferenceCollectionBlueprint[];
};

export type ModuleRealmItemDefinition = {
  label?: string;
  role?: string;
  entity: EntityBlueprint;
  subName?: string; // Sub name for the data
  smartContract?: string;
  next?: string;
  post?: string | boolean; // Will make the post request
  getnot?: boolean; // Don't need to make the get request
  pick?: string[]; // Pick the fields to be presented, if not provided, all fields will be presented.
  links?: string[];
};

export type ModuleRealmDefinition = {
  root: ModuleRealmItemDefinition | EntityBlueprint;
  [key: string]: ModuleRealmItemDefinition | EntityBlueprint | undefined;
};

export type BlueprintModuleDefinition = {
  list: ModuleRealmDefinition;
  create: ModuleRealmDefinition;
  each: ModuleRealmDefinition;
};

export type ModuleBlueprint = {
  name: string;
  // TODO: Will be changed to proccessed type
  // _definition: BlueprintModuleDefinition;
  list: ModuleRealmBlueprint;
  create: ModuleRealmBlueprint;
  each: ModuleRealmBlueprint;
  _refMap: Map<string, ModuleRealmItemBlueprint>;
};

function defineEntity(definition: EntityDefinition): EntityBlueprint {
  const _definition = {
    name: definition.name,
    root: parseFormEntries(definition.root),
    schema: parseObjectSchema(definition.root),
    sub: definition.sub?.map((sub) => ({
      name: sub.name,
      component: sub.component,
      ordinal: sub.ordinal ?? '*',
      fields: parseFormEntries(sub.fields),
      schema: parseObjectSchema(sub.fields),
    })),
    links: definition.links?.map((link) => ({
      name: link.name,
      component: link.component,
      link2: link.link2,
      look4: link.look4,
      pick: link.pick ?? [],
    })),
  };
  return _definition;
}

function parseObjectSchema(dataDef: DataDefinition) {
  const entries = dataDef
    .flat()
    .map((def) => [
      def.model,
      Object.keys(def.spec).length === 0 ? z.any() : def.spec,
    ]);
  return z.object(Object.fromEntries(entries));
}

function parseFormEntries(defEntries: DataDefinition) {
  return defEntries.map((field) =>
    Array.isArray(field) ? field : [field],
  ) as DataDefinition;
}

export type ModuleRealmItemBlueprint = {
  name: string;
  label: string;
  role: string;
  entity: EntityBlueprint;
  subName?: string; // Sub name for the data
  // fields: DataDefinition;
  moduleName: string;
  realmName: string;
  // TODO: Schema will be here
  // schema: v.ObjectSchema<any, any>;
  smartContract?: string;
  next?: string;
  pick: string[]; // Pick the fields to be presented, if not provided, all fields will be presented.
  links?: string[];
  pathUrl: { page: string; post?: string; get?: string };
};
export type ModuleRealmBlueprint = {
  root: ModuleRealmItemBlueprint;
  others: ModuleRealmItemBlueprint[];
};
function defineModule(
  name: string,
  label: string,
  _definition: BlueprintModuleDefinition,
): ModuleBlueprint {
  const _listRealmToUrl = (
    path: string,
    postPath: string | boolean,
    getnot: boolean,
  ) => {
    const page = path === 'root' ? '/index' : `/${path}`;
    const apiPath = path === 'root' ? '/index' : `/_by/${path}`;
    const post =
      postPath === true ? apiPath : !!postPath ? `/_by/${postPath}` : undefined;
    const get = !getnot ? apiPath : undefined;
    return { page, post, get };
  };
  const _createRealmToUrl = (
    path: string,
    postPath: string | boolean,
    getnot: boolean,
  ) => {
    const page = path === 'root' ? '/create/index' : `/create/${path}`;
    const post =
      postPath === true ? page : !!postPath ? `/create/${postPath}` : undefined;
    const get = !getnot ? page : undefined;
    return { page, post, get };
  };
  const _eachRealmToUrl = (
    path: string,
    postPath: string | boolean,
    getnot: boolean,
  ) => {
    const page = path === 'root' ? '/:id/index' : `/:id/${path}`;
    const post =
      postPath === true ? page : !!postPath ? `/:id/${postPath}` : undefined;
    const get = !getnot ? page : undefined;
    return { page, post, get };
  };

  function _mapRealmItem(
    key: string,
    realmName: string,
    item: EntityBlueprint | ModuleRealmItemDefinition,
    _realmToUrl: (
      path: string,
      postPath: string | boolean,
      getnot: boolean,
    ) => { page: string; post?: string; get?: string },
  ): ModuleRealmItemBlueprint {
    const _item: any = item;
    if (!!_item.entity) {
      // item is ModuleRealmItemDefinition
      const realmItem = _item as ModuleRealmItemDefinition;
      // const fields = !realmItem.subName
      //   ? realmItem.entity.root
      //   : realmItem.entity.sub?.find((it) => it.name === realmItem.subName)
      //       ?.fields ?? [];
      // const schema = parseObjectSchema(fields);
      return {
        name: key,
        label: realmItem?.label || label,
        role: realmItem.role ?? 'simple',
        entity: realmItem.entity,
        subName: realmItem.subName,
        // fields,
        moduleName: name,
        realmName,
        // schema,
        smartContract: realmItem.smartContract,
        next: realmItem.next,
        pick: realmItem.pick ?? [],
        links: realmItem.links,
        pathUrl: _realmToUrl(
          key,
          realmItem.post ?? false,
          realmItem.getnot ?? false,
        ),
      };
    } else {
      // item is EntityBlueprint
      const realmItem = _item as EntityBlueprint;
      // const fields = realmItem.root;
      // const schema = parseObjectSchema(fields);
      return {
        name: key,
        label,
        role: 'simple',
        entity: realmItem,
        // fields,
        moduleName: name,
        realmName,
        // schema,
        pick: [],
        links: realmItem.links?.map((link) => link.name),
        pathUrl: _realmToUrl(key, false, false),
      };
    }
  }

  const _realmMap = [] as [string, ModuleRealmItemBlueprint][];
  function _mapRealm(
    realmName: string,
    realm: ModuleRealmDefinition,
    _realmToUrl: (
      path: string,
      postPath: string | boolean,
      getnot: boolean,
    ) => { page: string; post?: string; get?: string },
  ) {
    let root = {} as ModuleRealmItemBlueprint;
    let others = [] as ModuleRealmItemBlueprint[];
    for (const key in realm) {
      const _realm = realm[key];
      if (!!_realm) {
        const _item = _mapRealmItem(key, realmName, _realm, _realmToUrl);
        if (key === 'root') {
          root = _item;
        } else {
          others.push(_item);
        }
        _realmMap.push([`${realmName}.${key}`, _item]);
      }
    }
    return { root, others } as ModuleRealmBlueprint;
  }

  const list = _mapRealm('list', _definition.list, _listRealmToUrl);
  const create = _mapRealm('create', _definition.create, _createRealmToUrl);
  const each = _mapRealm('each', _definition.each, _eachRealmToUrl);

  return { name, list, create, each, _refMap: new Map(_realmMap) };
}

// TODO: Define choices list, or we dont' need it?
export type ChoiceListDefinition = {
  modelLabel?: string;
  modelValue?: string;
  modelIcon?: string;
  choices: object[];
};
export type ChoiceListArrayDefinition = {
  label: string;
  value: string;
  icon?: string;
}[];
export type ChoiceListSimpleDefinition = Record<string, string>;

const choicesMap = new Map<string, ChoiceListArrayDefinition>();
function defineChoicesList(
  name: string,
  definition:
    | ChoiceListDefinition
    | ChoiceListArrayDefinition
    | ChoiceListSimpleDefinition,
): string {
  let _arrayDefinition = [] as ChoiceListArrayDefinition;
  if (typeof definition === 'object' && !Array.isArray(definition)) {
    // definition is ChoiceListDefinition or ChoiceListSimpleDefinition
    if (!!definition.choices) {
      // definition is ChoiceListDefinition
      const _defin = definition as ChoiceListDefinition;
      const modelValue = _defin.modelValue || 'value';
      const modelLabel = _defin.modelLabel || 'label';
      const modelIcon = _defin.modelIcon;
      const choices = _defin.choices;

      _arrayDefinition = choices.map((choice: any) => ({
        label: choice[modelLabel],
        value: choice[modelValue],
        icon: modelIcon ? choice[modelIcon] : undefined,
      })) as ChoiceListArrayDefinition;
    } else {
      // definition is ChoiceListSimpleDefinition
      _arrayDefinition = Object.entries(definition).map(([value, label]) => ({
        label,
        value,
      })) as ChoiceListArrayDefinition;
    }
  } /*if (Array.isArray(definition))*/ else {
    // definition is ChoiceListArrayDefinition
    _arrayDefinition = definition;
  }

  choicesMap.set(name, _arrayDefinition);
  return `list:${name}`;
}

export type ModuleBlueprintReference = {
  name: string;
  blueprint: ModuleBlueprint;
  ref(key: string): ModuleRealmItemBlueprint | undefined;
};
const moduleBlueprintMap = new Map<string, ModuleBlueprint>();
export function registerModule(
  _module: ModuleBlueprint,
): ModuleBlueprintReference {
  const _ref = (key: string) => {
    const _blueprint = _module;
    const _refMap = _blueprint._refMap;
    return _refMap.get(key);
  };
  moduleBlueprintMap.set(_module.name, _module);
  return {
    name: _module.name,
    blueprint: _module,
    ref: _ref,
  };
}

export function createBigDataDefinitionBuilder(_app: string) {
  return {
    defineEntity,
    defineModule,
    defineChoicesList,
    registerModule,
  };
}

// HACK: Temporary exploratory.
export function bigDataLinkFactory() {
  const _getChoicesList = (name: string) => {
    if (!name.startsWith('list:')) return [];
    const key = name.slice(5);
    return choicesMap.get(key);
  };

  return {
    getChoicesList: _getChoicesList,
  };
}
