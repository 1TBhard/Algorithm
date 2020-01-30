from collections import deque

def pour(x, y):
    if not check[x][y]:
        check[x][y] = True
        q.append((x, y))

def bfs():
    q.append((0, 0))
    check[0][0] = True
    while q:
        x, y = q.popleft()
        z = c-x-y
        if not x:
            v.append(z)
        water = min(x, b-y)
        pour(x-water, y+water)
        water = min(x, c-z)
        pour(x-water, y)
        water = min(y, a-x)
        pour(x+water, y-water)
        water = min(y, c-z)
        pour(x, y-water)
        water = min(z, a-x)
        pour(x+water, y)
        water = min(z, b-y)
        pour(x, y+water)

q = deque()
v = []
a, b, c = map(int, input().split())
check = [[False]*(b+1) for _ in range(a+1)]
bfs()
print(' '.join(map(str, sorted(v))))
