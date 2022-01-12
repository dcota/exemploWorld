
function verCidades(){
    fetch('http://localhost:3000/city')
    .then(res => res.json())
    .then(data => processData(data))
    .catch((err)=>{
        alert('Ocorreu um problema...')
    })
}

function processData(data){
    console.log(data)
    const cab = document.getElementById('cab')
    cab.innerHTML+=`
        <thead>
            <tr>
            <th scope="col">Cidade</th>
            <th scope="col">Distrito</th>
            <th scope="col">População</th>
            </tr>
        </thead>
    `
    const tabela = document.getElementById('tabela')
    tabela.innerHTML=''
    for(var i=0; i<10;i++){
        let city = data[i].Name
        let dis = data[i].District
        let pop = data[i].Population
        let row = `<tr>
                    <td >${city}</td>
                    <td>${dis}</td>
                    <td>${pop}</td>
                   </tr>`
        tabela.innerHTML += row
    }
}