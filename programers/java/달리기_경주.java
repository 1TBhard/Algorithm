package programers.java;

import java.util.HashMap;
import java.util.Map;

class 달리기_경주 {
    public static void main(String ...args) {
        String[] players = {"mumu", "soe", "poe", "kai", "mine"};
        String[] calling = {"kai", "kai", "mine", "mine"};
        Solution test = new Solution();

        System.out.print(test.solution(players, calling));
    }
}

class Solution {
    private static Map<String, Integer> playerDict = new HashMap();

    public String[] solution(String[] players, String[] callings) {
        
        for(int i=0 ; i < players.length ; i++) {
            playerDict.put(players[i], i);
        }

        for(String call : callings) {
            int upIdx = playerDict.get(call);

            String levelUpPlayer = players[upIdx];
            players[upIdx] = players[upIdx-1];
            players[upIdx-1] = levelUpPlayer;

            playerDict.put(levelUpPlayer, upIdx-1);
            playerDict.put(players[upIdx], upIdx);
        }

        return players;
    }
}