const tarotDeck = [
  { nameCN: "愚者", nameEN: "The Fool", keywords: "开始, 冒险", upright: "正位: 新的开始、天真、自由", reversed: "逆位: 冲动、鲁莽、逃避", advice: "保持开放，但不要失去理性。" },
  { nameCN: "魔术师", nameEN: "The Magician", keywords: "创造, 意志", upright: "正位: 潜能、意志、创造力", reversed: "逆位: 欺骗、幻象、操纵", advice: "相信自己的力量，不要被表象迷惑。" },
  { nameCN: "女祭司", nameEN: "The High Priestess", keywords: "智慧, 潜意识", upright: "正位: 直觉、神秘、潜意识", reversed: "逆位: 秘密、压抑、表面现象", advice: "倾听内心的声音，保持耐心。" },
  { nameCN: "女皇", nameEN: "The Empress", keywords: "丰饶, 母性, 美", upright: "成长，滋养，丰盛", reversed: "过度依赖，缺乏创造", advice: "享受生活中的美好，关注情感的滋养。" },
  { nameCN: "皇帝", nameEN: "The Emperor", keywords: "权威, 规则, 稳定", upright: "秩序，稳定，领导力", reversed: "专制，控制欲", advice: "保持理性，建立稳固的基础。" },
  { nameCN: "教皇", nameEN: "The Hierophant", keywords: "传统, 信仰, 学习", upright: "精神引导，传统智慧", reversed: "教条，反叛", advice: "遵循传统价值观，或从导师那里获取帮助。" },
  { nameCN: "恋人", nameEN: "The Lovers", keywords: "选择, 爱情, 和谐", upright: "深层关系，和谐，抉择", reversed: "矛盾，诱惑", advice: "面对感情要真诚，也要作出明确的选择。" },
  { nameCN: "战车", nameEN: "The Chariot", keywords: "意志, 胜利, 控制", upright: "掌控局势，取得胜利", reversed: "失控，失败", advice: "坚持信念，掌控好局面，别轻易放弃。" },
  { nameCN: "力量", nameEN: "Strength", keywords: "勇气, 耐心, 内心力量", upright: "自律，勇气，平和", reversed: "软弱，缺乏信心", advice: "相信自己，用温和的力量解决问题。" },
  { nameCN: "隐者", nameEN: "The Hermit", keywords: "独处, 思考, 内省", upright: "智慧，内在探索", reversed: "孤立，迷茫", advice: "适当抽离，给自己思考的空间。" },
  { nameCN: "命运之轮", nameEN: "Wheel of Fortune", keywords: "命运, 转折, 机会", upright: "好运到来，转机", reversed: "倒霉，停滞", advice: "顺应变化，把握机会。" },
  { nameCN: "正义", nameEN: "Justice", keywords: "公正, 真相, 因果", upright: "公正，平衡，因果", reversed: "偏见，不公", advice: "要理智分析，遵循公平的原则。" },
  { nameCN: "倒吊人", nameEN: "The Hanged Man", keywords: "牺牲, 转变, 放下", upright: "新的视角，接受等待", reversed: "僵局，抗拒", advice: "学会换位思考，放下执念。" },
  { nameCN: "死神", nameEN: "Death", keywords: "结束, 重生, 转化", upright: "旧的结束，新的开始", reversed: "抗拒改变，停滞", advice: "接受改变，勇敢迎接新阶段。" },
  { nameCN: "节制", nameEN: "Temperance", keywords: "平衡, 和谐, 节制", upright: "中庸之道，适度", reversed: "失衡，极端", advice: "找到平衡点，避免过度。" },
  { nameCN: "恶魔", nameEN: "The Devil", keywords: "诱惑, 束缚, 欲望", upright: "沉迷，欲望控制", reversed: "解脱，觉醒", advice: "看清不健康的依赖，主动走出来。" },
  { nameCN: "高塔", nameEN: "The Tower", keywords: "突变, 崩塌, 突破", upright: "突然变化，旧结构崩溃", reversed: "延迟灾难，害怕改变", advice: "面对危机要冷静，它可能带来新机会。" },
  { nameCN: "星星", nameEN: "The Star", keywords: "希望, 治愈, 灵感", upright: "希望重燃，内心平静", reversed: "失望，信念动摇", advice: "保持信念，你的未来有希望。" },
  { nameCN: "月亮", nameEN: "The Moon", keywords: "幻觉, 潜意识, 不安", upright: "直觉增强，潜意识提醒", reversed: "迷惑，欺骗", advice: "分辨真假，不要被幻象蒙蔽。" },
  { nameCN: "太阳", nameEN: "The Sun", keywords: "成功, 快乐, 积极", upright: "喜悦，成功，活力", reversed: "延迟成功，虚假的快乐", advice: "保持乐观，分享你的光芒。" },
  { nameCN: "审判", nameEN: "Judgement", keywords: "觉醒, 反思, 审视", upright: "新的觉醒，重新评估", reversed: "自我怀疑，逃避", advice: "勇于面对过去，迎接新生。" },
  { nameCN: "世界", nameEN: "The World", keywords: "完成, 圆满, 目标", upright: "成功，圆满，完成旅程", reversed: "未完成，停滞", advice: "庆祝你的成果，准备新的旅程。" }
];

const drawButton = document.getElementById('drawButton');
const card = document.getElementById('card');
const cardInfo = document.getElementById('cardInfo');
const overlay = document.getElementById('fullscreenOverlay');
const overlayContent = document.getElementById('fullscreenContent');
const closeOverlay = document.getElementById('closeOverlay');
const userQuestion = document.getElementById('userQuestion');

let currentCard = null;
let isReversed = false;

drawButton.addEventListener('click', () => {
  const input = document.getElementById('userQuestion');
  if (input.value.trim() === '') {
    alert('请输入您的困惑！');
    return;
  }

  const randomIndex = Math.floor(Math.random() * tarotDeck.length);
  currentCard = tarotDeck[randomIndex];
  isReversed = Math.random() < 0.5;

  card.style.display = 'block';
  card.classList.remove('flipped');
  cardInfo.innerHTML = `<strong>${currentCard.nameCN}</strong><br><strong>${currentCard.nameEN}</strong><br>${isReversed ? '逆位' : '正位'}<br><br>点击卡牌查看详细解读`;
    });


card.addEventListener('click', () => {
 card.classList.toggle('flipped');
    });

cardInfo.addEventListener('click', () => {
  if(currentCard){
     overlayContent.innerHTML =`<p><strong>问题:</strong> <span style='font-size:1em;'>${userQuestion.value}</span></p><h2>${currentCard.nameCN}<br>${currentCard.nameEN}</h2><p><strong>正/逆位:</strong> ${isReversed ? currentCard.reversed : currentCard.upright}</p><p><strong>关键词:</strong> ${currentCard.keywords}</p><p><strong>个性化解读:</strong> ${currentCard.advice}</p>`;
     overlay.style.display = 'flex';
  }
});

closeOverlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});