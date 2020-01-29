import itertools

def solution(l):
    answer = sorted(list(itertools.combinations(l, 6)))

    for item in answer:
        print(*(sorted(item)))
    print('')

def my_combinations(l, num=None):
    result = []

    if not num or num == len(l):
        return sorted(num)
    
    for item in l:
        result.append(item)


if __name__ == "__main__":
    
    while True:
        n_input = list(map(int, input().split()))

        if n_input[0] == 0:
            break

        solution(n_input[1:])