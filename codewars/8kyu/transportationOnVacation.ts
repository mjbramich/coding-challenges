export function rentalCarCost(days: number): number {
  // need to calculate the cost of the trip depending on the days, take in number of days
  // return total cost

  // single day cost = 40
  // 3 day discount = 20
  // 7 day discount = 50

  let totalCost = 0;
  const dailyCost = 40;
  const threeDayDiscount = 20;
  const sevenDayDiscount = 50;

  if (days <= 2) {
    totalCost = days * dailyCost;
  } else if (days <= 6) {
    totalCost = days * dailyCost - threeDayDiscount;
  } else {
    totalCost = days * dailyCost - sevenDayDiscount;
  }

  return totalCost;
}
