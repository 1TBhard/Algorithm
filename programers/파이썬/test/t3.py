def solution(total_sp, skills):

    g = dict()
    how_much=0        # 1~x 번호의 정점 있다 할때 x
    rowest_num = []

    for s,e in skills:
        if e not in g.keys():
            g[e] = [s]
        else:
            g[e].append(s)

        how_much = max([how_much, s, e])

        rowest_num.append(e)
        try:
            rowest_num.remove(s)
        except ValueError:
            continue

    answer = [0 for _ in range(how_much)]
    for row in rowest_num:
        
        q = [row]

        while q:
            n = q.pop()
            answer[n-1] += 1
            try: 
                q.extend(g[n])
            except KeyError:
                break

    one_N = total_sp // sum(answer)

    answer = [i*one_N for i in answer]

    return answer


solution(121,[[1, 2], [1, 3], [3, 6], [3, 4], [3, 5]]	)