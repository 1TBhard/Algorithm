let testCase = [
	"woni request 09:12:29",
	"brown request 09:23:11",
	"brown leave 09:23:44",
	"jason request 09:33:51",
	"jun request 09:33:56",
	"cu request 09:34:02",
];

function solution(totalTicket, logs) {
	let sucList = [];
	let curRequest = null;

	const isAfterOneMin = (past, cur) => {
		if (!past) {
			return false;
		}
		const [p_h, p_m, p_s] = past.split(":").map((x) => parseInt(x));
		const [c_h, c_m, c_s] = cur.split(":").map((x) => parseInt(x));

		if (c_h * 3600 + c_m * 60 + c_s - p_h * 3600 - p_m * 60 - p_s >= 60)
			return true;
		return false;
	};

	for (var item of logs) {
		var [id, action, time] = item.split(" ");

		if (curRequest && isAfterOneMin(curRequest.time, time)) {
			sucList.push(curRequest.id);
			curRequest = null;
			totalTicket--;
			if (totalTicket === 0) {
				break;
			}
		}

		// 이미 성공한 사람인지
		if (sucList.includes(id)) continue;

		switch (action) {
			case "request":
				if (curRequest === null) {
					curRequest = {
						id: id,
						time: time,
					};
				}
				break;
			case "leave":
				if (curRequest && curRequest.id === id) {
					curRequest = null;
				}
				break;
			default:
				continue;
		}
	}

	if (curRequest != null && totalTicket > 0) {
		sucList.push(curRequest.id);
	}

	sucList.sort();

	return sucList;
}

console.log(solution(1000, testCase));
