
n = int(input())

m = [list(map(int, input().split())) for _ in range(n)]

out_side = []

cur_cnt = 2

def disthingush(cur_cnt, i, j) :
    if i not in range(0, n) or j not in range(0, n):
        return
    elif m[i][j] == 0:
        out_side.append((cur_cnt, i, j))
        return
    elif m[i][j] != 1:
        return
    
    m[i][j] = cur_cnt

    disthingush(cur_cnt, i, j+1)
    disthingush(cur_cnt, i, j-1)
    disthingush(cur_cnt, i+1, j)
    disthingush(cur_cnt, i-1, j)

# 섬을 구분
for i in range(n):
    for j in range(n):
        if m[i][j] == 1:
            disthingush(cur_cnt, i, j)
            cur_cnt += 1

answer = []

def findLoad(num, q):
    dist = 0
    visited = []
    while q:
        limit = len(q)
        for _ in range(limit):
            t_i, t_j = q.pop()

            for next_i, next_j in [(t_i+1, j),(t_i-1, j),(t_i, t_j+1),(t_i, t_j-1)]:

                # 리스트 인덱스 안에 있는지 확인
                if next_i not in range(0, n) or next_j not in range(0, n):
                    continue
                # 해당 지점이 방문한 곳이나 이미 시작한 섬인 경우
                elif m[next_i][next_j] == num or (next_i, next_j) in visited:
                    continue
                # 다른 섬 도착
                elif m[next_i][next_j] != 0:
                    answer.append(dist)
                    return

                visited.append((next_i, next_j))
                q = [(next_i, next_j)] + q

        dist += 1

for num, i, j in out_side:
    findLoad(num, [(i, j)])

print(min(answer)+1)


