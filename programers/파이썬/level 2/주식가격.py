# level2 주식 가격
# 문제의 지문이 이상함
# 주식 가격이 떨어지든 아니든 무조건 1초 이상 떨어지지 않았다고 여김..

def solution(prices):
    answer = []

    for i in range(0, len(prices)):
        tmp=0
        for j in range(i+1, len(prices)):
            tmp += 1
            if(prices[i] > prices[j]):
                break
        answer.append(tmp)

    return answer


print(solution([1, 2, 3, 2, 3]))