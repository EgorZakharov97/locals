import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'business',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  auth: true,
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
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    }
  ],
};

export default Users;