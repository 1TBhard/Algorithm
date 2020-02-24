import sys

N = int(input())

l = list(map(int, sys.stdin.readline().split()))
c = [] + l


for i in range(1, N):
  h = i-1
  flag = False
  while l[i] < l[h]:
    if h < 0:
      flag = True
      break
    h -= 1

  if flag:
    continue
  else:
    c[i] = l[i] + c[h]

print(max(c))