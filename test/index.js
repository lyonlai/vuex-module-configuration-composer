import test from 'ava';
import path from 'path';
import {
  generateWebpackPath
} from './_utils';
import {
  buildNestedModules,
  createModuleNamespace,
  normalisePath,
  generateVuexStoreModuleConfiguration
} from '../index';
import ctx from './helpers/index'
import TabsModule from './helpers/modules/tabs/index';
import AccountTabModule from './helpers/modules/tabs/account/index';
import AccountBalanceTabModule from './helpers/modules/tabs/account/balance/index';

test('normalisedPath should return the empty array on ./index.js', t => {
  t.deepEqual(
    normalisePath(
      generateWebpackPath('index.js')
    ),
    []
  );
});

test('normalisedPath should return array of one on path with one directory ', t => {
  t.deepEqual(
    normalisePath(
      generateWebpackPath('tabs', 'index.js')
    ),
    ['tabs']
  );
});

test('normalisedPath should return array of directorys separated by path sep', t => {
  t.deepEqual(
    normalisePath(
      generateWebpackPath('tabs', 'store', 'product', 'index.js')
    ),
    ['tabs', 'store', 'product']
  );
});

test('createModuleNamespace should return an object with expected values', t => {
  t.deepEqual(
    createModuleNamespace(),
    {
      namespaced: true,
      modules: {}
    }
  )
});

test('should have generated namespaced modules configuration for vuex store', t => {
  const moduleConfigurations = generateVuexStoreModuleConfiguration(ctx);
  t.deepEqual(moduleConfigurations, {
    modules: {
      tabs: {
        ...TabsModule,
        namespaced: true,
        modules: {
          account: {
            namespaced: true,
            modules: {
              balance: {
                namespaced: true,
                modules: {},
                ...AccountBalanceTabModule
              }
            },
            ...AccountTabModule
          }
        }
      }
    }
  });
});
