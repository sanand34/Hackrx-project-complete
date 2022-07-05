import Pusher from 'pusher';
const pusher = new Pusher({
  appId: '1419167',
  key: 'efa0d6c7474efdef2f26',
  secret: '48d8c7bf4441a60e4df4',
  cluster: 'ap2',
  useTLS: true,
});
pusher.trigger('my-channel', 'product', {
  id: 1,
  title: 'Samsung AC',
  image:
    'https://www.reliancedigital.in/medias/Samsung-AR18BYLZAUR-Split-Air-Conditioner-581026992-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDY3MHxpbWFnZS9qcGVnfGltYWdlcy9oYzgvaDM3Lzk4MTMxMzI3NzEzNTguanBnfDhhNDc0MWYzNjM2OTJjZTM0MzMxYWZlMjhmN2ZmNDlkZjVjNmIxNWNmOGI4YmMwNDBmOWE3MDE3OThiNDEyMDk',
  description:
    'Save energy, but still stay cool. 5 Step mode uses customized compressor operation from 40percent to 120percent which control energy consumption. It lets you cool more efficiently when it’s not too hot outside or just save energy and money at any time, so you don’t have to worry about the electricity bills.',
  images: [
    'https://www.reliancedigital.in/medias/LLOYD-LS12I3FWGBP-Air-Conditioner-581026729-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w5NzYxOHxpbWFnZS9qcGVnfGltYWdlcy9oMWYvaGFmLzk3NDY0MjkyMTQ3NTAuanBnfGJhZDBiODAwZDQxYjVhM2YzMjY1MDdmZDIzOTc5ZjIxODQwMDM1Zjc3NWIwNTc2NWQ4MzNhYjUzZTJhN2RjMWY',
    'https://www.reliancedigital.in/medias/LLOYD-LS12I3FWGBP-Air-Conditioner-581026729-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMDUyOTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hiMS85NzQ2NDI5ODcwMTEwLmpwZ3xiNDBiNTRmNTQzOWRjM2I5YTQ4MjgyOGZmYmExZjk4OWJjNzM5MDNiMzVjYWNiZGZiZDIwYzVlY2E4Njc1MDM4',
    'https://www.reliancedigital.in/medias/Samsung-AR18BYLZAUR-Split-Air-Conditioner-581026992-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4MzY4MXxpbWFnZS9qcGVnfGltYWdlcy9oMTcvaGRmLzk4MTMxMzMwOTkwMzguanBnfGRkNTg5MzJmYjQyY2JlYzQ0ZDkxMmE2YTQxZGE0OGEzZDI0YzA3MGUyYmQzMmE3OGY4MmE1NGMyNjI3NjY5MmI',
  ],
  options: ['Black', 'Space Grey', 'Red'],
  avgRating: 3.8,
  ratings: 2989,
  price: 4206.9,
  oldPrice: 120.06,
  quantity: 2,
  target: 1,
  data: {
    nudge: 'Flat 30% off',
    destination: 'shoppingCart',
  },
});
