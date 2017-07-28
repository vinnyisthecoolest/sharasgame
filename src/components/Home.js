import React from 'react'
import { Button, Heading, Subhead, Box, Flex, Text, Label } from 'rebass'
import { dripForm  } from 'react-drip-form'
import { Input } from 'react-drip-form-components'

const Home = ({ handlers, players, onPlayers, goStep, teamA, teamB, onTeamInput }) =>
  <div>
    <Heading
      center
      bg='primary'
      p={3}
      color='textP'
      children="Shara's Game"
    />

    <Subhead center my={3} px={140} color='black'>
      To play this game ask Shara for the rules. I don't really know
      how it works
    </Subhead>

    <form onSubmit={handlers.onSubmit}>
      <Flex px={5} justify='center' align='center' >
        <Box w={1/2} mx={2}>
          <Label f={2} color='black'>Team A</Label>
          <Input
            type="text"
            name="teamA"
            label="team name"
            value={teamA.name}
            onChange={onTeamInput}
          />
        </Box>

        <Box w={1/2} mx={2}>
          <Label f={2} color='black'>Team B</Label>
          <Input
            type="text"
            name="teamB"
            label="team name"
            value={teamB.name}
            onChange={onTeamInput}
          />
        </Box>
      </Flex>

      <Flex justify='center' mt={4} >
        <Box w={1/3}>
          <Label f={2} color='black'>Number of players per team</Label>
          <Input
            type="number"
            name="players"
            label="players"
            value={players}
            onChange={onPlayers}
          />
        </Box>
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

export default dripForm({
  validations: {
    teamA: { required: true, max: 180 },
    teamB: { required: true, max: 180 },
    players: { required: true, min: 2, max: 10 },
  },
})(Home)
