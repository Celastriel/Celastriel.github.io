/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    NAME: 'Jimmy Mention',
    HOMEICO : 'img/home.png',
    PROJECTICO : 'img/analytics.png',
    RESUMEICO : 'img/resume.png',
    CONTACTICO : 'img/contact-mail.png',
    PROFIL : 'img/profil.jpg'
  }
}

module.exports = nextConfig
