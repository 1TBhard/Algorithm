

def solution(w, h):
    
    # 맵 생성
    m = []
    for _ in range(h):
        one_row = list(map(int, input().split()))
        m.append(one_row)

    answer = 0

    pre = []

    visited = []
    for cur_h in range(h):
        for cur_w in range(w):

            if m[cur_h][cur_w] != 1 or (cur_h, cur_w) in visited:
                continue

            q = [(cur_h, cur_w)]
            pre.append((cur_h, cur_w))
            while q:
                q_h, q_w = q.pop(0)
                
                for t_h, t_w in [(q_h-1, q_w-1), (q_h-1, q_w), (q_h-1, q_w+1), 
                    (q_h, q_w-1), (q_h, q_w+1), (q_h+1, q_w-1), (q_h+1, q_w), (q_h+1, q_w+1)]:

                    try:
                        if m[t_h][t_w] != 1 or (t_h < 0 or t_w < 0):
                            continue
                    
                        if (t_h, t_w) not in visited:
                            q.append((t_h, t_w))
                            visited.append((t_h, t_w))
                    except Exception:
                        continue

            answer += 1
    
    print(answer)
    


if __name__ == "__main__":
    
    while True:
        w, h = map(int, input().split())
        if w == 0 and h == 0:
            break
        solution(w, h)