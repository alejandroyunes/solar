"use client";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../../app/globalTokens.stylex";
import { blogsData } from "@/app/blog/blogs";
import Image from "next/image";
import Link from "next/link";

export default function WidgetBlogs() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <section>
      <div {...stylex.props(s.container)}>
        {blogsData.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <div {...stylex.props(s.left)}>
              <Image
                {...stylex.props(s.image)}
                src={blog.image}
                alt="alt"
                width={300}
                height={200}
              />
              <div {...stylex.props(s.description)}>
                <p {...stylex.props(s.blogSlogan)}>Business</p>
                <h3>{blog.title}</h3>
                <div {...stylex.props(s.bg)}>
                  <p {...stylex.props(s.day)}>{blog.day}</p>
                  <p>{blog.month}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const s = stylex.create({
  container: {
    display: "grid",
    gap: spacing.lg,
    gridTemplateColumns: {
      default: "repeat(3, minmax(0, 1fr))",
      "@media (max-width: 900px) and (min-width: 756px)": "repeat(2, 1fr)",
      "@media (max-width: 756px)": "1fr",
    },
    marginTop: spacing.xxl,
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  description: {
    padding: {
      default: `${spacing.sm} ${spacing.sm} ${spacing.xl}`,
      "@media (max-width: 900px)": `${spacing.sm} ${spacing.sm} ${spacing.xl}`,
    },
    fontSize: text.h4,
    position: "relative",
    color: colors.inverted,
  },
  bg: {
    position: "absolute",
    top: -106,
    left: -16,
    height: 90,
    width: 90,
    backgroundColor: colors.black,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    color: colors.white,
  },
  day: {
    fontSize: text.h1,
  },
  blogSlogan: {
    fontWeight: "bold",
    paddingBottom: spacing.xxxs,
    fontSize: text.p,
    color: colors.gray,
    textDecoration: "underline",
  },
  button: {
    margin: `0 auto ${spacing.xxl}`,
    textAlign: "center",
  },
  left: { cursor: "pointer" },
  center: { cursor: "pointer" },
  right: { cursor: "pointer" },
});
