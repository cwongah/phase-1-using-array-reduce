const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(batteryCurrentTotal, batteryCount){
    return batteryCount + batteryCurrentTotal
}, 0)

console.log(totalBatteries)