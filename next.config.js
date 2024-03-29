/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NAME: 'Jimmy Mention',
    FUNCTION : 'Développeur',

    PROFIL : '/img/profil.jpg',

    PWA : '/img/booking.png',
    DISCORD : '/img/discord.png',
    PACMAN : '/img/gamepad.png',

    GITHUB : '/img/github.png',

    LINK_PWA : 'https://github.com/Celastriel/PWA_Simplybook',
    LINK_DISCORD : 'https://github.com/Celastriel/nodeJs-botDiscord',
    LINK_PACMAN : 'https://github.com/Celastriel/Pacman',
  },
}
module.exports = nextConfig
