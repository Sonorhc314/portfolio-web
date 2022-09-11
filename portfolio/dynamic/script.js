let img_choice = document.querySelector("#choice_img");

let block_park =document.querySelector("#block_park");
let block_weather =document.querySelector("#block_weather");

let projects = document.querySelector("#projects");

let projects_nav = document.querySelector("#projects_nav");
let about_nav = document.querySelector("#about_nav");
let contact_nav = document.querySelector("#contact_nav");


block_weather.addEventListener("click", function(event){
			img_choice.innerHTML = `
			<div class="container", style="margin-top:60px;">
				<div class="row">
					<div class="col-sm-7">
						<img src="styles/weather.png" class="img-fluid p-2 shadow rounded d-none d-sm-block"/>
					</div>
					<div class="col-sm-5">
						<h2>Weather API</h2></br>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
						sit voluptatem accusantium doloremque laudantium, sit voluptatem accusantium doloremque laudantium,
						</br></br></br><a href="https://unique-hamster-ccb302.netlify.app/" class="primary-link project-link">Launch project</a>
						</p>
					</div>
				</div>
			</div>`;
		});
		
		
block_park.addEventListener("click", function(event){
			img_choice.innerHTML = `
			<div class="container", style="margin-top:60px;">
				<div class="row">
					<div class="col-sm-5">
						<img src="styles/park.png" class="img-fluid mx-auto d-none d-sm-block shadow rounded" style="height:60%;" id="main_img"/>
					</div>
					<div class="col-sm-2">
						<img src="styles/park2.png" id="park2" class="miniimg_org img-fluid d-none d-sm-block shadow rounded"/>
						<img src="styles/park3.png" id="park3" class="miniimg_org img-fluid mt-2 d-none d-sm-block shadow rounded"/>
						<img src="styles/park.png" id="park" class="miniimg_org img-fluid mt-2 d-none d-sm-block shadow rounded"/>
					</div>
					<div class="col-sm-5">
						<h2>Amusement park</h2></br>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
						sit voluptatem accusantium doloremque laudantium, sit voluptatem accusantium doloremque laudantium,
						</br></br></br><a href="https://www.shecodes.io/workshops/shecodes-basics-f10c7b15-d969-4093-a572-a3ca8abd5cac/projects/807103" class="primary-link project-link">Launch project</a>
						</p>
					</div>
				</div>
			</div>`;
			
		  let park2 = document.querySelector("#park2");
		  let park3 = document.querySelector("#park3");
		  let park = document.querySelector("#park");
		  let main_img = document.querySelector("#main_img");
		  
		  
		  park2.onclick = function() {
			  main_img.src = "styles/park2.png";
		  }		  
		  park3.onclick = function() {
			  main_img.src = "styles/park3.png";
		  }
		  park.onclick = function() {
			  main_img.src = "styles/park.png";
		  }
		});
		
	
projects.addEventListener("click", function(event)
{
	
});
