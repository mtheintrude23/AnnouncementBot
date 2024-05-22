const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'embed example',
  execute(message, args, commandList) {
    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('This is Title')
    .setDescription('Some description here')
    .setThumbnail('https://media.discordapp.net/attachments/1071041593961894009/1242738220131684352/Picsart_24-05-22_14-02-57-001.jpg?ex=664eeda8&is=664d9c28&hm=ffeb622f79bd63d78d1153fc0aea288bb5fac0866d4fe0460467aff997e31b54&=&format=webp&width=1390&height=1098')
    .addFields(
      { name: 'Field Name ', value: 'Some value here' },
       { name: 'YuongzMin', value: 'Subscribe to my channel' },
    )
    .setImage('https://media.discordapp.net/attachments/1071041593961894009/1242738220131684352/Picsart_24-05-22_14-02-57-001.jpg?ex=664eeda8&is=664d9c28&hm=ffeb622f79bd63d78d1153fc0aea288bb5fac0866d4fe0460467aff997e31b54&=&format=webp&width=1390&height=1098')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here' });

    message.reply({ embeds: [embed] });
  },
};
