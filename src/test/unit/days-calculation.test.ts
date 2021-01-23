import { dayCalculation } from "../../days-calculation";
import { assert } from 'chai';


const data = [
  { startDate: '2016.04.18', trainingCount: 6, schedule: [2, 4, 6], expectedResult: 13 },
  { startDate: '2016.04.18', trainingCount: 6, schedule: [1, 3, 5], expectedResult: 12 },
  { startDate: '2016.04.18', trainingCount: 6, schedule: [1, 4], expectedResult: 18 },
  { startDate: '2016.04.19', trainingCount: 6, schedule: [2, 4, 6], expectedResult: 12 },
  { startDate: '2016.04.21', trainingCount: 1, schedule: [2, 4, 6], expectedResult: 1 },
  { startDate: '2016.05.01', trainingCount: 2, schedule: [2], expectedResult: 10 },
  { startDate: '2016.05.10', trainingCount: 12, schedule: [2, 4, 6], expectedResult: 26 },
  { startDate: '2016.05.30', trainingCount: 3, schedule: [2], expectedResult: 16 },
  { startDate: '2016.05.30', trainingCount: 3, schedule: [1, 2, 3, 4, 5, 6], expectedResult: 3 },
  { startDate: '2016.10.12', trainingCount: 2, schedule: [1], expectedResult: 13 },
  { startDate: '2016.10.10', trainingCount: 200, schedule: [2, 4, 6], expectedResult: 466 },
  { startDate: '2016.10.10', trainingCount: 200, schedule: [7], expectedResult: 1400 },
  { startDate: '2016.10.10', trainingCount: 40000, schedule: [7], expectedResult: 280000 },
];

describe('dayCalculation()', function () {
  this.timeout(1 * 1000);
  data.forEach(item => {
    it(`Date: ${item.startDate}, number: ${item.trainingCount}, shedule: ${item.schedule}, res: ${item.expectedResult}`, function () {
      const res = dayCalculation(item.startDate, item.trainingCount, item.schedule);
      assert.strictEqual(res, item.expectedResult)
    })
  })
})

