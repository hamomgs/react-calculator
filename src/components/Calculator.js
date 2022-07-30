import React, { Component } from 'react';
import { Container, Display, BoxBtn, Span, Button, ChangeColorBtn } from '../assets/styles/styles.js'

export default class Calculator extends Component {
  state = {
    num: '0',
    lastNum: '',
    operator: '',
    validation: true,
    bgChange: 1
  }

  // Limpar todo o display e reiniciar
  clearAll = () => {
    this.setState({
      num: '0',
      lastNum: '',
      operator: '',
      validation: true
    })
  }

  // Apagar último número do display
  clear = () => {
    const { validation, num } = this.state
    if (validation && num !== '0') {
      this.setState({
        num: this.state.num.slice(0, -1)
      })
      if (num.length === 0) {
        this.setState({
          num: '0'
        })
      }
    }
  }

  // Adicionar número
  addNumber = (number) => {
    const { num, validation } = this.state

    if(number === '.' && num.at(-1) !== '.'){
        this.setState({
          num: this.state.num.concat(number)
        })
    } else if (num === '0') {
      this.setState({
        num: number
      })
    } else if (validation && number !== '.') {
      this.setState({
        num: this.state.num.concat(number)
      })
    }
  }

  // Guardar o operador
  addOperator = (operatorSymbol) => {
    const { validation, operator, num } = this.state
      if (validation && operator.length < 1 && num !== '0') {
        this.setState({
          lastNum: this.state.num,
          num: '0',
          operator: operatorSymbol
        })
      }
  }

  // Calcular com base no operador
  calculate = () => {
    const { operator, validation, num } = this.state
    if (validation && num !== '0' && num !== '') {
      this.setState({
        validation: false
      })
      if (operator === '/') {
        this.setState({
          num: Number(this.state.lastNum) / Number(this.state.num)
        })
      } else if (operator === 'x') {
        this.setState({
          num: Number(this.state.lastNum) * Number(this.state.num)
        })
      } else if (operator === '-') {
        this.setState({
          num: Number(this.state.lastNum) - Number(this.state.num)
        })
      } else if (operator === '+') {
        this.setState({
          num: Number(this.state.lastNum) + Number(this.state.num)
        })
      }
    }
  }

  // Calcular porcentagem (baseado na calculadora do celular)
  calculatePorcentage = () => {
    const { validation, num } = this.state
    if (validation && num !== '0') {
      this.setState({
        validation: false,
        num: Number(this.state.num) / 100
      })
    }
  }

  // Mudar sinal do número (positivo/negativo)
  changeSgin = () => {
    const { num, validation } = this.state
    if (validation && num > 0) {
      this.setState({
        num: this.state.num * (-1)
      })
    } else if (validation && num < 0) {
      this.setState({
        num: Math.abs(this.state.num).toString()
      })
    } 
  }

  // Alterar aparencia da calculadora e botões
  changeStyle = () => {
    const { bgChange } = this.state
    if(bgChange === 1) {
      this.setState({
        bg: '#3f2150',
        bgButton: '#350c56',
        bgBtn: '#2a0a45',
        bgChange: 5
      })
    } else if (bgChange === 2) {
      this.setState({
        bg: '#36412f',
        bgButton: '#1d3a28',
        bgBtn: '#172e20',
        bgChange: 4
      })
    } else if (bgChange === 3) {
      this.setState({
        bg: '#333',
        bgDisplay: '#a7af7c',
        bgButton: '',
        bgBtn: '',
        bgChange: 1
      })
    } else if (bgChange === 4) {
      this.setState({
        bg: '#a4854b',
        bgDisplay: '#bdb76b',
        bgButton: '#c53813',
        bgBtn: '#c53813',
        bgChange: 3
      })
    } else if (bgChange === 5) {
      this.setState({
        bg: '#a51b0b',
        bgButton: '',
        bgBtn: '',
        bgChange: 2
      })
    }
  }

  render() {
    return (
      <Container color={this.state.bg}>
        <ChangeColorBtn onClick={() => {this.changeStyle()}}>✨</ChangeColorBtn>
        <Display color={this.state.bgDisplay}>{this.state.num}</Display>
        
        <BoxBtn>
          <Button onClick={() => {this.clear()}}> <Span>C</Span> </Button>
          <Button onClick={() => {this.clearAll()}}> <Span>AC</Span> </Button>

          <Button value={this.state.bgBtn} color={this.state.bgButton}
            onClick={() => {this.calculatePorcentage()}}>
            <Span>%</Span>
          </Button>

          <Button value={this.state.bgBtn} color={this.state.bgButton} 
            onClick={() => {this.addOperator('/')}}> 
            <Span>/</Span>
          </Button>

          <Button onClick={() => {this.addNumber('7')}}> <Span>7</Span> </Button>
          <Button onClick={() => {this.addNumber('8')}}> <Span>8</Span> </Button>
          <Button onClick={() => {this.addNumber('9')}}> <Span>9</Span> </Button>

          <Button value={this.state.bgBtn} color={this.state.bgButton}
            onClick={() => {this.addOperator('x')}}> 
            <Span>x</Span> 
          </Button>

          <Button onClick={() => {this.addNumber('4')}}> <Span>4</Span> </Button>
          <Button onClick={() => {this.addNumber('5')}}> <Span>5</Span> </Button>
          <Button onClick={() => {this.addNumber('6')}}> <Span>6</Span> </Button>

          <Button value={this.state.bgBtn} color={this.state.bgButton} 
            onClick={() => {this.addOperator('-')}}> 
            <Span>-</Span> 
          </Button>

          <Button onClick={() => {this.addNumber('1')}}> <Span>1</Span> </Button>
          <Button onClick={() => {this.addNumber('2')}}> <Span>2</Span> </Button>
          <Button onClick={() => {this.addNumber('3')}}> <Span>3</Span> </Button>

          <Button value={this.state.bgBtn} color={this.state.bgButton}
            onClick={() => {this.addOperator('+')}}> 
            <Span>+</Span> 
          </Button>

          <Button value={this.state.bgBtn} color={this.state.bgButton}
            onClick={() => {this.changeSgin()}}> 
            <Span>+/-</Span> 
          </Button>

          <Button onClick={() => {this.addNumber('0')}}> <Span>0</Span> </Button>
          <Button onClick={() => {this.addNumber('.')}}> <Span>.</Span> </Button>

          <Button value={this.state.bgBtn} color={this.state.bgButton}
            onClick={() => {this.calculate()}}> 
            <Span>=</Span> 
          </Button>
        </BoxBtn>
      </Container>
    )
  }
}