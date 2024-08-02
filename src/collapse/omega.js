const purificationData = [
    {
        name: "Eternity",
        alt: "永恒",
        desc: "Each Factor Boost yields only one Booster and Darkness Upgrades are useless",
        boostDesc: "使第 1 个黑暗升级的效果底数变为",
        eff: () => (1+data.omega.bestFBInPurification[0]/1000)*getAOREffect(5)
    },
    {
        name: "Infinity",
        alt: "无限",
        desc: "Alephs except ℵ<sub>1</sub> are useless, Dynamic Factor divides AutoBuyer speed, and RUP2, RUP3, and IUP3 are disabled",
        boostDesc: "Boosting ℵ<sub>1</sub>, ℵ<sub>2</sub>, and ℵ<sub>8</sub> 增加",
        eff: () => Math.sqrt(data.omega.bestFBInPurification[1]),
        special: () => inPurification(1) ? data.dy.level : 1
    },
    {
        name: "Obscurity",
        alt: "晦暗",
        desc: "Your Markup AutoBuyer is equivalent to your FGH successor, your Hierarchies cannot grow, and Charge boosts FGH Successor",
        boostDesc: "使过度充电、提升器之力和两种层级后继数的获取数量增加",
        eff: () => data.omega.bestFBInPurification[2]/10,
    },
    {
        name: "Inferiority",
        alt: "次级",
        desc: "Incrementy, its upgrades, and Hierarchies are disabled, and Charge cannot be used",
        boostDesc: "使第 1 个和第 5 个基数升级的效果增加",
        eff: () => ((data.omega.bestFBInPurification[3]))*getAOREffect(5)
    }
]
const aoRebuyableData = [
    {
        desc: "SLIGHTLY boost ℶ<sub>&omega;</sub> 的获取数量",
        eff: () => (1+getAORLevel(0)/10)*getOverflowEffect(6),
        costBase: 50,
        symbol: 'x',
        req: () => true,
        extraLevels: () => anRebuyableData[4].eff()
    },
    {
        desc: "Boost ℵ<sub>&omega;</sub> 的获取数量",
        eff: () => getAORLevel(1)/2+1,
        costBase: 25,
        symbol: 'x',
        req: () => true,
        extraLevels: () => 0
    },
    {
        desc: "激活无限之净化时 ℵ<sub>&omega;</sub> 可以减少动态因子获取数量",
        eff: () => Math.log10(10+data.omega.alephOmega)*(getAORLevel(2)+1),
        costBase: 125,
        symbol: '除以',
        req: () => inPurification(1),
        extraLevels: () => anRebuyableData[4].eff()
    },
    {
        desc: "使永恒之净化中提升器获取数量翻倍",
        eff: () => 2**getAORLevel(3),
        costBase: 150,
        symbol: 'x',
        req: () => inPurification(0),
        extraLevels: () => anRebuyableData[4].eff()
    },
    {
        desc: "激活晦暗之净化或次级之净化时 ℵ<sub>&omega;</sub> 可以增加自动购买器的效果",
        eff: () => Math.sqrt(getAOEffect(0))*Math.sqrt(getAORLevel(4)+1),
        costBase: 200,
        symbol: 'x',
        req: () => inPurification(2) || inPurification(3),
        extraLevels: () => anRebuyableData[4].eff()
    },
    {
        desc: "ℵ<sub>&omega;</sub> 可以增加次级之净化的奖励效果",
        eff: () => Math.log2(2+data.omega.alephOmega)*(getAORLevel(5)+1),
        costBase: 400,
        symbol: 'x',
        req: () => true,
        extraLevels: () => 0
    },
    {
        desc: "ℵ<sub>&omega;</sub> 可以增加提升器升级2x2的效果",
        eff: () => Math.log10(10+data.omega.alephOmega)*(getAORLevel(6)+1),
        costBase: 300,
        symbol: 'x',
        req: () => true,
        extraLevels: () => 0
    },
    {
        desc: "使最后 1 个基数升级的效果增加 1%",
        eff: () => 1+getAORLevel(7),
        costBase: 600,
        symbol: '+',
        req: () => true,
        extraLevels: () => 0
    },
]
const aoMilestoneData = [
    {
        desc: "The first three Singularity Functions are now always active, and unlock a new Singularity Function",
        req: 200
    },{
        desc: "Purification of Infinity now boosts ℵ<sub>5</sub>, and unlock a new Aleph that is not effected by the seventh Cardinal Upgrade",
        req: 500,
        eff: () => hasAOMilestone(1) ? purificationEffect(1) : 1
    },{
        desc: "Purification of Obscurity now boosts the first Overcharge effect, and unlock two new Overcharge effects",
        req: 750,
        eff: () => hasAOMilestone(2) ? purificationEffect(2) : 1
    },{
        desc: "Purification of Inferiority now boosts the seventh Cardinal Upgrade, and unlock a new row of Incrementy Rebuyables",
        req: 1000,
        eff: () => hasAOMilestone(3) ? purificationEffect(3) : 1
    },{
        desc: "Boosters boost Cardinal Gain, and unlock two new ℵ<sub>0</sub> Rebuyables",
        req: 1750,
        eff: () => hasAOMilestone(4) ? data.boost.amt : 1
    },
]

function initPurification(){
    initPurifications()
    initAORebuyables()
    initAOMilestones()
}
function initPurifications(){
    const container = DOM('purificationContainer')
    for (let i = 0; i < data.omega.purificationIsActive.length; i++) {
        let el = document.createElement('button')
        el.className = 'purification'
        el.id = `purification${i}`
        el.addEventListener("click", ()=>enterPurification(i))
        container.append(el)
        updatePurificationHTML(i)
    }
}
function initAORebuyables(){
    const container = DOM('aoRebuyableContainer')
    for (let i = 0; i < data.omega.aoRebuyables.length/4; i++) {
        let row = document.createElement('div')
        row.className = `aoRow`
        row.id = `aoRRow${i}`
        for (let j = 0; j < 4; j++ ){
            let id = i*4+j
            let el = document.createElement('button')
            el.className = 'aoRebuyable'
            el.id = `aoR${id}`
            el.addEventListener("click", ()=>buyAOR(id))
            row.append(el)
        }
        container.append(row)
    }
    for (let i = 0; i < data.omega.aoRebuyables.length; i++) {
        updateAORHTML(i)
    }
}
function initAOMilestones(){
    const container = DOM('aoMilestoneContainer')
    for (let i = 0; i < aoMilestoneData.length/3; i++) {
        let row = document.createElement('div')
        row.className = `aoRow`
        row.id = `aoMRow${i}`
        for (let j = 0; j < 3; j++ ){
            let id = i*3+j
            if (id === 5) break
            let el = document.createElement('button')
            el.className = 'aoMilestone'
            el.id = `aoM${id}`
            el.innerHTML = `<span style="color: #c2052c">${aoMilestoneData[id].desc}</span><br>需：${aoMilestoneData[id].req} ℶ<sub>&omega;</sub>`
            //el.addEventListener("click", ()=>enterPurification(i))
            row.append(el)
        }
        container.append(row)
    }
    updateAllAOMHTML()
}

function updatePurificationTabHTML(){
    if(remnantAmt() > data.omega.bestRemnants) data.omega.bestRemnants = remnantAmt()
    DOM(`alephOmega`).innerHTML = `<span style="font-size: 1.1rem">You have <span style="color: #ce0b0b">${format(data.omega.alephOmega)} ℵ<sub>&omega;</sub></span>, multiplying <span style="color: #ce0b0b">自动购买器速度变为 ${format(getAOEffect(0))} 倍</span> and <span style="color: #ce0b0b">ℵ<sub>0</sub> 获取数量变为 ${format(getAOEffect(1))} 倍</span></span><br>You have <span style="color: #ce0b0b">${format(remnantAmt())} ℶ<sub>&omega;</sub></span>, producing <span style="color: #ce0b0b">${format(aoGain())} ℵ<sub>&omega;</sub>/s</span> until ℵ<sub>&omega;</sub> reaches ℶ<sub>&omega;</sub>`
    if(inAnyPurification()) DOM(`purification${data.omega.whichPurification}`).innerHTML = `<span style="color: #ce0b0b">Purification of ${purificationData[data.omega.whichPurification].name}</span><br><span style="color: #ce390b">如果现在退出，可以使提升增加 ${formatWhole(pureBoostGain())} (最高提升：${data.omega.bestFBInPurification[data.omega.whichPurification]})</span><br><span style="color: darkred">${purificationData[data.omega.whichPurification].desc}</brspan><br><span style="color: #ce460b">${purificationData[data.omega.whichPurification].boostDesc} ${format(purificationData[data.omega.whichPurification].eff())} 倍</span>\``
    updateAllAORHTML()
}
function updatePurificationHTML(i){
    DOM(`purification${i}`).innerHTML = `<span style="color: #ce0b0b">Purification of ${purificationData[i].name}</span><br><span style="color: #ce390b">最高${purificationData[i].alt}提升：<b>${data.omega.bestFBInPurification[i]}</b></span><br><span style="color: darkred">${purificationData[i].desc}</brspan><br><span style="color: #ce460b">${purificationData[i].boostDesc} ${format(purificationData[i].eff())} 倍</span>`
    DOM(`purification${i}`).style.backgroundColor = data.omega.purificationIsActive[i] ? `#120303` : `black`
}
function updatePossiblePurificationHTML(){
    if(data.omega.whichPurification === 0) updateAllDUPHTML()
    if(data.omega.whichPurification === 1) updateAllAlephHTML()
    if(data.omega.whichPurification === 2) updateAllBUPHTML()
}
function updateAORHTML(i){
    DOM(`aoR${i}`).innerHTML = `<span style="color: #ce280b">${aoRebuyableData[i].desc} (${formatWhole(getAORLevel(i))})</span><br>花费：${format(getAORCost(i))} ℵ<sub>&omega;</sub><br>当前效果：${aoRebuyableData[i].symbol !== 'x' ? aoRebuyableData[i].symbol : ''}${format(getAOREffect(i))}${aoRebuyableData[i].symbol === 'x' ? '倍' : ''} ${aoRebuyableData[i].req() ? '' : `(${formatBool(aoRebuyableData[i].req(), 'AU')})`}`
}
function updateAllAORHTML(){
    for (let i = 0; i < data.omega.aoRebuyables.length; i++) {
        updateAORHTML(i)
    }
}
function updateAOMilestoneHTML(i){
    DOM(`aoM${i}`).style.backgroundColor = hasAOMilestone(i) ? `#120303` : `black`
}
function updateAllAOMHTML(){
    for (let i = 0; i < aoMilestoneData.length; i++) {
        updateAOMilestoneHTML(i)
    }
}


function enterPurification(i){
    if(inAnyPurification() && (i === data.omega.whichPurification)) return exitPurification(i)
    if(inAnyPurification()) exitPurification(i,true)

    if(i === 3){
        singControl(1)
        darknessControl(3)
    }

    data.omega.whichPurification = i
    data.omega.purificationIsActive[i] = true
    collapseReset()

    updatePossiblePurificationHTML()
    updatePurificationHTML(i)
    updateHeaderHTML()
}
function exitPurification(i, swap = false) {
    updateAllAOMHTML()
    if (data.boost.times > data.omega.bestFBInPurification[data.omega.whichPurification]) data.omega.bestFBInPurification[data.omega.whichPurification] = data.boost.times
    if (!swap) collapseReset()

    data.omega.purificationIsActive = Array(data.omega.purificationIsActive.length).fill(false)

    if (swap) updatePurificationHTML(data.omega.whichPurification)
    updatePossiblePurificationHTML()

    data.omega.whichPurification = -1

    updatePurificationHTML(i)
    updateHeaderHTML()
}

function buyAOR(i){
    if(data.omega.alephOmega < getAORCost(i)) return
    data.omega.alephOmega -= getAORCost(i)
    ++data.omega.aoRebuyables[i]
    updateAORHTML(i)
    updateAllAOMHTML()
}

let aoGain = () => (remnantAmt()/1000)*getAOREffect(1)
let aoEffects = [
    () => data.omega.alephOmega,
    () => Math.sqrt(data.omega.alephOmega),
]

let remnantAmt = () => (data.omega.bestFBInPurification[0]+data.omega.bestFBInPurification[1]+data.omega.bestFBInPurification[2]+data.omega.bestFBInPurification[3])*getAOREffect(0)
let pureBoostGain = () => Math.max(0, (data.boost.times-data.omega.bestFBInPurification[data.omega.whichPurification]))
let getAOEffect = (i) => Math.max(aoEffects[i](), 1)
let hasAOMilestone = (i) => data.omega.bestRemnants >= aoMilestoneData[i].req
let inAnyPurification = () => data.omega.purificationIsActive.includes(true)
let inPurification = (i) => data.omega.purificationIsActive[i]
let purificationEffect = (i) => Math.max(purificationData[i].eff(), 1)
let getAOREffect = (i) => getAORLevel(i) > 0 ? Math.max(1, aoRebuyableData[i].eff()) : 1
let getAORCost = (i) => ((aoRebuyableData[i].costBase/100+1)**data.omega.aoRebuyables[i])*aoRebuyableData[i].costBase
let getAORLevel = (i) => data.omega.aoRebuyables[i] + aoRebuyableData[i].extraLevels()
let getAOMEffect = (i) => Math.max(1, aoMilestoneData[i].eff())
let aomArray = () => [hasAOMilestone(0), hasAOMilestone(1), hasAOMilestone(2), hasAOMilestone(3), hasAOMilestone(4)]