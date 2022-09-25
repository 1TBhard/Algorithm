# level 2 프린터
# 문제의 설명대로 코딩함

def solution(priorities, location):
    answer = 1
    printList = [(order, num) for order, num in enumerate(priorities)]
    while len(printList) > 0:
        curItem = printList.pop(0)

        if(len(printList) > 0 and curItem[1] < max(printList, key=lambda a: a[1])[1] ):
            printList.append(curItem)
        else:
            if(curItem[0] == location and curItem[1] == priorities[location]):
                break
            answer += 1

    return answer


print(solution([1, 1, 9, 1, 1, 1], 0))