// オリジナル

// let pin = document.getElementById("pin");
// const pin2 = document.getElementById("pin2");
// const pin3 = document.getElementById("pin3");
// const pin4 = document.getElementById("pin4");

// const targetEl = document.getElementById("target");
// const targetEl2 = document.getElementById("target2");
// const targetEl3 = document.getElementById("target3");
// const targetEl4 = document.getElementById("target4");


// function showTooltip(element) {
//     element.style.display = "block";
// }

// function hideTooltip(element) {
//     element.style.display = "none";
// }


// function handleMouseOver(event) {
//     showTooltip(targetEl);
// }

// function handleMouseOut(event) {
//     hideTooltip(targetEl);
// }


// // pin.addEventListener("mouseover", handleMouseOver);
// // pin.addEventListener("mouseout", handleMouseOut);

// // pin2.addEventListener("mouseover", (event) => {
// //     showTooltip(targetEl2);
// // });
// // pin2.addEventListener("mouseout", (event) => {
// //     hideTooltip(targetEl2);
// // });
// pin2.addEventListener("touchstart", (event) => {
//     showTooltip(targetEl2);
// });
// pin2.addEventListener("touchend", (event) => {
//     hideTooltip(targetEl2);
// });

// // pin3.addEventListener("mouseover", (event) => {
// //     showTooltip(targetEl3);
// // });
// // pin3.addEventListener("mouseout", (event) => {
// //     hideTooltip(targetEl3);
// // });

// pin3.addEventListener("touchstart", (event) => {
//     showTooltip(targetEl3);
// });
// pin3.addEventListener("touchend", (event) => {
//     hideTooltip(targetEl3);
// });

// // pin4.addEventListener("mouseover", (event) => {
// //     showTooltip(targetEl4);
// // });
// pin4.addEventListener("mouseout", (event) => {
//     hideTooltip(targetEl4);
// });

// 長時間クリック
const clickBtn = document.getElementById('click-btn');
const popupWrapper = document.getElementById('popup-wrapper');
// const close = document.getElementById('close');

// ボタンをクリックしたときにポップアップを表示させる
clickBtn.addEventListener('click', () => {
  popupWrapper.style.display = "block";
});

// ポップアップの外側又は「x」のマークをクリックしたときポップアップを閉じる
popupWrapper.addEventListener('click', e => {
  if (e.target.id === popupWrapper.id || e.target.id === close) {
    popupWrapper.style.display = 'none';
  }
});