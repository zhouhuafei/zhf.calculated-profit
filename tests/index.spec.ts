import { calculatedProfit } from '@root/src'

test('5千进货10件，6千卖，平台收取百分之5手续费后，我应该赚7千', () => {
  expect(calculatedProfit({
    costPrice: 5000,
    num: 10,
    sellingPrice: 6000,
    commissionRate: 0.05
  })).toEqual(7000)
})
