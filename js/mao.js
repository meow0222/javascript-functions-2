//arr and const
const img = ["imgs/cafe2.jpg", "imgs/cafe3.jpg", "imgs/cafe4.jpg", "imgs/cafe5.jpg"];
const changePic = document.getElementById('changePic'); // 画像要素を取得
let count = 0; //Assignment Operators

// picChange 関数のみ修正
function picChange() { //named function
  // 画像選択
  changePic.src = img[count]; 

  count++; //Arithmetic Operators
  if (count === img.length) { //Evaluation / Comparison Operators, Conditional Statement
    count = 0; // 最後の画像の後は最初の画像に戻る
  }
}

setInterval(picChange, 5000);





// JavaScript
class ImageCarousel { //Built in class, Built in functions, Built-in Methods
  constructor(list, imgElement, rightArrow, leftArrow, pElement) { //Constructor
    this.list = list;
    this.imgElement = imgElement;
    this.rightArrow = rightArrow;
    this.leftArrow = leftArrow;
    this.pElement = pElement;
    this.imgN = 0;
    
    this.setImage();

    document.addEventListener('DOMContentLoaded', () => { // Anonymous Function
      this.setImage();
    });

    this.rightArrow.addEventListener('click', () => {
      this.imgN -= 1;
      if (this.imgN < 0) {
        this.imgN = this.list.length - 1;
      }
      this.setImage();
    });

    this.leftArrow.addEventListener('click', () => {
      this.imgN += 1;
      if (this.imgN >= this.list.length) {
        this.imgN = 0;
      }
      this.setImage();
    });
  }

  setImage() {
    this.imgElement.src = this.list[this.imgN];
    this.pElement.textContent = `${this.imgN + 1} / ${this.list.length}`;
  }
}

//String Manipulation, 
// カルーセル1
const list1 = ['imgs/01.jpg', 'imgs/02.jpg', 'imgs/03.jpg'];
const carousel1 = new ImageCarousel(list1, 
document.getElementById('main-pic1'), 
document.getElementById('prev1'), 
document.getElementById('next1'), 
document.getElementById('photo1'));

// カルーセル2
const list2 = ['imgs/04.jpg', 'imgs/05.jpg', 'imgs/06.jpg'];
const carousel2 = new ImageCarousel(list2, 
document.getElementById('main-pic2'), 
document.getElementById('prev2'), 
document.getElementById('next2'), 
document.getElementById('photo2'));

// カルーセル3
const list3 = ['imgs/07.jpg', 'imgs/08.jpg', 'imgs/09.jpg'];
const carousel3 = new ImageCarousel(list3, 
document.getElementById('main-pic3'), 
document.getElementById('prev3'), 
document.getElementById('next3'), 
document.getElementById('photo3'));





function setupPopup(buttonId, wrapperId, closeId) {
  const clickBtn = document.getElementById(buttonId);
  const popupWrapper = document.getElementById(wrapperId);

  clickBtn.addEventListener('click', () => {
    popupWrapper.style.display = 'block';
  });

  popupWrapper.addEventListener('click', e => {
    if (e.target.id === wrapperId || e.target.id === closeId) { //Logical Operators
      popupWrapper.style.display = 'none';
    }
  });
}

setupPopup('pin1', 'popup-wrapper1', 'close');
setupPopup('pin2', 'popup-wrapper2', 'close');
setupPopup('pin3', 'popup-wrapper3', 'close');
  