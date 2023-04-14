package programers.java;

class 연속된_부분_수열의_합 {
  public static void main(String[] args) {
      int[] sequence = 	{1,1,1,1,1};
      int k = 5;
      Solution test = new Solution();

      System.out.println(test.solution(sequence, k));
  }
}

class Solution {
  public int[] solution(int[] sequence, int k) {
      
    int i=0;
    int j=0;
    int[] answer = {0, sequence.length};

    int sum = 0;

    while(i < sequence.length) {
      if(j < sequence.length && sum < k) {
        sum += sequence[j];
        j++;
      } else {
        sum -= sequence[i];
        i++;
      }

      if(sum == k && answer[1] - answer[0] > j - 1 - i ) {
        answer[0] = i;
        answer[1] = j-1;
      }
    }

    return answer;
  }
}