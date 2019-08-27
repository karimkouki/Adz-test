import { Component, OnInit } from '@angular/core';
import{AdzlivreService} from '../../AdzShared_service/AdzLivre.service';
import{AdzLivre} from '../../adz-livre';
import { from } from 'rxjs';
import{Router}  from '@angular/router';


@Component({
  selector: 'app-adz-list-livre',
  templateUrl: './adz-list-livre.component.html',
  styleUrls: ['./adz-list-livre.component.css']
})
export class AdzListLivreComponent implements OnInit {
  private users:any[];
  private valeur:string;
 



 
  livres =[] ;
  auteur =[] ;
  categories=[];


  constructor(private _userService:AdzlivreService, private _router:Router) { }

  ngOnInit() {
  
    this._userService.getUsers().subscribe((users)=>{
    
      console.log(users.items.length);

     

     
     console.log(users.items[0].volumeInfo.authors[0]);

     if(users.items.length==0){
      this._router.navigate(['/popup']); }

      else{


        this.users=users.items;
        console.log(this.users)
  
        for(let obj of this.users){
         
          console.log(obj.id);
          this.livres.push(obj.id);
        }
        
  
  
        for(let obj of this.users){
         
          console.log(obj.volumeInfo.authors[0]);
          this.auteur.push(obj.volumeInfo.authors[0]);
      
        }
        for(let obj of this.users){
         
          console.log(obj.volumeInfo.categories[0]);
          this.categories.push(obj.volumeInfo.categories[0]);
        
        } 


       
       
       
  
      }





      
    /*

      for(var obj in this._userService.getUsers()){
        console.log(obj);
        this.livres.push(obj);
      }*/
      console.log(users.items[0].id);
    },(error)=>{
      console.log(error);
    })
    
}


 

updatelivre(valeur){ 
  
  


  alert(valeur);

  console.log("ouii");
}
}


