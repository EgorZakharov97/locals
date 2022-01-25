import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'user',
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['email', 'name', 'timestamp'],
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'avatar',
      type: 'upload',
      label: 'Image',
      relationTo: 'media'
    }
  ],
  timestamps: true,
};

export default Users;