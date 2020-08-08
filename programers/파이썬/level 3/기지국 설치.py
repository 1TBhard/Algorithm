def solution(n, stations, w):
    answer = []
    cur = 0
    idx = 0

    while cur < n - 1:
        if cur < stations[idx] + w and cur > stations[idx] - w:
            cur = stations[idx] + w + 1
        else:
            if cur + w >= n - 1:
                break
            cur += 2 * w + 1
            answer.append(cur)
            idx = idx + 1 if idx + 1 < len(stations) else idx

    return answer



solution(16, [9], 2)
