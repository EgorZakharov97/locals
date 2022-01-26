import { CollectionConfig } from 'payload/types';

const EmailSubscriptions: CollectionConfig = {
  slug: 'email-subscription',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  hooks: {
    beforeValidate: [({ data }) => (console.log(data))]
  },
  fields: [
    {
      name: 'email',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'isSubscribed',
      label: 'Is Currently Subscribed?',
      type: 'checkbox',
      defaultValue: true,
    }
  ],
  timestamps: true,
};

export default EmailSubscriptions;