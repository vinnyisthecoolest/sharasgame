import React from 'react'

import { Button, Heading, Subhead, Text } from 'rebass'

const Ready = ({ team, onReady, round, teamA, teamB }) =>
  <div>
    <Heading
      center
      bg='primary'
      p={3}
      color='textP'
      children={'Round: ' + (round + 1)}
    />

    <Subhead center f={50} mt={4} px={4} color='black'>
      Ready {team.name}?
      <br />
      Pick a player to start
    </Subhead>

    <Text center py={4} >
      <Button
        onClick={onReady}
        bg='secondary'
        px={6}
        children="GO GO GO"
      />
    </Text>
  </div>

export default Ready
