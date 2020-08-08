def solution(N, road, K):

    g = [[9999999 for _ in range(N)] for _ in range(N)]

    for s, e, w in road:
        g[s - 1][e - 1] = min([w, g[s - 1][e - 1]])
        g[e - 1][s - 1] = min([w, g[e - 1][s - 1]])

    for s in range(N):
        g[s][s] = 0

    for k in range(N):
        for s in range(N):
            for e in range(N):
                g[s][e] = min([g[s][k] + g[k][e], g[s][e]])

    return sum(list(map(lambda x: 1 if x <= K else 0, g[0])))
