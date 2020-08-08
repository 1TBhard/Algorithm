import math

def C(n, r):
    return int(n / math.factorial(r) * math.factorial(n-r))

# def change_3(n):
#     result = []

#     while n > 0:
#         result.append(n % 3)
#         n = int(n / 3)
#         if n > 1:
#             return False
    
#     return True

# def solution(n):

#     check = 0
#     input_num = 0
#     while check < n:
#         if change_3(input_num):
#             check += 1
#         input_num += 1

#     return input_num


# print(solution(4))

# for i in range(3):
#     print(C(i, ))


def solution(n):
    
    b = bin(n)
    b = (str(b)[2:])

    result = 0
    n = len(b)
    for item in b:
        if item == "1":
            result += 3 ** (len(b)-n+2)
        n -= 1

    return result

solution(4)