import { LineConfig } from 'konva/types/shapes/Line'

const normalSize = 1000
const roundSize = 0

export const round = (n: number, r = 0) => {
  const base = 10 ** r
  return Math.round(n * base) / base
}

export const normalLinesToFitLines = (
  normalLines: LineConfig[],
  size: number
) => {
  return normalLines.map((conf: LineConfig) => {
    return Object.assign({}, conf, {
      points: conf.points.map((p) => round((p * size) / normalSize), roundSize)
    })
  })
}

export const fitLinesToNormalLines = (
  normalLines: LineConfig[],
  size: number
) => {
  return normalLines.map((conf: LineConfig) => {
    return Object.assign({}, conf, {
      points: conf.points.map((p) => round((p * normalSize) / size), roundSize)
    })
  })
}

export const changeLinesRatio = (
  normalLines: LineConfig[],
  beforeSize: number,
  afterSize: number
) => {
  return normalLines.map((conf: LineConfig) => {
    return Object.assign({}, conf, {
      points: conf.points.map(
        (p) => round((p * afterSize) / beforeSize),
        roundSize
      )
    })
  })
}
