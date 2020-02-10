import sys

# 맵
m = []

# 지도 크기
n = int(input())

# 맵 초기화
for h in range(n):
    m.append(list(input()))

answer = []
visted = []
for h in range(n):
    for w in range(n):

        # 인덱스가 -값이거나 맵에서 1이 아닌 경우
        if (h < 0 or w < 0) or m[h][w] != '1' or ((h, w) in visted):
            continue
        
        temp_result = 0
        q = [(h, w)]
        while q:
            c_h, c_w = q.pop(0)
            if (c_h, c_w) in visted or (c_h < 0 or c_w < 0):
                continue

            visted.append((c_h, c_w))
            temp_result += 1

            # 주변 건물 확인
            for t_h, t_w in [(c_h-1, c_w), (c_h, c_w-1), (c_h+1, c_w), (c_h, c_w+1)]:
                try:
                    if m[t_h][t_w] != '1':
                        continue
                    else:
                        q.append((t_h, t_w))
                except Exception:
                    continue
        
        answer.append(temp_result)

print(len(answer))
for jtem in sorted(answer):
    print(jtem)
