const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は 94℉ の暑い日だった。 :insertx: は散歩に出かけた。 :inserty: に着いた時、ボブは :insertz: を見た。体重 300ポンド の :insertx: は驚かなかった。よくあることだった。';
const insertX = ['津田梅子', '小山松子', 'ハーツホン'];
const insertY = ['東工大', 'ヒーローショーのステージ', '多摩学園都市'];
const insertZ = ['研究室の爆発', '消防車が出ているの', '無線機で通信している人'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} kg;
    const temperature =  `${Math.round((94-32) * 5 / 9)} ℃`;
    newStory = newStory.replace('94℉', temperature);
    newStory = newStory.replace('300ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
