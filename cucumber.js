module.exports = {
  paths: ['features/**/*.feature'],
  require: ['features/step-definitions/**/*.ts'],
  requireModule: ['ts-node/register'],
  format: ['progress'],
  parallel: 0,
  publishQuiet: true,
};
