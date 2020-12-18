
def solution():
    n = int(input())
    l = list(map(int, input().split()))

    dic = {e:set() for e in range(1, len(l)+1)}
    for start, end in enumerate(l):
        dic[start+1].add(end)

    left_to_go = [True for _ in range(len(l)+1)]

    
    answer = 0
    for first_start in range(1, len(l)+1):
        if left_to_go[first_start] == False:
            continue

        q = [first_start]
        while q:
            num = q.pop(0)
            left_to_go[num] = False

            for item in dic[num]:
                # q에 없고 아직 안간 곳일 때
                if (item not in q) and left_to_go[item]:
                    q.append(item)
                    
        
        answer += 1

    print(answer)
        


if __name__ == "__main__":
    test_case = int(input())

    for _ in range(test_case):
        solution()