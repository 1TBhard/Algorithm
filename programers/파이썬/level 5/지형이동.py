

def f_dev(land, start):


    for i in range(0, len(land)):
        for j in range(0, len(land[0])):


def divide(land, height):

    new_land = [[] for _ in range(len(land))]

    cnt = 1
    for i in range(0, len(land)):
        for j in range(0, len(land[0])):
            new_land[i][j] = (land[i][j], cnt)
        
        cnt += 1


def solution(land, height):
    