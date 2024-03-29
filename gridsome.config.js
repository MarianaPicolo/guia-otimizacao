// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Guia de otimização no front-end',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './artigos/conteudos/**/*.md',
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'content'],
        collections: [
          {
            typeName: 'Post',
            indexName: 'Post',
            fields: ['title', 'id', 'description', 'topic', 'content']
          }
        ]
      }
    }
  ],
  templates: {
    Post: '/artigos/:topic/:title'
  }
}
