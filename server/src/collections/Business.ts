import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'business',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  auth: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'avatar',
      type: 'upload',
      label: 'Image',
      relationTo: 'media'
    }
  ],
};

export default Users;