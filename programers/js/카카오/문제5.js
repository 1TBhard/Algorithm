function solution(play_time, adv_time, logs) {
	var answer = 84000;

	logs = logs.map((el) => {
		const [end, start] = el.split("-");

		const [start_h, start_m, start_s] = start.split(":");
		const [end_h, end_m, end_s] = end.split(":");

		return {
			start:
				parseInt(start_h) * 3600 + parseInt(start_m) * 60 + parseInt(start_s),
			end: parseInt(end_h) * 3600 + parseInt(end_m) * 60 + parseInt(end_s),
		};
	});

	// 동시 시청 수
	let most_con = 0;
	let q = [];
	let first = logs[logs.length - 1];
	let nu = 0;

	for (var i = logs.length - 2; i >= 0; i--) {
		if (first.end > logs[i].end) {
			q.push(logs[i]);
			nu += logs[i].end - first.start;

			// 가장 많이 보는 수 갱신
			if (q.length > most_con && first.start <= answer) {
				most_con = q.length;
				answer = first.start;
			}
		} else {
			while (logs[i].end < first.start && q.length > 0) {
				nu -= q.pop().end - first.start;
			}
			if (q.length > 0) last = q[0];
			else first = logs[i];
		}
	}

	return answer;
}

solution("02:03:55", "00:14:15", [
	"01:20:15-01:45:14",
	"00:25:50-00:48:29",
	"00:40:31-01:00:00",
	"01:37:44-02:02:30",
	"01:30:59-01:53:29",
]);
