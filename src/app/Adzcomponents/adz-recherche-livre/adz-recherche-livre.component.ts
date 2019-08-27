import { Component, OnInit } from '@angular/core';
import { AdzlivreService } from 'src/app/AdzShared_service/AdzLivre.service';
import{Router}  from '@angular/router';
import { from } from 'rxjs';
import{AdzLivre} from '../../adz-livre';



@Component({
  selector: 'app-adz-recherche-livre',
  templateUrl: './adz-recherche-livre.component.html',
  styleUrls: ['./adz-recherche-livre.component.css']
})


export class AdzRechercheLivreComponent implements OnInit {
  public valeur:string;

  constructor(private _userService:AdzlivreService, private _router:Router) { }

  ngOnInit() {
  }

  updateUser(valeur){  
    alert(valeur);
   this._userService.setter(valeur);
   this._router.navigate(['/list']);
  


  }



  

}
