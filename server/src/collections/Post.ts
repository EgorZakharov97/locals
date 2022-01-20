import { CollectionConfig, FieldHook, Hook } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'image', 'timestamp'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: '/media',
    staticDir: './media',
    adminThumbnail: ({ doc }) => `/media/${doc.filename}`,
    imageSizes: [
      {
        name: 'tablet',
        width: 640,
        height: 480,
        crop: 'left top',
      },
      {
        name: 'mobile',
        width: 320,
        height: 240,
        crop: 'left top',
      },
      {
        name: 'icon',
        width: 16,
        height: 16,
      },
    ]
  },
  hooks: {
    
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'business',
      // required: true,
      // hooks: {
      //   beforeValidate: (params) => (params.req.user ? params.req.user : null) as FieldHook<Hook, 'title'>,
      // }
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Rich Text',
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