const dmsToDecimal = (deg, min, sec, hemi) =>{
 let dd = deg + (min / 60) + (sec / 3600);
  if (hemi === "S" || hemi === "W") {
    dd = -dd; // 南緯・西経はマイナス
  }
  return dd;
}

const shimousa = [
    { name: "久留里城", lat: dmsToDecimal(35, 17, 15.2, 'N'), lon: dmsToDecimal(140,5,24, 'E') }
]

export const Casles = [
    ...shimousa,
];