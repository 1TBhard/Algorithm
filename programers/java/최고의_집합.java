package programers.java;

public class 최고의_집합 {
  public static void main(String[] args) {
    Solution3 test = new Solution3();

    int n = 2;
    int s = 8;
    System.out.println(test.solution(n, s));
  }
}

class Solution3 {
  public int[] solution(int n, int s) {
    int[] answer = new int[n];

    int leftSum = s;

    for (int i = 0; i < answer.length; i++) {
      int num = leftSum / n;

      if (num < 1) {
        int[] javaIsTrash = { -1 };

        return javaIsTrash;
      }

      answer[i] = num;

      n--;
      leftSum -= num;
    }

    return answer;
  }
}