# GabeBot

GabeBot is a free, open-source bot for Discord servers, built using <a href="https://discord.js.org">discord.js</a>.
Currently this bot is my side project to dabble in discord bot development. Feel free to fork and modify as you please!

# Why Gabe?

<a href="https://meme.fandom.com/wiki/Gabe_The_Dog">Gabe The Dog</a> is a popular meme known for having a cute, high-pitched bark which became known as bork. Gabe's bork has been used in YouTube song remixes and gathered millions of views.

On January 20th, 2017, Gabe sadly passed away. However, his bork lives on.

I created this bot with the intention of keeping Gabe's memory alive.

# Features

GabeBot's primary purpose is to bork whenever a user enters a voice channel.

I have left the main branch as simply a borking bot with the ability to set volume. The moreCommands branch extends the possible commands and contains some commands that I use for my personal Discord server.

## Commands

`gabe volume (1-10)` : Set the volume of gabe's bork when someone enter's the voice channel.

# Invite Link

<a href="https://discordjs.guide/preparations/setting-up-a-bot-application.html">Check out this guide on how to create your own bot and add it to your server!</a>

## Setting Up

After you created your own bot on the Discord Developer Portal, obtain the **Application ID** and **Token** of your bot. Copy and paste the token to the `.env.example` file and rename the file to `.env`. Then copy and Application ID and paste it into the `config.json` file under `botID`.
