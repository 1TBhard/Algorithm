import sys

def solution(w):
    m = []

    m.append(list(map(int, sys.stdin.readline().split())))
    m.append(list(map(int, sys.stdin.readline().split())))

    m[0][1] += m[1][0]
    m[1][1] += m[0][0]

    for i in range(2, w):
        m[0][i] += max(m[1][i-1], m[1][i-2])
        m[1][i] += max(m[0][i-1], m[0][i-2])
    
    print(max(m[1][w-1], m[0][w-1]))

if __name__ == "__main__":
    T = int(input())
    for _ in range(T):
        solution(int(input()))