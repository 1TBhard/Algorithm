/* ======================= 첫번째 풀이 ======================= */
// Runtime: 576 ms, faster than 5.07%
// Memory Usage: 48 MB, less than 7.04%

var canFinish = function(numCourses, prerequisites) {
  let g = {};

  for(var [next, pre] of prerequisites) {
    g[pre] = {
      in: g[pre] !== undefined ? g[pre].in : 0,
      out: g[pre] !== undefined ? (g[pre].out.concat([next])) : [next]
    }

    g[next] = {
      in: g[next] !== undefined ? g[next].in + 1 : 1,
      out: g[next] !== undefined ? g[next].out : []
    }
  }

  // 싸이클이 생기면 안됨
  // 정점 하나씩 제거마다 진입 차수 0인 것이 있어야함
  // 0 없으면 싸이클 존재

  const sortInEdge = () => {
    return Object.keys(g).sort((a, b) => g[a].in - g[b].in);
  }

  while(Object.keys(g).length > 0) {
    const sortedKeys = sortInEdge();
    const deleteNum = sortedKeys[0];

    // 진입 차수 0 초과 즉, 싸이클
    if(g[deleteNum].in > 0)
      return false;

    for(var outNum of g[deleteNum].out) {
      g[outNum].in--;
    }

    delete g[deleteNum];
  }

  return true;
};


/* ======================= 두번째 풀이 ======================= */

// Runtime: 88 ms, faster than 88.17%
// Memory Usage: 42.8 MB, less than 42.53% 
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  
  const g = {};

  for(var [start, end] of prerequisites) {
    if(g[start] === undefined) g[start] = [end];
    else g[start].push(end);
  }

  const visited = new Array(numCourses).fill(0);

  // visited[num] = 0 : 방문 안함
  // visited[num] = 1 : 방문했지만 현재 라운드에 포함되지 않음 즉, 싸이클 X
  // visited[num] = 2 : 방문하였고 현재 라운드에 포함 즉, 싸이클
  const findCycle = (num) => {
    const nextNumList = g[num];

    if(visited[num] === 2) return true;

    // g[num]에서 다음 갈곳 없는 경우
    if(nextNumList === undefined) {
      visited[num] = 1;
      return false;
    }

    // num은 다시 방문 하면 안됨
    visited[num] = 2;

    for(var item of nextNumList) {
      // 재귀적으로 다시 확인
      if(findCycle(item)) return true;
    }

    // num은 다시 방문해도 됨
    visited[num] = 1;

    return false;
  }

  for(var startNum = 0 ; startNum < numCourses ; startNum++) {
    if(visited[startNum] !== 0) continue;
    if(findCycle(startNum)) return false
  }

  return true;
};


