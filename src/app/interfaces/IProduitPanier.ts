import{IProduit} from "./IProduit";

//Produit du Panier
export interface IProduitPanier {
    produit: IProduit,
    quantite:number
  }