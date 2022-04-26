/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    NAME: 'Jimmy Mention',
    EMAIL : 'jimmymention@gmail.com',
    TEL : '+32 471 28 91 78',

    ICO_HOME : 'img/home.png',
    ICO_PROJECT : 'img/analytics.png',
    ICO_RESUME : 'img/resume.png',
    ICO_CONTACT : 'img/contact-mail.png',

    PROFIL : 'img/profil.jpg',

    PWA : 'img/booking.png',
    DISCORD : 'img/discord.png',
    PACMAN : 'img/gamepad.png'
  }
}

module.exports = nextConfig
