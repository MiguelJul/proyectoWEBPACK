import { loginForm } from "./pages/login.js";
import { home } from "./pages/home.js";
import { registerForm } from "./pages/register.js";
import { loginWithToken, logout } from "./services/users.js";
import { profileForm } from "./pages/profile.js";
import { detail } from "./pages/detail.js";
import { dataPage } from "./pages/data.js";
import {generarBody,carrusel2} from "./views/body/body.js";
import {generarPilotos} from "./views/body/pilotos";
import {generarPiloto} from "./views/body/piloto";
import {generarMenuCircuito} from "./views/body/menuCircuito";
export { route };

function route(ruta) {

  console.log(ruta);
  let main = document.querySelector("#main");

  if (/#\/graph\/[0-9]+/.test(ruta)) {
    let graphID = ruta.split("/")[2];
    main.innerHTML = "";
    main.append(detail(graphID));
  }
  else if(/#access_token=.*type=recovery$/.test(ruta)) {
    let datos = Object.fromEntries(ruta.substring(1).split('&').map(parametro => parametro.split('=')));
    loginWithToken(datos['access_token'],datos.expires_in);
    window.location.hash = "#/";
    
  }

  else {
    switch (ruta) {
      case "#/":
        main.innerHTML="";
        main.append(home());
       document.querySelector("#container").className="inicio";
        carrusel2();
        break;

      case "#/login":
        main.innerHTML = "";
        main.append(loginForm());
        document.querySelector("#container").className="log";
        break;

      case "#/pilotos":
          main.innerHTML = "";
          generarPilotos();
          document.querySelector("#container").className="pilotos";
          break;

      case "#/piloto":
        main.innerHTML = "";
        document.querySelector("#container").className="piloto";
        let url=window.location.hash.split("=")[1];
        generarPiloto(url);
        break;

      case "#/menucircuitos":
        main.innerHTML = "";
        document.querySelector("#container").className="pilotos";
        generarMenuCircuito();
        break;

      case "#/registrarse":
        main.innerHTML = "";
        main.append(registerForm());
        document.querySelector("#container").className="log";
        break;
      case "#/logout":
          logout();
          window.location.hash = "#/";
          break;
          case "#/perfil":
            main.innerHTML = "";
        main.append(profileForm());
        document.querySelector("#container").className="log";
            break;
      case "":
        window.location.hash = "#/";
        break;
        
    }
  }


}
