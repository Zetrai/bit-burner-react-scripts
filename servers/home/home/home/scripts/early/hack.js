// servers/home/home/scripts/early/hack.js
async function main(ns) {
  const target = `${ns.args[0]}`;
  let securityLevelMin;
  let currentSecurityLevel;
  let serverMaxMoney;
  let serverMoneyAvailable;
  while (true) {
    securityLevelMin = ns.getServerMinSecurityLevel(target);
    currentSecurityLevel = ns.getServerSecurityLevel(target);
    ns.clearLog();
    ns.print("---------------------------------------------------------------");
    ns.print("Starting attack on " + target + " with " + ns.getHostname() + "...");
    while (currentSecurityLevel > securityLevelMin + 5) {
      ns.print("---------------------------------------------------------------");
      ns.print(target + " min security level is " + securityLevelMin);
      ns.print("Current security level on " + target + " is " + ns.nFormat(currentSecurityLevel, "0.00") + ".");
      ns.print("Weakening " + target + " with " + ns.getHostname() + "...");
      await ns.weaken(target);
      currentSecurityLevel = ns.getServerSecurityLevel(target);
    }
    ns.print("---------------------------------------------------------------");
    serverMoneyAvailable = ns.getServerMoneyAvailable(target);
    serverMaxMoney = ns.getServerMaxMoney(target);
    ns.print("Minimum security level on " + target + " reached !!!");
    while (serverMoneyAvailable < serverMaxMoney * 0.75) {
      ns.print("---------------------------------------------------------------");
      ns.print(target + " Current Money: " + ns.nFormat(serverMoneyAvailable, "$0.000a"));
      ns.print(target + " Max Money: " + ns.nFormat(serverMaxMoney, "$0.000a"));
      ns.print("Growing " + target + " with " + ns.getHostname() + " to " + ns.nFormat(serverMaxMoney * 0.75, "$0.000a") + "...");
      await ns.grow(target);
      serverMoneyAvailable = ns.getServerMoneyAvailable(target);
      serverMaxMoney = ns.getServerMaxMoney(target);
    }
    ns.print("---------------------------------------------------------------");
    ns.print("Optimal current money on " + target + " reached !!!");
    ns.print(target + " Current Money: " + ns.nFormat(serverMoneyAvailable, "$0.000a"));
    ns.print(target + " Max Money: " + ns.nFormat(serverMaxMoney, "$0.000a"));
    ns.print("---------------------------------------------------------------");
    ns.print("Hacking " + target + " with " + ns.getHostname() + "...");
    await ns.hack(target);
    serverMoneyAvailable = ns.getServerMoneyAvailable(target);
    serverMaxMoney = ns.getServerMaxMoney(target);
  }
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NyYy9zY3JpcHRzL2Vhcmx5L2hhY2sudHMiXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQUdBLGVBQXNCLEtBQUssSUFBTTtBQUMvQixRQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzVCLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFFSixTQUFPLE1BQU07QUFDWCx1QkFBbUIsR0FBRywwQkFBMEIsTUFBTTtBQUN0RCwyQkFBdUIsR0FBRyx1QkFBdUIsTUFBTTtBQUV2RCxPQUFHLFNBQVE7QUFDWCxPQUFHLE1BQU0saUVBQWlFO0FBQzFFLE9BQUcsTUFDRCx3QkFBd0IsU0FBUyxXQUFXLEdBQUcsWUFBVyxJQUFLLEtBQUs7QUFHdEUsV0FBTyx1QkFBdUIsbUJBQW1CLEdBQUc7QUFDbEQsU0FBRyxNQUNELGlFQUFpRTtBQUVuRSxTQUFHLE1BQU0sU0FBUyw0QkFBNEIsZ0JBQWdCO0FBQzlELFNBQUcsTUFDRCwrQkFDRSxTQUNBLFNBQ0EsR0FBRyxRQUFRLHNCQUFzQixNQUFNLElBQ3ZDLEdBQUc7QUFFUCxTQUFHLE1BQU0sZUFBZSxTQUFTLFdBQVcsR0FBRyxZQUFXLElBQUssS0FBSztBQUVwRSxZQUFNLEdBQUcsT0FBTyxNQUFNO0FBQ3RCLDZCQUF1QixHQUFHLHVCQUF1QixNQUFNOztBQUd6RCxPQUFHLE1BQU0saUVBQWlFO0FBQzFFLDJCQUF1QixHQUFHLHdCQUF3QixNQUFNO0FBQ3hELHFCQUFpQixHQUFHLGtCQUFrQixNQUFNO0FBRTVDLE9BQUcsTUFBTSwrQkFBK0IsU0FBUyxjQUFjO0FBRS9ELFdBQU8sdUJBQXVCLGlCQUFpQixNQUFNO0FBQ25ELFNBQUcsTUFDRCxpRUFBaUU7QUFFbkUsU0FBRyxNQUNELFNBQ0UscUJBQ0EsR0FBRyxRQUFRLHNCQUFzQixTQUFTLENBQUM7QUFFL0MsU0FBRyxNQUFNLFNBQVMsaUJBQWlCLEdBQUcsUUFBUSxnQkFBZ0IsU0FBUyxDQUFDO0FBQ3hFLFNBQUcsTUFDRCxhQUNFLFNBQ0EsV0FDQSxHQUFHLFlBQVcsSUFDZCxTQUNBLEdBQUcsUUFBUSxpQkFBaUIsTUFBTSxTQUFTLElBQzNDLEtBQUs7QUFHVCxZQUFNLEdBQUcsS0FBSyxNQUFNO0FBQ3BCLDZCQUF1QixHQUFHLHdCQUF3QixNQUFNO0FBQ3hELHVCQUFpQixHQUFHLGtCQUFrQixNQUFNOztBQUc5QyxPQUFHLE1BQU0saUVBQWlFO0FBQzFFLE9BQUcsTUFBTSw4QkFBOEIsU0FBUyxjQUFjO0FBQzlELE9BQUcsTUFDRCxTQUFTLHFCQUFxQixHQUFHLFFBQVEsc0JBQXNCLFNBQVMsQ0FBQztBQUUzRSxPQUFHLE1BQU0sU0FBUyxpQkFBaUIsR0FBRyxRQUFRLGdCQUFnQixTQUFTLENBQUM7QUFDeEUsT0FBRyxNQUFNLGlFQUFpRTtBQUMxRSxPQUFHLE1BQU0sYUFBYSxTQUFTLFdBQVcsR0FBRyxZQUFXLElBQUssS0FBSztBQUVsRSxVQUFNLEdBQUcsS0FBSyxNQUFNO0FBQ3BCLDJCQUF1QixHQUFHLHdCQUF3QixNQUFNO0FBQ3hELHFCQUFpQixHQUFHLGtCQUFrQixNQUFNOztBQUVoRDsiLCJuYW1lcyI6W119