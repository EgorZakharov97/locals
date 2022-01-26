import { CollectionConfig, CollectionBeforeValidateHook } from 'payload/types';

const beforeValidateHook: CollectionBeforeValidateHook = ({ req, data }) => {
  console.log(data)
  return data;
}

const Posts: CollectionConfig = {
  slug: 'post',
  admin: {
    defaultColumns: ['slug', 'title', 'author', 'timestamp'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      beforeValidateHook,
    ]
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      required: true,
      validate: (val: string) => (val.includes(' ') ? "Slug cannot include spaces!" : true),
    },
    {
      name: 'featureImage',
      type: 'upload',
      label: 'Feature Image',
      relationTo: 'media',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tag',
      required: false,
      hasMany: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'category',
      required: true,
      hasMany: false,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'business',
      required: true,
      // hooks: {
      //   beforeValidate: (params) => (params.req.user ? params.req.user : null) as FieldHook<Hook, 'title'>,
      // }
    },
    {
      name: 'body',
      type: 'richText',
      label: 'Body',
      required: true,
      admin: {
        elements: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'blockquote',
          'ul',
          'ol',
          'link',
        ],
        leaves: [
          'bold',
          'italic',
          'underline',
          'strikethrough',
        ],
      },
    }
  ],
  timestamps: true,
};

export default Posts;