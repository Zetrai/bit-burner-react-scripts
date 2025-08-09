// servers/home/scripts/temp.ts
async function main(ns) {
  const prefix = "pserv-";
  for (let i = 17; i <= 20; i++) {
    ns.renamePurchasedServer(`${prefix}${i}-0`, `${prefix}${i + 4}`);
  }
}
export {
  main
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL3NjcmlwdHMvdGVtcC50cyJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBR0EsZUFBc0IsS0FBSyxJQUF1QjtBQUNoRCxRQUFNLFNBQVM7QUFFZixXQUFTLElBQUksSUFBSSxLQUFLLElBQUksS0FBSztBQUM3QixPQUFHLHNCQUFzQixHQUFHLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUU7QUFBQSxFQUNqRTtBQUNGOyIsIm5hbWVzIjpbXX0=