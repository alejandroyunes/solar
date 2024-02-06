import WidgetTitle from '@/components/widgets/widgetTitle'
import WidgetService from "@/components/widgets/widgetService"
import WidgetCards from '@/components/widgets/widgetCards'
import WidgetBlog from '@/components/widgets/widgetBlog'

export default function Services() {
  return (
    <div>
      <WidgetTitle title='Services' subtitle='' spaceTop />
      <WidgetBlog />
    </div>
  )
}
