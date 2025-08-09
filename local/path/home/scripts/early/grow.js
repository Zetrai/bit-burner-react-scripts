// servers/home/scripts/early/grow.ts
async function main(ns) {
  const target = `${ns.args[0]}`;
  let serverMoneyAvailable = ns.getServerMoneyAvailable(target);
  let serverMaxMoney = ns.getServerMaxMoney(target);
  while (serverMoneyAvailable < serverMaxMoney * 0.75) {
    serverMoneyAvailable = ns.getServerMoneyAvailable(target);
    serverMaxMoney = ns.getServerMaxMoney(target);
    ns.print("-------------------------------------------------------");
    ns.print(
      "Server money available on " + target + " is " + ns.nFormat(serverMoneyAvailable, "$0.000a.")
    );
    ns.print(
      "Server max money on " + target + " is " + ns.nFormat(serverMaxMoney, "$0.000a.")
    );
    ns.print(
      "Starting grow on " + target + " with " + ns.getHostname() + " to " + ns.nFormat(serverMaxMoney * 0.75, "$0.000a") + "..."
    );
    await ns.grow(target);
  }
  serverMoneyAvailable = ns.getServerMoneyAvailable(target);
  serverMaxMoney = ns.getServerMaxMoney(target);
  ns.print("-------------------------------------------------------");
  ns.print("Optimal current money on " + target + " reached !!!");
  ns.print(
    "Server money available on " + target + " is " + ns.nFormat(serverMoneyAvailable, "$0.000a.")
  );
  ns.print(
    "Server max money on" + target + " is " + ns.nFormat(serverMaxMoney, "$0.000a.")
  );
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NjcmlwdHMvZWFybHkvZ3Jvdy50cyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBR0EsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxRQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBRTVCLE1BQUksdUJBQXVCLEdBQUcsd0JBQXdCLE1BQU07QUFDNUQsTUFBSSxpQkFBaUIsR0FBRyxrQkFBa0IsTUFBTTtBQUVoRCxTQUFPLHVCQUF1QixpQkFBaUIsTUFBTTtBQUNuRCwyQkFBdUIsR0FBRyx3QkFBd0IsTUFBTTtBQUN4RCxxQkFBaUIsR0FBRyxrQkFBa0IsTUFBTTtBQUU1QyxPQUFHLE1BQU0seURBQXlEO0FBQ2xFLE9BQUc7QUFBQSxNQUNELCtCQUNFLFNBQ0EsU0FDQSxHQUFHLFFBQVEsc0JBQXNCLFVBQWU7QUFBQSxJQUNwRDtBQUNBLE9BQUc7QUFBQSxNQUNELHlCQUNFLFNBQ0EsU0FDQSxHQUFHLFFBQVEsZ0JBQWdCLFVBQWU7QUFBQSxJQUM5QztBQUNBLE9BQUc7QUFBQSxNQUNELHNCQUNFLFNBQ0EsV0FDQSxHQUFHLFlBQVksSUFDZixTQUNBLEdBQUcsUUFBUSxpQkFBaUIsTUFBTSxTQUFTLElBQzNDO0FBQUEsSUFDSjtBQUVBLFVBQU0sR0FBRyxLQUFLLE1BQU07QUFBQSxFQUN0QjtBQUVBLHlCQUF1QixHQUFHLHdCQUF3QixNQUFNO0FBQ3hELG1CQUFpQixHQUFHLGtCQUFrQixNQUFNO0FBRTVDLEtBQUcsTUFBTSx5REFBeUQ7QUFDbEUsS0FBRyxNQUFNLDhCQUE4QixTQUFTLGNBQWM7QUFDOUQsS0FBRztBQUFBLElBQ0QsK0JBQ0UsU0FDQSxTQUNBLEdBQUcsUUFBUSxzQkFBc0IsVUFBZTtBQUFBLEVBQ3BEO0FBQ0EsS0FBRztBQUFBLElBQ0Qsd0JBQ0UsU0FDQSxTQUNBLEdBQUcsUUFBUSxnQkFBZ0IsVUFBZTtBQUFBLEVBQzlDO0FBQ0Y7IiwibmFtZXMiOltdfQ==