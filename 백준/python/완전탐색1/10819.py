import itertools

def solution(l):

    all_list = list(itertools.permutations(l))
    answer = []

    for items in all_list:
        temp = 0
        for i in range(0, len(items)-1):
            temp += abs(items[i] - items[i+1])
        answer.append(temp)
    
    return max(answer)

if __name__ == "__main__":
    n = int(input())
    print(solution(list(map(int, input().split()))))