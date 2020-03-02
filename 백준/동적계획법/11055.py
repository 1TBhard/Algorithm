import sys

N = int(input())

l = list(map(int, sys.stdin.readline().split()))
c = [] + l
max_val = 0

for i in range(N):
  for j in range(i, -1, -1):
    if l[i] > l[j] and l[i] + c[j] > c[i]:
      c[i] = c[j] + l[i]

print(max(c))