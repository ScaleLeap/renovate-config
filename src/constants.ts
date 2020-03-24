// https://docs.renovatebot.com/configuration-options/#schedule
// https://docs.renovatebot.com/presets-schedule/
export enum SCHEDULE {
  EARLY_MONDAYS = 'before 3am on Monday',
  WEEKDAYS = 'every weekday',
  MONTHLY = 'before 3am on the first day of the month',
}
