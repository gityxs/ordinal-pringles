/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Infinity...?": "无限...?",
    "Infinite Speed": "无限速度",
    "LOCKED": "未解锁",
    "Lower is Better": "越低越好",
    "No!": "不！",
    "Ordinals": "序数",
    "The Speed of Sound": "音速",
    "The Speed of Light": "光速",
    "The Speed of Gator": "鳄鱼的速度",
    "Thanks!": "谢谢！",
    "The Strongest Factor": "最强大的因子",
    "The Tower of Infinities": "无限之塔",
    "The Unlockables Column does not consume Boosters": "可解锁的列不消耗助推器",
    "Unlock ???": "解锁 ???",
    "Submit": "提交",
    "...what?": "...纳尼?",
    "Hover over an Achievement to view its information!": "将鼠标悬停在成就上以查看其信息！",
    "How Low Can You Go?": "你能达到多低？",
    "I Could Do This in My Sleep": "我可以在睡梦中做到这一点",
    "Import your Save": "导入存档",
    "Incrementy": "增量",
    "Incrementy Multiplies the Dynamic Cap at a reduced rate (does not effect C5)": "增量以较低的速率乘以动态上限（不影响 C5）",
    "Irrelevancy is Irrelevant": "无关紧要",
    "Many More Ordinals": "更多序数",
    "Welcome back!": "欢迎回来！",
    "Welcome Back!": "欢迎回来！",
    "What Cap?": "什么上限？",
    "Yes!": "是！",
    "A New Kind of Infinity": "一种新的无限",
    "Are you sure?": "你确定吗？",
    "AutoBuyers": "自动购买器",
    "AutoClickers": "自动点击器",
    "Base 2 Soon!": "基数 2 很快！",
    "Boosters": "助推器",
    "Requires ψ(Ω": "需要 ψ(Ω",
    "Cancel": "取消",
    "Speed": "速度",
    "The Base is 5 higher": "基数高了 5",
    "Unlock Challenges": "解锁 挑战",
    "Unlock Incrementy": "解锁 增量",
    "Unlock Markup AutoBuyer": "解锁 标记自动购买器",
    "Unlock Max All AutoBuyer": "解锁 全部最大自动购买器",
    "Unlock Hierarchies": "解锁 层次体系",
    "Upgrades": "升级",
    "Way Too Easy": "方式太简单了",
    "You can only buy 1 of each AutoClicker": "每个 自动购买器 只能购买 1 个",
    "Factors": "因子",
    "Markup": "标记",
    "Max All Factors [F]": "最大全部因子 [F]",
    "Maximize Ordinal (M)": "最大化序数 (M)",
    "Maximize AutoClicker": "最大化自动购买器",
    "Maximum is Irrelevant": "最大无关紧要",
    "Maximum Overdrive": "最大过载",
    "Maximum Voltage": "最大电压",
    "You can't buy Factors": "你不能购买因子",
    "You have Chips. In your house.": "你有筹码。 在你的房子里。",
    "Still Too Easy": "还是太容易了",
    "Succc Auto": "继任者自动",
    "Successor AutoClicker": "继任者自动点击器",
    "The First Ordinal": "第一个序数",
    "The first row of upgrades are re-buyable.": "第一行升级是可重新购买的。",
    "The Ordinal Base boosts Factors (higher is better)": "序数基数提升因素（越高越好）",
    "The Ordinal Base is always 5 in Challenges": "序数基数在挑战中总是 5",
    "Total Repeatable Upgrade 3 levels boosts Upgrade 3": "总计可重复升级 3 级也提升升级 3",
    "Total Factor Boosts boost Incrementy Gain": "总计因子的提升也提升增量增益",
    "You exponentially gain Decrementy and you're trapped in Challenge 7": "你以指数方式获得递减，你被困在挑战 7 中",
    "You gain Incrementy based on your Ordinal, but only above Ψ(Ω).": "您根据序数获得增量，但仅高于 Ψ(Ω)。",
    "You gain no Dynamic, keep no OP on Markup, Booster Upgrades are useless, and you can only manually click Successor 1000 times per Markup": "你没有获得动态，没有在标记上保留 OP，助推器升级没有用，而且你只能手动点击每个标记 1000 次继任者",
    "Refund your Charged Booster Upgrades": "退还已充能的助推器升级",
    "Repeatable Upgrade 2 is boosted by Challenge Completions": "可重复升级 2 因挑战完成而得到提升",
    "Refund your Booster Upgrades": "退还您的助推器升级",
    "Preform a Factor Boost": "进行因子提升",
    "Preform a Factor Shift": "进行因子转换",
    "Physics is a Myth": "物理学是一个神话",
    "Overdrive": "过载",
    "Not Challenging": "没有挑战性",
    "New things have been added since last time": "自上次以来又增加了新的东西",
    "It Was All Just a Dream": "一切都只是一场梦",
    "Increase Successor by 1 (S)": "将继任者增加 1 (S)",
    "I Swear it is NOT Challenging": "我发誓这不是挑战",
    "I Did This in My Sleep": "我在睡梦中做了这件事",
    "Hello Cat": "你好，喵星人",
    "Hello Dog": "你好，狗子",
    "Jonas was here": "乔纳斯在这里",
    "Increment the Increment of the Incrementy": "增加增量的增量",
    "Penultimate": "倒数第二",
    "Perform a Factor Shift": "进行因子转换",
    "Factorial! Cog": "阶乘! Cog",
    "Gain 3 free levels of each Factor": "每个因子获得 3 个免费等级",
    "Gain 20 Free OP/s": "获得 20 免费 OP/秒",
    "boosteeeeeeeee": "提升升升升升升",
    "Boosters boost Dynamic gain if the Ordinal Base is less than 6": "如果 序数基数 小于 6，助推器会提升动态增益",
    "Breaking the Speed Limit": "",
    "Boosters Boost Tier 1 and 2 automation": "助推器促进第 1 层和第 2 层自动化",
    "Breaking the Speed Limit": "突破速度限制（",
    "BuyMax AutoClickers [F]": "购买最大 自动点击器 [F]",
    "Challenges": "挑战",
    "Challenge Completions provide free levels of Repeatable Upgrade 1": "挑战完成提供免费级别的可重复升级 1",
    "Base 2: Only 30 Years Away!": "基数 2：只有 30 年了！",
    "Boost OP gain by 5x": "OP 增益提升 5x",
    "Dynamic": "动态",
    "Download your Save": "下载你的存档文件",
    "Dynamic boosts AutoBuyers at a reduced rate": "动态 以较低的速度提升 自动购买器",
    "Dynamic is finally useful!": "动态终于有用了！",
    "Electric Shuffle": "电动洗牌",
    "Enjoy!": "享受！",
    "Escape the Challenge Early": "尽早逃脱挑战",
    "Even a Child Could Do This": "即使是孩子也能做到这一点",
    "Export your Save": "导出存档",
    "Factor Shifts don't reduce the base": "因子转换不会降低基数",
    "Factorial Cog": "阶乘 Cog",
    "Change Max Ordinal Display Length": "更改最大序数显示长度",
    "Consider joining": "考虑加入",
    "Decrementy my beloved": "减少我心爱的人",
    "Delete your Save": "删除存档",
    "Descending into the Depths": "下降到深处",
    "Dynamic divides AutoClicker speed, and each Booster Upgrade bought and completion of this Challenge multiplies Dynamic Gain and Cap by 5": "动态 除以 自动点击器 速度，每次购买 助推器升级 和完成此挑战都会将 动态增益 和 上限 乘以 5",
    "Dynamic Gain is multiplied by your C5 completions in C1-C4": "动态增益乘以您在 C1-C4 中完成的 C5",
    "Each Factor's effect is doubled": "每个因子的效果翻倍",
    "Electric Boogaloo": "电动波加洛",
    "Gain 10x OP at Ordinal Base 5 or higher": "在序数基数 5 或更高时获得 10 倍 OP",
    "Goal: ψ(Ω)": "目标：ψ(Ω)",
    "is required to Markup": "是必须的对于标记",
    "mall Auto": "商场自动",
    "not Succc Auto": "不是后继者自动",
    "the Discord": "Discord",
    "yes mall Auto": "是商场自动",
    "Boost Twenty Times": "提升 20 次",
    "Boost Ten Times": "提升 10 次",
    "Boost Five Times": "提升 5 次",
    "Boost Once": "提升 1 次",
    "Complete all Challenges": "完成所有挑战",
    "Costs 100.00 Ordinal Powers": "成本 100.00 序数力量",
    "Purchase a level of Rebuyable Upgrade 1": "购买一个可重复购买升级 1 等级",
    "Sacrifice Incrementy for Charge": "牺牲增量换取充能",
    "Sacrifice Incrementy for Charge 12 times": "牺牲增量换取充能 12 次",
    "Sacrifice Incrementy for Charge 4 times": "牺牲增量换取充能 4 次",
    "Reach Ψ(Ω)": "达到 Ψ(Ω)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Toggle the Factor Shift confirmation ": "切换 因子转换 确认 ",
    "Toggle the Factor Shift Confirmation ": "切换 因子转换 确认 ",
    "Toggle the Factor Boost confirmation": "切换 因子提升 确认 ",
    "Toggle the Factor Boost Confirmation": "切换 因子提升 确认 ",
    "Toggle the Booster Refund confirmation": "切换 助推器退款 确认 ",
    "Toggle the Booster Refund Confirmation": "切换 助推器退款 确认 ",
    "Toggle the Charge Refund confirmation": "切换 充能退款 确认 ",
    "Toggle the Charge Refund Confirmation": "切换 充能退款 确认 ",
    "Toggle the Challenge confirmation": "切换 挑战 确认 ",
    "Toggle the Challenge Confirmation": "切换 挑战 确认 ",
    "Toggle the Challenge Completion Popup": "切换 挑战完成 弹窗 ",
    "You are in Challenge ": "你在挑战 ",
    "You've loaded into Ordinal PRINGLES v": "您已成功加载 序数 PRINGLES v",
    "Your Challenges are multiplying AutoBuyer speed by a total of ": "您的挑战是将 AutoBuyer 速度总计乘以 ",
    "All previous Challenges at once EXCEPT Challenge ": "一次完成所有先前的挑战，除了挑战 ",
    "Markup AutoBuyer: ": "标记自动购买器：",
    "Max All AutoBuyer: ": "最大全部自动购买器：",
    "Triple Dynamic Gain ": "三重动态增益 ",
    "Your Factors are multiplying AutoClicker speed by a total of ": "您的因子将 自动点击器 速度总计乘以 ",
    "Perform a Factor Boost": "进行因子提升 ",
    "Your Dynamic Factor is multiplying AutoClickers by ": "您的动态因子是将 自动点击器 乘以 ",
    "Completions: ": "完成：",
    "Dynamic Factor boosts Incrementy gain ": "动态因子提升增量增益 ",
    "Double Incrementy Gain ": "双倍增量增益 ",
    "Complete Challenge ": "完成挑战 ",
    "Reach ω": "达到 ω",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " is required to Markup...": " 需要的标记...",
    "[ON]": "[开]",
    "[OFF]": "[关]",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Your Dynamic Factor is (.+). It caps at (.+)$/, '您的动态因子是 $1。 上限为 $2'],
    [/^Your (.+) Successor Autoclickers click the Successor button (.+) times\/second$/, '您的 $1 个继任者自动点击器每秒点击继任者按钮 $2 次数'],
    [/^You have (.+) Ordinal Powers$/, '你有 $1 序数力量'],
    [/^You have (.+) Incrementy (.+), multiplying AutoBuyer speed by (.+)$/, '您有 $1 增量 $2，将 自动购买者 速度乘以 $3'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Your (.+) Maximize Autoclickers click the Maximize button 0 times\/second$/, '您的 0 个最大化自动点击器每秒点击最大化按钮 $2 次'],
    [/^It increases by (.+)\/s, and caps at (.+)$/, '它以 $1/秒 的速度增加，上限为 $2'],
    [/^Sacrifice (.+) Incrementy for (.+) Charge$/, '牺牲 $1 增量换取 $2 次充能'],
    [/^Reward: Dynamic Factor boosts Tier (.+) Automation at (.+) power$/, '奖励：动态因子以 $2 的效率提升 层级 $1 自动化'],
    [/^You have (.+) Boosters \((.+) total\)$/, '您有 $1 助推器（共 $2 次）'],
    [/^You have (.+) Charge \((.+) total\)$/, '您有 $1 充能（共 $2 次）'],
    [/^Your Max All AutoBuyer is clicking the Max All button (.+) times\/second, but only if you can\'t Factor Shift$/, '你的 最大全部自动购买器 每秒点击 最大全部 按钮 $1 次，但前提是你不能 因子转移'],
    [/^Your Markup AutoBuyer is clicking the Markup button (.+) times\/second, but only if you\'re past Ψ\(Ω\)$/, '您的标记自动购买器点击标记按钮 $1 次/秒，但前提是您超过了 Ψ(Ω)'],
    [/^Reward: Factor (.+) boosts Tier (.+) Automation at (.+) power$/, '奖励：因子 $1 以 $3 的功率提升 层级 $2 自动化'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.]+)e([\d\.,]+) Incrementy$/, '$1e$2 增量'],
    [/^([\d\.,]+) Boosters$/, '$1 助推器'],
    [/^([\d\.,]+) Incrementy$/, '$1 增量'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Purchase Factor ([\d\.,]+)$/, '购买因子 $1'],
    [/^Purchase Incrementy Upgrade ([\d\.,]+)$/, '购买 增量 升级 $1'],
    [/^Reach a Dynamic Factor of ([\d\.,]+)$/, '达到动态因子 $1'],
    [/^Reach a value of ([\d\.,]+)$/, '达到数值 $1'],
    [/^Reach Base ([\d\.,]+)$/, '达到基数 $1'],
    [/^Factor ([\d\.,]+)$/, '因子 $1'],
    [/^Challenge ([\d\.,]+)$/, '挑战 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Goal: (.+) OP$/, '目标：$1 OP'],
    [/^Goal: ([\d\.]+)e([\d\.,]+)$/, '成本：$1e$2'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Currently: (.+)x$/, '当前：$1x'],
    [/^Requires: (.+) Boosters$/, '要求：$1 助推器'],
    [/^Requires: (.+) Ordinal Powers$/, '要求：$1 序数力量'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);