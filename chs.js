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
    "The Ordinal Base boosts Factors (higher is better)": "序数基数提升因子（越高越好）",
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
    "Enjoy!": "尽情享受吧！",
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
    "No Way!": "没门！",
    "Performing a Factor Shift will reduce your Base by 1 and unlock a new Factor, but it will reset your Ordinal, Ordinal Powers, Factors, and Automation!": "执行因子转换会将您的基数减少 1 并解锁一个新因子，但它会重置您的序数、序数力量、因子和自动化！",
    "Yes, lets do this.": "是的，让我们这样做。",
    "Export Successful": "导出成功",
    "Import SaveData": "导入存档数据",
    "Input New Length": "输入新的长度",
    "Success!": "成功！",
    "Your Data has been copied to the clipboard!": "您的存档数据已复制到剪贴板！",
    "Your save has been successfully downloaded!": "您的存档文件已成功下载！",
    "Failure": "故障",
    "Dang.": "该死。",
    "Insufficient Ordinal": "序数不足",
    "Base 2 is required to go further...": "需要 基数 2 才能走得更远...",
    "Disabled": "已禁用",
    "Insufficient Ordinal Powers": "序数力量不足",
    "Performing a Factor Boost will reset your Ordinal, Ordinal Powers, Factors, Automation, Base, and Dynamic Factor in exchange for some Boosters!": "执行因子提升将重置您的序数、序数力量、因子、自动化、基数和动态因子，以换取一些助推器！",
    "Enabled": "已启用",
    "Go ahead.": "继续。",
    "Go back!": "返回！",
    "This will reset your Booster Upgrades and return spent Boosters, but it will trigger a Booster Reset!": "这将重置您的助推器升级并返还用过的助推器，但它会触发助推器重置！",
    "Requires: ?????": "需要: ?????",
    "It looks like you had a v0.0.5 save that was beyond endgame. If you had any C7 or C8 completions they have been reset, and if you had more than 30 Factor Boosts you have been reset to 30. Also, Factor Boosts beyond 30 now have a greatly increased requirement!": "看起来您的 v0.0.5 存档超出了残局。 如果您完成了任何 C7 或 C8，它们将被重置，如果您的因子提升超过 30，您将重置为 30。此外，超过 30 的因子提升现在的要求大大提高！",
    "(+1.00/s), Dividing Charge Requirement by": "(+1.00/s)，将充电需求除以",
    "(+1.00/s), Multiplying Incrementy Gain by": "(+1.00/s)，将增量增益乘以",
    "(based on your total OP multiplier)": "（基于您的总 OP 乘数）",
    "[UP1] Total Factor Boosts boost Incrementy Gain": "[升级1] 全因子提升提升增量收益",
    "[UP2] Incrementy Multiplies the Dynamic Cap at a reduced rate (does not effect C5)": "[升级2] 增量 以较低的速率乘以动态上限（不影响 C5）",
    "[UP3] Dynamic boosts AutoBuyers at a reduced rate": "[升级3] 动态 以较低的速度提升 自动购买器",
    "[UP4] Challenge Completions provide free levels of Repeatable Upgrade 1": "[升级4] 挑战完成提供免费级别的可重复升级 1",
    "[UP5] Repeatable Upgrade 2 is boosted by Challenge Completions": "[升级5] 可重复升级 2 由挑战完成提升",
    "[UP6] Total Repeatable Upgrade 3 levels boosts Upgrade 3": "[升级6] 总可重复升级 3 等级提升升级 3",
    "Base 2 NOW": "现在基数是 2",
    "Boost Thirty-Three Times": "提升三十三次",
    "Booster Power is": "助推器功率是",
    "Both Hierarchies are Maximized instantly. Their Successor gains are based on Incrementy Amount and AutoBuyer speed respectively.": "两个层次结构都立即最大化。 他们的继任者收益分别基于增量金额和自动购买速度。",
    "Dividing Decrementy Gain by": "将递减增益除以",
    "Hierarchies": "层次结构",
    "Info": "信息",
    "Information": "信息",
    "Multiplying ALL Booster Power effects by": "将所有 Booster Power 效果乘以",
    "Multiplying Hierarchy Successor speed by": "将层次结构后继速度乘以",
    "Multiplying Passive OP gain by": "将被动 OP 增益乘以",
    "Multiplying the Challenge Boost to AutoBuyers by": "将对汽车买家的挑战提升乘以",
    "Nerfed :(": "神经病 :(",
    "Onwards!": "向前！",
    "Overcharge is": "过载是",
    "Overflow": "溢出",
    "Reach a Dynamic Factor of 4e4": "达到 4e4 的动态系数",
    "Reach BHO": "到达BHO",
    "Reward: Dynamic Factor slightly boosts Tier 2 Automation": "奖励：动态因子略微提升了 层级 2 自动化",
    "slow not QUICK": "慢不快",
    "SPEEDY QUICK": "快速快速",
    "Temporary Delays": "临时延误",
    "The Challenge Boost is Improved": "挑战提升得到改善",
    "The Ultimate Infinity": "终极无限",
    "Toggle Offline Progress": "切换离线进度",
    "Toggle Offline Progress ": "切换离线进度",
    "Toggle the Boost Progress Bar ": "切换提升进度条",
    "Total Charge Boosts AutoBuyers": "总收费提升汽车买家",
    "Unlock Overflow": "解锁溢出",
    "Version": "版本",
    "You exponentially gain Decrementy that divides AutoClicker Speed and you're trapped in Challenge 7": "您以指数方式获得除以 自动点击器 速度的递减，并且您被困在挑战 7 中",
    "You gain Incrementy based on your Ordinal, but only above Ψ(Ω). You cannot gain Incrementy in Challenges.": "您根据序数获得增量，但仅高于 Ψ(Ω)。 您无法在挑战中获得增量。",
    "You gain no Dynamic, keep no OP on Markup, Booster Upgrades increase Factor Shift requirements, Booster Upgrade 1x3 is disabled, and you can only manually click Successor 1000 times per Markup": "你没有获得动力，在标记上没有 OP，助推器升级增加了因子转移要求，助推器升级 1x3 被禁用，并且你只能手动点击每个标记的继任者 1000 次",
    "v0.0.6: The Bachmann-Howard Pringle": "v0.0.6：The Bachmann-Howard Pringle",
    "Your 1.00 Booster Power is": "您的 1.00 助推器力量 是",
    "Your 1.00 Overcharge is": "你的 1.00 过载是",
    "Your FGH Ordinal is": "您的 FGH 序号是",
    "Your SGH Ordinal is": "您的 SGH 序号是",
    "fish Auto": "鱼自动",
    ", multiplying Autobuyers by": ", 将 自动购买器 乘以",
    ", multiplying Autoclickers by": ", 将 自动点击器 乘以",
    ", multiplying Booster Power gain by": ", 将助推器功率增益乘以",
    ", multiplying Cardinal gain by": ", 基数增益乘以",
    ", multiplying Dynamic Cap by": ", 将动态上限乘以",
    ", multiplying Incrementy gain by": ", 乘以增量增益",
    ", multiplying Ordinal Power gain by": ", 乘以序数功率增益",
    ", multiplying the IUP3 effect by": "，将 IUP3 效应乘以",
    ", multiplying the SGH effect by": ", 将 SGH 效应乘以",
    "Alephs": "阿莱夫斯",
    "Booster Upgrade 1x4 boosts Hierarchy Successors": "助推器升级 1x4 提升层级继承者",
    "Booster Upgrade 2x4 boosts Hierarchy Successors": "助推器升级 2x4 提升层级继承者",
    "Cardinal Upgrades": "红衣主教升级",
    "Challenges 1-7 provide greatly reduced boosts when at zero completions": "挑战 1-7 在零完成时提供大大减少的提升",
    "Charge AutoBuyer: Disabled": "Charge AutoBuyer：已禁用",
    "Collapse": "坍塌",
    "Collapse all Cardinals into random Alephs": "将所有 基数 折叠成随机的 Alephs",
    "Collapse for 0.00 Cardinals": "为 0.00 基数而倒塌",
    "Collapse in the required Factor Boosts or less to complete Sluggish Milestones": "崩溃所需的因子提升或更少以完成缓慢的里程碑",
    "Dividing Darkness Upgrade costs by": "将黑暗升级成本除以",
    "Each Sluggish Milestone gives you (3*previously completed SMs) free Cardinals!": "每个 缓慢的里程碑 都会为您提供（3*之前完成的 SM）免费基数！",
    "Enable Negative Charge gain": "启用负电荷增益",
    "Enable Negative Charge Gain": "启用负电荷增益",
    "Enter the Darkness": "进入黑暗",
    "Gain 1% of best Cardinals gained on Collapse every second": "每秒获得 坍缩 获得的最佳 基数 的 1%",
    "if you reach ψΩ": "如果你达到 ψΩ",
    "Incrementy boosts its own gain": "增量会增加自身的收益",
    "Invert the third Booster Power effect": "反转第三个 助推器力量 效果",
    "June 12th, 2023": "2023 年 6 月 12 日",
    "Keep Challenges and Incrementy unlocked through Collapse": "通过 坍缩 解锁挑战和增量",
    "or at any point after Factor Boost 34.": "或 因子提升 34 之后的任何时间。",
    "Ordinal Powers boost AutoBuyers and AutoClickers": "序数力量提高了 自动购买器 和 自动点击器",
    "Reset Negative Charge": "重置负电荷",
    "Reset Sacrifice Charge": "重置牺牲费用",
    "Reset Sacrificed Charge": "重置牺牲的充能",
    "RUP AutoBuyer: Disabled": "RUP 自动购买器：已禁用",
    "Sacrifice 1 Charge": "牺牲 1 充能",
    "Sacrifice Charge": "牺牲冲锋",
    "Sacrificed Charge is dividing the Negative Charge effects by": "牺牲电荷将负电荷效应除以",
    "salmon'nt Auto": "鲑鱼汽车",
    "Sluggish Milestones": "缓慢的里程碑",
    "Square AutoClicker speeds": "平方 自动点击器 速度",
    "Toggle the ability to Bulk Boost ": "切换批量提升的能力",
    "Total ℵ": "总计 ℵ",
    "Uncap the Ordinal, gain 1% of Ordinal Powers gained on Markup every second and you always have one free Maximize and Successor AutoClicker": "不限制序数，每秒获得 1% 的 标记 获得的 序数力量，你总是有一个免费的 最大化 和 继任者自动点击器",
    "Unlock a 3rd Overcharge Effect and boost Overcharge's 1st Effect": "解锁第三个过载效果并提升过载的第一个效果",
    "Unlock an AutoBuyer for Charge, an AutoBuyer for RUP1-3, and Unlock Darkness": "为 充能 解锁一个 自动购买器，为 RUP1-3 解锁一个 自动购买器，并解锁 黑暗",
    "Unspent Cardinals boost Alephs": "未使用的基数提升 Alephs",
    "v0.1: Pringle Collapsing Functions": "v0.1：品客坍 折叠功能",
    "You can": "你可以",
    "You exponentially gain Decrementy that divides AutoClicker Speed (resets on Markup), keep no OP on Markup, and you're trapped in Challenge 7": "您以指数方式获得除以 自动点击器 速度的递减（在标记上重置），在标记上不保留 OP，并且您陷入了挑战 7",
    "You gain no Dynamic, Booster Upgrades increase Factor Shift requirements, Booster Upgrade 1x3 is disabled, and you can only manually click Successor 1000 times per Markup": "您不会获得任何动态，助推器升级会增加因子转移要求，助推器升级 1x3 被禁用，并且您只能手动单击每个标记的继任者 1000 次",
    "You have Collapsed Chips. In your house.": "你有折叠筹码。 在你的房子。",
    "You have zero Negative Charge [+x/s], capping at zero": "您的负电荷 [+x/s] 为零，上限为零",
    "You must reach Factor Boost 34 to gain any Cardinals.": "您必须达到 因子提升 34 才能获得基数。",
    "Your": "你的",
    "Your Charge AutoBuyer is clicking the Sacrifice for Charge button 1 times/second": "您的 充能自动购买器 每秒点击 1 次牺牲换取 充能 按钮",
    "Your Negative Charge divides Incrementy by the log700 of foxes": "您的负电荷将增量除以狐狸的 log700",
    "Your RUP AutoBuyer is clicking the three RUP buttons 1 times/second, but only if you can't afford a Charge": "你的 RUP 自动购买器 每秒点击三个 RUP 按钮 1 次，但前提是你付不起费用",
    ", but only if you can't afford a Charge": "，但前提是您无力承担费用",
    ", but only if you can't Factor Shift": "，但前提是你不能因式转换",
    ", but only if you're past Ψ(Ω)": "，但前提是您超过了 Ψ(Ω)",
    "[UP2] Incrementy Multiplies the Dynamic Cap at a reduced rate (does not affect C5)": "[UP2] 增量以降低的速率乘以动态上限（不影响 C5）",
    "${format(alephEffect(i))}x": "${格式(alephEffect(i))}x",
    "0.1.2: The Sluggishly Collapsing Pringle": "0.1.2：缓慢崩溃的普林格尔",
    "1.00 times/second": "1.00次/秒",
    "1.00e109 Decrementy": "1.00e109 递减",
    "1.00e23 Decrementy": "1.00e23 递减",
    "1.00e36 Decrementy": "1.00e36 递减",
    "2 times": "2次",
    "3.00e9 Cardinals": "3.00e9 基数",
    "4.00e13 Cardinals": "4.00e13 基数",
    "Boost OP gain by 500x": "将 OP 增益提高 500 倍",
    "Boosted": "提升",
    "boosteeeeeeeee times": "升压时代",
    "Boosters boost Dynamic Gain": "助推器可提高动态增益",
    "Boosters Boost Tier 1 and 2 Automation at a much higher rate": "助推器以更高的速度提升 1 级和 2 级自动化",
    "Charge AutoBuyer": "向自动购买器收费",
    "Dividing Darkness Upgrade cost exponents by": "将黑暗升级成本指数除以",
    "Dynamic Gain is multiplied by your C5 completions": "动态增益乘以您的 C5 完成度",
    "Each Drain boosts the effects of the first Hierarchy Upgrade of each column": "每个耗尽都会提升每列的第一个层次升级的效果",
    "Each Factor's effect is Quadrupled": "每个因子的效果是四倍",
    "Each SGH Buyable Purchased boosts the SGH Effect Exponent": "购买的每个 SGH 可购买物品都会提高 SGH 效应指数",
    "effects": "效果",
    "Every 10 Darkness Upgrades purchased reduces Hierarchy Bases by 1": "每购买 10 个黑暗升级，等级基础就会减少 1",
    "Gain 100x OP at Ordinal Base 4 or higher": "在序数基数 4 或更高时获得 100 倍 OP",
    "Gain 4 free levels of each Factor": "每个因子获得 4 个免费级别",
    "Gain Free OP/s based on your Base": "根据您的基础获得免费 OP",
    "Hierarchy Buyable AutoBuyer": "可购买的层次结构 自动购买器",
    "Hierarchy Buyable AutoBuyer: Disabled": "可购买的层次结构 自动购买器：已禁用",
    "If Booster Upgrades 2x1 and 3x1 are Supercharged their effects multiply each other": "如果助推器升级 2x1 和 3x1 被增压，它们的效果会相互倍增",
    "is clicking the Hierarchy Buyable buttons": "正在单击“层次结构可购买”按钮",
    "is clicking the Markup button": "正在单击“标记”按钮",
    "is clicking the Max All button": "单击“全部最大化”按钮",
    "is clicking the Sacrifice for Charge button": "正在点击“牺牲换取充电”按钮",
    "is clicking the three RUP buttons": "单击三个 RUP 按钮",
    "Manual Save": "手动保存",
    "Markup AutoBuyer": "标记自动购买器",
    "Max All AutoBuyer": "最大所有自动购买器",
    "Perform a Factor Shift (H)": "执行因子转换 (H)",
    "prinlge mall Auto": "王子商城汽车",
    "PRONGLE yes mall Auto": "PROONGLE是商城汽车",
    "Purchase the first FGH Upgrade": "购买第一个 FGH 升级",
    "Purchase the first SGH Upgrade": "购买第一个 SGH 升级",
    "RUP AutoBuyer": "RUP 自动购买器",
    "salmon't Auto": "鲑鱼汽车",
    "The AutoBuyers are boosted by Factor 7 (does not stack with Upgrade 2x1)": "自动购买器 增加了 7 倍（不与升级 2x1 叠加）",
    "The AutoBuyers are boosted by Factor 7 (does not stack with Upgrade 3x1)": "自动购买器 增加了 7 倍（不与升级 3x1 叠加）",
    "The Base boosts Factors but lower Base is better": "基数提升因子，但基数越低越好",
    "The BUP 2x1 and 3x1 effect slightly adds to the Decrementy gain exponent": "BUP 2x1 和 3x1 效果略微增加了递减增益指数",
    "The final Hierarchy Buyable of each column's effect adds to the ℵ": "每列效果的最终 层次结构可购买 添加到 ℵ",
    "The Ordinal Base is always 4 in Challenges": "挑战中的序数基数始终为 4",
    "The Total ℵ effect applies to Incrementy gain": "Total ℵ 效果适用于增量增益",
    "Unlock 4 new Hierarchy Upgrades, keep Hierarchies unlocked through Collapse, and keep Challenge completions on Collapse": "解锁 4 个新的层次结构升级，通过折叠保持层次结构解锁，并在折叠时保持挑战完成",
    "Unlock an AutoBuyer for Repeatable Hierarchy Upgrades, AutoPrestigers for Factor Shift and Factor Boost, keep UP1-6 and Darkness Upgrades on Collapse, and unlock a new row of Booster Upgrades": "解锁可重复等级升级的 自动购买器、用于因子转换和因子提升的 自动声望器、保持 UP1-6 和黑暗升级崩溃，并解锁新的一排助推器升级",
    "Unlock Singularity": "解锁奇点",
    "v0.1.2: The Sluggishly Collapsing Pringle": "v0.1.2：缓慢塌陷的 品客",
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
    "You've loaded into Ordinal PRINGLES v": "您已成功加载 序数品客 v",
    "Your Challenges are multiplying AutoBuyer speed by a total of ": "您的挑战是将 自动购买器 速度总计乘以 ",
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
    "Reach a value of ": "达到数值 ",
    "Requires: Graham's Number (": "需要：格雷厄姆数（",
    "Markup and gain ψ": "标记和增益 ψ",
    "Last Update: ": "最近更新：",
    "You're playing Ordinal Pringles ": "您正在玩 序数品客 ",
    "Boost FGH and SGH gain based on Challenge Completions ": "提升 FGH 和 SGH 增益 基于 完成挑战 ",
    "Boost FGH and SGH gain based on Total Boosters ": "提升 FGH 和 SGH 增益 基于 总计助推器",
    "Boost FGH effect based on Challenge Completions ": "根据挑战完成情况提升 FGH 效果 ",
    "Boost Incrementy Upgrade 3's effect based on FGH ": "提升 增量升级 3 的效果基于 FGH ",
    "Boost Incrementy Upgrade 3's effect based on SGH ": "提升 增量升级 3 的效果基于 SGH ",
    "Boost SGH effect based on Challenge Completions ": "根据挑战完成情况提升 SGH 效果 ",
    "[RUP1] Double Incrementy Gain ": "[RUP1] 双增量增益 ",
    "[RUP2] Triple Dynamic Gain ": "[RUP2] 三重动态增益 ",
    "[RUP3] Dynamic Factor boosts Incrementy gain ": "[RUP3] 动态因子提升增量增益 ",
    "[UP-1] Triple Dynamic Gain ": "[UP-1] 三重动态增益 ",
    "[UP-2] Double Incrementy Gain ": "[UP-2] 双增量增益 ",
    "[UP0] Dynamic Factor boosts Incrementy gain ": "[升级0] 动态因子提升增量增益 ",
    "\"Excess Boosters\" means all Boosters above ": "\“过剩助推器”是指所有助推器里超过的 ",
    "\"Excess Charge\" means all Charge above ": "\"过剩充能\"是指所有充能里超过的 ",
    "Multiply AutoBuyer speed by ": "将 自动购买器 速度乘以 ",
    "Currently: +": "当前: +",
    "Double Dynamic Gain": "双倍动态增益",
    "Drain this Cardinal Upgrade": "耗尽此基数升级",
    "Add 0.1 to both Hierarchy Effect exponents": "将 0.1 添加到两个层次效应指数",
    "Double Dynamic Cap": "双倍动态上限",
    "Multiply both Hierarchy Effect exponents by ": "将两个层次效应指数乘以 ",
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
    " is required to Markup...": " 达到后才能进行标记...",
    "[ON]": "[开]",
    "[OFF]": "[关]",
    " [POWER]": " [力量]",
    " [POWER] TWO": " [力量] 2",
    " TWO TWO": " 2 2",
    " TWO": " 2",
    "Pringle Collapsing Functions": "品客坍缩功能",
    " total)": " 总计)",
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
    /^\(([\d\.]+)\)\=([\d\.]+)$/,
    /^\(([\d\.]+)\)\=([\d\.,]+)$/,
    /^\(([\d\.]+)\)\=([\d\.]+)e([\d\.,]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^奖励(.+)$/,
    /^目标(.+)$/,
    /^挑战(.+)$/,
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
    /^ω([\d\.,]+)\+([\d\.,]+)$/,
    /^([\d\.,]+)\+([\d\.,]+)$/,
    /^([\d\.,]+)\+ω([\d\.,]+)$/,
    /^([\d\.,]+)\+ω([\d\.,]+)\+([\d\.,]+)$/,
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
    [/^Booster Upgrade (.+) boosts Hierarchies while Supercharged$/, '助推器升级 $1 在超级充能时提升层次体系'],
    [/^You have (.+) Excess Boosters, producing$/, '你有 $1 过剩的助推器，正在生产'],
    [/^You have (.+) Excess Charge, producing$/, '你有 $1 过剩的充能，正在生产'],
    [/^Incrementy Upgrade (.+) is Improved$/, '增量升级 $1 已改进'],
    [/^Your Dynamic Factor is (.+). It caps at (.+)$/, '您的动态因子是 $1。 上限为 $2'],
    [/^Your (.+) Successor Autoclickers click the Successor button (.+) times\/second$/, '您的 $1 个继任者自动点击器每秒点击继任者按钮 $2 次数'],
    [/^You have (.+) Cardinals$/, '你有 $1 基数'],
    [/^Your Negative Charge divides Incrementy gain by \/(.+) and Incrementy effect by \/(.+)$/, '您的负电荷将增量增益除以 \/$1，将增量效果除以 \/$2'],
    [/^You have (.+) Negative Charge \[\+(.+)\/s\], which is capped by Incrementy at (.+)$/, '您有 $1 负电荷 \[\+$2\/秒\]，增量上限为 $3'],
    [/^You have (.+) Ordinal Powers$/, '你有 $1 序数力量'],
    [/^You have (.+) Incrementy (.+), multiplying AutoBuyer speed by (.+)$/, '您有 $1 增量 $2，将 自动购买器 速度乘以 $3'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Your (.+) Maximize Autoclickers click the Maximize button (.+) times\/second$/, '您的 $1 个最大化自动点击器每秒点击最大化按钮 $2 次'],
    [/^Markup and gain (.+) Ordinal Powers (.+)$/, '标记并获得 $1 序数力量 $2'],
    [/^Costs (.+) Ordinal Powers$/, '费用 $1 序数力量'],
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
	[/^([\d\.]+) Booster Power\/s$/, '$1 助推器力量\/秒'],
	[/^([\d\.]+) Overcharge\/s$/, '$1 过载\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^Ordinals ([\d\.]+)$/, '序数 $1'],
    [/^([\d\.]+) Factor Boosts$/, '$1 因子提升'],
    [/^([\d\.]+) Negative Charge$/, '$1 负电荷'],
    [/^([\d\.]+) Cardinals$/, '$1 基数'],
    [/^([\d\.]+) Decrementy$/, '$1 递减'],
    [/^([\d\.]+) Total ℵ$/, '$1 总计 ℵ'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.]+)e([\d\.,]+) Incrementy$/, '$1e$2 增量'],
    [/^([\d\.,]+) Boosters$/, '$1 助推器'],
    [/^([\d\.,]+) Incrementy$/, '$1 增量'],
    [/^([\d\.,]+) Cardinals$/, '$1 基数'],
    [/^([\d\.,]+) times$/, '$1 次'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) times\/second$/, '$1 次\/每秒'],
    [/^Purchase Factor ([\d\.,]+)$/, '购买因子 $1'],
    [/^Purchase Incrementy Upgrade ([\d\.,]+)$/, '购买 增量 升级 $1'],
    [/^Reach a Dynamic Factor of ([\d\.,]+)$/, '达到动态因子 $1'],
    [/^Reach Base ([\d\.,]+)$/, '达到基数 $1'],
    [/^Factor ([\d\.,]+) \[([\d\.,]+)\] ([\d\.,]+)x$/, '因子 $1 \[$2\] $3'],
    [/^Factor ([\d\.,]+)$/, '因子 $1'],
    [/^Challenge ([\d\.,]+)$/, '挑战 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Goal: (.+) OP$/, '目标：$1 OP'],
    [/^Goal: ([\d\.]+)e([\d\.,]+)$/, '成本：$1e$2'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: Infinity Ordinal Powers$/, '成本：无限 序数力量'],
    [/^Cost: (.+) Ordinal Powers$/, '成本：$1 序数力量'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Reward: Factor (.+) slightly boosts Tier (.+) Automation$/, '奖励：因子 $1 略微提升了 层级 $2 自动化'],
    [/^Currently: (.+)x$/, '当前：$1x'],
    [/^Requires: (.+) Boosters$/, '要求：$1 助推器'],
    [/^Requires: (.+) Ordinal Powers$/, '要求：$1 序数力量'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);