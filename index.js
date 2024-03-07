import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_NSBMpzhckDT1U7GsLCrJM56rQoh520chdMaw1dvP');



export async function convertCurrency(fromCurrency, toCurrency, units){
    const response = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier = response.data[toCurrency];
    return multiplier*units;
}