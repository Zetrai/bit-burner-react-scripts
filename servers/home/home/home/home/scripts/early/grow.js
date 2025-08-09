// servers/home/home/home/scripts/early/grow.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zY3JpcHRzL2Vhcmx5L3NlcnZlcnMvaG9tZS9zcmMvc2NyaXB0cy9lYXJseS9ncm93LnRzIl0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFHQSxlQUFzQixLQUFLLElBQU07QUFDL0IsUUFBTSxTQUFTLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUU1QixNQUFJLHVCQUF1QixHQUFHLHdCQUF3QixNQUFNO0FBQzVELE1BQUksaUJBQWlCLEdBQUcsa0JBQWtCLE1BQU07QUFFaEQsU0FBTyx1QkFBdUIsaUJBQWlCLE1BQU07QUFDbkQsMkJBQXVCLEdBQUcsd0JBQXdCLE1BQU07QUFDeEQscUJBQWlCLEdBQUcsa0JBQWtCLE1BQU07QUFFNUMsT0FBRyxNQUFNLHlEQUF5RDtBQUNsRSxPQUFHLE1BQ0QsK0JBQ0UsU0FDQSxTQUNBLEdBQUcsUUFBUSxzQkFBc0IsVUFBZSxDQUFDO0FBRXJELE9BQUcsTUFDRCx5QkFDRSxTQUNBLFNBQ0EsR0FBRyxRQUFRLGdCQUFnQixVQUFlLENBQUM7QUFFL0MsT0FBRyxNQUNELHNCQUNFLFNBQ0EsV0FDQSxHQUFHLFlBQVcsSUFDZCxTQUNBLEdBQUcsUUFBUSxpQkFBaUIsTUFBTSxTQUFTLElBQzNDLEtBQUs7QUFHVCxVQUFNLEdBQUcsS0FBSyxNQUFNOztBQUd0Qix5QkFBdUIsR0FBRyx3QkFBd0IsTUFBTTtBQUN4RCxtQkFBaUIsR0FBRyxrQkFBa0IsTUFBTTtBQUU1QyxLQUFHLE1BQU0seURBQXlEO0FBQ2xFLEtBQUcsTUFBTSw4QkFBOEIsU0FBUyxjQUFjO0FBQzlELEtBQUcsTUFDRCwrQkFDRSxTQUNBLFNBQ0EsR0FBRyxRQUFRLHNCQUFzQixVQUFlLENBQUM7QUFFckQsS0FBRyxNQUNELHdCQUNFLFNBQ0EsU0FDQSxHQUFHLFFBQVEsZ0JBQWdCLFVBQWUsQ0FBQztBQUVqRDsiLCJuYW1lcyI6W119