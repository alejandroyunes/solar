"use client"
import * as stylex from "@stylexjs/stylex"
import Image from "next/image"
import logo from '../../Assets/images/solar-logo.png'


import { colors, spacing, text } from "../../../app/globalTokens.stylex"
import ModePicker from "../ui/ModePicker"
import Menu from "../ui/Menu"
import Social from "../ui/SocialMenu"
import Link from "next/link"

export function DesktopNav() {

  return (
    <nav {...stylex.props(s.container)}>

      <div  {...stylex.props(s.left)}>
        <Link href="/" {...stylex.props(s.link)}>
          <Image
            {...stylex.props(s.logo)}
            src={logo}
            alt="alt"
            width={130}
            height={30}
          />
        </Link>
        <Menu />
      </div>
      <div {...stylex.props(s.right)}>
        <ModePicker />
        {/* <Social /> */}
      </div>
    </nav>
  )
}

const s = stylex.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  capital: {
    fontSize: text.h3,
    color: colors.inverted
  },
  invest: {
    marginRight: spacing.md,
    fontSize: text.h3,
    color: colors.primary,
    fontWeight: 'bold',
  },
  left: {
    display: "flex",
    alignItems: "center",
    paddingTop: spacing.md,
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    paddingRight: spacing.xs
  }
})
