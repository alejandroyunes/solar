'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../app/globalTokens.stylex"
import Image from "next/image"
import musicP from './assets/billboardSolar3.webp'
import ArrowDouble from "../Assets/Icons/ArrowDouble"

export default function BillboardTwo() {

  return (
    <>
      <div  {...stylex.props(s.container)}>
        <div {...stylex.props(s.title)}>
          <h1>Friendly energy 24/7</h1>
        </div>
        <div {...stylex.props(s.slogan)}>
          <h2>Leading solar <span {...stylex.props(s.spamLight)}>company</span> <span {...stylex.props(s.span)}> Revolutionizing Energy</span></h2>
          <div {...stylex.props(s.arrow)}>
            <ArrowDouble />
          </div>
        </div>
      </div>
      <Image
        {...stylex.props(s.image)}
        src={musicP}
        alt="alt"
        width={0}
        height={0}
        fill={true}
        sizes="100vw"
        style={{ width: '100%' }}
      />
    </>
  )
}

const pointingDown = stylex.keyframes({
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(20px)' },
  '100%': { transform: 'translateY(0px)' },
})

const slideIn = stylex.keyframes({
  '0%': { transform: 'translateY(60px)', visibility: 'hidden', opacity: 0 },
  '25%': { transform: 'translateY(50px)', visibility: 'hidden', opacity: .5 },
  '100%': { transform: 'translateY(0px)' },
})

const s = stylex.create({
  container: {
    display: "grid",
    gridTemplateColumns: '1fr',
    margin: "0 auto",
    height: '100vh',
    alignContent: 'space-evenly',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    fontSize: {
      default: text.h1,
      '@media (max-width: 700px)': '1.5rem'
    },
    textTransform: 'uppercase',
    paddingBottom: spacing.xl,
    animationName: slideIn,
    animationDuration: "1s",
    animationFillMode: "backwards",
    color: colors.white
  },
  slogan: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    zIndex: 2,
    fontSize: {
      default: text.h2,
      '@media (max-width: 700px)': text.h4
    },
    color: colors.primary,
    animationName: slideIn,
    animationDuration: "1s",
    animationFillMode: "backwards",
  },
  span: {
    color: colors.white
  },
  spamLight: {
    fontWeight: 'lighter'
  },
  arrow: {
    animationName: pointingDown,
    animationDuration: "2s",
    animationFillMode: 'both',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
  image: {
    objectFit: 'cover',
    height: '100vh',
    zIndex: -1,
  },
})
