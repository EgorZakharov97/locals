import { CollectionConfig, FieldHook } from 'payload/types';

const Tag: CollectionConfig = {
  slug: 'tag',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
};

export default Tag;