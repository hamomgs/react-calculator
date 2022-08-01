import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 640px;
  align-items: center;
  justify-content: end;
  gap: 25px;
  flex-direction: column;
  padding: 40px 30px 30px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.25),
  5px 5px 5px rgba(0,0,0,0.25),
  inset -5px -5px 15px rgba(0,0,0,0.5),
  inset 5px 5px 15px rgba(0,0,0,0.5);
  transform: scale(0.9);
  transition: 0.2s ease-in-out;
  background-color: ${(e) => e.color || '#333'};

  @media (max-width:900px) {
    transform: scale(0.8);
  }
  @media (max-width: 400px) {
    transform: scale(0.7);
  }
`

export const BoxBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 338px;
`

export const Button = styled.button`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-image: linear-gradient(180deg, #282828, #202020);
  box-shadow: inset -8px 0 8px rgba(0, 0, 0, 0.15),
  inset 0 -8px 8px rgba(0, 0, 0, 0.25),
  0 0 0 2px rgba(0, 0, 0, 0.75),
  10px 20px 25px rgba(0, 0, 0, 0.4);
  color: #fff;
  margin: 2px;
  cursor: pointer;
  transform: scale(0.9);
  overflow: hidden;
  transition: ease-in-out 0.1s;
  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 4px;
    bottom: 14px;
    right: 12px;
    background-image: linear-gradient(90deg, #232323, #4a4a4a);
    box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.25),
    10px 5px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    border-left: 1px solid #0004;
    border-bottom: 1px solid #0004;
    border-top: 1px solid #0009;
    transition: ease-in-out 0.15s;
  }
  &:active {
      filter: brightness(1.5);
      transform: translateY(2px) scale(0.85);
      &::before {
      transform: translateY(2px) scale(0.95);
      }
    }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(8),
  &:nth-child(12),
  &:nth-child(16),
  &:nth-child(20) {
    background: #8b0000;
    &::before {
      background-image: linear-gradient(90deg, #6f0000, #ffffff5c);
      border-left: 1px solid #fff4;
      border-bottom: 1px solid #fff4;
      border-top: 1px solid #fff4;
    } 
  }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(8),
  &:nth-child(12),
  &:nth-child(16),
  &:nth-child(20) {
    background: ${(e) => e.color || '#005296'};
    &::before {
      background-image: linear-gradient(90deg, ${(e) => e.value || '#004278'}, #ffffff5c);
    }
  }
`

export const Span = styled.span`
  position: relative;
  left: -3px;
  top: -3px;
  font-style: normal;
  font-size: 20px;
`

export const Display = styled.h2`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 338px;
  height: 80px;
  padding: 0 10px;
  font-size: 40px;
  font-family: 'CalculatorFont', consolas, sans-serif;
  box-shadow: inset 5px 30px 60px -12px rgba(0, 0, 0, 0.25), 
    inset 0px 18px 36px -18px rgba(0, 0, 0, 0.9),
    inset -5px -30px 60px -12px rgba(0, 0, 0, 0.25), 
    inset 0px -18px 10px -18px rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(e) => e.color || '#a7af7c'};
`
export const ChangeColorBtn = styled.button`
  position: absolute;
  display: flex;
  width: 45px;
  height: 45px;
  top: 0px;
  left: 50px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(3, 3, 3, 0.5),
  inset 2px 2px 5px rgba(3, 3, 3, 0.25),
  inset -3px -3px 5px rgba(3, 3, 3, 0.5);
  border: none;
  border-radius: 0 0 15px 15px;
  font-size: 14px;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  &::-ms-expand { display: none };
  cursor: pointer;
  transition: 0.2s ease-in-out;
  background-color: #666;

  &:hover {
    font-size: 16px;
  }

  &:active {
    font-size: 10px;
  }
`