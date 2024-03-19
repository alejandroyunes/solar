"use client";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../../app/globalTokens.stylex";
import { blogsData } from "../../blog/blogs";
import React from "react";
import Image from "next/image";
import image1 from "../../blog/assets/image1.webp";

interface ParamsProps {
  params: {
    slug: string;
  };
}

export default function Blogs() {
  const selectedBlog = blogsData[0];
  return (
    <main {...stylex.props(s.container)}>
      {blogsData && (
        <React.Fragment>
          <h1 {...stylex.props(s.title)}>{selectedBlog.title}</h1>
          <Image
            src={image1}
            alt=""
            {...stylex.props(s.image)}
            width={600}
            height={400}
          />

          <p>{selectedBlog.blogSection1}</p>
          <br />
          <p>{selectedBlog.blogSection2}</p>
          <br />
          <p>{selectedBlog.blogSection3}</p>
          <br />
          <p>{selectedBlog.blogSection4}</p>
          <br />
        </React.Fragment>
      )}
    </main>
  );
}
const s = stylex.create({
  container: {
    display: "flex",
    marginTop: {
      default: spacing.xxl,
      "@media (max-width: 756px)": spacing.sm,
    },
    flexDirection: "column",
  },
  image: {
    margin: "0 auto",
    maxWidth: {
      default: 600,
      "@media (max-width: 756px)": "100%",
    },
    height: "auto",
    paddingBottom: 40,
  },
  title: {
    padding: {
      default: `${spacing.sm} ${spacing.sm} ${spacing.xl}`,
      "@media (max-width: 900px)": `${spacing.sm} ${spacing.sm} ${spacing.xl}`,
    },
    fontSize: text.h4,
    position: "relative",
    color: colors.inverted,
    margin: "0 auto",
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
