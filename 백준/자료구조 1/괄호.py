
def solution(n):

    for _ in range(n):
        all_str = input()

        stack = []
        
        flag = True
        for c in all_str:
            if c == '(':
                stack.append(0)
            else:
                if stack == []:
                    flag = False
                    break
                stack.pop(-1)

        if stack != []:
            print('NO')
        elif flag:
            print('YES')
        else:
            print('NO')


if __name__ == "__main__":
    n = int(input())
    solution(n)