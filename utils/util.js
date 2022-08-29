const FILE_PATH = "D:\\study\\esg\\ESG报告数据20220828附有权重.xlsx"



const XXQZ = 0.05 //信息权重
const YFQZ = 0.08 //研发权重
const JLQZ = 0.04 //激励机制
const LYFGTQZ = 0.04 //利益方沟通权重
const HBQZ = 0.12 //环保权重
const JNQZ = 0.08 //节能权重
const ZHNHQZ = 0.36 //综合能耗权重
const GYLQZ = 0.05 //供应链权重
const NNBLQZ = 0.07 //男女比例权重
const AQTRQZ = 0.08 //安全投入权重
const JKQZ = 0.03 //捐款权重


const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}


function countNumberhelp(number,revenue,max,min) {
    var tmp = 0;
    tmp = 100 * ((number / revenue) - min) / (max-min);
    if (tmp > 100) {
        tmp = 100;
    }
    else if (tmp < 0) {
        tmp = 0;
    }
    return tmp;
}

function countNumber(content,max,min) {
    var score = 0;
    //信息营收分数
    if (content.xxpl != "have" && content.xxpl != "/" ) {
        score += countNumberhelp(content.xxpl,content.revenue,max.xxysb,min.xxysb) * XXQZ;
    }
    //研发占比
    if (content.yftr != "have" && content.yftr != "/" ){
        score += countNumberhelp(content.yftr,content.revenue,max.yfzb,min.yfzb) * YFQZ;
    }
    //环保占比
    if (content.hbtr != "have" && content.hbtr != "/" ){
    score += countNumberhelp(content.hbtr,content.revenue,max.hbzb,min.hbzb) * HBQZ;
    }
    //节能营收比
    if (content.jynh != "have" && content.jynh != "/" ){
    score += countNumberhelp(content.jynh,content.revenue,max.jnysb,min.jnysb) * JNQZ;
    }
    //综合能耗
    if (content.wsqtpf != "have" && content.wsqtpf != "/" ) {
    score += countNumberhelp(content.wsqtpf,content.revenue,max.zhnh,min.zhnh) * ZHNHQZ;
    }
    //安全投入占比
    if (content.aqsctr != "have" && content.aqsctr != "/" ) {
    score += countNumberhelp(content.aqsctr/10000,content.revenue,max.aqtrzb,min.aqtrzb) * AQTRQZ;
    }
    //捐款占比
    if (content.ggly != "have" && content.ggly != "/" ) {
    score += countNumberhelp(content.ggly/10000,content.revenue,max.jkzb,min.jkzb) * JKQZ;
    }
    //激励机制
    if (content.jljz != "have" && content.jljz != "/" ) {
    score += content.jljz * 100 * JLQZ;
    }
    //利益相关方沟通
    if (content.lyxgfgt != "have" && content.lyxgfgt != "/" ) {
    score += content.lyxgfgt * 100 * LYFGTQZ;
    }
    //供应链管理
    if (content.gylgl != "have" && content.gylgl != "/" ) {
    score += content.gylgl * 100 * GYLQZ;
    }
    //男女比例
    if (content.nnbl != "have" && content.nnbl != "/" ) {
    score += (0.5 - Math.abs(content.nnbl/100,0.5)) * 2 * NNBLQZ;
    }
    console.log(score)
    return score;
}

function getFilePath() {
    return FILE_PATH;
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime,
  getFilePath,
  countNumber
}
