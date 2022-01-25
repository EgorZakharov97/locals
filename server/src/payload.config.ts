import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Admins from './collections/Admins';
import Post from './collections/Post';
import Business from './collections/Business';
import Tag from './collections/Tag';
import Category from './collections/Category';
import RelationshipA from './collections/RelationshipA';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Admins.slug,
  },
  collections: [
    Users,
    Admins,
    Post,
    Business,
    Tag,
    Category,
    RelationshipA,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
