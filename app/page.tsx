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
      <WidgetTitle title="Elevate your world with Sun-Powered Solutions" subtitle="Explore Energy Savings, Efficiency Devices, and Expert Consultations. " />
      <WidgetCards />
      {/* <WidgetService /> */}

      <WidgetAbout />
      {/* <WidgetCeo /> */}
      <WidgetPartner />
      <WidgetBlog />
      <WidgetGetInTouch />
    </>
  )
}
