def solution(s):

    # 매칭되지 않은 ( 의 개수
    stackLen = 0

    for item in s:
        if (item == "(") :
            stackLen += 1
        elif (stackLen == 0):
            return False
        else:
            stackLen -= 1
    
    if(stackLen > 0):
        return False

    return True