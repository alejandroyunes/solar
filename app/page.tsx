import Billboard from "@/components/billboard"
import WidgetCeo from "@/components/widgets/widgetCeo"
import WidgetService from "@/components/widgets/widgetService"
import WidgetAbout from '@/components/widgets/widgetAbout'
import WidgetPartner from '@/components/widgets/widgetPartners'
import WidgetBlog from '@/components/widgets/widgetBlog'
import WidgetGetInTouch from '@/components/widgets/widgetGetInTouch'
import WidgetFooter from '@/components/widgets/widgetFooter'
import BillboardTwo from "@/components/billboardTwo"

export default function Home() {

  return (
    <>
      <BillboardTwo />
      {/* <Billboard /> */}
      <WidgetAbout />
      <WidgetCeo />
      <WidgetService />
      <WidgetPartner />
      <WidgetBlog />
      <WidgetGetInTouch />
    </>
  )
}
