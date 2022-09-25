# level 2 기능개발

import math

MAX_DAY=100

def solution(progresses, speeds):
    answer = []
    day = 1

    for i in range(len(progresses)):
        if(day > MAX_DAY):
            break
        progresses[i] += day * speeds[i]
        if(progresses[i] < 100):
            # 100 이 넘을때까지를 day를 구함
            day = day + math.ceil((100 - progresses[i]) / speeds[i])
            answer.append(1)
        else:
            answer[-1] += 1

    return answer


print(solution([95, 90, 99, 99, 80, 99]	, [1, 1, 1, 1, 1, 1]))