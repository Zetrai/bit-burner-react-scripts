export async function main(ns) {
    // Globals
    const ram = 8;
    const numOfServers = ns.getPurchasedServerLimit();
    const hostNamePrefix = 'pserv-';
    const buy = true; // Check prices or simulate the purchase before you actually buy
    // Variables
    let serverName;
    const serversCost = ns.getPurchasedServerCost(ram) * numOfServers; // Comment out * numOfServers if needed
    const totalCost = serversCost * numOfServers;
    // Quick total purchase cost dry calculation
    ns.tprint('Total Cost is ' + ns.nFormat(totalCost, '$0.000a' + '.'));
    // Main Script
    // Toggle buy flag in Globals to enable actual purchase
    if (buy) {
        // You have to kill all scripts on servers before you can delete or buy new ones
        // For buying a Server Farm uncomment this below and set the proper number of servers to purchase in the header.
        // This will buy a group of servers with a common name and number, which makes it easier to manage and automate.
        //
        let i = 21;
        while (i < numOfServers) {
            // Check if we have enough money to purchase a server
            ns.clearLog();
            ns.print(`INFO Purchase Limit: ${ns.getPurchasedServerLimit()}`);
            ns.print(`INFO Purchase Cost: ${ns.getPurchasedServerCost(ram)}`);
            ns.print(`INFO Total Purchased Servers: ${ns.getPurchasedServers().length}`);
            if (ns.getServerMoneyAvailable('home') > ns.getPurchasedServerCost(ram)) {
                serverName = hostNamePrefix + i.toString();
                ns.tprint('Buying ' + serverName);
                // ns.killall(serverName);
                // ns.deleteServer(serverName);
                ns.purchaseServer(serverName, ram);
                const scripts = [
                    '/scripts/early/hack.js',
                    '/scripts/early/deployscripts.js',
                    '/scripts/grow.js',
                    '/scripts/supergrow.js',
                    'scripts/serverInfo.ts',
                ];
                ns.scp(scripts, serverName);
                const ramAvailable = ns.getServerMaxRam(serverName) - ns.getServerUsedRam(serverName);
                const script = '/scripts/early/hack.js';
                const ramPerThread = ns.getScriptRam(script);
                const threads = Math.floor(ramAvailable / ramPerThread);
                const programsCount = await getProgramsAndInstall(false, ns);
                const myInfo = {
                    level: ns.getHackingLevel(),
                    portsUnlocked: programsCount,
                    moneyAvailable: await ns.getServerMoneyAvailable('home'),
                };
                const targetServer = await getTargetServer(myInfo, ns);
                ns.exec(script, serverName, threads, targetServer);
                ++i;
            }
            await ns.sleep(1000);
        }
    }
}
export async function getProgramsAndInstall(installCheck, ns) {
    if (!installCheck) {
        let count = 1; //BruteSSH.exe is always installed due to the augmentation
        if (ns.fileExists('FTPCrack.exe', 'home'))
            count++;
        if (ns.fileExists('relaySMTP.exe', 'home'))
            count++;
        if (ns.fileExists('HTTPWorm.exe', 'home'))
            count++;
        if (ns.fileExists('SQLInject.exe', 'home'))
            count++;
        return count;
    }
    if (ns.fileExists('BruteSSH.exe', 'home'))
        ns.brutessh(installCheck);
    if (ns.fileExists('FTPCrack.exe', 'home'))
        ns.ftpcrack(installCheck);
    if (ns.fileExists('relaySMTP.exe', 'home'))
        ns.relaysmtp(installCheck);
    if (ns.fileExists('HTTPWorm.exe', 'home'))
        ns.httpworm(installCheck);
    if (ns.fileExists('SQLInject.exe', 'home'))
        ns.sqlinject(installCheck);
    return;
}
export async function getTargetServer(myInfo, ns) {
    let target = 'foodnstuff';
    if (myInfo.level < 40) {
        return 'foodnstuff';
    }
    else if ((myInfo.level > 40 && myInfo.level < 100) ||
        myInfo.portsUnlocked == 1) {
        target = 'harakiri-sushi';
    }
    else if (myInfo.portsUnlocked == 2 ||
        (myInfo.portsUnlocked > 2 && myInfo.level < 500)) {
        if (myInfo.level < 292)
            target = 'phantasy';
        else
            target = 'phantasy';
    }
    else if (myInfo.portsUnlocked == 3 ||
        (myInfo.portsUnlocked > 3 && myInfo.level < 800)) {
        target = 'phantasy';
    }
    else if (myInfo.portsUnlocked == 4 ||
        (myInfo.portsUnlocked > 4 && myInfo.level < 900)) {
        target = 'phantasy';
    }
    else if (myInfo.portsUnlocked == 5) {
        target = 'phantasy';
    }
    ns.tprint('Target Server : ' + target);
    return target;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyRmFybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY3JpcHRzL2Vhcmx5L3NlcnZlckZhcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsRUFBTTtJQUMvQixVQUFVO0lBQ1YsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbEQsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDO0lBQ2hDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLGdFQUFnRTtJQUVsRixZQUFZO0lBQ1osSUFBSSxVQUFVLENBQUM7SUFDZixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsdUNBQXVDO0lBQzFHLE1BQU0sU0FBUyxHQUFHLFdBQVcsR0FBRyxZQUFZLENBQUM7SUFFN0MsNENBQTRDO0lBQzVDLEVBQUUsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFckUsY0FBYztJQUNkLHVEQUF1RDtJQUN2RCxJQUFJLEdBQUcsRUFBRTtRQUNQLGdGQUFnRjtRQUVoRixnSEFBZ0g7UUFDaEgsZ0hBQWdIO1FBQ2hILEVBQUU7UUFDRixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxPQUFPLENBQUMsR0FBRyxZQUFZLEVBQUU7WUFDdkIscURBQXFEO1lBQ3JELEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqRSxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLENB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QUFHLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUNoRDtRQUNBLE1BQU0sR0FBRyxVQUFVLENBQUM7S0FDckI7U0FBTSxJQUNMLE1BQU0sQ0FBQyxhQUFhLElBQUksQ0FBQztRQUN6QixDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQ2hEO1FBQ0EsTUFBTSxHQUFHLFVBQVUsQ0FBQztLQUNyQjtTQUFNLElBQUksTUFBTSxDQUFDLGFBQWEsSUFBSSxDQUFDLEVBQUU7UUFDcEMsTUFBTSxHQUFHLFVBQVUsQ0FBQztLQUNyQjtJQUNELEVBQUUsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDdkMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xyXG5pbXBvcnQgeyBOUyB9IGZyb20gJ0Bucyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbihuczogTlMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAvLyBHbG9iYWxzXHJcbiAgY29uc3QgcmFtID0gODtcclxuICBjb25zdCBudW1PZlNlcnZlcnMgPSBucy5nZXRQdXJjaGFzZWRTZXJ2ZXJMaW1pdCgpO1xyXG4gIGNvbnN0IGhvc3ROYW1lUHJlZml4ID0gJ3BzZXJ2LSc7XHJcbiAgY29uc3QgYnV5ID0gdHJ1ZTsgLy8gQ2hlY2sgcHJpY2VzIG9yIHNpbXVsYXRlIHRoZSBwdXJjaGFzZSBiZWZvcmUgeW91IGFjdHVhbGx5IGJ1eVxyXG5cclxuICAvLyBWYXJpYWJsZXNcclxuICBsZXQgc2VydmVyTmFtZTtcclxuICBjb25zdCBzZXJ2ZXJzQ29zdCA9IG5zLmdldFB1cmNoYXNlZFNlcnZlckNvc3QocmFtKSAqIG51bU9mU2VydmVyczsgLy8gQ29tbWVudCBvdXQgKiBudW1PZlNlcnZlcnMgaWYgbmVlZGVkXHJcbiAgY29uc3QgdG90YWxDb3N0ID0gc2VydmVyc0Nvc3QgKiBudW1PZlNlcnZlcnM7XHJcblxyXG4gIC8vIFF1aWNrIHRvdGFsIHB1cmNoYXNlIGNvc3QgZHJ5IGNhbGN1bGF0aW9uXHJcbiAgbnMudHByaW50KCdUb3RhbCBDb3N0IGlzICcgKyBucy5uRm9ybWF0KHRvdGFsQ29zdCwgJyQwLjAwMGEnICsgJy4nKSk7XHJcblxyXG4gIC8vIE1haW4gU2NyaXB0XHJcbiAgLy8gVG9nZ2xlIGJ1eSBmbGFnIGluIEdsb2JhbHMgdG8gZW5hYmxlIGFjdHVhbCBwdXJjaGFzZVxyXG4gIGlmIChidXkpIHtcclxuICAgIC8vIFlvdSBoYXZlIHRvIGtpbGwgYWxsIHNjcmlwdHMgb24gc2VydmVycyBiZWZvcmUgeW91IGNhbiBkZWxldGUgb3IgYnV5IG5ldyBvbmVzXHJcblxyXG4gICAgLy8gRm9yIGJ1eWluZyBhIFNlcnZlciBGYXJtIHVuY29tbWVudCB0aGlzIGJlbG93IGFuZCBzZXQgdGhlIHByb3BlciBudW1iZXIgb2Ygc2VydmVycyB0byBwdXJjaGFzZSBpbiB0aGUgaGVhZGVyLlxyXG4gICAgLy8gVGhpcyB3aWxsIGJ1eSBhIGdyb3VwIG9mIHNlcnZlcnMgd2l0aCBhIGNvbW1vbiBuYW1lIGFuZCBudW1iZXIsIHdoaWNoIG1ha2VzIGl0IGVhc2llciB0byBtYW5hZ2UgYW5kIGF1dG9tYXRlLlxyXG4gICAgLy9cclxuICAgIGxldCBpID0gMjE7XHJcbiAgICB3aGlsZSAoaSA8IG51bU9mU2VydmVycykge1xyXG4gICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGVub3VnaCBtb25leSB0byBwdXJjaGFzZSBhIHNlcnZlclxyXG4gICAgICBucy5jbGVhckxvZygpO1xyXG4gICAgICBucy5wcmludChgSU5GTyBQdXJjaGFzZSBMaW1pdDogJHtucy5nZXRQdXJjaGFzZWRTZXJ2ZXJMaW1pdCgpfWApO1xyXG4gICAgICBucy5wcmludChgSU5GTyBQdXJjaGFzZSBDb3N0OiAke25zLmdldFB1cmNoYXNlZFNlcnZlckNvc3QocmFtKX1gKTtcclxuICAgICAgbnMucHJpbnQoXHJcbiAgICAgICAgYElORk8gVG90YWwgUHVyY2hhc2VkIFNlcnZlcnM6ICR7bnMuZ2V0UHVyY2hhc2VkU2VydmVycygpLmxlbmd0aH1gXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAobnMuZ2V0U2VydmVyTW9uZXlBdmFpbGFibGUoJ2hvbWUnKSA+IG5zLmdldFB1cmNoYXNlZFNlcnZlckNvc3QocmFtKSkge1xyXG4gICAgICAgIHNlcnZlck5hbWUgPSBob3N0TmFtZVByZWZpeCArIGkudG9TdHJpbmcoKTtcclxuICAgICAgICBucy50cHJpbnQoJ0J1eWluZyAnICsgc2VydmVyTmFtZSk7XHJcblxyXG4gICAgICAgIC8vIG5zLmtpbGxhbGwoc2VydmVyTmFtZSk7XHJcbiAgICAgICAgLy8gbnMuZGVsZXRlU2VydmVyKHNlcnZlck5hbWUpO1xyXG4gICAgICAgIG5zLnB1cmNoYXNlU2VydmVyKHNlcnZlck5hbWUsIHJhbSk7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IFtcclxuICAgICAgICAgICcvc2NyaXB0cy9lYXJseS9oYWNrLmpzJyxcclxuICAgICAgICAgICcvc2NyaXB0cy9lYXJseS9kZXBsb3lzY3JpcHRzLmpzJyxcclxuICAgICAgICAgICcvc2NyaXB0cy9ncm93LmpzJyxcclxuICAgICAgICAgICcvc2NyaXB0cy9zdXBlcmdyb3cuanMnLFxyXG4gICAgICAgICAgJ3NjcmlwdHMvc2VydmVySW5mby50cycsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBucy5zY3Aoc2NyaXB0cywgc2VydmVyTmFtZSk7XHJcbiAgICAgICAgY29uc3QgcmFtQXZhaWxhYmxlID1cclxuICAgICAgICAgIG5zLmdldFNlcnZlck1heFJhbShzZXJ2ZXJOYW1lKSAtIG5zLmdldFNlcnZlclVzZWRSYW0oc2VydmVyTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9ICcvc2NyaXB0cy9lYXJseS9oYWNrLmpzJztcclxuICAgICAgICBjb25zdCByYW1QZXJUaHJlYWQgPSBucy5nZXRTY3JpcHRSYW0oc2NyaXB0KTtcclxuICAgICAgICBjb25zdCB0aHJlYWRzID0gTWF0aC5mbG9vcihyYW1BdmFpbGFibGUgLyByYW1QZXJUaHJlYWQpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9ncmFtc0NvdW50ID0gYXdhaXQgZ2V0UHJvZ3JhbXNBbmRJbnN0YWxsKGZhbHNlLCBucyk7XHJcbiAgICAgICAgY29uc3QgbXlJbmZvID0ge1xyXG4gICAgICAgICAgbGV2ZWw6IG5zLmdldEhhY2tpbmdMZXZlbCgpLFxyXG4gICAgICAgICAgcG9ydHNVbmxvY2tlZDogcHJvZ3JhbXNDb3VudCxcclxuICAgICAgICAgIG1vbmV5QXZhaWxhYmxlOiBhd2FpdCBucy5nZXRTZXJ2ZXJNb25leUF2YWlsYWJsZSgnaG9tZScpLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VydmVyID0gYXdhaXQgZ2V0VGFyZ2V0U2VydmVyKG15SW5mbywgbnMpO1xyXG4gICAgICAgIG5zLmV4ZWMoc2NyaXB0LCBzZXJ2ZXJOYW1lLCB0aHJlYWRzLCB0YXJnZXRTZXJ2ZXIpO1xyXG5cclxuICAgICAgICArK2k7XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgbnMuc2xlZXAoMTAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZ3JhbXNBbmRJbnN0YWxsKGluc3RhbGxDaGVjazogYW55LCBuczogTlMpIHtcclxuICBpZiAoIWluc3RhbGxDaGVjaykge1xyXG4gICAgbGV0IGNvdW50ID0gMTsgLy9CcnV0ZVNTSC5leGUgaXMgYWx3YXlzIGluc3RhbGxlZCBkdWUgdG8gdGhlIGF1Z21lbnRhdGlvblxyXG4gICAgaWYgKG5zLmZpbGVFeGlzdHMoJ0ZUUENyYWNrLmV4ZScsICdob21lJykpIGNvdW50Kys7XHJcbiAgICBpZiAobnMuZmlsZUV4aXN0cygncmVsYXlTTVRQLmV4ZScsICdob21lJykpIGNvdW50Kys7XHJcbiAgICBpZiAobnMuZmlsZUV4aXN0cygnSFRUUFdvcm0uZXhlJywgJ2hvbWUnKSkgY291bnQrKztcclxuICAgIGlmIChucy5maWxlRXhpc3RzKCdTUUxJbmplY3QuZXhlJywgJ2hvbWUnKSkgY291bnQrKztcclxuXHJcbiAgICByZXR1cm4gY291bnQ7XHJcbiAgfVxyXG4gIGlmIChucy5maWxlRXhpc3RzKCdCcnV0ZVNTSC5leGUnLCAnaG9tZScpKSBucy5icnV0ZXNzaChpbnN0YWxsQ2hlY2spO1xyXG4gIGlmIChucy5maWxlRXhpc3RzKCdGVFBDcmFjay5leGUnLCAnaG9tZScpKSBucy5mdHBjcmFjayhpbnN0YWxsQ2hlY2spO1xyXG4gIGlmIChucy5maWxlRXhpc3RzKCdyZWxheVNNVFAuZXhlJywgJ2hvbWUnKSkgbnMucmVsYXlzbXRwKGluc3RhbGxDaGVjayk7XHJcbiAgaWYgKG5zLmZpbGVFeGlzdHMoJ0hUVFBXb3JtLmV4ZScsICdob21lJykpIG5zLmh0dHB3b3JtKGluc3RhbGxDaGVjayk7XHJcbiAgaWYgKG5zLmZpbGVFeGlzdHMoJ1NRTEluamVjdC5leGUnLCAnaG9tZScpKSBucy5zcWxpbmplY3QoaW5zdGFsbENoZWNrKTtcclxuXHJcbiAgcmV0dXJuO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYXJnZXRTZXJ2ZXIobXlJbmZvOiBhbnksIG5zOiBOUykge1xyXG4gIGxldCB0YXJnZXQgPSAnZm9vZG5zdHVmZic7XHJcbiAgaWYgKG15SW5mby5sZXZlbCA8IDQwKSB7XHJcbiAgICByZXR1cm4gJ2Zvb2Ruc3R1ZmYnO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICAobXlJbmZvLmxldmVsID4gNDAgJiYgbXlJbmZvLmxldmVsIDwgMTAwKSB8fFxyXG4gICAgbXlJbmZvLnBvcnRzVW5sb2NrZWQgPT0gMVxyXG4gICkge1xyXG4gICAgdGFyZ2V0ID0gJ2hhcmFraXJpLXN1c2hpJztcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgbXlJbmZvLnBvcnRzVW5sb2NrZWQgPT0gMiB8fFxyXG4gICAgKG15SW5mby5wb3J0c1VubG9ja2VkID4gMiAmJiBteUluZm8ubGV2ZWwgPCA1MDApXHJcbiAgKSB7XHJcbiAgICBpZiAobXlJbmZvLmxldmVsIDwgMjkyKSB0YXJnZXQgPSAncGhhbnRhc3knO1xyXG4gICAgZWxzZSB0YXJnZXQgPSAncGhhbnRhc3knO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBteUluZm8ucG9ydHNVbmxvY2tlZCA9PSAzIHx8XHJcbiAgICAobXlJbmZvLnBvcnRzVW5sb2NrZWQgPiAzICYmIG15SW5mby5sZXZlbCA8IDgwMClcclxuICApIHtcclxuICAgIHRhcmdldCA9ICdwaGFudGFzeSc7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIG15SW5mby5wb3J0c1VubG9ja2VkID09IDQgfHxcclxuICAgIChteUluZm8ucG9ydHNVbmxvY2tlZCA+IDQgJiYgbXlJbmZvLmxldmVsIDwgOTAwKVxyXG4gICkge1xyXG4gICAgdGFyZ2V0ID0gJ3BoYW50YXN5JztcclxuICB9IGVsc2UgaWYgKG15SW5mby5wb3J0c1VubG9ja2VkID09IDUpIHtcclxuICAgIHRhcmdldCA9ICdwaGFudGFzeSc7XHJcbiAgfVxyXG4gIG5zLnRwcmludCgnVGFyZ2V0IFNlcnZlciA6ICcgKyB0YXJnZXQpO1xyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuIl19