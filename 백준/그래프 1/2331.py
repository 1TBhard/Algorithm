
a, p = map(int, input().split())

l = [a]

def cul(n, sqrt_n):
    s = list(map(int, str(n)))
    result = 0
    while s:
        result += s.pop() ** sqrt_n
    
    return result

while True:
    num = cul(l[-1], p)
    if num in l:
        print(l.index(num))
        break

    l.append(num)