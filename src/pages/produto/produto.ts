import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WoocommerceProvider } from '../../providers/woocommerce';


@IonicPage({})
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  woocommerce: any;
  products: any;
  imagens: any[];
  listar: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public woo: WoocommerceProvider) {
              this.ionViewDidLoad();
              this.woocommerce = woo.init(true);

  }

  ionViewDidLoad() {
    this.listar = [];
    this.woo.WoocommerceV2.getAsync("products").then((data) => {
       
      console.log("Resposta: " , data);

      let temp: any[] = JSON.parse(data.body);

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {
          temp[i].subCategories = [];
          temp[i].id
          temp[i].vendor
          temp[i].images[0].src
          
          this.listar.push(temp[i]);

        }

        console.log(this.listar.push(temp[i]));
        console.log(temp[i].images[0].src);

        
       
      }
    })

  }

}
