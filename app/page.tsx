import Billboard from "@/components/billboard"
import WidgetCeo from "@/components/widgets/widgetCeo"
import WidgetService from "@/components/widgets/widgetService"
import WidgetAbout from '@/components/widgets/widgetAbout'
import WidgetPartner from '@/components/widgets/widgetPartners'
import WidgetBlog from '@/components/widgets/widgetBlog'
import WidgetGetInTouch from '@/components/widgets/widgetGetInTouch'
import WidgetFooter from '@/components/widgets/widgetFooter'
import BillboardTwo from "@/components/billboardTwo"
import WidgetTitle from "@/components/widgets/widgetTitle"
import WidgetCards from "@/components/widgets/widgetCards"

export default function Home() {

  return (
    <>
      <BillboardTwo />
      {/* <WidgetService /> */}
      <WidgetBlog />

      <WidgetAbout
        title="Our Working Hours"
        subTitle='Our vission is to make solar energy accessible'
        description="The process begins with an initial consultation where the solar energy company engages with the client to understand their energy needs, goals, and site-specific requirements."
        cta="/about"
        paragraphOne="MON-FRI: 9 AM – 22 PM"
        paragraphTwo="SATURDAY: 9 AM – 20 PM"
      />
      {/* <WidgetCeo /> */}
      {/* <WidgetPartner /> */}
      <WidgetTitle title="Explore Energy Savings, Efficiency Devices, and Expert Consultations." subtitle="Our process" />

      <WidgetCards />

      <WidgetGetInTouch />
    </>
  )
}
