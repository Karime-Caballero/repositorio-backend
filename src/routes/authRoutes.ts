import { Router, RouterOptions} from "express";
import { authController } from "../controllers/authController";

/*

* clase para la funcionalidad de rutas login 
*/

class AuthRoutes {
    //objeto tipo router 
    public router: Router;

    //Inicializa
    constructor(){
        this.router = Router();
        this.config();
    }
    config() {
        this.router.post('/', authController.iniciarSesion);        
    }
}
const authRoutes = new AuthRoutes();
export default authRoutes.router;