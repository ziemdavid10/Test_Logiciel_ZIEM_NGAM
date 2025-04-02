import { test, expect } from '@playwright/test';

const URL = "https://ztrain-web.vercel.app/home";

test('Ajout d\'un produit au panier', async ({ page }) => {
    // se rendre sur le site en question
    await page.goto(`${URL}`, { waitUntil: 'domcontentloaded' });
    // cliquer sur un produit
    await page.locator('.style_card_body_img__mkV1D').first().click();
    // clic sur le bouton d'ajout au panier
    await page.locator('#style_btn_add_cart__gTXM7').click();
    // Vérification de l'incrémentation du panier
    await expect(page.locator('#style_content_cart_wrapper__mqNbf')).toHaveText('1');
    console.log('Produit ajouté au panier avec succès');
});