"use client"

import stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../../../app/globalTokens.stylex"
import { useState, useRef, useEffect } from "react"
import ExitSvg from "../../../Assets/Icons/ExitSvg"
import VerticalHamburger from "@/components/Assets/Icons/VerticalHamburger"
import Image from "next/image"
import logo from '../../../Assets/images/solar-logo.png'
import Facebook from "@/components/Assets/Icons/Facebook"
import Twitter from "@/components/Assets/Icons/Twitter"
import Instagram from "@/components/Assets/Icons/Instagram"
import Youtube from "@/components/Assets/Icons/Youtube"
import Link from "next/link"

export default function MenuHamburger() {
  const [open, setOpen] = useState<boolean>()

  const handleClose = () => {
    setOpen(false)

    setTimeout(() => {
      setOpen(undefined)
    }, 500)
  }

  return (
    <>
      <div {...stylex.props(s.hamburgerMenu)} onClick={() => setOpen(!open)}>
        <VerticalHamburger />
      </div>

      <div {...stylex.props(s.container, open && s.slideIn, open === false && s.slideOut)}>

        <div   {...stylex.props(s.header)}>
          <Link href="/" {...stylex.props(s.link)} onClick={handleClose}>
            <Image
              {...stylex.props(s.menu)}
              src={logo}
              alt="alt"
              width={120}
              height={30}
            />

          </Link>
          <div {...stylex.props(s.animationExit)} onClick={handleClose}>
            <ExitSvg />
          </div>
        </div>

        <div {...stylex.props(s.content)}>

          <ul {...stylex.props(s.body)}>
            <Link href="/" {...stylex.props(s.link)} onClick={handleClose}>
              <li {...stylex.props(s.items)}>
                <p {...stylex.props(s.paragraph)}>
                  Home
                </p>
              </li>
            </Link>

            <Link href="/about" {...stylex.props(s.link)} onClick={handleClose}>
              <li {...stylex.props(s.items)}>
                <p {...stylex.props(s.paragraph)}>
                  About
                </p>
              </li>
            </Link>
            <Link href="/services" {...stylex.props(s.link)} onClick={handleClose}>

              <li {...stylex.props(s.items)}>
                <p {...stylex.props(s.paragraph)}>
                  Services
                </p>
              </li>
            </Link>

            <Link href="/blog" {...stylex.props(s.link)} onClick={handleClose}>

              <li {...stylex.props(s.items)}>
                <p {...stylex.props(s.paragraph)}>
                  Blog
                </p>
              </li>
            </Link>

            <Link href="/contact" {...stylex.props(s.link)} onClick={handleClose}>
              <li {...stylex.props(s.items)}>
                <p {...stylex.props(s.paragraph)}>
                  Contact
                </p>
              </li>
            </Link>

          </ul>

          <div {...stylex.props(s.contact)}>
            <div {...stylex.props(s.social)}>
              <span {...stylex.props(s.svg)}>
                <Facebook />
              </span>
              <span {...stylex.props(s.svg)}>
                <Instagram />
              </span>
              <span {...stylex.props(s.svg)}>
                <Twitter />
              </span>
              <span {...stylex.props(s.svg)}>
                <Youtube />
              </span>
            </div>
            <a href="tel:+1-555-555-5555" {...stylex.props(s.contactTel)}>+1 800 555 5555</a>
            <a href="mailto:tinfo@email.com" {...stylex.props(s.contactEmail)}>info@email.com</a>
          </div>
        </div>

      </div>

      {open && <div {...stylex.props(s.bg)} onClick={handleClose} />}
    </>
  )
}

const slideIn = stylex.keyframes({
  '0%': { transform: 'translateY(-100%)' },
  '100%': { transform: 'translateY(100%)' },
})

const slideOut = stylex.keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(-100%)' },
})

const fadeIn = stylex.keyframes({
  '0%': { visibility: 'hidden', opacity: 0 },
  '100%': { visibility: 'visible', opacity: 1 },
})

const s = stylex.create({
  hamburgerMenu: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    zIndex: 4,
    transform: 'rotate(90deg)',
    marginRight: spacing.sm
  },
  container: {
    position: "fixed",
    left: 0,
    top: '-100%',
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    height: "100%",
    borderRightStyle: "solid",
    borderRightWidth: 2,
    borderRightColor: colors.xBorderColor,
    willChange: 'transform',
    backgroundColor: colors.bg,
  },
  slideIn: {
    animationName: slideIn,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 101
  },
  slideOut: {
    animationName: slideOut,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 101
  },
  header: {
    display: 'flex',
    paddingLeft: {
      default: spacing.xl,
      '@media (max-width: 500px)': spacing.md
    }
  },
  menu: {
    marginTop: spacing.lg
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  capital: {
    fontSize: text.h3,
    marginTop: spacing.lg
  },
  invest: {
    fontSize: text.h3,
    color: colors.primary,
    fontWeight: 'bold'
  },
  animationExit: {
    display: "flex",
    position: "absolute",
    top: 24,
    right: 24,
    cursor: "pointer",
    backgroundColor: colors.gray,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    marginBottom: 16
  },
  content: {
    display: "grid",
    alignItems: 'center',
    height: "100%",
  },
  body: {
    fontSize: text.p,
    color: colors.inverted,
    listStyleType: 'none',
    paddingLeft: {
      default: spacing.xl,
      '@media (max-width: 500px)': spacing.md
    }
  },
  items: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: spacing.xxs,
    cursor: 'pointer',
  },
  svg: {
    backgroundColor: {
      default: null,
      ':hover': colors.primary,
    },
    width: 50,
    height: 50,
    cursor: 'pointer',
    marginRight: spacing.xxxs,
  },
  paragraph: {
    fontSize: text.h5,
  },
  contact: {
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderTopColor: colors.xBorderColor,
    width: '100%',
    display: 'grid',
    paddingBottom: spacing.sm,
    paddingTop: spacing.sm,
  },
  social: {
    display: 'flex',
    paddingLeft: {
      default: spacing.xl,
      '@media (max-width: 500px)': spacing.md
    }
  },
  contactTel: {
    paddingLeft: {
      default: spacing.xl,
      '@media (max-width: 500px)': spacing.md
    },
    fontSize: text.h4,
    color: colors.inverted,
    fontWeight: 'bold',
    paddingTop: spacing.sm
  },
  contactEmail: {
    paddingLeft: {
      default: spacing.xl,
      '@media (max-width: 500px)': spacing.md
    },
    fontSize: text.h5,
    color: colors.gray,
    paddingTop: spacing.xxs
  },
  bg: {
    position: "fixed",
    width: '100vw',
    left: 0,
    top: 0,
    height: "100vh",
    backgroundColor: "rgba(20, 22, 27, 0.5)",
    animationName: fadeIn,
    animationDuration: "0.5s",
    animationFillMode: "forwards",
    zIndex: 100
  }
})
