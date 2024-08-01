const achievements = [
    {
        id: 11,
        name: "The First Ordinal",
        description: "到达 ω",
        req: () => data.ord.ordinal.gte(10)
    },
    {
        id: 12,
        name: "Many More Ordinals",
        description: "到达 ω^2",
        req: () => data.ord.ordinal.gte(data.ord.base**2)
    },
    {
        id: 13,
        name: "Infinity...?",
        description: "到达 1.79e308",
        req: () => calculateSimpleHardy().gte(1.78e308)
    },
    {
        id: 14,
        name: "The Tower of Infinities",
        description: "到达 ω^ω",
        req: () => data.ord.ordinal.gte(data.ord.base**data.ord.base)
    },
    {
        id: 15,
        name: "A New Kind of Infinity",
        description: "到达 Ψ(Ω)",
        req: () => data.ord.isPsi
    },
    {
        id: 16,
        name: "The Ultimate Infinity",
        description: "到达 Ψ(Ω₂)",
        req: () => data.ord.isPsi && data.ord.ordinal.gte(BHO_VALUE)
    },
    {
        id: 21,
        name: "Speedy",
        description: "购买因子1",
        req: () => data.factors[0] > 0
    },
    {
        id: 22,
        name: "Breaking the Speed Limit",
        description: "购买因子2",
        req: () => data.factors[1] > 0
    },
    {
        id: 23,
        name: "The Speed of Sound",
        description: "购买因子3",
        req: () => data.factors[2] > 0
    },
    {
        id: 24,
        name: "The Speed of Light",
        description: "购买因子4",
        req: () => data.factors[3] > 0
    },
    {
        id: 25,
        name: "Physics is a Myth",
        description: "购买因子5",
        req: () => data.factors[4] > 0
    },
    {
        id: 26,
        name: "Infinite Speed",
        description: "购买因子6",
        req: () => data.factors[5] > 0
    },
    {
        id: 27,
        name: "The Speed of Gator",
        description: "购买因子7",
        req: () => data.factors[6] > 0
    },
    {
        id: 31,
        name: "Base 2 Soon!",
        description: "进行 1 次提升",
        req: () => data.boost.times > 0
    },
    {
        id: 32,
        name: "Base 2: Only 30 Years Away!",
        description: "进行 10 次提升",
        req: () => data.boost.times > 9
    },
    {
        id: 33,
        name: "Base 2: Only 30 Years Away!",
        description: "进行 20 次提升",
        req: () => data.boost.times > 19
    },
    {
        id: 34,
        name: "Temporary Delays",
        description: "进行 33 次提升",
        req: () => data.boost.times > 32
    },
    {
        id: 35,
        name: "Base 2... Only 30 Years Away...",
        description: "进行 100 次提升",
        req: () => data.boost.times > 99
    },
    {
        id: 36,
        name: "30 Years' Base",
        description: "进行 300 次提升",
        req: () => data.boost.times > 299
    },
    {
        id: 41,
        name: "Easy",
        description: "完成第 3 次挑战 1",
        req: () => data.chal.completions[0] > 2
    },
    {
        id: 42,
        name: "Dynamic Hater",
        description: "完成第 3 次挑战 5",
        req: () => data.chal.completions[4] > 2
    },
    {
        id: 43,
        name: "Quite Simple",
        description: "完成第 3 次挑战 6",
        req: () => data.chal.completions[5] > 2
    },
    {
        id: 44,
        name: "The Difficulty is Negligible",
        description: "完成第 3 次挑战 8",
        req: () => data.chal.completions[7] > 2
    },
    {
        id: 45,
        name: "The Most Difficult Test of The Gods",
        description: "完成第 3 次挑战 3",
        req: () => data.chal.completions[2] > 2
    },
    {
        id: 46,
        name: "I Hate The Third One",
        description: "完成所有挑战",
        req: () => allEqual(data.chal.completions, 3)
    },
    {
        id: 51,
        name: "Incrementy Incrementing",
        description: "购买 1 级增量重复升级1",
        req: () => data.incrementy.rebuyableAmt[0] > 0
    },
    {
        id: 52,
        name: "Dynamic isn't useless?",
        description: "购买增量升级3",
        req: () => data.incrementy.hasIUP[5]
    },
    {
        id: 53,
        name: "Dynamic isn't useless!",
        description: "购买增量升级6",
        req: () => data.incrementy.hasIUP[8]
    },
    {
        id: 54,
        name: "Electric Shuffle",
        description: "献祭增量获得电荷",
        req: () => data.incrementy.totalCharge > 0
    },
    {
        id: 55,
        name: "Electric Boogaloo",
        description: "到达 12 个电荷",
        req: () => data.incrementy.totalCharge > 11
    },
    {
        id: 56,
        name: "Stupidly High Electric Bill",
        description: "到达 25 个电荷",
        req: () => data.incrementy.totalCharge > 24
    },
    {
        id: 57,
        name: "The Sacrificial Ritual of Electricity",
        description: "到达 61 个电荷",
        req: () => data.incrementy.totalCharge > 60
    },
    {
        id: 58,
        name: "I use Alienware",
        description: "到达 73 个电荷",
        req: () => data.incrementy.totalCharge > 72
    },
    {
        id: 61,
        name: "Ordinals 2??",
        description: "购买快速增长层级和慢速增长层级的第 1 个升级",
        req: () => data.hierarchies.hasUpgrade[0] && data.hierarchies.hasUpgrade[5]
    },
    {
        id: 62,
        name: "Haha Base 4 in 30 Years",
        description: "层级的底数到达 5",
        req: () => sBUP0Effect() > 4
    },
    {
        id: 63,
        name: "Oh",
        description: "层级的底数到达 4",
        req: () => sBUP0Effect() > 5
    },
    {
        id: 71,
        name: "My cup runneth over",
        description: "每秒产生 1 提升器之力",
        req: () => getOverflowGain(0) >= 1
    },
    {
        id: 72,
        name: "My Cup Flooded The World",
        description: "每秒产生 1e6 提升器之力",
        req: () => getOverflowGain(0) >= 1e6
    },
    {
        id: 73,
        name: "My Electrical Bill Runneth Over",
        description: "产生过度充电",
        req: () => getOverflowGain(1) > 0
    },
    {
        id: 74,
        name: "We Need More Batteries",
        description: "每秒产生 1 过度充电",
        req: () => getOverflowGain(1) >= 1
    },
    {
        id: 81,
        name: "YOU HAVE COLLAPSED!",
        description: "进行 1 次坍缩",
        req: () => data.collapse.hasSluggish[0]
    },
    {
        id: 82,
        name: "Nightlight, Please",
        description: "解锁惯性里程碑 24",
        req: () => data.collapse.hasSluggish[2]
    },
    {
        id: 83,
        name: "I'm Sure These Won't be Expensive",
        description: "解锁惯性里程碑 12",
        req: () => data.collapse.hasSluggish[3]
    },
    {
        id: 84,
        name: "I forgot about Hierarchies",
        description: "解锁惯性里程碑 2",
        req: () => data.collapse.hasSluggish[4]
    },
    {
        id: 85,
        name: "Collapsing Walls",
        description: "购买第 7 个基数升级",
        req: () => data.collapse.hasCUP[6]
    },
    {
        id: 91,
        name: "Infinitely Dense",
        description: "到达奇异密度 ω",
        req: () => data.sing.level > 9
    },
    {
        id: 92,
        name: "Bigger Infinitely Dense",
        description: "到达奇异密度 ω2",
        req: () => data.sing.level > 19
    },
    {
        id: 93,
        name: "PLEASE DO NOT FEED WILD SINGULARITIES",
        description: "到达奇异密度 ω5",
        req: () => data.sing.level > 49
    },
    {
        id: 94,
        name: "I Fed The Wild Singularity",
        description: "到达奇异密度 ω8",
        req: () => data.sing.level > 79
    },
    {
        id: 101,
        name: "Never Liked Those Bases Anyway",
        description: "在任何无底之领域中进行动态变换",
        req: () => data.baseless.shifts > 0
    },
    {
        id: 102,
        name: "Definitely Broke The Speed Limit",
        description: "在任何无底之领域中进行 2 次动态变换",
        req: () => data.baseless.shifts > 1
    },
    {
        id: 103,
        name: "The Sound of Light",
        description: "在任何无底之领域中进行 3 次动态变换",
        req: () => data.baseless.shifts > 3
    },
    /*
    {
        id: 104,
        name: "The Gator is Proud",
        description: "Dynamic Shift Seven Times in Any Baseless Realm",
        req: () => data.baseless.shifts > 6
    },
     */
    {
        id: 105,
        name: "Unknowable Horrors",
        description: "在遗忘之领域中进行动态变换",
        req: () => data.baseless.shifts > 0 && data.baseless.mode === 2
    },
    {
        id: 106,
        name: "Forgotten Horrors",
        description: "在遗忘之领域中进行 3 次动态变换",
        req: () => data.baseless.shifts > 2  && data.baseless.mode === 2
    },
    /*
    {
        id: 107,
        name: "The Gator's Prodigy",
        description: "Dynamic Shift Seven Times in the Forgotten Realm",
        req: () => data.baseless.shifts > 6  && data.baseless.mode === 2
    },
     */
    {
        id: 111,
        name: "Blue, like this 99% PURE WATER!",
        description: "获得第 1 个净化里程碑",
        req: () => hasAOMilestone(0)
    },
    {
        id: 112,
        name: "We afforded, purchased, and used nine",
        description: "获得第 2 个净化里程碑",
        req: () => hasAOMilestone(1)
    },
    {
        id: 113,
        name: "The Unholy Electrical Outlet",
        description: "获得第 3 个净化里程碑",
        req: () => hasAOMilestone(2)
    },
    {
        id: 114,
        name: "Incrementy isn't even a word",
        description: "获得第 4 个净化里程碑",
        req: () => hasAOMilestone(3)
    },
    {
        id: 115,
        name: "Purely Baseless Accusations",
        description: "获得第 5 个净化里程碑",
        req: () => hasAOMilestone(4)
    },
    {
        id: 116,
        name: "Obesity",
        description: "到达奇异密度 ω²",
        req: () => data.sing.level > 99
    },
    {
        id: 117,
        name: "The Only Hierarchy Achievement",
        description: "任意层级重复升级到达 3333 级",
        req: () => checkAllIndexes(data.hierarchies.rebuyableAmt, 3333) > 0
    },
    {
        id: 118,
        name: "One Megabooster!",
        description: "提升器到达 1,000,000 个",
        req: () => data.boost.total >= 1e6
    },
    {
        id: 119,
        name: "The Incrementy Incremented",
        description: "增量到达 1e700",
        req: () => data.incrementy.amt.gte("1e700")
    },
    {
        id: 999,
        name: "Best Feature In The Whole Game",
        description: "发现隐藏秘密！不用担心，它对游戏进度没有任何影响:)",
        req: () => data.gword.unl
    },
]

function initAchs(){
    const achTab = DOM('achPage')
    let rows = Math.floor(achievements[achievements.length-1].id/10)
    let total = 0
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div')
        row.className = 'flexBox'
        row.id = `achRow${i}`
        row.cssText = 'flex-direction: row'
        achTab.append(row)
    }
    for (let i = 0; i < achievements.length; i++) {
        let row = Math.floor(Math.floor(i/8))
        let ach = document.createElement('button')
        ach.className = 'achievement'
        ach.id = `ach${achievements[i].id}`
        ach.innerText = achievements[i].name
        ach.setAttribute("tooltip", achievements[i].description)
        DOM(`achRow${row}`).append(ach)
    }
}
function checkAchs(){
    for (let i=0; i < achievements.length; i++){
        let id = achievements[i].id
        let ach = DOM(`ach${id}`)
        if(achievements[i].req() && !data.achs[i]) data.achs[i] = true
        ach.style.backgroundColor = data.achs[i] ? '#2c4126' : '#151515'
        ach.style.border = data.achs[i] ? '1px solid goldenrod' : '1px solid #464646'
        ach.style.color = data.achs[i] ? 'goldenrod' : '#9d5700'
    }
}
