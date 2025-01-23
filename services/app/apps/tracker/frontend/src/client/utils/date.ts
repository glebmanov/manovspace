export const formattedDate = new Intl.DateTimeFormat('en', {
  day: '2-digit',
  month: 'short',
  weekday: 'short',
});

export const toTimeString = (seconds: number) => new Date(seconds * 1000).toISOString().slice(11, 19);
