function makePermunicate(string, temp, limit) {
	let result = [];
	if (temp.length === limit) {
		return temp;
	}

	for (var i = 0; i < string.length + temp.length - limit + 1; i++) {
		result = result.concat(
			makePermunicate(string.substring(i + 1), temp + string[i], limit)
		);
	}

	return result;
}

function solution(orders, course) {
	var answer = [];

	let all_menu = [];

	for (var order of orders) {
		for (var i = 0; i < order.length; i++) {
			if (!all_menu.includes(order[i])) all_menu.push(order[i]);
		}
	}

	all_menu.sort();

	while (course.length > 0) {
		const choose = course.pop();
		let semi_answer = [];

		let checkList = makePermunicate(all_menu.join(""), "", choose);

		// 가장 많이 선택?
		let most_choose_num = 0;

		for (var check of checkList) {
			// 현재 선택 수
			let cur_choose_people = 0;
			for (var order of orders) {
				for (var h = 0; h < check.length; h++) {
					if (!order.includes(check[h])) {
						cur_choose_people--;
						break;
					}
				}
				cur_choose_people++;
			}

			if (cur_choose_people >= 2 && most_choose_num < cur_choose_people) {
				most_choose_num = cur_choose_people;
				semi_answer = [check];
			} else if (
				cur_choose_people >= 2 &&
				most_choose_num === cur_choose_people
			) {
				semi_answer.push(check);
			}
		}

		answer = answer.concat(semi_answer);
	}
	return answer.sort();
}

solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);
