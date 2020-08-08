def solution(n, results):
    win = {e:set() for e in range(1, n+1)}
    lose = {e:set() for e in range(1, n+1)}

    for s, e in results:
        win[s].add(e)
        lose[e].add(s)

    for i in range(1, n+1):
        
        win_buff = set()
        
        for w_num in win[i]:
            win_buff.update(win[w_num])
        
        lose_buff = set()

        for l_num in lose[i]:
            lose_buff.update(lose[l_num])

        win[i].update(win_buff)
        lose[i].update(lose_buff)

    answer = 0
    for i in range(1, n+1):
        if len(win[i]) + len(lose[i]) == n-1:
            answer += 1

    return answer


print(solution(8,  [[1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [4, 5]]	))