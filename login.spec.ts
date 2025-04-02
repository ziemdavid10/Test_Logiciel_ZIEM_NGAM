import { test } from '@playwright/test';

const URL = "https://ztrain-web.vercel.app/home";
 test('connexion d\'un utilisateur', async ({ page }) => {
    // se rendre sur le site en question
    await page.goto(`${URL}`, { waitUntil: 'domcontentloaded' });
    //clic sur l'icône de login et de registration
    await page.locator('#style_avatar_wrapper__pEGIQ').click();
    //clic sur l'onglet connexion
    await page.getByText('Connexion').first().click();
    // remplir les differents champs
    await page.locator('#email_login').fill('davidloic10@gmail.com');
    await page.locator('#password_login',).fill('davidloic');
    //clique sur le bouton de validation
    await page.click('#btn_login');
    console.log('Connexion réussie');
});

