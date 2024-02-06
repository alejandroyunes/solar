import * as stylex from "@stylexjs/stylex"
import { globalTokens as $, colors, spacing, text } from "../../../app/globalTokens.stylex"
import Link from "next/link"
import Image from "next/image"
import solar1 from '../../Assets/images/services/solar1.webp'
import solar2 from '../../Assets/images/services/solar2.webp'
import solar3 from '../../Assets/images/services/solar3.webp'
import solar4 from '../../Assets/images/services/solar4.webp'

export default function WidgetCards() {
  return (
    <section {...stylex.props(s.container)}>
      <div {...stylex.props(s.grid)}>
        <div {...stylex.props(s.gridItem)}>
          <div {...stylex.props(s.gridImage)}>
            <Image
              {...stylex.props(s.adImage)}
              src={solar1}
              alt="alt"
              width={180}
              height={180}
            />
          </div>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <h3 {...stylex.props(s.description)}>
                Initial Consultation
              </h3>
            </div>
            <div {...stylex.props(s.location)}>
              <p>The process begins with an initial consultation where we understand your energy needs, goals, and site-specific requirements.</p>
            </div>
          </div>

        </div>

        <div {...stylex.props(s.gridItem)}>

          <div {...stylex.props(s.gridImage)}>
            <Image
              {...stylex.props(s.adImage)}
              src={solar2}
              alt="alt"
              width={180}
              height={180}
            />
          </div>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <h3 {...stylex.props(s.description)}>
                Site Assessment and Feasibility Study
              </h3>
            </div>
            <div {...stylex.props(s.location)}>
              <p>Our team conducts a detailed site assessment to determine the feasibility of a solar energy system. and structural considerations.</p>
            </div>
          </div>

        </div>

        <div {...stylex.props(s.gridItem)}>

          <div {...stylex.props(s.gridImage)}>
            <Image
              {...stylex.props(s.adImage)}
              src={solar3}
              alt="alt"
              width={180}
              height={180}
            />
          </div>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <h3 {...stylex.props(s.description)}>
                Customized System Design
              </h3>
            </div>
            <div {...stylex.props(s.location)}>
              <p>Based on the assessment and feasibility study, we design a customized solar system that meets your specific requirements.</p>
            </div>
          </div>

        </div>

        <div {...stylex.props(s.gridItem)}>

          <div {...stylex.props(s.gridImage)}>
            <Image
              {...stylex.props(s.adImage)}
              src={solar4}
              alt="alt"
              width={180}
              height={180}
            />
          </div>

          <div {...stylex.props(s.gridContainer)}>
            <div {...stylex.props(s.gridDetails)}>
              <h3 {...stylex.props(s.description)}>
                Proposal and Contracting
              </h3>
            </div>
            <div {...stylex.props(s.location)}>
              <p>We provide a comprehensive proposal outlining the system design, projected energy savings, financial analysis, and cost estimates.</p>
            </div>
          </div>

        </div>


      </div>

    </section >
  )
}

const s = stylex.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: $.maxWidth,
    paddingTop: spacing.md
  },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(4, minmax(0, 1fr))",
      "@media (max-width: 1100px) and (min-width: 900px)": "repeat(3, minmax(0, 1fr))",
      "@media (max-width: 900px) and (min-width: 700px)": "repeat(2, minmax(0, 1fr))",
      "@media (max-width: 700px)": "1fr",
    },
    margin: `${spacing.xs} ${spacing.md}`,
    gap: 16,
  },
  link: {
    cursor: "pointer",
    color: colors.inverted,
    textDecoration: "none"
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.animationDarkBg,
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    position: "relative",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.xBorderColor,
    boxShadow: colors.invertedShadows,
  },
  gridImage: {
    margin: `0 0 ${spacing.xxs} 0`,
  },
  adImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    padding: `0 ${spacing.md}`,
    margin: `0 0 ${spacing.xs} 0`,
  },
  gridDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeHeartSvg: {
    cursor: "pointer"
  },
  description: {
    fontSize: text.p,
    fontWeight: 500,
    lineHeight: "22px"
  },
  detailsPrice: {
    fontSize: text.p,
    fontWeight: "bold",
    paddingRight: `${spacing.xxs}`,
    paddingTop: `${spacing.xxs}`
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: `${spacing.xxs}`
  },
  locationSvg: {
    paddingRight: `${spacing.xxs}`,
  },
})


