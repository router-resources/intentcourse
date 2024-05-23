import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/nitrocourse/__docusaurus/debug',
    component: ComponentCreator('/nitrocourse/__docusaurus/debug', '014'),
    exact: true
  },
  {
    path: '/nitrocourse/__docusaurus/debug/config',
    component: ComponentCreator('/nitrocourse/__docusaurus/debug/config', 'ef1'),
    exact: true
  },
  {
    path: '/nitrocourse/__docusaurus/debug/content',
    component: ComponentCreator('/nitrocourse/__docusaurus/debug/content', '70a'),
    exact: true
  },
  {
    path: '/nitrocourse/__docusaurus/debug/globalData',
    component: ComponentCreator('/nitrocourse/__docusaurus/debug/globalData', 'b1d'),
    exact: true
  },
  {
    path: '/nitrocourse/__docusaurus/debug/metadata',
    component: ComponentCreator('/nitrocourse/__docusaurus/debug/metadata', '15d'),
    exact: true
  },
  {
    path: '/nitrocourse/__docusaurus/debug/registry',
    component: ComponentCreator('/nitrocourse/__docusaurus/debug/registry', '012'),
    exact: true
  },
  {
    path: '/nitrocourse/__docusaurus/debug/routes',
    component: ComponentCreator('/nitrocourse/__docusaurus/debug/routes', '59e'),
    exact: true
  },
  {
    path: '/nitrocourse/blog',
    component: ComponentCreator('/nitrocourse/blog', 'f00'),
    exact: true
  },
  {
    path: '/nitrocourse/blog/archive',
    component: ComponentCreator('/nitrocourse/blog/archive', '931'),
    exact: true
  },
  {
    path: '/nitrocourse/blog/first-blog-post',
    component: ComponentCreator('/nitrocourse/blog/first-blog-post', 'bd2'),
    exact: true
  },
  {
    path: '/nitrocourse/blog/long-blog-post',
    component: ComponentCreator('/nitrocourse/blog/long-blog-post', '1f4'),
    exact: true
  },
  {
    path: '/nitrocourse/blog/mdx-blog-post',
    component: ComponentCreator('/nitrocourse/blog/mdx-blog-post', 'e81'),
    exact: true
  },
  {
    path: '/nitrocourse/blog/tags',
    component: ComponentCreator('/nitrocourse/blog/tags', '641'),
    exact: true
  },
  {
    path: '/nitrocourse/blog/tags/docusaurus',
    component: ComponentCreator('/nitrocourse/blog/tags/docusaurus', '4e3'),
    exact: true
  },
  {
    path: '/nitrocourse/blog/tags/facebook',
    component: ComponentCreator('/nitrocourse/blog/tags/facebook', '8c3'),
    exact: true
  },
  {
    path: '/nitrocourse/blog/tags/hello',
    component: ComponentCreator('/nitrocourse/blog/tags/hello', '6b5'),
    exact: true
  },
  {
    path: '/nitrocourse/blog/tags/hola',
    component: ComponentCreator('/nitrocourse/blog/tags/hola', '1f8'),
    exact: true
  },
  {
    path: '/nitrocourse/blog/welcome',
    component: ComponentCreator('/nitrocourse/blog/welcome', '16b'),
    exact: true
  },
  {
    path: '/nitrocourse/markdown-page',
    component: ComponentCreator('/nitrocourse/markdown-page', '5b5'),
    exact: true
  },
  {
    path: '/nitrocourse/docs',
    component: ComponentCreator('/nitrocourse/docs', '428'),
    routes: [
      {
        path: '/nitrocourse/docs',
        component: ComponentCreator('/nitrocourse/docs', '33c'),
        routes: [
          {
            path: '/nitrocourse/docs',
            component: ComponentCreator('/nitrocourse/docs', '63a'),
            routes: [
              {
                path: '/nitrocourse/docs/Components Of CCIF 01',
                component: ComponentCreator('/nitrocourse/docs/Components Of CCIF 01', 'b94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/nitrocourse/docs/Components Of CCIF 02',
                component: ComponentCreator('/nitrocourse/docs/Components Of CCIF 02', 'c43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/nitrocourse/docs/Components Of CCIF 03',
                component: ComponentCreator('/nitrocourse/docs/Components Of CCIF 03', '4a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/nitrocourse/docs/Components Of CCIF 04',
                component: ComponentCreator('/nitrocourse/docs/Components Of CCIF 04', '09c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/nitrocourse/docs/Introduction to CCIF & it Matters',
                component: ComponentCreator('/nitrocourse/docs/Introduction to CCIF & it Matters', '55f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/nitrocourse/docs/Introduction to Intent Store & XP Points',
                component: ComponentCreator('/nitrocourse/docs/Introduction to Intent Store & XP Points', 'f9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/nitrocourse/docs/Introduction to the Course',
                component: ComponentCreator('/nitrocourse/docs/Introduction to the Course', '32a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/nitrocourse/docs/Summary & CheatSheets',
                component: ComponentCreator('/nitrocourse/docs/Summary & CheatSheets', '23d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/nitrocourse/docs/Use Cases Of CCIF',
                component: ComponentCreator('/nitrocourse/docs/Use Cases Of CCIF', '551'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/nitrocourse/docs/What are Different Types Of Intents',
                component: ComponentCreator('/nitrocourse/docs/What are Different Types Of Intents', 'd43'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/nitrocourse/',
    component: ComponentCreator('/nitrocourse/', 'ecc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
