import { calculatedProfit } from '@root/src'

test('5000进1件货，6000卖，平台收取百分之5手续费后，我应该赚700', () => {
  expect(calculatedProfit({
    costPrice: 5000,
    num: 1,
    sellingPrice: 6000,
    commissionRate: 0.05
  })).toEqual(700)
})
