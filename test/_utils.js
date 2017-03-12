import path from 'path';

export function generateWebpackPath(...args) {
  return `.${path.sep}${path.join(...args)}`;
}
