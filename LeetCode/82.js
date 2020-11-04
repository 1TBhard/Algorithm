
// Runtime: 88 ms, faster than 52.70%
// Memory Usage: 40.4 MB, less than 14.39%
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  
  let answer = new ListNode(), ans_cur = answer;
  let curNode = head, fixNode = head;

  while(curNode) {
    while(curNode.next && curNode.val === curNode.next.val) {
      curNode = curNode.next;
    }

    // curNode가 위 while문에서 움직이지 않아
    // curNode === fiexNode일 때
    if(curNode === fixNode) {
      ans_cur.next = curNode;
      ans_cur = ans_cur.next;
    }

    // curNode 이동 후 그 값을 fixNode에 넣음
    fixNode = curNode = curNode.next;
  }

  ans_cur.next = null;
  return answer.next;
};