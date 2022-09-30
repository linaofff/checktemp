const checkTemp = (temp) => {
    const t = Number(temp);
    if (t >= 20) return -1
    if (t >=21 && t <=40 )return 0
    if (t >=41 && t <=60  )return 1;
    }
