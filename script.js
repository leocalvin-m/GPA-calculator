'use strict'

const tabContainer = document.querySelector(".operations-tab");
const tabStyle = document.querySelectorAll(".tab-style");
const content = document.querySelectorAll(".operations-content");
const addsub = document.querySelector(".btn-sub");
const input = document.querySelector(".inputs_container");
const credit = document.querySelector(".credit");
const final = document.querySelector(".final-result");
const grade = document.querySelector(".grade");
const cgpa = document.querySelectorAll(".cgpa");
console.log(cgpa);
// const sub = credit.closest(".sub-container").querySelector(".grade").value;

// console.log(sub);
class App {
    constructor() {
        tabContainer.addEventListener('click', this._tabSwitch);
        addsub.addEventListener('click', this._renderInputFields.bind(this));
        cgpa.forEach((ele) => ele.addEventListener("keyup", this._calcCgpa))
    }
    _tabSwitch(e) {
        e.preventDefault();
        tabStyle.forEach(function (ele) {
            ele.classList.remove("tab-active");
        })
        e.target.classList.add("tab-active");
        content.forEach(function (ele) {
            ele.classList.remove("content-active")
        });
        document.querySelector(`.tab-${e.target.dataset.tab}`).classList.add("content-active");



    }
    _renderInputFields(e) {
        // e.preventDefaults();
        e.preventDefault();
        navigator.vibrate(100);

        const html = `
                                <div class="sub-container">
                            <input placeholder="subject" type="text" class="sub inp">
                            <select name="grade" id="grade" class="grade">
                                <option value="">grade</option>
                                <option value="10">O</option>
                                <option value="9">S</option>
                                <option value="8">A</option>
                                <option value="7">B</option>
                                <option value="6">C</option>
                                <option value="5">D</option>
                            </select>
                            <input type="text" placeholder="credits" class="credit inp">
                        </div>
        `;
        input.insertAdjacentHTML('afterend', html);
        this._findTotal();



    }
    _findTotal() {
        const arr = document.querySelectorAll(".grade");
        const arr2 = document.querySelectorAll(".credit");
        arr.forEach(ele => ele.addEventListener('change', this._calcGPA.bind(this)));
        arr2.forEach(ele => ele.addEventListener('keyup', this._calcGPA.bind(this)));


    }

    _calcGPA() {
        const arr = document.querySelectorAll(".grade");
        console.log(arr);
        // if (arr)
        const arr1 = document.querySelectorAll(".credit");
        console.log(arr1);
        let tot = 0;
        let numerator = 0;


        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr1[i].value)) {
                tot += parseInt(arr1[i].value);
                numerator += (parseInt(arr[i].value) * parseInt(arr1[i].value));
            }
        }
        // console.log(tot, numerator);
        let k = (numerator / tot).toFixed(2);
        if (isNaN(k)) {
            const k = 0;
            document.querySelector('.final-result').textContent = 0;
            document.querySelector('.percent').textContent = `${0.00}%`;

        } else {

            document.querySelector('.final-result').textContent = k;
            document.querySelector('.percent').textContent = `${((k - 0.75) * 10).toFixed(2)}%`;
        }




    }
    _calcCgpa() {
        const arr3 = document.querySelectorAll(".cgpa");
        let tot = 0;
        let count = 0;


        for (let i = 0; i < arr3.length; i++) {
            if (parseFloat(arr3[i].value)) {
                count++;
                tot += parseFloat(arr3[i].value);

            }

        }
        let k = (tot / count).toFixed(2);
        document.querySelector('.cgpa-result').textContent = k;
        document.querySelector('.cgpa-percent').textContent = `${((k - 0.75) * 10).toFixed(2)}%`;
    }
}

const app = new App();