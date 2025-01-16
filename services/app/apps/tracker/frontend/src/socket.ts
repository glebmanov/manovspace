import { Socket } from 'phoenix';

const socket = new Socket('/socket');

socket.connect();

const channel = socket.channel('tasks:tracker', {});

channel
  .join()
  .receive('ok', () => console.log('Joined channel'))
  .receive('error', resp => console.error('Unable to join', resp));
