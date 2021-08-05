export type WorkProps = {
  project_name: string
  title: string
  type: 'All' | 'React' | 'React-native' | 'Android'
  thum_img: string
}
export const workList: WorkProps[] = [
  {project_name: '먼슬리키친', title: 'monthly', type: 'React-native', thum_img: '/assets/svgs/monthly_main.svg'},
  {project_name: 'Saguaro', title: 'saguaro', type: 'React-native', thum_img: '/assets/svgs/saguaro_main.svg'},
  {project_name: '모두의 신상', title: 'dosode', type: 'React-native', thum_img: '/assets/svgs/dosode_main.svg'},
  {project_name: 'Standard pass', title: 'standard', type: 'React-native', thum_img: '/assets/svgs/standard_main.svg'},
  {project_name: '인생네컷', title: 'life', type: 'React-native', thum_img: '/assets/svgs/life_main.svg'},
]
