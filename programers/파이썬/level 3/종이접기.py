import math

def solution(n):
    start = [0]

    for _ in range(n-1):
        new_arr = list(map(lambda x: 1 if x==0 else 0, start))
        start = start + [0] + new_arr[::-1]
    
    return start

print(solution(3))
