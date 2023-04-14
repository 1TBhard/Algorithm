package programers.java;

public class 정수_삼각형 {
  public static void main(String[] args) {
    Solu2tion test = new Solu2tion();

    int[][] triangle = {
        { 7 },
        { 3, 8 },
        { 8, 1, 0 },
        { 2, 7, 4, 4 },
        { 4, 5, 2, 6, 5 }
    };

    System.out.println(test.solution(triangle));
  }
}

class Solu2tion {
  public int solution(int[][] triangle) {

    for (int i = triangle.length - 2; i >= 0; i--) {
      for (int j = 0; j < triangle[i].length; j++) {
        triangle[i][j] = Math.max(triangle[i + 1][j] + triangle[i][j], triangle[i + 1][j + 1] + triangle[i][j]);
      }
    }

    return triangle[0][0];
  }
}