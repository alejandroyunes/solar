'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import blog from './assets/blog.jpg'
import blog1 from './assets/blog-article-1.webp'


import Image from "next/image"
import Link from "next/link"

export default function WidgetBlogs() {
  const handleClick = () => {
    console.log("click")
  }
  console.log('blog')
  return (
    <section>
      <div {...stylex.props(s.container)}>

        <Link href="/blog/1">
          <div {...stylex.props(s.left)}>
            <Image
              {...stylex.props(s.image)}
              src={blog1}
              alt="alt"
              width={0}
              height={0}
            />
            <div {...stylex.props(s.description)}>
              <p {...stylex.props(s.blogSlogan)}>Business</p>
              <h3>A Deep Dive into Solar Panels</h3>
              <div {...stylex.props(s.bg)}>
                <p {...stylex.props(s.day)}>10</p>
                <p>Jan</p>
              </div>
            </div>

          </div>
        </Link>

        <Link href="/blog/2">
          <div {...stylex.props(s.center)}>
            <Image
              {...stylex.props(s.image)}
              src={blog}
              alt="alt"
              width={0}
              height={0}
            />
            <div {...stylex.props(s.description)}>
              <p {...stylex.props(s.blogSlogan)}>Business</p>
              <h3>Lorem ipsum dolor, sit amet consectetur.</h3>
              <div {...stylex.props(s.bg)}>
                <p {...stylex.props(s.day)}>13</p>
                <p>Apr</p>
              </div>
            </div>

          </div>
        </Link>

        <Link href="/blog/3">
          <div {...stylex.props(s.right)}>
            <Image
              {...stylex.props(s.image)}
              src={blog}
              alt="alt"
              width={0}
              height={0}
            />
            <div {...stylex.props(s.description)}>
              <p {...stylex.props(s.blogSlogan)}>Business</p>
              <h3>Lorem ipsum dolor, sit amet consectetur.</h3>
              <div {...stylex.props(s.bg)}>
                <p {...stylex.props(s.day)}>28</p>
                <p>Apr</p>
              </div>
            </div>

          </div>
        </Link>



      </div>
    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gap: spacing.lg,
    gridTemplateColumns: {
      default: 'repeat(3, minmax(0, 1fr))',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    marginTop: spacing.xxl,
  },
  image: {
    maxWidth: "100%",
    height: 'auto',
  },
  description: {
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
