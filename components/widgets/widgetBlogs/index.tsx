"use client";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, text } from "../../../app/globalTokens.stylex";
import { blogsData } from "@/app/blog/blogs";
import Image from "next/image";
import Link from "next/link";
import blog1 from "../../../app/blog/assets/image1.webp";
import blog2 from "../../../app/blog/assets/image2.webp";
import blog3 from "../../../app/blog/assets/image3.webp";

export default function WidgetBlogs() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <section>
      <div {...stylex.props(s.container)}>
        <Link href="blogs/1" key={blogsData[0]?.id}>
          <div {...stylex.props(s.left)}>
            <Image
              {...stylex.props(s.image)}
              src={blog1}
              alt="alt"
              width={300}
              height={200}
            />
            <div {...stylex.props(s.description)}>
              <p {...stylex.props(s.blogSlogan)}>Business</p>
              <h3>{blogsData[0]?.title}</h3>
              <div {...stylex.props(s.bg)}>
                <p {...stylex.props(s.day)}>{blogsData[0]?.day}</p>
                <p>{blogsData[0]?.month}</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="blogs/2" key={blogsData[1]?.id}>
          <div {...stylex.props(s.left)}>
            <Image
              {...stylex.props(s.image)}
              src={blog2}
              alt="alt"
              width={300}
              height={200}
            />
            <div {...stylex.props(s.description)}>
              <p {...stylex.props(s.blogSlogan)}>Business</p>
              <h3>{blogsData[1]?.title}</h3>
              <div {...stylex.props(s.bg)}>
                <p {...stylex.props(s.day)}>{blogsData[1]?.day}</p>
                <p>{blogsData[1]?.month}</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href="blogs/3" key={blogsData[2]?.id}>
          <div {...stylex.props(s.left)}>
            <Image
              {...stylex.props(s.image)}
              src={blog3}
              alt="alt"
              width={300}
              height={200}
            />
            <div {...stylex.props(s.description)}>
              <p {...stylex.props(s.blogSlogan)}>Business</p>
              <h3>{blogsData[2]?.title}</h3>
              <div {...stylex.props(s.bg)}>
                <p {...stylex.props(s.day)}>{blogsData[2]?.day}</p>
                <p>{blogsData[2]?.month}</p>
              </div>
            </div>
          </div>
        </Link>
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
