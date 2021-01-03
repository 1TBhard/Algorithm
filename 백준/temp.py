
def nQueen(n):
    sols = [[]]
    for row in range(n):
        sols = [
            sol + [i + 1] for sol in sols for i in range(n) if not unsafe(i + 1, sol)]
    for i in sols:
        print(i)
    print("")
    return len(sols)

# 걸리는지 안걸리는지
# 걸리면 True, 안걸리면 False


def unsafe(col, queens):
    return col in queens or any(abs(col - x) == len(queens) - i for i, x in enumerate(queens))


print(nQueen(8))
