// Write your code here
import {useState} from 'react'
import {
  Container,
  Heading,
  SubHeading,
  Para,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [text, setText] = useState(false)

  const onClickButton = () => setText(prevState => !prevState)

  return (
    <Container>
      <Heading>React Hooks</Heading>
      <SubHeading>Hooks are a new addition to React</SubHeading>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {text ? (
        <>
          <Para>{reactHooksDescription}</Para>
          <Button type="button" onClick={onClickButton}>
            Read Less
          </Button>
        </>
      ) : (
        <>
          <Para>{reactHooksDescription.slice(0, 170)}</Para>
          <Button type="button" onClick={onClickButton}>
            Read More
          </Button>
        </>
      )}
    </Container>
  )
}

export default ReadMore
