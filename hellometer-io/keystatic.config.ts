import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedAt: fields.date({
          label: 'Published Date',
          validation: { isRequired: true },
        }),
        image: fields.text({
          label: 'Cover Image Path',
          description: 'Path relative to /public, e.g. /images/blog-post-01.jpg',
        }),
        summary: fields.text({
          label: 'Summary',
          multiline: true,
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: 'Author Name',
          validation: { isRequired: true },
        }),
        authorImg: fields.text({
          label: 'Author Image Path',
          description: 'Path relative to /public, e.g. /images/news-author-01.jpg',
        }),
        content: fields.mdx({
          label: 'Content',
        }),
      },
    }),
  },
})
