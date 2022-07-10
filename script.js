const tabContainer = document.querySelector(".operations-tab");
const tabStyle = document.querySelectorAll(".tab-style");
const content = document.querySelectorAll(".operations-content");
console.log(tabContainer);
console.log(content);

tabContainer.addEventListener('click', function (e) {

    // // add
    // console.log(

    //     e.target.classList.remove("tab-active")
    // );

    tabStyle.forEach(function (ele) {
        ele.classList.remove("tab-active");
    })
    e.target.classList.add("tab-active");
    content.forEach(function (ele) {
        ele.classList.remove("content-active")

    });
    console.log(

        document.querySelector(`.tab-${e.target.dataset.tab}`).classList.add("content-active")
    );

})
