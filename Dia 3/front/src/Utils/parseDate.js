export function parseDate(input) {
  const dateTimeRegex = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/;

  const match = input.match(dateTimeRegex);

  if (match) {
    const date = match[1];
    const time = match[2];



    return { date, time };
  }
  else return {date:'Erro ao calcular data', time:'Erro ao calcular tempo'}
}
