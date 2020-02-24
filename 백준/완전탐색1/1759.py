
# 최소 한 개의 모음과 최소 두 개의 자음으로 구성해야함

def check(test_str):
    m_num = 0       # 모음 개수
    n_num = 0       # 자음 개수

    for i in test_str:
        if i in ['a', 'e', 'i', 'o', 'u']:
            m_num += 1
        else:
            n_num += 1
    
    return m_num >= 1 and n_num >= 2

def solution(a_list, cur_point, m_list, l):

    if len(m_list) is l:
        if check(m_list):
            print(''.join(m_list))
        return

    if cur_point >= len(a_list):
        return

    solution(a_list, cur_point+1, m_list + [a_list[cur_point]], l)

    solution(a_list, cur_point+1, m_list, l)


if __name__ == "__main__":
    L, C = list(map(int, input().split()))
    A_list = sorted(input().split())

    solution(A_list, 0, [], L)