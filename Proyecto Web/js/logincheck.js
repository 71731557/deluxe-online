const loggetOutLinks = document.querySelectorAll(".logged-out")
const loggetInLinks = document.querySelectorAll(".logged-in")

console.log(loggetOutLinks)
console.log(loggetInLinks)

export const loginCheck = user => {
    if (user) {
        loggetOutLinks.forEach(link => link.style.display = "none")
        loggetInLinks.forEach(link => link.style.display = "block")
    } else {
        loggetOutLinks.forEach(link => link.style.display = "block")
        loggetInLinks.forEach(link => link.style.display = "none")
    }
}