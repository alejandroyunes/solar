'use client'
import * as stylex from "@stylexjs/stylex"
import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import Arrow from "@/components/Assets/Icons/Arrow"
import ArrowDownSvg from "@/components/Assets/Icons/ArrowDownSvg";

interface WidgetTitleProps {
  title: string
  subtitle: string,
  spaceTop?: boolean
}

export default function WidgetTitle({ title, subtitle, spaceTop }: WidgetTitleProps) {

  return (
    <section>
      <div {...stylex.props(s.container)}>
        <div {...stylex.props(s.top)}>
          <p>{title}</p>
        </div>

        <div {...stylex.props(s.subtitle)}>
          <p>{subtitle}</p>
        </div>

      </div>


    </section>
  )
}


const s = stylex.create({
  container: {
    display: 'grid',
    gridTemplateRows: {
      default: '1fr 1fr',
      '@media (max-width: 900px)': 'repeat(1, 1fr)'
    },
    gap: spacing.md,
    justifyContent: 'center',
    justifyItems: 'center'
  },
  top: {
    fontSize: text.h2
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 300,
    maxWidth: 400,
    textAlign: 'center'
  }
})
