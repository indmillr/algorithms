function checkCashRegister(price, cash, cid) {
  let bank = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };
  let change = cash - price;
  let remain = 0;
  let result = [];

  function recurs(money, base, balance) {
    let num = Math.floor(money / bank[base]);
    let nuMoney = money;
    if (num * bank[base] >= balance) {
      nuMoney = (money * 1000 - balance * 1000) / 1000;
      result.push([base, balance]);
    } else if (num * bank[base] < balance && num != 0) {
      nuMoney = (money * 1000 - num * bank[base] * 1000) / 1000;
      result.push([base, num * bank[base]]);
      remain =
        (remain * 1000 + balance * 1000 - num * bank[base] * 1000) / 1000;
    } else if (num == 0) {
      nuMoney = money;
      remain = (remain * 1000 + balance * 1000) / 1000;
    }
    return nuMoney;
  }

  for (let i = 8; i >= 0; i--) {
    change = recurs(change, cid[i][0], cid[i][1]);
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change == 0 && remain == 0) {
    return { status: "CLOSED", change: cid };
  } else if (change == 0 && remain > 0) {
    return { status: "OPEN", change: result };
  }
}
