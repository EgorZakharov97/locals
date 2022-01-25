import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'admin',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    }
  ],
};

export default Users;