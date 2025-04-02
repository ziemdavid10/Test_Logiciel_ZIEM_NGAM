import { test } from '@playwright/test';
import { monSet } from './register.spec';

const URL = "https://ztrain-web.vercel.app/home";

//Générer un email aléatoire
function generateRandomEmail() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'*+/=?^_`{|}~";
    const domainChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const tldChars = "abcdefghijklmnopqrstuvwxyz";

    function getRandomString(length, charSet) {
        return Array.from({ length }, () => charSet[Math.floor(Math.random() * charSet.length)]).join('');
    }

    const localPart = getRandomString(8, chars);
    const domain = getRandomString(5, domainChars);
    const tld = getRandomString(3, tldChars);

    return `${localPart}@${domain}.${tld}`;
}

console.log(generateRandomEmail());

let emailaleatoire = generateRandomEmail();
 test('connexion d\'un utilisateur', async ({ page }) => {
    // se rendre sur le site en question
    await page.goto(`${URL}`, { waitUntil: 'domcontentloaded' });
    //clic sur l'icône de login et de registration
    await page.locator('#style_avatar_wrapper__pEGIQ').click();
    //clic sur l'onglet connexion
    await page.getByText('Connexion').first().click();
    // remplir les differents champs
    await page.locator('#email_login').fill(emailaleatoire);
    await page.locator('#password_login',).fill('davidloic');
    //clique sur le bouton de validation
    await page.click('#btn_login');
    // Vérifier si l'email est déjà dans le set
    if(monSet.has(emailaleatoire)){
        console.log('Connexion réussie');
    }
    else{
        console.log('Connexion échouée');
    }
});

