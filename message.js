/*
 Navicat Premium Data Transfer

 Source Server         : Mongo
 Source Server Type    : MongoDB
 Source Server Version : 40402
 Source Host           : localhost:27017
 Source Schema         : Anima

 Target Server Type    : MongoDB
 Target Server Version : 40402
 File Encoding         : 65001

 Date: 02/01/2021 20:13:34
*/


// ----------------------------
// Collection structure for message
// ----------------------------
db.getCollection("message").drop();
db.createCollection("message");

// ----------------------------
// Documents of message
// ----------------------------
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e8f4"),
    name: "NSAIDs",
    badres: [
        "致羊水不",
        "胃痛",
        "腹泻",
        "头晕",
        "肾损害",
        "呕吐",
        "疼痛",
        "胀气",
        "烧心",
        "恶心",
        "羊水不足",
        "死亡",
        "便秘"
    ],
    disease: [
        "关节炎",
        "感冒",
        "咳嗽",
        "痛经",
        "流感",
        "头痛",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e8f6"),
    name: "酞普兰",
    badres: [
        "焦虑",
        "幻觉",
        "产后出血",
        "出血"
    ],
    disease: [
        "关节炎",
        "产后出血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e8f8"),
    name: "吡非尼酮",
    badres: [
        "肝损伤",
        "死亡",
        "厌食",
        "恶心"
    ],
    disease: [
        "肝炎",
        "黄疸",
        "败血症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e8fa"),
    name: "帕博利珠单抗",
    badres: [
        "心动过速",
        "腹泻",
        "幻觉",
        "头晕",
        "恶心",
        "呕吐",
        "舍格林综合征",
        "昏迷"
    ],
    disease: [
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e8fc"),
    name: "替格瑞洛",
    badres: [
        "CSA",
        "枢性睡眠呼吸暂停",
        "中枢性睡眠呼吸暂停"
    ],
    disease: [
        "型糖尿",
        "中风",
        "定性心"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e8fe"),
    name: "哌拉西林他唑巴坦",
    badres: [
        "低钾血症",
        "粒细胞减少",
        "死亡"
    ],
    disease: [
        "败血症",
        "肺炎",
        "流感",
        "肾炎",
        "膀胱炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e900"),
    name: "苯佐卡因",
    badres: [
        "无力",
        "高铁血红蛋白血症",
        "疼痛",
        "精神错乱",
        "血液病",
        "呼吸困难"
    ],
    disease: [
        "头痛",
        "牙痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e902"),
    name: "阿替利珠单抗联合紫杉醇",
    badres: [
        "死亡"
    ],
    disease: [
        "乳腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e904"),
    name: "地舒单抗",
    badres: [
        "多处骨折",
        "多发性椎体骨折",
        "外耳道骨坏死",
        "椎体骨折"
    ],
    disease: [
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e906"),
    name: "阿帕他胺片",
    badres: [
        "中毒性表皮坏死松解症",
        "皮疹",
        "死亡",
        "多形性红斑"
    ],
    disease: [
        "前列腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e908"),
    name: "美沙拉嗪",
    badres: [
        "加：“动",
        "：“动脉",
        "阿糖胞苷综合征",
        "包括主动",
        "出生缺陷",
        "括主动脉",
        "先天缺陷",
        "婴儿出生缺陷",
        "先天性缺陷",
        "死亡",
        "动脉夹层",
        "内的",
        "在内的动"
    ],
    disease: [
        "肺癌",
        "胰腺癌",
        "肝癌",
        "子宫癌",
        "白血病",
        "乳腺癌",
        "胃癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e90a"),
    name: "富马酸伏诺拉生",
    badres: [
        "肝损害",
        "肝损伤",
        "休克",
        "胃溃疡",
        "血小板减少",
        "死亡",
        "过敏反应",
        "十二指肠溃疡",
        "血小板减少性紫癜",
        "过敏"
    ],
    disease: [
        "胃癌",
        "胃炎",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e90c"),
    name: "卡格列净",
    badres: [
        "肾脏损害",
        "疼痛",
        "死亡",
        "低血糖"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e90e"),
    name: "非甾体抗炎药",
    badres: [
        "呕吐",
        "死亡",
        "恶心"
    ],
    disease: [
        "关节炎",
        "银屑病",
        "腹痛",
        "类风湿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e910"),
    name: "氟维司群注射液",
    badres: [
        "死亡"
    ],
    disease: [
        "乳腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e912"),
    name: "乌利司他",
    badres: [
        "肝损伤"
    ],
    disease: [
        "子宫肌瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e914"),
    name: "乙酰水杨酸",
    badres: [
        "心动过缓",
        "死亡"
    ],
    disease: [
        "心律失常",
        "心绞痛",
        "白血病",
        "高血压",
        "中风",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e916"),
    name: "泼尼松龙",
    badres: [
        "皮疹",
        "疼痛",
        "死亡"
    ],
    disease: [
        "关节炎",
        "银屑病",
        "风湿性关节炎",
        "带状疱疹",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e918"),
    name: "受体酪氨酸",
    badres: [
        "肝损害",
        "皮疹",
        "无力",
        "肝脏损害",
        "死亡",
        "动脉夹层",
        "出血",
        "生动脉夹"
    ],
    disease: [
        "头痛",
        "有高血",
        "卵巢癌",
        "白血病",
        "动脉瘤",
        "中风",
        "性卵巢",
        "肾小球肾炎",
        "高血压",
        "的卵巢",
        "肾炎",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e91a"),
    name: "羟基脲",
    badres: [
        "皮炎",
        "多形红斑",
        "腹泻",
        "皮疹",
        "视力下降",
        "中毒性表皮坏死松解症",
        "疼痛",
        "多形性红斑",
        "压力增加",
        "粒细胞增多",
        "药疹",
        "死亡",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "青光眼",
        "近视",
        "咳嗽",
        "流感",
        "白血病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e91c"),
    name: "维生素C",
    badres: [
        "重低血",
        "或晕",
        "、头",
        "心动过速",
        "休克",
        "死亡"
    ],
    disease: [
        "关节炎",
        "坏血病",
        "心律失常",
        "红斑狼疮",
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e91e"),
    name: "佐米",
    badres: [
        "出生缺陷",
        "无力",
        "疲乏",
        "婴儿出生缺陷",
        "性麻",
        "恶心",
        "呕吐"
    ],
    disease: [
        "腹痛",
        "、肌无",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e920"),
    name: "非索非那定",
    badres: [
        "噩梦",
        "低血糖",
        "胃痛",
        "腹泻",
        "高血糖",
        "焦虑",
        "幻觉",
        "死亡",
        "过敏",
        "鼻塞"
    ],
    disease: [
        "过敏性鼻炎",
        "糖尿病",
        "强迫症",
        "丙型肝炎",
        "肝癌",
        "咳嗽",
        "肺炎",
        "肝炎",
        "流感",
        "高血压",
        "哮喘",
        "上呼吸道感染",
        "头痛",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e922"),
    name: "雌二醇乳膏",
    badres: [
        "粒细胞减少"
    ],
    disease: [
        "脑膜炎",
        "子宫内膜增生",
        "卵巢癌",
        "中风",
        "子宫内膜癌",
        "乳腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e924"),
    name: "阿替利珠单抗",
    badres: [
        "嗜血细胞综合征",
        "死亡"
    ],
    disease: [
        "乳腺癌",
        "肺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e926"),
    name: "司库奇尤单抗",
    badres: [
        "剥脱性皮炎"
    ],
    disease: [
        "关节炎",
        "强直性脊柱炎",
        "银屑病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e928"),
    name: "环丙孕酮",
    badres: [
        "无力",
        "丧失",
        "耳鸣",
        "或四"
    ],
    disease: [
        "、脱",
        "丙孕酮",
        "测患者",
        "用治",
        "种抗雄",
        "患者的",
        "脑膜瘤",
        "医生对",
        "痤疮",
        "用于男性",
        "信息",
        "被诊断",
        "罕见的",
        "性脱",
        "癫痫",
        "酮的药",
        "不应用",
        "丧失",
        "究表明",
        "孕酮治疗",
        "前列腺癌",
        "头痛",
        "治疗禁",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e92a"),
    name: "阿帕他胺",
    badres: [
        "相关的血小",
        "管反应和非",
        "血小板减少",
        "死亡",
        "动脉夹层",
        "出血",
        "•",
        "良反",
        "呼吸困难",
        "下垂"
    ],
    disease: [
        "脑出血",
        "至完全",
        "抵抗性前",
        "心肌梗塞",
        "咳嗽",
        "肝炎",
        "颈动脉夹",
        "困难",
        "•"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e92c"),
    name: "维生素B",
    badres: [
        "多形性红斑",
        "死亡",
        "增加：中毒性表皮坏死"
    ],
    disease: [
        "共济失调",
        "小细",
        "白血病",
        "粒细胞"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e92e"),
    name: "含芬司匹",
    badres: [
        "括死"
    ],
    disease: [
        "对早",
        "性关节",
        "疗类风",
        "、银屑"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e930"),
    name: "多潘立酮",
    badres: [
        "止吐",
        "心动过速",
        "肝损伤",
        "便困难",
        "排便困难",
        "年的",
        "出血",
        "排尿困难",
        "室性心律失常",
        "腹胀",
        "恶心",
        "死亡",
        "疼痛",
        "呕吐",
        "肠梗阻",
        "猝死",
        "心和",
        "过敏"
    ],
    disease: [
        "腭裂",
        "便秘",
        "腹痛",
        "精神分裂症",
        "唇腭裂",
        "唇裂",
        "心力衰竭",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e932"),
    name: "加巴喷丁",
    badres: [
        "眩晕",
        "嗜睡",
        "皮疹",
        "无力",
        "肌痛",
        "头晕",
        "厌食",
        "昏睡",
        "死亡",
        "恶心",
        "出血",
        "呕吐",
        "动脉夹层",
        "致死",
        "疲劳",
        "疼痛",
        "呼吸困难"
    ],
    disease: [
        "糖尿病",
        "腹痛",
        "癫痫",
        "心肌梗死",
        "带状疱疹",
        "肝炎",
        "食欲不振",
        "中风",
        "黄疸",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e934"),
    name: "卡比马唑",
    badres: [
        "梦魇",
        "幻觉",
        "肌痛",
        "疲乏",
        "肾损害",
        "低血压",
        "血小板减少",
        "死亡",
        "注意力"
    ],
    disease: [
        "胆结石",
        "过敏性鼻炎",
        "糖尿病",
        "精神分裂症",
        "先天性心脏病",
        "抑郁症",
        "黄疸",
        "胰腺炎",
        "腹痛",
        "中风",
        "便秘",
        "脑膜炎",
        "添加脑",
        "哮喘",
        "胰腺炎症",
        "情感障碍",
        "失眠",
        "慢性",
        "强迫症",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e936"),
    name: "别嘌醇",
    badres: [
        "晕厥",
        "头晕",
        "死亡",
        "管死"
    ],
    disease: [
        "痛风",
        "心肌梗死",
        "心力衰竭",
        "中风",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e938"),
    name: "：哌柏西",
    badres: [
        "、头",
        "、皮",
        "、呕",
        "、食欲下",
        "和无",
        "、疲",
        "呼吸不适",
        "、腹",
        "死亡",
        "括恶",
        "呼吸困难"
    ],
    disease: [
        "和肺",
        "、头",
        "咳嗽",
        "肺炎",
        "、便",
        "、腹",
        "乳腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e93a"),
    name: "纳里普坦",
    badres: [
        "腹泻",
        "死亡",
        "出血"
    ],
    disease: [
        "直肠癌",
        "偏头痛",
        "腹痛",
        "便血",
        "肝炎",
        "头痛",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e93c"),
    name: "格卡瑞韦哌仑他韦片",
    badres: [
        "肝损伤",
        "如血小板减",
        "肝脏损害",
        "血小板减少",
        "死亡",
        "恶心",
        "出血",
        "呕吐",
        "乏力"
    ],
    disease: [
        "肝癌",
        "肝炎",
        "食欲不振",
        "黄疸",
        "肝硬化",
        "告肝硬"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e93e"),
    name: "达雷妥尤单抗",
    badres: [
        "嗜睡",
        "注意力不集中",
        "昏厥",
        "头晕"
    ],
    disease: [
        "肝炎",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e940"),
    name: "托珠单抗",
    badres: [
        "肝损伤"
    ],
    disease: [
        "关节炎",
        "腹痛",
        "动脉炎",
        "肝炎",
        "类风湿",
        "黄疸",
        "发性关"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e942"),
    name: "度洛西汀",
    badres: [
        "产后出血"
    ],
    disease: [
        "产后出血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e944"),
    name: "帕博利珠单抗",
    badres: [
        "腹泻",
        "肠梗阻",
        "死亡"
    ],
    disease: [
        "肺癌",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e946"),
    name: "纳武利尤单抗",
    badres: [
        "死亡"
    ],
    disease: [
        "胃癌",
        "肺癌",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e948"),
    name: "沃诺拉赞",
    badres: [
        "胃溃疡",
        "十二指肠溃疡",
        "死亡",
        "多形性红斑"
    ],
    disease: [
        "甲状腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e94a"),
    name: "甲氨蝶呤片",
    badres: [
        "嗜睡",
        "出生缺陷",
        "度嗜",
        "婴儿出生缺陷",
        "嗜",
        "疼痛",
        "死亡",
        "眠呼吸暂"
    ],
    disease: [
        "关节炎",
        "肺癌",
        "银屑病",
        "流产",
        "先天性心脏病",
        "肝癌",
        "肺炎",
        "类风湿",
        "白血病",
        "黄疸",
        "肾癌",
        "皮肤癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e94c"),
    name: "盐酸洛哌丁胺",
    badres: [
        "心动过速",
        "停搏",
        "转性室性",
        "嗜酸性细胞增多症",
        "休克",
        "死亡",
        "过敏反应",
        "疼痛",
        "嗜酸性细胞增多",
        "过敏",
        "剥脱性皮炎"
    ],
    disease: [
        "他严重的",
        "银屑病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e94e"),
    name: "丙泊酚",
    badres: [
        "疼痛勃起"
    ],
    disease: [
        "阴茎异常勃起"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e950"),
    name: "度拉糖肽",
    badres: [
        "嗜睡",
        "低血糖",
        "排尿频率增加",
        "高血糖素",
        "高血糖",
        "疲乏",
        "恶心",
        "口渴",
        "呕吐",
        "呼吸困难"
    ],
    disease: [
        "糖尿病",
        "腹痛",
        "的糖尿",
        "阴茎异常勃起",
        "加阴茎异常勃",
        "论糖尿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e952"),
    name: "阿司匹林",
    badres: [
        "死亡",
        "出血"
    ],
    disease: [
        "中风",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e954"),
    name: "贝沙罗汀",
    badres: [
        "致畸"
    ],
    disease: [
        "痤疮",
        "银屑病",
        "有抑郁",
        "淋巴瘤",
        "抑郁症",
        "白血病",
        "中",
        "湿疹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e956"),
    name: "葡萄柚汁",
    badres: [
        "肝损伤",
        "致癌症",
        "制、低",
        "肾损害",
        "致癌",
        "静、",
        "疼痛",
        "死亡",
        "出血",
        "昏迷",
        "迷和"
    ],
    disease: [
        "癌症",
        "糖尿病",
        "中风",
        "鹅口疮"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e958"),
    name: "青霉胺",
    badres: [
        "心衰",
        "死亡",
        "出血"
    ],
    disease: [
        "关节炎",
        "糖尿病",
        "银屑病",
        "帕金森",
        "类风湿",
        "流感",
        "痴呆",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e95a"),
    name: "帕博利珠单抗",
    badres: [
        "死亡"
    ],
    disease: [
        "贫血",
        "肺癌",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e95c"),
    name: "司佐匹克",
    badres: [
        "欲睡",
        "死亡"
    ],
    disease: [
        "疗失",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e95e"),
    name: "替诺福韦",
    badres: [
        "肺出",
        "体无",
        "肝损伤",
        "性粒细胞减",
        "，颈动脉夹",
        "厌食",
        "和咳",
        "如呼吸困",
        "死亡",
        "恶心",
        "呕吐",
        "易出",
        "和皮"
    ],
    disease: [
        "腹痛",
        "，中",
        "性肝",
        "播艾滋",
        "重头",
        "黄疸",
        "中",
        "年艾滋"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e960"),
    name: "加贝利木单抗",
    badres: [
        "致死",
        "的死",
        "死亡"
    ],
    disease: [
        "胸腺瘤",
        "肌无力",
        "和胸腺",
        "红斑狼疮",
        "症肌无"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e962"),
    name: "保列治",
    badres: [
        "呼吸困难",
        "疼痛",
        "出汗",
        "死亡"
    ],
    disease: [
        "关节炎",
        "糖尿病",
        "筋膜炎",
        "前列腺增生",
        "脓肿",
        "性筋膜",
        "咳血",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e964"),
    name: "别嘌醇",
    badres: [
        "麻木",
        "疼痛",
        "头晕",
        "死亡"
    ],
    disease: [
        "性脑膜",
        "痛风",
        "脑膜炎",
        "心肌梗死",
        "带状疱疹",
        "痛风药",
        "心绞痛",
        "中风",
        "中",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e966"),
    name: "卡比马唑",
    badres: [
        "病变",
        "腹泻",
        "粒细胞减少",
        "疼痛",
        "恶心",
        "呕吐"
    ],
    disease: [
        "腹痛",
        "感冒",
        "咳嗽",
        "头痛",
        "贫血",
        "胰腺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e968"),
    name: "甘油",
    badres: [
        "因死",
        "死亡",
        "猝死",
        "出血"
    ],
    disease: [
        "中风",
        "心肌梗塞",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e96a"),
    name: "英夫利西单抗",
    badres: [
        "皮疹",
        "肌痛"
    ],
    disease: [
        "关节炎",
        "红皮病",
        "银屑病",
        "红斑狼疮",
        "强直性脊柱炎",
        "湿疹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e96c"),
    name: "天冬氨酸",
    badres: [
        "病变",
        "皮疹",
        "癫痫发作",
        "死亡",
        "粒细胞增多",
        "血细胞减少"
    ],
    disease: [
        "癫痫",
        "高血压",
        "水肿",
        "皮肤癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e96e"),
    name: "诺氟沙星",
    badres: [
        "病变",
        "麻木",
        "感觉异常",
        "腹泻",
        "睡眠",
        "肌痛",
        "头晕",
        "无力",
        "肾损害",
        "恶心",
        "死亡",
        "出血",
        "疼痛",
        "乏力"
    ],
    disease: [
        "前列腺炎",
        "感冒",
        "咳嗽",
        "主动脉瘤",
        "肺炎",
        "流感",
        "动脉瘤",
        "高血压",
        "尿路感染",
        "头痛",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e970"),
    name: "安乃近",
    badres: [
        "低血糖",
        "疼痛"
    ],
    disease: [
        "肝炎",
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e972"),
    name: "氢氯噻嗪",
    badres: [
        "损害"
    ],
    disease: [
        "唇癌",
        "心力衰竭",
        "高血压",
        "水肿",
        "皮肤癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e974"),
    name: "聚苯乙烯磺酸钠",
    badres: [
        "例死",
        "与动脉夹",
        "品与动脉",
        "的动脉夹",
        "（动脉夹",
        "死亡",
        "动脉夹层",
        "出血",
        "为动脉夹",
        "生动脉夹"
    ],
    disease: [
        "括肾",
        "层和动",
        "和动脉",
        "、肝",
        "（高血",
        "肝癌",
        "了动脉",
        "白血病",
        "动脉瘤",
        "高血压",
        "或动脉",
        "有高血",
        "/动脉",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e976"),
    name: "凝血酶",
    badres: [
        "病变",
        "性心律失常",
        "腹泻",
        "心动过缓",
        "死亡",
        "出血"
    ],
    disease: [
        "头痛",
        "咳嗽",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e978"),
    name: "对乙酰氨基酚",
    badres: [
        "口腔溃疡",
        "疼痛",
        "视力丧失"
    ],
    disease: [
        "癫痫",
        "白血病",
        "高血压",
        "水肿",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e97a"),
    name: "左旋甲状腺素",
    badres: [
        "呼吸困难",
        "死亡",
        "晕眩"
    ],
    disease: [
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec617f0e6d2bda0510e97c"),
    name: "阿司匹林",
    badres: [
        "死亡",
        "出血"
    ],
    disease: [
        "高血压",
        "糖尿病",
        "心力衰竭",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e97e"),
    name: "奥贝胆酸",
    badres: [
        "肝脏损害",
        "肝损害",
        "出血"
    ],
    disease: [
        "肝硬化",
        "性肝硬",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e980"),
    name: "西诺沙星",
    badres: [
        "腹泻",
        "肌痛",
        "疲乏",
        "致癌",
        "意识模糊",
        "疼痛"
    ],
    disease: [
        "肌无力",
        "下尿路感"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e982"),
    name: "透粘膜芬太尼",
    badres: [
        "皮疹",
        "呕吐",
        "疼痛",
        "死亡",
        "粒细胞增多"
    ],
    disease: [
        "头痛",
        "癫痫",
        "湿疹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e984"),
    name: "海洛因",
    badres: [
        "感觉不适",
        "干咳",
        "肾脏损害",
        "死亡",
        "呼吸困难"
    ],
    disease: [
        "糖尿病",
        "筋膜炎",
        "型糖尿",
        "中风",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e986"),
    name: "苯佐卡因",
    badres: [
        "意识错乱",
        "头晕",
        "高铁血红蛋白血症",
        "疼痛",
        "死亡"
    ],
    disease: [
        "牛皮癣",
        "口腔溃疡",
        "哮喘",
        "头痛",
        "肺气肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e988"),
    name: "羟乙基淀粉",
    badres: [
        "高氯血症",
        "高钾血症",
        "肾损害",
        "死亡",
        "高钠血症",
        "颅内出血"
    ],
    disease: [
        "心力衰竭"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e98a"),
    name: "狄诺塞麦",
    badres: [
        "嗜睡",
        "恶心",
        "疼痛",
        "呕吐",
        "注意力不集中",
        "高钙血症",
        "低钙血症"
    ],
    disease: [
        "便秘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e98c"),
    name: "唑来膦酸",
    badres: [
        "皮疹",
        "疼痛",
        "死亡",
        "粒细胞增多",
        "血细胞减少"
    ],
    disease: [
        "癫痫",
        "骨折",
        "情感障碍",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e98e"),
    name: "达利珠单抗",
    badres: [
        "肝损伤",
        "肾损害",
        "疲倦",
        "死亡",
        "恶心",
        "出血",
        "呕吐"
    ],
    disease: [
        "子宫肌瘤",
        "贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e990"),
    name: "多替拉韦",
    badres: [
        "粒细胞增多",
        "皮疹",
        "出生缺陷"
    ],
    disease: [
        "精神分裂症",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e992"),
    name: "钆塞酸二钠",
    badres: [
        "肝损害",
        "死亡"
    ],
    disease: [
        "胆结石",
        "胰腺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e994"),
    name: "米索前列醇",
    badres: [
        "腹泻",
        "无力",
        "心动过缓",
        "死亡",
        "疼痛",
        "呕吐",
        "呼吸困难"
    ],
    disease: [
        "冠心病",
        "中风",
        "艾滋病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e996"),
    name: "丙戊酸镁",
    badres: [
        "呕吐",
        "肝损伤",
        "恶心",
        "皮肤"
    ],
    disease: [
        "偏头痛",
        "癫痫",
        "黄疸",
        "肾小球肾炎",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e998"),
    name: "氟吡汀",
    badres: [
        "病变",
        "肝损害",
        "肝损伤",
        "重肝损",
        "疼痛"
    ],
    disease: [
        "痤疮",
        "银屑病",
        "艾滋病",
        "淋巴瘤",
        "抑郁症",
        "焦虑症",
        "皮肤癌",
        "湿疹",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e99a"),
    name: "醋酸乌利司他",
    badres: [
        "肝损伤",
        "重肝损",
        "厌食",
        "疼痛",
        "恶心",
        "呕吐",
        "乏力"
    ],
    disease: [
        "子宫肌瘤",
        "食欲不振",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e99c"),
    name: "可待因",
    badres: [
        "肾损害",
        "休克",
        "过敏",
        "死亡"
    ],
    disease: [
        "上呼吸道感染",
        "感冒",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e99e"),
    name: "维生素B7",
    badres: [
        "节疼",
        "积皮",
        "皮疹",
        "泛皮",
        "死亡",
        "药疹"
    ],
    disease: [
        "早产",
        "贫血",
        "流",
        "流感"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9a0"),
    name: "钆塞酸二钠",
    badres: [
        "出血"
    ],
    disease: [
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9a2"),
    name: "别嘌醇",
    badres: [
        "死亡"
    ],
    disease: [
        "痛风",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9a4"),
    name: "七氟烷",
    badres: [
        "疼痛",
        "出生缺陷",
        "死亡"
    ],
    disease: [
        "哮喘",
        "流产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9a6"),
    name: "布鲁顿酪氨酸激酶",
    badres: [
        "心动过速",
        "肝损伤",
        "心跳骤停",
        "头晕",
        "晕厥",
        "死亡",
        "猝死",
        "心悸",
        "呼吸困难",
        "巨球蛋白血症"
    ],
    disease: [
        "肺炎",
        "败血症",
        "白血病",
        "乙肝病毒感染",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9a8"),
    name: "洛哌丁胺",
    badres: [
        "性功能障碍",
        "心动过速",
        "心律紊乱",
        "腹泻",
        "导致",
        "的心脏骤",
        "鼻衄",
        "晕厥",
        "血尿",
        "死亡",
        "过敏反应",
        "出血",
        "传导性心律失常",
        "肠梗阻",
        "述为室性心律",
        "心脏骤停"
    ],
    disease: [
        "痤疮",
        "脑出血",
        "帕金森",
        "心律失常",
        "鹅口疮",
        "便秘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9aa"),
    name: "丁溴东莨菪碱注射液",
    badres: [
        "病变",
        "嗜睡",
        "心动过速",
        "肾损害",
        "低血压",
        "疼痛",
        "过敏反应",
        "死亡",
        "胃肠道痉挛",
        "心脏骤停",
        "呼吸困难"
    ],
    disease: [
        "冠心病",
        "糖尿病",
        "癫痫",
        "心律失常",
        "心肌梗塞",
        "心力衰竭",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9ac"),
    name: "碳酸锂片",
    badres: [
        "腹泻",
        "抽搐",
        "呕吐",
        "死亡",
        "恶心",
        "口渴",
        "多尿",
        "昏迷"
    ],
    disease: [
        "肌无力",
        "抑郁症",
        "尿崩症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9ae"),
    name: "奥贝胆酸",
    badres: [
        "血便",
        "肝损害",
        "腹泻",
        "焦虑",
        "皮肤瘙痒",
        "腹胀",
        "死亡",
        "体重减轻",
        "恶心呕吐"
    ],
    disease: [
        "腹痛",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9b0"),
    name: "帕潘立酮",
    badres: [
        "病变",
        "部疼",
        "梦游",
        "疼痛"
    ],
    disease: [
        "骨髓炎",
        "糖尿病",
        "型糖尿",
        "精神分裂症",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9b2"),
    name: "甲泼尼龙",
    badres: [
        "肝损伤",
        "支气管痉挛",
        "死亡",
        "过敏反应",
        "出血",
        "管病",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9b4"),
    name: "丙氨酸氨基",
    badres: [
        "肝损伤",
        "肝损害",
        "死亡",
        "恶心",
        "呕吐"
    ],
    disease: [
        "腹痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9b6"),
    name: "苯达莫司汀",
    badres: [
        "死亡",
        "经病"
    ],
    disease: [
        "金淋巴",
        "带状疱疹",
        "肺炎",
        "败血症",
        "肝炎",
        "胞白血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9b8"),
    name: "富马酸二甲酯",
    badres: [
        "无力",
        "肌痛",
        "肾损害",
        "疼痛",
        "死亡",
        "横纹肌溶解"
    ],
    disease: [
        "糖尿病",
        "心力衰竭",
        "前列腺肥大",
        "前列腺增生"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9ba"),
    name: "二甲双胍",
    badres: [
        "病变",
        "低血糖",
        "降低血糖",
        "粒细胞减少",
        "、尿",
        "中毒性表皮坏死松解症",
        "低血压",
        "疼痛",
        "和排尿困",
        "糖尿量"
    ],
    disease: [
        "霉菌性阴道炎",
        "糖尿病",
        "高血压",
        "鹅口疮",
        "膀胱炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9bc"),
    name: "阿格列汀",
    badres: [
        "疼痛"
    ],
    disease: [
        "关节炎",
        "痛风",
        "糖尿病",
        "肥胖症",
        "类风湿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9be"),
    name: "可待因",
    badres: [
        "病变",
        "人死",
        "嗜睡",
        "哺乳困难",
        "呼吸缓慢",
        "疼痛",
        "死亡",
        "呼吸困难"
    ],
    disease: [
        "感冒药",
        "感冒",
        "心肌梗死",
        "脓毒性咽喉炎",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9c0"),
    name: "葡甲胺",
    badres: [
        "婴儿发育障碍",
        "的出生缺",
        "出生缺陷"
    ],
    disease: [
        "相情感障",
        "；偏头",
        "为癫",
        "性癫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9c2"),
    name: "二甲双胍",
    badres: [
        "降低血糖",
        "疼痛"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9c4"),
    name: "丁溴东莨菪碱注射液",
    badres: [
        "心动过速",
        "低血压",
        "疼痛",
        "过敏反应",
        "死亡"
    ],
    disease: [
        "冠心病",
        "心肌梗死",
        "心律失常",
        "心力衰竭",
        "高血压",
        "胆绞痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9c6"),
    name: "地诺孕素",
    badres: [
        "病变",
        "麻木",
        "无力",
        "疼痛",
        "呼吸困难"
    ],
    disease: [
        "痤疮",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9c8"),
    name: "左氧氟沙星",
    badres: [
        "粒细胞缺乏"
    ],
    disease: [
        "结膜炎",
        "痤疮",
        "银屑病",
        "风湿性关节炎",
        "湿疹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9ca"),
    name: "亮丙瑞林",
    badres: [
        "病变"
    ],
    disease: [
        "前列腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9cc"),
    name: "葡萄糖酸氯己定",
    badres: [
        "皮疹",
        "休克",
        "肾损害",
        "的过",
        "低血压",
        "例过敏反",
        "死亡",
        "过敏反应",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "糖尿病",
        "尿痛",
        "膀胱癌",
        "荨麻疹",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9ce"),
    name: "科比司他",
    badres: [
        "疼痛"
    ],
    disease: [
        "无抑郁",
        "关节炎",
        "银屑病",
        "脑膜炎",
        "带状疱疹",
        "精神分裂症",
        "抑郁症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9d0"),
    name: "对乙酰氨基酚",
    badres: [
        "疼痛",
        "死亡",
        "出血",
        "红血细胞减少",
        "过敏"
    ],
    disease: [
        "关节炎",
        "糖尿病",
        "癫痫",
        "感冒",
        "激素类",
        "感冒药",
        "脑出血",
        "癌症",
        "咳嗽",
        "流感",
        "心力衰竭",
        "高血压",
        "贫血",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9d2"),
    name: "再普乐",
    badres: [
        "无力",
        "疲乏",
        "排尿困难",
        "肝脏损害",
        "尿潴留",
        "恶心",
        "死亡",
        "呕吐"
    ],
    disease: [
        "精神分裂症",
        "肝癌",
        "抑郁症",
        "食欲不振",
        "情感障碍",
        "肝硬化",
        "痴呆"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9d4"),
    name: "非甾体抗炎药",
    badres: [
        "病变"
    ],
    disease: [
        "关节炎",
        "炎和强直性脊",
        "心力衰竭",
        "高血压",
        "水肿",
        "风湿关",
        "乳腺癌",
        "强直性脊柱炎",
        "皮肤癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9d6"),
    name: "左炔诺孕酮",
    badres: [
        "疼痛",
        "死亡"
    ],
    disease: [
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9d8"),
    name: "卡比马唑",
    badres: [
        "肌痛",
        "粒细胞减少",
        "无力",
        "粒细胞缺乏",
        "血小板减少",
        "血尿",
        "横纹肌溶解"
    ],
    disease: [
        "肝炎",
        "再生障碍性贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9da"),
    name: "可待因",
    badres: [
        "呼吸减慢",
        "统多",
        "疼痛",
        "死亡",
        "呼吸困难"
    ],
    disease: [
        "癫痫",
        "咳嗽",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9dc"),
    name: "可待因",
    badres: [
        "嗜睡",
        "呼吸减慢",
        "头晕",
        "死亡",
        "眩晕",
        "呼吸困难"
    ],
    disease: [
        "帕金森",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9de"),
    name: "可待因",
    badres: [
        "呼吸困难",
        "疼痛",
        "死亡"
    ],
    disease: [
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9e0"),
    name: "可待因",
    badres: [
        "疼痛",
        "呼吸困难",
        "干咳",
        "死亡"
    ],
    disease: [
        "青光眼",
        "强迫症",
        "焦虑症",
        "抑郁症",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9e2"),
    name: "双氯芬酸",
    badres: [
        "外耳道骨坏死",
        "过敏",
        "疼痛",
        "出血"
    ],
    disease: [
        "痤疮",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9e4"),
    name: "α硫辛酸",
    badres: [
        "病变",
        "低血糖",
        "麻木",
        "幻觉",
        "头晕",
        "意识混乱",
        "疼痛",
        "痛感"
    ],
    disease: [
        "头痛",
        "肌无力",
        "尿路感染",
        "慢性支气管炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9e6"),
    name: "别嘌呤醇",
    badres: [
        "粒细胞增多",
        "皮疹"
    ],
    disease: [
        "痛风",
        "痛风药"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9e8"),
    name: "左旋多巴",
    badres: [
        "蛋白尿",
        "肾损害",
        "血尿",
        "死亡",
        "出血"
    ],
    disease: [
        "帕金森",
        "青光眼",
        "肾病综合征"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9ea"),
    name: "奥美拉唑",
    badres: [
        "心动过速",
        "腹泻",
        "胃痛",
        "死亡",
        "过敏反应",
        "恶心",
        "呕吐",
        "过敏"
    ],
    disease: [
        "焦虑症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9ec"),
    name: "甘油",
    badres: [
        "皮疹",
        "过敏反应",
        "过敏",
        "多形性红斑"
    ],
    disease: [
        "腹膜炎",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9ee"),
    name: "易蒙停",
    badres: [
        "心动过速",
        "腹泻",
        "心跳骤停",
        "幻觉",
        "室性心律失常",
        "晕厥",
        "死亡",
        "疼痛",
        "昏"
    ],
    disease: [
        "尿路感染"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9f0"),
    name: "塞来昔布",
    badres: [
        "性疼",
        "皮疹",
        "幻觉",
        "思维混乱",
        "的死",
        "死亡",
        "粒细胞增多"
    ],
    disease: [
        "，强直性脊柱",
        "：骨关节",
        "精神分裂症",
        "人类风湿性关节",
        "中风",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9f2"),
    name: "二甲双胍",
    badres: [
        "或恶",
        "、呕",
        "无力",
        "头晕",
        "疲乏",
        "幻觉",
        "体重增加",
        "肾脏损害",
        "低血压",
        "或腹",
        "心衰",
        "死亡",
        "恶心",
        "疼痛",
        "呕吐",
        "疲倦",
        "呼吸困难"
    ],
    disease: [
        "糖尿病",
        "偏头痛",
        "卵巢癌",
        "酒或心力",
        "白血病",
        "食欲不振",
        "高血压",
        "心力衰竭",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9f4"),
    name: "酪氨酸激酶",
    badres: [
        "胎儿损害",
        "出生缺陷",
        "出血液",
        "无力",
        "疲乏",
        "死亡",
        "高尿酸血症"
    ],
    disease: [
        "痛风",
        "冠心病",
        "癌症",
        "心力衰竭",
        "高血压",
        "流产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9f6"),
    name: "二甲双胍",
    badres: [
        "疲倦",
        "意识混乱",
        "恶心",
        "口渴",
        "呕吐"
    ],
    disease: [
        "糖尿病",
        "腹痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9f8"),
    name: "氨氯地平",
    badres: [
        "横纹肌溶解"
    ],
    disease: [
        "肝炎",
        "高血压",
        "心绞痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9fa"),
    name: "伊曲康唑胶囊",
    badres: [
        "未死",
        "粒细胞减少"
    ],
    disease: [
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9fc"),
    name: "哌拉西林",
    badres: [
        "粒细胞增多",
        "皮疹",
        "死亡"
    ],
    disease: [
        "尿路感染"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510e9fe"),
    name: "厄洛替尼",
    badres: [
        "疼痛"
    ],
    disease: [
        "疗癫",
        "相情感障",
        "偏头痛",
        "肺癌",
        "癫痫",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea00"),
    name: "地诺单抗",
    badres: [
        "出生缺陷",
        "致畸",
        "外耳道骨坏死",
        "疼痛",
        "）外耳道骨坏"
    ],
    disease: [
        "腭裂",
        "慢性耳部感染",
        "流产",
        "先天性心脏病",
        "唇裂",
        "胆脂瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea02"),
    name: "阿司匹林",
    badres: [
        "虑高铁血红蛋白血",
        "胃肠道溃疡",
        "虑立位耐力降",
        "出血"
    ],
    disease: [
        "心绞痛",
        "脓肿",
        "水肿",
        "现头",
        "心力衰"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea04"),
    name: "二甲双胍",
    badres: [
        "呕吐",
        "呼吸困难",
        "恶心"
    ],
    disease: [
        "肾炎",
        "糖尿病",
        "腹痛",
        "尿路感染"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea06"),
    name: "埃索美拉唑",
    badres: [
        "心跳骤停",
        "疼痛",
        "死亡"
    ],
    disease: [
        "心肌梗死",
        "急性心肌",
        "心绞痛",
        "动脉瘤",
        "心力衰竭"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea08"),
    name: "左炔诺孕酮",
    badres: [
        "麻痹"
    ],
    disease: [
        "肝炎",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea0a"),
    name: "阿立哌唑",
    badres: [
        "患者",
        "无力",
        "头晕",
        "续性",
        "疲乏",
        "晕厥",
        "疼痛",
        "心动过速综合征",
        "恶心",
        "死亡",
        "左心室衰",
        "呼吸困难",
        "有体位性低血"
    ],
    disease: [
        "心力衰",
        "肺癌",
        "肺水",
        "精神分裂症",
        "宫颈癌",
        "抑郁症",
        "度的心力",
        "肌痛性脑脊髓炎",
        "心力衰竭",
        "水肿",
        "情感障碍",
        "头痛",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea0c"),
    name: "阿司匹林",
    badres: [
        "皮疹",
        "恶心",
        "死亡",
        "呕吐",
        "面部潮红"
    ],
    disease: [
        "早产",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea0e"),
    name: "乙酰水杨酸",
    badres: [
        "肝损害",
        "腹泻",
        "过敏反应",
        "出血",
        "颅内出血"
    ],
    disease: [
        "消化性溃疡",
        "感冒"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea10"),
    name: "卡比多巴",
    badres: [
        "出生缺陷",
        "死亡",
        "致畸"
    ],
    disease: [
        "疗帕金",
        "帕金森",
        "先天性心脏病",
        "流产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea12"),
    name: "二甲双胍",
    badres: [
        "降低血糖",
        "腹泻",
        "胃痛",
        "高血糖",
        "昏迷",
        "恶心",
        "呕吐",
        "过敏",
        "食欲减退"
    ],
    disease: [
        "糖尿病",
        "腹痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea14"),
    name: "埃索美拉唑",
    badres: [
        "嗜睡",
        "幻听",
        "幻视",
        "病变",
        "肌痛",
        "粒细胞减少",
        "胃十二指肠溃疡",
        "疼痛",
        "恶心",
        "过敏"
    ],
    disease: [
        "银屑病",
        "脑膜炎",
        "精神分裂症",
        "红斑狼疮",
        "败血症",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea16"),
    name: "如二甲双",
    badres: [
        "胃肠道反应",
        "痛",
        "疼痛",
        "呼吸困难"
    ],
    disease: [
        "胞肺",
        "糖尿病",
        "型糖尿",
        "流感",
        "心力衰竭",
        "水肿",
        "胸腔积液",
        "神经炎",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea18"),
    name: "NSAIDs",
    badres: [
        "呼吸困难",
        "无力",
        "死亡"
    ],
    disease: [
        "关节炎",
        "心力衰竭",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea1a"),
    name: "对乙酰氨基酚",
    badres: [
        "可造成",
        "肝损害",
        "酗酒"
    ],
    disease: [
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea1c"),
    name: "甘油",
    badres: [
        "病变",
        "肤病",
        "耳鸣",
        "网膜",
        "和死",
        "的耳",
        "麻木感",
        "死亡",
        "耳麻木"
    ],
    disease: [
        "关节炎",
        "失聪",
        "精神分裂症",
        "咳嗽",
        "于早",
        "球皮肤",
        "皮肤",
        "银屑病",
        "感冒",
        "早产",
        "致皮肤",
        "强直性脊柱炎",
        "视网膜病",
        "自闭症",
        "视网膜病变",
        "情感障碍",
        "痴呆",
        "类风湿",
        "疗上呼吸道感",
        "贫血",
        "皮肤癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea1e"),
    name: "度洛西汀",
    badres: [
        "心动过速",
        "疼痛"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea20"),
    name: "可待因",
    badres: [
        "嗜睡",
        "疼痛",
        "呼吸困难",
        "死亡"
    ],
    disease: [
        "哮喘",
        "感冒药",
        "感冒",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea22"),
    name: "伊伐布雷定",
    badres: [
        "现心动过",
        "或低血",
        "心动过缓",
        "、疲",
        "：头",
        "或者心动",
        "死亡",
        "-死"
    ],
    disease: [
        "冠心病",
        "青光眼",
        "心律失常",
        "心绞痛",
        "心肌梗塞",
        "心力衰竭",
        "状心绞"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea24"),
    name: "环磷酰胺",
    badres: [
        "肌痛",
        "心动过缓",
        "疼痛",
        "发生心动",
        "乏力",
        "横纹肌溶解"
    ],
    disease: [
        "关节炎",
        "肺癌",
        "牛皮癣",
        "风湿性关节炎",
        "骨肿瘤",
        "肝炎",
        "类风湿",
        "白血病",
        "乳腺癌",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea26"),
    name: "阿司匹林复方片",
    badres: [
        "皮疹",
        "前病",
        "昏厥",
        "疼痛",
        "死亡",
        "过敏反应",
        "器病"
    ],
    disease: [
        "肛门癌",
        "宫颈癌",
        "荨麻疹",
        "和阴茎",
        "败血症",
        "肺炎",
        "为癌",
        "水肿",
        "肺脓疡",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea28"),
    name: "阿哌沙班",
    badres: [
        "呼吸困难",
        "出血"
    ],
    disease: [
        "和黄",
        "痴呆",
        "黄疸",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea2a"),
    name: "托莫西汀",
    badres: [
        "、鼻",
        "支气管",
        "为出",
        "血小板减少",
        "和牙龈出",
        "死亡",
        "：血小板减",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "内心肌梗死",
        "心律失常",
        "抑郁症",
        "心力衰竭",
        "哮喘",
        "中风",
        "情感障碍",
        "躁狂症",
        "鼻炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea2c"),
    name: "布洛芬",
    badres: [
        "肝损害",
        "泻下",
        "皮疹",
        "死亡",
        "呕吐"
    ],
    disease: [
        "关节炎",
        "卒中",
        "类风湿",
        "心力衰竭",
        "中风",
        "微量元素",
        "骨关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea2e"),
    name: "富马酸二甲酯",
    badres: [
        "或死",
        "高血糖",
        "心衰",
        "PM",
        "死亡",
        "淋巴细胞减少",
        "降血糖",
        "呼吸困难"
    ],
    disease: [
        "水肿",
        "糖尿病",
        "心力衰竭",
        "起心力衰"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea30"),
    name: "可待因",
    badres: [
        "疼痛",
        "呼吸困难"
    ],
    disease: [
        "癫痫",
        "感冒",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea32"),
    name: "如泼尼松",
    badres: [
        "疼痛",
        "死亡"
    ],
    disease: [
        "癌",
        "如贫",
        "骨折",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea34"),
    name: "利培酮片",
    badres: [
        "心动过速",
        "心脏骤停",
        "死亡"
    ],
    disease: [
        "痴呆",
        "精神分裂症",
        "中风",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea36"),
    name: "唑来膦酸",
    badres: [
        "直肠出血",
        "消化道出血",
        "血小板减少",
        "性血小板减",
        "死亡",
        "出血",
        "高钙血症",
        "胃肠出血",
        "过敏"
    ],
    disease: [
        "肺出血",
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea38"),
    name: "阿立哌唑",
    badres: [
        "病变",
        "关横纹肌溶",
        "肌痛",
        "疼痛",
        "过敏反应",
        "死亡",
        "多形性红斑",
        "恶心",
        "乏力",
        "横纹肌溶解"
    ],
    disease: [
        "痤疮",
        "心律失常",
        "精神分裂症",
        "抑郁症",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea3a"),
    name: "多潘立酮",
    badres: [
        "肝损伤",
        "及心律失常",
        "室性心律失常",
        "猝死"
    ],
    disease: [
        "急性胃炎",
        "帕金森",
        "糖尿病",
        "心力衰竭"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea3c"),
    name: "佐匹克隆",
    badres: [
        "粒细胞增多",
        "皮疹",
        "死亡"
    ],
    disease: [
        "精神分裂症",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea3e"),
    name: "硫唑嘌呤",
    badres: [
        "昏迷",
        "死亡",
        "疼痛",
        "恶心",
        "呕吐",
        "用导"
    ],
    disease: [
        "关节炎",
        "肺结核",
        "癫痫",
        "类风湿",
        "食欲不振",
        "泌尿道感染",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea40"),
    name: "甲泼尼龙",
    badres: [
        "如多形性红",
        "肝损伤",
        "皮疹",
        "休克",
        "死亡",
        "过敏反应",
        "多形性红斑"
    ],
    disease: [
        "斑秃",
        "球后视神经炎",
        "肝炎",
        "种痴",
        "水肿",
        "血症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea42"),
    name: "阿司匹林",
    badres: [
        "疼痛",
        "麻木",
        "死亡"
    ],
    disease: [
        "贫血",
        "糖尿病",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea44"),
    name: "丙戊酸宫内暴露",
    badres: [
        "肾损害"
    ],
    disease: [
        "腭裂",
        "偏头痛",
        "癫痫",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea46"),
    name: "尼古丁贴片",
    badres: [
        "蛋白尿",
        "血小板减少",
        "血栓性血小板减少性紫癜",
        "意识混乱"
    ],
    disease: [
        "心肌梗死",
        "心肌梗塞",
        "高血压",
        "水肿",
        "贫血",
        "肾病综合征"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea48"),
    name: "双氯芬酸",
    badres: [
        "疼痛",
        "死亡"
    ],
    disease: [
        "仅允",
        "关节炎",
        "糖尿病",
        "的高血",
        "心绞痛",
        "高血压",
        "心力衰竭",
        "高血脂",
        "中风",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea4a"),
    name: "阿戈美拉汀",
    badres: [
        "肝损害",
        "肝损伤"
    ],
    disease: [
        "腹痛",
        "抑郁症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea4c"),
    name: "地高辛",
    badres: [
        "结性心律失常",
        "心动过缓",
        "死亡",
        "出血"
    ],
    disease: [
        "脑出血",
        "心律失常",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea4e"),
    name: "左炔诺孕酮",
    badres: [
        "幻觉",
        "疼痛",
        "死亡"
    ],
    disease: [
        "乳腺炎",
        "癫痫",
        "帕金森",
        "高血压",
        "中风",
        "死产",
        "头痛",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea50"),
    name: "二甲双胍",
    badres: [
        "低血糖",
        "排尿减少",
        "粒细胞减少",
        "思维混乱",
        "心悸",
        "腹胀",
        "惊厥",
        "死亡",
        "饱腹感",
        "降血糖",
        "呼吸困难"
    ],
    disease: [
        "糖尿病",
        "风湿性关节炎",
        "心肌梗死",
        "膀胱癌",
        "卵巢癌",
        "红斑狼疮",
        "败血症",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea52"),
    name: "哌拉西林他唑巴坦",
    badres: [
        "嗜睡",
        "低血压",
        "意识混乱",
        "死亡",
        "红细胞增多"
    ],
    disease: [
        "肺癌",
        "胃癌",
        "前列腺癌",
        "乳腺癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea54"),
    name: "二甲双胍",
    badres: [
        "心血",
        "30",
        "肾损害",
        "或总",
        "猝死",
        "出血",
        "死亡",
        "9",
        "全国"
    ],
    disease: [
        "=",
        "糖尿病",
        "心肌梗死",
        "加糖尿",
        "心肌梗塞",
        "能评估",
        "高血压",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea56"),
    name: "辅酶A",
    badres: [
        "疼痛",
        "死亡",
        "横纹肌溶解",
        "高脂血症"
    ],
    disease: [
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea58"),
    name: "硫唑嘌呤",
    badres: [
        "肝衰竭",
        "肝损害",
        "的肝损"
    ],
    disease: [
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea5a"),
    name: "天冬氨酸",
    badres: [
        "肝脏损害",
        "病变"
    ],
    disease: [
        "肝炎",
        "癫痫",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea5c"),
    name: "丙戊酸缓释胶囊",
    badres: [
        "嗜睡",
        "肝损伤",
        "成死",
        "厌食",
        "致畸",
        "死亡",
        "呕吐",
        "乏力"
    ],
    disease: [
        "心律失常",
        "偏头痛",
        "癫痫",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea5e"),
    name: "赛妥珠单抗",
    badres: [
        "死亡"
    ],
    disease: [
        "肺结核",
        "关节炎",
        "银屑病",
        "咳嗽",
        "类风湿",
        "强直性脊柱炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea60"),
    name: "硫唑嘌呤",
    badres: [
        "死亡"
    ],
    disease: [
        "关节炎",
        "类风湿",
        "白血病",
        "胞淋巴",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea62"),
    name: "甲泼尼龙",
    badres: [
        "麻木",
        "无力",
        "头晕",
        "疼痛",
        "死亡"
    ],
    disease: [
        "头痛",
        "癫痫",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea64"),
    name: "多潘立酮",
    badres: [
        "高钾血症",
        "肾损害",
        "心衰",
        "低血压",
        "恶心",
        "胀气",
        "烧心",
        "呕吐"
    ],
    disease: [
        "糖尿病",
        "心律失常",
        "高血钾",
        "心力衰竭",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea66"),
    name: "（坎地沙",
    badres: [
        "腹泻",
        "性腹",
        "体重下降"
    ],
    disease: [
        "骨折",
        "高血压",
        "心绞痛",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea68"),
    name: "奥利司他",
    badres: [
        "心动过速",
        "晕",
        "腹泻",
        "肝脏损害",
        "死亡",
        "疼痛",
        "心悸",
        "眩晕"
    ],
    disease: [
        "膝关节炎",
        "抑郁症",
        "髋关节炎",
        "黄疸",
        "骨关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea6a"),
    name: "依托孕烯",
    badres: [
        "死亡",
        "出血"
    ],
    disease: [
        "冠心病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea6c"),
    name: "左炔诺孕酮",
    badres: [
        "肝脏损害",
        "肝损害",
        "死亡"
    ],
    disease: [
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea6e"),
    name: "西妥昔单抗",
    badres: [
        "中毒性表皮坏死松解症",
        "皮疹",
        "皮炎",
        "死亡"
    ],
    disease: [
        "结肠癌",
        "直肠癌",
        "上呼吸道感染",
        "乳腺癌",
        "胃癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea70"),
    name: "度洛西汀",
    badres: [
        "五羟色胺综合征",
        "心动过速",
        "肝损害",
        "出血"
    ],
    disease: [
        "糖尿病",
        "焦虑症",
        "阴茎勃起",
        "抑郁症",
        "阴茎异常勃起"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea72"),
    name: "对乙酰氨基酚",
    badres: [
        "例死",
        "肝损害",
        "肝损伤",
        "生过敏反",
        "见过敏反",
        "，呼吸困",
        "皮疹",
        "和死",
        "的肝损",
        "重肝损",
        "生肝损",
        "低血压",
        "，皮",
        "疼痛",
        "死亡",
        "过敏反应",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "感冒药",
        "感冒"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea74"),
    name: "对乙酰氨基酚",
    badres: [
        "肝损伤",
        "皮疹",
        "疼痛",
        "死亡",
        "过敏反应",
        "呼吸困难"
    ],
    disease: [
        "感冒药",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea76"),
    name: "对乙酰氨基酚",
    badres: [
        "肝损伤",
        "疼痛",
        "死亡"
    ],
    disease: [
        "感冒的药",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea78"),
    name: "阿昔莫司",
    badres: [
        "高脂蛋白血症",
        "麻木",
        "无力",
        "疼痛"
    ],
    disease: [
        "白血病",
        "糖尿病",
        "高血压",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea7a"),
    name: "卡马西平",
    badres: [
        "病变",
        "感觉障碍",
        "麻木",
        "度焦",
        "干咳",
        "焦虑",
        "幻觉",
        "觉幻",
        "烧灼感",
        "无力",
        "心源性不良反应",
        "死亡",
        "疼痛",
        "心悸",
        "心电图异常",
        "、精神错",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "关节炎",
        "癫痫",
        "、抑郁",
        "精神分裂症",
        "黑尿热",
        "抑郁症",
        "红斑狼疮",
        "缺铁性贫血",
        "焦虑症",
        "心律失常",
        "肺炎",
        "哮喘",
        "湿疹",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea7c"),
    name: "：苯妥",
    badres: [
        "疼痛"
    ],
    disease: [
        "同抗",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea7e"),
    name: "非诺特罗",
    badres: [
        "腹泻"
    ],
    disease: [
        "早产",
        "哮喘",
        "骨关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea80"),
    name: "阿戈美拉汀",
    badres: [
        "肝损害",
        "麻木",
        "无力",
        "肝脏损害",
        "肾脏损害",
        "瘫痪",
        "死亡",
        "疼痛",
        "出血",
        "呼吸困难"
    ],
    disease: [
        "偏头痛",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea82"),
    name: "苯丙香豆素",
    badres: [
        "主动脉夹",
        "低血压",
        "死亡",
        "出血",
        "颅内出血"
    ],
    disease: [
        "脉高血",
        "直肠癌",
        "抗高血",
        "兆子",
        "高血压",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea84"),
    name: "阿司匹林",
    badres: [
        "病死",
        "死亡",
        "出血"
    ],
    disease: [
        "心绞痛",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea86"),
    name: "非霍奇金",
    badres: [
        "肝脏损害",
        "死亡"
    ],
    disease: [
        "关节炎",
        "乙型",
        "型肝",
        "肝炎",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea88"),
    name: "棕榈酸帕利哌酮",
    badres: [
        "死亡"
    ],
    disease: [
        "糖尿病",
        "精神分裂症",
        "肺炎",
        "白内障",
        "躁郁症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea8a"),
    name: "苹果酸舒尼替尼",
    badres: [
        "中毒性表皮坏死松解症",
        "皮疹",
        "死亡"
    ],
    disease: [
        "头痛",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea8c"),
    name: "双氯芬酸",
    badres: [
        "疲乏",
        "低血压",
        "低白蛋白血症",
        "死亡",
        "疼痛",
        "肠梗阻",
        "呼吸困难"
    ],
    disease: [
        "糖尿病",
        "心肌梗死",
        "败血症",
        "高血压",
        "高血脂",
        "心力衰竭",
        "水肿",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea8e"),
    name: "对乙酰氨基酚",
    badres: [
        "脱皮",
        "和呕",
        "耳鸣",
        "麻木",
        "耳聋",
        "、晕",
        "、恶",
        "如厌",
        "过敏",
        "起肝脏损",
        "肝脏损伤",
        "、心动过",
        "感觉异常",
        "括低血",
        "、休",
        "、呕",
        "皮疹",
        "、疲",
        "肝脏损害",
        "疼痛",
        "死亡",
        "的恶",
        "病变",
        "肝损害",
        "肝损伤",
        "无力",
        "头晕",
        "心动过缓",
        "肝脏损",
        "昏厥",
        "及心脏骤",
        "或死",
        "中毒性表皮坏死松解症",
        "意识混乱",
        "恶心",
        "呕吐",
        "痛感"
    ],
    disease: [
        "和消化不",
        "消化不良",
        "偏头痛",
        "筋膜炎",
        "强迫症",
        "如肝",
        "抑郁症",
        "、黄",
        "性偏头",
        "除耳聋",
        "肝炎",
        "、腹",
        "早产",
        "肝硬化",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea90"),
    name: "用羟乙基淀",
    badres: [
        "和呕",
        "生出",
        "或疲",
        "；恶",
        "死亡",
        "；排尿困",
        "出血",
        "生肾脏损",
        "出血增加"
    ],
    disease: [
        "括败血",
        "败血症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea92"),
    name: "、尼麦角",
    badres: [
        "病变",
        "疼痛",
        "死亡"
    ],
    disease: [
        "偏头痛",
        "、痴",
        "他痴",
        "白内障",
        "性偏头",
        "痴呆"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea94"),
    name: "硫酸镁注射液",
    badres: [
        "疗过",
        "生过敏反",
        "他过",
        "剂过",
        "现过敏反",
        "和呼吸困",
        "“致",
        "有过",
        "低过敏反",
        "料过",
        "觉头",
        "过敏反应",
        "死亡",
        "类过敏反",
        "过敏"
    ],
    disease: [
        "湿关节",
        "癫痫",
        "液治",
        "骨折",
        "有哮",
        "子痫",
        "高血压",
        "中风",
        "重哮",
        "早产",
        "、湿",
        "和缺铁性贫",
        "疗早"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea96"),
    name: "可待因",
    badres: [
        "腹泻",
        "皮疹",
        "血小板减少",
        "视力损害",
        "疼痛",
        "死亡",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "癫痫",
        "心内膜炎",
        "咳嗽",
        "肺炎",
        "尿路感染"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea98"),
    name: "双氯芬酸",
    badres: [
        "疼痛"
    ],
    disease: [
        "关节炎",
        "糖尿病",
        "高血压",
        "高血脂",
        "心力衰竭",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea9a"),
    name: "非甾体抗炎药",
    badres: [
        "肝损害",
        "意识混乱",
        "疼痛",
        "死亡"
    ],
    disease: [
        "帕金森"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea9c"),
    name: "阿米三嗪",
    badres: [
        "感觉不适",
        "肝损伤",
        "肝脏损害",
        "死亡",
        "恶心",
        "疼痛",
        "呕吐"
    ],
    disease: [
        "白血病",
        "心力衰竭",
        "黄疸",
        "肝硬化",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ea9e"),
    name: "苯妥英钠",
    badres: [
        "死亡",
        "出生缺陷"
    ],
    disease: [
        "精神分裂症",
        "偏头痛",
        "癫痫",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaa0"),
    name: "维生素D甾醇",
    badres: [
        "病变",
        "高血糖",
        "现高钙血",
        "生低钙血",
        "的低钙血",
        "死亡",
        "高钙血症",
        "过敏",
        "低钙血症",
        "将低钙血"
    ],
    disease: [
        "和高血",
        "糖尿病",
        "癫痫",
        "或高血",
        "的高血",
        "胰腺癌",
        "骨折",
        "胰腺腺癌",
        "性前列腺",
        "疗骨",
        "如心绞",
        "胰腺炎",
        "和癫",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaa2"),
    name: "尼洛替尼",
    badres: [
        "中毒性表皮坏死溶解症"
    ],
    disease: [
        "白血病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaa4"),
    name: "替拉瑞韦",
    badres: [
        "病变",
        "皮疹",
        "现呼吸困",
        "中毒性表皮坏死松解症",
        "死亡",
        "、窒",
        "粒细胞增多症",
        "口干"
    ],
    disease: [
        "肝炎",
        "肌无力"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaa6"),
    name: "阿司匹林",
    badres: [
        "心动过速",
        "重快速心律失",
        "心律失常",
        "死性心律失常",
        "中毒性表皮坏死松解症",
        "快速心律失常",
        "走疼",
        "死亡",
        "疼痛",
        "出血",
        "心悸",
        "中毒性表皮坏死松解"
    ],
    disease: [
        "定心绞",
        "宫颈炎",
        "风湿性关节炎",
        "有心肌梗",
        "心律失常",
        "心绞痛",
        "肺炎",
        "白血病",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaa8"),
    name: "凝血酶",
    badres: [
        "秒的",
        "胃肠",
        "，除了颅",
        "年的",
        "疗的",
        "出血",
        "异常；血小",
        "的重",
        "颅内出血",
        "胃肠道出血"
    ],
    disease: [
        "贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaaa"),
    name: "可待因",
    badres: [
        "嗜睡",
        "肝损害",
        "肝损伤",
        "疼痛",
        "死亡",
        "出血",
        "血细胞减少",
        "呼吸困难"
    ],
    disease: [
        "病毒性肝炎",
        "败血症",
        "肝炎",
        "黄疸",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaac"),
    name: "维生素D",
    badres: [
        "无力",
        "死亡"
    ],
    disease: [
        "心律失常",
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaae"),
    name: "利妥昔单抗",
    badres: [
        "病变",
        "死亡"
    ],
    disease: [
        "癫痫",
        "艾滋病",
        "肌无力",
        "红斑狼疮",
        "水肿",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eab0"),
    name: "丙氨酸氨基",
    badres: [
        "厌食",
        "肝脏损伤",
        "肝损伤",
        "肝损害"
    ],
    disease: [
        "肝硬化",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eab2"),
    name: "多西他赛注射液",
    badres: [
        "病变",
        "呼吸困难",
        "死亡"
    ],
    disease: [
        "肺癌",
        "卵巢癌",
        "肺炎",
        "前列腺癌",
        "乳腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eab4"),
    name: "甘油",
    badres: [
        "尿频"
    ],
    disease: [
        "糖尿病",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eab6"),
    name: "羟丁酸钠",
    badres: [
        "性死",
        "嗜睡",
        "麻木",
        "肉无",
        "、昏",
        "无力",
        "肌痛",
        "和死",
        "昏迷",
        "晕厥",
        "低血压",
        "死亡",
        "出血",
        "觉醒",
        "猝倒",
        "、呼吸困"
    ],
    disease: [
        "偏头痛",
        "癫痫",
        "心肌梗死",
        "失眠",
        "抑郁症",
        "尿失禁",
        "中",
        "、心肌梗"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eab8"),
    name: "可待因",
    badres: [
        "和呕",
        "、嗜",
        "癫痫发作",
        "中毒性表皮坏死松解症",
        "、便",
        "、恶",
        "疼痛",
        "死亡",
        "粒细胞增多",
        "呼吸困难"
    ],
    disease: [
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaba"),
    name: "滴眼液",
    badres: [
        "和呕",
        "的恶",
        "心律失常",
        "恶心",
        "死亡",
        "呕吐"
    ],
    disease: [
        "脑膜炎",
        "败血症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eabc"),
    name: "如对乙酰氨基",
    badres: [
        "、",
        "厥、",
        "与疼",
        "或者",
        "心、",
        "于疼",
        "轻疼",
        "者过",
        "：过",
        "解鼻"
    ],
    disease: [
        "的咳",
        "咳",
        "感冒药",
        "感冒",
        "、哮",
        "）咳",
        "与感冒",
        "宫颈癌",
        "、咳",
        "与感",
        "咳嗽",
        "有感",
        "或者",
        "C咳",
        "者过敏性鼻",
        "于咳",
        "用咳"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eabe"),
    name: "者非诺贝",
    badres: [
        "病/横纹肌",
        "/横纹肌溶",
        "横纹肌溶解",
        "死亡"
    ],
    disease: [
        "有心肌梗",
        "冠心病",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eac0"),
    name: "双氯芬酸",
    badres: [
        "的疼"
    ],
    disease: [
        "、骨关节",
        "如风湿性关节",
        "、腱鞘",
        "性痛",
        "、强直性脊柱",
        "括关节"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eac2"),
    name: "奥美拉",
    badres: [
        "腹泻",
        "疼痛"
    ],
    disease: [
        "消化道炎症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eac4"),
    name: "尼鲁米特",
    badres: [
        "肝坏死",
        "恶心",
        "腹水",
        "死亡"
    ],
    disease: [
        "前列腺癌",
        "抗雄激",
        "肝炎",
        "黄疸",
        "激素药",
        "激素"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eac6"),
    name: "阿戈美拉汀",
    badres: [
        "在肝损",
        "似肝脏损",
        "肝脏损害",
        "死亡",
        "现血清转氨酶升",
        "部疼",
        "过敏",
        "有肝脏损",
        "者肝脏损"
    ],
    disease: [
        "，黄",
        "癫痫",
        "，糖尿",
        "肝炎",
        "高血压",
        "水肿",
        "头痛",
        "即肝硬"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eac8"),
    name: "左旋多巴",
    badres: [
        "低血压",
        "死亡",
        "出血"
    ],
    disease: [
        "）与心力",
        "帕金森",
        "心律失常",
        "咳嗽",
        "心力衰竭",
        "中风",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaca"),
    name: "左氧氟沙星",
    badres: [
        "横纹肌溶解"
    ],
    disease: [
        "心律失常",
        "肺炎",
        "白血病",
        "尿路感染",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eacc"),
    name: "左旋多巴",
    badres: [
        "调、意识",
        "的高钙血",
        "尿（横纹肌",
        "椎体骨折",
        "高钙血症"
    ],
    disease: [
        "帕金森",
        "前列腺癌",
        "骨折",
        "癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eace"),
    name: "四氢大麻酚",
    badres: [
        "据疼",
        "病变",
        "疼痛",
        "）疼"
    ],
    disease: [
        "有肝硬",
        "癫痫",
        "抑郁症",
        "低癫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ead0"),
    name: "的他克莫",
    badres: [
        "和呕",
        "耳鸣",
        "过敏反应",
        "、心动过",
        "皮疹",
        "起的",
        "死亡",
        "出",
        "精神状态改变",
        "的恶",
        "病变",
        "心动过缓",
        "肾损害",
        "低血压",
        "眩晕",
        "低血钾",
        "皮肤瘙痒",
        "意识混乱",
        "恶心",
        "心和",
        "呕吐",
        "呼吸困难"
    ],
    disease: [
        "癫痫",
        "帕金森",
        "性心力衰",
        "心绞痛",
        "高血压",
        "中风",
        "心力衰竭",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ead2"),
    name: "他克莫司软膏",
    badres: [
        "过敏"
    ],
    disease: [
        "皮肤癌",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ead4"),
    name: "甘油",
    badres: [
        "疼痛"
    ],
    disease: [
        "肝炎",
        "型肝"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ead6"),
    name: "坎地沙坦",
    badres: [
        "低血压",
        "低钾血症",
        "死亡"
    ],
    disease: [
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ead8"),
    name: "羟基安定",
    badres: [
        "幻觉",
        "异常睡眠",
        "血小板减少",
        "死亡",
        "出血",
        "部疼"
    ],
    disease: [
        "角膜炎",
        "示角膜",
        "性贫",
        "干眼",
        "抑郁症",
        "健忘症",
        "性角膜",
        "精神分裂症",
        "贫血",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eada"),
    name: "地塞米松",
    badres: [
        "对心动过",
        "心率过缓",
        "心动过缓",
        "重心动过",
        "死亡",
        "心悸",
        "眩晕"
    ],
    disease: [
        "种心律失",
        "心律失常",
        "白血病",
        "骨髓异常增生",
        "皮肤癌",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eadc"),
    name: "贝利木单抗",
    badres: [
        "呼吸窘迫",
        "物过",
        "低氧血症",
        "死亡",
        "和过",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "心律失常",
        "性红斑狼",
        "红斑狼疮",
        "中风",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eade"),
    name: "丙酸杆菌",
    badres: [
        "肌痛"
    ],
    disease: [
        "关节炎",
        "痤疮",
        "性肝",
        "性红斑狼",
        "红斑狼疮",
        "肝炎",
        "年痤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eae0"),
    name: "度冷丁",
    badres: [
        "、嗜",
        "制出",
        "疗低钠血",
        "疼痛",
        "出血",
        "至死",
        "、昏"
    ],
    disease: [
        "、癫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eae2"),
    name: "苯福林",
    badres: [
        "死亡"
    ],
    disease: [
        "肺水肿",
        "的高血",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eae4"),
    name: "酮洛芬",
    badres: [
        "接触反应",
        "过敏",
        "括光过敏",
        "过敏反应"
    ],
    disease: [
        "强迫症",
        "焦虑症",
        "抑郁症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eae6"),
    name: "雷尼酸锶",
    badres: [
        "病变",
        "皮疹",
        "括皮",
        "中毒性表皮坏死松解症",
        "粒细胞增多",
        "重过",
        "药疹"
    ],
    disease: [
        "肝炎",
        "骨骨"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eae8"),
    name: "多潘立酮",
    badres: [
        "性心",
        "痉挛",
        "性猝",
        "头晕",
        "室性心律失常",
        "重室性心律失",
        "晕厥",
        "猝死",
        "心悸"
    ],
    disease: [
        "急性胃炎",
        "糖尿病",
        "帕金森",
        "心律失常",
        "括帕金",
        "或心律失"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaea"),
    name: "天的",
    badres: [
        "出血高危",
        "肝损伤",
        "生出",
        "肝移植",
        "重出",
        "无出",
        "无力",
        "/横纹肌溶",
        "死亡",
        "疼痛",
        "出血",
        "出",
        "横纹肌溶解"
    ],
    disease: [
        "斑秃",
        "糖尿病",
        "心肌梗死",
        "前列腺增生",
        "食欲不振",
        "中风",
        "黄疸",
        "或贫",
        "前列腺癌",
        "痴呆",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaec"),
    name: "甘油",
    badres: [
        "横纹肌溶解"
    ],
    disease: [
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaee"),
    name: "佐米注射液",
    badres: [
        "细菌感染",
        "死",
        "疼痛",
        "死亡",
        "致死"
    ],
    disease: [
        "肌无力",
        "肺炎",
        "重",
        "价肺",
        "症肌无",
        "脓肿",
        "尿路感染",
        "胞淋巴",
        "的肌无",
        "重肺"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaf0"),
    name: "奥利司他",
    badres: [
        "肝损伤",
        "肝损害",
        "腹泻",
        "现腹",
        "、腹",
        "小肠溃疡",
        "起腹",
        "死亡"
    ],
    disease: [
        "胆结石",
        "、腹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaf2"),
    name: "氢氯噻嗪",
    badres: [
        "高钾血症",
        "肾损害",
        "晕厥",
        "低血压",
        "度肾损",
        "死亡"
    ],
    disease: [
        "糖尿病",
        "有糖尿",
        "抗高血",
        "心肌梗塞",
        "性高血",
        "高血压",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaf4"),
    name: "辅酶A",
    badres: [
        "死亡",
        "低血脂"
    ],
    disease: [
        "糖尿病",
        "心肌梗死",
        "抑郁症",
        "中风",
        "高血压",
        "前列腺癌",
        "乳腺癌",
        "高或患"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaf6"),
    name: "奥美拉唑",
    badres: [
        "、头",
        "头晕",
        "室性心律失常",
        "及室性心律失",
        "惊厥",
        "死亡",
        "人格改变"
    ],
    disease: [
        "白血病",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eaf8"),
    name: "苯巴比妥",
    badres: [
        "脱皮",
        "的皮",
        "或中毒性表皮坏死松解",
        "肝损伤",
        "干咳",
        "些皮",
        "皮疹",
        "、中毒性表皮坏死松解",
        "中毒性表皮坏死松解症",
        "和中毒性表皮坏死松解",
        "死亡",
        "性皮",
        "）和中毒性表皮坏死松",
        "呼吸困难"
    ],
    disease: [
        "痛风",
        "癫痫",
        "感冒",
        "心律失常",
        "肺炎",
        "中风",
        "中",
        "及结膜",
        "性感"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eafa"),
    name: "单胺氧化酶",
    badres: [
        "心动过速",
        "休克",
        "心衰",
        "死亡",
        "出血",
        "症休",
        "呼吸困难"
    ],
    disease: [
        "肺水肿",
        "疗败血",
        "败血症",
        "白血病",
        "高血压",
        "贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eafc"),
    name: "度罗西汀",
    badres: [
        "肝损伤",
        "心动过速",
        "干咳",
        "休克",
        "人格障碍",
        "死亡",
        "出血",
        "心衰竭",
        "症休",
        "呼吸困难"
    ],
    disease: [
        "疗败血",
        "肺水肿",
        "心律失常",
        "抑郁症",
        "精神分裂症",
        "肺炎",
        "败血症",
        "白血病",
        "中风",
        "中",
        "高血压",
        "的败血",
        "贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eafe"),
    name: "氟伏沙明",
    badres: [
        "心动过速",
        "肝损伤",
        "干咳",
        "休克",
        "死亡",
        "出血",
        "症休",
        "呼吸困难"
    ],
    disease: [
        "疗败血",
        "肺水肿",
        "心律失常",
        "抑郁症",
        "精神分裂症",
        "肺炎",
        "败血症",
        "白血病",
        "中风",
        "中",
        "高血压",
        "左心衰竭",
        "贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb00"),
    name: "盐酸昂丹司琼",
    badres: [
        "心动过速",
        "肝损伤",
        "干咳",
        "休克",
        "心衰",
        "低钾血症",
        "缓慢性心律失常",
        "死亡",
        "出血",
        "症休",
        "呼吸困难",
        "恶心呕吐"
    ],
    disease: [
        "心律失常",
        "肺水肿",
        "抑郁症",
        "精神分裂症",
        "疗败血",
        "肺炎",
        "败血症",
        "白血病",
        "中风",
        "中",
        "高血压",
        "的败血",
        "心力衰竭",
        "贫血",
        "胸腔积液",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb02"),
    name: "屈螺酮",
    badres: [
        "肝损伤",
        "死亡"
    ],
    disease: [
        "抗心律失",
        "心律失常",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb04"),
    name: "奥美拉唑",
    badres: [
        "胃溃疡"
    ],
    disease: [
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb06"),
    name: "非那雄胺",
    badres: [
        "意识错乱",
        "腹泻",
        "高铁血红蛋白血症",
        "死亡",
        "疼痛",
        "出血"
    ],
    disease: [
        "糖尿病",
        "前列腺增生",
        "肺炎",
        "心力衰竭",
        "高血压",
        "中风",
        "前列腺癌",
        "乳腺癌",
        "皮肤癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb08"),
    name: "咪来膦酸",
    badres: [
        "于肝损",
        "心动过速",
        "无力",
        "生低钾血",
        "肾损害",
        "疼痛",
        "死亡",
        "性心动过",
        "横纹肌溶解",
        "疗低钾血"
    ],
    disease: [
        "骨髓炎",
        "、心律失",
        "性心力衰",
        "抑郁症",
        "败血症",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb0a"),
    name: "（阿达木单",
    badres: [
        "死亡"
    ],
    disease: [
        "肺结核",
        "关节炎",
        "牛皮癣",
        "脑膜炎",
        "肺炎",
        "败血症",
        "强直性脊柱炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb0c"),
    name: "特比萘芬",
    badres: [
        "性肝损",
        "肝损伤",
        "死亡",
        "肝损害"
    ],
    disease: [
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb0e"),
    name: "对乙酰氨基酚",
    badres: [
        "呕吐",
        "腹胀",
        "呃逆"
    ],
    disease: [
        "糖尿病",
        "便秘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb10"),
    name: "葡萄糖酸钙注射液",
    badres: [
        "嗜睡"
    ],
    disease: [
        "流行",
        "感冒",
        "肌无力",
        "流感",
        "早产",
        "贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb12"),
    name: "吡格列酮",
    badres: [
        "婴儿出生缺陷",
        "致畸",
        "出生缺陷"
    ],
    disease: [
        "腭裂",
        "关节炎",
        "糖尿病",
        "银屑病",
        "脑膜炎",
        "者中膀",
        "肌无力",
        "膀胱癌",
        "以上的",
        "唇裂",
        "与癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb15"),
    name: "非甾体抗炎药",
    badres: [
        "嗜睡",
        "疼痛",
        "呼吸困难"
    ],
    disease: [
        "精神分裂症",
        "心绞痛",
        "心肌梗塞",
        "痛经",
        "高血压",
        "骨关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb17"),
    name: "度他雄胺",
    badres: [
        "死亡",
        "胎儿出生缺陷"
    ],
    disease: [
        "于前列腺",
        "偏头痛",
        "癫痫",
        "的贫",
        "前列腺增生",
        "比前列腺",
        "前列腺癌",
        "躁郁症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb19"),
    name: "屈螺酮",
    badres: [
        "死亡"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb1b"),
    name: "烟酸",
    badres: [
        "低钾血症",
        "命横纹肌溶"
    ],
    disease: [
        "心律失常",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb1d"),
    name: "非诺贝特",
    badres: [
        "死亡"
    ],
    disease: [
        "中风",
        "哮喘",
        "疗哮"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb1f"),
    name: "苯佐卡因",
    badres: [
        "出牙",
        "、头",
        "、意识错",
        "致麻",
        "高铁血红蛋白血症",
        "、乏",
        "、恶",
        "疼痛",
        "至死",
        "、昏"
    ],
    disease: [
        "关节炎",
        "、头",
        "腹痛",
        "银屑病",
        "类风湿",
        "强直性脊柱炎",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb21"),
    name: "二甲双胍",
    badres: [
        "者心",
        "如体重增",
        "或死",
        "心衰",
        "新生儿口裂"
    ],
    disease: [
        "腭裂",
        "抗癫",
        "偏头痛",
        "癫痫",
        "糖尿病",
        "心肌梗塞",
        "唇裂",
        "(糖",
        "和水"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb23"),
    name: "克力芝口服液",
    badres: [
        "嗜睡",
        "虚弱",
        "幻觉",
        "心动过缓",
        "心源性休克",
        "高钾血症",
        "心衰",
        "死亡"
    ],
    disease: [
        "过敏性鼻炎",
        "免早",
        "心肌病",
        "儿败血",
        "哮喘",
        "于早",
        "早产",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb25"),
    name: "地高辛",
    badres: [
        "外系反应",
        "嗜睡",
        "低镁血症",
        "心房颤动",
        "心动过速",
        "头晕",
        "心悸",
        "呼吸困难"
    ],
    disease: [
        "头痛",
        "流感",
        "心律失常",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb27"),
    name: "对乙酰氨基酚",
    badres: [
        "肝损害",
        "皮疹",
        "疼痛",
        "过敏反应",
        "死亡",
        "视觉损害",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "过敏性鼻炎",
        "青光眼",
        "白内障",
        "哮喘",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb29"),
    name: "依诺沙星",
    badres: [
        "心动过速",
        "血糖升高",
        "低血钾",
        "室性心律不齐",
        "心动过缓",
        "室性心律失常",
        "晕厥",
        "低钾血症",
        "支气管痉挛",
        "死亡",
        "心悸"
    ],
    disease: [
        "心肌梗死",
        "肺水肿",
        "心律失常",
        "高血压",
        "次早",
        "哮喘",
        "早产",
        "肺气肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb2b"),
    name: "硫唑嘌呤",
    badres: [
        "病变",
        "肝损伤",
        "干咳",
        "粪便",
        "级心",
        "心衰",
        "死亡",
        "呼吸困难"
    ],
    disease: [
        "糖尿病",
        "型糖尿",
        "心律失常",
        "咳嗽",
        "肺炎",
        "高血压",
        "哮喘",
        "早产",
        "发生",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb2d"),
    name: "他莫昔芬",
    badres: [
        "有心律失常",
        "腹胀",
        "疼痛",
        "胀气",
        "死亡",
        "呕吐",
        "肠梗阻",
        "腺癌",
        "便秘"
    ],
    disease: [
        "便秘",
        "腹痛",
        "心肌梗死",
        "内因乳",
        "精神分裂症",
        "心律失常",
        "败血症",
        "肺炎",
        "支气管扩张",
        "激素药",
        "乳腺癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb2f"),
    name: "多拉司琼片剂",
    badres: [
        "心动过速",
        "肝损伤",
        "心律失常",
        "心动过缓",
        "心衰",
        "低钾血症",
        "昏厥",
        "恶心",
        "严重心律失常",
        "呕吐",
        "眩晕"
    ],
    disease: [
        "致心律失",
        "心律失常",
        "者",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb31"),
    name: "贝伐珠单抗",
    badres: [
        "精神错乱",
        "心衰",
        "出血"
    ],
    disease: [
        "结肠癌",
        "肺癌",
        "癫痫",
        "高血压",
        "中风",
        "肾癌",
        "水肿",
        "头痛",
        "乳腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb33"),
    name: "可待因",
    badres: [
        "干咳"
    ],
    disease: [
        "结肠癌",
        "直肠癌",
        "肺癌",
        "感冒",
        "儿童",
        "咳嗽",
        "肾癌",
        "乳腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb35"),
    name: "二膦酸盐",
    badres: [
        "高血糖",
        "疼痛",
        "猝死"
    ],
    disease: [
        "糖尿病",
        "食管癌",
        "高血压",
        "中风",
        "前列腺癌",
        "的癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb37"),
    name: "对乙酰氨基酚",
    badres: [
        "严重心律失常",
        "疼痛"
    ],
    disease: [
        "心律失常",
        "骨折",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb39"),
    name: "甘油",
    badres: [
        "气道梗阻",
        "死亡"
    ],
    disease: [
        "于哮",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb3b"),
    name: "沙奎那韦",
    badres: [
        "有心律失常",
        "中度心律失常"
    ],
    disease: [
        "心律失常"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb3d"),
    name: "氟哌利多注射液",
    badres: [
        "心动过速",
        "后恶",
        "、呕",
        "死",
        "严重心律失常",
        "死亡"
    ],
    disease: [
        "糖尿病",
        "性肺",
        "膀胱癌",
        "心律失常",
        "肺炎",
        "生膀胱",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb3f"),
    name: "更昔洛韦儿",
    badres: [
        "死亡"
    ],
    disease: [
        "年高血",
        "或糖尿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb41"),
    name: "是第二代雾化纤维蛋",
    badres: [
        "肌痛",
        "病变",
        "疼痛",
        "死亡"
    ],
    disease: [
        "带状疱疹",
        "糖尿病",
        "癫痫",
        "抑郁症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb43"),
    name: "右旋糖酐铁",
    badres: [
        "重过敏反",
        "过敏",
        "过敏反应"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb45"),
    name: "薄荷醇",
    badres: [
        "腹泻",
        "感觉燥热",
        "惊厥",
        "死亡",
        "恶心",
        "呕吐",
        "眩晕",
        "昏迷"
    ],
    disease: [
        "腹痛",
        "感冒",
        "膀胱癌",
        "卵巢癌",
        "头痛",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb47"),
    name: "二氢奎尼丁",
    badres: [
        "心动过速",
        "起心律失常",
        "心悸",
        "晕厥",
        "抗心律失常",
        "性心动过"
    ],
    disease: [
        "心律失常"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb49"),
    name: "、博来霉",
    badres: [
        "心梗",
        "体重减少",
        "心脏骤停",
        "死亡"
    ],
    disease: [
        "白血病",
        "金淋巴",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb4b"),
    name: "二甲双胍",
    badres: [
        "心衰"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb4d"),
    name: "左旋多巴",
    badres: [
        "皮疹",
        "心悸",
        "恶心",
        "过敏反应",
        "死亡",
        "呕吐"
    ],
    disease: [
        "糖尿病",
        "癫痫",
        "脑膜炎",
        "帕金森",
        "红斑狼疮",
        "心肌梗塞",
        "高血压",
        "情感障碍",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb4f"),
    name: "维生素A",
    badres: [
        "致畸"
    ],
    disease: [
        "银屑病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb51"),
    name: "奥美拉唑",
    badres: [
        "呕吐",
        "无力"
    ],
    disease: [
        "心律失常"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb53"),
    name: "葡萄糖酸铁",
    badres: [
        "皮疹",
        "应及其他",
        "低血压",
        "过敏",
        "死亡",
        "过敏反应",
        "全身瘙痒",
        "丘疹",
        "药疹"
    ],
    disease: [
        "贫血",
        "荨麻疹",
        "缺铁性贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb55"),
    name: "柳氮磺胺吡啶",
    badres: [
        "病变",
        "感觉异常",
        "无力",
        "疼痛",
        "乏力"
    ],
    disease: [
        "流感",
        "关节炎",
        "糖尿病",
        "风湿性关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb57"),
    name: "对乙酰氨基酚",
    badres: [
        "肝损害",
        "皮疹",
        "死亡",
        "恶心",
        "尿黄"
    ],
    disease: [
        "关节炎",
        "腹痛",
        "黄疸",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb59"),
    name: "二甲双胍",
    badres: [
        "病变"
    ],
    disease: [
        "糖尿病",
        "心力衰竭"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb5b"),
    name: "坎地沙坦",
    badres: [
        "血便",
        "腹泻",
        "皮疹",
        "牙龈出血",
        "胃肠道反应",
        "致癌",
        "血小板减少",
        "死亡",
        "血尿",
        "出血",
        "呕吐",
        "症死",
        "流鼻血",
        "呼吸困难",
        "胃肠道出血"
    ],
    disease: [
        "骨髓炎",
        "，癌",
        "咳嗽",
        "肺炎",
        "皮肤感染",
        "高血压",
        "心力衰竭",
        "髋关节感染",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb5d"),
    name: "左炔诺孕酮",
    badres: [
        "骨损害",
        "血糖升高",
        "体重增加",
        "皮疹",
        "肾损害",
        "中毒性表皮坏死松解症",
        "死亡",
        "多形性红斑",
        "猝死"
    ],
    disease: [
        "糖尿病",
        "子宫肌瘤",
        "中风",
        "前列腺癌",
        "贫血",
        "性早熟",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb5f"),
    name: "左炔诺孕酮",
    badres: [
        "G后",
        "死亡",
        "猝死"
    ],
    disease: [
        "糖尿病",
        "骨折",
        "心肌梗塞",
        "高血压",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb61"),
    name: "贝伐珠单抗",
    badres: [
        "皮疹",
        "低血压",
        "死亡",
        "过敏反应",
        "恶心",
        "呕吐",
        "呼吸困难"
    ],
    disease: [
        "高血压",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb63"),
    name: "奥利司他",
    badres: [
        "嗜睡",
        "肝损害",
        "致肝损",
        "头晕",
        "疼痛",
        "过敏反应",
        "多形性红斑",
        "死亡",
        "注意力不集中"
    ],
    disease: [
        "癫痫",
        "水肿",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb65"),
    name: "双氯芬酸",
    badres: [
        "嗜睡",
        "肝损害",
        "肝损伤",
        "腹泻",
        "皮疹",
        "炎疼",
        "死亡",
        "恶心"
    ],
    disease: [
        "腹痛",
        "癫痫",
        "风湿性关节炎",
        "肝炎",
        "流感",
        "黄疸",
        "的骨关节",
        "骨关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb67"),
    name: "烟酸",
    badres: [
        "肾损害",
        "加横纹肌溶",
        "疼痛",
        "死亡",
        "横纹肌溶解"
    ],
    disease: [
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb69"),
    name: "左旋多巴",
    badres: [
        "肝损害",
        "死亡",
        "出生缺陷",
        "肝损伤"
    ],
    disease: [
        "帕金森",
        "甲亢",
        "前列腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb6b"),
    name: "凝血酶",
    badres: [
        "肝损伤",
        "食欲丧失"
    ],
    disease: [
        "冠心病",
        "腹痛",
        "卵巢癌",
        "中风",
        "、乳腺",
        "、卵巢",
        "乳腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb6d"),
    name: "非甾体抗炎药",
    badres: [
        "过敏反应"
    ],
    disease: [
        "痔疮",
        "湿疹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb6f"),
    name: "关于异维",
    badres: [
        "中毒性表皮坏死松懈症",
        "死亡",
        "多形性红斑"
    ],
    disease: [
        "痤疮"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb71"),
    name: "奥利司他",
    badres: [
        "脱皮",
        "肝损伤",
        "血小板减少",
        "过敏",
        "球形红细胞贫血"
    ],
    disease: [
        "贫血",
        "癫痫",
        "胰腺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb73"),
    name: "曲安奈德混悬液",
    badres: [
        "病变",
        "心动过速",
        "先天性心血管出生缺陷",
        "黄斑变性",
        "疼痛",
        "死亡",
        "出血",
        "高钙血症"
    ],
    disease: [
        "过敏性鼻炎",
        "关节炎",
        "糖尿病",
        "青光眼",
        "下骨",
        "心律失常",
        "抑郁症",
        "骨折",
        "心绞痛",
        "焦虑症",
        "类风湿",
        "白内障",
        "眼内炎",
        "中风",
        "哮喘",
        "水肿",
        "前列腺癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb75"),
    name: "他克莫司软膏",
    badres: [
        "心衰"
    ],
    disease: [
        "肺癌",
        "宫颈癌",
        "中风",
        "淋巴癌",
        "贫血",
        "乳腺癌",
        "人员",
        "皮肤癌",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb77"),
    name: "非那雄胺",
    badres: [
        "疼痛"
    ],
    disease: [
        "乳腺癌",
        "前列腺增生"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb79"),
    name: "三唑核苷",
    badres: [
        "过敏",
        "死亡",
        "出血"
    ],
    disease: [
        "关节炎",
        "银屑病",
        "非肝硬",
        "脑出血",
        "败血症",
        "类风湿",
        "肝炎",
        "皮肤炎",
        "肝硬化",
        "肾病综合征"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb7b"),
    name: "乙酰丙嗪",
    badres: [
        "体重增加"
    ],
    disease: [
        "脑膜瘤",
        "前列腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb7d"),
    name: "沙美特罗",
    badres: [
        "性功能障碍",
        "出生缺陷",
        "重出生缺",
        "致畸",
        "死亡",
        "关死",
        "的支气管痉",
        "排尿紊乱"
    ],
    disease: [
        "疗癫",
        "相情感障",
        "糖尿病",
        "癫痫",
        "中风",
        "哮喘",
        "情感障碍",
        "（哮",
        "和偏头",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb7f"),
    name: "巯基嘌呤",
    badres: [
        "死亡"
    ],
    disease: [
        "关节炎",
        "直肠癌",
        "和败血",
        "膀胱癌",
        "肝癌",
        "类风湿",
        "白血病",
        "淋巴癌",
        "强直性脊柱炎",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb81"),
    name: "非甾体抗炎药",
    badres: [
        "腹泻",
        "恶心",
        "死亡",
        "呕吐",
        "横纹肌溶解"
    ],
    disease: [
        "糖尿病",
        "高血压",
        "胰腺炎",
        "尿路感染"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb83"),
    name: "强的松",
    badres: [
        "淋巴细胞减少",
        "感觉迟钝",
        "死亡",
        "恶心"
    ],
    disease: [
        "关节炎",
        "心律失常",
        "心绞痛",
        "高血压",
        "上呼吸道感染",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb85"),
    name: "麦考酚酸",
    badres: [
        "嗜睡",
        "头晕",
        "感觉异常疲劳",
        "出血",
        "乏力",
        "呼吸困难"
    ],
    disease: [
        "贫血",
        "再生障碍性贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb87"),
    name: "奥美拉唑",
    badres: [
        "胃溃疡",
        "十二指肠溃疡"
    ],
    disease: [
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb89"),
    name: "盐酸异丙嗪注射液",
    badres: [
        "疼痛",
        "恶心",
        "出血",
        "呕吐",
        "死亡",
        "过敏"
    ],
    disease: [
        "腹痛",
        "糖尿病",
        "胰腺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb8b"),
    name: "格林巴利",
    badres: [
        "十二指肠",
        "鼻塞",
        "腹泻",
        "休克",
        "无力",
        "皮疹",
        "惊厥",
        "低血压",
        "死亡",
        "疼痛",
        "过敏反应",
        "呕吐",
        "意识模糊",
        "乏力",
        "过敏",
        "呼吸困难",
        "呼吸不畅"
    ],
    disease: [
        "腹痛",
        "斜视",
        "流产",
        "荨麻疹",
        "喘鸣",
        "胃炎",
        "肺炎",
        "5）",
        "流感",
        "哮喘",
        "水肿",
        "上呼吸道感染",
        "头痛",
        "4%",
        "中耳积液",
        "中耳炎",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb8d"),
    name: "扎那米韦",
    badres: [
        "嗜睡",
        "麻木",
        "胃肠道不适",
        "胃痛",
        "心跳骤停",
        "断过敏反",
        "晕厥",
        "胸闷",
        "过敏反应",
        "如恶",
        "恶梦",
        "过敏",
        "颅内出血",
        "腹痛",
        "感觉异常",
        "皮疹",
        "休克",
        "、呕",
        "意识不清",
        "胃肠道反应",
        "死亡",
        "疼痛",
        "流鼻涕",
        "十二指肠溃疡",
        "倦怠",
        "肝损害",
        "头痛",
        "腹泻",
        "无力",
        "头晕",
        "幻觉",
        "如疼",
        "厌食",
        "低血压",
        "昏厥",
        "过敏反",
        "麻痹",
        "、头",
        "味觉",
        "肌肉痛",
        "中毒性表皮坏死松解症",
        "支气管痉挛",
        "恶心",
        "多形性红斑",
        "呕吐",
        "失神发作",
        "呼吸困难"
    ],
    disease: [
        "关节炎",
        "糖尿病",
        "咳嗽",
        "或流",
        "胰腺炎",
        "腹痛",
        "水痘",
        "荨麻疹",
        "1流",
        "流感",
        "水肿",
        "流鼻涕",
        "神经炎",
        "流产",
        "-带状疱",
        "哮喘",
        "痴呆",
        "面瘫",
        "失眠",
        "、头",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb8f"),
    name: "扎那米韦",
    badres: [
        "给药",
        "死亡"
    ],
    disease: [
        "流感"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb91"),
    name: "扎那米韦",
    badres: [
        "皮疹",
        "幻觉",
        "支气管痉挛",
        "死亡",
        "过敏反应",
        "，头",
        "过敏"
    ],
    disease: [
        "流感",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb93"),
    name: "奥利司他",
    badres: [
        "胃痛",
        "反胃",
        "呕吐"
    ],
    disease: [
        "食欲不振",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb95"),
    name: "可待因",
    badres: [
        "疗疼",
        "疼痛"
    ],
    disease: [
        "头痛",
        "感冒",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb97"),
    name: "沙丁胺醇",
    badres: [
        "支气管痉挛"
    ],
    disease: [
        "早产",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb99"),
    name: "阿伦磷酸钠",
    badres: [
        "可能会导",
        "低血钾",
        "心动过缓",
        "室性心律失常",
        "疼痛"
    ],
    disease: [
        "偏头痛",
        "糖尿病",
        "高血压",
        "心力衰竭",
        "中风",
        "高血脂",
        "乳腺癌",
        "性心律失"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb9b"),
    name: "盐酸芬氟拉明",
    badres: [
        "肉无",
        "死亡"
    ],
    disease: [
        "性肺",
        "肌无力",
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb9d"),
    name: "nsolis",
    badres: [
        "嗜睡",
        "解疼",
        "疼痛",
        "死亡",
        "乏力",
        "吞咽困难"
    ],
    disease: [
        "胰癌",
        "直肠癌",
        "糖尿病",
        "偏头痛",
        "斜视",
        "肌无力",
        "牙痛",
        "再生障碍",
        "再生障碍性贫血",
        "前列腺癌",
        "贫血",
        "乳腺癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eb9f"),
    name: "西罗莫司",
    badres: [
        "与死",
        "、皮",
        "死亡"
    ],
    disease: [
        "周水"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eba1"),
    name: "/新山地",
    badres: [
        "肾损害",
        "过敏反应"
    ],
    disease: [
        "贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eba3"),
    name: "盐酸右哌甲酯",
    badres: [
        "及死",
        "死亡",
        "猝死"
    ],
    disease: [
        "肺癌",
        "失眠",
        "癌症",
        "抑郁症",
        "中风",
        "肺气肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eba5"),
    name: "吡罗昔康",
    badres: [
        "疼痛"
    ],
    disease: [
        "关节炎",
        "心肌病",
        "心律失常",
        "类风湿",
        "心力衰竭",
        "哮喘",
        "强直性脊柱炎",
        "骨关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eba7"),
    name: "对乙酰氨基酚",
    badres: [
        "排尿困难",
        "疼痛",
        "过敏反应",
        "死亡"
    ],
    disease: [
        "心肌梗塞",
        "高血压",
        "水肿",
        "括胰腺",
        "胰腺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eba9"),
    name: "奥美拉唑",
    badres: [
        "病变",
        "肝损伤",
        "无力",
        "粒细胞减少",
        "疲乏",
        "粒细胞缺乏",
        "胃溃疡",
        "死亡",
        "过敏"
    ],
    disease: [
        "腹痛",
        "心肌梗死",
        "精神分裂症",
        "抑郁症",
        "食欲不振",
        "中风",
        "痴呆",
        "甲亢",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebab"),
    name: "多沙唑嗪",
    badres: [
        "粒细胞减少",
        "头晕",
        "低血压",
        "死亡",
        "眩晕"
    ],
    disease: [
        "前列腺增生",
        "高血压",
        "阳痿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebad"),
    name: "非甾体抗炎药",
    badres: [
        "和剥脱性皮",
        "、大疱型表皮坏死松解",
        "疼痛",
        "些死",
        "剥脱性皮炎",
        "至死"
    ],
    disease: [
        "消化性溃疡",
        "结膜炎",
        "肺癌",
        "角膜炎",
        "胰腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebaf"),
    name: "）、哈特曼",
    badres: [
        "死亡",
        "乏力",
        "疼痛",
        "呼吸不畅"
    ],
    disease: [
        "肌无力",
        "斜视"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebb1"),
    name: "对乙酰氨基酚",
    badres: [
        "肉疼",
        "内出血",
        "肝损伤",
        "胃出血",
        "度疼"
    ],
    disease: [
        "感冒药"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebb3"),
    name: "非甾体抗炎药",
    badres: [
        "猝死"
    ],
    disease: [
        "精神分裂症",
        "痴呆",
        "低痴",
        "疗精神分裂"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebb5"),
    name: "卡托普利",
    badres: [
        "为疼",
        "低血压",
        "儿低血"
    ],
    disease: [
        "，早",
        "糖尿病",
        "用抗高",
        "高血压",
        "早产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebb7"),
    name: "扎那米韦",
    badres: [
        "支气管痉挛",
        "过敏反应"
    ],
    disease: [
        "流感",
        "癫痫",
        "哮喘",
        "1流"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebb9"),
    name: "非甾体抗炎药",
    badres: [
        "肾损害"
    ],
    disease: [
        "性水",
        "高血压",
        "抗高血",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebbb"),
    name: "吗替麦考酚酯",
    badres: [
        "嗜睡",
        "无力",
        "呼吸困难",
        "心动过速"
    ],
    disease: [
        "贫血",
        "再生障碍性贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebbd"),
    name: "唑尼沙胺",
    badres: [
        "昏迷",
        "腹泻",
        "厌食"
    ],
    disease: [
        "心律失常",
        "偏头痛",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebbf"),
    name: "阿仑膦酸",
    badres: [
        "病变",
        "死亡"
    ],
    disease: [
        "食道癌",
        "糖尿病",
        "是食道",
        "断出食"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebc1"),
    name: "盐酸吡格列酮",
    badres: [
        "心衰",
        "椎骨骨折",
        "呼吸困难",
        "视力下降"
    ],
    disease: [
        "心力衰竭",
        "糖尿病",
        "骨折",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebc3"),
    name: "奥美拉唑",
    badres: [
        "胃溃疡",
        "昏厥"
    ],
    disease: [
        "癫痫",
        "于预防子",
        "宫颈癌",
        "中风",
        "引发"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebc5"),
    name: "去羟肌苷",
    badres: [
        "皮疹",
        "疼痛",
        "死亡",
        "呼吸困难",
        "昏迷"
    ],
    disease: [
        "心律失常",
        "癫痫",
        "心肌梗塞",
        "艾滋病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebc7"),
    name: "阿昔洛韦",
    badres: [
        "肉无",
        "无尿",
        "肾损害",
        "腹胀",
        "血尿",
        "死亡",
        "恶心",
        "呕吐",
        "少尿"
    ],
    disease: [
        "性肺",
        "肌无力",
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebc9"),
    name: "托瑞米芬",
    badres: [
        "症状性心律失常",
        "低血钾",
        "心动过缓",
        "室性心律失常"
    ],
    disease: [
        "偏头痛",
        "心力衰竭",
        "高血压",
        "中风",
        "乳腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebcb"),
    name: "阿伦磷酸钠",
    badres: [
        "疼痛"
    ],
    disease: [
        "高血脂",
        "糖尿病",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebcd"),
    name: "盐酸芬氟拉明",
    badres: [
        "嗜睡",
        "幻觉",
        "过敏反应"
    ],
    disease: [
        "感冒",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebcf"),
    name: "氨基酮",
    badres: [
        "死亡"
    ],
    disease: [
        "抑郁症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebd1"),
    name: "替扎尼定",
    badres: [
        "腹痛",
        "腹泻",
        "皮疹",
        "低血压",
        "恶心",
        "死亡",
        "呕吐",
        "低"
    ],
    disease: [
        "头痛",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebd3"),
    name: "盐酸哌甲酯",
    badres: [
        "猝死"
    ],
    disease: [
        "躁狂症",
        "癫痫",
        "心肌梗塞",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebd5"),
    name: "羟基脲",
    badres: [
        "猝死"
    ],
    disease: [
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebd7"),
    name: "齐留通",
    badres: [
        "鼻塞",
        "过敏",
        "死亡"
    ],
    disease: [
        "过敏性鼻炎",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebd9"),
    name: "二甲双胍",
    badres: [
        "心衰"
    ],
    disease: [
        "糖尿病",
        "心力衰竭"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebdb"),
    name: "富马酸氯马斯汀",
    badres: [
        "幻觉",
        "意识不清"
    ],
    disease: [
        "癫痫",
        "感冒",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebdd"),
    name: "左炔诺孕酮",
    badres: [
        "心动过速",
        "出生缺陷",
        "晕厥",
        "溶血性贫血",
        "出血",
        "横纹肌溶解"
    ],
    disease: [
        "糖尿病",
        "感冒药",
        "食管癌",
        "贫血",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebdf"),
    name: "拉莫三嗪片",
    badres: [
        "肾损害",
        "肠排空障碍"
    ],
    disease: [
        "帕金森",
        "癫痫",
        "抑郁症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebe1"),
    name: "氯硝西泮",
    badres: [
        "精神失常"
    ],
    disease: [
        "抗癫",
        "偏头痛",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebe3"),
    name: "氟哌啶醇",
    badres: [
        "死亡"
    ],
    disease: [
        "躁狂症",
        "痴呆",
        "精神分裂症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebe5"),
    name: "默沙东",
    badres: [
        "高血糖",
        "低血糖",
        "昏迷"
    ],
    disease: [
        "糖尿病",
        "风湿性关节炎",
        "的糖尿",
        "高血压",
        "强直性脊柱炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebe7"),
    name: "艾塞那肽注射液",
    badres: [
        "腹泻",
        "支气管痉挛",
        "死亡",
        "恶心",
        "出血",
        "呕吐",
        "肠梗阻",
        "腹水",
        "脱水"
    ],
    disease: [
        "胆结石",
        "糖尿病",
        "腹痛",
        "中风",
        "胰腺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebe9"),
    name: "苯妥英",
    badres: [
        "胃肠道反应",
        "皮疹"
    ],
    disease: [
        "癫痫",
        "白血球",
        "骨折",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebeb"),
    name: "卡麦角林",
    badres: [
        "致死",
        "胃肠道反应",
        "皮疹",
        "死亡"
    ],
    disease: [
        "帕金森",
        "抑郁症",
        "焦虑症",
        "肺炎",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebed"),
    name: "吗替麦考酚酯",
    badres: [
        "致死",
        "出生缺陷",
        "死亡",
        "致畸"
    ],
    disease: [
        "焦虑症",
        "抑郁症",
        "加流",
        "肺炎",
        "肝炎",
        "流产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebef"),
    name: "吗替麦考酚酯单药",
    badres: [
        "死亡",
        "致畸"
    ],
    disease: [
        "嗜中性"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebf1"),
    name: "二甲双胍",
    badres: [
        "肝损害",
        "心衰",
        "疼痛",
        "死亡",
        "出血"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebf3"),
    name: "二甲双胍",
    badres: [
        "疼痛",
        "死亡"
    ],
    disease: [
        "糖尿病",
        "心力衰竭",
        "心绞痛",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebf5"),
    name: "二甲双胍",
    badres: [
        "耳鸣",
        "现突",
        "降低血糖",
        "生视觉损",
        "晕眩",
        "死亡"
    ],
    disease: [
        "糖尿病",
        "肺癌",
        "感冒",
        "进癌",
        "艾滋病",
        "骨折",
        "咳嗽",
        "肺炎",
        "心力衰竭",
        "淋巴癌",
        "贫血",
        "乳腺癌",
        "突发性耳聋",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebf7"),
    name: "可待因",
    badres: [
        "疲倦",
        "婴儿困难",
        "疼痛",
        "死亡",
        "呼吸困难"
    ],
    disease: [
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebf9"),
    name: "氟哌啶醇",
    badres: [
        "是低钾血",
        "心动过速",
        "白细胞减少",
        "粒细胞缺乏",
        "死亡",
        "猝死",
        "心电图异常",
        "性心动过",
        "乏力",
        "口干"
    ],
    disease: [
        "早产",
        "便秘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebfb"),
    name: "用替诺福韦",
    badres: [
        "肾损害"
    ],
    disease: [
        "流感"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebfd"),
    name: "盐酸氯丁替诺",
    badres: [
        "有致心律失常",
        "严重心律失常"
    ],
    disease: [
        "肺结核",
        "肺癌",
        "慢性支气管炎",
        "心律失常",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ebff"),
    name: "已烯雌酚",
    badres: [
        "肾损害",
        "死于心源性",
        "死亡"
    ],
    disease: [
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec01"),
    name: "NSAIDs",
    badres: [
        "胃肠道溃疡",
        "死亡",
        "1人"
    ],
    disease: [
        "脑膜炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec03"),
    name: "列酮和格列美脲",
    badres: [
        "体重增加",
        "死亡"
    ],
    disease: [
        "糖尿病",
        "心力衰竭"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec05"),
    name: "奥美拉唑",
    badres: [
        "猝死"
    ],
    disease: [
        "繁心绞",
        "心力衰竭"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec07"),
    name: "凝血",
    badres: [
        "出血"
    ],
    disease: [
        "关节炎",
        "帕金森",
        "型肝",
        "红斑狼疮",
        "类风湿",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec09"),
    name: "替加色罗",
    badres: [
        "致畸",
        "死亡",
        "出生缺陷"
    ],
    disease: [
        "糖尿病",
        "心绞痛",
        "性便",
        "中风",
        "贫血",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec0b"),
    name: "停马来酸替加色罗制",
    badres: [
        "死亡"
    ],
    disease: [
        "早产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec0d"),
    name: "左旋多巴",
    badres: [
        "病变",
        "嗜睡",
        "腹泻",
        "幻觉",
        "头晕",
        "晕厥",
        "体位性低血压",
        "疼痛",
        "恶心",
        "呕吐",
        "呼吸困难",
        "外周神经系统损害",
        "神经紊乱"
    ],
    disease: [
        "消化不良",
        "腹痛",
        "冠脉病",
        "帕金森",
        "心肌病",
        "抑郁症",
        "心肌梗塞",
        "心绞痛",
        "低血压",
        "心力衰竭",
        "水肿",
        "便秘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec0f"),
    name: "吡罗昔康",
    badres: [
        "疼痛"
    ],
    disease: [
        "痛风",
        "帕金森",
        "痛经",
        "上呼吸道感染",
        "类风湿性关节炎",
        "强直性脊柱炎",
        "骨关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec11"),
    name: "吡罗昔康",
    badres: [
        "病变",
        "耳鸣",
        "皮疹",
        "脱皮渗出",
        "头晕",
        "肾损害",
        "胃肠道反应",
        "血尿",
        "疼痛",
        "多形性红斑",
        "出血",
        "死亡",
        "过敏"
    ],
    disease: [
        "关节炎",
        "痛风",
        "水肿",
        "头痛",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec13"),
    name: "甲磺酸培高利特制剂",
    badres: [
        "性心",
        "腹泻",
        "心衰",
        "死亡",
        "呕吐"
    ],
    disease: [
        "的糖尿",
        "糖尿病",
        "个糖尿",
        "型糖"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec15"),
    name: "二甲双胍",
    badres: [
        "病变",
        "低血糖",
        "降低血糖",
        "体重增加",
        "心衰",
        "死亡"
    ],
    disease: [
        "糖尿病",
        "对冠心",
        "型糖尿",
        "抗糖尿",
        "心绞痛",
        "心肌梗塞",
        "少糖尿",
        "水肿",
        "糖尿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec17"),
    name: "二甲双胍",
    badres: [
        "病死",
        "导致",
        "死亡"
    ],
    disease: [
        "糖尿病",
        "型糖尿",
        "抗糖尿",
        "心肌梗塞",
        "心力衰竭",
        "中风",
        "水肿",
        "生水",
        "、中",
        "的抗糖",
        "议及糖",
        "的心力衰"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec19"),
    name: "喷酸葡胺",
    badres: [
        "低血糖",
        "降低血糖",
        "腹泻",
        "皮疹",
        "头晕",
        "疼痛",
        "死亡"
    ],
    disease: [
        "冠心病",
        "糖尿病",
        "险的糖",
        "骨折",
        "心肌梗塞",
        "心力衰竭",
        "水肿",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec1b"),
    name: "去氨加压素",
    badres: [
        "死亡",
        "低钠血症"
    ],
    disease: [
        "贫血",
        "抑郁症",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec1d"),
    name: "左旋多巴",
    badres: [
        "死亡"
    ],
    disease: [
        "帕金森",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec1f"),
    name: "甲磺酸培高利特片",
    badres: [
        "行动困难",
        "头晕",
        "晕眩",
        "疼痛",
        "恶心",
        "死亡"
    ],
    disease: [
        "中风",
        "心肌梗塞",
        "便秘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec21"),
    name: "马来酸替加色罗片",
    badres: [
        "心动过速",
        "腹泻",
        "皮疹",
        "头晕",
        "胃肠道反应",
        "低血压",
        "腹胀",
        "恶心",
        "心慌"
    ],
    disease: [
        "腹痛",
        "便秘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec23"),
    name: "双氯西",
    badres: [
        "疼痛",
        "死亡"
    ],
    disease: [
        "肺炎",
        "流感",
        "高血压",
        "中风",
        "便秘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec25"),
    name: "双氯西林",
    badres: [
        "死亡"
    ],
    disease: [
        "骨髓炎",
        "糖尿病",
        "流感染",
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec27"),
    name: "氟伏沙明",
    badres: [
        "替扎尼"
    ],
    disease: [
        "心律失常"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec29"),
    name: "氟伏沙明",
    badres: [
        "嗜睡",
        "腹泻",
        "皮疹",
        "头晕",
        "头昏",
        "神志不清",
        "体位性低血压",
        "过敏"
    ],
    disease: [
        "头痛",
        "腹痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec2b"),
    name: "钆双胺注射液",
    badres: [
        "休克",
        "过敏",
        "过敏反应"
    ],
    disease: [
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec2d"),
    name: "去氧麻黄碱",
    badres: [
        "人死",
        "且死",
        "死亡"
    ],
    disease: [
        "感冒药",
        "艾滋病",
        "的贫",
        "、心力衰",
        "贫血",
        "性中",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec2f"),
    name: "二甲双胍",
    badres: [
        "皮疹",
        "皮肤瘙痒",
        "疼痛",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "糖尿患",
        "糖尿病",
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec31"),
    name: "罗格列酮片",
    badres: [
        "耳鸣",
        "猝死"
    ],
    disease: [
        "糖尿病",
        "骨折",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec33"),
    name: "奥马珠单抗",
    badres: [
        "过敏",
        "过敏反应"
    ],
    disease: [
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec35"),
    name: "左氧氟沙星",
    badres: [
        "肝损害",
        "低血糖",
        "肝损伤",
        "高血糖",
        "死亡",
        "肝胆损害"
    ],
    disease: [
        "肝炎",
        "肝肾综合征",
        "糖尿病",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec37"),
    name: "多潘立酮",
    badres: [
        "心悸",
        "胃肠道反应",
        "心动过速",
        "心动过缓"
    ],
    disease: [
        "急性胃炎",
        "心律失常",
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec39"),
    name: "g戈舍瑞林维",
    badres: [
        "焦虑",
        "无力",
        "幻觉",
        "注意力不集中",
        "过敏"
    ],
    disease: [
        "子宫平滑肌瘤",
        "氯噻",
        "前列",
        "失",
        "抑郁症",
        "制前列腺",
        "前列腺癌",
        "乳腺癌",
        "性早熟",
        "前列腺",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec3b"),
    name: "加替沙星",
    badres: [
        "高血糖",
        "低血糖"
    ],
    disease: [
        "糖尿病",
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec3d"),
    name: "丙氧氨酚复方片",
    badres: [
        "疼痛",
        "死亡"
    ],
    disease: [
        "癌症",
        "糖尿病",
        "艾滋病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec3f"),
    name: "g对乙酰氨基",
    badres: [
        "胃肠道反应",
        "头晕",
        "死亡",
        "昏迷"
    ],
    disease: [
        "心律失常"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec41"),
    name: "欧乃影",
    badres: [
        "无力",
        "低血压",
        "心衰",
        "疼痛",
        "死亡",
        "出血",
        "过敏反应",
        "过敏",
        "存在"
    ],
    disease: [
        "胞肺",
        "糖尿病",
        "肺癌",
        "头颈癌",
        "流感",
        "中风",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec43"),
    name: "苯佐卡因",
    badres: [
        "麻木",
        "高铁血红蛋白血症",
        "恶心",
        "死亡",
        "昏迷"
    ],
    disease: [
        "帕金森"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec45"),
    name: "厄洛替尼",
    badres: [
        "嗜睡",
        "肝损伤",
        "心跳加快",
        "总胆红素增",
        "疼痛",
        "死亡"
    ],
    disease: [
        "癫痫",
        "感冒",
        "肺癌",
        "胰腺癌",
        "咳嗽",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec47"),
    name: "厄洛替尼片",
    badres: [
        "节出"
    ],
    disease: [
        "性白血",
        "白血病",
        "生白血",
        "或胸腔积"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec49"),
    name: "酸铬注射液",
    badres: [
        "颅内出血",
        "死亡"
    ],
    disease: [
        "贫血",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec4b"),
    name: "盐酸精氨酸注射液",
    badres: [
        "病变",
        "低血糖",
        "肠梗阻",
        "腹泻",
        "疲乏",
        "厌食",
        "尿潴留",
        "血小板减少",
        "过敏",
        "心脏骤停"
    ],
    disease: [
        "贫血",
        "高血压",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec4d"),
    name: "维生素B",
    badres: [
        "电休",
        "病变",
        "麻木",
        "致癌",
        "死亡",
        "眩晕"
    ],
    disease: [
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec4f"),
    name: "依折麦布辛伐他汀片",
    badres: [
        "疲乏",
        "死亡"
    ],
    disease: [
        "强直性脊柱炎",
        "银屑病",
        "风湿性关节炎",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec51"),
    name: "利妥昔单抗注射剂",
    badres: [
        "血液病",
        "疼痛",
        "死亡",
        "恶心"
    ],
    disease: [
        "关节炎",
        "心律失常",
        "心绞痛",
        "脓肿",
        "口咽癌",
        "高血压",
        "上呼吸道感染",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec53"),
    name: "氟喹诺酮",
    badres: [
        "腹泻",
        "幻觉",
        "疼痛"
    ],
    disease: [
        "淋病",
        "结膜炎",
        "腱断裂",
        "心律失常",
        "尿路感染",
        "前列腺感染",
        "肾炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec55"),
    name: "：唑来膦",
    badres: [
        "的致",
        "出生缺陷",
        "无力",
        "室性心律失常",
        "致畸",
        "死亡",
        "恶心",
        "呕吐",
        "横纹肌溶解"
    ],
    disease: [
        "心律失常",
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec57"),
    name: "巯基嘌呤",
    badres: [
        "现幻",
        "死亡"
    ],
    disease: [
        "关节炎",
        "白血病",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec59"),
    name: "依伯汀",
    badres: [
        "记忆力下降",
        "死亡"
    ],
    disease: [
        "贫血",
        "痴呆",
        "精神分裂症",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec5b"),
    name: "莫西沙星",
    badres: [
        "腹泻",
        "肝损害",
        "死亡"
    ],
    disease: [
        "慢性支气管炎",
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec5d"),
    name: "非甾体类抗炎药",
    badres: [
        "疼痛"
    ],
    disease: [
        "痛风性关节炎",
        "关节炎",
        "痛风",
        "风湿性关节炎",
        "风湿",
        "高血压",
        "强直性脊柱炎",
        "骨关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec5f"),
    name: "：依托考昔",
    badres: [
        "恶心",
        "过敏反应",
        "呕吐",
        "眩晕",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "性关节",
        "宫颈癌",
        "荨麻疹",
        "高血压",
        "性痛",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec61"),
    name: "凝聚素",
    badres: [
        "致癌",
        "低血压"
    ],
    disease: [
        "糖尿病",
        "心肌梗死",
        "艾滋病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec63"),
    name: "吗替麦考酚酯",
    badres: [
        "意识混乱",
        "死亡"
    ],
    disease: [
        "帕金森",
        "红斑狼疮",
        "在帕金"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec65"),
    name: "对达芦那韦",
    badres: [
        "肝损害",
        "肝损伤",
        "厌食",
        "疼痛",
        "恶心",
        "死亡",
        "乏力"
    ],
    disease: [
        "肝炎",
        "黄疸",
        "肝硬化",
        "艾滋病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec67"),
    name: "波生坦",
    badres: [
        "嗜睡"
    ],
    disease: [
        "流产",
        "冒咳",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec69"),
    name: "尼索地平",
    badres: [
        "病变",
        "感觉不适",
        "或中毒性表皮坏死松解",
        "肝损害",
        "意外反应",
        "重肝损",
        "厌食",
        "中毒性表皮坏死松解症",
        "死亡",
        "恶心",
        "出血",
        "呕吐",
        "乏力",
        "过敏"
    ],
    disease: [
        "腹痛",
        "性肝",
        "黄疸",
        "毛囊炎",
        "如癌",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec6b"),
    name: "葡萄柚汁",
    badres: [
        "，但",
        "示，",
        "出血"
    ],
    disease: [
        "冠心病",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec6d"),
    name: "齐留通",
    badres: [
        "嗜睡"
    ],
    disease: [
        "过敏性鼻炎",
        "冒咳",
        "咳嗽",
        "哮喘",
        "流产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec6f"),
    name: "莫西沙星",
    badres: [
        "或中毒性表皮坏死松解",
        "肝损害",
        "中毒性表皮坏死松解症",
        "死亡",
        "出血"
    ],
    disease: [
        "性肝",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec71"),
    name: "尼索地平",
    badres: [
        "病变",
        "肝损害",
        "厌食",
        "重肝损",
        "死亡",
        "恶心",
        "呕吐",
        "乏力",
        "过敏"
    ],
    disease: [
        "腹痛",
        "如癌",
        "黄疸",
        "毛囊炎",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec73"),
    name: "葡萄柚汁",
    badres: [
        "，但",
        "示，",
        "出血"
    ],
    disease: [
        "冠心病",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec75"),
    name: "齐留通",
    badres: [
        "：呼吸困",
        "、嗜",
        "、晕",
        "死亡",
        "、心跳过"
    ],
    disease: [
        "过敏性鼻炎",
        "哮喘",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec77"),
    name: "去羟肌苷",
    badres: [
        "病变",
        "经病"
    ],
    disease: [
        "糖尿病",
        "高血压",
        "乙型",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec79"),
    name: "布洛芬",
    badres: [
        "病变",
        "乏力",
        "死亡"
    ],
    disease: [
        "感冒药",
        "感冒",
        "“咳",
        "和感",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec7b"),
    name: "奥美拉唑",
    badres: [
        "胃溃疡"
    ],
    disease: [
        "感冒"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec7d"),
    name: "奥美拉唑",
    badres: [
        "幻觉",
        "神经错乱",
        "猝死"
    ],
    disease: [
        "流感",
        "心力衰竭",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec7f"),
    name: "左乙拉西坦",
    badres: [
        "随支气管痉"
    ],
    disease: [
        "偏头痛",
        "癫痫",
        "情感障碍"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec81"),
    name: "得理多",
    badres: [
        "或脱",
        "疼痛",
        "现皮"
    ],
    disease: [
        "躁狂症",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec83"),
    name: "度洛西汀",
    badres: [
        "病变",
        "腹泻",
        "肌痛",
        "无力",
        "和中毒性表皮坏死松解",
        "恶心",
        "疼痛"
    ],
    disease: [
        "消化不良",
        "腹痛",
        "肌无力",
        "肝炎",
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec85"),
    name: "马来酸罗格列酮片",
    badres: [
        "嗜睡",
        "低血糖",
        "无食欲",
        "胃痛",
        "高血糖",
        "幻觉",
        "体重增加",
        "花、",
        "致体重增",
        "其他降",
        "心衰",
        "恶心",
        "呕吐",
        "和体重增",
        "低血"
    ],
    disease: [
        "和中",
        "糖尿病",
        "（心绞",
        "高血压",
        "感冒",
        "种糖尿",
        "制高血",
        "、心力衰",
        "疗心绞",
        "心力衰竭",
        "水肿",
        "斑水",
        "糖尿",
        "失眠",
        "现心力衰",
        "骨折",
        "心肌梗塞",
        "心绞痛",
        "头痛",
        "贫血",
        "（心肌梗"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec87"),
    name: "奥美拉唑",
    badres: [
        "死亡",
        "猝死"
    ],
    disease: [
        "心力衰竭",
        "抑郁症",
        "心绞痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec89"),
    name: "奥美拉唑",
    badres: [
        "幻觉",
        "意识模糊"
    ],
    disease: [
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec8b"),
    name: "氯屈膦酸二钠",
    badres: [
        "病变",
        "耳鸣",
        "皮疹",
        "和中毒性表皮坏死溶解",
        "肌痛",
        "出血",
        "视力下降",
        "高脂血症",
        "疼痛",
        "视觉异常",
        "）和中毒性表皮坏死溶",
        "视觉损害",
        "高钙血症"
    ],
    disease: [
        "糖尿病",
        "癫痫",
        "结膜炎",
        "抑郁症",
        "白内障",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec8d"),
    name: "甘油",
    badres: [
        "病变",
        "心房扑动",
        "心梗",
        "室性心律失常",
        "高脂血症",
        "视力下降",
        "肥胖",
        "高血脂",
        "疼痛",
        "猝死",
        "出血",
        "头疼"
    ],
    disease: [
        "动脉硬化",
        "冠心病",
        "糖尿病",
        "弱视",
        "癫痫",
        "关节炎",
        "心肌梗死",
        "肾结石",
        "脑出血",
        "心律失常",
        "抑郁症",
        "类风湿",
        "高血脂",
        "高血压",
        "水肿",
        "前列腺癌",
        "中风",
        "皮肤癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec8f"),
    name: "NSAIDs",
    badres: [
        "嗜睡",
        "耳鸣",
        "尿频",
        "耳聋",
        "高血糖",
        "性猝",
        "晕厥",
        "视觉异",
        "体位性低血压",
        "过敏反应",
        "感觉异常",
        "白细胞减少",
        "皮疹",
        "休克",
        "感觉",
        "心悸",
        "血尿",
        "疼痛",
        "高钠血症",
        "剥脱性皮炎",
        "鼻塞",
        "高尿酸血症",
        "吞咽困难",
        "病变",
        "心动过速",
        "耳痛",
        "腹泻",
        "、室性心律失",
        "鼻衄",
        "乏力",
        "低血压",
        "呕吐",
        "出血",
        "眩晕",
        "低血糖",
        "夜尿",
        "及脑内出",
        "视力下降",
        "头痛",
        "视觉异常",
        "心脏骤停",
        "呼吸困难",
        "口干"
    ],
    disease: [
        "关节炎",
        "糖尿病",
        "肌无力",
        "咳嗽",
        "高血压",
        "，高血",
        "喉炎",
        "腹痛",
        "荨麻疹",
        "流感",
        "心力衰竭",
        "中风",
        "水肿",
        "膀胱炎",
        "消化不良",
        "痛风",
        "癫痫",
        "风湿性关节炎",
        "心肌病",
        "哮喘",
        "：心肌梗",
        "心肌缺血",
        "骨关节炎",
        "失眠",
        "偏头痛",
        "结膜炎",
        "和肺出",
        "尿道感染",
        "心绞痛",
        "胃炎",
        "、脑出",
        "白内障",
        "贫血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec91"),
    name: "NSAIDs",
    badres: [
        "中毒性表皮坏死松解症",
        "心衰",
        "多形性红斑"
    ],
    disease: [
        "重的皮肤",
        "骨关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec93"),
    name: "马兜铃酸",
    badres: [
        "肝损害"
    ],
    disease: [
        "痰喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec95"),
    name: "阿立哌唑",
    badres: [
        "高的",
        "心衰",
        "死亡",
        "猝死"
    ],
    disease: [
        "精神分裂症",
        "肺炎",
        "老年",
        "躁狂症",
        "痴呆"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec97"),
    name: "NSAIDs",
    badres: [
        "出血"
    ],
    disease: [
        "关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec99"),
    name: "布洛芬",
    badres: [
        "病变",
        "高脂血症",
        "视力损害",
        "死亡",
        "视觉损害",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "高血压",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec9b"),
    name: "丁咯地尔片",
    badres: [
        "：呼吸困",
        "、头",
        "或嗜",
        "耳鸣",
        "、意识混",
        "疼痛",
        "死亡",
        "记忆力",
        "眩晕"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec9d"),
    name: "利妥昔单抗",
    badres: [
        "肠梗阻",
        "疼痛",
        "死亡"
    ],
    disease: [
        "关节炎",
        "腹痛",
        "艾滋病",
        "红斑狼疮",
        "类风湿",
        "白血病",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ec9f"),
    name: "左氧氟沙星",
    badres: [
        "疼痛"
    ],
    disease: [
        "咳血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eca1"),
    name: "NSAIDs",
    badres: [
        "疼痛",
        "意识混乱",
        "死亡"
    ],
    disease: [
        "流感",
        "关节炎",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eca3"),
    name: "NSAIDs",
    badres: [
        "嗜睡",
        "心动过速",
        "死亡",
        "呕吐",
        "昏迷"
    ],
    disease: [
        "中风",
        "抑郁症",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eca5"),
    name: "赛诺菲巴斯德",
    badres: [
        "死亡"
    ],
    disease: [
        "肌无力",
        "流感染",
        "脑膜炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eca7"),
    name: "抑肽酶注射液",
    badres: [
        "死亡",
        "出血"
    ],
    disease: [
        "群脑膜",
        "心力衰竭",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eca9"),
    name: "凝血酶",
    badres: [
        "白细胞增多",
        "出血",
        "，室性心律失",
        "：少",
        "，休"
    ],
    disease: [
        "性心力衰",
        "心肌梗"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecab"),
    name: "甲磺酸伊马替尼胶囊",
    badres: [
        "心动过速",
        "见少",
        "心衰",
        "死亡",
        "出血",
        "的出"
    ],
    disease: [
        "冠心病",
        "糖尿病",
        "心肌病",
        "肺水肿",
        "白血病",
        "高血压",
        "心力衰竭",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecad"),
    name: "巴利昔单抗",
    badres: [
        "显示",
        "死亡"
    ],
    disease: [
        "高风险"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecaf"),
    name: "阿司匹林",
    badres: [
        "死亡"
    ],
    disease: [
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecb1"),
    name: "拉莫三嗪片",
    badres: [
        "出生缺陷",
        "癫痫发作",
        "生猝",
        "猝死",
        "发生"
    ],
    disease: [
        "腭裂",
        "癫痫",
        "唇裂",
        "、中",
        "高血压",
        "头痛",
        "和心肌梗"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecb3"),
    name: "：贝伐珠单",
    badres: [
        "致癌",
        "血细胞减少",
        "血小板减少",
        "死亡"
    ],
    disease: [
        "关节炎",
        "银屑病",
        "类风湿",
        "强直性脊柱炎",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecb5"),
    name: "英夫利西单抗",
    badres: [
        "呼吸困难",
        "新生儿出生缺陷"
    ],
    disease: [
        "抑郁症",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecb7"),
    name: "佐米曲普坦",
    badres: [
        "肝损害",
        "心跳加快",
        "睡眠不佳",
        "腹泻",
        "幻觉",
        "恶心",
        "疼痛",
        "呕吐",
        "乏力"
    ],
    disease: [
        "关节炎",
        "偏头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecb9"),
    name: "对乙酰氨基酚",
    badres: [
        "肝损伤",
        "肝损害",
        "有肝损"
    ],
    disease: [
        "肝炎",
        "感冒药"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecbb"),
    name: "右旋哌甲酯",
    badres: [
        "猝死",
        "死亡",
        "有猝",
        "性死"
    ],
    disease: [
        "到重度",
        "血压、动"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecbd"),
    name: "盐酸雷洛昔芬",
    badres: [
        "死亡"
    ],
    disease: [
        "、糖尿",
        "心肌梗塞",
        "、高血",
        "中风",
        "有中",
        "者中"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecbf"),
    name: "盐酸雷洛昔芬片",
    badres: [
        "死亡"
    ],
    disease: [
        "胞肺",
        "中风",
        "肺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecc1"),
    name: "的吉非替尼",
    badres: [
        "性视力下",
        "视觉损害",
        "视力损害"
    ],
    disease: [
        "部缺血性视神经病",
        "糖尿病",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecc3"),
    name: "精氨酸",
    badres: [
        "肝损害",
        "出生缺陷",
        "例颅内出",
        "婴儿出生缺陷",
        "死亡"
    ],
    disease: [
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecc5"),
    name: "复方芦荟胶囊",
    badres: [
        "的致",
        "肝损害",
        "胃痛",
        "致畸",
        "死亡",
        "恶心",
        "呕吐",
        "乏力"
    ],
    disease: [
        "肝炎",
        "腹痛",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecc7"),
    name: "的复方芦荟胶",
    badres: [
        "出生缺陷",
        "致畸"
    ],
    disease: [
        "抑郁症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecc9"),
    name: "盐酸帕罗西汀",
    badres: [
        "死亡"
    ],
    disease: [
        "强迫症",
        "焦虑症",
        "抑郁症",
        "，抑郁"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eccb"),
    name: "加替沙星",
    badres: [
        "血糖升高",
        "室性心律失常",
        "死亡"
    ],
    disease: [
        "糖尿病",
        "癫痫",
        "心律失常",
        "强迫症",
        "焦虑症",
        "抑郁症",
        "慢性支气管炎",
        "肺炎",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eccd"),
    name: "滴眼液",
    badres: [
        "高血糖",
        "低血糖"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eccf"),
    name: "奥利司他",
    badres: [
        "低血糖",
        "心动过速",
        "高血糖",
        "昏厥",
        "死亡",
        "大便",
        "心悸"
    ],
    disease: [
        "糖尿病",
        "心律失常",
        "高血压",
        "和心律失",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecd1"),
    name: "盐酸异丙嗪",
    badres: [
        "致癌",
        "死亡",
        "出生缺陷"
    ],
    disease: [
        "痤疮",
        "皮肤癌",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecd3"),
    name: "盐酸异丙嗪注射液",
    badres: [
        "幻觉",
        "死亡"
    ],
    disease: [
        "早产",
        "高血压",
        "心肌梗塞",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecd5"),
    name: "右旋苯丙胺",
    badres: [
        "升高血压",
        "的死",
        "死亡",
        "猝死",
        "注意力不集中",
        "横纹肌溶解"
    ],
    disease: [
        "心力衰竭",
        "心律失常",
        "中风",
        "心肌梗塞"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecd7"),
    name: "右旋苯丙胺",
    badres: [
        "呼吸兴奋",
        "皮疹",
        "幻觉",
        "头晕",
        "头昏心慌",
        "死亡"
    ],
    disease: [
        "心肌梗塞"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecd9"),
    name: "米索前列醇",
    badres: [
        "嗜睡",
        "出生缺陷",
        "腹泻",
        "死亡",
        "过敏反应",
        "恶心",
        "呕吐",
        "过敏",
        "药疹"
    ],
    disease: [
        "腹痛",
        "败血症",
        "流产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecdb"),
    name: "羟基脲",
    badres: [
        "肝损害",
        "皮疹",
        "恶心",
        "呕吐",
        "阴道出血"
    ],
    disease: [
        "头痛",
        "腹痛",
        "败血症",
        "流产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecdd"),
    name: "羟基脲",
    badres: [
        "皮疹",
        "皮炎"
    ],
    disease: [
        "流感"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecdf"),
    name: "苯佐卡因",
    badres: [
        "降低血压",
        "高铁血红蛋白血症",
        "死亡",
        "出血",
        "致死"
    ],
    disease: [
        "流感",
        "防和",
        "胺作"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ece1"),
    name: "猴枣散",
    badres: [
        "癌变"
    ],
    disease: [
        "感冒",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ece3"),
    name: "盐酸哌甲酯片",
    badres: [
        "食欲下降",
        "中毒性表皮坏死溶解",
        "困意",
        "胃痛",
        "体重下降",
        "恶梦",
        "皮疹",
        "焦虑",
        "心悸",
        "死亡",
        "疼痛",
        "剥脱性皮炎",
        "心慌",
        "心动过速",
        "腹泻",
        "无力",
        "头晕",
        "幻觉",
        "厌食",
        "眩晕",
        "恶心",
        "食欲增加",
        "呕吐"
    ],
    disease: [
        "消化不良",
        "偏头痛",
        "癫痫",
        "便失禁",
        "性痴",
        "高血压",
        "中",
        "头痛",
        "痴呆",
        "失眠"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ece5"),
    name: "厄贝沙",
    badres: [
        "致癌",
        "过敏",
        "湿疹"
    ],
    disease: [
        "心哮",
        "湿疹",
        "皮肤癌",
        "淋巴瘤",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ece7"),
    name: "吡美莫司乳膏",
    badres: [
        "中出",
        "少出",
        "出血"
    ],
    disease: [
        "中风",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ece9"),
    name: "马来酸罗格列酮片",
    badres: [
        "病变",
        "皮疹",
        "休克",
        "体重增加",
        "为血糖升",
        "低血压",
        "死亡",
        "过敏反应",
        "视觉损害",
        "过敏",
        "呼吸困难"
    ],
    disease: [
        "糖尿病",
        "或糖尿",
        "荨麻疹",
        "心肌梗塞",
        "高血压",
        "心力衰竭",
        "中风",
        "水肿",
        "为糖尿",
        "斑水",
        "便秘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eceb"),
    name: "马来酸罗格列酮",
    badres: [
        "高血糖",
        "低血糖",
        "死亡"
    ],
    disease: [
        "糖尿病",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eced"),
    name: "凝血",
    badres: [
        "出血"
    ],
    disease: [
        "白内障",
        "前列腺增生",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecef"),
    name: "的盐酸坦洛",
    badres: [
        "婴儿心脏缺陷",
        "致畸"
    ],
    disease: [
        "贫血",
        "抑郁症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecf1"),
    name: "颠茄磺苄啶片",
    badres: [
        "过敏",
        "的是",
        "腹泻",
        "外生殖器损害",
        "休克",
        "病变",
        "大瓶表皮松解萎缩性皮炎",
        "为皮",
        "剥脱性皮炎",
        "疼痛",
        "的过敏反",
        "过敏反应",
        "R为过敏"
    ],
    disease: [
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecf3"),
    name: "甘油",
    badres: [
        "生过敏反",
        "降低过敏",
        "胃肠系统损害",
        "对过敏反",
        "、血液系统损",
        "死亡",
        "高氨血症",
        "血液系统损害",
        "中枢神经系统损害",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "胰腺炎",
        "胰炎",
        "胞白血",
        "白血病",
        "性白血",
        "金淋巴"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecf5"),
    name: "丙戊酸钠",
    badres: [
        "皮疹",
        "头晕",
        "和致",
        "致畸",
        "重过敏反",
        "致药",
        "过敏",
        "起皮"
    ],
    disease: [
        "肾结石",
        "失眠",
        "癫痫",
        "头痛",
        "徽痫",
        "、头"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecf7"),
    name: "卡前列甲酯栓",
    badres: [
        "腹泻",
        "皮疹",
        "恶心",
        "过敏反应",
        "排气增多",
        "休克",
        "胃肠道反应",
        "呕吐",
        "麻木",
        "过敏"
    ],
    disease: [
        "流产",
        "腹痛",
        "水肿",
        "产后出血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecf9"),
    name: "奥沙利铂",
    badres: [
        "感觉",
        "呼吸系统损害",
        "洛血性贫血",
        "恶心",
        "血小板减少",
        "见红",
        "感觉异常",
        "外周神经系统损害",
        "乏力",
        "除轻",
        "胃肠道反应",
        "呕吐",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "糊痫",
        "心力衰竭",
        "直肠癌",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecfb"),
    name: "辛伐他汀片",
    badres: [
        "高脂血症",
        "肝脏损害",
        "横纹肌溶解",
        "死亡",
        "疼痛",
        "加横纹肌溶"
    ],
    disease: [
        "来源用于",
        "冠心病",
        "脂血症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecfd"),
    name: "伊立替康",
    badres: [
        "呕吐",
        "关的",
        "等过敏反",
        "恶心",
        "现恶",
        "胃肠道反应",
        "性粒细胞减",
        "力、",
        "为皮",
        "粒细胞减少",
        "、头",
        "、呕",
        "血液系统损害消化系统损害",
        "过敏反应",
        "腹泻",
        "肝损害",
        "重的",
        "低血压",
        "乏力"
    ],
    disease: [
        "肺瘤",
        "直肠癌",
        "结肠癌",
        "腹痛",
        "胃瘤",
        "卵巢癌",
        "癌症",
        "性腹",
        "肺癌",
        "神经炎",
        "大肠癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ecff"),
    name: "甘油果糖",
    badres: [
        "头疼",
        "心衰",
        "梗死",
        "出血",
        "病变",
        "痛觉减退",
        "少尿",
        "无力",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "高血压",
        "体无力",
        "糖尿病",
        "感冒",
        "头痛",
        "性心绞",
        "咳嗽",
        "水肿",
        "脑梗死",
        "脑水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed01"),
    name: "伏立康唑",
    badres: [
        "乏伴",
        "低钾血症",
        "心衰"
    ],
    disease: [
        "肾炎",
        "高血压",
        "心肌损害",
        "起心律失",
        "白血病",
        "冠心病",
        "心律失富",
        "糖尿预"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed03"),
    name: "卡泊芬净",
    badres: [
        "腹泻",
        "皮疹",
        "恶心",
        "死亡",
        "性粒细胞减",
        "发生",
        "出血",
        "腹部不适",
        "粒细胞缺乏",
        "病变",
        "休克",
        "呕吐",
        "血液病",
        "干咳",
        "白细胞降低"
    ],
    disease: [
        "肺气肿",
        "度贫",
        "巴细胞",
        "贫血",
        "腹痛",
        "感冒",
        "头痛",
        "白血病",
        "胸腔积液",
        "喘息",
        "流感",
        "咳嗽",
        "片血病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed05"),
    name: "地佐辛",
    badres: [
        "疼痛",
        "癌痛",
        "病变",
        "费力",
        "患者",
        "呼吸困难",
        "过敏"
    ],
    disease: [
        "93",
        "，",
        "癌痛",
        "气管",
        "防哮",
        "肩周炎",
        "骨痛",
        "已达",
        "肺炎",
        "咳出",
        "%，",
        "咳嗽",
        "肺癌",
        "癌症",
        "哮喘",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed07"),
    name: "甲泼尼龙琥珀酸钠",
    badres: [
        "吞咽困难",
        "高钾血症",
        "意识异常",
        "呼吸衰竭",
        "病变",
        "酸痛",
        "缓性",
        "低钾血症",
        "感觉异常"
    ],
    disease: [
        "肌无力",
        "肾病路合征",
        "肾病综合征",
        "心律失常",
        "水肿",
        "者肌无"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed09"),
    name: ")帕博利珠",
    badres: [
        "系心",
        "疲乏",
        "疼痛",
        "呕吐",
        "酸泻",
        "思心",
        "疯乏",
        "乏力腹泻",
        "糖，心",
        ".脱发",
        "自恶心",
        "皮疹",
        "老心",
        "肌痛",
        "低血",
        "出血",
        "过敏",
        "血小板减少",
        "食欲下降",
        "感觉异常"
    ],
    disease: [
        "胰腺炎",
        "高血压",
        "便秘",
        "腹痛",
        "，高",
        "感冒",
        "头痛",
        "上呼吸道感染",
        "肺动脉"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed0b"),
    name: "葡萄糖酸钙",
    badres: [
        "皮疹",
        "药疹坏死松解",
        "大疱性表皮松解",
        "过教",
        "死亡",
        "药疹",
        "致敏",
        "多形性红斑",
        "药步",
        "休克",
        "剥脱性皮炎",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "红斑",
        "荨麻疹",
        "如抗"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed0d"),
    name: "头孢曲松钠",
    badres: [
        "，",
        "表现",
        "皮疹",
        "为过",
        "R导",
        "、过敏反",
        "乏力",
        "性休",
        "休克",
        "泌尿系结石",
        "过敏反应",
        "过敏",
        "体克"
    ],
    disease: [
        "腹痛",
        "胆结石",
        "泌尿系结石"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed0f"),
    name: "阿帕替尼",
    badres: [
        "腹泻",
        "恶心",
        "头晕",
        "死亡",
        "粒细胞减少",
        "乏力",
        "岖吐",
        "高血表",
        "麻木感",
        "胃肠道反应"
    ],
    disease: [
        "直肠癌",
        "高血压",
        "肝癌",
        "aking诊断",
        "贫血",
        "乳腺癌",
        "头痛",
        "卵巢癌",
        "肺癌",
        "大肠癌",
        "胃癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed11"),
    name: "前奥司他",
    badres: [
        "腹泻",
        "胃肠系统损害",
        "睡眠障碍",
        "恶心",
        "头晕",
        "样显",
        "害，",
        "精神混乱",
        "幻觉",
        "感知混乱",
        "呕吐"
    ],
    disease: [
        "型流",
        "失眠",
        "流感"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed13"),
    name: "氧化钠注射液",
    badres: [
        "过敏"
    ],
    disease: [
        "心力衰竭",
        "感染药",
        "肺水肿",
        "抗感染药"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed15"),
    name: "依达拉奉注射液",
    badres: [
        "皮疹",
        "头晕",
        "死亡",
        "出血",
        "3U",
        "和心动过",
        "自细胞减少",
        "、皮",
        "过敏"
    ],
    disease: [
        "荨麻疹",
        "高血压",
        "脑出血",
        "707",
        "心肌梗死",
        "头痛",
        "血(4",
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed17"),
    name: "天南星",
    badres: [
        "吐逆",
        "腹胀",
        "泄泻",
        "吐泻"
    ],
    disease: [
        "喘嗽",
        "风痫",
        "惊风",
        "秃疮"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed19"),
    name: "苏合香丸",
    badres: [
        "小便不通",
        "懒食"
    ],
    disease: [
        "痰气",
        "惊痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed1b"),
    name: "哌拉西林他唑巴坦",
    badres: [
        "肾损害",
        "粒细胞增多",
        "恶心",
        "肾脏损害",
        "多、",
        "、呕",
        "现恶",
        "酸性粒细胞",
        "呕吐",
        "过敏"
    ],
    disease: [
        "肾炎",
        "升主动脉",
        "质性",
        "腹痛",
        "，腹",
        "肝炎",
        "胃炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed1d"),
    name: "哌拉西林他唑巴坦",
    badres: [
        "肾损害",
        "粒细胞增多",
        "恶心",
        "丘疹",
        "肾脏损害",
        "多、",
        "、呕",
        "现恶",
        "酸性粒细胞",
        "呕吐"
    ],
    disease: [
        "肾炎",
        "升主动脉",
        "质性",
        "腹痛",
        "，腹",
        "肝炎",
        "胃炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed1f"),
    name: "甘草酸",
    badres: [
        "O组患",
        "肝损伤"
    ],
    disease: [
        "白血病",
        "胰腺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed21"),
    name: "丙氨酰谷氨酰胺注射液",
    badres: [
        "腹泻",
        "肝损害",
        "皮疹",
        "疼痛",
        "药疹",
        "休克",
        "心悸",
        "呕吐",
        "过敏",
        "后疼"
    ],
    disease: [
        "腹痛",
        "失眠",
        "肝脓肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed23"),
    name: "丹参滴丸",
    badres: [
        "恶性心律失常",
        "恶心",
        "便血",
        "心动过缓",
        "鼻出血"
    ],
    disease: [
        "强直性脊柱炎",
        "冠心病心绞痛",
        "肌无力",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed25"),
    name: "丹参滴丸",
    badres: [
        "鼻出血",
        "恶心",
        "心动过缓"
    ],
    disease: [
        "强直性脊柱炎",
        "肌无力",
        "高血压",
        "食欲不佳",
        "心绞痛",
        "便血",
        "心律失常",
        "冠心病心绞痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed27"),
    name: "二苯乙烯苷",
    badres: [
        "食欲缺乏",
        "肝损害",
        "皮疹",
        "恶心",
        "鼠急性",
        "死亡",
        "腹胀",
        "起肝损",
        "眼黄",
        "肝损伤",
        "何首乌",
        "乏力",
        "显的肝",
        "尿黄",
        "厌油",
        "的肝损",
        "性肝损",
        "过敏"
    ],
    disease: [
        "高血脂",
        "肝炎",
        "食欲不振"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed29"),
    name: "养血生发胶囊",
    badres: [
        "死广",
        "肝伤",
        "失",
        "肝损",
        "肝损伤",
        "肝振伤",
        "乌及制",
        "病倒"
    ],
    disease: [
        "失眠",
        "疾病",
        "疗高脂血",
        "白风",
        "湿疹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed2b"),
    name: "奥利司他",
    badres: [
        "死亡",
        "的颅内出",
        "出血",
        "肝损伤"
    ],
    disease: [
        "骨折",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed2d"),
    name: "奥利司他",
    badres: [
        "死亡",
        "的颅内出",
        "出血",
        "肝损伤"
    ],
    disease: [
        "骨折",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed2f"),
    name: "利妥昔单抗注射液",
    badres: [
        "支气管痉挛",
        "上性心动",
        "皮疹",
        "呼吸困难",
        "疼痛",
        "性心动过",
        "者诉",
        "出现",
        "心悸",
        "过敏反应",
        "心动过速",
        "过敏"
    ],
    disease: [
        "腹痛",
        "无",
        "u淋",
        "白血病",
        "癌症",
        "水肿",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed31"),
    name: "参菊洗剂",
    badres: [
        "死亡",
        "致敏",
        "病变",
        "休克",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "阴道炎",
        "水肿",
        "喷嚏",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed33"),
    name: "双氯芬酸钠栓",
    badres: [
        "现心懂、胸",
        "鼻塞",
        "肝损害",
        "鼻胀不适",
        "疼痛",
        "药疹",
        "痛觉",
        "肾脏损害",
        "心懂",
        "触过",
        "缓解",
        "胃肠道反应",
        "过敏"
    ],
    disease: [
        "，",
        "肺正",
        "头痛",
        "慢性鼻炎",
        "的感冒",
        "钠引",
        "类风湿",
        "关节炎",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed35"),
    name: "双氯芬酸钠栓",
    badres: [
        "鼻塞",
        "肝损害",
        "疼痛",
        "药疹",
        "痛觉",
        "肾脏损害",
        "现心",
        "心懂",
        "触过",
        "缓解",
        "胃肠道反应",
        "过敏",
        "胀痛"
    ],
    disease: [
        "，",
        "肺正",
        "头痛",
        "慢性鼻炎",
        "的感冒",
        "钠引",
        "类风湿",
        "关节炎",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed37"),
    name: "醋酸泼尼松片",
    badres: [
        "昏迷",
        "疼痛",
        "感觉减弱",
        "眩晕",
        "病变",
        "乏力",
        "过敏"
    ],
    disease: [
        "骨折",
        "性骨",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed39"),
    name: "吡咯里西啶",
    badres: [
        "，致",
        "，致突",
        "死亡",
        "致癌",
        "病变"
    ],
    disease: [
        "肺气肿",
        "水肿",
        "早产",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed3b"),
    name: "盐酸麻黄碱",
    badres: [
        "口干",
        "昏沉",
        "恶心",
        "头晕",
        "遗尿",
        "尿频",
        "排尿困难",
        "呕吐",
        "D“尿"
    ],
    disease: [
        "前列腺增生",
        "尿潴",
        "感冒",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed3d"),
    name: "二苯乙烯苷",
    badres: [
        "肝损伤"
    ],
    disease: [
        "型肝",
        "的肝"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed3f"),
    name: "盐酸普罗帕酮片",
    badres: [
        "悸恶",
        "，头",
        "导致",
        "药物",
        "死亡",
        "括皮",
        "、呼吸困",
        "、头",
        "、呕",
        "，皮",
        "物过"
    ],
    disease: [
        "于抗心律",
        "心律失常",
        "心律夹常",
        "响抗心律"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed41"),
    name: "丹参多酚酸盐",
    badres: [
        "肾损害",
        "低血糖",
        "皮疹",
        "死亡",
        "出血",
        "面部潮红",
        "心悸",
        "麻木",
        "呕吐",
        "过敏反应"
    ],
    disease: [
        "糖尿病",
        "膀胱癌",
        "胰廉炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed43"),
    name: "沙格雷酯",
    badres: [
        "死亡",
        "后出"
    ],
    disease: [
        "散部",
        "膀胱癌",
        "队列研"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed45"),
    name: "地龙胶囊",
    badres: [
        "过敏",
        "头晕",
        "眩晕",
        "过敏反应",
        "昏迷"
    ],
    disease: [
        "头痛",
        "高血压",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed47"),
    name: "亚叶酸钙",
    badres: [
        "肾脏害",
        "呕吐",
        "生胃肠道反",
        "除血小板减"
    ],
    disease: [
        "细白血",
        "白血病",
        "胞白血",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed49"),
    name: "天麻素注射液",
    badres: [
        "呼吸系统损害",
        "皮疹",
        "恶心",
        "化道",
        "药疹",
        "13岁，因",
        "心慌",
        "衰弱",
        "休克",
        "呼吸困难",
        "呕吐",
        "过敏反应",
        "消化系统损害",
        "过敏"
    ],
    disease: [
        "荨麻疹",
        "腹痛",
        "头痛",
        "红肿",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed4b"),
    name: "天麻素注射液",
    badres: [
        "皮疹",
        "恶心",
        "化道",
        "，因",
        "药疹",
        "心慌",
        "窦性心律",
        "衰弱",
        "休克",
        "呼吸困难",
        "呕吐",
        "过敏反应",
        "消化系统损害",
        "过敏",
        "憋喘"
    ],
    disease: [
        "荨麻疹",
        "腹痛",
        "头痛",
        "红肿",
        "斑丘疹",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed4d"),
    name: "地塞米松",
    badres: [
        "心外管系统损害",
        "休克",
        "胃肠道反应",
        "呼吸困难",
        "血尿",
        "过敏反应",
        "过敏",
        "体克"
    ],
    disease: [
        "脑膜炭",
        "89",
        "关节炎",
        "类风湿",
        "肺炎",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed4f"),
    name: "地塞米松",
    badres: [
        "呼吸系统损害",
        "胃肠道反应",
        "休克",
        "胃肠系统插害",
        "呼吸困难",
        "血尿",
        "过敏反应",
        "过敏",
        "体克"
    ],
    disease: [
        "89",
        "脑膜炎",
        "关节炎",
        "类风湿",
        "肺炎",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed51"),
    name: "奥拉帕尼片",
    badres: [
        "发的肝",
        "恶心",
        "肝损伤",
        "惡心",
        "呕吐",
        "心动过速",
        "过敏"
    ],
    disease: [
        "贫血",
        "乳腺癌",
        "疗卵巢",
        "卵巢癌",
        "胃癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed53"),
    name: "奥美拉唑",
    badres: [
        "关肝功",
        "肝损害",
        "5例：",
        "以肝损",
        "远高",
        "肾功，过"
    ],
    disease: [
        "消化性溃疡"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed55"),
    name: "野百合碱",
    badres: [
        "死亡",
        "出血"
    ],
    disease: [
        "早产",
        "如糖尿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed57"),
    name: "野百合碱",
    badres: [
        "死亡",
        "出血"
    ],
    disease: [
        "早产",
        "如糖尿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed59"),
    name: "安特逍胶囊",
    badres: [
        "呕吐",
        "体重下降"
    ],
    disease: [
        "肝癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed5b"),
    name: "氟沙星注射液",
    badres: [
        "肢体",
        "横纹肌溶解",
        "梗死",
        "疼痛",
        "肌病、横纹",
        "发生",
        ".No.5",
        "肢",
        "入术",
        "能咳",
        "素所致横纹",
        "痛，横纹肌",
        "史5年.",
        "尿色改变"
    ],
    disease: [
        "咳疾",
        "咳痰",
        "，无"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed5d"),
    name: "氟沙星注射液",
    badres: [
        "横纹肌溶解",
        "疼痛",
        "肌病、横纹",
        "发生",
        ".No.5",
        "肢",
        "入术",
        "素所致横纹",
        "痛，横纹肌",
        "史5年.",
        "尿色改变"
    ],
    disease: [
        "咳痰",
        "，无"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed5f"),
    name: "异补骨脂素",
    badres: [
        "肝损",
        "肝损伤"
    ],
    disease: [
        "白搬风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed61"),
    name: "异补骨脂素",
    badres: [
        "肝损",
        "肝损伤"
    ],
    disease: [
        "白搬风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed63"),
    name: "恩格列净片",
    badres: [
        "事件",
        "主要为",
        "心慌",
        "并肥",
        "心悸",
        "管死",
        "过敏"
    ],
    disease: [
        "高血压",
        "糖尿病",
        "；高",
        "型糖尿",
        "冠心病",
        "加了心律"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed65"),
    name: "布洛芬",
    badres: [
        "支气管痉挛",
        "47",
        "肝损害",
        "皮疹",
        "恶心",
        "粒细胞增多",
        "周神经系统损害尿系统损害思系统损害",
        "疼痛",
        "治疗",
        "呼吸困难",
        "呕吐",
        "过敏反应",
        "过敏",
        "皮肤过敏反应"
    ],
    disease: [
        "感冒",
        "牙痛",
        "头痛",
        "退烧",
        "关节炎",
        "构成",
        "类风湿",
        "哮喵",
        "哮喘",
        "荨麻瘩"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed67"),
    name: "布洛芬",
    badres: [
        "支气管痉挛",
        "47",
        "肝损害",
        "皮疹",
        "恶心",
        "视觉功能损害",
        "周神经系统损害尿系统损害思系统损害",
        "疼痛",
        "肝脏损害",
        "粒细胞增多",
        "治疗",
        "呼吸困难",
        "呕吐",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "感冒",
        "头痛",
        "关节炎",
        "构成",
        "类风湿",
        "哮喵",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed69"),
    name: "分枝杆菌药",
    badres: [
        "皮疹",
        "致畸",
        "血小板减少",
        "报",
        "白细胞减少",
        "粒细胞减少",
        "思者",
        "过敏反应"
    ],
    disease: [
        "艾滋病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed6b"),
    name: "AIDS",
    badres: [
        "皮疹",
        "致畸",
        "血小板减少",
        "报",
        "白细胞减少",
        "粒细胞减少",
        "思者",
        "过敏反应"
    ],
    disease: [
        "艾滋病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed6d"),
    name: "碘普罗胺",
    badres: [
        "过敏",
        "处置",
        "过敏反应",
        "休克",
        "20",
        "神经系统损害",
        "消化系统损害",
        "往造",
        "nc"
    ],
    disease: [
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed6f"),
    name: "碘普罗胺",
    badres: [
        "过敏",
        "处置",
        "过敏反应",
        "休克",
        "和有",
        "神经系统损害",
        "消化系统损害",
        "往造",
        "nc"
    ],
    disease: [
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed71"),
    name: "环磷酰胺",
    badres: [
        "死亡",
        "肝损伤",
        "乏力",
        "食欲下降",
        "性肝损",
        "至死"
    ],
    disease: [
        "性肝硬",
        "乳腺癌",
        "宫颈癌",
        "黄疸",
        "胆囊炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed73"),
    name: "环磷酰胺",
    badres: [
        "死亡",
        "肝损伤",
        "乏力",
        "食欲下降",
        "性肝损",
        "至死"
    ],
    disease: [
        "性肝硬",
        "乳腺癌",
        "脂肪肝",
        "宫颈癌",
        "慢性胆囊炎",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed75"),
    name: "比索洛尔",
    badres: [
        "低血压"
    ],
    disease: [
        "心力衰竭",
        "高血压",
        "糖尿病",
        "降低心力",
        "心绞痛",
        "心力衰端",
        "明，心力"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed77"),
    name: "比索洛尔",
    badres: [
        "心力衰端",
        "低血压"
    ],
    disease: [
        "心力衰竭",
        "高血压",
        "糖尿病",
        "降低心力",
        "心绞痛",
        "明，心力"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed79"),
    name: "阿加曲班注射液",
    badres: [
        "：考",
        "精神失常",
        "猝死",
        "力农",
        "憋气",
        "呼吸困难",
        "晕厥"
    ],
    disease: [
        "肢间",
        "高血压",
        "糖尿病",
        "感冒",
        "抑郁症",
        "精神分裂症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed7b"),
    name: "西达本胺片",
    badres: [
        "肝胆损害",
        "统损害",
        "血小板减少",
        "白细胞减少",
        "胃肠损害",
        "包括血小板",
        "粒细胞减少",
        "乏力",
        "心衰"
    ],
    disease: [
        "贫血",
        "肺炎",
        "淋巴瘤",
        "心力衰竭"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed7d"),
    name: "左乙拉西坦片",
    badres: [
        "8例，中毒性表皮",
        "皮疹",
        "头晕",
        "皮肤过敏",
        "疼痛",
        "诊，考虑",
        "状脱",
        "导皮",
        "剥脱性皮炎",
        "心悸",
        "过敏"
    ],
    disease: [
        "情感障碍",
        "高血压",
        "癫痫",
        "头痛",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed7f"),
    name: "帮助评价成",
    badres: [
        "刹亡",
        "腺癌"
    ],
    disease: [
        "l，用",
        "前列腺癌",
        "的去势抵",
        "于甲",
        "类风湿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed81"),
    name: "替格瑞洛",
    badres: [
        "死亡",
        ".呼吸困",
        "血小板降低",
        "致死",
        "头晕",
        "血小板减少性紫癜",
        "心动过缓",
        "呼吸困难",
        "麻木",
        "病死",
        "无出",
        "去世",
        "出血",
        "，出",
        "及呼吸困",
        "死广",
        "以出",
        "血小板减少",
        "头胀"
    ],
    disease: [
        "合并心肌",
        "失眠",
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed83"),
    name: "替格瑞洛",
    badres: [
        "病死",
        "死广",
        "致死",
        "以出",
        "头晕",
        "无出",
        "去世",
        "死亡",
        "血小板减少",
        "血小板降低",
        "出血",
        "，出",
        ".呼吸困",
        "及呼吸困",
        "心动过缓",
        "呼吸困难",
        "血栓性血小板减少",
        "麻木"
    ],
    disease: [
        "合并心肌",
        "失眠",
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed85"),
    name: "替比夫定片",
    badres: [
        "四肢",
        "疼痛",
        "经病",
        "肌痛",
        "横纹肌溶解",
        "木及",
        "病变",
        "神经",
        "骨病",
        "无力",
        "麻木"
    ],
    disease: [
        "肾性贫血",
        "肌无力",
        "高血压",
        "糖尿病",
        "病毒性肝炎",
        "透析高",
        "示肝硬",
        "、腹腔积",
        "肝炎",
        ")糖尿病视网",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed87"),
    name: "替比夫定片",
    badres: [
        "四肢",
        "高血压",
        "疼痛",
        "经病",
        "肌痛",
        "横纹肌溶解",
        "木及",
        "病变",
        "神经",
        "骨病",
        "无力",
        "麻木"
    ],
    disease: [
        "肾性贫血",
        "肌无力",
        "糖尿病",
        "病毒性肝炎",
        "透析高",
        "示肝硬",
        "肝炎",
        ")糖尿病视网",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed89"),
    name: "凝血酶",
    badres: [
        "的死",
        "：颅内出",
        "及",
        "靶病",
        "略血",
        "出血性疾病",
        "和血小板缺",
        "颅内出血",
        "脉C",
        "间的出血事",
        "血及血小板",
        "件、血小板",
        "发心",
        "增加",
        "出血",
        "A组的血小",
        "呕血",
        "间的",
        "、消化道出",
        "血小板减少",
        "程度",
        "患者",
        "休克"
    ],
    disease: [
        "、心力衰",
        "心肌梗死",
        "发心肌梗",
        "高型心肌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed8b"),
    name: "波生坦片",
    badres: [
        "间心",
        "头晕",
        "性肝",
        "肝损伤",
        "肝细胞损害",
        "病变",
        "l·L",
        "合性肝",
        "于肝"
    ],
    disease: [
        "头痛",
        "肝炎",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed8d"),
    name: "丁二磺酸腺苷蛋氨酸",
    badres: [
        "支气管痉挛",
        "呼吸困",
        "肝损害",
        "恶心",
        "头晕",
        "腹胀",
        "过圾",
        "乏力",
        "呼吸困难",
        "呕吐",
        "过敏"
    ],
    disease: [
        "荨麻疹",
        "高血压",
        "感冒胶囊",
        "咳嗽",
        "肝炎",
        "感冒冲剂"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed8f"),
    name: "丁二磺酸腺苷蛋氨酸",
    badres: [
        "支气管痉挛",
        "肝损害",
        "恶心",
        "头晕",
        "腹胀",
        "乏力",
        "呼吸困难",
        "呕吐",
        "过敏"
    ],
    disease: [
        "荨麻疹",
        "高血压",
        "感冒胶囊",
        "咳嗽",
        "肝炎",
        "感冒冲剂"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed91"),
    name: "苯巴比妥",
    badres: [
        "高脂血症",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "者咳",
        "肝炎",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed93"),
    name: "伏立康注射液",
    badres: [
        "过敏"
    ],
    disease: [
        "高脂血症",
        "癫痫",
        "糖尿病",
        "臉痫",
        "者咳",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed95"),
    name: "他唑巴坦钠",
    badres: [
        "皮疹",
        "皮疹加重",
        "死亡",
        "药疹",
        "脱屑",
        "过敏反应",
        "休克",
        "呕吐",
        "多形性红斑",
        "过敏"
    ],
    disease: [
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed97"),
    name: "甘露醇",
    badres: [
        "粒细、血小板减少",
        "血细胞减少",
        "皮疹",
        "血小板减少",
        "白细胞减少",
        "粒细胞减少",
        "昏睡",
        "病理征",
        "呕吐",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "贫血",
        "产后出血",
        "脑膜炎",
        "肺炎",
        "嗜血杆",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed99"),
    name: "更昔洛韦",
    badres: [
        "血细胞减少",
        "皮疹",
        "血小板减少",
        "血细抱减少",
        "白细胞减少",
        "粒细胞减少",
        "昏睡",
        "病理征",
        "体温",
        "呕吐",
        "感觉不配合",
        "过敏",
        "恶心呕吐"
    ],
    disease: [
        "糖尿病",
        "贫血",
        "产后出血",
        "流感",
        "脑膜炎",
        "肺炎",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed9b"),
    name: "唑来酸",
    badres: [
        "良事",
        "腹泻",
        "肾损害",
        "基心",
        "疼痛",
        "死亡",
        "肌痛",
        "肾功能损害",
        "理性骨折",
        "病变",
        "低钾血症",
        "低钙血症",
        "胃肠道反应",
        "呕吐"
    ],
    disease: [
        "肺气肿",
        "腹痛",
        "癌和乳",
        "头痛",
        "痛、"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed9d"),
    name: "唑来酸",
    badres: [
        "良事",
        "腹泻",
        "肾损害",
        "基心",
        "疼痛",
        "死亡",
        "肌痛",
        "肾功能损害",
        "理性骨折",
        "头痛",
        "病变",
        "低钾血症",
        "低钙血症",
        "呕吐"
    ],
    disease: [
        "肺气肿",
        "腹痛",
        "癌和乳",
        "痛、"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510ed9f"),
    name: "盐酸莫西沙星氯化钠注射液",
    badres: [
        "该患者",
        "肝损害",
        "对药物",
        "腹胀",
        "起肝报",
        "与肝损",
        "肝损伤",
        "次肝损",
        "过敏"
    ],
    disease: [
        "冠心病",
        "咳嗽",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eda1"),
    name: "甘露醇",
    badres: [
        "物过",
        "恶心",
        "皮疹",
        "出血",
        "肝损伤",
        "蛛网膜下腔出血",
        "专科",
        "呕吐",
        "昏迷"
    ],
    disease: [
        "认肝",
        "高血压",
        "糖尿病",
        "头痛",
        "肺炎",
        "大量",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eda3"),
    name: "布地奈德",
    badres: [
        "过敏性休克伴溶血性贫血",
        "头晕",
        "呼吸困难",
        "死亡",
        "休克",
        "无力",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "贫血",
        "咳嗽",
        "黄疸",
        "咳痰",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eda5"),
    name: "盐酸氨溴索注射液",
    badres: [
        "肾损害"
    ],
    disease: [
        "肾结石",
        "肺炎",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eda7"),
    name: "氯化钠注射液",
    badres: [
        "皮疹",
        "出血",
        "胸闷",
        "呼吸闲",
        "呼吸困难",
        "过敏"
    ],
    disease: [
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510eda9"),
    name: "甲泼尼龙",
    badres: [
        "皮疹",
        "食欲减退",
        "所致剥脱性",
        "肿性红斑",
        "呛咳",
        "皮肤瘙痒",
        "”脱性皮炎",
        "体湿",
        "脱料",
        "剥脱性皮炎",
        "过敏反应",
        "过敏",
        "超敏反应"
    ],
    disease: [
        "癫痫",
        "高血压",
        "贫血",
        "水肿",
        "糖尿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510edab"),
    name: "注射用泮托拉唑钠",
    badres: [
        "，",
        "疼痛",
        "呕吐",
        "麻木",
        "疗消化性溃",
        "过敏"
    ],
    disease: [
        "腹痛",
        "配合"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510edad"),
    name: "盐酸万古霉素",
    badres: [
        "皮肤脱落",
        "皮疹",
        "剥脱性角质松解症",
        "疼痛",
        "心脏骤停",
        "脱落",
        "，药",
        "、脱",
        "剥脱",
        "为手指剥脱性角质松解",
        "脱皮",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510edaf"),
    name: "磷酸肌酸钠",
    badres: [
        "低钙血症",
        "心肌损害",
        "心力衰",
        "高磷血症"
    ],
    disease: [
        "高血压",
        "糖尿病",
        "心肌损害",
        "早产",
        "心肌炎",
        "水肿",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510edb1"),
    name: "美罗培南",
    badres: [
        "皮疹",
        "昏迷",
        "全身剥脱性皮炎",
        "死亡",
        "药疹",
        "脱屑",
        "致敏",
        "出血",
        "脱皮",
        "蜕皮",
        "剥脱性皮炎",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "急性心肌梗死",
        "脑动脉瘤",
        "高血压",
        "红皮病",
        "脑积水"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510edb3"),
    name: "葡萄糖注射液",
    badres: [
        "斑丘",
        "，考",
        "无明",
        "药物",
        "、药",
        "般过敏反",
        "性休",
        "休克",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "关节骨性关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510edb5"),
    name: "赖氨匹林",
    badres: [
        "性体",
        "，呼吸困",
        "疼痛",
        "死亡",
        "中毒性表皮坏死松解症",
        "胃肠损害",
        "呼吸网难",
        "道出",
        "呕吐",
        "颜面潮红",
        "过",
        "恶心",
        "脱性皮炎",
        "呼吸困难",
        "血尿",
        "皮疹",
        "过缴",
        "敏性",
        "药疹",
        "“",
        "剥脱性皮炎",
        "多形性红斑",
        "过敏反应",
        "过敏",
        "昏迷",
        "大疱性表皮松解症",
        "肝损害",
        "害(中毒性表皮坏死松",
        "休克",
        "皮肤损害",
        "包括",
        "体克"
    ],
    disease: [
        "性水",
        "荨麻疹",
        "、贫",
        "为荨麻",
        "感冒",
        "部水",
        "水肿",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510edb7"),
    name: "地氯雷他定分散片",
    badres: [
        "皮疹",
        "恶心",
        "皮",
        "肝损伤",
        "L、",
        "为重度",
        "乏力",
        "性肝损",
        "呕吐",
        "现全",
        "过敏"
    ],
    disease: [
        "了病毒性肝",
        "肝炎",
        "胆囊炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61800e6d2bda0510edb9"),
    name: "炔雌醇环丙孕酮片",
    badres: [
        "腹胀",
        "生大",
        "诱导血小板",
        "疼痛"
    ],
    disease: [
        "腹痛",
        "骨折",
        "如治",
        "痤疮"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edbb"),
    name: "益母草碱",
    badres: [
        "多食、多",
        "中枢神经系统病变",
        "病变",
        "多饮"
    ],
    disease: [
        "药，",
        "2型糖",
        "糖尿病",
        "痴呆",
        "碱对糖",
        "糖尿病心肌病",
        "重下",
        "糖尿",
        "柄尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edbd"),
    name: "盐酸克林霉素注射液",
    badres: [
        "耳鸣",
        "腹泻",
        "心律过缓",
        "头晕",
        "重皮",
        "悉心",
        "肠梗阻",
        "眩晕",
        "发过敏反",
        "中毒性表皮环死松解症",
        "胃肠道反应",
        "呼吸困难",
        "中枢神经系统损害",
        "呕吐",
        "过敏反应",
        "过敏",
        "听力下降"
    ],
    disease: [
        "双耳突发性耳”",
        "突发性耳聋",
        "败血症",
        "腹痛",
        ".结膜",
        "神经性耳聋",
        "性乳腺"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edbf"),
    name: "奥布卡因凝胶",
    badres: [
        "疼痛",
        "心慌",
        "麻木",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "高血",
        "高血压",
        "糖尿病",
        "g：糖",
        "心律失常",
        "肛裂",
        "白内障",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edc1"),
    name: "盐酸普拉克索片",
    badres: [
        "心动超",
        "病变",
        "过敏",
        "嗅觉减退"
    ],
    disease: [
        "高血压",
        "便秘",
        "帕金森",
        "糖尿病",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edc3"),
    name: "盐酸溴己新",
    badres: [
        "支气管痉挛",
        "疹，",
        "皮疹",
        "“过敏",
        "致过敏反",
        "严重过敏",
        "敏性",
        "药疹",
        "包括呼吸",
        "胃肠损害",
        "战、",
        "休克",
        "呼吸困难",
        "心悸",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "支气管炎",
        "咽痛",
        "肺炎",
        "哮鸣",
        "咳嗽",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edc5"),
    name: "盐酸莫西沙星注射液",
    badres: [
        "皮疹",
        "恶心",
        "致，过敏",
        "荨麻",
        "呼吸困难",
        "胃肠道反应",
        "呕吐",
        "过敏反应",
        "麻木",
        "过敏"
    ],
    disease: [
        "荨麻疹",
        "高血压",
        "糖尿病",
        "尊麻疹",
        "头痛",
        "肺炎",
        "水肿",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edc7"),
    name: "盐酸莫西沙星片",
    badres: [
        "述耳",
        "耳鸣",
        "头晕",
        "听力",
        "是耳",
        "眩晕",
        "病变",
        "胃肠道反应",
        "过敏反应",
        "过敏",
        "听力下降"
    ],
    disease: [
        "头痛",
        "上呼吸道感染",
        "癜痫",
        "冠心病",
        "咳嗽",
        "前列腺增生"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edc9"),
    name: "紫皮石斛浸膏",
    badres: [
        "死亡"
    ],
    disease: [
        "微量元素"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edcb"),
    name: "氟尿嘧啶",
    badres: [
        "腹泻",
        "肠病",
        "恶心",
        "心动过缓",
        "呕吐",
        "心动过速",
        "感觉异常"
    ],
    disease: [
        "直肠癌",
        "高血压",
        "于癌",
        "心律失常",
        "冠心病",
        "人史，",
        "胃癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edcd"),
    name: "马兜铃酸",
    badres: [
        "肾损害",
        "血磷升高",
        "粒细胞增多",
        "蛋白尿",
        "小管",
        "病变",
        "葡萄糖尿",
        "无尿",
        "血压升高",
        "血尿",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "肾结石",
        "肾炎",
        "糖尿病",
        "肾病综合征",
        "水肿",
        "肾小球硬化",
        "肾小球"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edcf"),
    name: "阿托伐他汀",
    badres: [
        "横纹肌溶解"
    ],
    disease: [
        "高血压",
        "糖尿病",
        "心肌梗死",
        "心绞痛",
        "冠心病",
        "3A"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edd1"),
    name: "右旋糖酐铁片",
    badres: [
        "腹泻",
        "团样",
        "恶心",
        "体重增加",
        "疼挛，",
        "低血压",
        "曲张",
        "重症多形性",
        "心、",
        "嗜睡",
        "皮肤",
        "痛、",
        "呼吸困难",
        "呕吐",
        "麻、"
    ],
    disease: [
        "水种",
        "便秘",
        "贫血",
        "肺水肿",
        "头痛",
        "咳嗽",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edd3"),
    name: "西沙必利",
    badres: [
        "死亡",
        "心懂",
        "其",
        "心动过缓",
        "肠梗阻",
        "心悸",
        "心动过速",
        "拌死"
    ],
    disease: [
        "心力衰竭",
        "延长和心",
        "糖尿病",
        "早产",
        "心律失常"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edd5"),
    name: "加构成比",
    badres: [
        "腹泻",
        "肝损害",
        "恶心",
        "止小板减少",
        "血小板减",
        "血小板减少",
        "转",
        "关死",
        "胞和粒细胞",
        "白细胞减少",
        "白细胞",
        "粒细胞减少",
        "现严重血小",
        "症，血小板"
    ],
    disease: [
        "血性",
        "缺铁性贫血",
        "血，再生障码性",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edd7"),
    name: "地高辛",
    badres: [
        "腹泻",
        "皮疹",
        "高钾血症",
        "体重增加",
        "死亡",
        "肝损伤",
        "“皮",
        "体重增加便秘",
        "呕吐",
        "镇静或"
    ],
    disease: [
        "，用",
        "便秘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edd9"),
    name: "氨基糖",
    badres: [
        "死亡",
        "呼吸暂停",
        "嗜睡",
        "呼吸困难",
        "了呼吸困"
    ],
    disease: [
        "肌无力",
        "肺炎",
        "性肺",
        "阑尾炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eddb"),
    name: "青黛丸",
    badres: [
        "用药相",
        "肝提伤",
        "过敏",
        "肝损伤"
    ],
    disease: [
        "6年银",
        "銀屑病",
        "牛皮癣",
        "银屑病",
        "通过分",
        "析银码"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eddd"),
    name: "热毒宁注射液",
    badres: [
        "支气管炎",
        "5脓"
    ],
    disease: [
        "g原建疾病构",
        "支气管炎",
        "例，",
        "感冒",
        "头痛",
        "上呼吸道感染",
        "肺炎",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eddf"),
    name: "莫西沙星注射液",
    badres: [
        "死亡",
        "病变"
    ],
    disease: [
        "性肺",
        "肺炎",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ede1"),
    name: "刺五加注射液",
    badres: [
        "肾损伤",
        "眩晕",
        "肝损伤",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "胰腺炎",
        "骨折",
        "高血压",
        "糖尿病",
        "高血脂",
        "腹痛",
        "慢性胃炎",
        "头痛",
        "冠心病",
        "脑动脉硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ede3"),
    name: "氨磺必利片",
    badres: [
        "药疹",
        "白细胞减少",
        "精神异常",
        "心动过",
        "粒细胞减少",
        "外周神经系统损害",
        "心动过缓",
        "过敏反应",
        "心动过速"
    ],
    disease: [
        "荨麻疹",
        "便秘",
        "乳腺癌",
        "心律失常",
        "精神分裂症",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ede5"),
    name: "别嘌醇",
    badres: [
        "、体重增",
        "精神系统损害",
        "肝脏损害",
        "肝胆系统损害",
        "体重增加",
        "血小板减少",
        "体位性低血压",
        "黄疽",
        "、心动过",
        "白细胞减少",
        "肝损伤",
        "过敏性皮疹",
        "例(",
        "嗜睡",
        "、皮",
        "在体位性低血",
        "晕厥",
        "性粒细胞减"
    ],
    disease: [
        "精神分裂症",
        "情感障碍",
        "起肌强"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ede7"),
    name: "奥沙利铂",
    badres: [
        "m药物",
        "恶心",
        "纳差",
        "疼痛",
        "死亡",
        "物性肝",
        "腹胀",
        "、肝转",
        "肝损伤",
        "乏力",
        "床表",
        "20",
        "呕吐",
        "9肝",
        "过敏"
    ],
    disease: [
        "乳旅癌",
        ".约",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ede9"),
    name: "葡萄糖注射液",
    badres: [
        "腹泻",
        "乏力言行紊乱",
        "恶心",
        "罕有",
        "死亡",
        "耳",
        "低血压",
        "眩晕",
        "晕、",
        "心脏骤停",
        "感、皮肤潮红",
        "悸、",
        "乏力",
        "痛、",
        "休克",
        "胃痛",
        "心动过速",
        "过敏"
    ],
    disease: [
        "脑外科",
        "，",
        "荨麻疹",
        "肌痉挛",
        "中风",
        "癫痫",
        "糖尿病",
        "睡、",
        "咳嗽",
        "脑梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edeb"),
    name: "地塞米松",
    badres: [
        "突发心律失常",
        "并",
        "者，",
        "眩晕",
        "热及过敏",
        "性心动过",
        "为低钾血",
        "心律大常",
        "为心",
        "胺致心动",
        "面、心动",
        "功能",
        "少、",
        "低钾血症",
        "心动过缓",
        "晕厥",
        "室性心律",
        "的头",
        "早搏",
        "的心动过",
        "心、",
        "心动过速",
        "乏力",
        "疹、血小板",
        "或心",
        "中性粒细胞"
    ],
    disease: [
        "心力衰竭",
        "高血压",
        "方案心律",
        "心肌损害",
        "心肌梗死",
        "常、心肌",
        "心律失常",
        "发的心律",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eded"),
    name: "阿司匹林",
    badres: [
        "肝损害",
        "皮疹",
        "恶心",
        "食欲减退",
        "2引起",
        "肝损伤",
        "药物性",
        "病变",
        "乏力",
        "性肝损",
        "呕吐"
    ],
    disease: [
        "、肺结",
        "流感病毒感染",
        "白血病",
        "冠状动脉瘤",
        "痕痫",
        "肺结核",
        "黄疸",
        "并流",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edef"),
    name: "替格瑞洛",
    badres: [
        "死广",
        "慢性心律失常",
        "死亡",
        "心动过缓",
        "心动过级",
        "死六"
    ],
    disease: [
        "高血压",
        "中风",
        "心纹痛",
        "性白直",
        "胞淋巴"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edf1"),
    name: "替格瑞洛",
    badres: [
        "死亡",
        "心",
        "心动过缓",
        "心动过级",
        "死六"
    ],
    disease: [
        "高血压",
        "中风",
        "心纹痛",
        "性白直",
        "心律失常",
        "胞淋巴"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edf3"),
    name: "加巴喷丁",
    badres: [
        "皮疹",
        "头晕",
        "疼痛",
        "死亡",
        "肌痛",
        "动脉夹层",
        "眩晕",
        "出血",
        "呼吸困难",
        "重的呼吸",
        "重呼吸困"
    ],
    disease: [
        "癫痫",
        "中风",
        "糖尿病",
        "心肌梗死",
        "肝脏炎",
        "先天性心脏病",
        "带状疱疹",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edf5"),
    name: "碘克沙醇",
    badres: [
        "荨麻疹",
        "剂过敏反",
        "死亡",
        "丘疹",
        "胃肠损害",
        "肤瘙",
        "肾脏损害",
        "澳过",
        "呕吐",
        "form",
        "恶心",
        "过敏试",
        "呼吸困难",
        "皮疹",
        "，皮",
        "胃肠道损害",
        "过敏反应",
        "过敏",
        "皮肤瘙痒",
        "低血压",
        "休克",
        "性疹"
    ],
    disease: [
        "荨麻疹",
        "心力衰竭",
        ").丘",
        "腹痛",
        "糖尿病",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edf7"),
    name: "地塞米松",
    badres: [
        "A致过敏",
        "死亡",
        "合“",
        "致过敏反",
        "支气管痉李",
        "往过",
        "A过敏反",
        "或皮",
        "致的过敏",
        "呼吸困难",
        "该药过敏",
        "防过敏反",
        "致过坡反",
        "超敏反应",
        "皮疹",
        "过敏反点",
        "风疹",
        "构成比表",
        "过敏反应",
        "心动过速",
        "过敏",
        "支气管痉挛",
        "生过敏反",
        "低血压",
        "休克",
        "惡心"
    ],
    disease: [
        "食管癌",
        "直肠癌",
        "中结直",
        "肝癌",
        "腹痛",
        "卵巢癌",
        "腹河",
        "水肿",
        "胃癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edf9"),
    name: "柏子仁",
    badres: [
        "致癌",
        "出血"
    ],
    disease: [
        "肝炎胆管增生",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edfb"),
    name: "硫唑嘌呤",
    badres: [
        "荨麻疹",
        "腹泻",
        "体重下降",
        "疼痛",
        "血小板减少",
        "出血",
        "病变",
        "无力",
        "麻木"
    ],
    disease: [
        "荨麻疹",
        "腹痛",
        "尊麻疹",
        "腹腔脓肿",
        "红肿",
        "脓肿",
        "神经炎",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edfd"),
    name: "乙酰半胱氨酸注射液",
    badres: [
        "支气管痉挛",
        "皮疹",
        "恶心",
        "头晕",
        "疼痛",
        "死亡",
        "面红",
        "低血压",
        "过敏反应",
        "出血",
        "心动过",
        "休克",
        "呕吐",
        "麻木",
        "颜面潮红",
        "过敏"
    ],
    disease: [
        "骨折",
        "高血压",
        "糖尿病",
        "头痛",
        "红肿",
        "动脉硬化",
        "水肿",
        "哮喘",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510edff"),
    name: "二磷酸葡萄糖醛酸",
    badres: [
        "腹泻",
        "发性",
        "导致",
        "癌转移",
        "低血压",
        "发生",
        "白细胞减少",
        "癌变",
        "过敏"
    ],
    disease: [
        "L，",
        "直肠癌",
        "淋巴结",
        "腹痛",
        "结直肠",
        "提示直",
        "和腹",
        "大肠癌",
        "性结直"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee01"),
    name: "奥美拉唑",
    badres: [
        "疼痛",
        "消化道溃疡",
        "乏力",
        "患者",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "白血病",
        "肺鳞癌",
        "咳嗽",
        "癌症",
        "肺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee03"),
    name: "阿司匹林",
    badres: [
        "低蛋白血症",
        "评价低蛋白",
        "出血",
        "病变",
        "表5",
        "低白蛋白血症"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee05"),
    name: "左氧氟沙星",
    badres: [
        "抗心律失",
        "心律失常",
        "致心律失常",
        "心动过速",
        "心室过速"
    ],
    disease: [
        "心律失常",
        "抗心律失",
        "心肌缺血",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee07"),
    name: "次乌头碱",
    badres: [
        "心悸",
        "低血压",
        "休克"
    ],
    disease: [
        "心律失常",
        "心肌梗死",
        "风心病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee09"),
    name: "阿哌沙班",
    badres: [
        "置换",
        "出血",
        "，主",
        "低主",
        "要出",
        "主要",
        "措施"
    ],
    disease: [
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee0b"),
    name: "吉非替尼片",
    badres: [
        "腹泻",
        "皮疹",
        "恶心",
        "疼痛",
        "药疹",
        "度皮",
        "现皮",
        "心慌",
        "过敏"
    ],
    disease: [
        "子宫肌瘤",
        "心肌梗死",
        "肺腺癌",
        "肺炎",
        "癌症",
        "肺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee0d"),
    name: "服用吗替麦考耐酯分",
    badres: [
        "腹泻",
        "物性肝",
        "肝损伤",
        "估肝损",
        "视力下降"
    ],
    disease: [
        "丁、",
        "肾炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee0f"),
    name: "吡非尼酮胶囊",
    badres: [
        "疼痛",
        "肌痛",
        "乏力",
        "酸痛",
        "肌肉",
        "过敏"
    ],
    disease: [
        "肺炎",
        "咳痰",
        "咳嗽",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee11"),
    name: "药物左氧氟",
    badres: [
        "死广",
        "血细胞减少",
        "皮疹",
        "新生儿血小板减少",
        "死亡",
        "血小板减少",
        "人体伤残",
        "肾脏损害",
        "致癌",
        "星致血小板",
        "休克",
        "血小板降低",
        "出生缺陷",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "高脂血症",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee13"),
    name: "环丙沙星",
    badres: [
        "死亡",
        "过敏"
    ],
    disease: [
        "败血症",
        "肺鼠疫",
        "脑膜炎",
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee15"),
    name: "二甲双胍",
    badres: [
        "死亡",
        "过敏反应"
    ],
    disease: [
        "糖尿病",
        "贫血",
        "心肌梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee17"),
    name: "垂体后叶注射液",
    badres: [
        "咯血",
        "病变",
        "出血"
    ],
    disease: [
        "便血",
        "消化道出血",
        "尿崩症",
        "消化道出血肝癌",
        "水肿",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee19"),
    name: "非洛匹那书",
    badres: [
        "皮疹",
        "猝死",
        "死亡",
        "血小板减少",
        "白细胞减少",
        "泌尿系统损害",
        "代谢系统损害"
    ],
    disease: [
        "心律失常",
        "肺炎",
        "艾滋病",
        "导致心律"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee1b"),
    name: "磷酸奥司他书",
    badres: [
        "皮疹",
        "头晕",
        "恶心",
        "有过",
        "休克",
        "胃肠道损害",
        "呼吸困难",
        "呕吐"
    ],
    disease: [
        "头痛",
        "腹痛",
        "流感"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee1d"),
    name: "右关托",
    badres: [
        "头晕",
        "恶心",
        "芝力",
        "低血压",
        "嗜睡",
        "心动过缓",
        "呕吐"
    ],
    disease: [
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee1f"),
    name: "凝血酶",
    badres: [
        "腹泻",
        "反应",
        "胃肠道出血",
        "出血"
    ],
    disease: [
        "腹痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee21"),
    name: "复方磺胺甲噁唑片",
    badres: [
        "剂的肾",
        "肾损害",
        "钠伴高钾",
        "低钠伴高",
        "o致高钾",
        "高钾血症",
        "增加高钾",
        "伴高钾血",
        "高钟血症",
        "症，高",
        "伴有低钠",
        "生恶"
    ],
    disease: [
        "心力衰竭",
        "尿路惑染",
        "尿路感染",
        "精神分裂症",
        "因尿路"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee23"),
    name: "卡泊芬净",
    badres: [
        "非中性粒细",
        "腹腔",
        "过敏"
    ],
    disease: [
        "流感染",
        "抗感染",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee25"),
    name: "多烯磷脂酰胆碱",
    badres: [
        "热、",
        "疼痛",
        "呕吐",
        "恶心呕吐",
        "恶心",
        "头晕",
        "疹、",
        "硬结",
        "胃肠道反应",
        "为恶心呕",
        "如恶",
        "皮疹",
        "腹胀",
        "、呕",
        "过敏反应",
        "昏迷",
        "过敏",
        "腹泻",
        "肝损害",
        "肝损伤"
    ],
    disease: [
        "荨麻疹",
        "直肠癌",
        "脂肪肝",
        "头痛",
        "慢性肝炎",
        "膀胱癌",
        "卵巢癌",
        "食欲不振",
        "肺癌",
        "肺结核",
        "肝炎",
        "胃癌",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee27"),
    name: "甲氨蝶呤注射液",
    badres: [
        "8恶",
        "、烧",
        "肝损伤",
        "次呕",
        "剥脱性皮炎",
        "呕吐"
    ],
    disease: [
        "胞白血",
        "贫血",
        "白血病",
        "统白血",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee29"),
    name: "卡培他滨片",
    badres: [
        "肾损害",
        "肝损害",
        "头晕",
        "恶心",
        "失语",
        "18",
        "2级",
        "过敏反应",
        "心、",
        "出现",
        "胃痛",
        "呕吐",
        "麻木",
        ")"
    ],
    disease: [
        "于胃",
        "合标",
        "外周神",
        "尿路感药",
        "期胃",
        "用于",
        "应用",
        "神经炎",
        "胃癌",
        "展期"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee2b"),
    name: "左氧氟沙星",
    badres: [
        "皮疹",
        "幻觉",
        "障碍",
        "出现",
        "过敏"
    ],
    disease: [
        "帕金森",
        "肺炎",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee2d"),
    name: "巴氯芬",
    badres: [
        "意识模糊",
        "低血压",
        "意识不清",
        "精神异常",
        "病变",
        "嗜睡",
        "意识模糊幻觉",
        "心动过缓",
        "意识障碍",
        "神经系统损害",
        "心动过速",
        "昏迷",
        "意识恢复"
    ],
    disease: [
        "肌无力",
        "心律失常",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee2f"),
    name: "沙利度胺",
    badres: [
        "致畸"
    ],
    disease: [
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee31"),
    name: "度洛西汀",
    badres: [
        "者，体重",
        "者体重增",
        "湛心",
        "增重增加",
        "体重增加",
        "早期体重增加体重",
        "多睡",
        "神经",
        "体重增长",
        "较，体重"
    ],
    disease: [
        "抑郁症",
        "情感障碍",
        "汀治疗"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee33"),
    name: "阿比多尔",
    badres: [
        "痒、",
        "腹泻",
        "皮疹",
        "恶心",
        "头晕",
        "细胞",
        ")、",
        "疼痛",
        "血小板降低",
        "现为",
        "肿、",
        "无力",
        "害，神经系统",
        "呕吐",
        "白细胞降低"
    ],
    disease: [
        "肺爽",
        "感冒",
        "上呼吸道感染",
        "冠状炎",
        "肺炎",
        "流感",
        "治疗",
        "上市",
        "水肿",
        "良上呼吸道感",
        "及唇"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee35"),
    name: "地塞米松磷酸钠注射液",
    badres: [
        "病死",
        "后差",
        "皮疹",
        "物过",
        "：中毒性表皮坏死松懈",
        "中毒性表皮坏死松解症",
        "，剥",
        "极抗",
        "中毒性表皮环死",
        "：尽",
        "过敏"
    ],
    disease: [
        "动脉瘤",
        "水疱",
        "肺炎",
        "水肿",
        "脑积水"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee37"),
    name: "拉莫三嗪片",
    badres: [
        "皮疹",
        "皮肤红斑",
        "药疹",
        "致剥脱性皮",
        "丘疹",
        "剥脱",
        "多形性红斑",
        "过敏"
    ],
    disease: [
        "水肿",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee39"),
    name: "三七通舒胶囊",
    badres: [
        "过敏",
        "耳鸣",
        "十二指肠溃疡",
        "胃十二指肠糜烂",
        "胃溃疡",
        "因敏感突",
        "白细胞减少",
        "出血",
        "病变",
        "粒细胞减少",
        "胸闷",
        "肠梗阻",
        ")，高",
        "心悸",
        "麻木",
        "湿疹",
        "支气管痉李"
    ],
    disease: [
        "荨麻疹",
        "肾炎",
        "肝癌",
        "慢性胃炎",
        "半身不遂",
        "致贫",
        "转性鼻炎",
        "上呼吸道感染",
        "慢性鼻炎",
        "白血病",
        "骨痛",
        "癌症",
        "抑郁症",
        "哮喘",
        "肌无力",
        "失眠",
        "乳腺癌",
        "咽喉炎",
        "咳嗽",
        "肺癌",
        "肝炎",
        "中风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee3b"),
    name: "茯苓酸",
    badres: [
        "疼痛"
    ],
    disease: [
        "疗偏头",
        "善抑郁",
        "高血压",
        "子宫肌瘤",
        "偏头痛",
        "降低前列腺",
        "盆腔炎",
        "心率失常",
        "前列腺增生",
        "精神分裂症",
        "，抑制前列",
        "抑郁症",
        "性高血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee3d"),
    name: "氟比洛芬酯注射液",
    badres: [
        "腹泻",
        "头晕",
        "疼痛",
        "声带",
        "闲倦",
        "后疼",
        "呕吐",
        "血小板降低",
        "胃肠道反应",
        "肠胃胀气",
        "过敏反应",
        "过敏",
        "泌尿系统滞留"
    ],
    disease: [
        "便秘",
        "腹痛",
        "哮喘",
        "尿路感染",
        "头痛",
        "癌症",
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee3f"),
    name: "两性霉素B制",
    badres: [
        "和呕",
        "腹泻",
        "头晕",
        "恶心",
        "尿潴留",
        "疼痛",
        "麻卿",
        "神经系统异常",
        "病变",
        "酸软不适",
        "无力",
        "胃肠道反应",
        "呕吐",
        "麻木",
        "少恶"
    ],
    disease: [
        "头痛",
        "腹痛",
        "脑膜炎",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee41"),
    name: "右旋雷贝拉唑钠",
    badres: [
        "胃溃疡"
    ],
    disease: [
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee43"),
    name: "氨基糖苷",
    badres: [
        "过敏",
        "皮疹",
        "粒细胞增多",
        "清楚",
        "疼痛",
        "死亡",
        "征是",
        "休克",
        "呼吸闲难",
        "呼吸困难",
        "起的过敏",
        "物过",
        "，无"
    ],
    disease: [
        "糖尿病",
        "、重",
        "诊断为",
        "肺脓肿",
        "肺炎",
        "肝脓肿",
        "耐药"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee45"),
    name: "周甘平",
    badres: [
        "食道溃疡",
        "血小板减少",
        "出血",
        "白细胞减少",
        "病变",
        "黏膜",
        "胃出",
        "过敏",
        "体："
    ],
    disease: [
        "腹痛",
        "贫血",
        "性凝血",
        "胰腺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee47"),
    name: "甘露聚糖肽",
    badres: [
        "皮疹",
        "恶心",
        "物过",
        "疼痛",
        "白细胞减少",
        "呼吸网难",
        "出现呼吸",
        "休克",
        "呼吸困难",
        "呕吐",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "性哮",
        "再生障碍性贫血",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee49"),
    name: "洛匹那韦利托那韦片",
    badres: [
        "腹泻",
        "皮疹",
        "恶心",
        "V分析本",
        "尿频",
        "头昏",
        "乏力",
        "患者",
        "心呕吐",
        "无力",
        "鼻出血",
        "呕吐",
        "高脂血",
        "过敏",
        "恶心呕吐",
        "无心慌"
    ],
    disease: [
        "毒肺",
        "高血压",
        "腹痛",
        "糖尿病",
        "头痛",
        "HTG",
        "产生胰",
        "尿痛",
        "肺炎",
        "头",
        "咳嗽",
        "斑秃",
        "毒感",
        "咳痰"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee4b"),
    name: "非甾体抗炎药",
    badres: [
        "中3",
        "、视觉损",
        "重心",
        "出现视力",
        "症皮",
        "增加视觉",
        "病变",
        "斑病",
        "肤过敏反",
        "胃肠道反应",
        "视力下降",
        "心衰"
    ],
    disease: [
        "为心律失",
        "毒肺",
        "重的心律",
        "红斑狼疮",
        "状病",
        "心律失常",
        "男过敏性皮",
        "肺炎",
        "括肌无"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee4d"),
    name: "点，分",
    badres: [
        "恶心",
        "于未出",
        "型突",
        "腹胀",
        "AZA所",
        "致白细胞减",
        "白细胞减少",
        ".肝损",
        "与AZ",
        "胃肠道不适",
        "酸痛",
        "A致全血",
        "胃肠道反应",
        "呕吐"
    ],
    disease: [
        "胰腺炎",
        "嘌呤",
        "骨髓",
        "红斑狼疮",
        "流感",
        "重症肌",
        "A所",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee4f"),
    name: "硫唑嘌呤",
    badres: [
        "的意者白细"
    ],
    disease: [
        "类风湿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee51"),
    name: "五指毛桃",
    badres: [
        "为肝损",
        "耳鸣",
        "心烦",
        "严重心律失",
        "病变",
        "呕吐",
        "视力下降",
        "头晕",
        "恶心",
        "皮疹",
        "肝損伤",
        "剥脱性皮炎",
        "过敏",
        "腹泻",
        "睡眠障碍",
        "血细胞减少",
        "肝损",
        "肝损伤",
        "粒细胞缺乏",
        "心悸"
    ],
    disease: [
        "肌无力",
        "失眠",
        "新冠",
        "贫血",
        "再生障碍性贫血",
        "、心力衰",
        "抗心律失",
        "头痛",
        "流产",
        "肺炎",
        "1磷",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee53"),
    name: "地塞米松",
    badres: [
        "恶心",
        "致恶心呕",
        "致吐",
        "呕叶",
        "呕吐",
        "过敏",
        "恶心呕吐"
    ],
    disease: [
        "乳腺癌",
        "卵巢癌",
        "癌症",
        "食道癌",
        "肺癌",
        "胃癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee55"),
    name: "达格列净片",
    badres: [
        "疲乏",
        "恶心",
        "纳差",
        "腹痛",
        "高血糖",
        "无力",
        "呕吐"
    ],
    disease: [
        "尿病",
        "糖尿肩",
        "高血压",
        "糖尿病",
        "或低于",
        "型糖尿",
        "钩尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee57"),
    name: "二甲双肌",
    badres: [
        "导致胰",
        "恶心",
        "血糖",
        "死亡",
        "血小板减少",
        "腹痛",
        "常血糖",
        "者死",
        "、呼吸困",
        "血管",
        "仅轻度",
        "呕吐",
        "恶"
    ],
    disease: [
        "、腹",
        "糖尿病",
        "防心力衰",
        "腹痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee59"),
    name: "阿司匹林",
    badres: [
        "口干",
        "头晕",
        "血小板减少",
        "低血压",
        "休克",
        "过敏"
    ],
    disease: [
        "胰腺炎",
        "高血压",
        "中风",
        "腹痛",
        "糖尿病",
        "棉尿病",
        "感冒",
        "肾病综合征",
        "头痛",
        "阳上亢",
        "上呼吸道感染",
        "肺炎",
        "咳嗽",
        "消化不良",
        "肺癌",
        "水肿",
        "脑梗死",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee5b"),
    name: "氨基酸注射液",
    badres: [
        "疼痛",
        "腹胀",
        "低蛋白血症",
        "血脂升高",
        "呕血",
        "恶心呕吐",
        "胀痛"
    ],
    disease: [
        "重胰腺",
        "胰腺炎",
        "达本胺",
        "高血压",
        "糖尿病",
        "腹痛",
        "急性腺炎",
        "肝炎",
        "“急性"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee5d"),
    name: "药物浓度维",
    badres: [
        "2例",
        "，心",
        "例，",
        "3例",
        "病变",
        "；",
        "；其",
        "出现",
        "20例，",
        "例死",
        "视力下降",
        "心衰",
        "视觉损伤"
    ],
    disease: [
        "色盲",
        "例，",
        "，心肌",
        "抗心律失",
        "反应为"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee5f"),
    name: "阿司匹林",
    badres: [
        "的过",
        "疼痛",
        "中毒性表皮坏死松解症",
        "皮肤剥脱",
        "剥脱",
        "胃肠道反应",
        "颅内出血",
        "大小便失禁",
        "皮疹",
        "出血",
        "匹林",
        "皮疹变",
        "昏迷",
        "弥漫",
        "过敏",
        "腹泻",
        "TE",
        "部皮肤剥",
        "膜下",
        "极抗",
        "现心脏骤",
        "片状",
        "中毒性表皮坏苑松解症"
    ],
    disease: [
        "高血压",
        "糖尿病",
        "心肌梗死",
        "肺水肿",
        "动脉瘤",
        "流产",
        "胆结石",
        "白内障",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee61"),
    name: "阿比多尔",
    badres: [
        "腹泻",
        "皮疹",
        "头晕",
        "恶心",
        "细胞",
        "死亡",
        "血小板下降",
        "心动过缓",
        "白细胞降低"
    ],
    disease: [
        "毒肺",
        "丙型病",
        "感冒",
        "在流",
        "上呼吸道感染",
        "流感",
        "肺炎",
        "病毒性疾病",
        "病毒"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee63"),
    name: "巴利昔单抗",
    badres: [
        "过敏",
        "出血",
        "疼痛"
    ],
    disease: [
        "白血病",
        "心力衰站",
        "肺水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee65"),
    name: "马兜铃酸",
    badres: [
        "死亡"
    ],
    disease: [
        "尿毒素"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee67"),
    name: "替硝唑",
    badres: [
        "过教",
        "疼痛",
        "无力",
        "呕吐",
        "麻术",
        "药物",
        "呼吸困难",
        "麻木",
        "过敏反",
        "皮疹",
        "出血",
        "消化系统反应",
        "过敏反应",
        "过敏",
        "肝损害",
        "胃溃疡",
        "白细胞减少",
        "乏力",
        "休克",
        "惡心",
        "心悸",
        "无过"
    ],
    disease: [
        "腹痛",
        "胆囊炎",
        "心律失常",
        "心肌炎",
        "肺炎",
        "盆腔炎",
        "病毒性心肌炎",
        "水肿",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee69"),
    name: "氨基比林",
    badres: [
        "皮疹",
        "头晕",
        "疼痛",
        "胃肠损害",
        "心慌",
        "休克",
        "呼吸困难",
        "心悸",
        "神经系统损害",
        "过敏"
    ],
    disease: [
        "荨麻疹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee6b"),
    name: "凝血酶",
    badres: [
        "血细胞减少",
        "皮疹",
        "恶心",
        "肝系统损害",
        "死亡",
        "生血細胞减",
        "出血",
        "胃肠道不适",
        "呕吐",
        "过敏",
        "恶心呕吐"
    ],
    disease: [
        "流感",
        "黄疸",
        "败血症",
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee6d"),
    name: "灭吐灵",
    badres: [
        "室性心律失常",
        "死亡",
        "休克",
        "呕吐",
        "过敏反应",
        "过敏",
        "及过"
    ],
    disease: [
        "急性胃炎",
        "上呼吸道感染",
        "消化不",
        "斜视"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee6f"),
    name: "百乐眠胶囊",
    badres: [
        "口干",
        "恶心",
        "头晕",
        "过教",
        "便秘",
        "食欲下心",
        "消化道溃疡",
        "乏力",
        "嗜睡",
        "厌油",
        "心悸不安",
        "神经系统损害",
        "过敏",
        "易醒"
    ],
    disease: [
        "失眠",
        "便秘",
        "头痛",
        "食欲不振",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee71"),
    name: "左旋咪唑",
    badres: [
        "呕心",
        "皮疹",
        "肌痛",
        "血小板减少",
        "粒细胞减少",
        "呕吐",
        "心动过速",
        "心衰"
    ],
    disease: [
        "白血病",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee73"),
    name: "烟酸",
    badres: [
        "由疼",
        "横纹肌溶解",
        "横纹机解",
        "肌病",
        "横纹U格解",
        "No"
    ],
    disease: [
        "肌痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee75"),
    name: "苯基维甲酸酯",
    badres: [
        "癌变",
        "现缩"
    ],
    disease: [
        "白血病",
        "胃癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee77"),
    name: "荧光素钠注射液",
    badres: [
        "如胃肠道反",
        "的过",
        "等过敏症",
        "恶心",
        "死亡",
        "出血",
        "身无",
        "休克",
        "件损害",
        "呕吐",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "和荨麻",
        "哮哨"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee79"),
    name: "黄体酮",
    badres: [
        "腹泻",
        "胃肠系统损害",
        "皮疹",
        "头晕",
        "胃肠系统损害次",
        "恶心",
        "、乏",
        "眩晕",
        "心的",
        "外周神经系统损害",
        "乏力",
        "嗜睡",
        "晕倒",
        "晕厥",
        "全身性损害",
        "呕吐",
        "神经系统损害",
        "的头"
    ],
    disease: [
        "头痛",
        "腹痛",
        "、头",
        "流产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee7b"),
    name: "独一味胶囊",
    badres: [
        "过敏反应",
        "胃溃疡",
        "出血",
        "疼痛"
    ],
    disease: [
        "骨折",
        "骨髓炎",
        "关节炎",
        "带状疱疹",
        "微量元素",
        "痛经",
        "胃炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee7d"),
    name: "中葡萄糖注射",
    badres: [
        "，",
        "in",
        "死亡",
        "小鼠",
        "均为",
        "价类过敏",
        "记",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "白血病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee7f"),
    name: "羟甲基糠醛",
    badres: [
        "给药",
        "物过敏反",
        "出致",
        "致癌",
        "起过敏反"
    ],
    disease: [
        "糖尿病",
        "和腹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee81"),
    name: "利妥昔单抗",
    badres: [
        "死亡",
        "干"
    ],
    disease: [
        "淋巴启",
        "高血压",
        "红斑狼疮",
        "支气管扩张药",
        "关节炎",
        "肝炎",
        "细胞淋",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee83"),
    name: "丙戊酸",
    badres: [
        "肝胆损害",
        "、厌",
        "视觉损害",
        "泌尿系统拟害",
        "死亡",
        "药物",
        "起的体重",
        "高氨血症",
        "厌食",
        "者为",
        "血液系统损害",
        "现恶",
        "、呕",
        "剥脱性皮炎",
        "神经系统损害",
        "过敏",
        "出汗减少"
    ],
    disease: [
        "肾结石",
        "失眠",
        "癫痫",
        "是艱",
        "與痫",
        "渊痫",
        "障运动诱发",
        "有无肾"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee85"),
    name: "碳酸鞋片",
    badres: [
        "腹泻",
        "严重心律失常",
        "恶心",
        "低血压",
        "出血",
        "血小板",
        "白细胞减少",
        "粒细胞减少",
        "呕吐",
        "意识模糊"
    ],
    disease: [
        "情感障碍",
        "小眼球病",
        "腹产",
        "再生障碍性贫血",
        "食欲不振",
        "抑郁症",
        "精神分裂症",
        "精神分至",
        "进："
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee87"),
    name: "碘海醇注射液",
    badres: [
        "的2",
        "死亡",
        "肌力",
        "皮修",
        "其过敏反",
        "治疗",
        "无力",
        "消化系统损害",
        "称过",
        "难，",
        "多为呼吸",
        "呼吸困难",
        "皮疹",
        "、消化系统损",
        "过敏反应",
        "过敏",
        "，",
        "脑出",
        "数例",
        "休克",
        "体克"
    ],
    disease: [
        "明显",
        "高血压",
        "糖尿病",
        "失语症",
        "患疾病",
        "高尿酸",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee89"),
    name: "替米沙坦",
    badres: [
        "腹泻",
        "恶心",
        "高钾血症",
        "疼痛",
        "腹胀",
        "血管收缩",
        "现皮",
        "高血钾高血钾",
        "心悸",
        "呕吐",
        "湿疹"
    ],
    disease: [
        "腹痛",
        "水肿",
        "疗轻，",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee8b"),
    name: "环磷腺苷葡胺注射剂",
    badres: [
        "恶心",
        "过教",
        "死亡",
        "致畸",
        "eaus",
        "致癌",
        "休克",
        "憋气",
        "心悸",
        "过敏反应",
        "出生缺陷",
        "过敏"
    ],
    disease: [
        "荨麻疹",
        "心力衰竭",
        "高血压",
        "肌力",
        "冠心病心律失常",
        "心肌炎",
        "冠心病",
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee8d"),
    name: "硫辛酸注射液",
    badres: [
        "心、呕吐",
        "恶心",
        "疼痛",
        "药物",
        "病变",
        "头胀",
        "呼吸困难",
        ".",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "善糖尿",
        "糖尿年"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee8f"),
    name: "痛单克隆抗",
    badres: [
        "死",
        "而死",
        "血液瘤",
        "者痛"
    ],
    disease: [
        "肺水",
        "白血病",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee91"),
    name: "阿可咪哇片剂",
    badres: [
        "死亡",
        "头晕",
        "鼻塞",
        "呼吸困难"
    ],
    disease: [
        "上呼吸道感染",
        "感冒通片剂"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee93"),
    name: "丙氨酸",
    badres: [
        "死广",
        "腹泻",
        "恶心",
        "便秘",
        "血小板减少",
        "肝损伤"
    ],
    disease: [
        "腹痛",
        "骨髓炎",
        "流感嗜血菌",
        "头痛",
        "、肺",
        "脑膜炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee95"),
    name: "甲泼尼龙琥珀酸钠",
    badres: [
        "平以及是青",
        "高脂血症",
        "症、高尿酸",
        "能导致血糖",
        "大，提",
        "伴有高尿酸",
        "诱发高",
        "高血糖",
        "血糖升高",
        "高脂血症和"
    ],
    disease: [
        "糖或糖",
        "Hh",
        "2型糖",
        "糖尿病",
        "合井高",
        "有无糖",
        "压、高脂",
        "是特尿",
        "I、有",
        "格尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee97"),
    name: "丝氨酸",
    badres: [
        "自主",
        "a细"
    ],
    disease: [
        "理宫颈",
        "0nM",
        "对宫颈",
        "宫颈癌",
        "抑制宫",
        "导宫颈"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee99"),
    name: "2安乃",
    badres: [
        "死亡",
        "者死"
    ],
    disease: [
        ".特别"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee9b"),
    name: "硫辛酸注射液",
    badres: [
        "夜间低",
        "低血糖",
        "头晕",
        "疫性低",
        "低糖",
        "纸血糖",
        "高血糖",
        "发性低",
        "神经",
        "乏力",
        "问低",
        "心悸",
        "麻木",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "者因糖"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee9d"),
    name: "青霉素",
    badres: [
        "过敏",
        "肝损伤"
    ],
    disease: [
        "肺炎",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ee9f"),
    name: "卡托普利",
    badres: [
        "1名",
        "道出",
        "横纹肌溶解"
    ],
    disease: [
        "肺癌",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eea1"),
    name: "阿司匹林",
    badres: [
        "死亡",
        "牙跟出血",
        "高出血",
        "心梗",
        "血红蛋白下降",
        "出血",
        "患者",
        "消化道出血",
        "的出",
        "颅内出血"
    ],
    disease: [
        "高血压",
        "糖尿病",
        "便血",
        "冠心病",
        "致"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eea3"),
    name: "氮与七",
    badres: [
        "感觉",
        "致死",
        "导致",
        "性脊",
        "联合",
        "窒息"
    ],
    disease: [
        "肠道癌",
        "醉师"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eea5"),
    name: "丁苯肽软胶囊",
    badres: [
        "诊断，",
        "乏力",
        "过敏",
        "肝损伤"
    ],
    disease: [
        "，",
        "/L",
        "高血压",
        "左心衰竭",
        "损伤："
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eea7"),
    name: "丁苯酞氯化钠注射液",
    badres: [
        "头晕",
        "心吐",
        "痛觉",
        "费力",
        "乏力"
    ],
    disease: [
        "头痛",
        "体乏力"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eea9"),
    name: "业胺培南西司他丁钠",
    badres: [
        "过敏",
        "皮疹",
        "药，",
        "药疹",
        "腹胀",
        "过级",
        "成片，",
        "出现",
        "呕吐",
        "婴儿红人综合征",
        "，皮肤红斑增"
    ],
    disease: [
        "腹痛",
        "早产",
        "肺炎",
        "咳嗽",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeab"),
    name: "有非体抗炎",
    badres: [
        "发心",
        "称过",
        "过城反应",
        "和心机",
        "但",
        "统过",
        "次将过敏",
        "致过敏反",
        "定性心",
        "过敏反应"
    ],
    disease: [
        "早产",
        ".性心",
        "重冠状动"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eead"),
    name: "子丙戊酸钠",
    badres: [
        "和高乳度血",
        "高乳酸血症",
        "中毒",
        "头昏",
        "病变",
        "，高乳酸",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeaf"),
    name: "丙戊酸镁缓释片",
    badres: [
        "腹泻",
        "无心呕吐",
        "过敏",
        "注意力欠集中"
    ],
    disease: [
        "胰腺炎",
        "相情感障",
        "情感障碍",
        "腹痛",
        "肤腺炎",
        "抑郁症",
        "精神分裂症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeb1"),
    name: "丙泊酚注射液",
    badres: [
        "·2",
        "过敏",
        "但仍"
    ],
    disease: [
        "红肿",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeb3"),
    name: "美沙拉肠片",
    badres: [
        "新损伤",
        "低血",
        "肝损伤",
        "心动过",
        "为象性",
        "NS",
        "血氨升高",
        "性酸中"
    ],
    disease: [
        "腹",
        "肝炎",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeb5"),
    name: "清丙氨酸转氨",
    badres: [
        "B致肝",
        "肝伤",
        "物性肝",
        "伤型肝",
        "素B相",
        "肝损伤",
        "低钾血症",
        "性肝损"
    ],
    disease: [
        "肝炎",
        "隐球菌感染"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeb7"),
    name: "土晕虫",
    badres: [
        "，",
        "和死",
        "癌病",
        "的致"
    ],
    disease: [
        "于肝"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeb9"),
    name: "喜炎平注射液",
    badres: [
        "腹泻",
        "皮疹",
        "皮掺",
        "疼痛",
        "吐衄",
        "出血",
        "肝损伤",
        "皮修",
        "休克",
        "过敏反虚",
        "过敏"
    ],
    disease: [
        "咳喘",
        "腹痛",
        "心绞痛",
        "病肺",
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eebb"),
    name: "奥美沙坦酯片",
    badres: [
        "高尿酸血症",
        "体位性低血压",
        "出血"
    ],
    disease: [
        "1例冠",
        "痛风",
        "高血压",
        "心绞痛",
        "痛风药",
        "高直压",
        "心律失常",
        "其发生",
        "高山压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eebd"),
    name: "乌拉地尔注射液",
    badres: [
        "头晕",
        "、乏",
        "低血压",
        "等低血",
        "现头",
        "肝损伤",
        "乏力",
        "头",
        "出现",
        "呕吐"
    ],
    disease: [
        "高血限",
        "失眠",
        "剂：抗",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eebf"),
    name: "别嘌醇",
    badres: [
        "病死",
        "因死",
        "疾病",
        "死亡",
        "管疾",
        "高尿酸",
        "出血",
        "高尿酸血症",
        "及高尿酸血",
        "高尿酸直症"
    ],
    disease: [
        "糖尿病",
        "心绞痛",
        "冠心病",
        "制痛",
        "疗痛",
        "为痛",
        "型心绞",
        "括心肌梗",
        "痛凤",
        "致痛",
        "史和高",
        "区痛",
        "痛风性关节炎",
        "L、糖",
        "肾结石",
        "心肌梗死",
        "美国关",
        "脑卒",
        "痛风",
        "对痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eec1"),
    name: "了哥王",
    badres: [
        "疼痛",
        "药疹",
        "物性肝",
        "丘疹",
        "多形红斑",
        "疼痛瘙痒",
        "肝损伤",
        "皮疹水疱",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "肺结核",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eec3"),
    name: "亚叶酸钙",
    badres: [
        "过敏"
    ],
    disease: [
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eec5"),
    name: "转氨酶",
    badres: [
        "死亡",
        ")：",
        "于高脂血",
        "肝损伤"
    ],
    disease: [
        "病高",
        "著改善心",
        "心肌死",
        "高血压",
        "糖尿病",
        "心肌梗死",
        "脑樱纯",
        "疗的心肌",
        "因急性心",
        "冠心病",
        "心肌梗纯",
        "发糖尿",
        "脑梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eec7"),
    name: "氯化钠注射液",
    badres: [
        "心事",
        "严心律失常",
        "过敏",
        "疼痛"
    ],
    disease: [
        "星尿病",
        "心律失常",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eec9"),
    name: "复方和通胶囊",
    badres: [
        "定性",
        "过敏",
        "毛力",
        "疼痛"
    ],
    disease: [
        "高血压",
        "棉尿病",
        "掺：冠",
        "冠心病",
        "相金森"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eecb"),
    name: "伏立康唑",
    badres: [
        "腹泻",
        "皮疹",
        "眩晕",
        "幻觉",
        "听觉异常"
    ],
    disease: [
        "级肝硬",
        "骨膜炎",
        "骨疣",
        "C缓肝"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eecd"),
    name: "香辛料",
    badres: [
        "死亡",
        "能致",
        "致癌",
        "类致",
        "泡化、巨细",
        "肝肾"
    ],
    disease: [
        "伤甚",
        "肺水",
        "食管癌",
        "癌症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eecf"),
    name: "阿司匹林",
    badres: [
        "头晕",
        "联血尿",
        "出血",
        "中以消化道",
        "血尿",
        "未再",
        "过敏",
        "加了"
    ],
    disease: [
        "常、诊",
        "：冠心",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eed1"),
    name: "NSAID",
    badres: [
        "高、",
        "的病",
        "死亡",
        "低蛋白血",
        "者死",
        "病史和低",
        "患者",
        "和死",
        "羟",
        "者院",
        "内死"
    ],
    disease: [
        "糖尿病",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eed3"),
    name: "“心元胶囊",
    badres: [
        "高脂血症",
        "耳鸣",
        "头晕",
        "高钾血症",
        "心烦不寐",
        "心痛",
        "心悸",
        "过敏"
    ],
    disease: [
        "心绞痛",
        "冠心病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eed5"),
    name: "百令胶囊",
    badres: [
        "死亡",
        "低蛋白血症",
        "无尿",
        "病变",
        "少尿",
        "性休",
        "血尿",
        "例死",
        "过敏"
    ],
    disease: [
        "特尿病",
        "败血症",
        "高血压",
        "糖尿病",
        "贫血",
        "白血病",
        "抗病毒药",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eed7"),
    name: "二苯乙烯苷",
    badres: [
        "其是肝",
        "首乌肝",
        "肝损害",
        "肝损伤"
    ],
    disease: [
        "微量元素"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eed9"),
    name: "二苯乙烯苷",
    badres: [
        "肾损害",
        "肝损害",
        "腹泻",
        "肝胆系统损害",
        "怠动",
        "死亡",
        "转氨酶升高",
        "黄染",
        "肝损伤",
        "外周神经系统损害",
        "黄、纳差",
        "麻木",
        "性肝"
    ],
    disease: [
        ")肝",
        "痈肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eedb"),
    name: "依帕司他",
    badres: [
        "皮疹",
        "皮掺",
        "恶心",
        "经病",
        "药疹",
        "丘疹",
        "多形红斑型药疹",
        "多形红斑",
        "肝损伤",
        "病变",
        "乏力",
        "碍(麻",
        "片致多形",
        "致药",
        "胃肠道反应",
        "皮修",
        "为多",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "头痛",
        "肺炎",
        "咳嗽",
        "例框尿",
        "水肿",
        "治疗糖"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eedd"),
    name: "酒石酸西尼必利",
    badres: [
        "室性心律失常",
        "饱胀",
        "腹痛",
        "灼热和恶",
        "心动过迷",
        "上腹",
        "取吐",
        "出血",
        "心室频动",
        "病变",
        "立胃溃",
        "困乏",
        "致心律失常",
        "过敏"
    ],
    disease: [
        "全球消化",
        "便秘",
        "餐后不适",
        "心律失常",
        "，观",
        "消化不良"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eedf"),
    name: "信迪利单抗",
    badres: [
        "，",
        "肝转移",
        "轻度皮肤",
        "肝损伤",
        "现恶",
        "过敏"
    ],
    disease: [
        "高血压",
        "淋巴福",
        "病毒性肝炎",
        "肝肿瘤",
        "肝瘤",
        "淋巴瘤",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eee1"),
    name: "是默沙",
    badres: [
        "皮疹",
        "恶心",
        "疼痛",
        "乏力",
        "局部",
        "出现",
        "过敏反应"
    ],
    disease: [
        "荨麻疹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eee3"),
    name: "混悬液",
    badres: [
        "死亡",
        "皮疹",
        "疼痛"
    ],
    disease: [
        "肺水肿",
        "感冒",
        "上呼吸道感染",
        "心律失常",
        "心肌炎",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eee5"),
    name: "地高辛",
    badres: [
        "死亡"
    ],
    disease: [
        "儿童心力",
        "竭和心律"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eee7"),
    name: "元胡止痛滴丸",
    badres: [
        "的肝损",
        "显压",
        "过敏",
        "食欲不操"
    ],
    disease: [
        "头痛",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eee9"),
    name: "甲氨蝶呤片",
    badres: [
        "血便",
        "腹泻",
        "死亡",
        "出血",
        ".银厕",
        "呕吐"
    ],
    disease: [
        "高血压",
        "腹痛",
        "银屑病",
        "白血病",
        "关节炎",
        "类风湿",
        "A)",
        "银腾病",
        "硬皮"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeeb"),
    name: "散万古得素",
    badres: [
        "死亡",
        "肝损伤"
    ],
    disease: [
        "关节炎",
        "肾病综合征"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeed"),
    name: "布地杂混慧液",
    badres: [
        "黑心",
        "风吐"
    ],
    disease: [
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeef"),
    name: "甘草",
    badres: [
        "啊吐"
    ],
    disease: [
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eef1"),
    name: "合生元",
    badres: [
        "以腹",
        "腹泻",
        "死亡",
        "半乳糖血症",
        "的腹",
        "急性",
        "有腹"
    ],
    disease: [
        "肺炎",
        "关性"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eef3"),
    name: "磷酸喹适应证",
    badres: [
        "损害",
        "腹泻",
        "皮疹",
        "恶心",
        "头晕",
        "聚心",
        "病变",
        "呼吸困难",
        "呕吐",
        "视物不清",
        "昏迷"
    ],
    disease: [
        "心力衰竭",
        "脏，出现",
        "腹痛",
        "红斑狼疮",
        "头痛",
        "流感",
        "关节炎",
        "肺炎",
        "咳嗽",
        "水肿",
        "肝炎",
        "心肌牌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eef5"),
    name: "单剂量格",
    badres: [
        "腹泻",
        "低血糖",
        "白细胞增多"
    ],
    disease: [
        "糖尿病",
        "精神分裂症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eef7"),
    name: "马兜铃酸",
    badres: [
        "低，很",
        "性肝损",
        "肝拱伤",
        "肝损伤"
    ],
    disease: [
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eef9"),
    name: "阿司区林",
    badres: [
        "官出",
        "血、",
        "死亡",
        "大出",
        "准化",
        ".2",
        "出血",
        "肝损伤",
        "出租",
        "细评",
        "道出",
        "(如鼻",
        "的出",
        "消化道出血",
        "，颅内出",
        "四林"
    ],
    disease: [
        "纠正高",
        "脑出血",
        "贫血",
        "压、",
        "C级的"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eefb"),
    name: "四环素牙",
    badres: [
        "肝衰",
        "休克",
        "出血"
    ],
    disease: [
        "败血症",
        "重型肝炎",
        "肺炎",
        "自然",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eefd"),
    name: "别嘌呤醇",
    badres: [
        "病死",
        "走心",
        "死亡",
        "高尿酸",
        "熟死",
        "高尿酸血症",
        "高尿血癌"
    ],
    disease: [
        "他治",
        "性心肌樱",
        "中风",
        "心肌死",
        "高血压",
        "心肌梗死",
        "高尿酸",
        "醇治",
        "性中",
        "的痛",
        "痛风",
        "高尿酸血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510eeff"),
    name: "孟鲁司特钠片",
    badres: [
        "脱屑",
        "表皮松解",
        "出血",
        "VKA",
        "心悸",
        "大疱性表皮松解症",
        "过敏"
    ],
    disease: [
        "冠心病",
        "失血性贫血",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef01"),
    name: "利奈唑胺片",
    badres: [
        "皮疹",
        "过史",
        "疼痛",
        "血小板",
        "粒细胞缺乏",
        "直红白减少"
    ],
    disease: [
        "关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef03"),
    name: "硝苯地平控释片",
    badres: [
        "口干",
        "过敏",
        "感觉",
        "皮疹",
        "疼痛",
        "门十和舌",
        "感觉消失",
        "出血",
        "肝损伤",
        "肝害",
        "乏力",
        "胃部不适",
        "无力",
        "感觉异常"
    ],
    disease: [
        "糖尿病",
        "黄疸",
        "病毒性肝炎",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef05"),
    name: "尼松方素",
    badres: [
        "病变",
        "查房，患",
        "耳迷",
        "者吸困难"
    ],
    disease: [
        "气喘",
        "肺炎",
        "哦嗽",
        "淋巴榴",
        "吃嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef07"),
    name: "由利妥背单抗",
    badres: [
        "病变",
        "病灶",
        "乏力",
        "疼痛"
    ],
    disease: [
        "无咳",
        "肺炎",
        "脚炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef09"),
    name: "利妥昔单抗",
    badres: [
        "细胞",
        "导致的先天",
        "性粒细胞减",
        "中性粒細",
        "直小板减少",
        "性粒细减",
        "粒细胞减少",
        "细胞减少",
        "中性粒细胞"
    ],
    disease: [
        "系统性红",
        "菌血症",
        "淋巴病",
        "组织边",
        "、淋巴",
        "带状疱疹",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef0b"),
    name: "利巴韦林注射液",
    badres: [
        "疲倦",
        "死亡",
        "致癌",
        "呕吐",
        "性出",
        "恶心",
        "食欲减退",
        "致畸",
        "过敏反应",
        "过敏",
        "、疲",
        "腹泻",
        "死广",
        "出血热",
        "、肌",
        "血小板减少",
        "乏力",
        "休克",
        "胃痛",
        "全身性损害"
    ],
    disease: [
        "胰腺炎",
        "血性",
        "V.",
        "性肺",
        "失眠",
        "便秘",
        "贫血",
        "心肌梗死",
        "流感病毒",
        "度下呼吸道感",
        "头痛",
        "上呼吸道感染",
        "肺炎",
        "病毒性心肌炎",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef0d"),
    name: "二甲双肌油",
    badres: [
        "恶心",
        "驱吐",
        "0诉",
        "心、",
        "腹部",
        "、呕",
        "现恶",
        "出现",
        "无恶",
        "00",
        "过敏"
    ],
    disease: [
        "胰腺炎",
        "急性胰",
        "但胰腺",
        "糖尿病",
        "腹痛",
        "肤腺炎",
        "关肤腺",
        "例糖尿",
        "与肤腺",
        "性胰腺",
        "和腹"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef0f"),
    name: "利拉鲁肽注射液",
    badres: [
        "胃肠道反应",
        "物的肝",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "附尿病",
        "胃结石"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef11"),
    name: "伏立康唑",
    badres: [
        "疼痛"
    ],
    disease: [
        "水肿",
        "心肌炎",
        "脑膜炎",
        "咳嗽",
        "肺结枝",
        "肺结核",
        "咳爽",
        "咳痰"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef13"),
    name: "蛋白酪氨酸磷酸",
    badres: [
        "胞死",
        "死亡",
        "起肝损",
        "腿死",
        "药物性",
        "肝损伤",
        "的肝损",
        "性肝损",
        "物与肝"
    ],
    disease: [
        "糖尿病",
        "疫性",
        "节性再生性",
        "肿性",
        "肝炎",
        "性肝"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef15"),
    name: "口股抗凝药华法林",
    badres: [
        "死亡"
    ],
    disease: [
        "关节炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef17"),
    name: "艾司奥美拉唑镁肠溶片",
    badres: [
        "疼痛"
    ],
    disease: [
        "手足综合征"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef19"),
    name: "华法林钠片",
    badres: [
        "出血"
    ],
    disease: [
        "高血压病",
        "心力衰竭",
        "8)高",
        "耕尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef1b"),
    name: "亚胺培南西司他丁钠",
    badres: [
        "发疹",
        "皮疹",
        "胸部",
        "者发",
        "药疹",
        "致敏",
        "法林",
        "麻疹",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "糖尿病",
        "型肝"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef1d"),
    name: "，卡前列",
    badres: [
        "腹泻",
        "恶心",
        "本患",
        "疼痛",
        "电吐",
        "胃肠道不良",
        "过敏"
    ],
    disease: [
        "腹泻",
        "高血压",
        "腹痛",
        "高直压",
        "流产",
        "评价，"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef1f"),
    name: "枕山纤醇",
    badres: [
        "真血压",
        "心吐",
        "头量",
        "疼痛",
        "过敏"
    ],
    disease: [
        "头痛",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef21"),
    name: "马西平阿",
    badres: [
        "口吐",
        "昏迷",
        "过敏"
    ],
    disease: [
        "癫发",
        "痛痫",
        "肝炎",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef23"),
    name: "人免疫球蛋白",
    badres: [
        "皮疹",
        "抗过",
        "E成中毒性表皮坏死",
        "脱腾",
        "干燥",
        "乏力",
        "过敏"
    ],
    disease: [
        "水",
        "水肿",
        "，水",
        "皮"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef25"),
    name: "甲尼龙",
    badres: [
        "皮疹",
        "大性表皮坏纯松解",
        "膜屑",
        "多形性红斑",
        "过敏",
        "皮步"
    ],
    disease: [
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef27"),
    name: "参芎葡萄糖注射液",
    badres: [
        "渗出",
        "皮疹",
        "发皮",
        "大疮性表皮松解症",
        "剥脱",
        "休克",
        "过敏反应",
        "大疱性表皮松解症",
        "过敏"
    ],
    disease: [
        "水肿",
        "廉梗死"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef29"),
    name: "双氯芬酸钠",
    badres: [
        "心慌",
        "惑心吐",
        "病变",
        "疼痛"
    ],
    disease: [
        "痛风",
        "心痛风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef2b"),
    name: "苏合香丸",
    badres: [
        "微悉",
        "疼痛",
        "胃肠道不适",
        "致过敏反",
        "呕吐",
        "恶心",
        "头晕",
        "胃肠不适",
        "以乏",
        "腹胀",
        "、呕",
        "、腹",
        "过敏反应",
        "昏迷",
        "腹泻",
        "伴肠不",
        "肝损伤",
        "乏力",
        "泄泻",
        "休克"
    ],
    disease: [
        "高血压",
        "咽痛",
        "感冒",
        "头痛",
        "肺炎",
        "冠心病",
        "咳嗽",
        "流感",
        "咳痰"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef2d"),
    name: "伏立康唑",
    badres: [
        ")",
        "病死",
        "生肝损",
        "死亡",
        "低血",
        "发生肝",
        "肝损伤",
        "d内",
        "休克",
        "和死",
        "唑致肝"
    ],
    disease: [
        "高血压",
        "糖尿病",
        "肺炎",
        "冠心病",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef2f"),
    name: "硫唑嘌呤片",
    badres: [
        "腹泻",
        "恶心",
        "心吐",
        "呕叶",
        "及肝损",
        "无力",
        "呕吐",
        "悲心",
        "过敏",
        "胀痛"
    ],
    disease: [
        "肌无力",
        "胰腺炎",
        "展腺炎",
        "腹痛",
        "用重注",
        "生急性腺",
        "符合胰",
        "鹿腺炎",
        "高南压",
        "胆石症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef31"),
    name: "托咪啶",
    badres: [
        "恶心",
        "头晕",
        "疼痛",
        "现疼",
        "嗜睡",
        "呕吐",
        "现血压升"
    ],
    disease: [
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef33"),
    name: "二甲亚",
    badres: [
        "皮疹",
        "可能",
        "高血压",
        "疼痛",
        "低血压",
        "嗜睡和体位性",
        "心动过",
        "应激反应",
        "心动过缓",
        "生嗜和体位性",
        "恶心呕吐"
    ],
    disease: [
        "脑膜炎",
        "心肌炎",
        "肺水肿",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef35"),
    name: "叶酸片",
    badres: [
        "厌食",
        "心慌",
        "呕吐",
        "干咳",
        "恶心",
        "头晕",
        "皮疹",
        "物，考虑",
        "皮",
        "腹胀",
        "心懂",
        "速发型过",
        "过敏反应",
        "过敏",
        "轻度",
        "cm",
        "皮肤瘙痒",
        "适，",
        "乏力",
        "食欲下降",
        "休克"
    ],
    disease: [
        "湿科就",
        "荨麻疹",
        "贫血",
        "类风性",
        "奥风湿",
        "黄血t",
        "关节炎",
        "类风湿",
        "漫性斑",
        "类风浑",
        "以治疗"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef37"),
    name: "非洛地平缓释片",
    badres: [
        "过敏"
    ],
    disease: [
        "肢水",
        "高血压",
        "因卵巢",
        "糖尿病",
        "红斑狼疮",
        "卵巢癌",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef39"),
    name: "、多西环",
    badres: [
        "尿毒综合征",
        "导致",
        "疼痛",
        "管病",
        "和呼吸闲",
        "者死",
        "病变",
        "和呼吸困",
        "血管",
        "、呼吸困",
        "呼吸困难",
        "血红蛋白减少",
        "月内"
    ],
    disease: [
        "性水",
        "尿毒综合征",
        "胆管癌",
        "为高血",
        "膀胱瘤",
        "胰腺癌",
        "高血压",
        "贫血",
        "肺水肿",
        "乳腺癌",
        "现高血",
        "心肌炎",
        "卵巢癌",
        "肺癌",
        "水肿",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef3b"),
    name: "前列地尔津射液",
    badres: [
        "过敏",
        "滑膜",
        "多发"
    ],
    disease: [
        "尿毒症"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef3d"),
    name: "佩氧地平",
    badres: [
        "无痛"
    ],
    disease: [
        "风病：",
        "型尿病",
        "右前",
        "断：2",
        "尿失禁",
        "史、邢"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef3f"),
    name: "多巴麟片",
    badres: [
        "睡眠"
    ],
    disease: [
        "金森",
        "帕金a",
        "高血压",
        "帕金森",
        "前列膝增生"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef41"),
    name: "括NSAIDs，DMAR",
    badres: [
        "关节",
        "肝损伤",
        "背疼",
        "，均为胃肠"
    ],
    disease: [
        "mc对强直性",
        "中轴脊",
        "关节炎",
        "柱关节"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef43"),
    name: "、氯吡格雷",
    badres: [
        "死亡",
        "高血钾",
        "新发"
    ],
    disease: [
        "心律失常",
        "冠心病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef45"),
    name: "用亚叶酸",
    badres: [
        "、啡",
        "是恶",
        "于肝损"
    ],
    disease: [
        "黏膜炎",
        "例银屑",
        "白血病",
        "细胸白",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef47"),
    name: "仙灵骨葆胶囊",
    badres: [
        "肝损害",
        "死亡",
        "肝损",
        "眩晕",
        "肝损伤",
        "尿直",
        "乏力",
        "无力",
        "过敏"
    ],
    disease: [
        "骨折",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef49"),
    name: "吲达帕胺片",
    badres: [
        "恶心",
        "血小板减少",
        "和血小板减",
        "剥脱性皮炎",
        "，血小板减",
        "过敏"
    ],
    disease: [
        "头痛",
        "病.除",
        "乳腺癌",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef4b"),
    name: "假硝苯地平片",
    badres: [
        "视力变化",
        "现双眼视",
        "视力下降",
        "过敏"
    ],
    disease: [
        "一过",
        "道1例",
        "例高血",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef4d"),
    name: "咖啡因",
    badres: [
        "怀疑高",
        "神出"
    ],
    disease: [
        "高血压",
        "早产",
        "胎早",
        "重高血",
        "酷早"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef4f"),
    name: "复方甘",
    badres: [
        "脱性皮货",
        "剃脱性应炎",
        "药疹",
        "料敏反应",
        "脱眉",
        "剥脱性皮炎",
        "过敏",
        "皮痿"
    ],
    disease: [
        "水肿",
        "肝炎",
        "着西肝",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef51"),
    name: "唑来膦酸注射液",
    badres: [
        "血细胞减少",
        "疼痛",
        "心过暖",
        "肝损伤",
        "病变",
        "呼吸固难",
        "过敏"
    ],
    disease: [
        "结膜炎",
        "高血压",
        "流感",
        "示结膜",
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef53"),
    name: "哦米酸",
    badres: [
        "后转",
        "疼痛"
    ],
    disease: [
        "糖尿病",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef55"),
    name: "喜炎平注射液",
    badres: [
        "腹泻",
        "致死",
        "皮疹",
        "致出生缺",
        "死亡",
        "、致",
        "为皮",
        "过敏反应",
        "过敏",
        "皮痿"
    ],
    disease: [
        "肺炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef57"),
    name: "土三七",
    badres: [
        "高血",
        "恶心",
        "肝纸胞",
        "死亡",
        "腹胀",
        "例；",
        "出血",
        "肝损伤",
        "腰椎间盘突出",
        "腰椎骨折",
        "少尿",
        "尿黄",
        "乏力",
        "过敏",
        "椎间款突出"
    ],
    disease: [
        "诊为肝",
        "前列腺",
        "前列腺炎",
        "高血压",
        "糖尿病",
        "腹痛",
        "黄症",
        "冠心病",
        "水肿",
        "骨折",
        "风混性心脏病",
        "肝硬化"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef59"),
    name: "地拉罗司分散片",
    badres: [
        "者因",
        "乏力加"
    ],
    disease: [
        "糖尿病",
        "贫血",
        "水肿",
        "黄血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef5b"),
    name: "，头克洛分散",
    badres: [
        "腹泻",
        "出血",
        "示左上尖气管出",
        "呼吸困难",
        "颅内出血",
        "过敏"
    ],
    disease: [
        "间咯",
        "冠心病",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef5d"),
    name: "垂体后叶素",
    badres: [
        "过敏",
        "头晕",
        "皮掺",
        "；腹",
        "出血管性水肿",
        "出血",
        "心慌",
        "无血",
        "黑便",
        "过敏反应",
        "呕血"
    ],
    disease: [
        "性水",
        "水种",
        "高血病",
        "糖尿病",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef5f"),
    name: "尿酸",
    badres: [
        "，过敏反",
        "粒细胞减少",
        "血糖升高",
        "尿病"
    ],
    disease: [
        "诊糖",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef61"),
    name: "化钠注射液",
    badres: [
        "馥泻",
        "腹泻",
        "皮疹",
        "大死",
        "死亡",
        "剥脱性皮炎",
        "过敏"
    ],
    disease: [
        "胞肺",
        "肺腺森",
        "肺腺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef63"),
    name: "盐酸胺碘酮注射液",
    badres: [
        "低血压",
        "心动过缓",
        "肝损伤"
    ],
    disease: [
        "心力衰竭",
        "心律失常",
        "冠心病",
        "：冠心",
        "毒性",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef65"),
    name: "珍珠衡补造",
    badres: [
        "腹泻",
        "胃肠系统损害",
        "恶心",
        "腹胀",
        "恶血",
        "肝损伤",
        "月经不通"
    ],
    disease: [
        "腹痛",
        "黄疸",
        "淋疾",
        "破风毒"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef67"),
    name: "卡洛祛",
    badres: [
        "CU",
        "国死"
    ],
    disease: [
        "性感染"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef69"),
    name: "多索茶碱",
    badres: [
        "高血糖",
        "恶心",
        "心动过速",
        "过敏"
    ],
    disease: [
        "，",
        "失眠",
        "心肌梗死",
        "头痛",
        "喘息",
        "哮儿",
        "咳嗽",
        "哮喘"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef6b"),
    name: "多索茶碱",
    badres: [
        "死亡",
        "意识障碍"
    ],
    disease: [
        "心律失常"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef6d"),
    name: "葡糖注射液",
    badres: [
        "疼痛",
        "高渗糖",
        "高血糖",
        "高滲糖",
        "昏迷"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef6f"),
    name: "甲萌唑",
    badres: [
        "腹泻",
        "呕吐",
        "恶心"
    ],
    disease: [
        "胰腺炎",
        "急性胰",
        "腹痛",
        "阴道炎",
        "股腺灵",
        "急性腺炎",
        "肺炎",
        "快腺炎",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef71"),
    name: "实验动物，",
    badres: [
        "全部",
        "死亡",
        "肝损伤",
        "部死",
        "的肝损"
    ],
    disease: [
        "肝癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef73"),
    name: "NSAIDs",
    badres: [
        "口干",
        "全血细胞减",
        "上消化道出血",
        "其病",
        "死亡",
        "，死",
        "病变",
        "性休",
        "致过",
        "器官损害",
        "和低镁血"
    ],
    disease: [
        "心力衰竭",
        "消化性溃疡",
        "便秘",
        "糖尿病",
        "心肌梗死",
        "痴呆",
        "性肾",
        "、缺铁性贫",
        "白血病",
        "、肺",
        "、骨"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef75"),
    name: "丙氨酸",
    badres: [
        "鼻塞",
        "皮疹",
        "恶心",
        "疼痛",
        "《略自)",
        "呼吸困难",
        "呕吐"
    ],
    disease: [
        "感冒",
        "头痛",
        "流感",
        "肺炎",
        "咳嗽",
        "水肿",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef77"),
    name: "二氢吡啶钙通道",
    badres: [
        "胎儿",
        "出血",
        "，如",
        "中的",
        "出生缺陷"
    ],
    disease: [
        "高血压",
        "艾滋病",
        "早产",
        "产，",
        "肺炎",
        "冠状病毒感染",
        "孕妇",
        "痛风",
        "畸、",
        "产、"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef79"),
    name: "半、肉",
    badres: [
        "疼痛",
        "手足综合柜",
        "疑、"
    ],
    disease: [
        "癫痫",
        "癫痛",
        "用抗",
        "心肌炎",
        "晋折",
        "骨折"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef7b"),
    name: "三氮唑核苷",
    badres: [
        "致畸"
    ],
    disease: [
        "为急性上呼吸",
        "急性下呼吸道感染",
        "上呼吸道感染",
        "肺炎",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef7d"),
    name: "丹参滴丸",
    badres: [
        "死亡",
        "死广",
        "疼痛"
    ],
    disease: [
        "冠心病心纹痛",
        "心绞痛",
        "心纹痛",
        "2.3",
        "，冠心",
        "疗心绞",
        "疗冠心病心纹",
        "冠心病",
        "山梨酯",
        "冠心病心绞痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef7f"),
    name: "妥英麻黄茶碱片",
    badres: [
        "病变",
        "过敏",
        "幻听"
    ],
    disease: [
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef81"),
    name: "，天冬氨",
    badres: [
        "，",
        ".伴",
        "头晕",
        "肝伤",
        "题心",
        "肝损伤",
        "电吐",
        "乏力"
    ],
    disease: [
        "肾炎",
        "高血压",
        "疗感",
        "感冒",
        "头痛",
        "感冒灵"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef83"),
    name: "复方氨林巴比妥注射液",
    badres: [
        "皮疹",
        "肝损伤",
        "肝害",
        "乏力",
        "过敏"
    ],
    disease: [
        "黄疸",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef85"),
    name: "双环醇片",
    badres: [
        "的高血",
        "高血症",
        "高钾血症",
        "肝伤",
        "高钾血",
        "奏致高",
        "肝损伤",
        "无力",
        "所致肝"
    ],
    disease: [
        "复方",
        "高血症",
        "肝炎",
        "感冒"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef87"),
    name: "L，碳",
    badres: [
        "腹泻",
        "腹胀",
        "驱吐",
        "，腹",
        "昏睡",
        "昏迷"
    ],
    disease: [
        "腹痛",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef89"),
    name: "复方脂溶性维生素注射剂",
    badres: [
        "过敏反应",
        "休克",
        "严重过敏"
    ],
    disease: [
        "微量元素",
        "黄疸",
        "维生素注射剂",
        "顺产"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef8b"),
    name: "子克座萨尼",
    badres: [
        "伴脱",
        "皮疹",
        "恶心",
        "和中性表皮坏死溶解",
        "疼痛",
        "脱屑",
        "重皮疹光敏性皮美多性红",
        "，皮",
        "呕吐",
        "说觉异常",
        "腹钙",
        "成4",
        "过敏",
        "魅痛",
        "."
    ],
    disease: [
        "唐尿病",
        "便秘",
        "银屑病",
        "癌症",
        "肺癌",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef8d"),
    name: "甲泼尼龙",
    badres: [
        "死广",
        "松弛性水疱和表皮松解",
        "死亡",
        "低蛋白血症",
        "表皮松解",
        "肝损伤",
        "病变",
        "呼吸困难",
        "大疱性表皮松解症",
        "过敏",
        "外用斑致大性表皮松解症"
    ],
    disease: [
        "银屑病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef8f"),
    name: "甲泼尼龙",
    badres: [
        "生过敏反",
        "恶心",
        "型过敏反",
        "过教反应",
        "后山現呼",
        "过敏反应",
        "酸痛",
        "位皮",
        "性休",
        "肉酸",
        "麻木",
        "过敏"
    ],
    disease: [
        "头水",
        "高血压",
        "糖尿病",
        "；",
        "水肿",
        "肝炎",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef91"),
    name: "米卡井净1",
    badres: [
        "死亡",
        "过敏",
        "实变"
    ],
    disease: [
        "，",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef93"),
    name: "氧雷他定片",
    badres: [
        "药修",
        "皮疹",
        "过敏",
        "过敏反应"
    ],
    disease: [
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef95"),
    name: "熊去氧胆酸",
    badres: [
        "实变影",
        "恶心",
        "死亡",
        "过敏血压",
        "过敏",
        "轻度贫血"
    ],
    disease: [
        "高血压",
        "贫血",
        "肺炎",
        "贫巾",
        "咳嗽",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef97"),
    name: "大黄素",
    badres: [
        "高血",
        "度明",
        "高血脂",
        "死亡",
        "高血糖",
        "病变"
    ],
    disease: [
        "糖尿病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef99"),
    name: "缸霉素软膏",
    badres: [
        "致死",
        "起的测脱性",
        "皮掺",
        "皮疹",
        "腹软",
        "药疹",
        "新生儿剥脱",
        "脱性皮炎",
        "嗜酸粒细增多",
        "剥脱",
        "皮肤脱落",
        "剥脱性皮炎",
        "多形性红斑",
        "过敏",
        "剥晓性皮炎"
    ],
    disease: [
        "荨麻疹",
        "败血症",
        "黄疸"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef9b"),
    name: "氢化可的松注射液",
    badres: [
        "低血",
        "H，",
        "心动过建",
        "出血",
        "心懂",
        "嗜睡",
        "n，意",
        "低山压",
        "呼吸困难",
        "过敏"
    ],
    disease: [
        "冠心病",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef9d"),
    name: "组人促红累住",
    badres: [
        "，L",
        "者诉",
        "过敏",
        "出血"
    ],
    disease: [
        "尿失",
        "尿失禁"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510ef9f"),
    name: "氯化钠注射液",
    badres: [
        "鼻塞",
        "血尿",
        "过敏"
    ],
    disease: [
        "，",
        "色尿",
        "非免疫",
        "肺炎",
        "咳嗽",
        "肝炎",
        "噪感",
        "咳嗷"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efa1"),
    name: "赖氨匹林",
    badres: [
        "脱落",
        "出水",
        "中毒性表皮坏死松解症",
        "过敏"
    ],
    disease: [
        "水肿",
        "感冒"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efa3"),
    name: "维生素K",
    badres: [
        "病，吸收不综合征",
        "过敏",
        "思心"
    ],
    disease: [
        "腾腺炎",
        "高直压",
        "头痛",
        "性腺炎",
        "肝炎",
        "胆囊炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efa5"),
    name: "头孢羟氨苄片",
    badres: [
        "至5",
        "皮疹",
        "皮疲",
        "头晕",
        "死亡",
        "皮府",
        "药疹",
        "现恶性心律失",
        "身乏",
        "现头",
        "机过",
        "皮修",
        "乏力"
    ],
    disease: [
        "肾炎",
        "心肌炎",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efa7"),
    name: "甘肤",
    badres: [
        "制，白细胞",
        "白细腹减少",
        "血小板减",
        "血小板减少",
        "度白细胞减",
        "少及血小板",
        "白细胞减少",
        "肝损伤",
        "粒细胞减少",
        "癌患者血小",
        "度血小板",
        "、是否",
        "、中性粒细",
        "性粒细胞减",
        "中性粒细胞"
    ],
    disease: [
        "非小",
        "小细",
        "致肺",
        "现，",
        "铂致",
        "细胞",
        "贫血",
        "胞肺",
        "肺癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efa9"),
    name: "奥利司他",
    badres: [
        "短心",
        "肝伤",
        "后出",
        "肝损伤",
        "肝拟伤",
        "乏力",
        "无殊不",
        "的肝械"
    ],
    disease: [
        "冠心病",
        "肝炎",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efab"),
    name: "奥利司他",
    badres: [
        "尤力",
        "横纹肌溶解",
        "肌痛",
        "横纹肌溶解症",
        "疼痛",
        "肉疼",
        "下肢",
        "酸痛",
        "横紋肌溶解",
        "无力",
        "肢肌",
        "L.尿"
    ],
    disease: [
        "贫血",
        "躺风",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efad"),
    name: "奥卡西平片",
    badres: [
        "皮疹",
        "恶心",
        "头晕",
        "血小板减少",
        "起血小板减",
        "性幻",
        "出血",
        "西平",
        "发皮",
        "乏力",
        "皮疹，血小",
        "嗜睡",
        "、幻",
        "呕吐",
        "过敏",
        "身皮"
    ],
    disease: [
        "癫痫",
        "gb",
        "痴呆",
        "头痛",
        "癫病"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efaf"),
    name: "苯巴比妥",
    badres: [
        "超敏反点综",
        "；中毒性表皮坏死",
        "叉过敏反",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "癫痫",
        "西平致",
        "致斑丘",
        "斑丘疹",
        ".ml"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efb1"),
    name: "奥卡西半",
    badres: [
        "，",
        "晕無",
        "过敏",
        "晕既",
        "性早",
        "意识丧失",
        "睡，倦，记忆力",
        "/，",
        "晕威",
        "降",
        "心动过缓",
        "晕厥",
        "心悸",
        "舜、",
        "次晕",
        "物过"
    ],
    disease: [
        "查示",
        "癫痫",
        "心律失常",
        "难产",
        "痛痫",
        "应为"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efb3"),
    name: "L，天冬酸",
    badres: [
        "肝损伤"
    ],
    disease: [
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efb5"),
    name: "静林滴桂奥沙利",
    badres: [
        "病变",
        "呕吐",
        "小板减少",
        "过敏"
    ],
    disease: [
        "眼白内",
        "白内障"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efb7"),
    name: "奥沙利注射液",
    badres: [
        "耳鸣",
        "头晕",
        "疼痛",
        "鸣和",
        "现为",
        "聋、",
        "耳聋",
        "麻木",
        "1日",
        "过敏",
        "听力下降"
    ],
    disease: [
        "高血压",
        "糖尿病",
        "头痛",
        "青光银",
        "白内障",
        "双下",
        "神经炎",
        "胃癌"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efb9"),
    name: "奥沙利铂",
    badres: [
        "骨抑制恶",
        "病变",
        "乏力"
    ],
    disease: [
        "直肠癌",
        "高直压",
        "肺炎",
        "咳嗽",
        "水肿",
        "肝炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efbb"),
    name: "氯沙坦钾片",
    badres: [
        "羊水过少",
        "出生缺陪"
    ],
    disease: [
        "肾病综合",
        "肾病综合征"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efbd"),
    name: "孟鲁司特钠片",
    badres: [
        "子宫出血",
        "多形性红斑",
        "大性表皮松解",
        "过敏",
        "大疱性表皮松解症"
    ],
    disease: [
        "支气管扩张",
        "详：糖",
        "失直性蓝血"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efbf"),
    name: "甘氮酸",
    badres: [
        "死亡",
        "头晕",
        "过敏",
        "骨损害"
    ],
    disease: [
        "高血压",
        "慢性胃炎",
        "头痛",
        "所致肾病综",
        "水肿",
        "胃炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efc1"),
    name: "一内酰坡酶",
    badres: [
        "死亡"
    ],
    disease: [
        "菌和",
        "菌、",
        "菌有",
        "肺炎",
        "咳嗽"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efc3"),
    name: "尼洛警尼",
    badres: [
        "为恶",
        "乏力",
        "、皮",
        "心规梗死",
        "、腹",
        "井死",
        "过敏"
    ],
    disease: [
        "型心肌梗",
        "、便",
        "心肌梗死",
        "急性心肌",
        "性白血",
        "、头",
        "高面压",
        "性心肌死",
        ")高血",
        "冠心病",
        "胞性白",
        "慢性髓"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efc5"),
    name: "左旋肉碱",
    badres: [
        "出血",
        "过敏",
        "癫痛"
    ],
    disease: [
        "冠心病",
        "离血压",
        "癫痫"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efc7"),
    name: "左氧氟沙星",
    badres: [
        "皮疹",
        "疼痛",
        "过敏反座",
        "和轻",
        "病变",
        "皮修",
        "头绿",
        "心呕吐",
        "过敏"
    ],
    disease: [
        "头痛"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efc9"),
    name: "氟沙星氯化钠注射液联合尼美舒利片",
    badres: [
        "鼻塞",
        "头晕",
        "实变",
        "纳差",
        "幻觉",
        "乏力"
    ],
    disease: [
        "子宫肌瘤",
        "腹痛",
        "头痛",
        "肺炎",
        "咳嗽",
        "咳痰"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efcb"),
    name: "左氧氟沙星注射液",
    badres: [
        "中毒性表皮坏死松解封",
        "征毕中毒性表皮环光松",
        "皮疹",
        "和中毒性表皮环死松解",
        "表皮坏死松解症",
        "皮于",
        "中毒性表皮坏死松解症",
        "丘疹",
        "消选",
        "中毒性表皮环死松解",
        "狂成中毒性表皮坏死松",
        "排尿不畅",
        "皮疮",
        "表皮剥脱",
        "中毒性表皮环光松解症",
        "中毒性表皮坏处松解症",
        "过敏"
    ],
    disease: [
        "腔磁共振检",
        "型糖尿",
        "高血压"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efcd"),
    name: "左氧氟沙星注射液",
    badres: [
        "腹泻",
        "肌炎",
        "横纹肌溶解",
        "疼痛",
        "痛觉",
        "肌痛",
        "酸痛",
        "呕吐",
        "过敏"
    ],
    disease: [
        "肌无力",
        "高血压",
        "腹痛",
        "糖尿病",
        "心肌梗死",
        "肌健炎",
        "心肌炎",
        "咳嗽",
        "心肌损伤",
        "肺结核",
        "水肿"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efcf"),
    name: "左氧氟沙星",
    badres: [
        "皮疹",
        "数模纹肌解症",
        "横纹肌溶解",
        "药疹",
        "心，吐",
        "死性",
        "酸痛",
        "横纹夙溶解",
        "无力",
        "过敏反应",
        "过敏"
    ],
    disease: [
        "心神失常",
        "咳嗽",
        "白癜风"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efd1"),
    name: "美托洛尔",
    badres: [
        "转型室性",
        "增加",
        "意识丧失",
        "低血压",
        "低血钾",
        "引起室性心率",
        "致低",
        "室性心动",
        "死性心律失营",
        "心动过速",
        "过敏"
    ],
    disease: [
        "心力衰竭",
        "高血压",
        "糖尿病",
        "头痛",
        "发生性心"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efd3"),
    name: "衣柔比星",
    badres: [
        "呼吸困难",
        "呕吐",
        "恶心",
        "过敏"
    ],
    disease: [
        "胃炎",
        "便血",
        "淋巴瘤"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efd5"),
    name: "乙胶丁醇",
    badres: [
        "高钾血症",
        "“乏",
        "病变",
        "乏力",
        "者出"
    ],
    disease: [
        "高血压",
        "癫痫",
        "尿路感染",
        "性脑膜",
        "结核性",
        "脑膜炎"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efd7"),
    name: "孙洲亮玉昆赢志文",
    badres: [
        "关肝损",
        "、大疱性表皮松解",
        "谷胱甘",
        "疗后出",
        "72h",
        "肝损伤",
        "现剥脱性皮",
        "缺失基",
        ")姐者",
        "后出现",
        "损伤、胃肠",
        "骨抑制",
        "胃肠道反应",
        "儿肝"
    ],
    disease: [
        "疗骨肉",
        "细胞白",
        "持治疗",
        "白血病",
        "巴细白"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efd9"),
    name: "二甲双凰",
    badres: [
        "口干",
        "多尿",
        "多屎",
        "最口",
        "2墨",
        "口十",
        "糖尿",
        "腹門"
    ],
    disease: [
        "糖尿病",
        "糖尿患"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efdb"),
    name: "外，",
    badres: [
        "强可降",
        "疑感",
        "急性心肌",
        "加重肺",
        "或加",
        "及对肺",
        "高业压"
    ],
    disease: [
        "的高血",
        "高血压",
        "aV)",
        "沙坦能",
        "与高血",
        "Ⅱ引起",
        "型冠",
        "心肌损害",
        "高五压",
        "以及高",
        "药：高",
        "流感",
        "心力衰师",
        "词】冠状病毒",
        "的高",
        "V高血",
        "佳的裔"
    ]
} ]);
db.getCollection("message").insert([ {
    _id: ObjectId("5fec61810e6d2bda0510efdd"),
    name: "大环内酯",
    badres: [
        "椭痛",
        "，",
        "反皮",
        "3)"
    ],
    disease: [
        "腹膜炎",
        "癫痫"
    ]
} ]);
