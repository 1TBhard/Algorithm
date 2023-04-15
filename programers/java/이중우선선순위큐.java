package programers.java;

import java.util.Collections;
import java.util.PriorityQueue;

public class 이중우선선순위큐 {
  public static void main(String[] args) {
    String[] operations = { "I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1" };
    Solution test = new Solution();

    System.out.println(test.solution(operations));
  }
}

class Solution {
  // JAVA 에서는 우선순위 queue는 heap으로 구성되어 있기 때문에 최대 혹은 최소 값만 O(1) 알 수 있음
  PriorityQueue<Integer> maxQ = new PriorityQueue<>(Collections.reverseOrder());
  PriorityQueue<Integer> minQ = new PriorityQueue<>();

  public int[] solution(String[] operations) {

    for (int i = 0; i < operations.length; i++) {
      String command = operations[i].split(" ")[0];
      int num = Integer.parseInt(operations[i].split(" ")[1]);

      switch (command) {
        case "D":
          if (maxQ.size() == 0 || minQ.size() == 0) {
            break;
          }

          if (num == 1) {
            int maxNum = maxQ.poll();
            minQ.remove(maxNum);
          } else {
            int minNum = minQ.poll();
            maxQ.remove(minNum);
          }
          break;
        case "I":
          maxQ.add(num);
          minQ.add(num);
          break;
      }
    }

    int[] answer = new int[2];

    if (maxQ.size() == 0 || minQ.size() == 0) {
      answer[0] = 0;
      answer[1] = 0;
    } else {
      answer[0] = maxQ.peek();
      answer[1] = minQ.peek();
    }

    return answer;
  }
}