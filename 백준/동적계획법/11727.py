n = int(input())

l = [1, 3]

for _ in range(n-2):
  l.append(l[-1] + l[-2]*2)

print(l[n-1] % 10007)