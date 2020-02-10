import sys

n, m = map(int, sys.stdin.readline().split())

dic = {e:[] for e in range(1, n+1)}

for _ in range(m):
    s, e = map(int, sys.stdin.readline().split())
    dic[s].append(e)
    dic[e].append(s)

answer = 0
not_visited = [i for i in range(1, n+1)]

while not_visited != []:

    q = [not_visited[0]]
    while q:
        num = q.pop()
        if num not in not_visited:
            continue
        
        not_visited.remove(num)
        for item in dic[num]:
            if item in not_visited:
                q.append(item)
    
    answer += 1

print(answer)