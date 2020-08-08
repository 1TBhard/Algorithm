def solution(p):

    p += 1
    while True:
        l = {str(e): 0 for e in range(10)}
        my_pass = True
        for i in str(p):
            l[i] += 1
            if l[i] >= 2:
                my_pass = False
                break
        if my_pass == False:
            p += 1
            continue
        
        return p


solution(1987)