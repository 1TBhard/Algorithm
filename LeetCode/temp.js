var deleteDuplicates = function (head) {
  let currentNode = head;
  let beforeNode = head;
  let flag = 0;

  while (currentNode) {
    if (!currentNode.next) break; //cur.next 존재안하면 끝내기
    if (currentNode.val === currentNode.next.val) {
      if (currentNode.next.next) {
        currentNode.next = currentNode.next.next;
        flag = 1;
        continue; //계속 루프하도록
      }
      
      flag = 2;
    }

    switch (flag) {
      case 0:
        beforeNode = currentNode;
        currentNode = currentNode.next;
        break;
      case 1: //마지막 아님
        if (currentNode.val === head.val) {
          head.val = currentNode.next.val;   //head = currentNode.next (x)
          head.next = currentNode.next.next;
          currentNode = head;
        } else {
          beforeNode.next = currentNode.next;
          currentNode = beforeNode.next;
        }
        flag = 0;
        break;

      case 2:
        if (currentNode.val === head.val) {
          head = null;
        } else {
          beforeNode.next = null;
        }
        return head;

      default:
        break;
    }
  }
  return head;
};