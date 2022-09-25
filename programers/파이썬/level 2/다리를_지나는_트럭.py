# 1초 마다 상황을 파악하는 형식으로 해결

def solution(bridge_length, weight, truck_weights):
    sec = 0
    totalWeight = 0
    q =[]
    
    while len(truck_weights) > 0 or len(q) > 0:
        sec += 1
        
        if(len(q) > 0 and q[0][1] + bridge_length == sec):
            totalWeight -= q.pop(0)[0]
        
        if(len(truck_weights) > 0 and totalWeight + truck_weights[0] <= weight):
            q.append((truck_weights[0], sec))
            totalWeight += truck_weights.pop(0)

    return sec


print(solution(5, 5, [2,2,2,2,1,1,1,1,1]))