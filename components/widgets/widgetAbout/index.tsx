'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import about from './assets/solarAbout2.webp'
import abouttwo from './assets/solarAbout1.webp'
import Image from "next/image"
import ButtonTheme from "../../button/ButtonTheme"
import Link from "next/link"

interface WidgetProps {
  inversedImage?: boolean,
  title: string,
  subTitle: string,
  description: string,
  cta?: string
  paragraphOne?: string,
  paragraphTwo?: string
}

export default function WidgetAbout({
  inversedImage,
  title,
  subTitle,
  description,
  cta,
  paragraphOne,
  paragraphTwo
}: WidgetProps) {

  const handleClick = () => {
    console.log("click")
  }

  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.left)}>
        <Image
          {...stylex.props(s.imageL)}
          src={about}
          alt="alt"
          width={0}
          height={0}
        />
        <Image
          {...stylex.props(s.imageR)}
          src={abouttwo}
          alt="alt"
          width={0}
          height={0}
        />
      </div>

      <div {...stylex.props(s.right, inversedImage && s.inverted)}>
        <p {...stylex.props(s.slogan)}>{title}</p>
        <p {...stylex.props(s.title)}>{subTitle}</p>
        <p {...stylex.props(s.description)}>{description}</p>
        <p {...stylex.props(s.dateTop)}>{paragraphOne}</p>
        <p {...stylex.props(s.dateBottom)}>{paragraphTwo}</p>

        <div>
          {cta && <Link href={cta}>
            <ButtonTheme variant="primary" >Explore</ButtonTheme>
          </Link>}
        </div>
      </div>
    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    gap: spacing.xl,
    margin: {
      default: `${spacing.xxxl} auto`,
      '@media (max-width: 900px)': `${spacing.xl} auto`
    },
  },
  left: {
    transform: 'scaleX(-1)'
  },
  imageL: {
    // transform: 'scaleX(-1)',
    maxWidth: {
      default: 300,
      '@media (max-width: 500px)': 260
    },
    height: {
      default: 400,
    },
    objectFit: 'cover',
    float: 'left',
  },
  imageR: {
    paddingTop: spacing.xxxl,
    objectFit: 'contain',
    float: 'right',
    maxWidth: {
      default: 399,
      '@media (max-width: 747px) and (min-width: 500px)': 319,
      '@media (max-width: 500px)': 280,
    },
    height: {
      default: 399,
    },
    marginTop: {
      default: -333,
      '@media (max-width: 900px) and (min-width: 667px)': -20,
      '@media (max-width: 667px) and (min-width: 500px)': -380,
      '@media (max-width: 500px)': -380,
    }
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inverted: {
    order: -1
  },
  slogan: {
    fontSize: text.p,
    fontWeight: 'bold',
    color: colors.gray,
    paddingBottom: spacing.xxs
  },
  title: {
    fontSize: text.h3,
    fontWeight: 'bold',
    paddingBottom: spacing.md
  },
  description: {
    paddingBottom: spacing.xs
  },
  dateTop: {
    paddingBottom: spacing.xxs
  },
  dateBottom: {
    paddingBottom: spacing.md
  },
})
