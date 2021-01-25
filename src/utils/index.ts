

export function prepareDateParts(date: string): number[] {
  const parts = date.split(/\D|T/)  // separate parts by any non-digit delimiter
  parts.splice(3);  // discard time component

  const validDate = checkISOFormat(parts);

  if (validDate) {
    return parts.map((el, index) => {
      if (index === 1) {
        // in js month starts from 0. need to reduce this element
        return Number(el) - 1;
      }

      return Number(el);
    });
  }

  throw new Error('Unsupported format')
}

export function prepareSchedule(schedule: number[]) {
  return schedule.map(el => el === 7 ? 0 : el);
}

function checkISOFormat(parts: string[]) {
  return checkYears(parts[0]) && checkMonth(parts[1]) && checkDays(parts[2])
}

function checkYears(part: string) {
  return part.length === 4 && validateYearNumber(part);
}

function checkMonth(part: string) {
  return part.length >= 1 && part.length < 3 && validateMonthNumber(part);
}

function checkDays(part: string) {
  return part.length === 2 && validateDayNumber(part);
}

function validateYearNumber(part: string) {
  if (Number(part) > 0) {
    return true
  }

  throw new Error('Invalid date')
}
function validateMonthNumber(part: string) {
  if (Number(part) > 0 && Number(part) < 13) {
    return true
  }

  throw new Error('Invalid date')
}
function validateDayNumber(part: string) {
  if (Number(part) > 0 && Number(part) < 32) {
    return true
  }

  throw new Error('Invalid date')
}

export function validateSchedule(schedule: number[]) {
  return schedule.length > 0 && schedule.map(el => !isNaN(el)).every(el => el === true);
}