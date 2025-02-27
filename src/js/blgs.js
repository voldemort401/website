const element = document.getElementById('header')
async function read(element){
    let resource = '../src/index.json'
    const rsc = await fetch(resource)
    if (!rsc.ok){
        console.log('error')
    }

    else{
        const json = await rsc.json();
        for (const [key,value] of Object.entries(json)){
            let html = `<a style="padding-left:4vh;color:white; "  href="../${value}">${key}</a> <br>`
            element.insertAdjacentHTML("afterend", html); 
        }
    }
}

read(element)