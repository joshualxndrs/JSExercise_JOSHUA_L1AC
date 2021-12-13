function stairClimb(cost){               
    for (var i = cost.length - 3; i >= -1; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2])
    }
    return Math.min(cost[0], cost[1]) || 0
}

console.log(stairClimb([0, 2, 3, 2]))
console.log(stairClimb([10, 15, 20]))
console.log(stairClimb([0, 0, 0, 0, 0, 0]))
console.log(stairClimb([0, 2, 2, 1]))