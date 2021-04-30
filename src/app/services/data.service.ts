import { Injectable } from '@angular/core';

// Catégorie
export interface ICategorie {
  id: number,
  nom: string,
}

// Produit
export interface IProduit {
  id: number,
  nom: string,
  prix: number,
  image: string,
  categorie:number,
}

//Produit du Panier
export interface IProduitPanier {
  produit: IProduit,
  quantite:number,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    const categories = [];

    const cat1: ICategorie = {
      id: 1,
      nom: 'Jardin Animalerie'
    }
    const cat2: ICategorie = {
      id: 2,
      nom: 'Sport'
    }
    const cat3: ICategorie = {
      id: 3,
      nom: 'Course'
    }
    const cat4: ICategorie = {
      id: 4,
      nom: 'Electroménager'
    }
    const cat5: ICategorie = {
      id: 5,
      nom: 'Meuble déco'
    }
    const cat6: ICategorie = {
      id : 6,
      nom: 'Literie'
    }
    const cat7: ICategorie = {
      id : 7,
      nom: 'Bricolage'
    }
    const cat8: ICategorie = {
      id : 8,
      nom: 'Informatique',
    }
    const cat9: ICategorie = {
      id : 9,
      nom: 'TV Son Photo'
    }
    const cat10: ICategorie = {
      id: 10,
      nom: 'Téléphonie'
    }
    const cat11: ICategorie = {
      id : 11,
      nom: 'Reconditionné et Occasion'
    }
    const cat12: ICategorie = {
      id: 12,
      nom: 'Jeux Vidéo'
    }
    const cat13: ICategorie = {
      id: 13,
      nom: 'Jouets'
    }
    const cat14: ICategorie = {
      id: 14,
      nom: 'Mode et Bijoux'
    }
    const cat15: ICategorie = {
      id: 15,
      nom: 'Bébé'
    }
    const cat16: ICategorie = {
      id: 16,
      nom: 'Auto Moto'
    }
    const cat17: ICategorie = {
      id: 17,
      nom: 'La cave'
    }
    const cat18: ICategorie = {
      id: 18,
      nom: 'Hygiène Beauté'
    }
    const cat19: ICategorie = {
      id: 19,
      nom: 'Paarapharmacie Santé'
    }

    categories.push(cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13, cat14, cat15, cat16, cat17, cat18, cat19);

    return categories;
  }

  getProduits():IProduit[] {
    let produits: IProduit[] = [];

    let prod1: IProduit = {
      id: 1,
      nom: 'Iphone 12 noir 64 Go',
      prix: 909,
      image: '../assets/produits/iphone-12-noir.png',
      categorie: 10
    }
    let prod2: IProduit = {
      id: 2,
      nom: 'Mens T-Shirt',
      prix: 34,
      image: '../../assets/produits/prod-2.png',
      categorie: 14
    }
    let prod3: IProduit = {
      id: 3,
      nom: 'Womens T-Shirt',
      prix: 40,
      image: '../../assets/produits/prod-3.png',
      categorie:14
    }

    produits.push(prod1, prod2, prod3);

    return produits;
  }

  getBestSellProduits() {
    let BestProduits = [];

    let prod1: IProduit = {
      id: 1,
      nom: 'Iphone 12 noir 64 Go',
      prix: 909,
      image: '../assets/produits/iphone-12-noir.png',
      categorie:10
    }
    let prod2: IProduit = {
      id: 2,
      nom: 'Mens T-Shirt',
      prix: 34,
      image: '../../assets/produits/prod-2.png',
      categorie : 14
    }
    let prod3: IProduit = {
      id: 3,
      nom: 'Womens T-Shirt',
      prix: 40,
      image: '../../assets/produits/prod-3.png',
      categorie: 14
    }

    BestProduits.push(prod1, prod2, prod3);

    return BestProduits;
  }

}
