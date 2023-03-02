let loadData = () => {
  let url = "https://openapi.programming-hero.com/api/ai/tools";
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadData1(data.data.tools));
};
let loadData1 = (data) => {
if(data.length > 6){
    data = data.slice(0 , 6);
}

  for (let i of data) {
    // console.log(i);
    let mainCard = document.getElementById("mainCard");
    let newCard = document.createElement("div");
    newCard.classList.add("col");
    newCard.innerHTML = `
    <div class="col">
    <div class="card shadow rounded-5 bg-transparent">
      <img src="${i.image}" class=" p-3 rounded-5 card-img-top" alt="...">
      <div class="card-body ">
        <h5 class="card-title">Features</h5>
        <p class="card-text fw-semibold mt-4 text-secondary">1 . ${i.features[0]}</p>
        <p class="card-text fw-semibold text-secondary">2 . ${i.features[1]}</p>
        <p class="card-text fw-semibold text-secondary">3 . ${i.features[2]}</p>
      <hr>
    <div class ="d-flex justify-content-between align-items-center">
    <div><h3>${i.name}</h3>
    <h5 class="text-secondary">${i.published_in}</h5></div>
    
    <div><button onclick="popUp('${i.id}')" class ="rounded-5 p-2 border-light-subtle" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><img src="./media/arrow.png" class= "img-fluid" alt="arrow"></button>
    </div>
    </div>
    
        </div>
    </div>
  </div>

  <section id="modalSection" class="container">
        <!-- Modal -->
        <div class="modal fade "  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content p-5" >
    
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id= "modal-body">
         
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
 
</div>

      </section>
    `;
    mainCard.appendChild(newCard);
  }
};

// 

let popUp = (id) => {
//   console.log(published_in);
let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => popUpDetails(data.data));
};

let popUpDetails = (data) => {
  
    console.log(data.input_output_examples[0].input);
    let modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
    <div class ="d-flex flex-lg-row flex-column gap-4 container">
    <div class ="container">
    <div class="card p-lg-4 d-flex flex-lg-row flex-column container" >
  <div class="card-body container">
    <h5 class="card-title fw-bold">${data.description}</h5>
    

    <div class ="d-flex flex-lg-row flex-column gap-3 mt-4 container">
    <div class= "bg-warning px-lg-3 py-lg-2 rounded-4"><p class="fw-bold text-center container">${data.pricing[0].price}</p>
         <p class="fw-bold text-center">${data.pricing[0].plan}</p>
    </div>
    <div class= "bg-info px-lg-3 py-lg-2 rounded-4"><p class="fw-bold text-center">${data.pricing[1].price}</p>
         <p class="fw-bold text-center">${data.pricing[1].plan}</p>
    </div>
    <div class= "bg-success px-lg-3 py-lg-2 rounded-4"><p class="fw-bold text-center">${data.pricing[2].price}</p>
         <p class="fw-bold text-center">${data.pricing[2].plan}</p>
    </div>
    </div>


  <div class = "container"> 
<div class="d-flex flex-lg-row flex-column justify-content-between mt-4 container">

<div class ="container"><h3 class="mt-4">Features</h3>
   <p class="card-text fw-semibold mt-4 text-secondary"> . ${data.features[1].feature_name}</p>
        <p class="card-text fw-semibold text-secondary"> . ${data.features[2].feature_name}</p>
        <p class="card-text fw-semibold text-secondary"> . ${data.features[3].feature_name}</p></div>
        <div>
        <div><h3 class="mt-4">Integrations</h3>
<p class="card-text fw-semibold mt-4 text-secondary"> . ${data.integrations[0]}</p>
        <p class="card-text fw-semibold text-secondary"> . ${data.integrations[1]}</p>
        <p class="card-text fw-semibold text-secondary"> . ${data.integrations[2]}</p>

        </div>
        </div>
    </div> 

    
  </div>
  
</div>
    </div>
    
    
    
    
    
    </div>
<div class ="card container">
   <div><img src ="${data.image_link[0]}" class ="img-fluid p-4"></div>
   <h3 class = "text-center">${data.input_output_examples[0].input}</h3>
   <h5 class = "text-center mt-4 p-4 text-secondary">${data.input_output_examples[0].output}</h5>
    </div>
</div>







    `;
  
};


loadData();
