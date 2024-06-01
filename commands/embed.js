const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'embed example',
  execute(message, args, commandList) {
    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('This is Title')
    .setDescription('Some description here')
    .setThumbnail('https://cdn.discordapp.com/attachments/1240640439309176862/1246525920412569610/Screenshot_20240527_090327_Chrome.jpg?ex=665cb53a&is=665b63ba&hm=29730eedb236b2e415d5be9491676b010769eb60407e877e530969a200ad1486&')
    .addFields(
      { name: 'Field Name ', value: 'Some value here' },
       { name: 'YuongzMin', value: 'Subscribe to my channel' },
    )
    .setImage('https://cdn.discordapp.com/attachments/1240293887394844792/1246525470900748360/a_e93a7b5ef06817a7d10cf9029f45b7c5.gif?ex=665cb4cf&is=665b634f&hm=854d2d03b55c67eb7d7c679f05bf8ef63dd481401c03e40dcbc20faaf26f9d31&')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here' });

    message.reply({ embeds: [embed] });
  },
};
