let extraT1 = () => data.collapse.hasSluggish[0] ? 1 : 0
function updateMarkupHTML(){
    DOM("powersText").innerText = `您拥有 ${formatWhole(data.markup.powers)} 序数幂`

    DOM("markupButton").innerHTML =
        data.ord.isPsi&&data.ord.ordinal.eq(GRAHAMS_VALUE)&&data.boost.times===0&&!data.collapse.hasSluggish[0]?`Base 2 is required to go further...`:
        data.ord.isPsi?`进行增序，并获得 ${ordinalDisplay('', data.ord.ordinal.plus(1), data.ord.over, data.ord.base, ((data.ord.displayType === "BMS") || (data.ord.displayType === "Y-Sequence")) ? Math.max(data.ord.trim, 4) : 4)} (I)`:
        data.ord.ordinal.gte(data.ord.base**2)?`进行增序，并获得 ${formatWhole(totalOPGain())} 序数幂(I)`:`需要 ${ordinalDisplay("H", data.ord.base**2, 0, data.ord.base, ordinalDisplayTrim(), false)}(${data.ord.base}) 才可进行增序……`

    DOM("factorShiftButton").innerHTML = data.ord.base===3?data.boost.times>0||data.collapse.hasSluggish[0]?`Perform a Factor Shift<br>Requires: ?????`:`Perform a Factor Shift<br>需：葛立恒数(${ordinalDisplay("H", 109, 0, 3, data.ord.trim, true, true)}(3))`:
        `Perform a Factor Shift (H)<br>需：${format(getFSReq())} 序数幂`
    DOM("auto0").innerText = `Successor AutoClicker\n花费 ${format(autoCost(0))} 序数幂`
    DOM("auto1").innerText = `Maximize AutoClicker\n花费 ${format(autoCost(1))} 序数幂`
    let succSpeed = !data.chal.active[4]
        ? D(data.autoLevels[0]).add(extraT1()).mul(t1Auto()).mul(data.dy.level).div(data.chal.decrementy)
        : D(data.autoLevels[0]).add(extraT1()).mul(t1Auto()).div(data.dy.level).div(data.chal.decrementy)
    let maxSpeed = !data.chal.active[4]
        ? D(data.autoLevels[1]).add(extraT1()).mul(t1Auto()).mul(data.dy.level).div(data.chal.decrementy)
        : D(data.autoLevels[1]).add(extraT1()).mul(t1Auto()).div(data.dy.level).div(data.chal.decrementy)
    DOM("autoText").innerText = `您拥有 ${formatWhole(data.autoLevels[0]+extraT1())} 个后继数自动点击器，每秒点击 ${formatWhole(succSpeed)} 次后继数按钮\n您拥有 ${formatWhole(data.autoLevels[1]+extraT1())} 个最大化序数自动点击器，每秒点击 ${formatWhole(maxSpeed)} 次最大化序数按钮`

    for (let i = 0; i < data.factors.length; i++) {
        DOM(`factor${i}`).innerText = hasFactor(i)?`因子${i+1} [${data.boost.hasBUP[11]?formatWhole(data.factors[i]+bup10Effect()):formatWhole(data.factors[i])}] ${formatWhole(factorEffect(i))}倍\n花费：${formatWhole(factorCost(i))} 序数幂`:`因子${i+1}\nLOCKED`
    }
    DOM("factorText").innerText = `因子使自动点击器的速度变为 ${formatWhole(factorBoost())} 倍`

    DOM("factorShiftButton").style.borderColor = data.ord.base===3&&data.boost.times===0&&!data.collapse.hasSluggish[0]?`#0000ff`:`#785c13`
    DOM("factorShiftButton").style.color = data.ord.base===3&&data.boost.times===0&&!data.collapse.hasSluggish[0]?`#8080FF`:`goldenrod`

    DOM("dynamicTab").innerText = data.markup.shifts===7||data.chal.active[4]||data.baseless.baseless?'Dynamic':'???'
    DOM("dynamicText").innerText = `您的动态因子使自动点击器的速度${data.chal.active[4]?'除以':'乘以'} ${format(data.dy.level, 3)}\n它每秒增加 ${format(dyGain())}，上限为 ${format(data.dy.cap)}`
    DOM("dynamicText2").innerText = `您的动态因子为 ${format(data.dy.level, 3)} [每秒增加 ${format(dyGain())}]。它的上限为 ${format(data.dy.cap)}`

    DOM("factorBoostButton").innerHTML = `${boostName()}提升[+${boosterGain()}] (B)<br>需 ${displayBoostReq()}`
    DOM("factorBoostButton").style.color = data.ord.isPsi&&data.ord.ordinal.gte(boostReq())?'#fff480':'#8080FF'

    if(data.sToggles[6]) updateProgressBar()
}
function boostName(){
    if(!inAnyPurification()) return `因子`
    return purificationData[data.omega.whichPurification].alt
}
function markup(n=D(1)){
    if(data.boost.times===0 && data.ord.isPsi && data.ord.ordinal.eq(GRAHAMS_VALUE) && !data.collapse.hasSluggish[0]) return
    if(data.ord.ordinal.lt(data.ord.base**2) && !data.ord.isPsi) return
    if(data.ord.isPsi){
        data.ord.ordinal = data.ord.ordinal.plus(n);
        if (capOrdinalAtBO && data.ord.base===3 && data.ord.ordinal.gt(BO_VALUE)) data.ord.ordinal = D(BO_VALUE)
        return data.markup.powers = 4e256
    }

    if(data.chal.active[7]){
        data.markup.powers = 0
        data.chal.decrementy = D(1)
    }
    data.ord.isPsi = false
    data.markup.powers += totalOPGain()
    data.ord.ordinal = D(0)
    data.ord.over = 0
    data.successorClicks = 0
}
function opMult(){
    let mult = bup1Effect()

    let baseReq = data.boost.isCharged[6] ? 4 : 5
    mult += data.ord.base >= baseReq ? bup6Effect() : 0

    return mult*alephEffect(2)
}
function opGain(ord = data.ord.ordinal, base = data.ord.base, over = data.ord.over) {
    if(D(ord).eq(data.ord.ordinal) && D(ord).gte(Number.MAX_VALUE)) return 4e256
    if(D(ord).eq(data.ord.ordinal)) ord = Number(ord)
    //if(data.ord.isPsi && base === 3){
    //    return Math.round(ord / 1e270 + 1) * 1e270
    //}
    if (ord < base) return ord + over
    let pow = Math.floor(Math.log(ord + 0.1) / Math.log(base))
    let divisor = Math.pow(base, pow)
    let mult = Math.floor((ord + 0.1) / divisor)
    return Math.min(4e256, 10 ** Math.min(4e256, opGain(pow, base, 0)) * mult + Math.min(4e256, opGain(ord - divisor * mult, base, over)))
}
let totalOPGain = () => Math.min(4e256, opGain()*opMult())
function calcOrdPoints(ord = data.ord.ordinal, base = data.ord.base, over = data.ord.over, trim=0) {
    let opBase = new Decimal(10)
    if (trim >= 10) return new Decimal(0)
    if (Decimal.lt(ord, base)) {
        return Decimal.add(ord, over)
    } else if (new Decimal(ord).slog(base).lt(base)) {
        let powerOfOmega = Decimal.log(new Decimal(ord).add(0.1), base).floor()
        let highestPower = Decimal.pow(base,powerOfOmega)
        let powerMultiplier = Decimal.floor(Decimal.div(new Decimal(ord).add(0.1),highestPower))
        return Decimal.add(Decimal.mul(Decimal.pow(opBase, calcOrdPoints(powerOfOmega,base,0)), powerMultiplier), new Decimal(ord).lt(Decimal.tetrate(base, 3)) ? calcOrdPoints(new Decimal(ord).sub(Decimal.mul(highestPower,powerMultiplier)),base,over,trim+1) : 0)
    } else {
        return new Decimal(opBase).tetrate(calcOrdPoints(new Decimal(ord).slog(base),base,0,trim))
    }
}
const fsReqs = [200, 1000, 1e4, 3.5e5, 1e12, 1e21, 5e100, Infinity, Infinity]
function getFSReq(){
    if (data.markup.shifts >= 7 && data.ord.base > 3) return Infinity // avoid phantom 1e256 on FS7
    if (data.ord.isPsi && data.ord.ordinal.gte(GRAHAMS_VALUE) && data.boost.times === 0 && !data.collapse.hasSluggish[0]) return D(0) // avoid being stuck on Graham's Number
    const reqScale = data.chal.active[6] ? (totalBUPs()/2)+1.5 : 1
    const req = fsReqs[data.markup.shifts]**reqScale

    return req > 1e256 ? 1e256 : req
}

function factorShiftConfirm(){
    if(data.baseless.baseless || data.markup.powers < getFSReq())  return

    createConfirmation('Are you sure?', 'Performing a Factor Shift will reduce your Base by 1 and unlock a new Factor, but it will reset your Ordinal, Ordinal Powers, Factors, and Automation!', 'No Way!', 'Yes, lets do this.', factorShift)
}

function factorShift(isAuto = false){
    if(data.baseless.baseless) return
    if(data.markup.shifts === 7 && !isAuto){
        if(data.ord.isPsi && data.ord.ordinal.gte(GRAHAMS_VALUE) && data.boost.times === 0) return boost(true)
        else return //createAlert("Failure", "Insufficient Ordinal", "Dang.")
    }

    const req = getFSReq()

    if(data.markup.powers < req) return //createAlert("Failure", "Insufficient Ordinal Powers", "Dang.")
    if(!data.chal.active[3] && !(data.boost.hasBUP[2] && checkAllIndexes(data.chal.active, true))) --data.ord.base
    if(data.markup.shifts < 7) ++data.markup.shifts

    if(data.markup.shifts === 7 && !data.chal.active[4]){
        data.dy.level = 4
        data.dy.gain = 0.002
    }

    if(data.chal.active[4]) data.dy.gain = 0.002

    fsReset()
}

function fsReset(){
    data.ord.ordinal = D(0)
    data.ord.over = 0
    data.markup.powers = 0
    for (let i = 0; i < data.autoLevels.length; i++) {
        data.autoLevels[i] = 0
    }
    for (let i = 0; i < data.factors.length; i++) {
        data.factors[i] = 0
    }
}
