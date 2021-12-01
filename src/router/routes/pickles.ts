import FAVICONS from "@/constants/favicons";
const pickles = [
{
  path: '/pickles/gigashlepa',
    name: 'GigaShlepa',
  component: () => import('@/views/test/GigaShlepa.vue'),
  meta: {
  title: 'GigaShlepa',
    favicon: FAVICONS.GIGA_SHLEPA,
    layout: 'main'
}
}
]
export default pickles