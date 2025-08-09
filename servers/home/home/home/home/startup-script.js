// servers/home/home/home/startup-script.js
async function main(ns) {
  const servers0Port = [
    "sigma-cosmetics",
    "joesguns",
    "nectar-net",
    "hong-fang-tea",
    "harakiri-sushi"
  ];
  const servers1Port = [
    "neo-net",
    "zer0",
    "max-hardware",
    "iron-gym"
  ];
  while (!ns.fileExists("BruteSSH.exe")) {
    await ns.sleep(6e4);
  }
  for (let i = 0; i < servers1Port.length; ++i) {
    const serv = servers1Port[i];
    ns.scp("early-hack-template.js", serv);
    ns.brutessh(serv);
    ns.nuke(serv);
    ns.exec("early-hack-template.js", serv, 12);
  }
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2hvbWUvaG9tZS9zZXJ2ZXJzL2hvbWUvaG9tZS9zdGFydHVwLXNjcmlwdC5qcyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBQ0EsZUFBc0IsS0FBSyxJQUFJO0FBRzNCLFFBQU0sZUFBZTtJQUFDO0lBQ0Y7SUFDQTtJQUNBO0lBQ0E7RUFBZ0I7QUFJcEMsUUFBTSxlQUFlO0lBQUM7SUFDRjtJQUNBO0lBQ0E7RUFBVTtBQWM5QixTQUFPLENBQUMsR0FBRyxXQUFXLGNBQWMsR0FBRztBQUNuQyxVQUFNLEdBQUcsTUFBTSxHQUFLO0VBQ3hCO0FBS0EsV0FBUyxJQUFJLEdBQUcsSUFBSSxhQUFhLFFBQVEsRUFBRSxHQUFHO0FBQzFDLFVBQU0sT0FBTyxhQUFhLENBQUM7QUFFM0IsT0FBRyxJQUFJLDBCQUEwQixJQUFJO0FBQ3JDLE9BQUcsU0FBUyxJQUFJO0FBQ2hCLE9BQUcsS0FBSyxJQUFJO0FBQ1osT0FBRyxLQUFLLDBCQUEwQixNQUFNLEVBQUU7RUFDOUM7QUFDSjsiLCJuYW1lcyI6W119