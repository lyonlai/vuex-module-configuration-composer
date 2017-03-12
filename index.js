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
    modules: {}
  }
}

module.exports.normalisePath = function (path, mainFileName) {
  var pathComponents = path.replace(mainFileName || 'index.js').split(nodePath.sep);
  pathComponents.shift();
  pathComponents.pop();
  return pathComponents;
}

module.exports.generateVuexStoreModuleConfiguration = function(ctx, mainFileName) {
  var modules = {}

  ctx.keys()
    .sort()
    .map(key => normalisePath(key, mainFileName))
    .forEach(normalisedPath =>
      buildNestedModules(normalisedPath.split(nodePath.sep), modules, ctx(key).default)
    );

  return {
    modules: modules
  }
}
