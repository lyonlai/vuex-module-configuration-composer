# Vuex Module Configuration Composer
[![Build Status](https://travis-ci.org/lyonlai/vuex-module-configuration-composer.svg?branch=master)](https://travis-ci.org/lyonlai/vuex-module-configuration-composer) [![Coverage Status](https://coveralls.io/repos/github/lyonlai/vuex-module-configuration-composer/badge.svg?branch=master)](https://coveralls.io/github/lyonlai/vuex-module-configuration-composer?branch=master)

This modules is used to generate namespaced modules configuration for Vuex Store from a Webpack require context.

This module is created to ease the pain of manually creating Vuex store modules configuration in complex application. With this module in place, you can achieve create the module then be able to use it straight away in your component.

## Example

Assume the following is your modules directory, where index.js in each folder is just grouping the state, getters, actions, and mutations together in a module configuration.

```
modules
  page
    overview
      index.js
      getters.js
      actions.js
      mutations.js
      mutation-types.js
      state.js
    accounts
      index.js
      getters.js
      actions.js
      mutations.js
      mutation-types.js
      state.js      
    cards
      index.js
      getters.js
      actions.js
      mutations.js
      mutation-types.js
      state.js      
```

Then you will use this module as the following:

```
import Vue from 'vue'
import Vuex from 'vuex'
import { generateVuexStoreModuleConfiguration } from 'vuex-module-configuration-composer'

Vue.use(Vuex)

const context = require.context('./modules', // search in the ./modules directory
                                true, // recursive search in any sub directory
                                /index\.js$/ // look for index.js file
                               )

export default new Vuex.Store(Object.assign({
  // here is your module configuration,
  // you can feed your root state, getters, actions, mutations in
}, generateVuexStoreModuleConfiguration()))

```

## Maintaining this module.

### Tests
There are unit tests and also integration tests covers this module. Integration test simply build a modules configuration, create a Vuex store with it then put in Vue component and verify the namespaced modules are actually working.

Tests are written using [ava](https://github.com/avajs/ava). To run the test, simply write `yarn install` then run `yarn test`
