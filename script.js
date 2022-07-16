'use strict'

const tabContainer = document.querySelector(".operations-tab");
const tabStyle = document.querySelectorAll(".tab-style");
const content = document.querySelectorAll(".operations-content");
const addsub = document.querySelector(".btn-sub");
console.log(addsub);
class App {
    constructor() {
        tabContainer.addEventListener('click', this._tabSwitch.bind(this));
    }
    _tabSwitch(e) {
        tabStyle.forEach(function (ele) {
            ele.classList.remove("tab-active");
        })
        e.target.classList.add("tab-active");
        content.forEach(function (ele) {
            ele.classList.remove("content-active")
        });
        document.querySelector(`.tab-${e.target.dataset.tab}`).classList.add("content-active");



    }
}

const app = new App();