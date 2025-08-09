// servers/home/scripts/early/hack.ts
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
    ns.print(
      "Starting attack on " + target + " with " + ns.getHostname() + "..."
    );
    while (currentSecurityLevel > securityLevelMin + 5) {
      ns.print(
        "---------------------------------------------------------------"
      );
      ns.print(target + " min security level is " + securityLevelMin);
      ns.print(
        "Current security level on " + target + " is " + ns.nFormat(currentSecurityLevel, "0.00") + "."
      );
      ns.print("Weakening " + target + " with " + ns.getHostname() + "...");
      await ns.weaken(target);
      currentSecurityLevel = ns.getServerSecurityLevel(target);
    }
    ns.print("---------------------------------------------------------------");
    serverMoneyAvailable = ns.getServerMoneyAvailable(target);
    serverMaxMoney = ns.getServerMaxMoney(target);
    ns.print("Minimum security level on " + target + " reached !!!");
    while (serverMoneyAvailable < serverMaxMoney * 0.75) {
      ns.print(
        "---------------------------------------------------------------"
      );
      ns.print(
        target + " Current Money: " + ns.nFormat(serverMoneyAvailable, "$0.000a")
      );
      ns.print(target + " Max Money: " + ns.nFormat(serverMaxMoney, "$0.000a"));
      ns.print(
        "Growing " + target + " with " + ns.getHostname() + " to " + ns.nFormat(serverMaxMoney * 0.75, "$0.000a") + "..."
      );
      await ns.grow(target);
      serverMoneyAvailable = ns.getServerMoneyAvailable(target);
      serverMaxMoney = ns.getServerMaxMoney(target);
    }
    ns.print("---------------------------------------------------------------");
    ns.print("Optimal current money on " + target + " reached !!!");
    ns.print(
      target + " Current Money: " + ns.nFormat(serverMoneyAvailable, "$0.000a")
    );
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NjcmlwdHMvZWFybHkvaGFjay50cyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBR0EsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxRQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzVCLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFFSixTQUFPLE1BQU07QUFDWCx1QkFBbUIsR0FBRywwQkFBMEIsTUFBTTtBQUN0RCwyQkFBdUIsR0FBRyx1QkFBdUIsTUFBTTtBQUV2RCxPQUFHLFNBQVM7QUFDWixPQUFHLE1BQU0saUVBQWlFO0FBQzFFLE9BQUc7QUFBQSxNQUNELHdCQUF3QixTQUFTLFdBQVcsR0FBRyxZQUFZLElBQUk7QUFBQSxJQUNqRTtBQUVBLFdBQU8sdUJBQXVCLG1CQUFtQixHQUFHO0FBQ2xELFNBQUc7QUFBQSxRQUNEO0FBQUEsTUFDRjtBQUNBLFNBQUcsTUFBTSxTQUFTLDRCQUE0QixnQkFBZ0I7QUFDOUQsU0FBRztBQUFBLFFBQ0QsK0JBQ0UsU0FDQSxTQUNBLEdBQUcsUUFBUSxzQkFBc0IsTUFBTSxJQUN2QztBQUFBLE1BQ0o7QUFDQSxTQUFHLE1BQU0sZUFBZSxTQUFTLFdBQVcsR0FBRyxZQUFZLElBQUksS0FBSztBQUVwRSxZQUFNLEdBQUcsT0FBTyxNQUFNO0FBQ3RCLDZCQUF1QixHQUFHLHVCQUF1QixNQUFNO0FBQUEsSUFDekQ7QUFFQSxPQUFHLE1BQU0saUVBQWlFO0FBQzFFLDJCQUF1QixHQUFHLHdCQUF3QixNQUFNO0FBQ3hELHFCQUFpQixHQUFHLGtCQUFrQixNQUFNO0FBRTVDLE9BQUcsTUFBTSwrQkFBK0IsU0FBUyxjQUFjO0FBRS9ELFdBQU8sdUJBQXVCLGlCQUFpQixNQUFNO0FBQ25ELFNBQUc7QUFBQSxRQUNEO0FBQUEsTUFDRjtBQUNBLFNBQUc7QUFBQSxRQUNELFNBQ0UscUJBQ0EsR0FBRyxRQUFRLHNCQUFzQixTQUFTO0FBQUEsTUFDOUM7QUFDQSxTQUFHLE1BQU0sU0FBUyxpQkFBaUIsR0FBRyxRQUFRLGdCQUFnQixTQUFTLENBQUM7QUFDeEUsU0FBRztBQUFBLFFBQ0QsYUFDRSxTQUNBLFdBQ0EsR0FBRyxZQUFZLElBQ2YsU0FDQSxHQUFHLFFBQVEsaUJBQWlCLE1BQU0sU0FBUyxJQUMzQztBQUFBLE1BQ0o7QUFFQSxZQUFNLEdBQUcsS0FBSyxNQUFNO0FBQ3BCLDZCQUF1QixHQUFHLHdCQUF3QixNQUFNO0FBQ3hELHVCQUFpQixHQUFHLGtCQUFrQixNQUFNO0FBQUEsSUFDOUM7QUFFQSxPQUFHLE1BQU0saUVBQWlFO0FBQzFFLE9BQUcsTUFBTSw4QkFBOEIsU0FBUyxjQUFjO0FBQzlELE9BQUc7QUFBQSxNQUNELFNBQVMscUJBQXFCLEdBQUcsUUFBUSxzQkFBc0IsU0FBUztBQUFBLElBQzFFO0FBQ0EsT0FBRyxNQUFNLFNBQVMsaUJBQWlCLEdBQUcsUUFBUSxnQkFBZ0IsU0FBUyxDQUFDO0FBQ3hFLE9BQUcsTUFBTSxpRUFBaUU7QUFDMUUsT0FBRyxNQUFNLGFBQWEsU0FBUyxXQUFXLEdBQUcsWUFBWSxJQUFJLEtBQUs7QUFFbEUsVUFBTSxHQUFHLEtBQUssTUFBTTtBQUNwQiwyQkFBdUIsR0FBRyx3QkFBd0IsTUFBTTtBQUN4RCxxQkFBaUIsR0FBRyxrQkFBa0IsTUFBTTtBQUFBLEVBQzlDO0FBQ0Y7IiwibmFtZXMiOltdfQ==