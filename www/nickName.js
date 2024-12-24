/**
 * 生成类似“酷酷的疼”或“暴走到橘子”这样的名字
 * @returns {string} 生成的有趣名字
 */
function generateCoolName() {
    // 形容词/副词部分
    const adjectives = [
        '酷酷的', '暴走到', '疯狂的', '闪亮的', '飞跃的', '神秘的', '迷幻的', '热血的', '神奇的', '炫酷的',
        '梦幻的', '闪电般的', '电力十足的', '极限的', '华丽的', '不可思议的', '极致的', '超能的', '疯狂的'
    ];

    // 名词/抽象概念部分
    const nouns = [
        '疼', '橘子', '星空', '未来', '风暴', '闪电', '蓝天', '月光', '火焰', '幽灵', '浪潮', '旋律', '破晓',
        '梦想', '奇迹', '极光', '火花', '能量', '深渊', '波动', '雷霆'
    ];

    // 随机选择形容词和名词
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    // 组合并返回名字
    return `${adjective}${noun}`;
}

function getNickName() {
    const localName = localStorage.getItem('nickName');
    if (localName) {
        console.log("[debug]localName:", localName)
        return localName;
    }
    const nickName = generateCoolName();
    localStorage.setItem('nickName', nickName);
    console.log("[debug]nickName:", nickName)
    return nickName;
}