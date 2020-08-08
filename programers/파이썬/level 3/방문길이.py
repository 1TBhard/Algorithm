def solution(dirs):
    _map = [[False for i in range(11)] for j in range(11)]

    walk_command = {"U": (-1, 0), "D": (1, 0), "L": (0, -1), "R": (0, 1)}

    answer = 0

    # 처음 시작 위치
    cur_h, cur_w = (5, 5)
    for input_com in dirs:
        plus = walk_command[input_com]

        next_h = cur_h + plus[0]
        next_w = cur_w + plus[1]

        if not next_h in range(11) or not next_w in range(11):
            continue

        if _map[cur_h][cur_w] == False:
            answer += 1

        _map[cur_h][cur_w] = True

        cur_h, cur_w = [next_h, next_w]

    return answer


print(solution("ULURRDLLU"))
