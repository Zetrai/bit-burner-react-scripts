// servers/home/home/home/early-hack-template.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zZXJ2ZXJzL2hvbWUvaG9tZS9lYXJseS1oYWNrLXRlbXBsYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFDQSxlQUFzQixLQUFLLElBQUk7QUFHM0IsUUFBTSxTQUFTO0FBSWYsUUFBTSxjQUFjLEdBQUcsa0JBQWtCLE1BQU07QUFLL0MsUUFBTSxpQkFBaUIsR0FBRywwQkFBMEIsTUFBTTtBQUkxRCxNQUFJLEdBQUcsV0FBVyxnQkFBZ0IsTUFBTSxHQUFHO0FBQ3ZDLE9BQUcsU0FBUyxNQUFNO0VBQ3RCO0FBR0EsS0FBRyxLQUFLLE1BQU07QUFHZCxTQUFNLE1BQU07QUFDUixRQUFJLEdBQUcsdUJBQXVCLE1BQU0sSUFBSSxnQkFBZ0I7QUFFcEQsWUFBTSxHQUFHLE9BQU8sTUFBTTtJQUMxQixXQUFXLEdBQUcsd0JBQXdCLE1BQU0sSUFBSSxhQUFhO0FBRXpELFlBQU0sR0FBRyxLQUFLLE1BQU07SUFDeEIsT0FBTztBQUVILFlBQU0sR0FBRyxLQUFLLE1BQU07SUFDeEI7RUFDSjtBQUNKOyIsIm5hbWVzIjpbXX0=