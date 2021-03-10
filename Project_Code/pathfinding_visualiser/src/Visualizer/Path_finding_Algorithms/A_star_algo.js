import nodes from "../constants/nodes";
import { new_matrix, path_analyzer } from "./common_operations.js";

const find_min_node = (arr) => {
  let _min = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].price < arr[_min].price) {
      _min = i;
    }
  }
  // console.log(arr[_min].node);
  let x = arr[_min].node;
  arr.splice(_min, 1);
  return x;
};

const a_star_algo = (matrix, start, end) => {
  // shallow capy start in 'u'
  let animate = [];
  let parent = new_matrix(matrix.length, matrix[0].length);
  let u;
  let arr = [{ price: 0, node: { ...start } }];
  let nbr = [
    { rc: 1, cc: 0 },
    { rc: -1, cc: 0 },
    { rc: 0, cc: 1 },
    { rc: 0, cc: -1 },
  ];
  let inc = 0
  while (arr.length) {
    inc+=2
    console.log([...arr]);
    u = find_min_node(arr);
    if (matrix[u.r][u.c] === 10) continue;
    matrix[u.r][u.c] = 10;
    animate.push({ r: u.r, c: u.c, status: "V" });
    console.log(u);
    for (let i = 0; i < 4; i++) {
      let r = u["r"] + nbr[i]["rc"];
      let c = u["c"] + nbr[i]["cc"];
      if (r >= 0 && c >= 0 && r < matrix.length && c < matrix[0].length) {
        if (matrix[r][c] === 0) {
          let cost = matrix[r][c];
          // Distance from this node to end node
          let dist = Math.sqrt(
            (end["r"] - r) * (end["r"] - r) + (end["c"] - c) * (end["c"] - c)
          );
          // let dist = Math.abs(end["r"] - r )+ Math.abs(end["c"] - c);
          parent[r][c] = { r: u.r, c: u.c };
          arr.push({ price: cost + dist, node: { r, c } });
        } else if (matrix[r][c] === nodes.END) {
          parent[r][c] = { r: u.r, c: u.c };
          animate.push({ r, c, status: "V" });
          path_analyzer(parent, start, end, animate);
          return animate;
        }
      }
    }
  }
  return animate;
};

export default a_star_algo;
