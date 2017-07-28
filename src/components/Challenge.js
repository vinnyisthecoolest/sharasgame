import React from 'react'
import { Button, Heading, Subhead, Text } from 'rebass'

const Challenge = ({ nextWord, onChallenge, team }) => {
  const goodChallenge = () => {
    onChallenge()
    nextWord(team, 1)()
  }

  const badChallenge = () => {
    onChallenge()
    nextWord(team, 0)()
  }

  return (
    <div>
      <Heading
        center
        bg="primary"
        p={3}
        color="textP"
        children="Challenge"
      />

      <Subhead center mt={3} px={4} color='black'>
        When your shit's been figured out, get ready and click one of the
        buttons to continue the game
      </Subhead>

      <Text center py={4}>
        <Button
          onClick={goodChallenge}
          bg='green'
          px={3}
          mx={2}
          children="GOOD CHALLENGE - STUPID WORD"
        />
        <Button
          onClick={badChallenge}
          bg='red'
          px={3}
          mx={2}
          children="BAD CHALLENGE - YOU'RE STUPID"
        />
      </Text>
    </div>
  )
}

export default Challenge
