
<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Primary Meta Tags -->
    <title>Mami Carwash | Layanan Home Service Cuci Mobil</title>
    <meta name="title" content="Mami Carwash | Layanan Home Service Cuci Mobil">
    <meta name="description" content="Mami Carwash adalah layanan Home Service Cuci Mobil Spesialis. Cuci mobil kapan saja dan di mana saja tanpa perlu antri. Booking sekarang!">
    <meta name="keywords" content="cuci mobil panggilan, home service carwash, cuci mobil di rumah, car detailing, Mami Carwash, cuci mobil terdekat">
    <meta name="author" content="Mami Carwash">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://mamicarwash.com/">

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://mamicarwash.com/">
    <meta property="og:title" content="Mami Carwash | Layanan Home Service Cuci Mobil">
    <meta property="og:description" content="Layanan Home Service Cuci Mobil Spesialis. Bebas antri, bebas biaya transport, mobil bersih mengkilap di rumah Anda.">
    <meta property="og:image" content="https://mamicarwash.com/carwash.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://mamicarwash.com/">
    <meta property="twitter:title" content="Mami Carwash | Layanan Home Service Cuci Mobil">
    <meta property="twitter:description" content="Layanan Home Service Cuci Mobil Spesialis. Bebas antri, bebas biaya transport, mobil bersih mengkilap di rumah Anda.">
    <meta property="twitter:image" content="https://mamicarwash.com/carwash.png">

    <!-- Favicon -->
    <link rel="icon" href="/logo.png" type="image/x-icon">
    <link rel="shortcut icon" href="/logo.png" type="image/x-icon">
    <link rel="apple-touch-icon" href="/logo.png">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- AOS Animation -->
    <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
    
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                        bebas: ['Bebas Neue', 'sans-serif'],
                    },
                    colors: {
                        primary: '#00bcd4', // Cyan (Sesuai tema air sebelumnya)
                        primaryHover: '#0288d1', // Biru laut untuk efek hover
                        dark: '#111111',
                        wa: '#25D366'
                    }
                }
            }
        }
    </script>

    <style>
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        
        /* Floating WA animation */
        @keyframes pulse-wa {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .btn-wa {
            animation: pulse-wa 2s infinite;
        }
    </style>
</head>
<body class="bg-white text-dark font-sans antialiased overflow-x-hidden">

    <!-- Navbar -->
    <nav class="w-full flex items-center justify-between py-6 px-6 lg:px-12 bg-white relative z-50">
        <div class="text-2xl lg:text-3xl font-bebas tracking-widest text-dark cursor-pointer" onclick="window.scrollTo(0,0)">
            MAMI<span class="text-primary">_</span>CARWASH
        </div>
        <div class="hidden md:flex gap-10 text-sm font-semibold text-gray-800">
            <a href="#" class="hover:text-primary transition">Home</a>
            <a href="#info" class="hover:text-primary transition">Info Layanan</a>
            <a href="#paket" class="hover:text-primary transition">Paket Harga</a>
        </div>
        <a href="#booking" class="bg-primary text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-primaryHover transition shadow-lg shadow-cyan-500/30">
            Pesan Sekarang
        </a>
    </nav>

    <!-- Hero Section (Matching Reference Design) -->
    <header class="px-4 lg:px-12 pt-4 pb-20 bg-white flex flex-col items-center relative">
        
        <!-- Top Tag / Pill -->
        <div class="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full pr-6 pl-2 py-1.5 mb-2 z-10" data-aos="fade-down">
            <div class="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-xs">
                <i class="fa-solid fa-car"></i>
            </div>
            <span class="text-xs font-semibold text-gray-600">Booking home service cuci mobil spesialis</span>
        </div>

        <!-- Huge Main Title -->
        <h1 class="text-[15vw] md:text-[180px] lg:text-[220px] font-bebas text-dark leading-[0.8] text-center tracking-normal z-10 relative mt-4 mb-2 md:-mb-10 lg:-mb-16 select-none" data-aos="zoom-in" data-aos-duration="1000">
            HOME SERVICE
        </h1>

        <!-- Hero Image Container with Overlapping Cards -->
        <div class="w-full max-w-[1400px] relative mt-6" data-aos="fade-up" data-aos-delay="200">
            
            <!-- Image Wrapper -->
            <div class="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <!-- Kept requested original image -->
                <img src="carwash.png" alt="Carwash Detail" class="w-full h-[55vh] md:h-[75vh] object-cover object-center filter brightness-90">
            </div>
            
            <!-- Overlapping Cards (Bottom) -->
            <div class="relative -mt-24 mx-4 z-10 md:absolute md:bottom-8 md:left-8 md:right-8 md:mx-0 md:mt-0 flex flex-col md:flex-row gap-4 md:gap-6">
                
                <!-- Left Overlap Card -->
                <div class="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] flex-1 flex gap-4 items-center shadow-lg transform transition hover:-translate-y-2">
                    <div class="flex-1">
                        <p class="font-semibold text-dark text-lg md:text-xl leading-snug">Pelanggan adalah bagian terpenting dalam bisnis kami.</p>
                        <a href="#info" class="text-xs font-bold mt-6 inline-flex items-center text-gray-500 hover:text-primary transition group">
                            Baca Selengkapnya <i class="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                    </div>
                    <!-- Small inner image matching reference -->
                    <div class="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden hidden sm:block shadow-inner">
                        <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400&q=80" class="w-full h-full object-cover">
                    </div>
                </div>

                <!-- Right Overlap Card -->
                <div class="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] flex-1 flex flex-col justify-between shadow-lg transform transition hover:-translate-y-2">
                    <p class="font-medium text-gray-600 text-sm leading-relaxed mb-6">Pembersih mobil profesional kami memberikan pembersihan menyeluruh, interior & eksterior. Tanpa Anda harus keluar rumah.</p>
                    <div class="flex items-end gap-6 border-t border-gray-100 pt-4">
                        <div class="text-6xl font-bold text-dark font-bebas leading-none tracking-wider">4.8</div>
                        <div class="pb-1">
                            <p class="text-[10px] font-bold text-dark uppercase tracking-widest mb-1">150k Pelanggan Bahagia</p>
                            <div class="flex text-primary text-sm">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>

    <!-- Info / Advantages Section (Grid matching "Expert Car Detailing") -->
    <section id="info" class="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto bg-white">
        <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold font-sans text-dark max-w-4xl leading-[1.1] mb-12 tracking-tight" data-aos="fade-up">
            Layanan Spesialis: Dari Mobil Harian Hingga Mobil Mewah Anda Di Rumah.
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Card 1: Bebas Biaya -->
            <div class="relative rounded-[2rem] overflow-hidden h-[450px] group" data-aos="fade-up" data-aos-delay="100">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" class="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div class="absolute top-6 left-6">
                    <span class="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Keunggulan</span>
                </div>
                <div class="absolute bottom-8 left-8 right-8 text-white">
                    <h3 class="font-bebas text-5xl mb-3 tracking-wide">BEBAS BIAYA</h3>
                    <p class="text-sm font-light text-gray-300 leading-relaxed">Ongkos datang dan penggunaan listrik sepenuhnya <strong class="text-white">GRATIS</strong>. Anda cukup bayar harga paket cuci.</p>
                </div>
            </div>

            <!-- Card 2: Wajib Reservasi -->
            <div class="relative rounded-[2rem] overflow-hidden h-[450px] group" data-aos="fade-up" data-aos-delay="200">
                <img src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?w=800&q=80" class="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div class="absolute top-6 left-6">
                    <span class="bg-dark text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Informasi</span>
                </div>
                <div class="absolute bottom-8 left-8 right-8 text-white">
                    <h3 class="font-bebas text-5xl mb-3 tracking-wide">RESERVASI</h3>
                    <p class="text-sm font-light text-gray-300 leading-relaxed">Mohon lakukan reservasi minimal <strong class="text-white">2 jam sebelumnya</strong> agar tim bisa datang tepat waktu.</p>
                </div>
            </div>

            <!-- Card 3: Ketentuan Air -->
            <div class="relative rounded-[2rem] overflow-hidden h-[450px] group" data-aos="fade-up" data-aos-delay="300">
                <img src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=800&q=80" class="absolute inset-0 w-full h-full object-cover transition duration-1000 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div class="absolute top-6 left-6">
                    <span class="bg-dark text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Syarat</span>
                </div>
                <div class="absolute bottom-8 left-8 right-8 text-white">
                    <h3 class="font-bebas text-5xl mb-3 tracking-wide">AIR DI LOKASI</h3>
                    <p class="text-sm font-light text-gray-300 leading-relaxed">Demi mobilitas, kami <strong class="text-white">tidak</strong> membawa air. Sediakan air di lokasi, atau tambah Rp 10.000 jika kami yang bawa.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Banner (Matching the white aesthetic) -->
    <div class="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20" data-aos="fade-up">
        <div class="bg-gray-50 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-around text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 shadow-sm border border-gray-100">
            <div class="p-6 w-full">
                <div class="text-4xl font-bold text-dark font-sans mb-2 tracking-tight">Kami Juga Menyediakan</div>
                <div class="text-sm font-medium text-gray-500 uppercase tracking-widest">Layanan Kebersihan Lainnya</div>
            </div>
            <div class="p-6 w-full">
                <div class="text-4xl font-bold text-dark font-sans mb-2 tracking-tight">0811-860-638</div>
                <div class="text-sm font-medium text-gray-500 uppercase tracking-widest">Hotline Konsumen</div>
            </div>
        </div>
    </div>

    <!-- Packages Section ("Cuci Mobil") -->
    <section id="paket" class="px-6 lg:px-12 py-10 bg-white max-w-[1400px] mx-auto">
        <div class="mb-12" data-aos="fade-right">
            <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Penawaran Kami</p>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-dark tracking-tight">Cuci Mobil</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <!-- Package 1 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="0">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-car-side"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">MOBIL KECIL</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Agya, Brio, Ayla, dll.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">55k</div>
                <button onclick="document.getElementById('pilih_paket').value='Mobil Kecil (55k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>

            <!-- Package 2 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-car"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">MOBIL</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Avanza, Yaris, Jazz, Swift, dll.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">65k</div>
                <button onclick="document.getElementById('pilih_paket').value='Mobil (65k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>

            <!-- Package 3 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-car-rear"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">MOBIL SEDANG</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Xpander, HR-V, dll.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">75k</div>
                <button onclick="document.getElementById('pilih_paket').value='Mobil Sedang (75k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>

            <!-- Package 4 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-truck-pickup"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">MOBIL BESAR</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Innova, Fortuner, Pajero, dll.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">85k</div>
                <button onclick="document.getElementById('pilih_paket').value='Mobil Besar (85k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>

            <!-- Package 5 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100 relative" data-aos="fade-up" data-aos-delay="400">
                <div class="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-[2rem] uppercase">Premium</div>
                <div class="text-primary group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-gem"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">MOBIL MEWAH</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Alphard, Vellfire, dll.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">95k</div>
                <button onclick="document.getElementById('pilih_paket').value='Mobil Mewah (95k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-primary bg-primary text-white text-sm font-bold transition uppercase tracking-wider">Pesan</button>
            </div>

        </div>
    </section>

    <!-- Packages Section ("Cuci Motor") -->
    <section id="paket" class="px-6 lg:px-12 py-10 bg-white max-w-[1400px] mx-auto">
        <div class="mb-12" data-aos="fade-right">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-dark tracking-tight">Cuci Motor</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <!-- Package 1 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="0">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-bicycle"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">MOTOR KECIL</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">≤150cc.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">20k</div>
                <button onclick="document.getElementById('pilih_paket').value='Motor Kecil (20k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>

            <!-- Package 2 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-motorcycle"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">MOTOR BESAR</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">≥250cc.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">35k</div>
                <button onclick="document.getElementById('pilih_paket').value='Motor Besar (35k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>
            
        </div>
    </section>

    <!-- Packages Section ("Layanan Kebersihan Lainnya") -->
    <section id="paket" class="px-6 lg:px-12 py-10 bg-white max-w-[1400px] mx-auto">
        <div class="mb-12" data-aos="fade-right">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-dark tracking-tight">Layanan Kebersihan Lainnya</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <!-- Package 1 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="0">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-couch"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">SOFA KECIL</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Bahan Kulit Atau Bludru.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">50</div>
                <button onclick="document.getElementById('pilih_paket').value='Sofa Kecil (50k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>
            
            <!-- Package 2 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="0">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-couch"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">SOFA BESAR</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Bahan Kulit Atau Bludru.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">80k</div>
                <button onclick="document.getElementById('pilih_paket').value='Sofa Besar (80k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>

            <!-- Package 3 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="100">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-chair"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">KURSI</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Bahan Kulit Atau Bludru.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">45k</div>
                <button onclick="document.getElementById('pilih_paket').value='Kursi (45k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>

            <!-- Package 4 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-layer-group"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">KARPET KECIL</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Ukuran ± 40 × 60 cm sampai 80 × 120 cm.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">70k</div>
                <button onclick="document.getElementById('pilih_paket').value='Karpet Kecil (70k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>

            <!-- Package 5 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-layer-group"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">KARPET SEDANG</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Ukuruan ± 120 × 160 cm sampai 160 × 230 cm.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">90k</div>
                <button onclick="document.getElementById('pilih_paket').value='Karpet Sedang (90k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>
            
            <!-- Package 6 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-layer-group"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">KARPET BESAR</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Ukuran ≥ 200 × 300 cm.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">110k</div>
                <button onclick="document.getElementById('pilih_paket').value='Karpet Besar (110k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>
            
            <!-- Package 7 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-bed"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">KASUR KECIL</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Ukuran 90.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">75k</div>
                <button onclick="document.getElementById('pilih_paket').value='Kasur Kecil (75k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>
            
            <!-- Package 8 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-bed"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">KASUR SEDANG</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Ukuruan 120.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">95k</div>
                <button onclick="document.getElementById('pilih_paket').value='Kasur Sedang (95k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>
            
            <!-- Package 9 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-bed"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">KASUR BESAR</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Ukuran 180.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">110k</div>
                <button onclick="document.getElementById('pilih_paket').value='Kasur Besar (110k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>
            
            <!-- Package 10 -->
            <div class="bg-gray-50 rounded-[2rem] p-8 text-center hover:bg-dark hover:text-white transition duration-500 group border border-gray-100" data-aos="fade-up" data-aos-delay="300">
                <div class="text-gray-400 group-hover:text-primary mb-4 text-3xl transition"><i class="fa-solid fa-bed"></i></div>
                <h3 class="font-bebas text-4xl mb-1 tracking-wider text-dark group-hover:text-white transition">KASUR MEWAH</h3>
                <p class="text-xs text-gray-500 mb-6 group-hover:text-gray-400">Ukuruan 200.</p>
                <div class="text-4xl font-bold mb-8 text-primary group-hover:text-primary transition">150k</div>
                <button onclick="document.getElementById('pilih_paket').value='Kasur Mewah (150k)'; document.getElementById('booking').scrollIntoView();" class="inline-block w-full py-4 rounded-full border border-gray-300 text-sm font-bold group-hover:border-primary group-hover:bg-primary transition uppercase tracking-wider">Pesan</button>
            </div>
            
        </div>
    </section>

    <!-- Clean Booking Form Section -->
    <section id="booking" class="px-6 lg:px-12 py-24 bg-white">
        <div class="max-w-5xl mx-auto" data-aos="zoom-in">
            <div class="bg-gray-50 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-sm border border-gray-200">
                
                <!-- Left Banner Form -->
                <div class="bg-dark text-white p-12 md:w-2/5 flex flex-col justify-center relative overflow-hidden">
                    <div class="relative z-10">
                        <h2 class="text-5xl font-bebas tracking-wide mb-4">RESERVASI<br><span class="text-primary">SEKARANG</span></h2>
                        <p class="text-sm text-gray-400 mb-8 leading-relaxed">Lengkapi data di samping. Kami akan meneruskan pesanan Anda secara otomatis ke WhatsApp Admin untuk konfirmasi akhir.</p>
                        
                        <div class="space-y-4 text-sm font-medium">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary"><i class="fa-solid fa-phone"></i></div>
                                <span>0811-860-638</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary"><i class="fa-brands fa-instagram"></i></div>
                                <span>@mamicarwash</span>
                            </div>
                        </div>
                    </div>
                    <!-- Decor -->
                    <div class="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/30 rounded-full blur-[80px]"></div>
                </div>
                
                <!-- Right Form Data -->
                <div class="p-8 md:p-12 md:w-3/5 bg-white">
                    <form onsubmit="kirimWA(event)" class="space-y-6">
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Nama Lengkap</label>
                                <input type="text" id="nama" required placeholder="Skala Samudra"
                                    class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition font-medium text-dark">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Pilih Paket</label>
                                <select id="pilih_paket" required
                                    class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition font-medium text-dark appearance-none cursor-pointer">
                                    <option value="">-- Pilih Paket --</option>
                                    <option value="Mobil Kecil (55k)">Mobil Kecil - 55k</option>
                                    <option value="Mobil (65k)">Mobil - 65k</option>
                                    <option value="Mobil Sedang (75k)">Mobil Sedang - 75k</option>
                                    <option value="Mobil Besar (85k)">Mobil Besar - 85k</option>
                                    <option value="Mobil Mewah (95k)">Mobil Mewah - 95k</option>
                                   <option value="Motor Kecil (20k)">Motor Kecil - 20k</option>
                                    <option value="Motor Besar (35k)">Motor Besar - 35k</option>
                                    <option value="Sofa Kecil (50k)">Sofa Kecil - 50k</option>
                                    <option value="Sofa Besar (80k)">Sofa Besar - 80k</option>
                                    <option value="Kursi (45k)">Kursi - 45k</option>
                                    <option value="Karpet Kecil (70k)">Karpet Kecil - 70k</option>
                                    <option value="Karpet Sedang (90k)">Karpet Sedang - 90k</option>
                                    <option value="Karpet Besar (110k)">Karpet Besar - 110k</option>
                                    <option value="Kasur Kecil (75k)">Kasur Kecil - 75k</option>
                                    <option value="Kasur Sedang (95k)">Kasur Sedang - 95k</option>
                                    <option value="Kasur Besar (110k)">Kasur Besar - 110k</option>
                                    <option value="Kasur Mewah (150k)">Kasur Mewah - 150k</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Alamat Detail Lokasi</label>
                            <textarea id="alamat" rows="2" required placeholder="Jl. Contoh No. 123, Kecamatan, Kota"
                                class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition font-medium text-dark resize-none"></textarea>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Tanggal Cuci</label>
                                <input type="date" id="tanggal" required
                                    class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition font-medium text-dark uppercase">
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Jam Kedatangan</label>
                                <input type="time" id="jam" required
                                    class="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition font-medium text-dark uppercase">
                            </div>
                        </div>

                        <div class="pt-2">
                            <button type="submit" class="w-full bg-primary hover:bg-primaryHover text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-3 group">
                                <span class="uppercase tracking-widest text-sm">Booking</span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-100 py-10 mt-10">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="text-center md:text-left">
                <span class="font-bebas text-2xl tracking-widest text-dark block mb-1">MAMI<span class="text-primary">_</span>CARWASH</span>
                <p class="text-xs text-gray-400 font-medium tracking-wide">© 2026 Mami Carwash Home Service.</p>
            </div>
            
            <div class="flex gap-3">
                <a href="https://instagram.com/mamicarwash" target="_blank" class="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-colors">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://tiktok.com/@mamicarwash" target="_blank" class="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-primary transition-colors">
                    <i class="fa-brands fa-tiktok"></i>
                </a>
            </div>
        </div>
    </footer>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/62811860638" target="_blank" class="btn-wa fixed bottom-6 right-6 z-50 bg-wa text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-xl hover:scale-110 transition-transform" aria-label="Chat WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
    </a>

    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
    <script>
        // Initialize AOS Animations
        AOS.init({
            once: true,
            offset: 50,
        });

        // Set minimal date input to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById("tanggal").setAttribute('min', today);

        // Logic Booking WhatsApp (Fungsi Tetap Sama)
        function kirimWA(e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value;
            const alamat = document.getElementById("alamat").value;
            const tanggal = document.getElementById("tanggal").value;
            const jam = document.getElementById("jam").value;
            const paket = document.getElementById("pilih_paket").value;

            const orderNumber = "MCW" + Date.now();

            const tgl = new Date(tanggal);
            const hari = tgl.toLocaleDateString("id-ID", { weekday: "long" });
            const tanggalFull = tgl.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });

            let hargaMatch = paket.match(/\((\d+)k\)/i);
            let total = hargaMatch ? parseInt(hargaMatch[1]) * 1000 : 0;

            // 👉 redirect ke invoice
            const linkInvoice = `invoice.html?order=${orderNumber}&nama=${encodeURIComponent(nama)}&alamat=${encodeURIComponent(alamat)}&paket=${encodeURIComponent(paket)}&hari=${hari}&jam=${jam}&tanggal=${encodeURIComponent(tanggalFull)}&total=${total}`;

            window.location.href = linkInvoice;
        }

    </script>
</body>
</html>
