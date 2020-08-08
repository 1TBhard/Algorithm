def solution(n, edge):
    answer = 0

    # 그래프 정점, 간선 저장
    dic = {e:set() for e in range(1, n+1)}

    # 그래프 정점, 간선 설정
    for s, e in edge:
        dic[e].add(s)
        dic[s].add(e)

    distance = [0 for _ in range(n+1)]

    # bfs 탐색으로 찾음
    dist_cnt = 1        # 현재까지 간 경로 길이
    q = [1]
    while q:
        limit = len(q)      # 현재 q에 있는 요소 개수
        for __ in range(limit):
            start = q.pop(0)
            for end in dic[start]:
                if distance[end] == 0:
                    distance[end] = dist_cnt
                    q.append(end)

        dist_cnt += 1

    distance = distance[2:]

    return distance.count(max(distance))

print(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]))