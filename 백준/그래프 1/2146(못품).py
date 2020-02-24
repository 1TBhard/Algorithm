import sys

n = int(input())

# 맵 만들기
m = []
for _ in range(n):
    m.append(list(map(int, sys.stdin.readline().split())))

visited = []

# 랜드 넘버는 2부터 시작
land_num = 2

land_dic = {}
for i in range(n):
    for j in range(n):
        if m[i][j] != 1:
            continue
        
        # 딕셔너리 키 추가
        land_dic[land_num] = []
        
        # bfs
        q = [(i, j)]
        while q:
            cur_h, cur_w = q.pop(0)

            if (cur_h, cur_w) in visited:
                continue

            visited.append((cur_h, cur_w))

            # 땅의 번호 삽입, 딕셔너리에 추가
            m[cur_h][cur_w] = land_num
            
            
            flag = False
            # 다음 이어져 있는지 확인할 땅 추가
            for t_h, t_w in [(cur_h-1, cur_w), (cur_h, cur_w-1), (cur_h, cur_w+1), (cur_h+1, cur_w)]:
                
                if(t_h < 0 or t_h >= n) or (t_w < 0 or t_w >= n):
                    continue
                elif m[t_h][t_w] == 0:
                    flag = True
                    continue
                else:
                    q.append((t_h, t_w))
            
            if flag:
                land_dic[land_num].append((cur_h, cur_w))

        # 다음 랜드 넘버
        land_num += 1



# n이 100 이하이므로 최대 거리는
# (0, 0)에서 (99, 99) 까지 99+99-1
answer = []

for cur_r_n in range(2, land_num):
    for k in range(2, land_num):
        if cur_r_n == k:
            continue
        for item in land_dic[cur_r_n]:
            for jtem in land_dic[k]:
                answer.append(abs(item[0]-jtem[0]) + abs(item[1]-jtem[1]) - 1))

print(min(answer))