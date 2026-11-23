// Semua teks & link website ada di file ini — ubah di sini tanpa menyentuh komponen.

export const company = {
  short: 'CMB',
  name: 'CV. Chandra Maju Bersama',
  founded: 2021,
  tagline: 'Lembut di kulit, kuat saat dipakai, hemat di kantong.',
  shopee: 'https://shopee.co.id/auguststore888?entryPoint=ShopBySearch&searchKeyword=auguststore',
  shopeeName: 'auguststore888',
  maps: 'https://maps.app.goo.gl/nXnYEGTHGzAVqX8z9',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=-6.1855379,106.6847046',
  mapsQuery: 'Chandra Maju Bersama, Jl. Galaxy Raya No.8B Blk G2, Cipondoh Indah, Kota Tangerang, Banten 15148',
  address: 'Jl. Galaxy Raya No.8B Blk G2, RT.001/RW.001, Cipondoh Indah, Kota Tangerang, Banten 15148',
  phone: '+62 812-2313-8888',
  whatsapp: '6281223138888',
  // TODO: ganti dengan email & jam buka yang sebenarnya
  email: 'info@cmb-tissue.co.id',
  hours: 'Senin – Sabtu, 08.00 – 17.00 WIB',
}

export const nav = [
  { label: 'Katalog', href: '#katalog' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'FAQ', href: '#faq' },
]

export const topbar = 'Lembut di kulit, kuat saat dipakai — eceran & grosir'

export const featuresIntro = {
  title: 'Kualitas yang terasa di setiap lembar.',
  text: 'Tissue memang terlihat sederhana — sampai Anda memakai yang kualitasnya kurang baik. Karena itu kami memperhatikan hal-hal kecil yang membuat perbedaan besar.',
}

export const features = [
  { icon: 'feather', title: 'Lembut di kulit', text: 'Tekstur halus yang nyaman untuk wajah dan tangan, enak dipakai berulang kali sepanjang hari.' },
  { icon: 'layers', title: 'Kuat, tidak mudah sobek', text: 'Lapisan yang padat membuat tissue tetap utuh saat dipakai — satu lembar sudah bekerja maksimal.' },
  { icon: 'drop', title: 'Daya serap tinggi', text: 'Cepat menyerap air, minyak dan tumpahan, sehingga semuanya kembali bersih dalam sekali usap.' },
  { icon: 'shield', title: 'Higienis & rapi', text: 'Dikemas rapi dan tertutup, menjaga tissue tetap bersih sampai ke tangan Anda.' },
  { icon: 'tag', title: 'Harga bersahabat', text: 'Kualitas yang baik tidak harus mahal. Harga kami masuk akal untuk rumah tangga maupun usaha.' },
  { icon: 'truck', title: 'Stok selalu siap', text: 'Stok terjaga untuk eceran maupun grosir, siap dikirim ke seluruh Indonesia melalui Shopee.' },
]

export const catalogIntro = {
  title: 'Katalog Produk',
  text: 'Jelajahi tissue produksi CMB dan merek-merek pilihan yang kami sediakan — untuk rumah, kantor, hotel maupun usaha kuliner. Tanyakan harga eceran & grosir langsung lewat WhatsApp, atau belanja di Shopee.',
}

// Produk CMB (foto PNG latar transparan di public/products/)
export const products = [
  { name: 'Trecy Economy Facial Tissue Embossed', brand: 'Trecy', category: 'Facial Tissue', image: '/products/trecy-economy.png' },
  { name: 'Trecy Facial Tissue 1 Kg', brand: 'Trecy', category: 'Facial Tissue', image: '/products/trecy-facial-1kg.png' },
  { name: 'Trecy Facial Tissue Belah', brand: 'Trecy', category: 'Facial Tissue', image: '/products/trecy-belah.png' },
]

// Logo disimpan di public/brands/. Merek tanpa logo (logo: null) tampil sebagai teks.
// `mono: true` untuk logo berwarna putih.
export const brands = [
  { name: 'Paseo', logo: '/brands/paseo.png', mono: true },
  { name: 'Nice', logo: '/brands/nice.png' },
  { name: 'Tessa', logo: '/brands/tessa.png' },
  { name: 'Jolly', logo: '/brands/jolly.png' },
  { name: 'Livi', logo: '/brands/livi.png' },
  { name: 'Multi', logo: '/brands/multi.png' },
  { name: 'Montiss', logo: '/brands/montiss.png' },
  { name: 'Clean Plus', logo: '/brands/cleanplus.png' },
  { name: 'See-U', logo: '/brands/seeu.png' },
  { name: 'Pulpies', logo: '/brands/pulpies.png' },
  { name: 'Favour', logo: '/brands/favour.png' },
  { name: 'Snowy', logo: '/brands/snowy.png' },
  { name: 'Yunikon', logo: '/brands/yunikon.png' },
]

export const locationIntro = {
  title: 'Mampir ke toko kami.',
  text: 'Toko kami berada di kawasan Cipondoh, Kota Tangerang. Datang untuk belanja eceran, mengambil pesanan grosir, atau sekadar bertanya — kami senang menyambut Anda.',
}

// TODO: pastikan jawaban sesuai dengan kebijakan toko
export const faqIntro = {
  title: 'Pertanyaan yang sering diajukan.',
  text: 'Belum menemukan jawabannya? Tim kami siap membantu lewat WhatsApp.',
}

export const faqs = [
  { q: 'Apakah bisa membeli dalam jumlah grosir?', a: 'Bisa. Kami melayani pembelian eceran maupun grosir untuk reseller, toko, hotel, kantor dan usaha kuliner. Hubungi kami via WhatsApp untuk mendapatkan penawaran harga sesuai jumlah pesanan Anda.' },
  { q: 'Di mana saya bisa membeli produk CMB?', a: `Anda dapat berbelanja di toko online kami di Shopee (${company.shopeeName}) atau datang langsung ke toko kami di Jl. Galaxy Raya No.8B, Cipondoh, Kota Tangerang.` },
  { q: 'Apakah CMB hanya menjual produk merek CMB?', a: 'Tidak. Selain produk CMB, kami juga menjual tissue dari merek Paseo, Nice, Tessa, Jolly, Livi, Multi, Montiss, Clean Plus, See-U, Pulpies, Favour, Snowy dan Yunikon. Tanyakan ketersediaan stok merek tertentu melalui WhatsApp.' },
  { q: 'Apakah pengiriman tersedia ke luar kota?', a: 'Ya. Pembelian melalui Shopee dapat dikirim ke seluruh Indonesia menggunakan jasa ekspedisi yang tersedia di Shopee.' },
  { q: 'Metode pembayaran apa saja yang tersedia?', a: 'Untuk pembelian online, Anda dapat memakai semua metode pembayaran yang tersedia di Shopee. Untuk pembayaran di toko, silakan konfirmasi terlebih dahulu ke tim kami.' },
  { q: 'Apakah bisa memesan rutin untuk kantor atau usaha?', a: 'Tentu. Ceritakan kebutuhan Anda — jenis produk, jumlah dan jadwalnya — dan kami akan membantu menyiapkan pesanan Anda secara rutin.' },
  { q: 'Bagaimana jika ada kendala dengan pesanan saya?', a: 'Hubungi kami melalui WhatsApp atau fitur chat di Shopee. Kami akan membantu menyelesaikannya secepat mungkin.' },
]

export const footer = {
  blurb: 'Tissue lembut, kuat dan higienis untuk rumah dan usaha Anda. Maju bersama sejak 2021.',
}

// TODO: tinjau & sesuaikan cerita berikut dengan versi resmi perusahaan
export const about = {
  title: 'Maju bersama, dari selembar tissue.',
  lead: 'CMB lahir dari keyakinan sederhana: produk yang dipakai setiap hari harus bisa diandalkan setiap hari.',
  story: [
    'Didirikan pada tahun 2021 di Tangerang, Banten, CV. Chandra Maju Bersama (CMB) bergerak di bidang kertas dengan fokus pada produk tissue — mulai dari tissue wajah, toilet, dapur, hingga kebutuhan grosir untuk usaha.',
    'Nama "Maju Bersama" bukan sekadar nama. Kami tumbuh bersama pelanggan, reseller dan mitra usaha: ketika mereka berkembang, kami ikut berkembang. Karena itu kami menjaga kualitas produk, harga yang bersahabat, dan pelayanan yang ramah di setiap pesanan.',
    'Hari ini CMB melayani pelanggan melalui toko fisik kami di Cipondoh, Kota Tangerang, serta toko online di Shopee — sehingga produk kami mudah dijangkau, baik untuk kebutuhan rumah maupun usaha.',
  ],
  audiences: ['Rumah tangga', 'Perkantoran', 'Hotel & penginapan', 'Restoran & kafe', 'Reseller & toko'],
}
