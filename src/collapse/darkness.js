function updateDarknessHTML(){
    DOM('nchargeText1').innerText = `You have ${format(data.darkness.negativeCharge)} Negative Charge [+${format(negativeChargeGain())}/s], which is capped by Incrementy at ${format(negativeChargeCap())}`
    DOM('nchargeText2').innerText = `Your Negative Charge divides Incrementy gain by /${format(negativeChargeEffect(false))} and Incrementy effect by /${format(negativeChargeEffect(true))}`
}

function updateDarknessControlHTML(mode){
    switch (mode) {
        case 0:
            DOM('dupC0').innerText = `${boolToReadable(!data.darkness.negativeChargeEnabled, 'EDT')} Negative Charge gain`
            break;
        case 1:
            DOM('dupC1').innerText = `Reset Negative Charge`
            break;
        case 2:
            DOM('dupC2').innerHTML = `Sacrifice 1 Charge<br>Your <b>${data.darkness.sacrificedCharge}</b> Sacrificed Charge is dividing the Negative Charge effects by <b>/${format(sacrificedChargeEffect())}</b>`
            break;
        case 3:
            DOM('dupC3').innerText = `Reset Sacrificed Charge`
            break;
        default:
            break;
    }
}
function updateAllDarknessControlHTML(){
    for (let i = 0; i < 4; i++) {
        updateDarknessControlHTML(i)
    }
}

function updateDUPHTML(i){
    DOM(`dup${i}`).innerText = `${dupData[i].text} (${data.darkness.levels[i]})\n${format(dupData[i].cost())} Decrementy\nCurrently: ${format(dupEffect(i))}x`
}
function updateAllDUPHTML(){
    for (let i = 0; i < data.darkness.levels.length; i++) {
        updateDUPHTML(i)
    }
}

function updateDrainHTML(i){
    DOM(`drain${i}`).innerText = `Drain this Cardinal Upgrade (${data.darkness.drains[i]})\n${format(drainCost(i))} Negative Charge`
}

let negativeChargeGain = () => data.darkness.darkened && data.darkness.negativeChargeEnabled ? Math.max(0, Decimal.log10(data.chal.decrementy.plus(1))/5) : 0
let negativeChargeCap = () => Math.pow(data.incrementy.amt, 1/3)

function negativeChargeEffect(eff){
    if(eff == false) return Math.sqrt(data.darkness.negativeCharge+1)/sacrificedChargeEffect()
    if(eff == true) return Math.log10(data.darkness.negativeCharge+10)/sacrificedChargeEffect()
 }

let sacrificedChargeEffect = () => data.darkness.sacrificedCharge > 0 ? (data.darkness.sacrificedCharge+1)*2 : 1

let drainEffect = (i) => data.darkness.drains[i] > 0 ? i===1 ? Math.max(0, drainData[1].effect())
    : Math.max(drainData[i].effect(), 1)
    : i===1 ? 0 : 1
let drainCost = (i) => (10**(1+(data.darkness.totalDrains/2)))*(data.darkness.drains[i]+1)
let drainData = [
    { effect: () => 2*data.darkness.drains[0] },
    { effect: () => data.darkness.drains[1] },
    { effect: () => 1.5*data.darkness.drains[2] },
    { effect: () => 2*data.darkness.drains[3] },
    { effect: () => 5*data.darkness.drains[4] },
    { effect: () => 1.2*data.darkness.drains[5] },
    { effect: () => 2*data.darkness.drains[6] },
]

let dupEffect = (i) => Math.max(1, dupData[i].effect())
function dupScaling (i){
    if(i===0) return D(10).pow(D(3).pow(data.darkness.levels[i]+1)).pow(2)
    if(i===1) return D(10).pow(D(4).pow(data.darkness.levels[i]+1).pow(D(1.5)))
    if(i===2) return D(10).pow(D(3).pow(data.darkness.levels[i]+1)).pow(3)
}
let dupData = [
    { text: "Multiply AutoBuyer speed by 1.5x", cost: ()=> D(1e30).times(dupScaling(0)).pow(1/getOverflowEffect(5)), effect: ()=> 1.5**data.darkness.levels[0] },
    { text: "Double Dynamic Cap", cost: ()=> D(1e15).times(dupScaling(1)).pow(1/getOverflowEffect(5)), effect: ()=> 2**data.darkness.levels[1] },
    { text: "Multiply both Hierarchy Effect exponents by 1.1x", cost: ()=> D(1e100).times(dupScaling(2)).pow(1/getOverflowEffect(5)), effect: ()=> 1.1**data.darkness.levels[2] }
]

function buyDrain(i) {
    if (!data.collapse.hasCUP[i]) return createAlert("Failure.", "The Cardinal Upgrade must be purchased before being drained!", "Oops.")
    if (data.darkness.negativeCharge < drainCost(i)) return createAlert("Failure.", "Insufficient Negative Charge", "Dang.")

    data.darkness.negativeCharge -= drainCost(i)
    ++data.darkness.drains[i]
    ++data.darkness.totalDrains

    for (let i = 0; i < drainData.length; i++) {
        updateDrainHTML(i)
    }
}

function buyDUP(i){
    if(data.chal.decrementy.gte(dupData[i].cost())){
        data.chal.decrementy = data.chal.decrementy.sub(dupData[i].cost())
        ++data.darkness.levels[i]
        updateDUPHTML(i)
    }
}
let getTotalDUPs = () => data.darkness.levels[0]+data.darkness.levels[1]+data.darkness.levels[2]

function darknessControl(mode){
    if(mode===4){
        data.overflow.thirdEffect = !data.overflow.thirdEffect
        DOM('bp2Description').innerText = data.overflow.thirdEffect ? 'Dividing Decrementy Gain by ' : 'Multiplying Decrementy Gain by '
    }
    if(mode===0) data.darkness.negativeChargeEnabled = !data.darkness.negativeChargeEnabled
    if(mode===1){
        data.darkness.negativeCharge = 0
        darknessControl(3)
    }
    if(mode===2){
        if(data.incrementy.charge > 0){
            --data.incrementy.charge
            --data.incrementy.totalCharge
            ++data.darkness.sacrificedCharge
        }
    }
    if(mode===3){
        boosterReset()
        data.incrementy.totalCharge += data.darkness.sacrificedCharge
        data.incrementy.charge += data.darkness.sacrificedCharge
        data.darkness.sacrificedCharge = 0
        updateDarknessControlHTML(2)
        if(data.darkness.negativeChargeEnabled) darknessControl(0)
    }
    updateDarknessControlHTML(mode)
}

function darkenConfirm(){
    data.darkness.darkened
        ? createConfirmation('Are you certain?', 'Exiting the Darkness will stop the generation of Negative Charge and Decrementy and force a Booster Reset.', 'No thanks.', 'For sure!', darken)
        : createConfirmation('Are you certain?', 'Darkening will preform a Booster Reset and trap you in Challenge 8. However, you will also gain the ability to generate Negative Charge.', 'No thanks.', 'For sure!', darken)
}
function darken(force = false){
    data.darkness.darkened && !force ? chalExit(true) : chalEnter(7, true)

    DOM('darken').innerText = data.darkness.darkened ? 'Enter the Darkness' : 'Escape'
    data.darkness.darkened = !data.darkness.darkened
}

function resetDarkness(force = false){
    data.darkness.darkened = false
    if(!data.collapse.hasSluggish[3]) data.darkness.levels = Array(3).fill(0)
    data.darkness.negativeCharge = 0
    data.darkness.drains = Array(7).fill(0)
    data.darkness.sacrificedCharge = 0
    data.darkness.totalDrains = 0
    data.darkness.negativeChargeEnabled = false
    updateDarknessHTML()
    updateAllDUPHTML()
    for (let i = 0; i < drainData.length; i++) {
        updateDrainHTML(i)
    }
    DOM('darken').innerText = data.darkness.darkened ? 'Escape' : 'Enter the Darkness'
}