module.exports = {
    branches: ['main'],
    plugins: [
        ['@semantic-release/commit-analyzer', {
            preset: 'conventionalcommits',
            parserOpts: {
                noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
            }
        }],
        '@semantic-release/release-notes-generator',
        // '@semantic-release/changelog',
        '@semantic-release/github',
    ]
};