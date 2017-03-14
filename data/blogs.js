const posts = {
  1: { id: 1, title: 'Blog One', post: 'This is blog post one.' },
  2: { id: 2, title: 'Blog Two', post: 'This is blog post two.' },
  3: { id: 3, title: 'Blog Three', post: 'This is blog post three.' },
  4: { id: 4, title: 'Blog Four', post: 'This is blog post four.' },
  5: { id: 5, title: 'Blog Five', post: 'This is blog post five.' },
};

export function getBlogPost (id) {
  return new Promise((res, rej) => {
    setTimeout(() => res(posts[id]), 500);
  });
}

export function getAllBlogPosts () {
  return new Promise((res, rej) => {
    setTimeout(() => res(Object.keys(posts).map(key => posts[key])), 500);
  });
}