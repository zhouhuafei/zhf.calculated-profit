> 本项目是基于 https://github.com/zhouhuafei/npm-publish-ts/tree/build-ts-use-gulp-babel 项目改造

## 使用案例
```typescript
import { calculatedProfit } from 'zhf.calculated-profit'

// 5000进1件货，6000卖，平台收取百分之5手续费后，我应该赚700
console.log(calculatedProfit({
  costPrice: 5000,
  num: 1,
  sellingPrice: 6000,
  commissionRate: 0.05
})) // 700
```
