import {} from 'react'
import {} from '@material-ui/core'
import * as Icon from '@material-ui/icons'
import styled from 'styled-components/macro'

import mkConst from '../../common/constants'
import {Title} from '../../components'

type ExpeItemProps = {
  year: string
  title: string
  content: string
}

const Experience = () => {
  const _renderExpeItem = ({year, title, content}: ExpeItemProps) => {
    return (
      <>
        <ExpeYear>
          <WorkIcon />
          {year}
        </ExpeYear>
        <ExpeTitle>{title}</ExpeTitle>
        <ExpeText>{content}</ExpeText>
      </>
    )
  }

  return (
    <Layout>
      <Title>Experience</Title>
      <ExpeLayout>
        <ExpeWrap>
          <ExpeLine />
          <ExpeTextWrap>
            {_renderExpeItem({
              year: '2019 - 2020',
              title: 'Experience',
              content:
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.',
            })}
            {_renderExpeItem({
              year: '2019 - 2020',
              title: 'Experience',
              content:
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.',
            })}
            {_renderExpeItem({
              year: '2019 - 2020',
              title: 'Experience',
              content:
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.',
            })}
          </ExpeTextWrap>
        </ExpeWrap>
        <ExpeWrap>
          <ExpeLine />
          <ExpeTextWrap>
            {_renderExpeItem({
              year: '2019 - 2020',
              title: 'Experience',
              content:
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.',
            })}
            {_renderExpeItem({
              year: '2019 - 2020',
              title: 'Experience',
              content:
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.',
            })}
            {_renderExpeItem({
              year: '2019 - 2020',
              title: 'Experience',
              content:
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.',
            })}
            {_renderExpeItem({
              year: '2019 - 2020',
              title: 'Experience',
              content:
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.',
            })}
            {_renderExpeItem({
              year: '2019 - 2020',
              title: 'Experience',
              content:
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.',
            })}
            {_renderExpeItem({
              year: '2019 - 2020',
              title: 'Experience',
              content:
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.',
            })}
            {_renderExpeItem({
              year: '2019 - 2020',
              title: 'Experience',
              content:
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto. Lorem ipsum dolor sit amet quoei simul congue exerci ad nec admodum perfecto.',
            })}
          </ExpeTextWrap>
        </ExpeWrap>
      </ExpeLayout>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme}) => `${theme.size.desktop}px`};
  align-self: center;
  margin: 60px 0;
`
const ExpeLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  padding: 16px;
  margin-top: 24px;
  ${({theme}) => theme.media.tablet`
      grid-template-columns: repeat(1, 1fr);
  `}
`
const ExpeWrap = styled.div`
  display: flex;
  height: min-content;
  background: white;
  padding: 24px;
  box-shadow: 1px 1px 32px #dddddd;
  border-radius: 16px;
`
const ExpeLine = styled.div`
  min-width: 2px;
  background: #ec5a65; // ${({theme}) => theme.color.background.primary};
  border-radius: 32px;
  margin-right: 24px;
`
const ExpeTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const ExpeYear = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({theme}) => theme.color.font.light};
  margin-top: 20px;
`
const WorkIcon = styled(Icon.WorkOutlineOutlined)`
  margin-right: 4px;
  color: #ec5a65;
`
const ExpeTitle = styled.span`
  position: relative;
  font-weight: 900;
  font-size: 20px;
  color: ${({theme}) => theme.color.font.primary};
  margin-bottom: 16px;
`
const ExpeText = styled.span`
  font-size: 16px;
  color: ${({theme}) => theme.color.font.light};
  word-break: normal;
  margin-bottom: 12px;
`

export default Experience
