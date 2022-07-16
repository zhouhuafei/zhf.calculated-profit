interface ICalculatedProfitOpt {
  costPrice: number,
  num: number,
  sellingPrice: number,
  commissionRate: number,
}

const calculatedProfitDefaultOpt = {
  costPrice: 0,
  num: 0,
  sellingPrice: 0,
  commissionRate: 0
}

export const calculatedProfit = (opt: ICalculatedProfitOpt = calculatedProfitDefaultOpt) => {
  const { costPrice, num, sellingPrice, commissionRate } = opt
  return (sellingPrice - costPrice) * num - sellingPrice * commissionRate * num
}
