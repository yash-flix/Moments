
type VendorCategory = 'decorators' | 'caterers' | 'photographers' | 'florists' | 'wedding-halls' | 'bridal-wear' | 'makeup-artists' | 'dj-musicians';

export type Vendor = {
  id: number;
  name: string;
  category: VendorCategory;
  image: string;
  rating: number;
  location: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  price: string;
  gallery: string[];
  services: string[];
};

// Sample images for each category
const decoratorImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://img.freepik.com/free-photo/navratri-decoration-with-candles_23-2151193771.jpg?t=st=1745520527~exp=1745524127~hmac=89b79808908cdbf3d34fa1b5fe9bedd1e35246d8a915e337f3bd79bcd6ca1f5e&w=996",
  "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481538.jpg?t=st=1745520558~exp=1745524158~hmac=d0b15d0308d9d5564fcda5465cceaee5d90b8faab0a861d358774e92bf561e35&w=996",
  "https://img.freepik.com/premium-photo/colorful-stage-decoration-bride_42422-72.jpg?w=996",
  "https://img.freepik.com/premium-photo/indian-wedding-haldi-decoration-groom-bride-yellow-color_143921-377.jpg?w=996",
  "https://img.freepik.com/premium-photo/kenyan-weddings-indian-asian-details-texture-accessories-marriage-customary-ceremony-nairobi-city_257688-6576.jpg?w=996",
  "https://img.freepik.com/free-photo/navratri-interior-decoration_23-2151193731.jpg?t=st=1745520673~exp=1745524273~hmac=707a49f1e5c46db346c0fdaa06e0a617e6e11ca71506dd6c9424988af96ec25b&w=996",
];

const catererImages = [
  "https://images.unsplash.com/photo-1486428263684-28ec9e4f2584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://img.freepik.com/free-photo/side-view-chicken-meatballs-with-greens-ketchup-plate_141793-4839.jpg?t=st=1745520764~exp=1745524364~hmac=bdfe9f8323248781624b3810d8f729b5348461b2fe5bb34cdd29724086e9f70f&w=996",
  "https://img.freepik.com/free-photo/high-angle-view-vegan-salad-with-avocado_176474-2671.jpg?t=st=1745520791~exp=1745524391~hmac=3ce4df0911decac276f91cffe147f441bd576095ee0fa289269a018893b2650e&w=996",
  "https://img.freepik.com/free-photo/side-view-dessert-sweet-baked-pumpkin-with-nuts-cream_141793-3867.jpg?t=st=1745520821~exp=1745524421~hmac=006129b36f846ab1cc4698b20e860cf2d628013739a3014ca4687547bde6cf51&w=996",
  "https://img.freepik.com/free-photo/dinner-table-with-fried-meat-dishes-sauces_181624-43898.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/close-up-ice-cream-table_1048944-28128628.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
];

const photographerImages = [
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://img.freepik.com/free-photo/beautiful-woman-long-red-dress-walks-around-city-with-her-husband_1157-13373.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/couple-portrait-fotographiya_1108565-35.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/couple-is-kissing-tropical-garden_1113980-2203.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/picture-bride-groom-by-window_1113980-2430.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
];

const floristImages = [
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://img.freepik.com/free-photo/beautiful-wedding-flowers-low-angle_23-2149617119.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://img.freepik.com/free-photo/navratri-highly-detailed-floral-decoration_23-2151193685.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/close-up-red-flowers_1048944-9600100.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/bouquet-flowers-with-white-background_1232-1088.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://imgs.search.brave.com/Tp395Hh-fJMdGPcFoLdVcyJuiksXtGwA773g1BGQ1YU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU4/NTQ1YmI5MzdjNTgx/YWZjY2VhNWU4OC8x/NjAxNDk4MTc5NDg4/LUtHRVk4S1NETks0/QVRPUDM5NlFYL2lt/YWdlLWFzc2V0Lmpw/ZWc",
];

// New category images
const weddingHallImages = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  "https://images.unsplash.com/photo-1505944357431-27579db47222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://imgs.search.brave.com/j0zkXJ_xWBJ7RhkjsxjtqV8Z_FgZUPea6w3H3tr54zg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY1/NjRhZmI0ZjA4NTE3/NjBjZmNkZGU1OC84/YTZjMGRjNC1kODVk/LTQ3ODEtYTM5YS01/YTAxOTAzMzc3MDUv/TmlybWFsLVNoYXJv/bi1SaW5hcy1WZW51/ZS1DaGVubmFpLTAy/MTUuanBn",
  "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481476.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/photo-is-must-everyday-work-ai-generated-best-wonderful-photo_865967-1233391.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/flower-decoration-hanging-footpath_1048944-7609378.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/ceremony-arch-wedding-arch-wedding-wedding-moment-decorations-decor-wedding-decorations_543567-2689.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/flower-covered-walkway-with-curtain-that-says-flowers_1058338-24175.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",

];

const bridalWearImages = [
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80",
  "https://img.freepik.com/free-photo/details-part-traditional-indian-wedding-women-clothes_8353-9765.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://images.unsplash.com/photo-1585241920873-a914432df4f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://imgs.search.brave.com/243R_9BMRoiDLuGJo3KX8jJIQ6XsD8RvDZLDAxvW4wY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9oaWZhc2hpb24u/Y29tL2Nkbi9zaG9w/L2ZpbGVzL0FBLTEz/OC5qcGc_dj0xNzMy/OTY1NzA4JndpZHRo/PTUzMw",
  "https://imgs.search.brave.com/l-AB-C5hIUu4H3eminiq7QPBKlGq_8I0kvGYkWOEruw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9oaWZhc2hpb24u/Y29tL2Nkbi9zaG9w/L2ZpbGVzLzFfM2U1/ZjE3NjUtYThlMy00/NmUwLThhOWYtMjc2/NjZmODQ3MThhLmpw/Zz92PTE2ODMwMjYy/Njgmd2lkdGg9NTMz",
  "https://imgs.search.brave.com/F1Lz5eyLFpwIi88aWBA0UdsMFNUfCNU5rqX8Q_4dszA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFjLzYy/L2FjLzFjNjJhY2Q5/ZDYxZjFkMDQ1YmEx/NjlmNGQxNjU1ZDZi/LmpwZw",
  "https://imgs.search.brave.com/fDIpbN25OrBH0-trZtwhwQXwhwiTSlHZ4KwPQD_rCB0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnJpZGVzLmNvbS90/aG1iL3kyZHdjRnVm/cW9SYVc1UnBhTzdV/T3N4ZVNZdz0vMTUw/MHgwL2ZpbHRlcnM6/bm9fdXBzY2FsZSgp/Om1heF9ieXRlcygx/NTAwMDApOnN0cmlw/X2ljYygpL1NhYnlh/c2FjaGlhLTk5ODk4/NDI1MWI0MzRmM2E5/YzM1MGM1Njk0ZWY3/ZjMyLmpwZWc",
  "https://imgs.search.brave.com/aFUO-0EBaqMCp_mq8nsQBSkMRynU0qdhcHTda_HD05g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzQy/L2Q4LzgwNDJkODIx/Yjk2OGI3YWE2N2E4/ZDE3YWI4OTViN2I5/LmpwZw",
  "https://imgs.search.brave.com/JcmDVEExvBBYl1fG_Tl5njyOGpiqf3DbFAiBs6B0LJE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk4LzJh/LzJhLzk4MmEyYTNj/ODAyNmM3N2FiNzZj/YTRiYzU1MTY5MjM2/LmpwZw",
];

const makeupArtistImages = [
  "https://imgs.search.brave.com/PeCifFFNSMdYz-lgVIPh-3K44drdw-lAIQQWLs8MUr4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS53ZWRtZWdvb2Qu/Y29tL3Jlc2l6ZWQv/NDUwWC91cGxvYWRz/L21lbWJlci84MTU5/LzE1MDAzNjA3NTNf/MTQ5ODU0MjUwMl9p/bWFnZTY4LmpwZw",
  "https://images.unsplash.com/photo-1457972851104-4fd469440bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80",
];

const djMusicianImages = [
  "https://imgs.search.brave.com/h1YJDBrvt5k_E5e1WEyWz7MFIPztjCrmBMEgv4Zhogk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzA2LzM0LzIx/LzM2MF9GXzIwNjM0/MjE3OV90MXJacm05/Mzg3bnA2QUVPOGxp/YlF0T2JBWVkwaVI0/Uy5qcGc",
  "https://images.unsplash.com/photo-1504782095032-7c5b9f1fcce9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://img.freepik.com/free-photo/male-dj-taking-care-music-entertainment-party_23-2149658401.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://imgs.search.brave.com/dFLrLKeIC8u-mTecFxO0niwbr25pxJUV8UDVvuhd4N8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbmdh/Z2U0bW9yZS5jb20v/YmxvZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMC9ESi1O/WUstMS5qcGc",
  
];

// Gallery images
const decoratorGalleryImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
  "https://images.unsplash.com/photo-1528041119984-da3a9f8a04e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

const catererGalleryImages = [
  "https://images.unsplash.com/photo-1486428263684-28ec9e4f2584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
  "https://images.unsplash.com/photo-1565538447911-5a91f9e8a88d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
];

const photographerGalleryImages = [
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1537728726292-93b315301b22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

const floristGalleryImages = [
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1464699908537-0954e50189af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1587584565072-bf19befae197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1508610048659-a06b669e3321?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
];

// New gallery images
const weddingHallGalleryImages = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  "https://images.unsplash.com/photo-1505944357431-27579db47222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1519741347686-c1e331ec5a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

const bridalWearGalleryImages = [
  "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80",
  "https://images.unsplash.com/photo-1594552072238-5fa087105add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1585241920873-a914432df4f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1541250848058-6df6d5bb5519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

const makeupArtistGalleryImages = [
  "https://images.unsplash.com/photo-1556159968-8b3c1d577a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1457972851104-4fd469440bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80",
  "https://images.unsplash.com/photo-1644623091876-04c143879a93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
];

const djMusicianGalleryImages = [
  "https://images.unsplash.com/photo-1571266028243-251f2ac695d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://img.freepik.com/free-photo/portrait-man-working-as-musician_23-2151230042.jpg?ga=GA1.1.1138397977.1745520527&semt=ais_hybrid&w=740",
  "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1483393458019-411bc6bd104e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
];

// Services for each category
const decoratorServices = [
  "Complete venue decoration",
  "Theme-based setups",
  "Lighting arrangements",
  "Stage design",
  "Table settings",
  "Entrance decor",
  "Floral installations",
  "Backdrop creation",
  "Props and furniture rental",
  "Custom installations"
];

const catererServices = [
  "Multi-cuisine menu options",
  "Live cooking stations",
  "Specialized dietary accommodations",
  "Dessert bars",
  "Beverage services",
  "Traditional delicacies",
  "Food presentation design",
  "Staff service",
  "Equipment rental",
  "Menu tasting sessions"
];

const photographerServices = [
  "Pre-wedding photoshoots",
  "Candid photography",
  "Traditional posed photographs",
  "Cinematic videography",
  "Drone shots",
  "Same-day edits",
  "Photo albums",
  "Digital galleries",
  "Family portraits",
  "Video highlights"
];

const floristServices = [
  "Bridal bouquets",
  "Ceremony arrangements",
  "Reception centerpieces",
  "Entrance decorations",
  "Mandap/altar flowers",
  "Garlands and jewelry",
  "Car decorations",
  "Boutonnières and corsages",
  "Custom installations",
  "Sustainable/eco-friendly options"
];

// New category services
const weddingHallServices = [
  "Venue rental",
  "Customizable floor plans",
  "In-house catering options",
  "Decoration coordination",
  "Sound and lighting systems",
  "Valet parking",
  "Accommodation for guests",
  "Bridal suite access",
  "Event coordination",
  "Multi-day package options"
];

const bridalWearServices = [
  "Custom bridal lehengas/sarees",
  "Made-to-measure services",
  "Bridal consultations",
  "Outfit styling advice",
  "Accessory matching",
  "Groom coordination outfits",
  "Family wedding attire",
  "Alteration services",
  "Post-wedding outfit customization",
  "Heritage/traditional designs"
];

const makeupArtistServices = [
  "Bridal makeup",
  "Family makeup packages",
  "Hair styling",
  "Pre-wedding makeup trials",
  "Airbrush makeup options",
  "Traditional and contemporary styles",
  "Home services available",
  "Group packages",
  "HD photography-ready makeup",
  "Extended wear formulas"
];

const djMusicianServices = [
  "Wedding reception DJ services",
  "Live band performances",
  "Sangeet ceremony music",
  "Specialized wedding playlists",
  "Sound and lighting equipment",
  "MC/host services",
  "Background music for ceremonies",
  "Interactive audience participation",
  "Custom song mixes/mashups",
  "Traditional and modern music blend"
];

// Price ranges
const priceRanges = ["$", "$$", "$$$", "$$$$"];

// Email domains
const emailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "company.com"];

// Generate random email
const generateEmail = (name: string): string => {
  const namePart = name.toLowerCase().replace(/\s/g, "");
  const domain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
  return `${namePart}@${domain}`;
};

// Generate business listings for Delhi
const generateVendors = (): Vendor[] => {
  let id = 1;
  const vendors: Vendor[] = [];

  // Sample data for Delhi
  const delhiDecorators = [
    { name: "Dreamz Wedding Planner", location: "Karol Bagh, Delhi", phone: "9876543210" },
    { name: "Ferns N Petals Events", location: "South Delhi", phone: "9812345678" },
    { name: "Elegant Affairs", location: "Lajpat Nagar, Delhi", phone: "9998765432" },
    { name: "Shagun Decor", location: "Rohini, Delhi", phone: "9871234567" },
    { name: "Blossom Events", location: "Vasant Kunj, Delhi", phone: "9654321098" },
    { name: "Royal Decor", location: "Pitampura, Delhi", phone: "9819876543" },
    { name: "Celebration Concepts", location: "Greater Kailash, Delhi", phone: "9991234567" },
    { name: "Divine Decor", location: "Dwarka, Delhi", phone: "9877896543" },
    { name: "Festive Frames", location: "Janakpuri, Delhi", phone: "9650987654" },
    { name: "Glamour Events", location: "Connaught Place, Delhi", phone: "9811112233" }
  ];

  const delhiCaterers = [
    { name: "Bikanervala", location: "Connaught Place, Delhi", phone: "9876541234" },
    { name: "Kwality Catering", location: "South Delhi", phone: "9812348765" },
    { name: "Chaat Chowk", location: "Karol Bagh, Delhi", phone: "9998761234" },
    { name: "Taste of Punjab", location: "Rohini, Delhi", phone: "9871239876" },
    { name: "Sagar Ratna Catering", location: "Dwarka, Delhi", phone: "9654325678" },
    { name: "Delhi Darbar", location: "Lajpat Nagar, Delhi", phone: "9819871234" },
    { name: "Spice Kitchen", location: "Pitampura, Delhi", phone: "9991239876" },
    { name: "Urban Tadka", location: "Greater Kailash, Delhi", phone: "9877891234" },
    { name: "Food Fiesta", location: "Janakpuri, Delhi", phone: "9650981234" },
    { name: "Royal Feast", location: "Vasant Kunj, Delhi", phone: "9811119876" }
  ];

  const delhiPhotographers = [
    { name: "FotoZone", location: "South Delhi", phone: "9876545678" },
    { name: "Candid Clicks", location: "Karol Bagh, Delhi", phone: "9812341234" },
    { name: "Shutterbug Studio", location: "Rohini, Delhi", phone: "9998765678" },
    { name: "Pixel Perfect", location: "Dwarka, Delhi", phone: "9871231234" },
    { name: "Moments by Manoj", location: "Lajpat Nagar, Delhi", phone: "9654329876" },
    { name: "SnapSavvy", location: "Greater Kailash, Delhi", phone: "9819875678" },
    { name: "Eternal Frames", location: "Pitampura, Delhi", phone: "9991231234" },
    { name: "DreamLens", location: "Vasant Kunj, Delhi", phone: "9877895678" },
    { name: "Focus Fusion", location: "Janakpuri, Delhi", phone: "9650985678" },
    { name: "Visionary Shots", location: "Connaught Place, Delhi", phone: "9811115678" }
  ];

  const delhiFlorists = [
    { name: "Ferns N Petals", location: "South Delhi", phone: "9876549876" },
    { name: "Blooming Buds", location: "Karol Bagh, Delhi", phone: "9812345670" },
    { name: "Floral Fantasy", location: "Rohini, Delhi", phone: "9998769876" },
    { name: "Petal Power", location: "Dwarka, Delhi", phone: "9871235670" },
    { name: "Rose Haven", location: "Lajpat Nagar, Delhi", phone: "9654321234" },
    { name: "Lily Lane", location: "Greater Kailash, Delhi", phone: "9819879876" },
    { name: "Blossom Boutique", location: "Pitampura, Delhi", phone: "9991235670" },
    { name: "Flower Frenzy", location: "Vasant Kunj, Delhi", phone: "9877899876" },
    { name: "Petals & More", location: "Janakpuri, Delhi", phone: "9650989876" },
    { name: "Garden Glory", location: "Connaught Place, Delhi", phone: "9811111234" }
  ];

  // New Delhi vendors
  const delhiWeddingHalls = [
    { name: "The Leela Palace", location: "Chanakyapuri, Delhi", phone: "011-39331234" },
    { name: "Taj Palace", location: "Sardar Patel Marg, Delhi", phone: "011-26110202" },
    { name: "Hyatt Regency", location: "Bhikaiji Cama Place, Delhi", phone: "011-26791234" },
    { name: "ITC Maurya", location: "Diplomatic Enclave, Delhi", phone: "011-26112233" },
    { name: "The Grand", location: "Vasant Kunj, Delhi", phone: "011-26771234" },
    { name: "Crowne Plaza", location: "Okhla, Delhi", phone: "011-46462000" },
    { name: "Jaypee Siddharth", location: "Rajendra Place, Delhi", phone: "011-25760000" },
    { name: "Surya Hotel", location: "New Friends Colony, Delhi", phone: "011-26835070" },
    { name: "Radisson Blu", location: "Dwarka, Delhi", phone: "011-30903000" },
    { name: "Shangri-La Eros", location: "Connaught Place, Delhi", phone: "011-41191000" }
  ];

  const delhiBridalWear = [
    { name: "Sabyasachi Mukherjee", location: "Mehrauli, Delhi", phone: "011-41071000" },
    { name: "Manish Malhotra", location: "South Extension, Delhi", phone: "011-41002100" },
    { name: "Tarun Tahiliani", location: "Defence Colony, Delhi", phone: "011-46661100" },
    { name: "Anita Dongre", location: "Greater Kailash, Delhi", phone: "011-41003333" },
    { name: "Ritu Kumar", location: "Connaught Place, Delhi", phone: "011-41517100" },
    { name: "JJ Valaya", location: "Sultanpur, Delhi", phone: "011-40515400" },
    { name: "Falguni Shane Peacock", location: "Hauz Khas, Delhi", phone: "011-41668800" },
    { name: "Neeta Lulla", location: "Lajpat Nagar, Delhi", phone: "011-41005555" },
    { name: "Shantanu & Nikhil", location: "Defence Colony, Delhi", phone: "011-41006666" },
    { name: "Kalki Fashion", location: "South Extension, Delhi", phone: "011-41810000" }
  ];

  const delhiMakeupArtists = [
    { name: "Chandni Singh Studio", location: "South Delhi", phone: "9810054321" },
    { name: "Simran Kalra", location: "Karol Bagh, Delhi", phone: "9876543210" },
    { name: "Avantika Kapur", location: "Greater Kailash, Delhi", phone: "9998765432" },
    { name: "Samridhi Mitra", location: "Rohini, Delhi", phone: "9871234567" },
    { name: "Aakriti Kochar", location: "Vasant Kunj, Delhi", phone: "9654321098" },
    { name: "Anchal Kumar", location: "Pitampura, Delhi", phone: "9819876543" },
    { name: "Tanvi Kochar", location: "Dwarka, Delhi", phone: "9991234567" },
    { name: "Preeti Saini", location: "Connaught Place, Delhi", phone: "9877896543" },
    { name: "Kashika Kapur", location: "Lajpat Nagar, Delhi", phone: "9650987654" },
    { name: "Shivani Goyal", location: "Janakpuri, Delhi", phone: "9811112233" }
  ];

  const delhiDjMusicians = [
    { name: "DJ Aqeel", location: "South Delhi", phone: "9876541234" },
    { name: "DJ Suketu", location: "Connaught Place, Delhi", phone: "9812348765" },
    { name: "DJ Barkha Kaul", location: "Karol Bagh, Delhi", phone: "9998761234" },
    { name: "DJ Lemon", location: "Rohini, Delhi", phone: "9871239876" },
    { name: "DJ NYK", location: "Dwarka, Delhi", phone: "9654325678" },
    { name: "DJ Chetas", location: "Greater Kailash, Delhi", phone: "9819871234" },
    { name: "DJ Rink", location: "Pitampura, Delhi", phone: "9991239876" },
    { name: "DJ Shilpi Sharma", location: "Vasant Kunj, Delhi", phone: "9877891234" },
    { name: "DJ Akhtar", location: "Janakpuri, Delhi", phone: "9650981234" },
    { name: "DJ Sumit Sethi", location: "Lajpat Nagar, Delhi", phone: "9811119876" }
  ];

  // Add Delhi Decorators
  delhiDecorators.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'decorators',
      image: decoratorImages[index % decoratorImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Specialized in creating beautiful and elegant wedding decorations that transform venues into magical spaces. We focus on customized themes and detailed setups.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: decoratorGalleryImages,
      services: decoratorServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Delhi Caterers
  delhiCaterers.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'caterers',
      image: catererImages[index % catererImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Offering exquisite cuisine with diverse menu options for wedding ceremonies and receptions. We pride ourselves on quality ingredients and professional service.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: catererGalleryImages,
      services: catererServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Delhi Photographers
  delhiPhotographers.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'photographers',
      image: photographerImages[index % photographerImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Capturing the most precious moments of your special day with creativity and professionalism. Specializing in both traditional and candid photography styles.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: photographerGalleryImages,
      services: photographerServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Delhi Florists
  delhiFlorists.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'florists',
      image: floristImages[index % floristImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Creating stunning floral arrangements that bring your wedding vision to life. We work with fresh, seasonal flowers to design unique and beautiful displays.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: floristGalleryImages,
      services: floristServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Delhi Wedding Halls
  delhiWeddingHalls.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'wedding-halls',
      image: weddingHallImages[index % weddingHallImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Luxurious wedding venue offering elegant spaces for your special day. We provide comprehensive services including catering, decoration, and event coordination.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: weddingHallGalleryImages,
      services: weddingHallServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Delhi Bridal Wear
  delhiBridalWear.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'bridal-wear',
      image: bridalWearImages[index % bridalWearImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Renowned designer specializing in exquisite bridal attire that combines traditional craftsmanship with contemporary designs. We offer custom fittings and styling.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: bridalWearGalleryImages,
      services: bridalWearServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Delhi Makeup Artists
  delhiMakeupArtists.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'makeup-artists',
      image: makeupArtistImages[index % makeupArtistImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Expert makeup artist specializing in bridal makeup that enhances natural beauty. We use premium products and techniques for a flawless, long-lasting look.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: makeupArtistGalleryImages,
      services: makeupArtistServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Delhi DJ/Musicians
  delhiDjMusicians.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'dj-musicians',
      image: djMusicianImages[index % djMusicianImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Delhi",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Professional DJ/musician providing high-energy entertainment for weddings. We specialize in creating custom playlists and live performances to match your style.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: djMusicianGalleryImages,
      services: djMusicianServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Define the new city data structures
  const mumbaiWeddingHalls = [
    { name: "Taj Mahal Palace", location: "Colaba, Mumbai", phone: "022-66653366" },
    { name: "JW Marriott", location: "Juhu, Mumbai", phone: "022-66933000" },
    { name: "The Oberoi", location: "Nariman Point, Mumbai", phone: "022-66325757" },
    { name: "Grand Hyatt", location: "Santacruz, Mumbai", phone: "022-66761234" },
    { name: "Sahara Star", location: "Vile Parle, Mumbai", phone: "022-39895000" },
    { name: "Trident", location: "Bandra Kurla, Mumbai", phone: "022-66727777" },
    { name: "ITC Maratha", location: "Andheri, Mumbai", phone: "022-28303030" },
    { name: "The Leela", location: "Andheri East, Mumbai", phone: "022-66911234" },
    { name: "Hilton", location: "Andheri, Mumbai", phone: "022-28380000" },
    { name: "Sofitel", location: "BKC, Mumbai", phone: "022-61175000" }
  ];

  const mumbaiBridalWear = [
    { name: "Manish Malhotra", location: "Bandra, Mumbai", phone: "022-26499999" },
    { name: "Sabyasachi Mukherjee", location: "Kala Ghoda, Mumbai", phone: "022-22884444" },
    { name: "Abu Jani Sandeep Khosla", location: "Juhu, Mumbai", phone: "022-26206666" },
    { name: "Anita Dongre", location: "Santacruz, Mumbai", phone: "022-26057777" },
    { name: "Neeta Lulla", location: "Andheri, Mumbai", phone: "022-26332222" },
    { name: "Ritu Kumar", location: "Colaba, Mumbai", phone: "022-22852222" },
    { name: "Tarun Tahiliani", location: "Lower Parel, Mumbai", phone: "022-24932222" },
    { name: "Falguni Shane Peacock", location: "Bandra, Mumbai", phone: "022-26488888" },
    { name: "Shantanu & Nikhil", location: "Worli, Mumbai", phone: "022-24955555" },
    { name: "Kalki Fashion", location: "Andheri, Mumbai", phone: "022-40107777" }
  ];

  const mumbaiMakeupArtists = [
    { name: "Daniel Bauer", location: "Bandra, Mumbai", phone: "9820054321" },
    { name: "Mickey Contractor", location: "Juhu, Mumbai", phone: "9876543210" },
    { name: "Namrata Soni", location: "Andheri, Mumbai", phone: "9998765432" },
    { name: "Cory Walia", location: "Colaba, Mumbai", phone: "9871234567" },
    { name: "Clint Fernandes", location: "Santacruz, Mumbai", phone: "9654321098" },
    { name: "Marianna Mukuchyan", location: "Worli, Mumbai", phone: "9819876543" },
    { name: "Elton Fernandez", location: "Lower Parel, Mumbai", phone: "9991234567" },
    { name: "Puja Taluja", location: "Bandra, Mumbai", phone: "9877896543" },
    { name: "Mehera Kolah", location: "Andheri, Mumbai", phone: "9650987654" },
    { name: "Shaan Muttathil", location: "Juhu, Mumbai", phone: "9811112233" }
  ];

  const mumbaiDjMusicians = [
    { name: "DJ Nucleya", location: "Andheri, Mumbai", phone: "9821054321" },
    { name: "DJ Pearl", location: "Bandra, Mumbai", phone: "9876541234" },
    { name: "DJ Akbar Sami", location: "Juhu, Mumbai", phone: "9812348765" },
    { name: "DJ Khushi", location: "Colaba, Mumbai", phone: "9998761234" },
    { name: "DJ Vaggy", location: "Worli, Mumbai", phone: "9871239876" },
    { name: "DJ Clement", location: "Santacruz, Mumbai", phone: "9654325678" },
    { name: "DJ Makasi", location: "Lower Parel, Mumbai", phone: "9819871234" },
    { name: "DJ Shadow", location: "Andheri, Mumbai", phone: "9991239876" },
    { name: "DJ Ganesh", location: "Bandra, Mumbai", phone: "9877891234" },
    { name: "DJ Harsh Bhutani", location: "Juhu, Mumbai", phone: "9650981234" }
  ];

  // Add other cities (Mumbai, Bangalore, Chennai, Kolkata)
  // Generate data for other cities including the new categories
  const cities = ["Mumbai", "Bangalore", "Chennai", "Kolkata"];
  const areas = {
    "Mumbai": ["Bandra", "Andheri", "Juhu", "Colaba", "Worli", "Dadar", "Powai", "Malad", "Goregaon", "Churchgate"],
    "Bangalore": ["Koramangala", "Indiranagar", "Whitefield", "JP Nagar", "MG Road", "Jayanagar", "HSR Layout", "Electronic City", "Malleshwaram", "Brigade Road"],
    "Chennai": ["T Nagar", "Adyar", "Nungambakkam", "Anna Nagar", "Mylapore", "Velachery", "Besant Nagar", "Porur", "OMR", "ECR"],
    "Kolkata": ["Park Street", "Salt Lake", "New Town", "Ballygunge", "Howrah", "Alipore", "Gariahat", "Behala", "Dum Dum", "Esplanade"]
  };

  const businessTypes = {
    "decorators": [
      "Royal Weddings", "Dream Decorators", "Elegant Setups", "Divine Decor", "Creative Concepts",
      "Wedding Wonders", "Artistic Arrangements", "Festive Designs", "Glamour Decorations", "Perfect Planners"
    ],
    "caterers": [
      "Spice Delight", "Food Masters", "Gourmet Kitchen", "Taste Buds", "Culinary Experts", 
      "Flavor Junction", "Royal Feast", "Food Fiesta", "Delicious Bites", "Catering Kings"
    ],
    "photographers": [
      "Moment Catchers", "Picture Perfect", "Lens Masters", "Shutter Art", "Click Chronicles",
      "Frame Fantasy", "Capture Kings", "Visual Stories", "Photo Finesse", "Image Crafters"
    ],
    "florists": [
      "Floral Touch", "Bloom Box", "Petal Paradise", "Rose Garden", "Flower Fantasy",
      "Botanical Beauty", "Blossom World", "Green Thumb", "Nature's Art", "Floral Fantasies"
    ]
  };

  // Generate phone numbers
  const generatePhone = () => {
    return "9" + Math.floor(Math.random() * 900000000 + 100000000);
  };

  // Add Mumbai new vendor categories
  // Add Mumbai Wedding Halls
  mumbaiWeddingHalls.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'wedding-halls',
      image: weddingHallImages[index % weddingHallImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Mumbai",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Luxurious wedding venue offering elegant spaces for your special day. We provide comprehensive services including catering, decoration, and event coordination.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: weddingHallGalleryImages,
      services: weddingHallServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Mumbai Bridal Wear
  mumbaiBridalWear.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'bridal-wear',
      image: bridalWearImages[index % bridalWearImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Mumbai",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Renowned designer specializing in exquisite bridal attire that combines traditional craftsmanship with contemporary designs. We offer custom fittings and styling.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: bridalWearGalleryImages,
      services: bridalWearServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Mumbai Makeup Artists
  mumbaiMakeupArtists.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'makeup-artists',
      image: makeupArtistImages[index % makeupArtistImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Mumbai",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Expert makeup artist specializing in bridal makeup that enhances natural beauty. We use premium products and techniques for a flawless, long-lasting look.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: makeupArtistGalleryImages,
      services: makeupArtistServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Add Mumbai DJ/Musicians
  mumbaiDjMusicians.forEach((business, index) => {
    vendors.push({
      id: id++,
      name: business.name,
      category: 'dj-musicians',
      image: djMusicianImages[index % djMusicianImages.length],
      rating: 3.5 + Math.random() * 1.5,
      location: business.location,
      city: "Mumbai",
      address: business.location,
      phone: business.phone,
      email: generateEmail(business.name),
      description: "Professional DJ/musician providing high-energy entertainment for weddings. We specialize in creating custom playlists and live performances to match your style.",
      price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
      gallery: djMusicianGalleryImages,
      services: djMusicianServices.slice(0, 5 + Math.floor(Math.random() * 5))
    });
  });

  // Generate data for other cities
  cities.forEach(city => {
    if (city !== "Mumbai") { // We've already added Mumbai data
      const cityAreas = areas[city as keyof typeof areas];
      
      // Generate for each category
      Object.keys(businessTypes).forEach(category => {
        const categoryBusinesses = businessTypes[category as keyof typeof businessTypes];
        const categoryImages = category === 'decorators' ? decoratorImages : 
                              category === 'caterers' ? catererImages :
                              category === 'photographers' ? photographerImages : floristImages;
        
        const categoryGalleryImages = category === 'decorators' ? decoratorGalleryImages : 
                                    category === 'caterers' ? catererGalleryImages :
                                    category === 'photographers' ? photographerGalleryImages : floristGalleryImages;
        
        const categoryServices = category === 'decorators' ? decoratorServices : 
                                category === 'caterers' ? catererServices :
                                category === 'photographers' ? photographerServices : floristServices;
        
        // Generate 10 businesses for each category in each city
        for (let i = 0; i < 10; i++) {
          const businessName = categoryBusinesses[i];
          const area = cityAreas[i];
          const location = `${area}, ${city}`;
          const phone = generatePhone();
          
          vendors.push({
            id: id++,
            name: businessName,
            category: category as VendorCategory,
            image: categoryImages[i % categoryImages.length],
            rating: 3.5 + Math.random() * 1.5,
            location: location,
            city: city,
            address: location,
            phone: phone,
            email: generateEmail(businessName),
            description: category === 'decorators' 
                        ? "Specialized in creating beautiful and elegant wedding decorations that transform venues into magical spaces."
                        : category === 'caterers'
                        ? "Offering exquisite cuisine with diverse menu options for wedding ceremonies and receptions."
                        : category === 'photographers'
                        ? "Capturing the most precious moments of your special day with creativity and professionalism."
                        : "Creating stunning floral arrangements that bring your wedding vision to life.",
            price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
            gallery: categoryGalleryImages,
            services: categoryServices.slice(0, 5 + Math.floor(Math.random() * 5))
          });
        }
      });

      // Add the new vendor categories for other cities (Bangalore, Chennai, Kolkata)
      // We'll generate 10 vendors for each new category in each city
      
      // Wedding Halls for this city
      for (let i = 0; i < 10; i++) {
        const area = cityAreas[i];
        const location = `${area}, ${city}`;
        const phone = generatePhone();
        const businessName = `${city} Grand Hall ${i+1}`;
        
        vendors.push({
          id: id++,
          name: businessName,
          category: 'wedding-halls',
          image: weddingHallImages[i % weddingHallImages.length],
          rating: 3.5 + Math.random() * 1.5,
          location: location,
          city: city,
          address: location,
          phone: phone,
          email: generateEmail(businessName),
          description: "Luxurious wedding venue offering elegant spaces for your special day. We provide comprehensive services including catering, decoration, and event coordination.",
          price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
          gallery: weddingHallGalleryImages,
          services: weddingHallServices.slice(0, 5 + Math.floor(Math.random() * 5))
        });
      }
      
      // Bridal Wear for this city
      for (let i = 0; i < 10; i++) {
        const area = cityAreas[i];
        const location = `${area}, ${city}`;
        const phone = generatePhone();
        const businessName = `${city} Bridal Couture ${i+1}`;
        
        vendors.push({
          id: id++,
          name: businessName,
          category: 'bridal-wear',
          image: bridalWearImages[i % bridalWearImages.length],
          rating: 3.5 + Math.random() * 1.5,
          location: location,
          city: city,
          address: location,
          phone: phone,
          email: generateEmail(businessName),
          description: "Renowned designer specializing in exquisite bridal attire that combines traditional craftsmanship with contemporary designs. We offer custom fittings and styling.",
          price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
          gallery: bridalWearGalleryImages,
          services: bridalWearServices.slice(0, 5 + Math.floor(Math.random() * 5))
        });
      }
      
      // Makeup Artists for this city
      for (let i = 0; i < 10; i++) {
        const area = cityAreas[i];
        const location = `${area}, ${city}`;
        const phone = generatePhone();
        const businessName = `${city} Beauty Studio ${i+1}`;
        
        vendors.push({
          id: id++,
          name: businessName,
          category: 'makeup-artists',
          image: makeupArtistImages[i % makeupArtistImages.length],
          rating: 3.5 + Math.random() * 1.5,
          location: location,
          city: city,
          address: location,
          phone: phone,
          email: generateEmail(businessName),
          description: "Expert makeup artist specializing in bridal makeup that enhances natural beauty. We use premium products and techniques for a flawless, long-lasting look.",
          price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
          gallery: makeupArtistGalleryImages,
          services: makeupArtistServices.slice(0, 5 + Math.floor(Math.random() * 5))
        });
      }
      
      // DJ/Musicians for this city
      for (let i = 0; i < 10; i++) {
        const area = cityAreas[i];
        const location = `${area}, ${city}`;
        const phone = generatePhone();
        const businessName = `${city} Sound Masters ${i+1}`;
        
        vendors.push({
          id: id++,
          name: businessName,
          category: 'dj-musicians',
          image: djMusicianImages[i % djMusicianImages.length],
          rating: 3.5 + Math.random() * 1.5,
          location: location,
          city: city,
          address: location,
          phone: phone,
          email: generateEmail(businessName),
          description: "Professional DJ/musician providing high-energy entertainment for weddings. We specialize in creating custom playlists and live performances to match your style.",
          price: priceRanges[Math.floor(Math.random() * priceRanges.length)],
          gallery: djMusicianGalleryImages,
          services: djMusicianServices.slice(0, 5 + Math.floor(Math.random() * 5))
        });
      }
    }
  });

  return vendors;
};

export const vendors = generateVendors();

export const getVendorById = (id: number): Vendor | undefined => {
  return vendors.find(vendor => vendor.id === id);
};

export const getFeaturedVendors = (count: number = 6): Vendor[] => {
  // Shuffle the vendors array
  const shuffled = [...vendors].sort(() => 0.5 - Math.random());
  // Get the first 'count' elements
  return shuffled.slice(0, count);
};

export const getVendorsByCategory = (category: string): Vendor[] => {
  if (category === 'all') return vendors;
  return vendors.filter(vendor => vendor.category === category);
};

export const getVendorsByLocation = (location: string): Vendor[] => {
  if (!location) return vendors;
  const lowercaseLocation = location.toLowerCase();
  return vendors.filter(vendor => 
    vendor.location.toLowerCase().includes(lowercaseLocation) || 
    vendor.city.toLowerCase().includes(lowercaseLocation)
  );
};

export const filterVendors = (
  location: string,
  category: string = 'all',
  minRating: number = 0,
  priceRange: string[] = []
): Vendor[] => {
  return vendors.filter(vendor => {
    const matchesLocation = !location || 
                           vendor.location.toLowerCase().includes(location.toLowerCase()) ||
                           vendor.city.toLowerCase().includes(location.toLowerCase());
    
    const matchesCategory = category === 'all' || vendor.category === category;
    
    const matchesRating = vendor.rating >= minRating;
    
    const matchesPrice = priceRange.length === 0 || priceRange.includes(vendor.price);
    
    return matchesLocation && matchesCategory && matchesRating && matchesPrice;
  });
};
