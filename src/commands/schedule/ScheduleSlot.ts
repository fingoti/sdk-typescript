export const ScheduleSlot = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  } as const;
  
  export type ScheduleSlot = typeof ScheduleSlot[keyof typeof ScheduleSlot];