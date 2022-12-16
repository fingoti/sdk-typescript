export type GPIONumber = 1 | 2 | 3 | 4;

export const Direction = {
  Output: 0,
  Input: 1,
} as const;

export type Direction = typeof Direction[keyof typeof Direction];

export const State = {
  Off: 0,
  On: 1,
} as const;

export type State = typeof State[keyof typeof State];
