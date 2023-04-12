const {Telegraf} = require('telegraf');
// const { message } = require('telegraf/filters');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);


try{
bot.start((ctx)=>{
    const msg="Thanks for showing interest to know about me. You can try /help for commands";
    ctx.reply(msg);
});


bot.command('help',(ctx)=>{
    ctx.reply(`
    Choose from below options:
    1) /Linkedin :- To get my Linkedin Profile Link
    2) /Github :- To get my Github profile Link
    3) /Resume :- To get Drive Link of my resume
    4) /Leetcode :- To get my Leetcode Profile Link
    `);
});

bot.command('Linkedin',(ctx)=>{
    const msg1="https://www.linkedin.com/in/gautham-sai-swaroop/";
    ctx.reply(msg1);
});

bot.command('Github',(ctx)=>{
    const msg2="https://github.com/gssp4167";
    ctx.reply(msg2);
});

bot.command('Resume',(ctx)=>{
    const msg3="https://drive.google.com/file/d/1q-gthEzjKpkqOqVKw9aAmDh6kEs6d4eH/view?usp=share_link";
    ctx.reply(msg3);
});

bot.command('Leetcode',(ctx)=>{
    const msg4="https://leetcode.com/gssp4167/";
    ctx.reply(msg4);
});

bot.on('text', (ctx) => {
    ctx.reply('Sorry, I don\'t understand that command. Type /help to see the available commands.');
});

bot.launch();
}
catch(err)
{
    console.log("Error is "+ err);
}