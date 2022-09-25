# level 1 같은 숫자는 싫어

def solution(arr):
    answer = [arr[0]]

    for i in range(1, len(arr)):
        if(arr[i] == arr[i-1]):
            continue
        answer.append(arr[i])

    return answer


TEST = [1,1,3,3,0,1,1]	

print(solution(TEST))