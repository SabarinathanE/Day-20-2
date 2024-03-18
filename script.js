// Use Fetch to get the Details in the Api link.

    let q = fetch("https://openlibrary.org/search/authors.json?q=twain")

// Use .then method to handle the promise
// And json() to convert to readable stream

q.then((response) => response.json()).then((results) => {
    
  let a =  results.docs;
  console.log(a)

  for(let i in a){
   console.log(a[i]);

// Create a element and add the data inside the Tag using innerhtml

let InnerData = document.createElement("div")
InnerData.innerHTML = `
<div class="col-4">
<div class="card" style="width: 20rem;">
  <div class="card-body">
    <h5 class="card-title"><b>KEY: ${a[i].key}</b></h5>
    <p class="card-text"><b>NAME: ${a[i].name}</b></p>
    <p class="card-text"><b>TOP-WORk: ${a[i].top_work}</b></p>
    <p class="card-text"><b>TYPE: ${a[i].type}</b></p>
    <p class="card-text"><b>WORK-COUNT: ${a[i].work_count}</b></p>
  </div>
</div>
</div>
`
let Data = document.getElementById("row");
Data.append(InnerData)
// Finally append the data inside the body

document.body.append(Data);

    }
}).catch((Error)=>{
    
    Alert("Error")

})


