export async function main(ns) {
    let deployServers = [];
    const serverFarm = [];
    let serverName;
    const hostNamePrefix = 'pserv-'; // Prefix farm server with this name
    const numOfServers = 25; // Server total in farm
    const knownServers = [
        'n00dles',
        'foodnstuff',
        'nectar-net',
        'joesguns',
        'harakiri-sushi',
        'hong-fang-tea',
        'iron-gym',
        'neo-net',
        'zer0',
        'phantasy',
        'max-hardware',
        'omega-net',
        'netlink',
        'crush-fitness',
        'silver-helix',
        'the-hub',
        'rothman-uni',
        'syscore',
        'johnson-ortho',
        'sigma-cosmetics',
        'computek',
        'I.I.I.I',
        'aevum-police',
        'summit-uni',
        'rho-construction',
        '.',
        'alpha-ent',
        'syscore',
        'zb-institute',
        'lexo-corp',
        'catalyst',
        'millenium-fitness',
    ];
    //let dedicatedServers = ['johnson-ortho-HACK', 'crush-fitness-HACK', 'foodnstuff-HACK', 'sigma-cosmetics-HACK',
    //	'joesguns-HACK'];
    // const scripts = ['/scripts/crack.js', '/scripts/hack.js', '/scripts/grow.js', '/scripts/supergrow.js',
    //   '/scripts/crack.js', '/scripts/deployscripts.js', '/scripts/hacknow.js', '/scripts/crackall.js',
    //   '/scripts/share.js'];
    const scripts = [
        '/scripts/early/hack.js',
        '/scripts/early/deployscripts.js',
        '/scripts/grow.js',
        '/scripts/supergrow.js',
        'scripts/serverInfo.ts',
    ];
    const disablePrivateServers = ns.args[0]; // Set to true to disable private servers
    if (disablePrivateServers) {
        for (let index = 1; index <= numOfServers; index++) {
            serverName = hostNamePrefix + index.toString();
            serverFarm.push(serverName);
        }
        deployServers = deployServers.concat(knownServers, serverFarm);
    }
    // ns.tprint(deployServers[1]);
    // Wait until we acquire the "BruteSSH.exe" program
    // while (!ns.fileExists('BruteSSH.exe')) {
    //   await ns.sleep(60000);
    // }
    for (const server of deployServers) {
        await ns.scp(scripts, server);
        // ns.brutessh(server);
        // ns.nuke(server);
        ns.tprint('Scripts deployed to ' + server);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95U2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY3JpcHRzL2Vhcmx5L2RlcGxveVNjcmlwdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsRUFBTTtJQUMvQixJQUFJLGFBQWEsR0FBUSxFQUFFLENBQUM7SUFDNUIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQUksVUFBVSxDQUFDO0lBQ2YsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLENBQUMsb0NBQW9DO0lBQ3JFLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QjtJQUVoRCxNQUFNLFlBQVksR0FBRztRQUNuQixTQUFTO1FBQ1QsWUFBWTtRQUNaLFlBQVk7UUFDWixVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixVQUFVO1FBQ1YsU0FBUztRQUNULE1BQU07UUFDTixVQUFVO1FBQ1YsY0FBYztRQUNkLFdBQVc7UUFDWCxTQUFTO1FBQ1QsZUFBZTtRQUNmLGNBQWM7UUFDZCxTQUFTO1FBQ1QsYUFBYTtRQUNiLFNBQVM7UUFDVCxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixTQUFTO1FBQ1QsY0FBYztRQUNkLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsR0FBRztRQUNILFdBQVc7UUFDWCxTQUFTO1FBQ1QsY0FBYztRQUNkLFdBQVc7UUFDWCxVQUFVO1FBQ1YsbUJBQW1CO0tBQ3BCLENBQUM7SUFFRixnSEFBZ0g7SUFDaEgsb0JBQW9CO0lBRXBCLHlHQUF5RztJQUN6RyxxR0FBcUc7SUFDckcsMEJBQTBCO0lBRTFCLE1BQU0sT0FBTyxHQUFHO1FBQ2Qsd0JBQXdCO1FBQ3hCLGlDQUFpQztRQUNqQyxrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtLQUN4QixDQUFDO0lBRUYsTUFBTSxxQkFBcUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMseUNBQXlDO0lBQ25GLElBQUkscUJBQXFCLEVBQUU7UUFDekIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNsRCxVQUFVLEdBQUcsY0FBYyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdCO1FBRUQsYUFBYSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ2hFO0lBRUQsK0JBQStCO0lBRS9CLG1EQUFtRDtJQUNuRCwyQ0FBMkM7SUFDM0MsMkJBQTJCO0lBQzNCLElBQUk7SUFFSixLQUFLLE1BQU0sTUFBTSxJQUFJLGFBQWEsRUFBRTtRQUNsQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQztLQUM1QztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnN0YW50LWNvbmRpdGlvbiAqL1xyXG5pbXBvcnQgeyBOUyB9IGZyb20gJ0Bucyc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbihuczogTlMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBsZXQgZGVwbG95U2VydmVyczogYW55ID0gW107XHJcbiAgY29uc3Qgc2VydmVyRmFybSA9IFtdO1xyXG4gIGxldCBzZXJ2ZXJOYW1lO1xyXG4gIGNvbnN0IGhvc3ROYW1lUHJlZml4ID0gJ3BzZXJ2LSc7IC8vIFByZWZpeCBmYXJtIHNlcnZlciB3aXRoIHRoaXMgbmFtZVxyXG4gIGNvbnN0IG51bU9mU2VydmVycyA9IDI1OyAvLyBTZXJ2ZXIgdG90YWwgaW4gZmFybVxyXG5cclxuICBjb25zdCBrbm93blNlcnZlcnMgPSBbXHJcbiAgICAnbjAwZGxlcycsXHJcbiAgICAnZm9vZG5zdHVmZicsXHJcbiAgICAnbmVjdGFyLW5ldCcsXHJcbiAgICAnam9lc2d1bnMnLFxyXG4gICAgJ2hhcmFraXJpLXN1c2hpJyxcclxuICAgICdob25nLWZhbmctdGVhJyxcclxuICAgICdpcm9uLWd5bScsXHJcbiAgICAnbmVvLW5ldCcsXHJcbiAgICAnemVyMCcsXHJcbiAgICAncGhhbnRhc3knLFxyXG4gICAgJ21heC1oYXJkd2FyZScsXHJcbiAgICAnb21lZ2EtbmV0JyxcclxuICAgICduZXRsaW5rJyxcclxuICAgICdjcnVzaC1maXRuZXNzJyxcclxuICAgICdzaWx2ZXItaGVsaXgnLFxyXG4gICAgJ3RoZS1odWInLFxyXG4gICAgJ3JvdGhtYW4tdW5pJyxcclxuICAgICdzeXNjb3JlJyxcclxuICAgICdqb2huc29uLW9ydGhvJyxcclxuICAgICdzaWdtYS1jb3NtZXRpY3MnLFxyXG4gICAgJ2NvbXB1dGVrJyxcclxuICAgICdJLkkuSS5JJyxcclxuICAgICdhZXZ1bS1wb2xpY2UnLFxyXG4gICAgJ3N1bW1pdC11bmknLFxyXG4gICAgJ3Joby1jb25zdHJ1Y3Rpb24nLFxyXG4gICAgJy4nLFxyXG4gICAgJ2FscGhhLWVudCcsXHJcbiAgICAnc3lzY29yZScsXHJcbiAgICAnemItaW5zdGl0dXRlJyxcclxuICAgICdsZXhvLWNvcnAnLFxyXG4gICAgJ2NhdGFseXN0JyxcclxuICAgICdtaWxsZW5pdW0tZml0bmVzcycsXHJcbiAgXTtcclxuXHJcbiAgLy9sZXQgZGVkaWNhdGVkU2VydmVycyA9IFsnam9obnNvbi1vcnRoby1IQUNLJywgJ2NydXNoLWZpdG5lc3MtSEFDSycsICdmb29kbnN0dWZmLUhBQ0snLCAnc2lnbWEtY29zbWV0aWNzLUhBQ0snLFxyXG4gIC8vXHQnam9lc2d1bnMtSEFDSyddO1xyXG5cclxuICAvLyBjb25zdCBzY3JpcHRzID0gWycvc2NyaXB0cy9jcmFjay5qcycsICcvc2NyaXB0cy9oYWNrLmpzJywgJy9zY3JpcHRzL2dyb3cuanMnLCAnL3NjcmlwdHMvc3VwZXJncm93LmpzJyxcclxuICAvLyAgICcvc2NyaXB0cy9jcmFjay5qcycsICcvc2NyaXB0cy9kZXBsb3lzY3JpcHRzLmpzJywgJy9zY3JpcHRzL2hhY2tub3cuanMnLCAnL3NjcmlwdHMvY3JhY2thbGwuanMnLFxyXG4gIC8vICAgJy9zY3JpcHRzL3NoYXJlLmpzJ107XHJcblxyXG4gIGNvbnN0IHNjcmlwdHMgPSBbXHJcbiAgICAnL3NjcmlwdHMvZWFybHkvaGFjay5qcycsXHJcbiAgICAnL3NjcmlwdHMvZWFybHkvZGVwbG95c2NyaXB0cy5qcycsXHJcbiAgICAnL3NjcmlwdHMvZ3Jvdy5qcycsXHJcbiAgICAnL3NjcmlwdHMvc3VwZXJncm93LmpzJyxcclxuICAgICdzY3JpcHRzL3NlcnZlckluZm8udHMnLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGRpc2FibGVQcml2YXRlU2VydmVycyA9IG5zLmFyZ3NbMF07IC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgcHJpdmF0ZSBzZXJ2ZXJzXHJcbiAgaWYgKGRpc2FibGVQcml2YXRlU2VydmVycykge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSBudW1PZlNlcnZlcnM7IGluZGV4KyspIHtcclxuICAgICAgc2VydmVyTmFtZSA9IGhvc3ROYW1lUHJlZml4ICsgaW5kZXgudG9TdHJpbmcoKTtcclxuICAgICAgc2VydmVyRmFybS5wdXNoKHNlcnZlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlcGxveVNlcnZlcnMgPSBkZXBsb3lTZXJ2ZXJzLmNvbmNhdChrbm93blNlcnZlcnMsIHNlcnZlckZhcm0pO1xyXG4gIH1cclxuXHJcbiAgLy8gbnMudHByaW50KGRlcGxveVNlcnZlcnNbMV0pO1xyXG5cclxuICAvLyBXYWl0IHVudGlsIHdlIGFjcXVpcmUgdGhlIFwiQnJ1dGVTU0guZXhlXCIgcHJvZ3JhbVxyXG4gIC8vIHdoaWxlICghbnMuZmlsZUV4aXN0cygnQnJ1dGVTU0guZXhlJykpIHtcclxuICAvLyAgIGF3YWl0IG5zLnNsZWVwKDYwMDAwKTtcclxuICAvLyB9XHJcblxyXG4gIGZvciAoY29uc3Qgc2VydmVyIG9mIGRlcGxveVNlcnZlcnMpIHtcclxuICAgIGF3YWl0IG5zLnNjcChzY3JpcHRzLCBzZXJ2ZXIpO1xyXG4gICAgLy8gbnMuYnJ1dGVzc2goc2VydmVyKTtcclxuICAgIC8vIG5zLm51a2Uoc2VydmVyKTtcclxuICAgIG5zLnRwcmludCgnU2NyaXB0cyBkZXBsb3llZCB0byAnICsgc2VydmVyKTtcclxuICB9XHJcbn1cclxuIl19