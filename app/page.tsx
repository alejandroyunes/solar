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
      <WidgetTitle title="Benefits to Save Energy" subtitle="Saving energy offers numerous benefits, both on an individual level and for the environment." />
      <WidgetCards />
      {/* <WidgetService /> */}

      {/* <WidgetAbout />
      <WidgetCeo /> */}
      <WidgetPartner />
      <WidgetBlog />
      <WidgetGetInTouch />
    </>
  )
}
