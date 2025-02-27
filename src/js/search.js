async function search(){
    let resource = '../src/index.json'
    let title = document.getElementById('search').value;
    const rsc = await fetch(resource)
    if (!rsc.ok){
        let resource = 'src/index.json'
    }

    else{
        console.log(title)
        const json = await rsc.json();
        for (const [key,value] of Object.entries(json)){
            if (key.includes(title)){
                console.log(key)
            } 
        }
    }
}