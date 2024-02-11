
'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import Image from "next/image"
import { blogsData } from "../blogs"
import React from "react"
import blog1 from './assets/blog-article-1.webp'
import { CldImage } from 'next-cloudinary';
interface ParamsProps {
  params: {
    slug: string
  }
}

export default function Blogs({ params }: ParamsProps) {

  const selectedBlog = blogsData.find(blog => blog.id === Number(params.slug))

  console.log('selected Blog: ', selectedBlog?.image)

  return (
    <main {...stylex.props(s.container)}>
      {selectedBlog &&


        <React.Fragment>
          <h1 {...stylex.props(s.title)}>{selectedBlog.title}</h1>
          <div>
            <Image
              {...stylex.props(s.image)}
              src={selectedBlog.image}
              alt="alt"
              width={0}
              height={0}
              priority={false}
            />
          </div>
          <p>{selectedBlog.blogSection1}</p><br />
          <p>{selectedBlog.blogSection2}</p><br />
          <p>{selectedBlog.blogSection3}</p><br />
          <p>{selectedBlog.blogSection4}</p><br />
        </React.Fragment>}
    </main>
  );
}
const s = stylex.create({
  container: {
    display: 'flex',
    marginTop: spacing.xxl,
    outline: '2px solid red',
    flexDirection: 'column'
  },
  image: {
    maxWidth: "100%",
    height: 'auto',
  },
  title: {
    padding: {
      default: `${spacing.sm} ${spacing.sm} ${spacing.xl}`,
      '@media (max-width: 900px)': `${spacing.sm} ${spacing.sm} ${spacing.xl}`
    },
    fontSize: text.h4,
    position: 'relative',
    color: colors.inverted

  },
  bg: {
    position: 'absolute',
    top: -106,
    left: -16,
    height: 90,
    width: 90,
    backgroundColor: colors.black,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
    color: colors.white
  },
  day: {
    fontSize: text.h1
  },
  blogSlogan: {
    fontWeight: 'bold',
    paddingBottom: spacing.xxxs,
    fontSize: text.p,
    color: colors.gray,
    textDecoration: 'underline',

  },
  button: {
    margin: `0 auto ${spacing.xxl}`,
    textAlign: 'center',
  },
  left: { cursor: 'pointer' },
  center: { cursor: 'pointer' },
  right: { cursor: 'pointer' },
})
