import WidgetCeo from "@/components/widgets/widgetCeo"
import WidgetTitle from '@/components/widgets/widgetTitle'
import WidgetAbout from '@/components/widgets/widgetAbout'

export default function About() {
  return (
    <div >
      <WidgetTitle title='About Us' subtitle="" spaceTop />
      <WidgetAbout inversedImage />
      <WidgetCeo />
    </div>
  )
}
