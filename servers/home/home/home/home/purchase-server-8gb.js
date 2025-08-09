// servers/home/home/home/purchase-server-8gb.js
async function main(ns) {
  const ram = 8;
  let i = 0;
  while (i < ns.getPurchasedServerLimit()) {
    ns.clearLog();
    ns.print(`INFO Purchase Limit: ${ns.getPurchasedServerLimit()}`);
    ns.print(`INFO Purchase Cost: ${ns.getPurchasedServerCost(ram)}`);
    ns.print(`INFO Total Purchased Servers: ${ns.getPurchasedServers().length}`);
    if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
      let hostname = ns.purchaseServer("pserv-8gb-" + (i + 10), ram);
      ns.scp("early-hack-template.js", hostname);
      ns.exec("early-hack-template.js", hostname, 3);
      ++i;
    }
    await ns.sleep(1e3);
  }
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zZXJ2ZXJzL2hvbWUvaG9tZS9wdXJjaGFzZS1zZXJ2ZXItOGdiLmpzIl0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFDQSxlQUFzQixLQUFLLElBQUk7QUFHM0IsUUFBTSxNQUFNO0FBR1osTUFBSSxJQUFJO0FBSVIsU0FBTyxJQUFJLEdBQUcsd0JBQXdCLEdBQUc7QUFFckMsT0FBRyxTQUFTO0FBQ1osT0FBRyxNQUFNLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDLEVBQUU7QUFDL0QsT0FBRyxNQUFNLHVCQUF1QixHQUFHLHVCQUF1QixHQUFHLENBQUMsRUFBRTtBQUNoRSxPQUFHLE1BQU0saUNBQWlDLEdBQUcsb0JBQW9CLEVBQUUsTUFBTSxFQUFFO0FBRTNFLFFBQUksR0FBRyx3QkFBd0IsTUFBTSxJQUFJLEdBQUcsdUJBQXVCLEdBQUcsR0FBRztBQU1yRSxVQUFJLFdBQVcsR0FBRyxlQUFlLGdCQUFnQixJQUFJLEtBQUssR0FBRztBQUM3RCxTQUFHLElBQUksMEJBQTBCLFFBQVE7QUFDekMsU0FBRyxLQUFLLDBCQUEwQixVQUFVLENBQUM7QUFDN0MsUUFBRTtJQUNOO0FBR0EsVUFBTSxHQUFHLE1BQU0sR0FBSTtFQUN2QjtBQUNKOyIsIm5hbWVzIjpbXX0=