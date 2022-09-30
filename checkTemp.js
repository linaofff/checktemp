/*
0-20 on liiga külm
21-40 on paras temperatuur
41-60 on liiga kuum
*/

const checkTemp = (temp) => {
const t = Number(temp);
if (t <= 20) return -1
if (t <=40 && t >=21  )return 0
if (t <=60 && t >=41  )return 1;
}
