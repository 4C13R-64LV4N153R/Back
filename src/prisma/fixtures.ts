import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getFixtures() {
    try {
        // Insertion des partenaires
        const jackDaniels = await prisma.partenaire.create({
            data: { nom: 'jackDaniels' }
        });
        const PernodRicard = await prisma.partenaire.create({
            data: { nom: 'PernodRicard' }
        });

        const CocaCola = await prisma.partenaire.create({
            data: { nom: 'CocaCola' }
        });

        const LaFrenchSVP = await prisma.partenaire.create({
            data: { nom: 'LaFrenchSVP' }
        });

        const LeBihan = await prisma.partenaire.create({
            data: { nom: 'LeBihan' }
        });

        const Swinkels = await prisma.partenaire.create({
            data: { nom: 'Swinkels' }
        });

        const SansPartenaire = await prisma.partenaire.create({
            data: { nom: 'SansPartenaire' }
        });

        // Insertion des produits
        const JackHoney = await prisma.produit.create({
            data: { nom: 'WHISKY JACK DANIELS HONEY', contenance: 700, unite: 'ml', partenaire_id: jackDaniels.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_145339001001_01.png?w=400&h=400&mode=pad' }
        });

        const JackFire = await prisma.produit.create({
            data: {
                nom: 'WHISKY JACK DANIELS FIRE', contenance: 700, unite: 'ml', partenaire_id: jackDaniels.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_859316001001_01.png?w=400&h=400&mode=pad'
            }
        });

        const JackApple = await prisma.produit.create({
            data: {
                nom: 'WHISKY JACK DANIELS APPLE', contenance: 700, unite: 'ml', partenaire_id: jackDaniels.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_857566001001_01.png?w=400&h=400&mode=pad'
            }
        });

        const Jack7 = await prisma.produit.create({
            data: {
                nom: 'WHISKY JACK DANIELS N°7', contenance: 700, unite: 'ml', partenaire_id: jackDaniels.id, img_url: 'https://m.media-amazon.com/images/I/71aYl6fdSbL._AC_UF1000_QL80_.jpg'
            }
        });

        const RhumClan = await prisma.produit.create({
            data: {
                nom: 'RHUM CLAN', contenance: 1000, unite: 'ml', partenaire_id: PernodRicard.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_387320001001_02.png?w=400&h=400&mode=pad'
            }
        });

        const ClanCampbell = await prisma.produit.create({
            data: {
                nom: 'CLAN CAMPBELL', contenance: 1000, unite: 'ml', partenaire_id: PernodRicard.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_387576001001_02.png?w=400&h=400&mode=pad'
            }
        });

        const Ricard = await prisma.produit.create({
            data: {
                nom: 'RICARD', contenance: 1000, unite: 'ml', partenaire_id: PernodRicard.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_853692001002_01.png?w=400&h=400&mode=pad'
            }
        });

        const LaysClassic = await prisma.produit.create({
            data: {
                nom: 'CHIPS LAYS CLASSIC', contenance: 20, unite: 'x45 gr', partenaire_id: SansPartenaire.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_145339001002_01.png?w=400&h=400&mode=pad'
            }
        });

        const LaysBBQ = await prisma.produit.create({
            data: {
                nom: 'CHIPS LAYS BBQ', contenance: 20, unite: 'x45 gr', partenaire_id: SansPartenaire.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_859315001002_01.png?w=400&h=400&mode=pad'
            }
        });

        const LaysSelVinaigre = await prisma.produit.create({
            data: {
                nom: 'CHIPS LAYS SEL VINAIGRE', contenance: 20, unite: 'x45 gr', partenaire_id: SansPartenaire.id, img_url: 'https://images.openfoodfacts.org/images/products/326/893/008/9357/front_fr.44.full.jpg'
            }
        });

        const Sprite_500 = await prisma.produit.create({
            data: {
                nom: 'SPRITE', contenance: 500, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_857390001002_01.png?w=400&h=400&mode=pad'
            }
        });

        const Sprite_1500 = await prisma.produit.create({
            data: {
                nom: 'SPRITE', contenance: 1500, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://superk.fr/32-large_default/sprite-15-l.jpg'
            }
        });

        const Coca_500 = await prisma.produit.create({
            data: {
                nom: 'COCA COLA', contenance: 500, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_396292001002_01.png?w=400&h=400&mode=pad'
            }
        });

        const Coca_1500 = await prisma.produit.create({
            data: {
                nom: 'COCA COLA', contenance: 1500, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://media.auchan.fr/MEDIASTEP643615_2048x2048/B2CD/'
            }
        });

        const Coca_0_500 = await prisma.produit.create({
            data: {
                nom: 'COCA COLA SANS SUCRE', contenance: 500, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_857390001002_01.png?w=400&h=400&mode=pad'
            }
        });

        const Coca_0_1500 = await prisma.produit.create({
            data: {
                nom: 'COCA COLA SANS SUCRE', contenance: 1500, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://m.media-amazon.com/images/I/51wdjlSqgmL.jpg'
            }
        });

        const Fuzetea_500 = await prisma.produit.create({
            data: {
                nom: 'FUZETEA PECHE', contenance: 500, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://www.aleyouneed.ch/wp-content/uploads/2021/07/img_0181.jpg'
            }
        });

        const Fuzetea_1500 = await prisma.produit.create({
            data: {
                nom: 'FUZETEA PECHE', contenance: 1500, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://www.cdiscount.com/pdt2/6/2/4/1/700x700/fuz3701018010674/rw/fuze-tea-fuze-tea-peche-intense-1-25l-pack-de-6.jpg'
            }
        });

        const Tropico_500 = await prisma.produit.create({
            data: {
                nom: 'TROPICO TROPICAL', contenance: 500, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://toptanmarket.fr/wp-content/uploads/2020/10/TROPICO-EXOTIQUE-50CLx12-600x600.jpg'
            }
        });

        const Tropico_1500 = await prisma.produit.create({
            data: {
                nom: 'TROPICO TROPICAL', contenance: 1500, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://toptanmarket.fr/wp-content/uploads/2020/11/6-x-15L-Tropico-Exotique-1-600x600.png'
            }
        });

        const MinuteMaid = await prisma.produit.create({
            data: {
                nom: 'MINUTE MAID ORANGE', contenance: 330, unite: 'ml', partenaire_id: CocaCola.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_872493001002_01.png?w=400&h=400&mode=pad'
            }
        });

        const CaraibosColada = await prisma.produit.create({
            data: {
                nom: 'CARAIBOS PINA COLADA', contenance: 1000, unite: 'ml', partenaire_id: SansPartenaire.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_145339001003_01.png?w=400&h=400&mode=pad'
            }
        });

        const CaraibosPlanteur = await prisma.produit.create({
            data: {
                nom: 'CARAIBOS PLANTEUR', contenance: 1000, unite: 'ml', partenaire_id: SansPartenaire.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_388142001002_01.png?w=400&h=400&mode=pad'
            }
        });

        const FrenchGingerBeer = await prisma.produit.create({
            data: {
                nom: 'LA FRENCH GINGER BEER', contenance: 1000, unite: 'ml', partenaire_id: LaFrenchSVP.id, img_url: 'https://media.carrefour.fr/medias/e4cc35e7e2a63022c8cd7f0c8411c69b/p_1500x1500/03770009345095-c1n1-s33.jpg'
            }
        });

        const FrenchTonic = await prisma.produit.create({
            data: {
                nom: 'LA FRENCH TONIC', contenance: 1000, unite: 'ml', partenaire_id: LaFrenchSVP.id, img_url: 'https://cdn.metro-group.com/fr/fr_pim_830940001002_01.png?w=400&h=400&mode=pad'
            }
        });

        const Cristalline = await prisma.produit.create({
            data: {
                nom: 'CRISTALINE', contenance: 30000, unite: 'ml', partenaire_id: LeBihan.id, img_url: 'https://media.carrefour.fr/medias/fe9077a824dc098a50c8daade50f/p_540x540/0761305833272_H1N1_s03.jpg'
            }
        });

        const Perrier = await prisma.produit.create({
            data: {
                nom: 'PERRIER', contenance: 30000, unite: 'ml', partenaire_id: LeBihan.id, img_url: 'https://i.ebayimg.com/images/g/6eQAAOSwQiIh2yzY/s-l1200.jpg'
            }
        });

        const HuitSix = await prisma.produit.create({
            data: {
                nom: '86 IPL', contenance: 30000, unite: 'ml', partenaire_id: Swinkels.id, img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxyo8IBpdlxVsZl7Nqqvw-WtYR0s-u-Q&s'
            }
        });

        const Urthel = await prisma.produit.create({
            data: {
                nom: 'URTHEL BLANCHE', contenance: 30000, unite: 'ml', partenaire_id: Swinkels.id, img_url: 'https://www.le-midi.fr/wp-content/uploads/2021/06/uthblanche-1.jpg'
            }
        });

        const BavariaPremium = await prisma.produit.create({
            data: {
                nom: 'BAVARIA PREMIUM', contenance: 30000, unite: 'ml', partenaire_id: Swinkels.id, img_url: 'https://www.vandb.fr/media/cache/file/attachment/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/527672/660c827a8e0e486908434.png'
            }
        });

        const Bavaria_0 = await prisma.produit.create({
            data: {
                nom: 'BAVARIA IPA 0,0%', contenance: 24, unite: 'x330 ml', partenaire_id: Swinkels.id, img_url: 'https://www.vandb.fr/media/cache/file/attachment/attachment/filter/product_gallery_popup/d84bbcea526f8f915cdbd36cc2fe4126/527672/660c827a8e0e486908434.png'
            }
        });

        // Insertion des utilisateurs
        const barmanJohn = await prisma.utilisateur.create({
            data: { name: 'John Doe', email: 'barman@lebar.com', password: '123' }
        });
        const livreurJane = await prisma.utilisateur.create({
            data: { name: 'Jane Smith', email: 'livreur@lalivraison.fr', password: '123' }
        });

        // Insertion des bars
        const BarVinVIP = await prisma.bar.create({
            data: { nom: ' Bar à vins VIP' }
        });
        const BarGeneralVIP = await prisma.bar.create({
            data: { nom: 'Bar général VIP' }
        });

        const BarLoges = await prisma.bar.create({
            data: { nom: 'Bar loges' }
        });

        const BarGeneralConcerts = await prisma.bar.create({
            data: { nom: ' Bar général concerts' }
        });

        const BarAlcoolsForts1 = await prisma.bar.create({
            data: { nom: 'Bar alcools forts 1' }
        });

        const BarAlcoolsForts2 = await prisma.bar.create({
            data: { nom: 'Bar alcools forts 2' }
        });

        const BarAlcoolsForts3 = await prisma.bar.create({
            data: { nom: 'Bar alcools forts 3' }
        });

        const BarGeneralCamping = await prisma.bar.create({
            data: { nom: 'Bar général camping' }
        });

        const BarRicardCamping = await prisma.bar.create({
            data: { nom: 'Bar Ricard camping' }
        });

        const StandDejeuners = await prisma.bar.create({
            data: { nom: 'Stand petits déjeuners' }
        });

        const Magasin = await prisma.bar.create({
            data: { nom: 'Magasin' }
        });
        // Insertion des stocks
        await prisma.stock.createMany({
            data: [
                { bar_id: BarAlcoolsForts1.id, produit_id: Jack7.id, quantite: 800 },
                { bar_id: BarAlcoolsForts1.id, produit_id: RhumClan.id, quantite: 150 },
                { bar_id: BarAlcoolsForts1.id, produit_id: ClanCampbell.id, quantite: 100 },
                { bar_id: BarAlcoolsForts1.id, produit_id: Ricard.id, quantite: 90 },
                { bar_id: BarAlcoolsForts1.id, produit_id: JackHoney.id, quantite: 160 },
                { bar_id: BarAlcoolsForts1.id, produit_id: JackFire.id, quantite: 180 },
                { bar_id: BarAlcoolsForts1.id, produit_id: JackApple.id, quantite: 200 },
                { bar_id: BarAlcoolsForts2.id, produit_id: Jack7.id, quantite: 4 },
                { bar_id: BarAlcoolsForts2.id, produit_id: RhumClan.id, quantite: 10 },
                { bar_id: BarAlcoolsForts2.id, produit_id: ClanCampbell.id, quantite: 10 },
                { bar_id: BarAlcoolsForts2.id, produit_id: Ricard.id, quantite: 12 },
                { bar_id: BarAlcoolsForts2.id, produit_id: JackHoney.id, quantite: 14 },
                { bar_id: BarAlcoolsForts2.id, produit_id: JackFire.id, quantite: 16 },
                { bar_id: BarAlcoolsForts2.id, produit_id: JackApple.id, quantite: 18 },
                { bar_id: BarAlcoolsForts3.id, produit_id: Jack7.id, quantite: 40 },
                { bar_id: BarAlcoolsForts3.id, produit_id: RhumClan.id, quantite: 20 },
                { bar_id: BarAlcoolsForts3.id, produit_id: ClanCampbell.id, quantite: 8 },
                { bar_id: BarAlcoolsForts3.id, produit_id: Ricard.id, quantite: 10 },
                { bar_id: BarAlcoolsForts3.id, produit_id: JackHoney.id, quantite: 12 },
                { bar_id: BarGeneralVIP.id, produit_id: Tropico_1500.id, quantite: 20 },
                { bar_id: BarGeneralVIP.id, produit_id: JackFire.id, quantite: 7 },
                { bar_id: BarGeneralVIP.id, produit_id: RhumClan.id, quantite: 10 },
                { bar_id: BarGeneralVIP.id, produit_id: Cristalline.id, quantite: 30 },
                { bar_id: BarLoges.id, produit_id: ClanCampbell.id, quantite: 18 },
                { bar_id: BarLoges.id, produit_id: Perrier.id, quantite: 32 },
                { bar_id: BarLoges.id, produit_id: FrenchTonic.id, quantite: 13 },
                { bar_id: BarLoges.id, produit_id: FrenchGingerBeer.id, quantite: 10 },
                { bar_id: BarGeneralConcerts.id, produit_id: Jack7.id, quantite: 100 },
                { bar_id: BarGeneralConcerts.id, produit_id: Ricard.id, quantite: 200 },
                { bar_id: BarGeneralConcerts.id, produit_id: HuitSix.id, quantite: 340 },
                { bar_id: BarGeneralConcerts.id, produit_id: JackHoney.id, quantite: 120 },
                { bar_id: BarGeneralConcerts.id, produit_id: JackApple.id, quantite: 160 },
                { bar_id: BarGeneralConcerts.id, produit_id: JackFire.id, quantite: 180 },
                { bar_id: BarGeneralConcerts.id, produit_id: RhumClan.id, quantite: 200 },
                { bar_id: StandDejeuners.id, produit_id: FrenchGingerBeer.id, quantite: 300 },
                { bar_id: StandDejeuners.id, produit_id: CaraibosColada.id, quantite: 220 },
                { bar_id: StandDejeuners.id, produit_id: Urthel.id, quantite: 360 },
                { bar_id: StandDejeuners.id, produit_id: BavariaPremium.id, quantite: 120 },
                { bar_id: StandDejeuners.id, produit_id: Bavaria_0.id, quantite: 500 },
                { bar_id: BarVinVIP.id, produit_id: JackHoney.id, quantite: 15 },
                { bar_id: BarVinVIP.id, produit_id: JackFire.id, quantite: 1 },
                { bar_id: BarVinVIP.id, produit_id: Coca_0_1500.id, quantite: 2 },
                { bar_id: BarVinVIP.id, produit_id: Bavaria_0.id, quantite: 3 },
                { bar_id: BarVinVIP.id, produit_id: FrenchGingerBeer.id, quantite: 26 },
                { bar_id: BarRicardCamping.id, produit_id: Coca_0_500.id, quantite: 40 },
                { bar_id: BarRicardCamping.id, produit_id: Fuzetea_1500.id, quantite: 14 },
                { bar_id: BarRicardCamping.id, produit_id: MinuteMaid.id, quantite: 20 },
                { bar_id: BarRicardCamping.id, produit_id: BavariaPremium.id, quantite: 7 },
                { bar_id: BarGeneralCamping.id, produit_id: Sprite_500.id, quantite: 200 },
                { bar_id: BarGeneralCamping.id, produit_id: LaysClassic.id, quantite: 300 },
                { bar_id: BarGeneralCamping.id, produit_id: Tropico_500.id, quantite: 400 },
                { bar_id: BarGeneralCamping.id, produit_id: Sprite_1500.id, quantite: 150 },
                { bar_id: BarGeneralCamping.id, produit_id: Fuzetea_500.id, quantite: 120 },
                { bar_id: BarGeneralCamping.id, produit_id: FrenchTonic.id, quantite: 280 },
                { bar_id: BarGeneralCamping.id, produit_id: Bavaria_0.id, quantite: 400 },
                { bar_id: BarGeneralCamping.id, produit_id: MinuteMaid.id, quantite: 360 },
                { bar_id: Magasin.id, produit_id: JackHoney.id, quantite: 144 },
                { bar_id: Magasin.id, produit_id: JackFire.id, quantite: 144 },
                { bar_id: Magasin.id, produit_id: JackApple.id, quantite: 144 },
                { bar_id: Magasin.id, produit_id: Jack7.id, quantite: 204 },
                { bar_id: Magasin.id, produit_id: RhumClan.id, quantite: 90 },
                { bar_id: Magasin.id, produit_id: ClanCampbell.id, quantite: 60 },
                { bar_id: Magasin.id, produit_id: Ricard.id, quantite: 210 },
                { bar_id: Magasin.id, produit_id: LaysBBQ.id, quantite: 60 },
                { bar_id: Magasin.id, produit_id: LaysClassic.id, quantite: 100 },
                { bar_id: Magasin.id, produit_id: LaysSelVinaigre.id, quantite: 40 },
                { bar_id: Magasin.id, produit_id: Sprite_500.id, quantite: 600 },
                { bar_id: Magasin.id, produit_id: Sprite_1500.id, quantite: 300 },
                { bar_id: Magasin.id, produit_id: Coca_0_1500.id, quantite: 300 },
                { bar_id: Magasin.id, produit_id: Coca_0_500.id, quantite: 600 },
                { bar_id: Magasin.id, produit_id: Coca_1500.id, quantite: 3600 },
                { bar_id: Magasin.id, produit_id: Coca_500.id, quantite: 3500 },
                { bar_id: Magasin.id, produit_id: Tropico_1500.id, quantite: 300 },
                { bar_id: Magasin.id, produit_id: Tropico_500.id, quantite: 600 },
                { bar_id: Magasin.id, produit_id: Fuzetea_1500.id, quantite: 60 },
                { bar_id: Magasin.id, produit_id: Fuzetea_500.id, quantite: 2050 },
                { bar_id: Magasin.id, produit_id: MinuteMaid.id, quantite: 600 },
                { bar_id: Magasin.id, produit_id: CaraibosColada.id, quantite: 200 },
                { bar_id: Magasin.id, produit_id: CaraibosPlanteur.id, quantite: 200 },
                { bar_id: Magasin.id, produit_id: FrenchGingerBeer.id, quantite: 164 },
                { bar_id: Magasin.id, produit_id: FrenchTonic.id, quantite: 96 },
                { bar_id: Magasin.id, produit_id: Cristalline.id, quantite: 1488 },
                { bar_id: Magasin.id, produit_id: Perrier.id, quantite: 900 },
                { bar_id: Magasin.id, produit_id: HuitSix.id, quantite: 350 },
                { bar_id: Magasin.id, produit_id: Urthel.id, quantite: 300 },
                { bar_id: Magasin.id, produit_id: BavariaPremium.id, quantite: 400 },
                { bar_id: Magasin.id, produit_id: Bavaria_0.id, quantite: 13 },
            ]
        });

    } catch (err) {
        console.log(err);
    } finally {
        async () => {
            await prisma.$disconnect();
        }
    }
}