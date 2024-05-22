module.exports = {
    branches: ['main'],
    plugins : [
        ['@semantic-release/commit-analyzer', {
            preset    : 'conventionalcommits',
            parserOpts: {
                noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
            }
        }],

        '@semantic-release/release-notes-generator',
        // @semantic-release/changelog can be added if we want to be able to have the semantic-release-bot automatically
        // commit those changes to the CHANGELOG file to main. However, this is redundant to the notes in our releases.
        // Would also need to generate a "principle admin" account that is able to bypass branch protections. Generating
        // a PR with those changes like release-please handles it does not appear to be an option.
        // '@semantic-release/changelog',

        // @semantic-release/github will automatically publish the tagged release, remove to make that a manual step.
        ['@semantic-release/github', {
            draftRelease: true
        }],
    ]
};