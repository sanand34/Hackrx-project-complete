import Pusher from 'pusher';

const pusher = new Pusher({
  appId: '1419167',
  key: 'efa0d6c7474efdef2f26',
  secret: '48d8c7bf4441a60e4df4',
  cluster: 'ap2',
  useTLS: true,
});
export default pusher;
