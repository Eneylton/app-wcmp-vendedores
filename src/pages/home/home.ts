import { Component } from '@angular/core';
import { NavController, ToastController, IonicPage } from 'ionic-angular';
import { WoocommerceProvider } from '../../providers/woocommerce';


@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  WooCommerce: any;
  vendors: any[];
  listar: any[];
  

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController,
              public woo: WoocommerceProvider) {

                this.loadMoreProducts(null);
  }

 
  loadMoreProducts(event){
    this.listar = [];
    
    this.woo.Wcmp.getAsync("vendors").then( (data) => {
      console.log(JSON.parse(data.body));
      this.vendors = JSON.parse(data.body);

      let temp: any[] = JSON.parse(data.body);

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {

          temp[i].email

          temp[i].address.address_1

          temp[i].address.country

          temp[i].address.state

          temp[i].address.city

          temp[i].address.phone

          temp[i].address.postcode

          temp[i].shop.title

          temp[i].shop.url

          temp[i].display_name

          this.listar.push(temp[i]);
        }

       
        console.log(this.listar.push(temp[i]));

      }

    }, (err) => {
      console.log(err)
    })

  }
 
}
