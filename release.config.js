module.exports = {
    branches: ['main'],
    plugins: [
        ['@semantic-release/commit-analyzer', {
            preset: 'conventionalcommits',
            // releaseRules: [
            //     { type: 'feat', release: 'minor' },
            //     { type: 'fix', release: 'patch' },
            //     { type: 'docs', release: 'patch' },
            //     { type: 'style', release: 'patch' },
            //     { type: 'refactor', release: 'patch' },
            //     { type: 'perf', release: 'patch' },
            //     { type: 'test', release: 'patch' },
            // ],
            parserOpts: {
                noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
            }
        }],
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/github',
    ]
};