var nodePath = require('path');

module.exports.buildNestedModules = function (paths, currentModule, loadedModule) {
  var path = paths.shift();

  currentModule[path] = currentModule[path] || createModuleNamespace();

  if (paths.length <= 0) {
    currentModule[path] = Object.assign(currentModule[path], loadedModule);
    return
  } else {
    buildNestedModules(paths, currentModule[path].modules, loadedModule);
  }
}

module.exports.createModuleNamespace = function () {
  return {
    namespaced: true,
    module: {}
  }
}

module.exports.normalisePath = function (path) {
  var pathComponents = path.split(nodePath.sep).;
  pathComponents.shift();
  pathComponents.pop();
  return pathComponents;
}

module.exports.generateVuexStoreModuleConfiguration = function(ctx) {
  var modules = {}

  ctx.keys()
    .sort()
    .map(normalisePath)
    .forEach(normalisedPath =>
      buildNestedModules(normalisedKey.split('/'), modules, ctx(key).default)
    );

  return {
    modules: modules
  }
}
