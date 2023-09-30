module.exports = {
  hooks: {
    'before:init': 'pnpm run prepack && git add docs/api.json',
    'after:bump': 'npx auto-changelog@latest -p',
  },
  git: {
    requireCleanWorkingDir: false,
    changelog:
      'npx auto-changelog@latest --stdout --sort-commits date  --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/main/templates/changelog-compact.hbs',
    commitMessage: 'Release @apteryxxyz/testing_auto-documentation v${version}',
    tagAnnotation: 'Release @apteryxxyz/testing_auto-documentation v${version}',
  },
  github: {
    release: true,
    releaseName: '@apteryxxyz/testing_auto-documentation@${version}',
    autoGenerate: true,
    comments: {
      submit: true,
    },
  },
};
