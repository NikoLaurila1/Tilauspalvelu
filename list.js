//funktio 1

$(document).ready(function(){
  
        $.ajax({url: "ruoka.json",
                
            success: function(result) {
                console.log(result);
                list(result);
            },
            error: function(xhr) {
                alert("Virhe");
            }   
    });
 
});

//funktio 1 osa 2
function list(result){
   var ruoka = "<table id='taulukko' border='1' class='w3-table-all w3-card-4'>"
    
    for(let i  =0;i < result.length;i++){
        ruoka += "<tr><td><button id='"+ result[i].nimi + " " + result[i].hinta + "' class='w3-button w3-circle w3-black ord'>+</button>" + result[i].nimi + "</td><td>" + result[i].ainekset + "</td><td>" + result[i].hinta + "</td><td>" + result[i].ruokalaji + "</td><td>" + result[i].ruokavalio + "</td></tr>";
        
                }
    ruoka += "</table>" 
    $("#lista").html(ruoka);
    
            }

//funktio 2


$(document).ready(function(){
  $("#liha").click(function(){
        $.ajax({url: "ruoka.json",
                
            success: function(result) {
                console.log(result);
                liha(result);
            },
            error: function(xhr) {
                alert("Virhe");
            }   
    });
 });
});

//funktio 2 osa 2
function liha(result){
   var ruoka = "<table id='taulukko' border='1' class='w3-table-all w3-card-4'>"
    
    for(let i  =0;i < result.length;i++){
        if (result[i].ruokalaji == 'liharuoka'){
            
        
        ruoka += "<tr><td><button id='"+ result[i].nimi + " " + result[i].hinta + "' class='w3-button w3-circle w3-black ord'>+</button>" + result[i].nimi  + "</td><td>" + result[i].ainekset + "</td><td>" + result[i].hinta + "</td><td>" + result[i].ruokalaji + "</td><td>" + result[i].ruokavalio + "</td></tr>";
    
        
                }}
    ruoka += "</table>" 
    $("#lista").html(ruoka);
    
    
            }

/////////////////////////

//funktio 3 
$(document).ready(function(){
  $("#kasvis").click(function(){
        $.ajax({url: "ruoka.json",
                
            success: function(result) {
                console.log(result);
                kasvis(result);
            },
            error: function(xhr) {
                alert("Virhe");
            }   
    });
 });
});

//funktio 3 osa 2
function kasvis(result){
   var ruoka = "<table id='taulukko' border='1' class='w3-table-all w3-card-4'>"
    
    for(let i  =0;i < result.length;i++){
        if (result[i].ruokalaji == 'kasvisruoka'){
            
        
        ruoka += "<tr><td><button id='"+ result[i].nimi + " " + result[i].hinta + "' class='w3-button w3-circle w3-black ord'>+</button>" + result[i].nimi + "</td><td>" + result[i].ainekset + "</td><td>" + result[i].hinta + "</td><td>" + result[i].ruokalaji + "</td><td>" + result[i].ruokavalio + "</td></tr>";
    
        
                }}
    ruoka += "</table>" 
    $("#lista").html(ruoka);
    
    
            }

///////////////////////


//funktio 4 
$(document).ready(function(){
  $("#kala").click(function(){
        $.ajax({url: "ruoka.json",
                
            success: function(result) {
                console.log(result);
                kala(result);
            },
            error: function(xhr) {
                alert("Virhe");
            }   
    });
 });
});

//funktio 4 osa 2
function kala(result){
   var ruoka = "<table id='taulukko' border='1' class='w3-table-all w3-card-4'>"
    
    for(let i  =0;i < result.length;i++){
        if (result[i].ruokalaji == 'kalaruoka'){
            
        
        ruoka += "<tr><td><button id='"+ result[i].nimi + " " + result[i].hinta + "' class='w3-button w3-circle w3-black ord'>+</button>" + result[i].nimi + "</td><td>" + result[i].ainekset + "</td><td>" + result[i].hinta + "</td><td>" + result[i].ruokalaji + "</td><td>" + result[i].ruokavalio + "</td></tr>";
    
        
                }}
    ruoka += "</table>" 
    $("#lista").html(ruoka);
    
    
            }

///////////

//funktio 5 
$(document).ready(function(){
  $("#kana").click(function(){
        $.ajax({url: "ruoka.json",
                
            success: function(result) {
                console.log(result);
                kana(result);
            },
            error: function(xhr) {
                alert("Virhe");
            }   
    });
 });
});

//funktio 5 osa 2
function kana(result){
   var ruoka = "<table id='taulukko' border='1' class='w3-table-all w3-card-4'>"
    
    for(let i  =0;i < result.length;i++){
        if (result[i].ruokalaji == 'kanaruoka'){
            
        
        ruoka += "<tr><td><button id='"+ result[i].nimi + " " + result[i].hinta + "' class='w3-button w3-circle w3-black ord'>+</button>" + result[i].nimi + "</td><td>" + result[i].ainekset + "</td><td>" + result[i].hinta + "</td><td>" + result[i].ruokalaji + "</td><td>" + result[i].ruokavalio + "</td></tr>";
    
        
                }}
    ruoka += "</table>" 
    $("#lista").html(ruoka);
    
    
            }

///////////////////


//funktio 6 
$(document).ready(function(){
  $("#kasvis").click(function(){
        $.ajax({url: "ruoka.json",
                
            success: function(result) {
                console.log(result);
                kasvis(result);
            },
            error: function(xhr) {
                alert("Virhe");
            }   
    });
 });
});

//funktio 6 osa 2
function kasvis(result){
   var ruoka = "<table id='taulukko' border='1' class='w3-table-all w3-card-4'>"
    
    for(let i  =0;i < result.length;i++){
        if (result[i].ruokalaji == 'kasvisruoka'){
            
        
        ruoka += "<tr><td><button id='"+ result[i].nimi + " " + result[i].hinta + "' class='w3-button w3-circle w3-black ord'>+</button>" + result[i].nimi + "</td><td>" + result[i].ainekset + "</td><td>" + result[i].hinta + "</td><td>" + result[i].ruokalaji + "</td><td>" + result[i].ruokavalio + "</td></tr>";
    
        
                }}
    ruoka += "</table>" 
    $("#lista").html(ruoka);
    
    
            }

////////////////////


//funktio 7 
$(document).ready(function(){
  $("#lakglut").click(function(){
        $.ajax({url: "ruoka.json",
                
            success: function(result) {
                console.log(result);
                lakglut(result);
            },
            error: function(xhr) {
                alert("Virhe");
            }   
    });
 });
});

//funktio 7 osa 2
function lakglut(result){
   var ruoka = "<table id='taulukko' border='1' class='w3-table-all w3-card-4'>"
    
    for(let i  =0;i < result.length;i++){
        if (result[i].ruokavalio == 'Laktoositon'|| result[i].ruokavalio == 'Gluteeniton' || result[i].ruokavalio == 'Laktoositon, Gluteeniton' || result[i].ruokavalio == 'Vähälaktoosinen, Gluteeniton'){
            
        
        ruoka += "<tr><td><button id='"+ result[i].nimi + " " + result[i].hinta + "' class='w3-button w3-circle w3-black ord'>+</button>" + result[i].nimi + "</td><td>" + result[i].ainekset + "</td><td>" + result[i].hinta + "</td><td>" + result[i].ruokalaji + "</td><td>" + result[i].ruokavalio + "</td></tr>";
    
        
                }}
    ruoka += "</table>" 
    $("#lista").html(ruoka);
    
    
            }


let ostosKori = []
$("#lista").on("click",".ord",function(e){
				e.preventDefault();
				alert( "Koriin lisätty:" + $(this).attr("id"));
				let id = $(this).attr("id");
				ostosKori.push(id);
localStorage.setItem("ruoka", JSON.stringify(ostosKori));
    console.log(ostosKori);
   
	});


function xd() {
  
  ostosKori.toString();
  document.getElementById("kori2").innerHTML = ostosKori.join("<br>");
 
}


function tiedot() {
    var name = document.getElementById("nimi").value;
    var snimi = document.getElementById("snimi").value;
    var osoite = document.getElementById("osoite").value;
    var postnro = document.getElementById("postinro").value;
  
    
    console.log("etunimi:" + name);
    console.log("Sukunimi:" + snimi);
    console.log("Osoite:" + osoite);
    console.log("Postinumero:" + postnro);
    
    
    alert("Kiitos tilauksesta! Voit nyt sulkea ikkunan!")
   
 
}


function tilaukset() {
var haettudata = localStorage.getItem("ruoka");
    
    console.log(haettudata);
    }




           
        
    
    
    

