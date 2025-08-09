// servers/home/home/early-hack-template.js
async function main(ns) {
  const target = "n00dles";
  const moneyThresh = ns.getServerMaxMoney(target);
  const securityThresh = ns.getServerMinSecurityLevel(target);
  if (ns.fileExists("BruteSSH.exe", "home")) {
    ns.brutessh(target);
  }
  ns.nuke(target);
  while (true) {
    if (ns.getServerSecurityLevel(target) > securityThresh) {
      await ns.weaken(target);
    } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
      await ns.grow(target);
    } else {
      await ns.hack(target);
    }
  }
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvZWFybHktaGFjay10ZW1wbGF0ZS5qcyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBQ0EsZUFBc0IsS0FBSyxJQUFJO0FBRzNCLFFBQU0sU0FBUztBQUlmLFFBQU0sY0FBYyxHQUFHLGtCQUFrQixNQUFNO0FBSy9DLFFBQU0saUJBQWlCLEdBQUcsMEJBQTBCLE1BQU07QUFJMUQsTUFBSSxHQUFHLFdBQVcsZ0JBQWdCLE1BQU0sR0FBRztBQUN2QyxPQUFHLFNBQVMsTUFBTTtBQUFBLEVBQ3RCO0FBR0EsS0FBRyxLQUFLLE1BQU07QUFHZCxTQUFNLE1BQU07QUFDUixRQUFJLEdBQUcsdUJBQXVCLE1BQU0sSUFBSSxnQkFBZ0I7QUFFcEQsWUFBTSxHQUFHLE9BQU8sTUFBTTtBQUFBLElBQzFCLFdBQVcsR0FBRyx3QkFBd0IsTUFBTSxJQUFJLGFBQWE7QUFFekQsWUFBTSxHQUFHLEtBQUssTUFBTTtBQUFBLElBQ3hCLE9BQU87QUFFSCxZQUFNLEdBQUcsS0FBSyxNQUFNO0FBQUEsSUFDeEI7QUFBQSxFQUNKO0FBQ0o7IiwibmFtZXMiOltdfQ==