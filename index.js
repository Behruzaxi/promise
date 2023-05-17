let a = document.querySelector("h4")

let b = fetch('https://jsonplaceholder.typicode.com/albums')
.then(res => res.json ())
.then(data => {
    data.forEach(e => {
        document.write(a.innerHTML = `
    <h4>${e.title}</h4>`)
    });
})