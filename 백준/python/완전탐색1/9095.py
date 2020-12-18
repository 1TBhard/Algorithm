def solution(num):
    h = [1, 2, 4]

    if num-1 < len(h):
        return h[num-1]

    while len(h) != num:
        h.append(h[-1] + h[-2] + h[-3])

    return h[-1]


if __name__ == "__main__":
    try_num = int(input())
    answer = []
    for _ in range(try_num):
        find_num = int(input())
        answer.append(solution(find_num))
    
    for item in answer:
        print(item)