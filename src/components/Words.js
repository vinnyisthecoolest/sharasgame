import React from 'react'
import { Button, Heading, Subhead, Box, Flex, Text } from 'rebass'
import { dripForm  } from 'react-drip-form'
import { Input } from 'react-drip-form-components'

const Words = ({ meta, handlers, team, otherTeam, teamState, onWord, players }) => {

  const renderInputs = () => {
    const range = [...Array(players * 3).keys()]
    return (
      range.map((i) =>
        <Box w={1/4} m={1} key={i}>
          <Input
            id={i}
            type="text"
            name={'word' +  i}
            label="word"
            value={otherTeam.words[i]}
            onChange={onWord(teamState, i)}
            validations={{ required: true, max: 180 }}
          />
        </Box>
      )
    )
  }

  return (
    <div>
      <Heading
        center
        bg='primary'
        p={3}
        color='textP'
        children="Words"
      />
      <Subhead center my={3} color='black'>
        {team.name}, pick some words for {otherTeam.name}
      </Subhead>

      <form onSubmit={handlers.onSubmit}>
        <Flex justify='center' align='center' wrap={true}>
          { renderInputs() }
        </Flex>

        <Text center py={4} >
          <Button
            type="submit"
            bg='secondary'
            px={6}
            children="GO GO GO"
          />
        </Text>
      </form>
    </div>
  )
}

export default dripForm()(Words)
