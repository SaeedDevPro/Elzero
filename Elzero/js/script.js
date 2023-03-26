// let sectionSkills = document.querySelector("#skills");
// let theProgressSkills = document.querySelectorAll(".the-progress span");

// window.onscroll = function () {
//     if (scrollY >= sectionSkills.offsetTop - 600) {
//         theProgressSkills.forEach(span => {
//             span.style.width = span.dataset.width
//         });
//     } else {
//         theProgressSkills.forEach(span => {
//             span.style.width = "0px"
//         });
//     }
// }



let sectionStats = document.querySelector("#stats");
let numberStats = document.querySelectorAll(".box span.number");
let start = false;



window.onscroll = function () {
    if (scrollY >= sectionStats.offsetTop) {
        if (!start) {
            numberStats.forEach(sp => {
                startCount(sp)
            });
        } else {
            start = true
        }
    }
}

function startCount(el) {
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent === el.dataset.goal) {
            clearInterval(count)
        }
    }, 100);
}
// startCount(numberStats[0])
// startCount(numberStats[1])
// startCount(numberStats[2])
// startCount(numberStats[3])

// console.log(numberStats)