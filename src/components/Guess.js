import React, { Component } from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components'
import { Relative, Button, Heading, Flex, Text, Donut } from 'rebass'

export default class Guess extends Component {
  state = {
    currentCount: 30,
  }

  static propTypes = {
    nextWord: func.isRequired,
    team: string.isRequired,
    word: string.isRequired,
    onChallenge: func.isRequired,
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentCount: 30 })
  }

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount - 1
    })

    if (this.state.currentCount < 1) {
      this.props.nextWord(this.props.team, 0)()
      this.setState({ currentCount: 30 })
    }
  }

  warning = (colour) => {
    return this.state.currentCount <= 5 ? 'red' : colour
  }

  render() {
    const { word, nextWord, team, onChallenge } = this.props
    const { currentCount } = this.state
    return(
      <div>
        <Heading
          center
          f={75}
          bg={this.warning('primary')}
          px={6}
          py={3}
          color='textP'
          children={word.toUpperCase()}
        />

        <Text center pt={4}>
          <Button
            onClick={onChallenge}
            bg="pink"
            px={5}
            children="CHALLENGE"
          />
        </Text>

        <Flex px={5} mt={4} justify='center' align='center' >
          <Relative>
            <Donut
              value={currentCount/30}
              strokeWidth={5}
              size={250}
              color={this.warning('secondary')}
            />
            <Count
              bold
              f={6}
              children={currentCount}
              color='primary'
            />
          </Relative>
        </Flex>

        <Text center py={4}>
          <Button
            onClick={nextWord(team, 1)}
            bg='green'
            px={3}
            mx={3}
            children="GOT IT"
          />
          <Button
            onClick={nextWord(team, 0)}
            bg='red'
            px={3}
            mx={3}
            children="I SUCK"
          />
        </Text>
      </div>
    )
  }
}

// STYLES
const Count = styled(Text)`
  position: absolute;
  top: 50%;  /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%, -50%);
`
