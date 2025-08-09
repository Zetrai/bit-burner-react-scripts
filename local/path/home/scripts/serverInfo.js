// servers/home/scripts/serverInfo.ts
async function main(ns) {
  const target = `${ns.args[0]}`;
  const server = ns.getServer(target);
  const ramAvailable = server.maxRam - server.ramUsed;
  const ramPerThread = ns.getScriptRam("/scripts/hack.js");
  const maxThreads = Math.floor(ramAvailable / ramPerThread);
  ns.tprint("------------------------------------");
  ns.tprint("Server Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Host Name: " + server.hostname);
  ns.tprint("IP: " + server.ip);
  ns.tprint("Owned By: " + server.organizationName);
  ns.tprint("");
  ns.tprint("------------------------------------");
  ns.tprint("Security Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Required Hacking Level: " + server.requiredHackingSkill);
  ns.tprint("Min Security level: " + server.minDifficulty);
  ns.tprint(
    "Current security: " + ns.nFormat(server.hackDifficulty || 0, "0.00")
  );
  ns.tprint("");
  ns.tprint("------------------------------------");
  ns.tprint("Money Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Max Money: " + ns.nFormat(server.moneyMax || 0, "$0.000a"));
  ns.tprint(
    "Current Money: " + ns.nFormat(server.moneyAvailable || 0, "$0.000a")
  );
  ns.tprint("Server Growth: " + server.serverGrowth);
  ns.tprint("");
  ns.tprint("------------------------------------");
  ns.tprint("Hardware Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Cores: " + server.cpuCores);
  ns.tprint("Max RAM: " + server.maxRam);
  ns.tprint("Used RAM: " + server.ramUsed);
  ns.tprint("Max Threads: " + maxThreads);
  ns.tprint("");
  ns.tprint("------------------------------------");
  ns.tprint("Hacking Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Rooted: " + server.hasAdminRights);
  ns.tprint("Backdoored: " + server.backdoorInstalled);
  ns.tprint("Required Open Ports: " + server.numOpenPortsRequired);
  ns.tprint("Ports Currently Open: " + server.openPortCount);
  ns.tprint("------------------------------------");
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NjcmlwdHMvc2VydmVySW5mby50cyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBR0EsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxRQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzVCLFFBQU0sU0FBaUIsR0FBRyxVQUFVLE1BQU07QUFFMUMsUUFBTSxlQUFlLE9BQU8sU0FBUyxPQUFPO0FBQzVDLFFBQU0sZUFBZSxHQUFHLGFBQWEsa0JBQWtCO0FBQ3ZELFFBQU0sYUFBYSxLQUFLLE1BQU0sZUFBZSxZQUFZO0FBRXpELEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLG1CQUFtQjtBQUM3QixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxnQkFBZ0IsT0FBTyxRQUFRO0FBQ3pDLEtBQUcsT0FBTyxTQUFTLE9BQU8sRUFBRTtBQUM1QixLQUFHLE9BQU8sZUFBZSxPQUFPLGdCQUFnQjtBQUNoRCxLQUFHLE9BQU8sRUFBRTtBQUNaLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLHFCQUFxQjtBQUMvQixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyw2QkFBNkIsT0FBTyxvQkFBb0I7QUFDbEUsS0FBRyxPQUFPLHlCQUF5QixPQUFPLGFBQWE7QUFDdkQsS0FBRztBQUFBLElBQ0QsdUJBQXVCLEdBQUcsUUFBUSxPQUFPLGtCQUFrQixHQUFHLE1BQU07QUFBQSxFQUN0RTtBQUNBLEtBQUcsT0FBTyxFQUFFO0FBQ1osS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sa0JBQWtCO0FBQzVCLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLGdCQUFnQixHQUFHLFFBQVEsT0FBTyxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBQ3JFLEtBQUc7QUFBQSxJQUNELG9CQUFvQixHQUFHLFFBQVEsT0FBTyxrQkFBa0IsR0FBRyxTQUFTO0FBQUEsRUFDdEU7QUFDQSxLQUFHLE9BQU8sb0JBQW9CLE9BQU8sWUFBWTtBQUNqRCxLQUFHLE9BQU8sRUFBRTtBQUNaLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLHFCQUFxQjtBQUMvQixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxZQUFZLE9BQU8sUUFBUTtBQUNyQyxLQUFHLE9BQU8sY0FBYyxPQUFPLE1BQU07QUFDckMsS0FBRyxPQUFPLGVBQWUsT0FBTyxPQUFPO0FBQ3ZDLEtBQUcsT0FBTyxrQkFBa0IsVUFBVTtBQUN0QyxLQUFHLE9BQU8sRUFBRTtBQUNaLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLG9CQUFvQjtBQUM5QixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxhQUFhLE9BQU8sY0FBYztBQUM1QyxLQUFHLE9BQU8saUJBQWlCLE9BQU8saUJBQWlCO0FBQ25ELEtBQUcsT0FBTywwQkFBMEIsT0FBTyxvQkFBb0I7QUFDL0QsS0FBRyxPQUFPLDJCQUEyQixPQUFPLGFBQWE7QUFDekQsS0FBRyxPQUFPLHNDQUFzQztBQUNsRDsiLCJuYW1lcyI6W119