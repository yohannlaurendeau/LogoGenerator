
const getBaseURL = () => {
	return new URL('.', import.meta.url);
};

class MyLogo extends HTMLElement {
  
    style = `
    @import url('https://fonts.googleapis.com/css2?family=Grey+Qo&display=swap');

   

    
    
    

    @font-face {
      font-family: "Lobster";
      src: url("/fonts/Lobster.ttf") format("ttf"),
             
     }

    #logo {
        font-family: 'Grey Qo', cursive;
        color:red;
        font-size: 40px;
        border:5px solid green;
    }
    #feelingoptangry{
      display:none;
    }
    #feelingoptcalm{
      display:none;
    }
    #feelingoptsleepy{
      display:none;
    }
    #feelingoptexcited{
      display:none;
    }
    .focus-in-expand {
        -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .focus-in-expand-fwd {
        -webkit-animation: focus-in-expand-fwd 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: focus-in-expand-fwd 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .tracking-in-expand {
        -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
                animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
    .scale-up-center {
      animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    .flip-horizontal-bottom {
      -webkit-animation: flip-horizontal-bottom 1s cubic-bezier(0.455, 0.030, 0.515, 0.955)  both;
              animation: flip-horizontal-bottom 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    }
    

    /* ----------------------------------------------
 * Generated by Animista on 2021-9-26 22:40:57
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation flip-horizontal-bottom
 * ----------------------------------------
 */
@-webkit-keyframes flip-horizontal-bottom {
  0% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(-180deg);
            transform: rotateX(-180deg);
  }
}
@keyframes flip-horizontal-bottom {
  0% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(-180deg);
            transform: rotateX(-180deg);
  }
}
    /* ----------------------------------------------
 * Generated by Animista on 2021-9-13 11:7:37
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation focus-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
    

    /* ----------------------------------------------
 * Generated by Animista on 2021-9-20 9:19:32
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation focus-in-expand-fwd
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
/* ----------------------------------------------
 * Generated by Animista on 2021-9-23 9:46:53
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation scale-up-center
 * ----------------------------------------
 */
@keyframes scale-up-center {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-9-20 9:22:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

    `;
    html = `
    <div class="content">
    <h1>G??n??rateur de Logo</h1>
    <br>
    <h2> Projet r??alis?? par Yohann Laurendeau</h2>
    </div>
    <div id="logo" >mon logo 2
    
    </div>

 
        <br>
        Couleur : <input type="color" id="selecteurCouleur" val="blue">
        <br>
        Taille : 5 <input type="range" val=75 min=5 max=100 
                          id="selecteurTaille"> 100
        <br>
        Texte du Logo: <input type="text" id="selecteurTexte">
        <br>
        <div> Couleur du background : <input type="color" id="selecteurBackCouleur"></div>

        <label for="select">Choisissez une image de background:</label>

        <select id="select">
          <option value="default">Default</option>
          <option value="angry">Enerv??</option>
          <option value="calm">Calme</option>

   
</select>
<br>
<label for="selecteffect">Choisissez un effet:</label>

<select id="selecteffect">
<option value="">Default</option>
<option value="scale-up-center">Scale-up-center</option>
<option value="flip-horizontal-bottom">Flip-horizontal-bottom</option>
<option value="animation focus-in-expand">Animation focus-in-expand</option>


</select>
<br>
<br>
<input type="button" id="infinite" value="Activer effet infini">
<input type="button" id="noinfinite" value="Desactiver effet infini">

<div>

Couleur du bord : <input type="color" id="bordCouleur">
<br>
Border Radius : 
Border top left : 5 <input type="range" val=0 min=0 max=100 
id="borderTopLeft"> 100
Border top right : 5 <input type="range" val=0 min=0 max=100 
id="borderTopRight"> 100
Border bottom left : 5 <input type="range" val=0 min=0 max=100
id="borderBottomLeft"> 100
Border bottom right : 5 <input type="range" val=0 min=0 max=100 
id="borderBottomRight"> 100
</div>
Border Size : 5 <input type="range" val=0 min=0 max=100 
id="borderSize"> 100
<div>

G??n??rer nom al??atoire
<input type="button" id="randomName" value="nom al??atoire">
</div>


<div>

G??n??rer logo al??atoire
<input type="button" id="randomLogo" value="logo al??atoire">
</div>




Changer la police


<select id="changeFamily">
<option value="Default">Default</option>
<option value="Verdana">Verdana</option>
<option value="Roboto">Roboto</option>

</div>
       

    `;
    
    constructor() {
        super();
        // On cr??e le "shadow DOM"
        this.attachShadow({ mode: "open" });
        
        // r??cup??rer les propri??t??s/attributs HTML
        this.couleur = this.getAttribute("couleur");
        if(!this.couleur) this.couleur = "black";

        console.log("couleur r??cup??r??e = " + this.couleur);
        
        this.text = this.getAttribute("text");
        
        this.animationClass = this.getAttribute("animation");
        this.controls = this.getAttribute("controls");
        this.size = this.getAttribute("size");
        this.borderColor = this.getAttribute("borderColor");
        console.log(this.size);
        this.mydata = [
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/abarth1.png",
            "name": "Abarth"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ac-cars.png",
            "name": "AC"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/acura.png",
            "name": "Acura"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/aixam.png",
            "name": "Aixam"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/alfa_romeo.png",
            "name": "Alfa Romeo"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ariel.png",
            "name": "Ariel"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/arrinera-logo.png",
            "name": "Arrinera"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/aston_martin.png",
            "name": "Aston Martin"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/audi.png",
            "name": "Audi"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/bentley.png",
            "name": "Bentley"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png",
            "name": "BMW"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/bugatti.png",
            "name": "Bugatti"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/buick.png",
            "name": "Buick"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/cadillac.png",
            "name": "Cadillac"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/caterham.png",
            "name": "Caterham"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/chevrolet.png",
            "name": "Chevrolet"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/chrysler.png",
            "name": "Chrysler"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/citroen.png",
            "name": "Citro??n"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/corvette.png",
            "name": "Corvette"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/dacia.png",
            "name": "Dacia"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/daf.png",
            "name": "Daf"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/daihat.png",
            "name": "Daihatsu"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/dodge.png",
            "name": "Dodge"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/drmotor.png",
            "name": "DR Motor"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/elfin.png",
            "name": "Elfin"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ferrari.png",
            "name": "Ferrari"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/fiat.png",
            "name": "Fiat"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ford.png",
            "name": "Ford"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gaz.png",
            "name": "Gaz"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/geely.png",
            "name": "Geely"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gillet.png",
            "name": "Gillet"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ginetta.png",
            "name": "Ginetta"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gm.png",
            "name": "General Motors"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gmc.png",
            "name": "GMC"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2013/10/Great-Wall.png",
            "name": "Great Wall"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/gumpert.png",
            "name": "Gumpert"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/hennessey.png",
            "name": "Hennessey logo"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/holden.png",
            "name": "Holden"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/honda.png",
            "name": "Honda"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/hummer.png",
            "name": "Hummer"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/hyundai.png",
            "name": "Hyundai"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/inf.png",
            "name": "Infiniti"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/isuzu.png",
            "name": "Isuzu"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/jagu.png",
            "name": "Jaguar"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/jeep.png",
            "name": "Jeep"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/joss.png",
            "name": "Joss"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/kia.png",
            "name": "Kia"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/koenigsegg.png",
            "name": "Koenigsegg"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lada.png",
            "name": "Lada"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lamb.png",
            "name": "Lamborghini"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lancia.png",
            "name": "Lancia"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/land-rover.png",
            "name": "Land Rover"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lexus.png",
            "name": "Lexus"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/linc.png",
            "name": "Lincoln"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/lotus.png",
            "name": "Lotus"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/11/luxgen-logo.png",
            "name": "Luxgen"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/11/mahindra.png",
            "name": "Mahindra"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/12/Maruti_Suzuki.png",
            "name": "Maruti Suzuki"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mase.png",
            "name": "Maserati"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/maybach.png",
            "name": "Maybach"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mazda.png",
            "name": "Mazda"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mclaren.png",
            "name": "Mclaren"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png",
            "name": "Mercedes"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mg.png",
            "name": "MG"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mini.png",
            "name": "Mini"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mitub.png",
            "name": "Mitsubishi"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/morgan.png",
            "name": "Morgan Motor"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/mustang.png",
            "name": "Mustang logo"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/nissan.png",
            "name": "Nissan"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/noble.png",
            "name": "Noble"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/opel.png",
            "name": "Opel"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/pagani.png",
            "name": "Pagani"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/panoz.png",
            "name": "Panoz"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/perodua.png",
            "name": "Perodua"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/peug.png",
            "name": "Peugeot"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/piaggio.png",
            "name": "Piaggio"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/pininfarina.png",
            "name": "Pininfarina"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/porsche.png",
            "name": "Porsche"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/proton.png",
            "name": "Proton"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/renault.png",
            "name": "Renault"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/reva.png",
            "name": "Reva"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2012/01/rimac-150x150.png",
            "name": "Rimac"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/rolls-royce.png",
            "name": "Rolls Royce"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ruf.png",
            "name": "Ruf logo"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/saab.png",
            "name": "Saab"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/scania.png",
            "name": "Scania"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/scion.png",
            "name": "Scion"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/seat.png",
            "name": "Seat"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/shelby.png",
            "name": "Shelby"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/skoda.png",
            "name": "Skoda"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/smart.png",
            "name": "Smart"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/spyker.png",
            "name": "Spyker"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/ssangyong.png",
            "name": "Ssangyong"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/10/ssc.png",
            "name": "SSC"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/subaru.png",
            "name": "Subaru"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/suzuki.png",
            "name": "Suzuki"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/tata.png",
            "name": "Tata"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/tatra.png",
            "name": "Tatra"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/tesla.png",
            "name": "Tesla"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/toyota.png",
            "name": "Toyota"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/1176359_187686584745478_1792749640_n.jpg",
            "name": "Tramontana"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/troller.png",
            "name": "Troller"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/tvr.png",
            "name": "TVR"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/uaz.png",
            "name": "UAZ"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/vandenbrink_design.png",
            "name": "Vandenbrink"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/vauxhall.png",
            "name": "Vauxhall"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/vector_motors.png",
            "name": "Vector Motors"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/venturi.png",
            "name": "Venturi"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/volkswagen.png",
            "name": "Volkswagen"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/volvo.png",
            "name": "Volvo"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/wiesmann.png",
            "name": "Wiesmann"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/zagato.png",
            "name": "Zagato"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/zaz.png",
            "name": "Zaz"
          },
          {
            "logo": "https://www.car-logos.org/wp-content/uploads/2011/09/zil.png",
            "name": "Zil"
          }
        ];
       
        
    }

    connectedCallback() {
        // ici on instancie l'interface graphique etc.
        this.shadowRoot.innerHTML = `<style>${this.style}</style>`
            + this.html;
           
        this.logo = this.shadowRoot.querySelector("#logo");
        this.logo.innerHTML = this.text;
        // affecter les valeurs des attributs ?? la cr??ation
        this.logo.style.textAlign = "center";
        this.logo.style.color = this.couleur;
        
        this.logo.classList.add(this.animationClass);
        this.logo.style.fontSize = this.size;
        this.logo.style.borderColor = this.borderColor;
        
        this.declareEcouteurs();

        // On modifie les URLs relatifs
        this.fixRelativeURLs();
        
      
    }

    fixRelativeURLs() {
        let images = this.shadowRoot.querySelectorAll('img');
        images.forEach((e) => {
          console.log("dans le foreach")
          let imagePath = e.getAttribute('src');
            e.src = getBaseURL() + '/' + imagePath;
        });
    
        //console.log(getBaseURL() +  "images/flammes.jpg")
        //this.logo.style.background = "url(" + getBaseURL() + "images/flammes2.jpg)";
      }

    declareEcouteurs() {
        this.shadowRoot.querySelector("#selecteurCouleur")
            .addEventListener("input", (event) => {
                this.changeCouleur(event.target.value);
            });

            this.shadowRoot.querySelector("#bordCouleur")
            .addEventListener("input", (event) => {
                this.changeCouleurBord(event.target.value);
            });

        this.shadowRoot.querySelector("#selecteurTaille")
            .addEventListener("input", (event) => {
                this.changeSize(event.target.value);
            });
            this.shadowRoot.querySelector("#selecteurBackCouleur")
            .addEventListener("input", (event) => {
                this.changeBackgroundCouleur(event.target.value);
            });
            this.shadowRoot.querySelector("#select").addEventListener("input", (event) =>{
              this.generateImg(event);
            });
            this.shadowRoot.querySelector("#selecteffect").addEventListener("input",(event) =>{
              this.getstyle(event);
            });
            this.shadowRoot.querySelector("#infinite").addEventListener("click",(event) =>{
              this.infinite(event);
            });
            this.shadowRoot.querySelector("#noinfinite").addEventListener("click",(event) =>{
              this.noinfinite(event);
            });
            this.shadowRoot.querySelector("#borderTopLeft")
            .addEventListener("input", (event) => {
                this.changeTopLeft(event.target.value);
            });
            this.shadowRoot.querySelector("#borderTopRight")
            .addEventListener("input", (event) => {
                this.changeTopRight(event.target.value);
            });
            this.shadowRoot.querySelector("#borderBottomLeft")
            .addEventListener("input", (event) => {
                this.changeBottomLeft(event.target.value);
            });
            this.shadowRoot.querySelector("#borderBottomRight")
            .addEventListener("input", (event) => {
                this.changeBottomRight(event.target.value);
            });
            this.shadowRoot.querySelector("#borderSize")
            .addEventListener("input", (event) => {
                this.changeBorderSize(event.target.value);
            });
            this.shadowRoot.querySelector("#selecteurTexte")
            .addEventListener("input", (event) => {
                this.changeText(event.target.value);
            });

            this.shadowRoot.querySelector("#randomName")
            .addEventListener("click", (event) => {
                this.genName(event);
            });

            this.shadowRoot.querySelector("#randomLogo")
            .addEventListener("click", (event) => {
                this.genLogo(event);
            });

            this.shadowRoot.querySelector("#changeFamily")
            .addEventListener("input", (event) => {
                this.changeFamily(event);
            });
            
    }

    // Fonction
    changeCouleur(val) {
        this.logo.style.color = val;
    }

    changeCouleurBord(val) {
      this.logo.style.borderColor = val;
  }

    changeSize(val) {
        this.logo.style.fontSize = val + "px";
    }
    changeBackgroundCouleur(val){
      this.logo.style.backgroundColor = val;
    }


    changeTopLeft(val) {
      this.logo.style.borderTopLeftRadius = val + "%";

  }
  changeTopRight(val) {
    this.logo.style.borderTopRightRadius = val + "%";
}
changeBottomLeft(val) {
  this.logo.style.borderBottomLeftRadius = val + "%";
}
changeBottomRight(val) {
  this.logo.style.borderBottomRightRadius = val + "%";
}
changeBorderSize(val) {
  this.logo.style.borderWidth = val + "px";
}

changeText(val) {
  console.log(val);

  this.logo.innerHTML = val;
 
  console.log(this.logo.innerHTML);
}
    
    
    generateImg(event) {
      console.log(event);
        if(event.target.value == "angry"){
          
        console.log("Hello");
        this.logo.style.background = "url(" + getBaseURL() + "images/flammes"+(Math.floor(Math.random() * 1))+".jpg)";
        }
        else if(event.target.value == "calm"){
          
          console.log("Hello");
          this.logo.style.background = "url(" + getBaseURL() + "images/calme"+(Math.floor(Math.random() * 1))+".jpg)";
          }
        else{
          this.logo.style.background = "none";
        }
        
          
        
        //Pas oublier reset les options
     
}
getstyle(event) {
  console.log(this.logo.className);
  switch(event.target.value){
    case "scale-up-center":
      this.logo.className = "scale-up-center";
      break;
    case "flip-horizontal-bottom":
      this.logo.className = "flip-horizontal-bottom";
      break;
    case "animation focus-in-expand":
      this.logo.className = "animation focus-in-expand";
      break;
    default :
      this.logo.className = "tracking-in-expand";
      break;
  }
  
  console.log(this.logo.className);
}

infinite(event) {
  //Essayer d ajouter effet infini

  
  this.logo.style.animationIterationCount = "infinite";
  
}
noinfinite(event) {
  //Essayer d ajouter effet infini

  
  this.logo.style.animationIterationCount = "1";
  
}

genName(event){
  var rand = Math.floor(Math.random() * this.mydata.length);
  console.log(rand);
  this.logo.innerHTML = this.mydata[rand].name;
  
}

changeFamily(event){
  switch(event.target.value){
    case "Verdana":
      this.logo.style.fontFamily = "Verdana";
      break;
    case "Roboto":
      this.logo.style.fontFamily = "Roboto";
      break;
    
    default :
    this.logo.style.fontFamily = "Georgia";
      break;
  }
  
    
}

genLogo(event){
  //Rand de la couleur
  let color = ["black","blue","purple","grey","green","brown"]
  let randcolor = Math.floor(Math.random() * color.length);
  this.logo.style.color = color[randcolor];

  //Rand de la Border couleur
  let borderCouleur = ["red","blue","purple","yellow","green","brown"]
  let randBorderColor = Math.floor(Math.random() * borderCouleur.length);
  this.logo.style.borderColor = borderCouleur[randBorderColor];

  //Rand de la Font Size
  let randFontSize = Math.floor(Math.random() * 100);
  
  this.logo.style.fontSize = randFontSize;

  //Rand de la Background couleur
  let backgroundCouleur = ["red","blue","purple","yellow","green","brown"]
  let randBackgroundColor = Math.floor(Math.random() * backgroundCouleur.length);
  this.logo.style.backgroundColor= backgroundCouleur[randBackgroundColor];

  //Rand du nom
  var rand = Math.floor(Math.random() * this.mydata.length);
  console.log(rand);
  this.logo.innerHTML = this.mydata[rand].name;




}
    
    
}

customElements.define("my-logo", MyLogo);
