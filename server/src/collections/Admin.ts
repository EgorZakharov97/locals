import { BeforeReadHook } from 'payload/dist/collections/config/types';
import { CollectionConfig } from 'payload/types';
import { onlyAdminAccess } from '../lib/AccessHooks';

const Admin: CollectionConfig = {
  slug: 'admin',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: onlyAdminAccess,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    }
  ],
};

export default Admin;