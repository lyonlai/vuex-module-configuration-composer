var nodePath = require('path');

function buildNestedModules(paths, currentModule, loadedModule) {
  var path = paths.shift();
  currentModule[path] = currentModule[path] || createModuleNamespace();
  if (paths.length <= 0) {
    currentModule[path] = Object.assign({}, currentModule[path], loadedModule);
  } else {
    buildNestedModules(paths, currentModule[path].modules, loadedModule);
  }
}

function createModuleNamespace() {
  return {
    namespaced: true,
    modules: {}
  }
}

function normalisePath(path, mainFileName) {
  var pathComponents = path.replace(mainFileName || 'index.js').split(nodePath.sep);
  pathComponents.shift();
  pathComponents.pop();
  return pathComponents;
}

function generateVuexStoreModuleConfiguration(ctx, mainFileName, fetchContext) {
  var modules = {}
  fetchContext = fetchContext || function (key) {
    return ctx(key).default
  }

  ctx.keys()
    .forEach(key => {
      var normalisedPath = normalisePath(key, mainFileName);
      buildNestedModules(normalisedPath, modules, fetchContext(key));
    });

  return {
    modules: modules
  }
}

module.exports.buildNestedModules = buildNestedModules;

module.exports.createModuleNamespace = createModuleNamespace;

module.exports.normalisePath = normalisePath;

module.exports.generateVuexStoreModuleConfiguration = generateVuexStoreModuleConfiguration;
