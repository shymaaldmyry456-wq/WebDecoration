function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const header = document.getElementById("header");
    navLinks.classList.toggle("show"); 
    header.classList.toggle("show"); 
}
const form = document.querySelector("form");
      form.addEventListener("submit", function(e) {
        e.preventDefault(); 
        const button = form.querySelector("button");
        button.innerText = "Sending...";
        button.disabled = true; 
        setTimeout(() => {
          alert("✅ Message Sent Successfully!");
          button.innerText = "Send Message";
          button.disabled = false;
          form.reset();
        }, 2000); 
      });

    var map = L.map('map').setView([38.1902, -95.7122], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
const projectsdata =[
  {
  Name: "Living Room",
  Description: "Create a warm and inviting living room with neutral tones, plush seating, and a woven coffee table, enhanced by soft natural lighting",
  thumbnail:"../images/lliving.jpg",
  cootdinates: [34.0522	,-118.2437]
},
{Name: "Cafe",
Description: "A vibrant, cozy dining space with rich orange tufted seating, elegant pendant lights, and lush greenery. Eclectic wall art and herringbone wood flooring blend modern sophistication with warm, inviting tones for intimate gatherings.",
 thumbnail: "../images/out1.jpg",
 cootdinates: [40.757046 , -73.986732]
},
{
 Name: "Bedroom",
 Description:"Transform your bedroom into a tranquil oasis with natural light, lush indoor plants, and a cozy quilted bedspread.Perfect harmony of nature and comfor",
  thumbnail:"../images/bed.jpg",
 cootdinates: [37.7749, -122.4194]
},
{
Name:"Elegant Kitchen",
Description:"A classic kitchen with green cabinets, a large sink, floral wall tiles, pendant lighting, and a big window overlooking a natural view",
thumbnail:"../images/77.jpg",
cootdinates:[42.3496,-71.0799]
},
{
Name:"Office",
Description:"Design a productive yet peaceful workspace with a minimalist desk,ergonomic chair, and botanical accents for inspiration and focus.",
thumbnail:"../images/office.jpg",
cootdinates:[41.8781,-87.6298]
},
{
  Name:" Cozy Dining Room",
  Description:"A dining room with a round wooden table, comfy chairs, a woven pendant light,and elegant decor with plants and wall art.",
  thumbnail:"../images/88.jpg",
  cootdinates: [29.9577,-90.0628]
},
{
  Name:"Kitchen",
  Description:"A kitchen with wooden cabinets, marble backsplash with soft lighting.Dried plants add a natural touch for a functional and elegant cooking space.",
   thumbnail:"../images/kitch.jpg",
   cootdinates:[32.7973,-96.7997]
},
{
  Name:"Bathroom",
  Description:"Transform your bathroom into a tranquil oasis with natural light, lush indoor plants,and a cozy quilted bedspread.Perfect harmony of nature and comfort.",
  thumbnail:"../images/bath2.jpg",
  cootdinates:[44.8546,-93.2422]
},
{
Name:"Modern Entryway Nook",
Description:"A simple entryway with a cozy bench and cushions, a large wooden-framed mirror,plant decor, and soft lighting",
thumbnail:"../images/99.jpg",
cootdinates:[35.5401,-82.5534]
}
//new project
]
projectsdata.forEach(project =>{
  const popupContent= `
  <div class= "project-popup">
    <b>${project.Name}</b><br> <br>
    <b>${project.Description}</b><br> <br>
  <img src="${project.thumbnail} " alt="${project.Name}" width="200" height="150"  > </img>
  </div> 
 ` ;
L.marker(project.cootdinates).addTo(map).bindPopup(popupContent);
})
// L.marker([51.5, -0.09]).addTo(map)
    // .bindPopup(popupContent)
    // .openPopup();