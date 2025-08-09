// servers/home/home/scripts/early/grow.js
async function main(ns) {
  const target = `${ns.args[0]}`;
  let serverMoneyAvailable = ns.getServerMoneyAvailable(target);
  let serverMaxMoney = ns.getServerMaxMoney(target);
  while (serverMoneyAvailable < serverMaxMoney * 0.75) {
    serverMoneyAvailable = ns.getServerMoneyAvailable(target);
    serverMaxMoney = ns.getServerMaxMoney(target);
    ns.print("-------------------------------------------------------");
    ns.print("Server money available on " + target + " is " + ns.nFormat(serverMoneyAvailable, "$0.000a."));
    ns.print("Server max money on " + target + " is " + ns.nFormat(serverMaxMoney, "$0.000a."));
    ns.print("Starting grow on " + target + " with " + ns.getHostname() + " to " + ns.nFormat(serverMaxMoney * 0.75, "$0.000a") + "...");
    await ns.grow(target);
  }
  serverMoneyAvailable = ns.getServerMoneyAvailable(target);
  serverMaxMoney = ns.getServerMaxMoney(target);
  ns.print("-------------------------------------------------------");
  ns.print("Optimal current money on " + target + " reached !!!");
  ns.print("Server money available on " + target + " is " + ns.nFormat(serverMoneyAvailable, "$0.000a."));
  ns.print("Server max money on" + target + " is " + ns.nFormat(serverMaxMoney, "$0.000a."));
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NyYy9zY3JpcHRzL2Vhcmx5L2dyb3cudHMiXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQUdBLGVBQXNCLEtBQUssSUFBTTtBQUMvQixRQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBRTVCLE1BQUksdUJBQXVCLEdBQUcsd0JBQXdCLE1BQU07QUFDNUQsTUFBSSxpQkFBaUIsR0FBRyxrQkFBa0IsTUFBTTtBQUVoRCxTQUFPLHVCQUF1QixpQkFBaUIsTUFBTTtBQUNuRCwyQkFBdUIsR0FBRyx3QkFBd0IsTUFBTTtBQUN4RCxxQkFBaUIsR0FBRyxrQkFBa0IsTUFBTTtBQUU1QyxPQUFHLE1BQU0seURBQXlEO0FBQ2xFLE9BQUcsTUFDRCwrQkFDRSxTQUNBLFNBQ0EsR0FBRyxRQUFRLHNCQUFzQixVQUFlLENBQUM7QUFFckQsT0FBRyxNQUNELHlCQUNFLFNBQ0EsU0FDQSxHQUFHLFFBQVEsZ0JBQWdCLFVBQWUsQ0FBQztBQUUvQyxPQUFHLE1BQ0Qsc0JBQ0UsU0FDQSxXQUNBLEdBQUcsWUFBVyxJQUNkLFNBQ0EsR0FBRyxRQUFRLGlCQUFpQixNQUFNLFNBQVMsSUFDM0MsS0FBSztBQUdULFVBQU0sR0FBRyxLQUFLLE1BQU07O0FBR3RCLHlCQUF1QixHQUFHLHdCQUF3QixNQUFNO0FBQ3hELG1CQUFpQixHQUFHLGtCQUFrQixNQUFNO0FBRTVDLEtBQUcsTUFBTSx5REFBeUQ7QUFDbEUsS0FBRyxNQUFNLDhCQUE4QixTQUFTLGNBQWM7QUFDOUQsS0FBRyxNQUNELCtCQUNFLFNBQ0EsU0FDQSxHQUFHLFFBQVEsc0JBQXNCLFVBQWUsQ0FBQztBQUVyRCxLQUFHLE1BQ0Qsd0JBQ0UsU0FDQSxTQUNBLEdBQUcsUUFBUSxnQkFBZ0IsVUFBZSxDQUFDO0FBRWpEOyIsIm5hbWVzIjpbXX0=