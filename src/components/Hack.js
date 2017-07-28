import React from 'react'
import { Heading, Text, Subhead, Button } from 'rebass'

const Hack = ({ goStep }) =>
  <div>
    <Heading
      center
      bg='primary'
      p={3}
      color='textP'
      children="Pass the thing"
    />

    <Subhead center f={50} mt={4} px={4} color='black'>
      It's the other team's turn. Ready?
    </Subhead>

    <Text center py={4} >
      <Button
        onClick={goStep}
        bg='secondary'
        px={6}
        children="GO GO GO"
      />
    </Text>
  </div>

export default Hack
