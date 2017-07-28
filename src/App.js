import React, { Component } from 'react'
import styled from 'styled-components'
import { Absolute, Provider, Flex, Button } from 'rebass'

import Home from './components/Home'
import Words from './components/Words'
import Game from './components/Game'
import Hack from './components/Hack'

import { theme } from './styles/theme'

export default class App extends Component {
  state = {
    teamA: {
      name: '',
      words: [],
      score: 0,
    },
    teamB: {
      name: '',
      words: [],
      score: 0,
    },
    players: 2,
    step: 0,  // 0: team, 1: words, 2: hack, 3: words, 4: game
  }

  onTeamInput = ({ target }) => {
    this.setState({
      [target.name]: {
        ...this.state[target.name],
        name: target.value,
      }
    })
  }

  onPlayers = ({ target }) => {
    this.setState({ players: target.value })
  }

  onWord = (teamName, id) => ({ target }) => {
    const team = teamName
    const i = id
    const words = this.state[team].words.slice('')
    words[i] = target.value

    this.setState({
      [team]: {
        ...this.state[team],
        words: words,
      }
    })
  }

  goStep = () => {
    this.setState({
      step: this.state.step + 1
    })
    localStorage.setItem('state', this.state)
  }

  onScore = (team, inc) => {
    this.setState({
      [team]: {
        ...this.state[team],
        score: this.state[team].score + inc
      }
    })
  }

  test = () => {
    console.log(localStorage.getItem('state'))
  }

  render() {
    const { teamA, teamB, players, step } = this.state
    return (
      <Provider theme={theme}>

        <Absolute right p={4}>
          <Button
            onClick={this.test}
            bg='pink'
            children="NEW GAME"
          />
        </Absolute>

        <Wrapper justify='center' align='center'>
          <GameBox>
            { [
                <Home
                  onValidSubmit={this.goStep}
                  teamA={teamA}
                  teamB={teamB}
                  players={players}
                  onTeamInput={this.onTeamInput}
                  onPlayers={this.onPlayers}
                />,
                <Words
                  onValidSubmit={this.goStep}
                  players={players}
                  team={teamA}
                  otherTeam={teamB}
                  teamState={'teamB'}
                  onWord={this.onWord}
                />,
                <Hack
                  goStep={this.goStep}
                />,
                <Words
                  onValidSubmit={this.goStep}
                  players={players}
                  team={teamB}
                  otherTeam={teamA}
                  teamState={'teamA'}
                  onWord={this.onWord}
                />,
                <Game
                  teamA={teamA}
                  teamB={teamB}
                  onScore={this.onScore}
                  players={players}
                />,
              ][step]
            }
          </GameBox>
        </Wrapper>
      </Provider>
    )
  }
}


// STYLES
const Wrapper = styled(Flex)`
  height: 100vh;
  background: ${theme.colors.primaryLight};
`

const GameBox = styled.div`
  background: ${theme.colors.box};
  max-width: 800px;
`

// const testState = {
//   teamA: {
//     name: 'batman',
//     words: 'ant bat cat dog egg fat'.split(' '),
//     score: 0,
//   },
//   teamB: {
//     name: 'superman',
//     words: 'one two three four five six'.split(' '),
//     score: 0,
//   },
//   players: 2,
//   step: 4,  // 0: team, 1: words, 2: hack, 3: words, 4: game
// }
