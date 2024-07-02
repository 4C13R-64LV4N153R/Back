"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Insertion des partenaires
            const partenaireA = yield prisma.partenaire.create({
                data: { nom: 'Partenaire A' }
            });
            const partenaireB = yield prisma.partenaire.create({
                data: { nom: 'Partenaire B' }
            });
            // Insertion des produits
            const coca500ml = yield prisma.produit.create({
                data: { nom: 'Coca-Cola', contenance: 500, unite: 'ml', partenaire_id: partenaireA.id, img_url: 'https://global.discourse-cdn.com/business4/uploads/neomonstersforum/original/3X/3/7/3785350db3411362475773793576fc7923b0da98.jpeg' }
            });
            const eau1000ml = yield prisma.produit.create({
                data: { nom: 'Eau', contenance: 1000, unite: 'ml', partenaire_id: partenaireB.id, img_url: 'https://global.discourse-cdn.com/business4/uploads/neomonstersforum/original/3X/3/7/3785350db3411362475773793576fc7923b0da98.jpeg' }
            });
            const biere1500ml = yield prisma.produit.create({
                data: { nom: 'Bière', contenance: 1500, unite: 'ml', partenaire_id: partenaireA.id, img_url: 'https://global.discourse-cdn.com/business4/uploads/neomonstersforum/original/3X/3/7/3785350db3411362475773793576fc7923b0da98.jpeg' }
            });
            const vin750ml = yield prisma.produit.create({
                data: { nom: 'Vin', contenance: 750, unite: 'ml', partenaire_id: partenaireB.id, img_url: 'https://global.discourse-cdn.com/business4/uploads/neomonstersforum/original/3X/3/7/3785350db3411362475773793576fc7923b0da98.jpeg' }
            });
            const coca1000ml = yield prisma.produit.create({
                data: { nom: 'Coca-Cola', contenance: 1000, unite: 'ml', partenaire_id: partenaireA.id, img_url: 'https://global.discourse-cdn.com/business4/uploads/neomonstersforum/original/3X/3/7/3785350db3411362475773793576fc7923b0da98.jpeg' }
            });
            const chipsLays50gr = yield prisma.produit.create({
                data: { nom: 'Chips Lays', contenance: 50, unite: 'gr', partenaire_id: partenaireB.id, img_url: 'https://global.discourse-cdn.com/business4/uploads/neomonstersforum/original/3X/3/7/3785350db3411362475773793576fc7923b0da98.jpeg' }
            });
            // Insertion des utilisateurs
            const barmanJohn = yield prisma.utilisateur.create({
                data: { name: 'John Doe', email: 'barman@lebar.com', password: '123' }
            });
            const livreurJane = yield prisma.utilisateur.create({
                data: { name: 'Jane Smith', email: 'livreur@lalivraison.fr', password: '123' }
            });
            // Insertion des bars
            const barCentral = yield prisma.bar.create({
                data: { nom: 'Bar Central' }
            });
            const barDesAmis = yield prisma.bar.create({
                data: { nom: 'Bar des Amis' }
            });
            // Insertion des stocks
            yield prisma.stock.createMany({
                data: [
                    { bar_id: barCentral.id, produit_id: coca500ml.id, quantite: 40 },
                    { bar_id: barCentral.id, produit_id: eau1000ml.id, quantite: 10 },
                    { bar_id: barDesAmis.id, produit_id: coca500ml.id, quantite: 20 },
                    { bar_id: barDesAmis.id, produit_id: eau1000ml.id, quantite: 15 },
                ]
            });
            // Insertion des livraisons
            const livraison1 = yield prisma.livraison.create({
                data: { utilisateur_id: livreurJane.id, bar_id: barCentral.id, statut: 'prise_en_charge', date_livraison: new Date('2024-07-01') }
            });
            const livraison2 = yield prisma.livraison.create({
                data: { utilisateur_id: livreurJane.id, bar_id: barDesAmis.id, statut: 'livree', date_livraison: new Date('2024-07-01') }
            });
            // Insertion des produits dans les livraisons
            yield prisma.livraisonProduit.createMany({
                data: [
                    { livraison_id: livraison1.id, produit_id: coca500ml.id, quantite: 50 },
                    { livraison_id: livraison1.id, produit_id: eau1000ml.id, quantite: 30 },
                    { livraison_id: livraison2.id, produit_id: coca500ml.id, quantite: 20 },
                    { livraison_id: livraison2.id, produit_id: eau1000ml.id, quantite: 15 },
                ],
            });
            // Mise à jour des stocks pour les nouveaux produits
            yield prisma.stock.createMany({
                data: [
                    { bar_id: barCentral.id, produit_id: coca1000ml.id, quantite: 30 },
                    { bar_id: barCentral.id, produit_id: chipsLays50gr.id, quantite: 50 },
                    { bar_id: barDesAmis.id, produit_id: coca1000ml.id, quantite: 20 },
                    { bar_id: barDesAmis.id, produit_id: chipsLays50gr.id, quantite: 40 },
                ],
            });
            // Insérer 10 unités de Coca-Cola 1L dans la livraison ID 1
            yield prisma.livraisonProduit.create({
                data: { livraison_id: livraison1.id, produit_id: coca1000ml.id, quantite: 10 }
            });
        }
        catch (err) {
            console.log(err);
        }
        finally {
            () => __awaiter(this, void 0, void 0, function* () {
                yield prisma.$disconnect();
            });
        }
    });
}
main();
