package programers.java;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

class 과제_진행하기 {
    public static void main(String[] args) {
        String[][] plans = {
                { "science", "12:40", "50" },
                { "music", "12:20", "40" },
                { "history", "14:00", "30" },
                { "computer", "12:30", "100" },
        };
        Solu1tion test = new Solu1tion();

        System.out.print(test.solution(plans));
    }
}

class Solu1tion {
    List<String> answer = new ArrayList<>();
    Stack<Node> remain = new Stack<>();
    int current = 0;

    public List<String> solution(String[][] plans) {

        Node[] myPlans = new Node[plans.length];

        for (int i = 0; i < plans.length; i++) {
            myPlans[i] = new Node(plans[i][0], plans[i][1], plans[i][2]);
        }

        Arrays.sort(myPlans, (o1, o2) -> {
            return o1.start - o2.start;
        });

        for (Node node : myPlans) {
            if (remain.empty()) {
                remain.add(node);
                current = node.start;
                continue;
            }

            while (!remain.empty()) {
                Node topNode = remain.pop();

                if (topNode.remainTime <= node.start - current) {
                    answer.add(topNode.name);
                    current += topNode.remainTime;
                    continue;
                } else {
                    topNode.remainTime = topNode.remainTime - (node.start - current);
                    remain.push(topNode);
                    break;
                }
            }

            current = node.start;
            remain.push(node);
        }

        while (!remain.empty()) {
            answer.add(remain.pop().name);
        }

        return answer;
    }

    static class Node {
        String name;
        int start;
        int remainTime;

        public Node(String name, String startTime, String playTime) {
            this.name = name;
            this.remainTime = Integer.parseInt(playTime);

            String[] strStartTime = startTime.split(":");
            int hourToMin = Integer.parseInt(strStartTime[0]) * 60;
            int min = Integer.parseInt(strStartTime[1]);

            this.start = hourToMin + min;
        }

    }
}