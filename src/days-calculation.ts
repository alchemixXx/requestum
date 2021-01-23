import moment from "moment";
import { prepareDate, prepareSchedule, validateSchedule } from "./utils";

export function dayCalculation(startDate: string, trainingCount: number, schedule: number[]) {
  if (!validateSchedule(schedule)) {
    throw new Error(`Wrond shedule: ${schedule}`);
  }

  try {
    const isoDate = prepareDate(startDate);
    const cleanedSchedule = prepareSchedule(schedule);
    let daysCounter = 0;
    let trainingCounter = 0;
    let momentDate = moment.utc(isoDate, true);
    while (trainingCounter < trainingCount) {
      const dayOfWeek = momentDate.day();

      if (cleanedSchedule.includes(dayOfWeek)) {
        trainingCounter++;
      }

      daysCounter++;
      momentDate.add(1, 'day');
    }

    return daysCounter
  } catch (err) {
    if (err.message === 'Unsupported format') {
      throw new Error(`Date ${startDate} does not fit ISO order`)
    }

    if (err.message === 'Invalid date') {
      throw new Error(`Date ${startDate} has invalid values`)
    }

    throw err;
  }
}
