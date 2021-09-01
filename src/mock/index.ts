import monthlyMainSvg from '../assets/svgs/monthly_main.svg'
import dosodeMainSvg from '../assets/svgs/dosode_main.svg'
import standardMainSvg from '../assets/svgs/standard_main.svg'
import lifeMainSvg from '../assets/svgs/life_main.svg'
import cyfairMainSvg from '../assets/svgs/cyfair_main.svg'

export type WorkProps = {
  project_name: string
  title: string
  type: 'All' | 'React' | 'React-native' | 'Android'
  thum_img: string
}

export const workList: WorkProps[] = [
  {project_name: '먼슬리키친', title: 'monthly', type: 'React-native', thum_img: monthlyMainSvg},
  // {project_name: '사구와로', title: 'saguaro', type: 'React-native', thum_img: '/assets/svgs/saguaro_main.svg'},
  {project_name: '모두의 신상', title: 'dosode', type: 'React-native', thum_img: dosodeMainSvg},
  {project_name: '스탠다드 패스', title: 'standard', type: 'React-native', thum_img: standardMainSvg},
  {project_name: '인생네컷', title: 'life', type: 'React-native', thum_img: lifeMainSvg},
  {project_name: '싸이페어', title: 'cyfair', type: 'React-native', thum_img: cyfairMainSvg},
]
