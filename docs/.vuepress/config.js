const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  title: 'upupgoooo',
  description: 'upupgoooo的个人博客',
  base: '/',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  theme: defaultTheme({
    navbar: [
      // {
      //   text: '编译原理',
      //   children: [
      //     '/compiler/README.md',
      //     {
      //       text: '编译器前端',
      //       children: [
      //         '/compiler/frontend/lexer.md',
      //         '/compiler/frontend/parser.md'
      //       ]
      //     },
      //     {
      //       text: '编译器后端',
      //       children: [
      //         '/compiler/backend/optimize.md'
      //       ]
      //     }]
      // },
      { text: 'Github', link: 'https://github.com/qianps' }
    ],
  })
}