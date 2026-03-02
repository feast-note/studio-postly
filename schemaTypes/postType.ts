import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'string',
    }),
    defineField({
      name: 'zIndex',
      title: 'ZIndex',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'expire',
      title: 'Expire',
      type: 'date',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'object',
      fields: [
        defineField({
          name: 'x',
          type: 'string',
        }),
        defineField({
          name: 'y',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'number',
      initialValue: 240,
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'number',
      initialValue: 240,
    }),
  ],
})
