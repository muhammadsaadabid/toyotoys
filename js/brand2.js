var data = [

    {

        "Image": "img/brandpagetwo1.png",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagetwo2.png",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagetwo3.png",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagetwo4.png",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagetwo5.png",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagetwo6.png",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagetwo7.png",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagetwo8.png",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },

    

    
];

for(var i=0; i < data.length; i++){

document.getElementById("brandjson2").innerHTML += `


<div class="cardbrandss">
<div class="imgbrand imgbrand">
    <img src="${data[i].Image}" alt=""  class="shadow-lg">
    <h2>${data[i].Heading}</h2>
  
</div>
<div class="content">
 
    <p>${data[i].Description}</p>
    <h5>${data[i].price}</h5>
   
</div>
</div>




`;

}


