const { Composer } = require('micro-bot')
const bot = new Composer
// const Telegraf = require("telegraf");
// const bot = new Telegraf("1469766144:AAFq2-sfp5P6ebIBpQS2xCcAUBO06paa6q8");

bot.on("new_chat_members", (ctx) => {
  ctx.reply(
    `Hi ${ctx.message.new_chat_members[0]["first_name"]}  you are welcome to the linkmine group. Please check the pinned message for more information. or press /start if you need my /help`
  );
});

bot.start((ctx) => {
  ctx.reply(`
    Do the following to sign up and buy a plan 

    1. Signup on linkmine.africa using this invitation code ( Invitation Code: 9895M0EP).
    
    2. Buy btc worth of the package you intend to purchase and send to your  linkmine BTC wallet.
    
    3. Purchase the package.
    
    4. Incase you might need additional /help`);
   
});

bot.help((ctx) => {
  ctx.reply(
    `Hello, i realise you need my help, these are available commands that i can help you with /start\n  - /website\n - /packages\n - /signup\n  - /FAQs\n -/about\n -/tutorials\n`
  );
});
bot.on("sticker", (ctx) => {
  ctx.reply("👍");
});

bot.hears("hello", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    'Hi, Welcome to LinkMine group, Please check the pinned message for more information. or visit our <a href="https://linkmine.africa" target="blank">Website</a>',
    { parse_mode: "HTML" }
  );
});
bot.hears("Hello", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    'Hi, Welcome to LinkMine group, Please check the pinned message for more information. or visit our <a href="https://linkmine.africa" target="blank">Website</a>',
    { parse_mode: "HTML" }
  );
});
bot.hears("Good morning", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `Good morning ${ctx.message.from.first_name}, How is your investment doing today? Do you need my /help ? `,
    { parse_mode: "HTML" }
  );
});
bot.hears("Good Morning", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `Good morning ${ctx.message.from.first_name}, How is your investment doing today? Do you need my /help ? `,
    { parse_mode: "HTML" }
  );
});
bot.hears("good morning", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `Good morning ${ctx.message.from.first_name}. How is your investment doing today? Do you need my /help ? `,
    { parse_mode: "HTML" }
  );
});

bot.command("/website", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    'Visit our <a href="https://linkmine.africa" target="blank">Website</a>',
    { parse_mode: "HTML" }
  );
});
bot.command("/signup", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    'Kindly signup following this link <a href="https://linkmine.vip/auth/register" target="blank">Sign up</a>',
    { parse_mode: "HTML" }
  );
});
bot.command("/tutorials", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,

    `You can use this tutorial <a href="https://www.youtube.com/watch?v=I1XjhcwOs1U&feature=emb_title" target="blank">video</a> to learn how to fund your btc wallet yourself- `,
    { parse_mode: "HTML" }
  );
});
bot.command("/about", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `This group is for anyone who wants to make money from cloudmining through Linkmine.

      Linkmine gives you the opportunity to earn as much as 12% monthly on your investment.
      You make money through mining bitcoin with Linkmine doing the cloud mining on your behalf. 
      
      Benefits of buying any of the plans include;
    1. Earn as much as 12% monthly 
    2. ROI keeps increasing in proportion to BTC price increase
    3. Earn up to 5% referral bonus on all direct referrals 
    4. Linkmine manages your mining hardware for you
    5. You do not need to have any technical know how to become a part of Linkmine cloud mining service
    6. Keep earning till all Bitcoin in the world is mined 🤩
      `,
    { parse_mode: "HTML" }
  );
});
bot.command("/FAQs", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `For more information on Linkmine, please go through the <a href="https://docs.google.com/document/d/1HaffCJu0LotLq-uJJ2Q8mvw7aU2bvLSQUAZVrTDwuJ0/edit?usp=sharing" target="blank">FAQS here</a>`,
    { parse_mode: "HTML" }
  );
});
bot.command("/packages", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `
    Available Linkmine Packages
    $50 (T) Silver plan
    ⇒ 10% return monthly

    $100 (T2) Gold plan
    ⇒ 10% return monthly

    $200 (T3) jasper plan
    ⇒ 10% return monthly

    $350 (T4) Emerald plan
    ⇒ 10% return monthly

    $500 (T5) Topaz plan
    ⇒ 12% return monthly 

    Kindly Visit the <a href="https://linkmine.vip/product-center" target="blank">Product Center</a> for more details`,
    { parse_mode: "HTML" }
  );
});

// bot.launch();
module.exports = bot

// protected-hollows-15256
// https://protected-hollows-15256.herokuapp.com/