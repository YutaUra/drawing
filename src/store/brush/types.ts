/* -------------------------------------------------------------------------- */
type Mode = 'source-over' | 'destination-out'

export interface S {
  mode: Mode
  color: string
  lineWidth: number
}
/* -------------------------------------------------------------------------- */

export interface G {}

export interface RG {}

/* -------------------------------------------------------------------------- */

export interface M {
  setMode: { mode: Mode }
  setColor: { color: string }
  setLineWidth: { lineWidth: number }
}

export interface RM {
  'brush/setMode': M['setMode']
  'brush/setColor': M['setColor']
  'brush/setLineWidth': M['setLineWidth']
}

/* -------------------------------------------------------------------------- */

export interface A {}

export interface RA {}

/* -------------------------------------------------------------------------- */
