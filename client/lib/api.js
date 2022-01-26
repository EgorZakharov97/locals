import qs from 'qs';

const LIMIT = 999999;

export async function getAllBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/post?limit=${LIMIT}`)
  const data = await res.json()
  return data.docs;
}

export async function getBlogBySlug(slug) {
  const query = {
      where: {
          slug: {
              equals: slug,
          }
      },
      limit: 1,
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/post?${qs.stringify(query)}`)
  const data = await res.json();
  return data.docs[0];
}

export async function getAllCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/category?limit=${LIMIT}`)
  const data = await res.json()
  return data.docs;
}

export async function getAllTags() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/tag?limit=${LIMIT}`)
  const data = await res.json()
  return data.docs;
}