const moonsigns = ['capricorn', 'aquarius', 'piscies', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius'];
const sunsigns = ['capricorn', 'aquarius', 'piscies', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius'];
const risingsigns = ['capricorn', 'aquarius', 'piscies', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius'];
let sun = moonsigns[Math.floor(Math.random() * 12)];
let moon = sunsigns[Math.floor(Math.random() * 12)];
let risingSign = risingsigns[Math.floor(Math.random() * 12)];
let getMessage = `Your sun sign is ${sun}, your moon sign is ${moon},Your moon sign is ${risingSign},`;
console.log(getMessage)