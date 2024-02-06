'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import blog from './assets/blog1.webp'
import service1 from '../../Assets/images/services/solar1.webp'
import service3 from '../../Assets/images/services/solar3.webp'
import service4 from '../../Assets/images/services/solar4.webp'

import Image from "next/image"
import ButtonTheme from "../../button/ButtonTheme"
import WidgetTitle from "../widgetTitle"

export default function WidgetBlog() {
  const handleClick = () => {
    console.log("click")
  }

  return (
    <section>
      <WidgetTitle title="Elevate your world with Sun-Powered Solutions" />

      {/* <div {...stylex.props(s.titleContainer)}>
        <p {...stylex.props(s.slogan)}>Elevate your world with Sun-Powered Solutions</p>
        <p {...stylex.props(s.title)}>Services</p>
      </div> */}

      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.left)}>
          <Image
            {...stylex.props(s.image)}
            src={service1}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.description)}>
            <p {...stylex.props(s.blogSlogan)}>System Design and Engineering</p>
            <p>We offer system design and engineering services, customizing solar solutions to meet the specific energy needs and requirements of our clients.</p>
          </div>

        </div>


        <div {...stylex.props(s.center)}>
          <Image
            {...stylex.props(s.image)}
            src={service3}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.description)}>
            <p {...stylex.props(s.blogSlogan)}>Solar installation</p>
            <p>We provide professional installation services for solar panels on residential, commercial, or industrial properties.</p>
          </div>

        </div>

        <div {...stylex.props(s.right)}>
          <Image
            {...stylex.props(s.image)}
            src={service4}
            alt="alt"
            width={0}
            height={0}
          />
          <div {...stylex.props(s.description)}>
            <p {...stylex.props(s.blogSlogan)}>Maintenance and Monitoring</p>
            <p>Offering maintenance and monitoring services to ensure the optimal performance and longevity of solar systems.</p>
          </div>

        </div>

      </div>
    </section>
  )
}

const s = stylex.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  slogan: {
    fontSize: text.h5,
    fontWeight: 'bold',
    color: colors.gray,
    paddingBottom: spacing.xxs,
    textTransform: 'capitalize'
  },
  title: {
    fontSize: text.h2,
    fontWeight: 'bold',
    paddingBottom: spacing.md
  },
  container: {
    display: 'grid',
    gap: spacing.lg,
    gridTemplateColumns: {
      default: 'repeat(3, minmax(0, 1fr))',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
  },
  image: {
    maxWidth: "100%",
    height: 'auto',
  },
  description: {
    padding: {
      default: `${spacing.sm} 0 ${spacing.xl}`,
      '@media (max-width: 900px)': `${spacing.sm} ${spacing.sm} ${spacing.xl}`
    },
    fontSize: text.p,
    fontWeight: 'normal',
    position: 'relative'
  },
  blogSlogan: {
    fontWeight: 'bold',
    paddingBottom: spacing.xxxs,
    fontSize: text.p,
    color: colors.gray
  },
  button: {
    margin: `0 auto ${spacing.xxl}`,
    textAlign: 'center',
  },
  left: { cursor: 'pointer' },
  center: { cursor: 'pointer' },
  right: { cursor: 'pointer' },
})
