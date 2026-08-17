const fs = require('fs');
const path = require('path');
const http = require('https');

const publicAssets = path.join(__dirname, 'public/assets');
const srcAssets = path.join(__dirname, 'src/assets');

if (!fs.existsSync(publicAssets)) fs.mkdirSync(publicAssets, { recursive: true });
if (!fs.existsSync(srcAssets)) fs.mkdirSync(srcAssets, { recursive: true });

// Sync any PNGs from src/assets to public/assets
const srcFiles = fs.readdirSync(srcAssets);
srcFiles.forEach(file => {
    const srcPath = path.join(srcAssets, file);
    const destPath = path.join(publicAssets, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} from src/assets to public/assets`);
});

// Ensure all target website assets are present in both places
const allAssets = [
    { name: 'ganesha.png', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/0b9548f5-0383-432f-a337-2332e3007986/ganesha.png' },
    { name: 'rays.png', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/a46f1186-5b0f-4f53-bcd6-b792acfcdaac/rays.png' },
    { name: 'mandala.png', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/731c1ca0-b478-4be1-b982-916a5c9d284d/mandala.png' },
    { name: 'couple.png', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/08d1fea5-de42-4106-a8eb-2c1e773235b1/couple.png' },
    { name: 'om.png', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/ca10d8cf-cee9-42a0-85ce-4e09a48a11de/om.png' },
    { name: 'divider.png', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/577ad208-e116-4c8b-9a58-4df71bb72ba6/divider.png' },
    { name: 'elephants.png', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/bc122f61-e659-4a95-a10b-13fe3c72cc87/elephants.png' },
    { name: 'temple.png', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/6e1b46e9-0ba8-4bf5-b78c-235773a0e242/temple.png' },
    { name: 'venue.jpg', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/fe7612e2-57a9-4fe9-ad1a-ebbf236d6547/venue.jpg' },
    { name: 'couple-standing.png', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/e2466868-d822-42f2-a0a3-cab5045f6112/couple-standing.png' },
    { name: 'invitation.mp3', url: 'https://lalitha-manoj-wedding-invitation.lovable.app/__l5e/assets-v1/74d737cc-fc9f-428c-94e3-36a7259596e6/invitation.mp3' }
];

allAssets.forEach(asset => {
    const pubFile = path.join(publicAssets, asset.name);
    const srcFile = path.join(srcAssets, asset.name);

    if (!fs.existsSync(pubFile) || fs.statSync(pubFile).size === 0) {
        const fileStream = fs.createWriteStream(pubFile);
        http.get(asset.url, res => {
            res.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                fs.copyFileSync(pubFile, srcFile);
                console.log(`Downloaded ${asset.name} to public/assets and copied to src/assets`);
            });
        });
    } else if (!fs.existsSync(srcFile)) {
        fs.copyFileSync(pubFile, srcFile);
        console.log(`Copied ${asset.name} to src/assets`);
    }
});
