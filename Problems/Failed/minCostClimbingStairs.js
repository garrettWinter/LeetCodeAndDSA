/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let totalCost = 0;
    let costArraySize = cost.length;
    let currentStep = 0;

    while (currentStep <= costArraySize -1) {
        if (cost[currentStep] < cost[currentStep + 1]) {
            totalCost += cost[currentStep];
            currentStep += 1;
        } else {
            totalCost += cost[currentStep + 1];
            currentStep += 2;
        }
    }
    console.log(totalCost);
    return totalCost;
};

let cost = [10, 15, 20];
minCostClimbingStairs(cost);

/*
set totalCost = 0;
set costArraySize = cost.length;
set currentStep;

while loop if currentStep < costArraySize
    check to see if i < i+1
        Yes, add cost[i] to total cost
        no, add cost[i] to total cost
return totalCost


*/