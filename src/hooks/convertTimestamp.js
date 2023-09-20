export const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp);

  const day = date.getUTCDate();
  const monthNames = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "oct",
    "nov",
    "dez",
  ];
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedTimestamp = `${day} ${month} ${year} ${hours}:${minutes}`;

  return formattedTimestamp;
};
