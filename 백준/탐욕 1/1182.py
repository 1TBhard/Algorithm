dumy, n = map(int, input().split())
all_list = list(map(int, input().split()))

answer = 0

def solution(cur_result, cur_idx):

    global n, answer

    if cur_idx+1 >= dumy:
        if cur_result == n:
            answer += 1
        return

    solution(cur_result + all_list[cur_idx+1], cur_idx+1)
    solution(cur_result, cur_idx+1)

solution(0, -1)

if n == 0:
    print(answer-1)
else:
    print(answer)