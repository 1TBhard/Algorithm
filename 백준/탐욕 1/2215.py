
def solution(a, b, c):
    if a >= c and b >=c:
        print('{} {}'.format(0, c))
        return

    answer = set()
    visited = []
    q = [[0,0,c]]
    while q:
        
        t_a, t_b, t_c = q.pop(0)

        if t_a == 0:
            answer.add(t_c)

        # c에서 a로 부을 때
        test = [t_a + t_c, t_b, 0]
        if test[0] > a:
            test = [a, t_b, t_c - (a - t_a)]
        if test not in visited:
            q.append(test)
            visited.append(test)
        
        # a에서 c로 부을 때
        test = [0, t_b, t_a + t_c]
        if test[2] > c:
            test = [t_a - (c - t_c), t_b, c]
        if test not in visited:
            q.append(test)
            visited.append(test)


        # c에서 b로 부을 때
        test = [t_a, t_b + t_c, 0]
        if test[1] > b:
            test = [t_a, b, t_c - (b - t_b)]
        if test not in visited:
            q.append(test)
            visited.append(test)

        # b에서 c로 부을 때
        test = [t_a, 0, t_b + t_c]
        if test[2] > c:
            test = [t_a, t_b - (c - t_c), c]
        if test not in visited:
            q.append(test)
            visited.append(test)


        # a에서 b로 부을 때
        test = [0, t_a + t_b, t_c]
        if test[1] > b:
            test = [t_a - (b - t_b), b, t_c]
        if test not in visited:
            q.append(test)
            visited.append(test)

        # b에서 a로 부을 때
        test = [t_a + t_b, 0, t_c]
        if test[0] > a:
            test = [a, t_b - (a - t_a), t_c]
        if test not in visited:
            q.append(test)
            visited.append(test)

    for item in sorted(list(answer)):
        print(item, end=' ')



if __name__ == "__main__":
    a, b, c = list(map(int, input().split()))
    solution(a, b, c)