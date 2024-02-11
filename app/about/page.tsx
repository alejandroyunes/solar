
import WidgetCeo from "../../components/widgets/widgetCeo"
import WidgetTitle from '../../components/widgets/widgetTitle'
import WidgetAbout from '../../components/widgets/widgetAbout'
import { colors, spacing, text } from "../globalTokens.stylex"
import * as stylex from "@stylexjs/stylex"

export default function About() {
  return (
    <>
      <WidgetTitle title='About Us' subtitle="" spaceTop />
      <div {...stylex.props(s.aboutUsTitle)}>
        <div>
          <h3 {...stylex.props(s.subTitle)}>Our History</h3>
          <p>{`At Sienar Solar, our commitment lies in delivering sustainable and renewable energy solutions that empower individuals, businesses, and communities. Fueled by a passion for harnessing the sun's power, we aim to make a positive environmental impact, aiding clients in reducing their carbon footprint and energy costs.`}</p>
        </div>

      </div>

      <div {...stylex.props(s.aboutUs)}>
        <div>
          <h3 {...stylex.props(s.subTitle)}>Our Mission</h3>
          <p>As a premier solar energy provider, we excel in crafting, installing, and servicing cutting-edge solar panel systems for diverse properties. Our adept team, boasting extensive experience in solar technology, guarantees clients receive customized, dependable, and cost-efficient solar solutions.</p>
        </div>
        <div>
          <h3 {...stylex.props(s.subTitle)}>Our Vision</h3>
          <p>We embrace the transformative potential of solar energy for a sustainable future. Our dedication to quality and customer contentment shines through every project. Beginning with the initial consultation and extending to post-installation support, we collaborate closely with clients, offering personalized guidance, transparent communication, and outstanding service throughout the process.</p>
        </div>
      </div>


      <WidgetAbout
        inversedImage
        title="Empower with Solar"
        subTitle='Accessing the Clean and Abundant Energy of the Sun for a Sustainable Tomorrow.'
        description="Solar energy is a renewable form of energy that harnesses the power of the sun to generate electricity or heat. It is considered one of the cleanest and most abundant sources of energy available to us."
      />
    </>
  )
}



const s = stylex.create({

  subTitle: {
    marginBottom: spacing.sm,
    textAlign: {
      default: 'center',
      '@media (max-width: 900px)': 'left'
    }
  },
  title: {
    position: 'absolute',
    left: '50%',
    top: '25%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    // height: '400px',
    fontSize: text.h5,
    textTransform: 'uppercase',
    color: colors.white
  },
  aboutUsTitle: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    margin: '24px 0',
    gap: spacing.sm
  },
  aboutUs: {
    display: 'grid',
    gridTemplateColumns: {
      default: '1fr 1fr',
      '@media (max-width: 900px)': '1fr'
    },
    margin: '30px 0 24px',
    gap: spacing.sm
  },
})