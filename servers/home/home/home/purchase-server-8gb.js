// servers/home/home/purchase-server-8gb.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvcHVyY2hhc2Utc2VydmVyLThnYi5qcyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBQ0EsZUFBc0IsS0FBSyxJQUFJO0FBRzNCLFFBQU0sTUFBTTtBQUdaLE1BQUksSUFBSTtBQUlSLFNBQU8sSUFBSSxHQUFHLHdCQUF3QixHQUFHO0FBRXJDLE9BQUcsU0FBUztBQUNaLE9BQUcsTUFBTSx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQyxFQUFFO0FBQy9ELE9BQUcsTUFBTSx1QkFBdUIsR0FBRyx1QkFBdUIsR0FBRyxDQUFDLEVBQUU7QUFDaEUsT0FBRyxNQUFNLGlDQUFpQyxHQUFHLG9CQUFvQixFQUFFLE1BQU0sRUFBRTtBQUUzRSxRQUFJLEdBQUcsd0JBQXdCLE1BQU0sSUFBSSxHQUFHLHVCQUF1QixHQUFHLEdBQUc7QUFNckUsVUFBSSxXQUFXLEdBQUcsZUFBZSxnQkFBZ0IsSUFBSSxLQUFLLEdBQUc7QUFDN0QsU0FBRyxJQUFJLDBCQUEwQixRQUFRO0FBQ3pDLFNBQUcsS0FBSywwQkFBMEIsVUFBVSxDQUFDO0FBQzdDLFFBQUU7QUFBQSxJQUNOO0FBR0EsVUFBTSxHQUFHLE1BQU0sR0FBSTtBQUFBLEVBQ3ZCO0FBQ0o7IiwibmFtZXMiOltdfQ==