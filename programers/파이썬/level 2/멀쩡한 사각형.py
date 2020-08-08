def solution(skill, skill_trees):
    skill_list = [
        "".join([c for c in skill_node if c in skill]) for skill_node in skill_trees
    ]

    answer = sum(list(map(lambda x: 1 if skill[: len(x)] == x else 0, skill_list)))

    return answer


print(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]))
