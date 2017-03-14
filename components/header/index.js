import React from 'react';
import Link from 'next/link';

export default () => (
  <div className="root">
    <Link href="/" prefetch><a>Home</a></Link>
    <Link href="/about" prefetch><a>About</a></Link>
    {/*  Example for parameterized routes.  Must have 'as' attribute to avoid errors
      *  <Link href="/blog?id=123" as="/blog/123" prefetch><a>Blog</a></Link>*/}
    <Link href="/blog" prefetch><a>Blog</a></Link>

    <style jsx>{`
        .root {
          background-color: #e4e4e4;
          height: 50px;
        }

        a {
          display:inline-block;
          margin: 15px;
        }
      `}</style>
  </div>
);  