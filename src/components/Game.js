import React, { Component } from 'react'
import { number, func, object } from 'prop-types';
import { chunk } from 'lodash'

import Gameover from './Gameover'
import Guess from './Guess'
import Ready from './Ready'
import Challenge from './Challenge'

import { Subhead, Text } from 'rebass'

export default class Game extends Component {
  state = {
    isReady: false,
    isChallenge: false,
    teamNum: 0,
    teamToggle: false,
    wordNum: 0,
    round: 0,
    rounds: this.props.players - 1,
    wordsA: chunk(this.props.teamA.words, 3),
    wordsB: chunk(this.props.teamB.words, 3),
    gameState: true,
  }

  static propTypes = {
    teamA: object.isRequired,
    teamB: object.isRequired,
    players: number.isRequired,
    onScore: func.isRequired,
  }

  onReady = () => {
    this.setState({ isReady: true })
  }

  nextWord = (team, inc) => (e) => {
    this.props.onScore(team, inc)
    const { wordNum, teamToggle, round } = this.state

    return (
      (wordNum <= 1)
      ? this.setState({ wordNum: wordNum + 1 })
      : this.setState({
          round: teamToggle ? round + 1 : round,
          wordNum: 0,
          teamToggle: !teamToggle,
          isReady: false,
        })
    )
  }

  onChallenge = () => {
    this.setState({ isChallenge: !this.state.isChallenge })
  }

  renderGameRound = () => {
    const { teamToggle, wordNum, isReady, wordsA, wordsB, round, rounds, isChallenge } = this.state
    const team = (round <= rounds)
      ? (!teamToggle) ? 'teamA' : 'teamB'
      : ''
    const word = (team)
      ? (team === 'teamA') ? wordsA[round][wordNum] : wordsB[round][wordNum]
      : ''

    if (round <= rounds) {
      if (isReady) {
        return (
          (isChallenge)
          ? <Challenge
              onChallenge={this.onChallenge}
              nextWord={this.nextWord}
              team={team}
            />
          : <Guess
              word={word}
              nextWord={this.nextWord}
              team={team}
              onChallenge={this.onChallenge}
            />
        )
      } else {
        return (
          <Ready
            onReady={this.onReady}
            team={this.props[team]}
            teamA={this.props.teamA}
            teamB={this.props.teamB}
            round={round}
          />
        )
      }
    } else {
      return (
        <Gameover
          teamA={this.props.teamA}
          teamB={this.props.teamB}
        />
      )
    }
  }

  render() {
    const { teamA, teamB } = this.props
    return(
      <div>

        { this.renderGameRound() }

        <Subhead
          center
          bg='primaryDark'
          color='textP'
          p={2}
        >
          <Text>
            {teamA.name}: {teamA.score}
              &nbsp;&nbsp;&nbsp;
            {teamB.name}: {teamB.score}
          </Text>
        </Subhead>

      </div>
    )
  }
}
