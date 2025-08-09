// servers/home/home/home/scripts/serverInfo.js
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zY3JpcHRzL3NlcnZlcnMvaG9tZS9zcmMvc2NyaXB0cy9zZXJ2ZXJJbmZvLnRzIl0sInNvdXJjZVJvb3QiOiIvIiwibWFwcGluZ3MiOiI7QUFHQSxlQUFzQixLQUFLLElBQU07QUFDL0IsUUFBTSxTQUFTLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUM1QixRQUFNLFNBQWlCLEdBQUcsVUFBVSxNQUFNO0FBRTFDLFFBQU0sZUFBZSxPQUFPLFNBQVMsT0FBTztBQUM1QyxRQUFNLGVBQWUsR0FBRyxhQUFhLGtCQUFrQjtBQUN2RCxRQUFNLGFBQWEsS0FBSyxNQUFNLGVBQWUsWUFBWTtBQUV6RCxLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxtQkFBbUI7QUFDN0IsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sZ0JBQWdCLE9BQU8sUUFBUTtBQUN6QyxLQUFHLE9BQU8sU0FBUyxPQUFPLEVBQUU7QUFDNUIsS0FBRyxPQUFPLGVBQWUsT0FBTyxnQkFBZ0I7QUFDaEQsS0FBRyxPQUFPLEVBQUU7QUFDWixLQUFHLE9BQU8sc0NBQXNDO0FBQ2hELEtBQUcsT0FBTyxxQkFBcUI7QUFDL0IsS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sNkJBQTZCLE9BQU8sb0JBQW9CO0FBQ2xFLEtBQUcsT0FBTyx5QkFBeUIsT0FBTyxhQUFhO0FBQ3ZELEtBQUcsT0FDRCx1QkFBdUIsR0FBRyxRQUFRLE9BQU8sa0JBQWtCLEdBQUcsTUFBTSxDQUFDO0FBRXZFLEtBQUcsT0FBTyxFQUFFO0FBQ1osS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sa0JBQWtCO0FBQzVCLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLGdCQUFnQixHQUFHLFFBQVEsT0FBTyxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBQ3JFLEtBQUcsT0FDRCxvQkFBb0IsR0FBRyxRQUFRLE9BQU8sa0JBQWtCLEdBQUcsU0FBUyxDQUFDO0FBRXZFLEtBQUcsT0FBTyxvQkFBb0IsT0FBTyxZQUFZO0FBQ2pELEtBQUcsT0FBTyxFQUFFO0FBQ1osS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8scUJBQXFCO0FBQy9CLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLFlBQVksT0FBTyxRQUFRO0FBQ3JDLEtBQUcsT0FBTyxjQUFjLE9BQU8sTUFBTTtBQUNyQyxLQUFHLE9BQU8sZUFBZSxPQUFPLE9BQU87QUFDdkMsS0FBRyxPQUFPLGtCQUFrQixVQUFVO0FBQ3RDLEtBQUcsT0FBTyxFQUFFO0FBQ1osS0FBRyxPQUFPLHNDQUFzQztBQUNoRCxLQUFHLE9BQU8sb0JBQW9CO0FBQzlCLEtBQUcsT0FBTyxzQ0FBc0M7QUFDaEQsS0FBRyxPQUFPLGFBQWEsT0FBTyxjQUFjO0FBQzVDLEtBQUcsT0FBTyxpQkFBaUIsT0FBTyxpQkFBaUI7QUFDbkQsS0FBRyxPQUFPLDBCQUEwQixPQUFPLG9CQUFvQjtBQUMvRCxLQUFHLE9BQU8sMkJBQTJCLE9BQU8sYUFBYTtBQUN6RCxLQUFHLE9BQU8sc0NBQXNDO0FBQ2xEOyIsIm5hbWVzIjpbXX0=