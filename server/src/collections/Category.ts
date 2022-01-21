import { CollectionConfig, FieldHook } from 'payload/types';

const Category: CollectionConfig = {
  slug: 'category',
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

export default Category;