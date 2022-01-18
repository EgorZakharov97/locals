import { BeforeReadHook } from 'payload/dist/collections/config/types';

export const onlyNameIfPublic: BeforeReadHook = ({ req: { user: entity }, doc }) => {
  // Only return name if not logged in
  if (!entity) {
    return { name: doc.name };
  }
  return doc;
};

export const defaultPayloadAccess = ({ req }) => {
  if (!req.user) return false;
  const collection = req.user.collection;
  return Boolean(
    collection === 'admin' ||
    collection === 'business' ||
    collection === 'blogger'
  );
}

export const onlyAdminAccess = ({ req }) => {
  if (!req.user) return false;
  const collection = req.user.collection;
  return Boolean(collection === 'admin');
}

export const onlyBusinessAccess = ({ req }) => {
  if (!req.user) return false;
  const collection = req.user.collection;
  return Boolean(collection === 'business');
}

export const onlyBloggerAccess = ({ req }) => {
  if (!req.user) return false;
  const collection = req.user.collection;
  return Boolean(collection === 'blogger');
}