// Your code here
function mapToNegativize(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * -1)
  }
  return newArray
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * 2)
  }
  return newArray
}

function mapToSquare(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * sourceArray[i])
  }
  return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let amount = {};
  amount.amt = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    amount.amt += sourceArray[i]
  }
  return amount.amt
}

function reduceToAllTrue(sourceArray) {
  let values = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (Boolean(sourceArray[i])) {
      values.push(sourceArray[i])
    }
  }
   if (values.toString() === sourceArray.toString()) {
        return true;
    } else {
      return false;
    }

}

function reduceToAnyTrue(sourceArray) {
  let values = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (Boolean(sourceArray[i])) {
      values.push(sourceArray[i])
    }
  }
   if (values.length > 0) {
        return true;
    } else {
      return false;
    }
}
