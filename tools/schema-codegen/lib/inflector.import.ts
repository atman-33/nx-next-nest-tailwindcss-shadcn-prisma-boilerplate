type Pluralize = (word: string) => string;
const pluralize: Pluralize = require('./inflector.js');

export { pluralize };
