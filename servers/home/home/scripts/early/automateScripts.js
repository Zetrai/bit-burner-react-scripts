export async function main(ns) {
    // Globals
    let servers = [
        'n00dles',
        'foodnstuff',
        'joesguns',
        'harakiri-sushi',
        'hong-fang-tea',
        'iron-gym',
        'neo-net',
        'zer0',
        'phantasy',
        'max-hardware',
        'omega-net',
        'silver-helix',
        'the-hub',
        'rothman-uni',
        'sigma-cosmetics',
        'aevum-police',
        'summit-uni',
        'rho-construction',
        '.',
        'alpha-ent',
        'zb-institute',
        'lexo-corp',
        'catalyst',
        'millenium-fitness',
    ];
    // const targets = ['rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction',
    // 	'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction',
    // 	'rho-construction', 'aevum-police', 'summit-uni', 'rho-construction', 'alpha-ent', 'alpha-ent',
    // 	'zb-institute', 'lexo-corp', 'catalyst', 'millenium-fitness'];
    const disablePrivateServers = ns.args[0]; // Set to true to disable private servers
    if (disablePrivateServers) {
        const hostNamePrefix = 'pserv-'; // Prefix farm server with this name
        const numOfServers = 25; // Server total in farm
        const serverFarm = [];
        let serverName;
        for (let index = 1; index <= numOfServers; index++) {
            serverName = hostNamePrefix + index.toString();
            serverFarm.push(serverName);
        }
        servers = servers.concat(serverFarm);
    }
    //getTargetServer
    const programsCount = await getProgramsAndInstall(false, ns);
    const myInfo = {
        level: ns.getHackingLevel(),
        portsUnlocked: programsCount,
        moneyAvailable: await ns.getServerMoneyAvailable('home'),
    };
    ns.tprint('My Info: ', myInfo);
    const targetServer = await getTargetServer(myInfo, ns);
    await getProgramsAndInstall(targetServer, ns);
    await ns.nuke(targetServer);
    const script = '/scripts/early/hack.js';
    //const script = '/scripts/share.js';
    // Variables
    let totalRAMavailable = 0;
    let serverRAM = 0;
    // Calculate total RAM available on all servers
    for (let index = 0; index < servers.length; index++) {
        ns.killall(servers[index]);
        serverRAM = ns.getServerMaxRam(servers[index]);
        totalRAMavailable += serverRAM;
        // ns.tprint("Server RAM available = " + serverRAM);
    }
    for (let index = 0; index < servers.length; index++) {
        const ramAvailable = ns.getServerMaxRam(servers[index]) - ns.getServerUsedRam(servers[index]);
        const ramPerThread = ns.getScriptRam(script);
        const threads = Math.floor(ramAvailable / ramPerThread);
        ns.tprint('ramAvailable: ', ramAvailable);
        ns.tprint('ramPerThread: ', ramPerThread);
        ns.tprint('threads: ', threads);
        ns.tprint(threads + ' threads can be runned on ' + servers[index] + '.');
        if (threads > 0) {
            ns.tprint('Starting ' +
                script +
                ' on ' +
                targetServer +
                ' with ' +
                servers[index] +
                '.');
            ns.exec(script, servers[index], threads, targetServer);
        }
        else {
            ns.tprint('NOT ENOUGH MEMORY ON ' + servers[index] + '.');
        }
    }
    ns.tprint('Total RAM available = ' + totalRAMavailable);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b21hdGVTY3JpcHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjcmlwdHMvZWFybHkvYXV0b21hdGVTY3JpcHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEVBQU07SUFDL0IsVUFBVTtJQUNWLElBQUksT0FBTyxHQUFHO1FBQ1osU0FBUztRQUNULFlBQVk7UUFDWixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixVQUFVO1FBQ1YsU0FBUztRQUNULE1BQU07UUFDTixVQUFVO1FBQ1YsY0FBYztRQUNkLFdBQVc7UUFDWCxjQUFjO1FBQ2QsU0FBUztRQUNULGFBQWE7UUFDYixpQkFBaUI7UUFDakIsY0FBYztRQUNkLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsR0FBRztRQUNILFdBQVc7UUFDWCxjQUFjO1FBQ2QsV0FBVztRQUNYLFVBQVU7UUFDVixtQkFBbUI7S0FDcEIsQ0FBQztJQUVGLCtKQUErSjtJQUMvSiwrSUFBK0k7SUFDL0ksbUdBQW1HO0lBQ25HLGtFQUFrRTtJQUVsRSxNQUFNLHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7SUFDbkYsSUFBSSxxQkFBcUIsRUFBRTtRQUN6QixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsQ0FBQyxvQ0FBb0M7UUFDckUsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsdUJBQXVCO1FBQ2hELE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLFVBQVUsQ0FBQztRQUVmLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDbEQsVUFBVSxHQUFHLGNBQWMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0MsVUFBVSxDQUFDLElBQUksQ0FB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QUcsVUFBVSxDQUFDO0tBQ3JCO0lBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN2QyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc3RhbnQtY29uZGl0aW9uICovXHJcbmltcG9ydCB7IE5TIH0gZnJvbSAnQG5zJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG5zOiBOUyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIC8vIEdsb2JhbHNcclxuICBsZXQgc2VydmVycyA9IFtcclxuICAgICduMDBkbGVzJyxcclxuICAgICdmb29kbnN0dWZmJyxcclxuICAgICdqb2VzZ3VucycsXHJcbiAgICAnaGFyYWtpcmktc3VzaGknLFxyXG4gICAgJ2hvbmctZmFuZy10ZWEnLFxyXG4gICAgJ2lyb24tZ3ltJyxcclxuICAgICduZW8tbmV0JyxcclxuICAgICd6ZXIwJyxcclxuICAgICdwaGFudGFzeScsXHJcbiAgICAnbWF4LWhhcmR3YXJlJyxcclxuICAgICdvbWVnYS1uZXQnLFxyXG4gICAgJ3NpbHZlci1oZWxpeCcsXHJcbiAgICAndGhlLWh1YicsXHJcbiAgICAncm90aG1hbi11bmknLFxyXG4gICAgJ3NpZ21hLWNvc21ldGljcycsXHJcbiAgICAnYWV2dW0tcG9saWNlJyxcclxuICAgICdzdW1taXQtdW5pJyxcclxuICAgICdyaG8tY29uc3RydWN0aW9uJyxcclxuICAgICcuJyxcclxuICAgICdhbHBoYS1lbnQnLFxyXG4gICAgJ3piLWluc3RpdHV0ZScsXHJcbiAgICAnbGV4by1jb3JwJyxcclxuICAgICdjYXRhbHlzdCcsXHJcbiAgICAnbWlsbGVuaXVtLWZpdG5lc3MnLFxyXG4gIF07XHJcblxyXG4gIC8vIGNvbnN0IHRhcmdldHMgPSBbJ3Joby1jb25zdHJ1Y3Rpb24nLCAncmhvLWNvbnN0cnVjdGlvbicsICdyaG8tY29uc3RydWN0aW9uJywgJ3Joby1jb25zdHJ1Y3Rpb24nLCAncmhvLWNvbnN0cnVjdGlvbicsICdyaG8tY29uc3RydWN0aW9uJywgJ3Joby1jb25zdHJ1Y3Rpb24nLFxyXG4gIC8vIFx0J3Joby1jb25zdHJ1Y3Rpb24nLCAncmhvLWNvbnN0cnVjdGlvbicsICdyaG8tY29uc3RydWN0aW9uJywgJ3Joby1jb25zdHJ1Y3Rpb24nLCAncmhvLWNvbnN0cnVjdGlvbicsICdyaG8tY29uc3RydWN0aW9uJywgJ3Joby1jb25zdHJ1Y3Rpb24nLFxyXG4gIC8vIFx0J3Joby1jb25zdHJ1Y3Rpb24nLCAnYWV2dW0tcG9saWNlJywgJ3N1bW1pdC11bmknLCAncmhvLWNvbnN0cnVjdGlvbicsICdhbHBoYS1lbnQnLCAnYWxwaGEtZW50JyxcclxuICAvLyBcdCd6Yi1pbnN0aXR1dGUnLCAnbGV4by1jb3JwJywgJ2NhdGFseXN0JywgJ21pbGxlbml1bS1maXRuZXNzJ107XHJcblxyXG4gIGNvbnN0IGRpc2FibGVQcml2YXRlU2VydmVycyA9IG5zLmFyZ3NbMF07IC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgcHJpdmF0ZSBzZXJ2ZXJzXHJcbiAgaWYgKGRpc2FibGVQcml2YXRlU2VydmVycykge1xyXG4gICAgY29uc3QgaG9zdE5hbWVQcmVmaXggPSAncHNlcnYtJzsgLy8gUHJlZml4IGZhcm0gc2VydmVyIHdpdGggdGhpcyBuYW1lXHJcbiAgICBjb25zdCBudW1PZlNlcnZlcnMgPSAyNTsgLy8gU2VydmVyIHRvdGFsIGluIGZhcm1cclxuICAgIGNvbnN0IHNlcnZlckZhcm0gPSBbXTtcclxuICAgIGxldCBzZXJ2ZXJOYW1lO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPD0gbnVtT2ZTZXJ2ZXJzOyBpbmRleCsrKSB7XHJcbiAgICAgIHNlcnZlck5hbWUgPSBob3N0TmFtZVByZWZpeCArIGluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgIHNlcnZlckZhcm0ucHVzaChzZXJ2ZXJOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXJ2ZXJzID0gc2VydmVycy5jb25jYXQoc2VydmVyRmFybSk7XHJcbiAgfVxyXG5cclxuICAvL2dldFRhcmdldFNlcnZlclxyXG4gIGNvbnN0IHByb2dyYW1zQ291bnQgPSBhd2FpdCBnZXRQcm9ncmFtc0FuZEluc3RhbGwoZmFsc2UsIG5zKTtcclxuICBjb25zdCBteUluZm8gPSB7XHJcbiAgICBsZXZlbDogbnMuZ2V0SGFja2luZ0xldmVsKCksXHJcbiAgICBwb3J0c1VubG9ja2VkOiBwcm9ncmFtc0NvdW50LFxyXG4gICAgbW9uZXlBdmFpbGFibGU6IGF3YWl0IG5zLmdldFNlcnZlck1vbmV5QXZhaWxhYmxlKCdob21lJyksXHJcbiAgfTtcclxuICBucy50cHJpbnQoJ015IEluZm86ICcsIG15SW5mbyk7XHJcbiAgY29uc3QgdGFyZ2V0U2VydmVyID0gYXdhaXQgZ2V0VGFyZ2V0U2VydmVyKG15SW5mbywgbnMpO1xyXG4gIGF3YWl0IGdldFByb2dyYW1zQW5kSW5zdGFsbCh0YXJnZXRTZXJ2ZXIsIG5zKTtcclxuICBhd2FpdCBucy5udWtlKHRhcmdldFNlcnZlcik7XHJcblxyXG4gIGNvbnN0IHNjcmlwdCA9ICcvc2NyaXB0cy9lYXJseS9oYWNrLmpzJztcclxuICAvL2NvbnN0IHNjcmlwdCA9ICcvc2NyaXB0cy9zaGFyZS5qcyc7XHJcblxyXG4gIC8vIFZhcmlhYmxlc1xyXG4gIGxldCB0b3RhbFJBTWF2YWlsYWJsZSA9IDA7XHJcbiAgbGV0IHNlcnZlclJBTSA9IDA7XHJcblxyXG4gIC8vIENhbGN1bGF0ZSB0b3RhbCBSQU0gYXZhaWxhYmxlIG9uIGFsbCBzZXJ2ZXJzXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlcnZlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBucy5raWxsYWxsKHNlcnZlcnNbaW5kZXhdKTtcclxuICAgIHNlcnZlclJBTSA9IG5zLmdldFNlcnZlck1heFJhbShzZXJ2ZXJzW2luZGV4XSk7XHJcbiAgICB0b3RhbFJBTWF2YWlsYWJsZSArPSBzZXJ2ZXJSQU07XHJcblxyXG4gICAgLy8gbnMudHByaW50KFwiU2VydmVyIFJBTSBhdmFpbGFibGUgPSBcIiArIHNlcnZlclJBTSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2VydmVycy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNvbnN0IHJhbUF2YWlsYWJsZSA9XHJcbiAgICAgIG5zLmdldFNlcnZlck1heFJhbShzZXJ2ZXJzW2luZGV4XSkgLSBucy5nZXRTZXJ2ZXJVc2VkUmFtKHNlcnZlcnNbaW5kZXhdKTtcclxuICAgIGNvbnN0IHJhbVBlclRocmVhZCA9IG5zLmdldFNjcmlwdFJhbShzY3JpcHQpO1xyXG4gICAgY29uc3QgdGhyZWFkcyA9IE1hdGguZmxvb3IocmFtQXZhaWxhYmxlIC8gcmFtUGVyVGhyZWFkKTtcclxuICAgIG5zLnRwcmludCgncmFtQXZhaWxhYmxlOiAnLCByYW1BdmFpbGFibGUpO1xyXG4gICAgbnMudHByaW50KCdyYW1QZXJUaHJlYWQ6ICcsIHJhbVBlclRocmVhZCk7XHJcbiAgICBucy50cHJpbnQoJ3RocmVhZHM6ICcsIHRocmVhZHMpO1xyXG5cclxuICAgIG5zLnRwcmludCh0aHJlYWRzICsgJyB0aHJlYWRzIGNhbiBiZSBydW5uZWQgb24gJyArIHNlcnZlcnNbaW5kZXhdICsgJy4nKTtcclxuXHJcbiAgICBpZiAodGhyZWFkcyA+IDApIHtcclxuICAgICAgbnMudHByaW50KFxyXG4gICAgICAgICdTdGFydGluZyAnICtcclxuICAgICAgICAgIHNjcmlwdCArXHJcbiAgICAgICAgICAnIG9uICcgK1xyXG4gICAgICAgICAgdGFyZ2V0U2VydmVyICtcclxuICAgICAgICAgICcgd2l0aCAnICtcclxuICAgICAgICAgIHNlcnZlcnNbaW5kZXhdICtcclxuICAgICAgICAgICcuJ1xyXG4gICAgICApO1xyXG4gICAgICBucy5leGVjKHNjcmlwdCwgc2VydmVyc1tpbmRleF0sIHRocmVhZHMsIHRhcmdldFNlcnZlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBucy50cHJpbnQoJ05PVCBFTk9VR0ggTUVNT1JZIE9OICcgKyBzZXJ2ZXJzW2luZGV4XSArICcuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBucy50cHJpbnQoJ1RvdGFsIFJBTSBhdmFpbGFibGUgPSAnICsgdG90YWxSQU1hdmFpbGFibGUpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZ3JhbXNBbmRJbnN0YWxsKGluc3RhbGxDaGVjazogYW55LCBuczogTlMpIHtcclxuICBpZiAoIWluc3RhbGxDaGVjaykge1xyXG4gICAgbGV0IGNvdW50ID0gMTsgLy9CcnV0ZVNTSC5leGUgaXMgYWx3YXlzIGluc3RhbGxlZCBkdWUgdG8gdGhlIGF1Z21lbnRhdGlvblxyXG4gICAgaWYgKG5zLmZpbGVFeGlzdHMoJ0ZUUENyYWNrLmV4ZScsICdob21lJykpIGNvdW50Kys7XHJcbiAgICBpZiAobnMuZmlsZUV4aXN0cygncmVsYXlTTVRQLmV4ZScsICdob21lJykpIGNvdW50Kys7XHJcbiAgICBpZiAobnMuZmlsZUV4aXN0cygnSFRUUFdvcm0uZXhlJywgJ2hvbWUnKSkgY291bnQrKztcclxuICAgIGlmIChucy5maWxlRXhpc3RzKCdTUUxJbmplY3QuZXhlJywgJ2hvbWUnKSkgY291bnQrKztcclxuXHJcbiAgICByZXR1cm4gY291bnQ7XHJcbiAgfVxyXG4gIGlmIChucy5maWxlRXhpc3RzKCdCcnV0ZVNTSC5leGUnLCAnaG9tZScpKSBucy5icnV0ZXNzaChpbnN0YWxsQ2hlY2spO1xyXG4gIGlmIChucy5maWxlRXhpc3RzKCdGVFBDcmFjay5leGUnLCAnaG9tZScpKSBucy5mdHBjcmFjayhpbnN0YWxsQ2hlY2spO1xyXG4gIGlmIChucy5maWxlRXhpc3RzKCdyZWxheVNNVFAuZXhlJywgJ2hvbWUnKSkgbnMucmVsYXlzbXRwKGluc3RhbGxDaGVjayk7XHJcbiAgaWYgKG5zLmZpbGVFeGlzdHMoJ0hUVFBXb3JtLmV4ZScsICdob21lJykpIG5zLmh0dHB3b3JtKGluc3RhbGxDaGVjayk7XHJcbiAgaWYgKG5zLmZpbGVFeGlzdHMoJ1NRTEluamVjdC5leGUnLCAnaG9tZScpKSBucy5zcWxpbmplY3QoaW5zdGFsbENoZWNrKTtcclxuXHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGFyZ2V0U2VydmVyKG15SW5mbzogYW55LCBuczogTlMpIHtcclxuICBsZXQgdGFyZ2V0ID0gJ2Zvb2Ruc3R1ZmYnO1xyXG4gIGlmIChteUluZm8ubGV2ZWwgPCA0MCkge1xyXG4gICAgcmV0dXJuICdmb29kbnN0dWZmJztcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgKG15SW5mby5sZXZlbCA+IDQwICYmIG15SW5mby5sZXZlbCA8IDEwMCkgfHxcclxuICAgIG15SW5mby5wb3J0c1VubG9ja2VkID09IDFcclxuICApIHtcclxuICAgIHRhcmdldCA9ICdoYXJha2lyaS1zdXNoaSc7XHJcbiAgfSBlbHNlIGlmIChcclxuICAgIG15SW5mby5wb3J0c1VubG9ja2VkID09IDIgfHxcclxuICAgIChteUluZm8ucG9ydHNVbmxvY2tlZCA+IDIgJiYgbXlJbmZvLmxldmVsIDwgNTAwKVxyXG4gICkge1xyXG4gICAgaWYgKG15SW5mby5sZXZlbCA8IDI5MikgdGFyZ2V0ID0gJ3BoYW50YXN5JztcclxuICAgIGVsc2UgdGFyZ2V0ID0gJ3BoYW50YXN5JztcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgbXlJbmZvLnBvcnRzVW5sb2NrZWQgPT0gMyB8fFxyXG4gICAgKG15SW5mby5wb3J0c1VubG9ja2VkID4gMyAmJiBteUluZm8ubGV2ZWwgPCA4MDApXHJcbiAgKSB7XHJcbiAgICB0YXJnZXQgPSAncGhhbnRhc3knO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBteUluZm8ucG9ydHNVbmxvY2tlZCA9PSA0IHx8XHJcbiAgICAobXlJbmZvLnBvcnRzVW5sb2NrZWQgPiA0ICYmIG15SW5mby5sZXZlbCA8IDkwMClcclxuICApIHtcclxuICAgIHRhcmdldCA9ICdwaGFudGFzeSc7XHJcbiAgfSBlbHNlIGlmIChteUluZm8ucG9ydHNVbmxvY2tlZCA9PSA1KSB7XHJcbiAgICB0YXJnZXQgPSAncGhhbnRhc3knO1xyXG4gIH1cclxuICBucy50cHJpbnQoJ1RhcmdldCBTZXJ2ZXIgOiAnICsgdGFyZ2V0KTtcclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbiJdfQ==