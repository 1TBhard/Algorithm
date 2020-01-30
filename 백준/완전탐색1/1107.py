def solution(num, f_list):

    possible_list = [i for i in range(0, 9) if i not in f_list]

    from_100 = abs(num - 100)

    from_min = 

    while True:
        




if __name__ == "__main__":
    target_num = int(input())
    dumy = int(input())
    if dumy > 0 :
        forbiden_list = list(map(int, input().split()))
    else:
        forbiden_list == []
    solution(target_num, forbiden_list)