let img_choice = document.querySelector("#choice_img");

let block_park =document.querySelector("#block_park");
let block_weather =document.querySelector("#block_weather");

let projects = document.querySelector("#projects");

let projects_nav = document.querySelector("#projects_nav");
let about_nav = document.querySelector("#about_nav");
let contact_nav = document.querySelector("#contact_nav");


block_weather.addEventListener("click", function(event){
			img_choice.innerHTML = `
			<div class="container", style="margin-top:60px;margin-bottom:60px;">
				<div class="row">
					<div class="col-sm-7">
						<img src="styles/weather.png" class="img-fluid p-2 shadow rounded d-none d-sm-block"/>
					</div>
					<div class="col-sm-5 d-none d-sm-block">
						<h2>Weather API</h2></br>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
						sit voluptatem accusantium doloremque laudantium, sit voluptatem accusantium doloremque laudantium,
						</br></br></br><a href="https://unique-hamster-ccb302.netlify.app/" class="primary-link project-link">Launch project</a>
						</p>
					</div>
				</div>
				<div class="container d-md-none" style="text-align:center;">
						<h2>Weather API</h2></br>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
						sit voluptatem accusantium doloremque laudantium, sit voluptatem accusantium doloremque laudantium,
						</br></br></br><a href="https://www.shecodes.io/workshops/shecodes-basics-f10c7b15-d969-4093-a572-a3ca8abd5cac/projects/807103" class="primary-link project-link">Launch project</a>
						</p>
				</div>
			</div>`;
		});
		
		
block_park.addEventListener("click", function(event){
			img_choice.innerHTML = `
			<div class="container", style="margin-top:60px;margin-bottom:60px;">
				<div class="row">
					<div class="col-sm-7">
						<div class="border p-3 d-none d-sm-block">
						<!-- Copy this code to have a working example -->
						<div class="ecommerce-gallery" data-mdb-activation="mouseenter">
						  <div class="row">
							<div class="col-12 mb-1">
							  <div class="img-fluid p-2 shadow rounded d-none d-sm-block">
								<img
									 src="styles/park.png"
									 id="main_img"
									 alt="Gallery image 1"
									 class="ecommerce-gallery-main-img active w-100"
									 />
							  </div>
							</div>
							<div class="col-4 my-3">
							  <img
								   src="styles/park2.png"
								   id="park2"
								   alt="Gallery image 1"
								   class="active w-100 miniimg_org img-fluid p-2 shadow rounded d-none d-sm-block"
								   />
							</div>
							<div class="col-4 my-3">
							  <img
								   src="styles/park.png"
								   id="park"
								   alt="Gallery image 2"
								   class="w-100 miniimg_org img-fluid p-2 shadow rounded d-none d-sm-block"
								   />
							</div>
							<div class="col-4 my-3">
							  <img
								   src="styles/park3.png"
								   id="park3"
								   alt="Gallery image 3"
								   class="w-100 miniimg_org img-fluid p-2 shadow rounded d-none d-sm-block"
								   />
							</div>
						  </div>
						</div>
						<!--/ Copy this code to have a working example -->
					  </div>
					</div>
					<div class="col-sm-5 d-none d-sm-block">
						<h2>Amusement park</h2></br>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
						sit voluptatem accusantium doloremque laudantium, sit voluptatem accusantium doloremque laudantium,
						</br></br></br><a href="https://www.shecodes.io/workshops/shecodes-basics-f10c7b15-d969-4093-a572-a3ca8abd5cac/projects/807103" class="primary-link project-link">Launch project</a>
						</p>
					</div>
				</div>
				<div class="container d-md-none" style="text-align:center;">
						<h2>Amusement park</h2></br>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
						sit voluptatem accusantium doloremque laudantium, sit voluptatem accusantium doloremque laudantium,
						</br></br></br><a href="https://www.shecodes.io/workshops/shecodes-basics-f10c7b15-d969-4093-a572-a3ca8abd5cac/projects/807103" class="primary-link project-link">Launch project</a>
						</p>
				</div>
			</div>;`
			
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
		
	
