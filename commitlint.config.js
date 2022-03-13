module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['init', 'test', 'refactor', 'feat', 'fix']],
    'subject-case': [2, 'always', ['lower-case', 'sentence-case']],
  },
}
