'use strict'

const tabContainer = document.querySelector(".operations-tab");
const tabStyle = document.querySelectorAll(".tab-style");
const content = document.querySelectorAll(".operations-content");
const addsub = document.querySelector(".btn-sub");
const input = document.querySelector(".inputs_container");
console.log(input);
class App {
    constructor() {
        tabContainer.addEventListener('click', this._tabSwitch);
        addsub.addEventListener('click', this._renderInputFields);
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
    _renderInputFields() {
        const html = `
                                <div class="sub-container">
                            <input placeholder="subject" type="text" class="sub inp">
                            <select name="grade" id="grade" class="grade">
                                <option value="">grade</option>
                                <option>O</option>
                                <option>S</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                            </select>
                            <input type="text" placeholder="credits" class="grade inp">
                        </div>
        `;
        input.insertAdjacentHTML('afterend', html);

    }
}

const app = new App();