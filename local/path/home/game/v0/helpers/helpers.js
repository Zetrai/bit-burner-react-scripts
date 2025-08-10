// servers/home/game/v0/helpers/helpers.tsx
var formatMoney = (amount) => {
  if (amount >= 1e9) return (amount / 1e9).toFixed(2) + "B";
  if (amount >= 1e6) return (amount / 1e6).toFixed(2) + "M";
  if (amount >= 1e3) return (amount / 1e3).toFixed(2) + "K";
  return amount.toString();
};
var formatRam = (ram) => {
  if (ram >= 1) return ram.toFixed(2) + " GB";
  return (ram * 1024).toFixed(0) + " MB";
};
export {
  formatMoney,
  formatRam
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVycy9ob21lL2dhbWUvdjAvaGVscGVycy9oZWxwZXJzLnRzeCJdLCJzb3VyY2VSb290IjoiLyIsIm1hcHBpbmdzIjoiO0FBQU8sSUFBTSxjQUFjLENBQUMsV0FBMkI7QUFDckQsTUFBSSxVQUFVLElBQUssU0FBUSxTQUFTLEtBQUssUUFBUSxDQUFDLElBQUk7QUFDdEQsTUFBSSxVQUFVLElBQUssU0FBUSxTQUFTLEtBQUssUUFBUSxDQUFDLElBQUk7QUFDdEQsTUFBSSxVQUFVLElBQUssU0FBUSxTQUFTLEtBQUssUUFBUSxDQUFDLElBQUk7QUFDdEQsU0FBTyxPQUFPLFNBQVM7QUFDekI7QUFFTyxJQUFNLFlBQVksQ0FBQyxRQUF3QjtBQUNoRCxNQUFJLE9BQU8sRUFBRyxRQUFPLElBQUksUUFBUSxDQUFDLElBQUk7QUFDdEMsVUFBUSxNQUFNLE1BQU0sUUFBUSxDQUFDLElBQUk7QUFDbkM7IiwibmFtZXMiOltdfQ==