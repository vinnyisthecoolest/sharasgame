import React from 'react'
import { Heading, Subhead } from 'rebass'

const Gameover = ({ teamA, teamB }) =>
  <div>
    <Heading
      center
      bg='primary'
      p={3}
      color='textP'
      children="GAMEOVER BRUH"
    />
    <Subhead center f={100} my={4} px={4} color='black'>
      {
        (teamA.score === teamB.score)
        ? 'NOBODY WINS!'
        : (teamA.score > teamB.score)
          ? `${teamA.name} WINS!`
          : `${teamB.name} WINS!`
      }
    </Subhead>
  </div>

export default Gameover
