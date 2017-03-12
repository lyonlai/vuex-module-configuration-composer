import TabModule from './modules/tabs/index';
import AccountBalanceTab from './modules/tabs/account/balance'
import AccountTab from './modules/tabs/account'

const fixture = {
  './tabs/index.js': TabModule,
  './tabs/account/balance/index.js': AccountBalanceTab,
  './tabs/account/index.js': AccountTab
}

function context(key) {
  return {
    default: fixture[key]
  };
}

context.keys = function() {
  return Object.keys(fixture)
}

export default context;
