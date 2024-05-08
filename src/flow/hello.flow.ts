import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['hola', 'buenas', 'holi', 'hey', 'hi', 'hey' ])
    .addAnswer('Hola, este es el bot de Bausing Colchones' )
    .addAnswer('Venemos Colchones, Sommiers y algunos electrodomésticos')
    .addAnswer('Estoy aquí para responder cualquier duda que tengas')

    
