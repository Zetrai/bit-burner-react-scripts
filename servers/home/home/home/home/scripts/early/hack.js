// servers/home/home/home/scripts/early/hack.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zY3JpcHRzL2Vhcmx5L3NlcnZlcnMvaG9tZS9zcmMvc2NyaXB0cy9lYXJseS9oYWNrLnRzIl0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFHQSxlQUFzQixLQUFLLElBQU07QUFDL0IsUUFBTSxTQUFTLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUM1QixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJO0FBRUosU0FBTyxNQUFNO0FBQ1gsdUJBQW1CLEdBQUcsMEJBQTBCLE1BQU07QUFDdEQsMkJBQXVCLEdBQUcsdUJBQXVCLE1BQU07QUFFdkQsT0FBRyxTQUFRO0FBQ1gsT0FBRyxNQUFNLGlFQUFpRTtBQUMxRSxPQUFHLE1BQ0Qsd0JBQXdCLFNBQVMsV0FBVyxHQUFHLFlBQVcsSUFBSyxLQUFLO0FBR3RFLFdBQU8sdUJBQXVCLG1CQUFtQixHQUFHO0FBQ2xELFNBQUcsTUFDRCxpRUFBaUU7QUFFbkUsU0FBRyxNQUFNLFNBQVMsNEJBQTRCLGdCQUFnQjtBQUM5RCxTQUFHLE1BQ0QsK0JBQ0UsU0FDQSxTQUNBLEdBQUcsUUFBUSxzQkFBc0IsTUFBTSxJQUN2QyxHQUFHO0FBRVAsU0FBRyxNQUFNLGVBQWUsU0FBUyxXQUFXLEdBQUcsWUFBVyxJQUFLLEtBQUs7QUFFcEUsWUFBTSxHQUFHLE9BQU8sTUFBTTtBQUN0Qiw2QkFBdUIsR0FBRyx1QkFBdUIsTUFBTTs7QUFHekQsT0FBRyxNQUFNLGlFQUFpRTtBQUMxRSwyQkFBdUIsR0FBRyx3QkFBd0IsTUFBTTtBQUN4RCxxQkFBaUIsR0FBRyxrQkFBa0IsTUFBTTtBQUU1QyxPQUFHLE1BQU0sK0JBQStCLFNBQVMsY0FBYztBQUUvRCxXQUFPLHVCQUF1QixpQkFBaUIsTUFBTTtBQUNuRCxTQUFHLE1BQ0QsaUVBQWlFO0FBRW5FLFNBQUcsTUFDRCxTQUNFLHFCQUNBLEdBQUcsUUFBUSxzQkFBc0IsU0FBUyxDQUFDO0FBRS9DLFNBQUcsTUFBTSxTQUFTLGlCQUFpQixHQUFHLFFBQVEsZ0JBQWdCLFNBQVMsQ0FBQztBQUN4RSxTQUFHLE1BQ0QsYUFDRSxTQUNBLFdBQ0EsR0FBRyxZQUFXLElBQ2QsU0FDQSxHQUFHLFFBQVEsaUJBQWlCLE1BQU0sU0FBUyxJQUMzQyxLQUFLO0FBR1QsWUFBTSxHQUFHLEtBQUssTUFBTTtBQUNwQiw2QkFBdUIsR0FBRyx3QkFBd0IsTUFBTTtBQUN4RCx1QkFBaUIsR0FBRyxrQkFBa0IsTUFBTTs7QUFHOUMsT0FBRyxNQUFNLGlFQUFpRTtBQUMxRSxPQUFHLE1BQU0sOEJBQThCLFNBQVMsY0FBYztBQUM5RCxPQUFHLE1BQ0QsU0FBUyxxQkFBcUIsR0FBRyxRQUFRLHNCQUFzQixTQUFTLENBQUM7QUFFM0UsT0FBRyxNQUFNLFNBQVMsaUJBQWlCLEdBQUcsUUFBUSxnQkFBZ0IsU0FBUyxDQUFDO0FBQ3hFLE9BQUcsTUFBTSxpRUFBaUU7QUFDMUUsT0FBRyxNQUFNLGFBQWEsU0FBUyxXQUFXLEdBQUcsWUFBVyxJQUFLLEtBQUs7QUFFbEUsVUFBTSxHQUFHLEtBQUssTUFBTTtBQUNwQiwyQkFBdUIsR0FBRyx3QkFBd0IsTUFBTTtBQUN4RCxxQkFBaUIsR0FBRyxrQkFBa0IsTUFBTTs7QUFFaEQ7IiwibmFtZXMiOltdfQ==