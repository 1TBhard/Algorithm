var mergeTwoLists = function (list1, list2) {
	let answer = new ListNode(null, null);
	let curAns = answer;

	while (list1 && list2) {
		if (list1.val > list2.val) {
			curAns.next = list2;
			list2 = list2.next;
		} else {
			curAns.next = list1;
			list1 = list1.next;
		}

		curAns = curAns.next;
	}

	if (list1) curAns.next = list1;

	if (list2) curAns.next = list2;

	return answer.next;
};
