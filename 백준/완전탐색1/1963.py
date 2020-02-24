sosu_table = []

def find_sosu():
    global sosu_table

    temp = [i for i in range(2, 101)]
    sosu_table = [True for _ in range(10001)]

    for jump in temp:
        for i in range(jump, len(sosu_table), jump):
            if sosu_table[i] == True:
                sosu_table[i] = False

def solution(f, target_num):
    global sosu_table

    q = [f]
    answer = 0

    if f == target_num:
        return 0

    visit = [f]
    while q:
        past_length = len(q)

        for _ in range(past_length):
            num = q.pop(0)
            if num == target_num:
                return answer
            
            
            for i in range(4):

                # 문제 에서 4자리 수이니 천의 자리가 0이 되면 안됨
                # 따라서 i==3 일때 즉 천의 자리일 때 j가 1부터 시작
                for j in range((0 if i < 3 else 1) , 10) :

                    # 테스트 숫자 생성
                    test_num = list(str(num))

                    # 테스트 숫자에서 한 숫자만 바꾸기
                    test_num[3-i] = str(j)

                    test_num = int(''.join(test_num))

                    # 과연 이게 소수이며 방문하지 않은 경우 큐에 삽입
                    if sosu_table[test_num] and test_num not in visit:
                        q.append(test_num)
                        visit.append(test_num)
        answer += 1
    return 'Impossible'


if __name__ == "__main__":
    n = int(input())
    find_sosu()

    for _ in range(n):
        first, second = list(map(int, (input().split())))
        
        print(solution(first, second))