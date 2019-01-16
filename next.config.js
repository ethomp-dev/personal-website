const withSass = require('@zeit/next-sass')

module.exports = withSass({
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/case-study/frog': { page: '/case-study', query: { id: 'frog' } },
            '/case-study/tasklog': { page: '/case-study', query: { id: 'tasklog' } }
        }
    }
})
