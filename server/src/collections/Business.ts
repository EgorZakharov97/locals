import { CollectionConfig } from 'payload/types';
import { onlyNameIfPublic } from '../lib/AccessHooks';
import { validateString } from '../lib/Validation';

const Business: CollectionConfig = {
  slug: 'business',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeRead: [onlyNameIfPublic]
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
      validate: validateString,
    },
  ],
};

export default Business;