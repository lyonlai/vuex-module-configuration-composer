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
  return pathComponents.slice(1, pathComponents.length - 1);
}

function fetchModuleFromContext(ctx, key) {
  return ctx(key).default
}

function generateVuexStoreModuleConfiguration(ctx, mainFileName, fetchModule) {
  return {
    modules: ctx.keys()
      .reduce(function (modules, key) {
        var normalisedPath = normalisePath(key, mainFileName);
        buildNestedModules(normalisedPath, modules, (fetchModule || fetchModuleFromContext)(ctx, key));
        return modules;
      }, {})
  };
}

module.exports.buildNestedModules = buildNestedModules;

module.exports.createModuleNamespace = createModuleNamespace;

module.exports.normalisePath = normalisePath;

module.exports.generateVuexStoreModuleConfiguration = generateVuexStoreModuleConfiguration;
