// servers/home/home/scripts/serverInfo.js
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
  ns.tprint("Current security: " + ns.nFormat(server.hackDifficulty || 0, "0.00"));
  ns.tprint("");
  ns.tprint("------------------------------------");
  ns.tprint("Money Infomation");
  ns.tprint("------------------------------------");
  ns.tprint("Max Money: " + ns.nFormat(server.moneyMax || 0, "$0.000a"));
  ns.tprint("Current Money: " + ns.nFormat(server.moneyAvailable || 0, "$0.000a"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NyYy9zY3JpcHRzL3NlcnZlckluZm8udHMiXSwic291cmNlUm9vdCI6Ii8iLCJtYXBwaW5ncyI6IjtBQUdBLGVBQXNCLEtBQUssSUFBTTtBQUMvQixRQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzVCLFFBQU0sU0FBaUIsR0FBRyxVQUFVLE1BQU07QUFFMUMsUUFBTSxlQUFlLE9BQU8sU0FBUyxPQUFPO0FBQzVDLFFBQU0sZUFBZSxHQUFHLGFBQWEsa0JBQWtCO0FBQ3ZELFFBQU0sYUFBYSxLQUFLLE1BQU0sZUFBZSxZQUFZO0FBRXpELEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLG1CQUFtQjtBQUM3QixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxnQkFBZ0IsT0FBTyxRQUFRO0FBQ3pDLEtBQUcsT0FBTyxTQUFTLE9BQU8sRUFBRTtBQUM1QixLQUFHLE9BQU8sZUFBZSxPQUFPLGdCQUFnQjtBQUNoRCxLQUFHLE9BQU8sRUFBRTtBQUNaLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLHFCQUFxQjtBQUMvQixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyw2QkFBNkIsT0FBTyxvQkFBb0I7QUFDbEUsS0FBRyxPQUFPLHlCQUF5QixPQUFPLGFBQWE7QUFDdkQsS0FBRyxPQUNELHVCQUF1QixHQUFHLFFBQVEsT0FBTyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7QUFFdkUsS0FBRyxPQUFPLEVBQUU7QUFDWixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxrQkFBa0I7QUFDNUIsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sZ0JBQWdCLEdBQUcsUUFBUSxPQUFPLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDckUsS0FBRyxPQUNELG9CQUFvQixHQUFHLFFBQVEsT0FBTyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7QUFFdkUsS0FBRyxPQUFPLG9CQUFvQixPQUFPLFlBQVk7QUFDakQsS0FBRyxPQUFPLEVBQUU7QUFDWixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxxQkFBcUI7QUFDL0IsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sWUFBWSxPQUFPLFFBQVE7QUFDckMsS0FBRyxPQUFPLGNBQWMsT0FBTyxNQUFNO0FBQ3JDLEtBQUcsT0FBTyxlQUFlLE9BQU8sT0FBTztBQUN2QyxLQUFHLE9BQU8sa0JBQWtCLFVBQVU7QUFDdEMsS0FBRyxPQUFPLEVBQUU7QUFDWixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxvQkFBb0I7QUFDOUIsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sYUFBYSxPQUFPLGNBQWM7QUFDNUMsS0FBRyxPQUFPLGlCQUFpQixPQUFPLGlCQUFpQjtBQUNuRCxLQUFHLE9BQU8sMEJBQTBCLE9BQU8sb0JBQW9CO0FBQy9ELEtBQUcsT0FBTywyQkFBMkIsT0FBTyxhQUFhO0FBQ3pELEtBQUcsT0FBTyxzQ0FBc0M7QUFDbEQ7IiwibmFtZXMiOltdfQ==