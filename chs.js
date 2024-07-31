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

    // to do: index(325-383)
    //#region 主界面及序数等
    'Submit': '提交',
    'Cancel': '取消',
    'Welcome Back!': '欢迎回来！',
    'You\'ve loaded into Ordinal PRINGLES v0.3.3: The World\'s Purest Pringle\nEnjoy!': '目前序数品客的版本为v0.3.3：世界上最纯正的品客。享受游戏吧！',
    'Thanks!': '谢谢！',
    'Ordinals': '序数',
    'Markup': '增序',
    'Boosters': '提升器',
    'Collapse': '坍缩',
    'Achievements': '成就',
    'Settings': '设置',
    'Increase Successor by 1 (S': '使后继数增加1(S',
    'Maximize Ordinal (M': '最大化序数(M',
    //#endregion
    //#region 增序
    'Factors': '因子',
    'Base 2 is required to go further...': '想要前进，您需要底数2……',
    'Perform a Factor Shift': '因子变换',
    'Perform a Factor Shift (H': '因子变换(H',
    'Requires: ?????': '需：?????',
    'AutoClickers': '自动点击器',
    'Successor AutoClicker': '后继数自动点击器',
    'Maximize AutoClicker': '最大化序数自动点击器',
    'LOCKED': '未解锁',
    '': '',
    'Dynamic': '动态',
    'Max All Factors [F]': '最大化所有因子[F]',
    'BuyMax AutoClickers [F]': '最大化购买自动点击器[F]',
    //#endregion
    //#region 提升器
    'Upgrades': '升级',
    'AutoBuyers': '自动购买器',
    'Challenges': '挑战',
    'Incrementy': '增量',
    'Hierarchies': '层级',
    'Overflow': '溢出',
    'Are you sure?': '您确定吗？',
    'This will reset your Booster Upgrades and return spent Boosters, but it will trigger a Booster Reset!': '这将重置您的提升器升级，返还所有提升器，但也将触发提升器重置！',
    'Go back!': '反悔取消',
    'Go ahead.': '确认继续',
    'Refund your Booster Upgrades': '重置提升器升级',
    'This will reset your Charged Booster Upgrades and return spent Charge, but it will force you to exit your Challenge!': '这将重置您的提升器升级电荷，返还所有电荷，但也将强制您退出现在的挑战！',
    'Refund your Charged Booster Upgrades': '重置提升器升级电荷',
    '': '',
    '': '',
    '': '',
    'Unlock Challenges': '解锁挑战',
    'Requires: 6 Boosters': '需：6提升器',
    '': '',
    '': '',
    '': '',
    'Unlock Incrementy': '解锁增量',
    'Requires: 91 Boosters': '需：91提升器',
    '': '',
    '': '',
    '': '',
    'Unlock Hierarchies': '解锁层级',
    'Requires: 325 Boosters': '需：325提升器',
    '': '',
    '': '',
    '': '',
    'Unlock Overflow': '解锁溢出',
    'Requires: 465 Boosters': '需：465提升器',
    '': '',
    '': '',
    '': '',
    'Unlock Singularity, unlock Baselessness, and keep all forms of Charge on Collapse': '解锁奇点，解锁无基数，坍缩时保留所有电荷',
    'Requires: 12246 Boosters': '需：12246提升器',
    'Click a purchased Upgrade to Supercharge it!': '点击已购买的升级可以使用电荷来强化它！',
    'The Unlockables Column does not consume Boosters': '“解锁”列的升级不需要花费提升器购买',
    'Escape the Challenge Early': '提前退出挑战',
    'The first row of upgrades are re-buyable.': '第一行升级可以重复购买。',
    'Your FGH Ordinal is': '您的快速增长层级序数为',
    'Your SGH Ordinal is': '您的慢速增长层级序数为',
    'Both Hierarchies are Maximized instantly. Their Successor gains are based on Incrementy Amount and AutoBuyer speed respectively.': '两种层级的序数都会直接最大化。它们的后继数增加速度分别与增量和自动购买器速度的数值有关。',
    'Multiplying the Challenge Boost to AutoBuyers by ': '使挑战对自动购买器的加成变为',
    'Multiplying Passive OP gain by ': '使序数幂的自动获取速度变为',
    'based on your total OP multiplier': '基于总序数幂倍率',
    'Dividing Decrementy Gain by ': '使减量获取速度',
    'Multiplying Decrementy Gain by ': '使减量获取速度变为',
    'Multiplying Hierarchy Successor speed by ': '使层级后继数增加速度变为',
    'Multiplying ALL Booster Power effects by ': '使所有提升器之力相关效果变为',
    'Dividing Darkness Upgrade cost exponents by ': '使黑暗升级花费的指数',
    'Multiplying the effect of the first ℵ': '使第一个ℵ',
    ' Upgrade by ': '升级的效果变为',
    'Multiplying the effect of the third bottom-row Booster Upgrade by ': '使第三个底端行的提升器升级效果变为',
    '"Excess Boosters" means all Boosters above 435': '“超额提升器”指超过435个以后的所有提升器',
    '"Excess Charge" means all Charge above 12': '“超额电荷”指超过12个以后的所有电荷',
    //#endregion
    //#region 坍缩
    'Alephs': '阿列夫升级',
    'Cardinal Upgrades': '基数升级',
    'Sluggishness': '惯性',
    'Collapse all Cardinals into random Alephs': '使所有基数随机坍缩为阿列夫升级',
    'You have ': '您拥有',
    'You can ': '进行',
    ' if you reach ': '需要 到达',
    ' or at any point after Factor Boost 34.': ' 或 不低于34次因子提升。',
    'You must reach Factor Boost 34 to gain any Cardinals.': '您至少需要34次因子提升才可以获得基数。',
    'Each Sluggish Milestone gives you (3*previously completed SMs) free Cardinals!': '每个惯性里程碑还可以让您获得(3×之前完成的惯性里程碑)数量的免费基数！',
    'Collapse in the required Factor Boosts or less to complete Sluggish Milestones': '在不高于相应次数因子提升的前提下进行坍缩，将可以获得相应的惯性里程碑',
    'Enter the Darkness': '进入黑暗',
    'Escape': '脱离',
    '': '',
    '': '',
    'Entering or exiting will perform a Collapse reset!': '进入或退出都将进行一次坍缩重置！',
    'Nope!': '别！',
    'Yep!': '好！',
    '': '',
    '': '',
    //#endregion
    //#region 设置
    'Consider joining ': '如果感兴趣，可以加入我们的',
    'the Discord': 'Discord频道',
    'Game': '游戏相关',
    'Confirmations': '确认弹窗',
    'UI': '游戏界面',
    'Saving': '存档相关',
    'Advanced': '高级设置',
    'Change Max Ordinal Display Length ': '调整序数最大显示长度',
    'Input New Length': '输入新的长度',
    '': '',
    'Change the Ordinal Display Mode ': '切换序数显示模式',
    '': '',
    'Change the Ordinal Color Mode ': '切换序数颜色模式',
    '': '',
    '': '',
    'Changing any of these from their default may cause lag!': '更改默认值可能会造成游戏卡顿！',
    '': '',
    'Change Millisecond Interval ': '切换毫秒时间间隔',
    'Input New Millisecond Interval (20≤x≤1000': '输入新的毫秒时间间隔(20≤x≤1000',
    'Manual Save': '手动存档',
    'Error': '错误',
    'Dang.': '该死。',
    'Export your Save': '导出存档',
    'Export Successful': '导出成功',
    'Your Data has been copied to the clipboard!': '存档数据已复制到剪贴板！',
    'Download your Save': '下载存档',
    'Success!': '下载完毕！',
    'Your save has been successfully downloaded!': '存档已下载！',
    'Import your Save': '导入存档',
    'Import SaveData': '导入存档代码',
    'Secret!': '发现隐藏秘密！',
    'You have unlocked the secret ': '您解锁了隐藏的',
    ' Ordinal Display! You can now enable or disable it in Settings :) If you\'re curious what those gwas mean check out the Info Box next to the ': '序数显示模式！您可以在设置中开启或关闭它了 :) 如果您想要知道这些表情的含义，可以查看',
    ' Display Setting!': '显示设置旁的按钮！',
    '!': '！',
    'Here\'s what those gwas mean!': '以下为表情的含义！',
    ' (aka BHO) = ': ' (及BHO) = ',
    'Thanks for the help!': '感谢！',
    'Failure': '失败',
    'No data found.': '您未输入任何内容。',
    'Oops.': '哎哟。',
    'Beta Save detected!': '检测到测试版存档！',
    'You tried to load a Beta Save into the main version. This is not allowed, sorry :(': '您尝试导入的是测试版存档。抱歉，它无法导入到正式版游戏中:(',
    'Dang it!': '该死！',
    'Delete your Save': '删除存档',
    'Are you absolutely sure you want to do this?': '您确定要这么做吗？',
    'This will export your save (just in case) but delete your save from LocalStorage.': '这将导出存档(以防万一)，然后删除您的本地存储中的游戏存档。',
    'No Way!': '不要了！',
    'Yes, I understand the consequences.': '继续，我明白。',
    'You\'re playing Ordinal Pringles v0.3.3: The World\'s Purest Pringle': '目前序数品客的版本为v0.3.3：世界上最纯正的品客',
    ' Last Update: April 2nd, 2024': '本游戏由by22dgb汉化，最后更新时间：2024年4月2日',
    //#endregion
    //#region 保持原样
    '...': '...',
    '???': '???',
    ' (3': ' (3',
    ' (4': ' (4',
    ' (5': ' (5',
    ' (6': ' (6',
    ' (7': ' (7',
    ' (8': ' (8',
    ' (9': ' (9',
    ' (10': ' (10',
    'Welcome back!': 'Welcome back!',
    'New things have been added since last time': 'New things have been added since last time',
    'No!': 'No!',
    'Yes!': 'Yes!',
    'Decrementy my beloved': 'Decrementy my beloved',
    'You have Chips. In your house.': 'You have Chips. In your house.',
    'Factorial Cog': 'Factorial Cog',
    'Hello Cat': 'Hello Cat',
    'Hello MEOW': 'Hello MEOW',
    'Shifty': 'Shifty',
    'boosteeeeeeeee': 'boosteeeeeeeee',
    'boosteeeeeeeee times': 'boosteeeeeeeee times',
    'Factorial! Cog': 'Factorial! Cog',
    'Your Max All AutoBuyer is clicking the Max All button 0 times/second, but only if you can\'t Factor Shift': 'Your Max All AutoBuyer is clicking the Max All button 0 times/second, but only if you can\'t Factor Shift',
    'Your Markup AutoBuyer is clicking the Markup button 0 times/second, but only if you\'re past Ψ(Ω': 'Your Markup AutoBuyer is clicking the Markup button 0 times/second, but only if you\'re past Ψ(Ω',
    'mall Auto': 'mall Auto',
    'yes mall Auto': 'yes mall Auto',
    'fish Auto': 'fish Auto',
    'salmon\'nt Auto': 'salmon\'nt Auto',
    'salmon\'t Auto': 'salmon\'t Auto',
    'Hello Dog': 'Hello Dog',
    'Jonas was here': 'Jonas was here',
    'SPEEDY QUICK': 'SPEEDY QUICK',
    'Info': 'Info',
    'slow not QUICK': 'slow not QUICK',
    'Information': 'Information',
    'boosteeeeeeeee TWO': 'boosteeeeeeeee TWO',
    'boosteeeeeeeee [POWER]': 'boosteeeeeeeee [POWER]',
    'boosteeeeeeeee TWO TWO': 'boosteeeeeeeee TWO TWO',
    'boosteeeeeeeee [POWER] TWO': 'boosteeeeeeeee [POWER] TWO',
    'Booster Power is': 'Booster Power is',
    'Overcharge is': 'Overcharge is',
    'You have Collapsed Chips. In your house.': 'You have Collapsed Chips. In your house.',
    'Total ℵ': 'Total ℵ',
    ' :': ' :',
    'Toggle Offline Progress': 'Toggle Offline Progress',
    'aaa': 'aaa',
    ' = ': ' = ',
    'Version': 'Version',
    //#endregion

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    ": ": "：",
    "\n": "",
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
    "  ": "",
    "Save failed.": "存档失败。",
    "Save export failed.": "存档导出失败。",
    "Save download failed.": "存档下载失败。",
    "Save import failed.": "导入存档失败。",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "：",
    "： ": "：",
    ")": ")",
    "%": "%",
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
    "  ": "",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?(e[+\-]?\d?\.?\d+)?(e\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^(.*)[\u4E00-\u9FFF]+(.*)$/, //不抓取内容
    /^(.*)φ(.*)$/, //不抓取内容
    /^(.*)@(.*)$/, //不抓取内容
    /^(.*)\+ω(.*)$/, //不抓取内容
    /^\d[ω\d\+]+\.\.\.$/, //不抓取内容
    /^ \(\d{1,2}\)=(.*)$/, //不抓取内容
    /^\d\,?(\d\,)*\+?\d(\,\.\.\.)?$/, //不抓取内容
    /^\d\)(\(\d\))*(\(\d)?(\.\.\.)?$/, //不抓取内容
    /^\d\,\d\)(\(\d\,\d\))*(\(\d\,\d)?(\.\.\.)?$/, //不抓取内容
    /^\d\,\d\,\d\)(\(\d\,\d\,\d\))*(\(\d\,\d\,\d)?(\.\.\.)?$/, //不抓取内容
    /^(\.\.\.)?(\))+( \(I)?$/, //不抓取内容
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
]);