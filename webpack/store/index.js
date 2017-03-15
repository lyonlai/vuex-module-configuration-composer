import { generateVuexStoreModuleConfiguration } from '../../index.js'

const ctx = require.context('./modules', true, /index\.js$/)

const modules = generateVuexStoreModuleConfiguration(ctx)

global.storeConfiguration = Object.assign({}, modules)
