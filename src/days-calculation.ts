import { prepareDateParts, prepareSchedule, validateSchedule } from "./utils";

export function dayCalculation(startDate: string, trainingCount: number, schedule: number[]) {
  if (!validateSchedule(schedule)) {
    throw new Error(`Wrond shedule: ${schedule}`);
  }

  try {
    const [year, month, day] = prepareDateParts(startDate);
    const cleanedSchedule = prepareSchedule(schedule);
    let daysCounter = 0;
    let trainingCounter = 0;
    let dateObj = new Date(Date.UTC(year, month, day));
    while (trainingCounter < trainingCount) {
      const dayOfWeek = dateObj.getDay();

      if (cleanedSchedule.includes(dayOfWeek)) {
        trainingCounter++;
      }

      daysCounter++;
      dateObj.setDate(dateObj.getDate() + 1);
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
