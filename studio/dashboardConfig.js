export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60dc8e11e915453e7ba19bb0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vdw7gfma',
                  apiId: '65d2aa59-0535-494b-a6f7-9c6f23dae0eb'
                },
                {
                  buildHookId: '60dc8e11809a1d416a70b828',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hi81rpsf',
                  apiId: 'a7033e03-35c0-4d90-85d6-d18c472cbd5b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sk-09/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hi81rpsf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
