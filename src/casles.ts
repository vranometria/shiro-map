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

const musashi = [
    { name: "江戸城", lat: dmsToDecimal(35,41,17.9, 'N'), lon: dmsToDecimal(139,45,15.72, 'E') },
    { name: "川越城", lat: dmsToDecimal(35,54,20.5, 'N'), lon: dmsToDecimal(139,28,55.3, 'E') },
    { name: "鉢形城", lat: dmsToDecimal(36,0,20.1, 'N'), lon: dmsToDecimal(139,12,39.5, 'E') },
    { name: "忍城", lat: dmsToDecimal(36,0,45.3, 'N'), lon: dmsToDecimal(139,32,6.8, 'E') },
    { name: "八王子城", lat: dmsToDecimal(35,39,7.2, 'N'), lon: dmsToDecimal(139,19,59.6, 'E') },
    { name: "滝山城", lat: dmsToDecimal(35,38,21.5, 'N'), lon: dmsToDecimal(139,18,10.4, 'E') },
    { name: "岩槻城", lat: dmsToDecimal(35,57,4.85, 'N'), lon: dmsToDecimal(139,42,36.86, 'E') },
]

const echigo = [
    { name: "春日山城", lat: dmsToDecimal(37,8,48.08, 'N'), lon: dmsToDecimal(138,12,19.99, 'E') },
    { name: "高田城", lat: dmsToDecimal(37,6,35.64, 'N'), lon: dmsToDecimal(138,15,21.27, 'E') },
    { name: "新発田城", lat: dmsToDecimal(37,57,19.68, 'N'), lon: dmsToDecimal(139,19,31.47, 'E') },
    { name: "村上城", lat: dmsToDecimal(38,13,11.46, 'N'), lon: dmsToDecimal(139,29, 6.0, 'E') },
    { name: "鮫ヶ尾城", lat: dmsToDecimal(37,3,4, 'N'), lon: dmsToDecimal(138,13,48, 'E') },
    { name: "与板城", lat: dmsToDecimal(37,32,2.6, 'N'), lon: dmsToDecimal(138,48,3.4, 'E') },
    { name: "本与板城", lat: dmsToDecimal(37,33,2.5, 'N'), lon: dmsToDecimal(138,48,10.6, 'E') },
    { name: "安田城", lat: dmsToDecimal(36,40,49, 'N'), lon: dmsToDecimal(137,9,39, 'E') },
    { name: "北条城", lat: dmsToDecimal(37,20,24.066, 'N'), lon: dmsToDecimal(138,38,2.271, 'E') },
    { name: "坂戸城", lat: dmsToDecimal(37,3,32.6485, 'N'), lon: dmsToDecimal(138,53,54.21, 'E') },
    { name: "栃尾城", lat: dmsToDecimal(37,28,19.9, 'N'), lon: dmsToDecimal(138,59,16.6, 'E') },
    { name: "荒戸城", lat: dmsToDecimal(36,54,27.2, 'N'), lon: dmsToDecimal(138,47,31.4, 'E') },
    
    { name: "平林城", lat: dmsToDecimal(38,8,18.8, 'N'), lon: dmsToDecimal(139,28,10.6, 'E') },
    // { name: "雑太城", lat: dmsToDecimal(36,23,45.5, 'N'), lon: dmsToDecimal(138,15,28.3, 'E') },
    // { name: "樺沢城", lat: dmsToDecimal(36,23,45.5, 'N'), lon: dmsToDecimal(138,15,28.3, 'E') },
    // { name: "箕冠城", lat: dmsToDecimal(36,23,45.5, 'N'), lon: dmsToDecimal(138,15,28.3, 'E') },
    // { name: "与板陣屋", lat: dmsToDecimal(36,23,45.5, 'N'), lon: dmsToDecimal(138,15,28.3, 'E') },
    // { name: "大葉沢城", lat: dmsToDecimal(36,23,45.5, 'N'), lon: dmsToDecimal(138,15,28.3, 'E') },
];

const mutsu = [
    // 北緯40度36分28.93秒 東経140度27分49.7秒
    { name: "弘前城", lat: dmsToDecimal(40, 36, 28.93, 'N'), lon: dmsToDecimal(140, 27, 49.7, 'E') },
    //伝法寺館 40.5702672,141.2642863,17
    { name: "伝法寺館", lat: dmsToDecimal(40,34,12.96, 'N'), lon: dmsToDecimal(141,15,51.43, 'E') },
    // 鶴ヶ崎順法寺城 41.226547,141.1282861,17
    { name: "鶴ヶ崎順法寺城", lat: dmsToDecimal(41,13,35.57, 'N'), lon: dmsToDecimal(141,7,41.83, 'E') },
    // 福田館 40.460022,141.3712181,17
    { name: "福田館", lat: dmsToDecimal(40,27,36.08, 'N'), lon: dmsToDecimal(141,22,16.39, 'E') },
    // 沖館城 40.570738,140.5775831,17
    { name: "沖館城", lat: dmsToDecimal(40,34,14.65, 'N'), lon: dmsToDecimal(140,34,39.3, 'E') },
    // 赤沼備中館 40.599445,141.173951
    { name: "赤沼備中館", lat: dmsToDecimal(40,35,58.0, 'N'), lon: dmsToDecimal(141,10,26.2, 'E') },
    // 苫米地館 40.464866,141.3765611,17
    { name: "苫米地館", lat: dmsToDecimal(40,27,53.5, 'N'), lon: dmsToDecimal(141,22,35.6, 'E') },
    // 野辺地城 https://www.google.com/maps?q=40.864982,141.124860
    { name: "野辺地城", lat: dmsToDecimal(40,51,53.9, 'N'), lon: dmsToDecimal(141,7,29.5, 'E') },
    // 高木地蔵館 https://www.google.com/maps?q=40.619146,140.586038
    { name: "高木地蔵館", lat: dmsToDecimal(40,37,8.9, 'N'), lon: dmsToDecimal(140,35,9.7, 'E') },
    // 広船館 https://www.google.com/maps?q=40.567718,140.614275
    { name: "広船館", lat: dmsToDecimal(40,34,3.8, 'N'), lon: dmsToDecimal(140,36,51.4, 'E') },
    // 新屋城 https://www.google.com/maps?q=40.594942,140.597304
    { name: "新屋城", lat: dmsToDecimal(40,35,41.8, 'N'), lon: dmsToDecimal(140,35,50.3, 'E') },
    // 目時館 https://www.google.com/maps?q=40.349065,141.270060
    { name: "目時館", lat: dmsToDecimal(40,20,56.6, 'N'), lon: dmsToDecimal(141,16,12.2, 'E') },
    // 五戸館 https://www.google.com/maps?q=40.523221,141.298688
    { name: "五戸館", lat: dmsToDecimal(40,31,23.6, 'N'), lon: dmsToDecimal(141,17,55.3, 'E') },
    // 浅水城 https://www.google.com/maps?q=40.476113,141.298611
    { name: "浅水城", lat: dmsToDecimal(40,28,34.0, 'N'), lon: dmsToDecimal(141,17,55.0, 'E') },
    // 大浦城 https://www.google.com/maps?q=40.617776,140.414607
    { name: "大浦城", lat: dmsToDecimal(40,37,4.0, 'N'), lon: dmsToDecimal(140,24,52.6, 'E') },
    // 浅瀬石城 https://www.google.com/maps?q=40.619213,140.616866
    { name: "浅瀬石城", lat: dmsToDecimal(40,37,9.2, 'N'), lon: dmsToDecimal(140,37,0.7, 'E') },
    // 剣吉城 https://www.google.com/maps?q=40.445757,141.340605
    { name: "剣吉城", lat: dmsToDecimal(40,26,44.7, 'N'), lon: dmsToDecimal(141,20,26.2, 'E') },
    // 蓬田城 https://www.google.com/maps?q=40.982457,140.645444
    { name: "蓬田城", lat: dmsToDecimal(40,58,56.8, 'N'), lon: dmsToDecimal(140,38,43.6, 'E') },
    // 田舎館城 https://www.google.com/maps?q=40.630888,140.552525
    { name: "田舎館城", lat: dmsToDecimal(40,37,51.2, 'N'), lon: dmsToDecimal(140,33,9.1, 'E') },
    // 田子館 https://www.google.com/maps?q=40.338285,141.145368
    { name: "田子館", lat: dmsToDecimal(40,20,17.8, 'N'), lon: dmsToDecimal(141,8,43.3, 'E') },
    // 法師岡館 https://www.google.com/maps?q=40.468801,141.410824
    { name: "法師岡館", lat: dmsToDecimal(40,28,7.7, 'N'), lon: dmsToDecimal(141,24,38.9, 'E') },
    // 蠣崎城 https://www.google.com/maps?q=40.473615,141.210748
    { name: "蠣崎城", lat: dmsToDecimal(40,28,25.0, 'N'), lon: dmsToDecimal(141,12,38.7, 'E') },
    // 聖寿寺館 https://www.google.com/maps?q=40.412422,141.265306
    { name: "聖寿寺館", lat: dmsToDecimal(40,24,44.7, 'N'), lon: dmsToDecimal(141,15,55.1, 'E') },
    // 石沢館 https://www.google.com/maps?q=40.515348,141.279451
    { name: "石沢館", lat: dmsToDecimal(40,30,55.3, 'N'), lon: dmsToDecimal(141,16,45.8, 'E') },
    // 天内館 https://www.google.com/maps?q=40.614355,140.598106
    { name: "天内館", lat: dmsToDecimal(40,36,51.7, 'N'), lon: dmsToDecimal(140,35,53.2, 'E') },
    // 大光寺城 https://www.google.com/maps?q=40.589999,140.557535
    { name: "大光寺城", lat: dmsToDecimal(40,35,24.0, 'N'), lon: dmsToDecimal(140,33,27.1, 'E') },
    // 島守館 https://www.google.com/maps?q=40.417069,141.481090
    { name: "島守館", lat: dmsToDecimal(40,25,1.4, 'N'), lon: dmsToDecimal(141,28,51.9, 'E') },
    // 滝井館 https://www.google.com/maps?q=40.702781,140.513162
    { name: "滝井館", lat: dmsToDecimal(40,42,10.0, 'N'), lon: dmsToDecimal(140,30,47.4, 'E') },
    // 柴崎城 https://www.google.com/maps?q=41.134293,140.286968
    { name: "柴崎城", lat: dmsToDecimal(41,8,3.5, 'N'), lon: dmsToDecimal(140,17,13.1, 'E') },
    // 奥瀬館 https://www.google.com/maps?q=40.577615,141.097401
    { name: "奥瀬館", lat: dmsToDecimal(40,34,39.4, 'N'), lon: dmsToDecimal(141,5,51.8, 'E') },
    // 日ノ沢館 https://www.google.com/maps?q=40.352208,141.168894
    { name: "日ノ沢館", lat: dmsToDecimal(40,21,7.9, 'N'), lon: dmsToDecimal(141,10,8.0, 'E') },
    // 泉山館 https://www.google.com/maps?q=40.380073,141.281343
    { name: "泉山館", lat: dmsToDecimal(40,22,48.3, 'N'), lon: dmsToDecimal(141,16,52.8, 'E') },
    // 古館 https://www.google.com/maps?q=40.455709,141.368012
    { name: "古館", lat: dmsToDecimal(40,27,20.5, 'N'), lon: dmsToDecimal(141,22,4.8, 'E') },
    // 豊川館 https://www.google.com/maps?q=40.358768,141.229341
    { name: "豊川館", lat: dmsToDecimal(40,21,31.6, 'N'), lon: dmsToDecimal(141,13,45.6, 'E') },
    // 根城 https://www.google.com/maps?q=40.506253,141.459926
    { name: "根城", lat: dmsToDecimal(40,30,22.5, 'N'), lon: dmsToDecimal(141,27,35.7, 'E') },
    // 堀越城 https://www.google.com/maps?q=40.572631,140.521403
    { name: "堀越城", lat: dmsToDecimal(40,34,21.5, 'N'), lon: dmsToDecimal(140,31,17.0, 'E') },
    // 三戸城 https://www.google.com/maps?q=40.381920,141.265339
    { name: "三戸城", lat: dmsToDecimal(40,22,54.9, 'N'), lon: dmsToDecimal(141,15,55.2, 'E') },
    // 大開城 https://www.google.com/maps?q=41.160571,140.492338
    { name: "大開城", lat: dmsToDecimal(41,9,38.1, 'N'), lon: dmsToDecimal(140,29,32.4, 'E') },
    // 尻八館 https://www.google.com/maps?q=40.934332,140.617859
    { name: "尻八館", lat: dmsToDecimal(40,56,3.6, 'N'), lon: dmsToDecimal(140,37,4.3, 'E') },
    // 浪岡城 https://www.google.com/maps?q=40.716910,140.604084
    { name: "浪岡城", lat: dmsToDecimal(40,43,0.9, 'N'), lon: dmsToDecimal(140,36,14.7, 'E') },
    // 七戸城 https://www.google.com/maps?q=40.698081,141.149780
    { name: "七戸城", lat: dmsToDecimal(40,41,53.1, 'N'), lon: dmsToDecimal(141,8,59.2, 'E') },
    // 水木館 https://www.google.com/maps?q=40.680723,140.534293
    
    // 八戸城 https://www.google.com/maps?q=40.514780,141.487756
    { name: "八戸城", lat: dmsToDecimal(40,30,53.2, 'N'), lon: dmsToDecimal(141,29,15.0, 'E') },
    { name: "水木館", lat: dmsToDecimal(40,40,50.6, 'N'), lon: dmsToDecimal(140,32,3.5, 'E') },
    // 川守田館 https://www.google.com/maps?q=40.387228,141.261076
    { name: "川守田館", lat: dmsToDecimal(40,23,14.0, 'N'), lon: dmsToDecimal(141,15,39.9, 'E') },
    // 原館 https://www.google.com/maps?q=40.313786,141.123250
    { name: "原館", lat: dmsToDecimal(40,18,49.6, 'N'), lon: dmsToDecimal(141,7,23.7, 'E') },
    // 深浦館 https://www.google.com/maps?q=40.635570,139.925376
    { name: "深浦館", lat: dmsToDecimal(40,38,8.1, 'N'), lon: dmsToDecimal(139,55,31.4, 'E') },
    // 福島城 https://www.google.com/maps?q=41.047518,140.364363
    { name: "福島城", lat: dmsToDecimal(41,2,51.1, 'N'), lon: dmsToDecimal(140,21,51.7, 'E') },
    // 飯詰城 https://www.google.com/maps?q=40.826020,140.495568
    { name: "飯詰城", lat: dmsToDecimal(40,49,33.7, 'N'), lon: dmsToDecimal(140,29,44.4, 'E') },
    // 道仏館 https://www.google.com/maps?q=40.444970,141.646695
    { name: "道仏館", lat: dmsToDecimal(40,26,41.9, 'N'), lon: dmsToDecimal(141,38,48.1, 'E') },
    // 尾崎城 https://www.google.com/maps?q=40.588068,140.612487
    { name: "尾崎城", lat: dmsToDecimal(40,35,16.9, 'N'), lon: dmsToDecimal(140,36,44.95, 'E') },
    // 三日市館 https://www.google.com/maps?q=40.590245,141.178841
    { name: "三日市館", lat: dmsToDecimal(40,35,24.9, 'N'), lon: dmsToDecimal(141,10,43.8, 'E') },
    // 牛ノ沢館 https://www.google.com/maps?q=41.041056,141.261923
    { name: "牛ノ沢館", lat: dmsToDecimal(41,2,27.8, 'N'), lon: dmsToDecimal(141,15,42.9, 'E') },
    // 森ノ腰館 https://www.google.com/maps?q=40.440522,141.349867
    { name: "森ノ腰館", lat: dmsToDecimal(40,26,25.9, 'N'), lon: dmsToDecimal(141,20,59.5, 'E') },
    // 平内代官所 https://www.google.com/maps?q=40.928796,140.954780
    { name: "平内代官所", lat: dmsToDecimal(40,55,43.7, 'N'), lon: dmsToDecimal(140,57,17.2, 'E') },
    // 種里城 https://www.google.com/maps?q=40.704236,140.166003
    { name: "種里城", lat: dmsToDecimal(40,42,15.3, 'N'), lon: dmsToDecimal(140,9,57.6, 'E') },
];

export const Casles = [
    ...shimousa,
    ...musashi,
    ...echigo,
    ...mutsu,
];