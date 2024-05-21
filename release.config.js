module.exports = {
    branches: [
        { name: 'main', channel: 'release' }
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/github',
        ['@semantic-release/git', {
            assets: ['CHANGELOG.md'],
            message: "chore(release): ${nextRelease.version} \n\n${nextRelease.notes}"
        }]
    ],
    preset: 'angular',
    releaseRules: [
        { type: 'feat', release: 'minor' },
        { type: 'fix', release: 'patch' },
        { type: 'docs', release: 'patch' },
        { type: 'style', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { type: 'perf', release: 'patch' },
        { type: 'test', release: 'patch' },
    ],
    parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
    },
    writerOpts: {
        commitsSort: ['subject', 'scope'],
    }
};