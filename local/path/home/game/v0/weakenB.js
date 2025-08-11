// servers/home/game/v0/weakenB.ts
async function main(ns) {
  const targetServer = `${ns.args[0]}`;
  const waitTime = ns.args[1];
  await ns.sleep(waitTime);
  await ns.weaken(targetServer);
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2dhbWUvdjAvd2Vha2VuQi50cyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBRUEsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxRQUFNLGVBQXVCLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMxQyxRQUFNLFdBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQy9CLFFBQU0sR0FBRyxNQUFNLFFBQVE7QUFDdkIsUUFBTSxHQUFHLE9BQU8sWUFBWTtBQUM5QjsiLCJuYW1lcyI6W119