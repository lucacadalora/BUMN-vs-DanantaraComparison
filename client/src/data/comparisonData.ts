import { 
  AccountBalance, 
  Business, 
  MonetizationOn, 
  Gavel, 
  Assignment,
  Scale
} from '@/lib/icons';

export const comparisonData = [
  {
    id: "paradigma",
    title: "1. Perubahan Mendasar pada Paradigma Hukum",
    icon: AccountBalance,
    categories: [
      {
        title: "Dari Teori Sumber ke Teori Korporasi",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Menganut Teori Sumber dimana BUMN dipandang sebagai ekstensi negara",
            "Pasal 1 ayat (1) mendefinisikan BUMN sebagai \"badan usaha yang seluruh atau sebagian besar modalnya dimiliki oleh negara melalui penyertaan secara langsung yang berasal dari kekayaan negara yang dipisahkan\"",
            "Tidak ada pemisahan tegas antara kekayaan negara dan aset BUMN"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Secara eksplisit mengadopsi Teori Korporasi",
            "Pasal 1 ayat (1) meredefinisi BUMN sebagai \"badan usaha yang memenuhi minimal salah satu ketentuan berikut: (a) seluruh atau sebagian besar modalnya dimiliki oleh Negara Republik Indonesia melalui penyertaan langsung; atau (b) terdapat hak istimewa yang dimiliki Negara Republik Indonesia\"",
            "Pasal 4 ayat (2) menegaskan bahwa \"Modal BUMN merupakan bagian dari keuangan BUMN yang pengelolaannya dilakukan sesuai dengan prinsip tata kelola perusahaan yang baik\"",
            "Pasal 4B secara eksplisit menyatakan bahwa \"Keuntungan atau kerugian yang dialami BUMN merupakan keuntungan atau kerugian BUMN\""
          ]
        }
      },
      {
        title: "Perubahan Paradigma Pengawasan dan Pertanggungjawaban",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Paradigma ex-post (mengevaluasi setelah kejadian terjadi)",
            "Tidak ada ketentuan eksplisit mengenai business judgment rule",
            "Anggota Direksi, Dewan Komisaris/Pengawas BUMN termasuk kategori penyelenggara negara (bedasarkan UU No. 28/1999 dan UU No. 30/2002)"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Paradigma ex-ante (memprediksi dampak dari keputusan sebelum diambil)",
            "Pasal 9F ayat (1) dan (2) mengatur secara eksplisit tentang business judgment rule, yang memberikan perlindungan hukum pada Direksi/Komisaris/Pengawas jika dapat membuktikan:",
            "a. Kerugian tersebut bukan karena kesalahan atau kelalaiannya",
            "b. Telah melakukan pengurusan dengan iktikad baik dan kehati-hatian untuk kepentingan BUMN",
            "c. Tidak mempunyai benturan kepentingan", 
            "d. Telah mengambil tindakan untuk mencegah timbul atau berlanjutnya kerugian",
            "Pasal 9G secara eksplisit menyatakan \"Anggota Direksi, Dewan Komisaris, dan Dewan Pengawas BUMN bukan merupakan penyelenggara negara\""
          ]
        }
      }
    ]
  },
  {
    id: "kelembagaan",
    title: "2. Restrukturisasi Kelembagaan dan Tata Kelola",
    icon: Business,
    categories: [
      {
        title: "Pembentukan Badan Pengelola Investasi Daya Anagata Nusantara (Danantara)",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak mengatur adanya lembaga khusus pengelola investasi dan aset BUMN"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 1 ayat (23) memperkenalkan \"Badan Pengelola Investasi Daya Anagata Nusantara yang selanjutnya disebut Badan\"",
            "Pasal 3E ayat (1) dan (2) menetapkan Badan sebagai badan hukum Indonesia yang sepenuhnya dimiliki oleh Pemerintah Indonesia",
            "Pasal 3E ayat (3) mengatur tujuan Badan yaitu \"meningkatkan dan mengoptimalkan investasi dan operasional BUMN dan sumber dana lain\"",
            "Pasal 3F mengatur tugas dan wewenang Badan, termasuk mengelola dividen, menyetujui penyertaan modal, membentuk Holding, dan mengagunkan aset",
            "Pasal 3G ayat (3) menetapkan modal Badan minimal Rp 1.000 triliun",
            "Pasal 3M-3AA mengatur secara rinci struktur organisasi, organ, dan tata kelola Badan"
          ]
        }
      },
      {
        title: "Pembentukan Struktur Holding",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak mengatur secara spesifik tentang Holding BUMN"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 1 ayat (24) mendefinisikan \"Holding Investasi\" sebagai BUMN yang mempunyai tugas untuk melakukan pengelolaan dividen dan/atau pemberdayaan Aset BUMN",
            "Pasal 1 ayat (25) mendefinisikan \"Holding Operasional\" sebagai BUMN yang mempunyai tugas untuk melakukan pengawasan terhadap kegiatan operasional BUMN",
            "Pasal 3AB-3AG mengatur pembentukan, tugas, dan wewenang Holding Investasi",
            "Pasal 3AK-3AN mengatur pembentukan, tugas, dan wewenang Holding Operasional",
            "Pasal 3AC mengatur wewenang Holding Investasi termasuk pengelolaan dividen, pemberdayaan aset, penerbitan surat utang, dan pemberian pinjaman",
            "Pasal 3AL mengatur wewenang Holding Operasional termasuk pengelolaan operasional BUMN"
          ]
        }
      },
      {
        title: "Pembentukan Anak Usaha BUMN",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak mengatur secara khusus tentang Anak Usaha BUMN"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 1 ayat (2) mendefinisikan \"Anak Usaha BUMN\" sebagai \"anak perusahaan BUMN dan turunannya yang didirikan oleh BUMN dalam rangka memenuhi kepentingan usaha BUMN\"",
            "Pasal 62M-62O mengatur pembentukan Anak Usaha BUMN, termasuk persyaratan dan prosedurnya",
            "Pasal 62M ayat (2) memungkinkan BUMN memiliki saham dengan hak istimewa pada Anak Usaha BUMN"
          ]
        }
      }
    ]
  },
  {
    id: "keuangan",
    title: "3. Reformasi Pengelolaan Keuangan dan Aset",
    icon: MonetizationOn,
    categories: [
      {
        title: "Redefinisi Status Modal dan Aset",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Pasal 4 ayat (1) hanya menyebutkan modal BUMN berasal dari kekayaan negara yang dipisahkan",
            "Tidak ada pemisahan tegas antara modal negara dan kekayaan BUMN"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 4 ayat (1) menyatakan \"Modal BUMN berasal dari APBN dan non-APBN\"",
            "Pasal 4 ayat (5) menegaskan \"Modal negara pada BUMN yang berasal dari penyertaan modal baik dalam rangka pendirian BUMN maupun perubahan, merupakan kekayaan BUMN yang menjadi milik dan tanggung jawab BUMN\"",
            "Pasal 62A ayat (3) menyatakan \"Aset BUMN dapat dipindahtangankan, dijaminkan, dan/atau dikerjasamakan dengan pihak ketiga\""
          ]
        }
      },
      {
        title: "Hapus Buku dan Hapus Tagih",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak mengatur secara khusus tentang hapus buku dan hapus tagih"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 62D-62E mengatur wewenang BUMN untuk melakukan hapus buku dan/atau hapus tagih",
            "Pasal 62D ayat (3) mengatur bahwa piutang yang dapat dihapusbukukan adalah \"piutang macet yang telah dilakukan upaya penagihan piutang secara optimal, namun tidak tertagih dan tidak disebabkan oleh adanya kesalahan\"",
            "Pasal 62E mengatur bahwa BUMN dapat melakukan hapus tagih piutang yang telah dihapus buku dengan persetujuan Menteri untuk Perum dan Badan untuk Persero"
          ]
        }
      },
      {
        title: "Pendanaan dan Investasi",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Terbatas pada penyertaan modal negara dan pendanaan konvensional"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 3H ayat (1) memungkinkan Badan melakukan investasi, baik secara langsung maupun tidak langsung",
            "Pasal 3AC huruf d dan e memungkinkan Holding Investasi menerbitkan surat utang, menerima pinjaman, memberikan pinjaman, dan/atau penjaminan",
            "Pasal 3AL huruf b dan c memungkinkan Holding Operasional menerbitkan surat utang, menerima pinjaman, memberikan pinjaman, dan/atau penjaminan"
          ]
        }
      }
    ]
  },
  {
    id: "pengawasan",
    title: "4. Transformasi Sistem Pengawasan dan Audit",
    icon: Gavel,
    categories: [
      {
        title: "Perubahan Peran BPK dan Auditor Eksternal",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Pasal 71 ayat (1) menyatakan pemeriksaan laporan keuangan perusahaan dilakukan oleh auditor eksternal yang ditetapkan oleh RUPS untuk Persero dan oleh Menteri untuk Perum",
            "Pasal 71 ayat (2) menyatakan BPK berwenang melakukan pemeriksaan terhadap BUMN sesuai dengan ketentuan peraturan perundang-undangan"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 71 ayat (1) tetap menyatakan pemeriksaan laporan keuangan oleh akuntan publik",
            "Pasal 71 ayat (2) membatasi kewenangan BPK hanya untuk \"pemeriksaan dengan tujuan tertentu\"",
            "Pasal 71 ayat (3) menegaskan pemeriksaan dengan tujuan tertentu hanya dapat dilakukan \"atas permintaan alat kelengkapan DPR RI yang membidangi BUMN\"",
            "Pasal 71A menetapkan bahwa \"Pemeriksaan pengelolaan dan tanggung jawab keuangan BUMN dilakukan oleh akuntan publik yang terdaftar pada Badan Pemeriksa Keuangan dan Otoritas Jasa Keuangan\""
          ]
        }
      },
      {
        title: "Penguatan Pengawasan Internal",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Pasal 67-70 mengatur tentang satuan pengawasan intern dan komite audit tanpa detail spesifik"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 67A secara rinci mengatur tugas satuan pengawasan intern termasuk pemeriksaan operasional dan keuangan, penyampaian laporan, dan monitoring tindak lanjut",
            "Pasal 70 ayat (1) mewajibkan Dewan Komisaris atau Dewan Pengawas membentuk komite audit",
            "Pasal 70 ayat (3) memungkinkan pembentukan komite lain selain komite audit"
          ]
        }
      }
    ]
  },
  {
    id: "penugasan",
    title: "5. Penugasan Khusus dan Tanggung Jawab Sosial",
    icon: Assignment,
    categories: [
      {
        title: "Penugasan Khusus dengan Pendanaan",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak mengatur secara eksplisit tentang penugasan khusus dengan dukungan pendanaan"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 87C mengatur tentang penugasan khusus oleh Pemerintah Pusat kepada BUMN atau Anak Usaha BUMN",
            "Pasal 87C ayat (4) menyatakan penugasan khusus dapat berupa kompensasi, pembayaran, atau insentif lainnya",
            "Pasal 87C ayat (5) mengatur bahwa kompensasi diberikan dengan persetujuan Menteri Keuangan untuk kompensasi dari APBN dan persetujuan RUPS untuk kompensasi dari BUMN"
          ]
        }
      }
    ]
  },
  {
    id: "manajemen",
    title: "6. Peningkatan Kualitas Tata Kelola dan Manajemen",
    icon: Business,
    categories: [
      {
        title: "Syarat dan Seleksi Direksi, Komisaris dan Pengawas",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Persyaratan umum diatur di Pasal 16 dan 28 tanpa detail spesifik",
            "Tidak ada pengaturan khusus mengenai fit and proper test"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 15A, 27A, 43C, dan 56A mengatur persyaratan lebih ketat dan spesifik",
            "Pasal 15B, 27B, 43D, dan 56B mengatur proses seleksi yang melibatkan lembaga profesional",
            "Pasal 15C, 27C, 43E, dan 56C mewajibkan kontrak manajemen dan pakta integritas"
          ]
        }
      },
      {
        title: "Pengembangan SDM dan Budaya Korporasi",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak mengatur secara khusus tentang pengembangan SDM dan budaya korporasi"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 87 ayat (1) menekankan pengembangan 'sumber daya manusia yang profesional dan berdaya saing global'",
            "Pasal 87 ayat (2) mewajibkan BUMN membangun budaya perusahaan yang mencerminkan nilai-nilai 'integritas, profesionalisme, produktivitas, dan kualitas'"
          ]
        }
      }
    ]
  },
  {
    id: "monopoli",
    title: "7. Pengaturan Hak Monopoli dan Hak Khusus",
    icon: Gavel,
    categories: [
      {
        title: "Hak Monopoli dan Pengecualian Persaingan Usaha",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Pasal 51 menyatakan BUMN dapat diberikan tugas khusus",
            "Tidak mengatur secara eksplisit tentang hak monopoli dan pengecualian dari aturan persaingan usaha"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 86M ayat (1) secara eksplisit memberikan wewenang kepada Presiden untuk memberikan hak monopoli kepada BUMN atau anak usaha BUMN",
            "Pasal 86M ayat (2) menyatakan bahwa monopoli tersebut dikecualikan dari ketentuan larangan praktik monopoli",
            "Pasal 86N ayat (1) mengatur hak istimewa lain seperti kemudahan perizinan, insentif fiskal, dan kemudahan untuk mendapatkan proyek Pemerintah"
          ]
        }
      }
    ]
  },
  {
    id: "inovasi",
    title: "8. Dukungan Inovasi dan Pengembangan Teknologi",
    icon: Assignment,
    categories: [
      {
        title: "Inovasi dan Pengembangan Teknologi",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak mengatur secara khusus tentang inovasi dan pengembangan teknologi"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 2 ayat (1) huruf g secara eksplisit menyebut tujuan BUMN termasuk 'membangun industri strategis yang berbasis riset, inovasi, dan teknologi yang bersinergi dengan negara lain'",
            "Pasal 87C ayat (1) mengatur penugasan khusus untuk 'penelitian dan pengembangan, serta inovasi nasional'",
            "Pasal 86P ayat (1) mengatur pemberian hak eksklusif atas kekayaan intelektual yang dikembangkan BUMN"
          ]
        }
      }
    ]
  },
  {
    id: "tantangan",
    title: "9. Tantangan Implementasi dan Potensi Isu Hukum",
    icon: Scale,
    categories: [
      {
        title: "Harmonisasi Regulasi",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Terdapat konflik norma dengan berbagai UU lain seperti UU Keuangan Negara dan UU Perbendaharaan Negara"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 94B menyatakan 'Peraturan pelaksanaan dari Undang-Undang ini harus ditetapkan paling lama 6 (enam) bulan terhitung sejak Undang-Undang ini diundangkan'",
            "Potensi konflik norma dengan UU No. 17/2003 tentang Keuangan Negara terkait definisi kekayaan negara",
            "Potensi konflik norma dengan UU No. 31/1999 jo. UU No. 20/2001 tentang Pemberantasan Tindak Pidana Korupsi terkait definisi kerugian negara"
          ]
        }
      },
      {
        title: "Tantangan Tata Kelola dan Akuntabilitas",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Terlalu ketat dalam pengawasan hingga menghambat pengambilan keputusan bisnis"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Keseimbangan antara tujuan komersial dengan kepentingan publik",
            "Pasal 3Y menetapkan bahwa Menteri, organ, dan pegawai Badan tidak dapat dimintai pertanggungjawaban hukum dengan syarat-syarat tertentu",
            "Tantangan untuk memastikan independensi pengambilan keputusan dalam struktur yang kompleks"
          ]
        }
      }
    ]
  },
  {
    id: "poin-krusial",
    title: "10. Poin Krusial dan Implikasi Strategis bagi BUMN",
    icon: Scale,
    categories: [
      {
        title: "Perubahan Status Modal BUMN",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Modal BUMN dianggap sebagai bagian dari kekayaan negara",
            "Keuntungan/kerugian BUMN dianggap sebagai keuntungan/kerugian negara"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 4 ayat (2) dan (5): Modal BUMN bukan lagi bagian dari kekayaan negara tetapi milik BUMN sebagai badan hukum",
            "Pasal 4B: Keuntungan/kerugian BUMN bukan merupakan keuntungan/kerugian negara",
            "Implikasi: Mengurangi risiko tuntutan kerugian negara, meningkatkan fleksibilitas pengambilan keputusan keuangan"
          ]
        }
      },
      {
        title: "Status Non-Penyelenggara Negara",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Direksi dan komisaris BUMN dianggap sebagai penyelenggara negara",
            "Berisiko terkena tuntutan tindak pidana korupsi"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 9G: Anggota Direksi, Dewan Komisaris, dan Dewan Pengawas BUMN bukan penyelenggara negara",
            "Implikasi: Mengurangi risiko kriminalisasi, mengurangi pertanggungjawaban publik, mendorong profesionalisme bisnis"
          ]
        }
      },
      {
        title: "Business Judgment Rule",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak ada perlindungan eksplisit untuk keputusan bisnis",
            "Direksi berisiko dituntut secara pidana untuk kerugian bisnis"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 9F: Perlindungan hukum terhadap keputusan bisnis yang diambil dengan itikad baik",
            "Implikasi: Meningkatkan keberanian dalam pengambilan keputusan bisnis, mendorong inovasi dan pengambilan risiko yang terukur"
          ]
        }
      },
      {
        title: "Perubahan Sistem Audit",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "BPK memiliki kewenangan luas dalam melakukan audit BUMN",
            "Tidak ada batasan spesifik untuk pemeriksaan BPK"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 71 dan 71A: Pemeriksaan oleh BPK dibatasi hanya untuk 'pemeriksaan dengan tujuan tertentu' atas permintaan DPR",
            "Implikasi: Mengurangi intensitas pengawasan, meningkatkan efisiensi, potensi mengurangi akuntabilitas publik"
          ]
        }
      },
      {
        title: "Pembentukan Danantara",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak ada badan pengelola investasi khusus untuk BUMN",
            "Pengelolaan BUMN dilakukan langsung oleh Kementerian BUMN"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 3E-3AA: Pembentukan Badan Pengelola Investasi Daya Anagata Nusantara dengan modal minimal Rp 1.000 triliun",
            "Implikasi: Perubahan tata kelola BUMN secara fundamental, centralisasi pengelolaan aset dan investasi BUMN"
          ]
        }
      },
      {
        title: "Struktur Holding",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak ada ketentuan spesifik tentang struktur holding BUMN",
            "Pengelolaan dilakukan per-BUMN secara individual"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 3AB-3AN: Pembentukan Holding Investasi dan Holding Operasional",
            "Implikasi: Restrukturisasi BUMN, efisiensi pengelolaan, potensi konsolidasi antar-BUMN sejenis"
          ]
        }
      },
      {
        title: "Fleksibilitas Pengelolaan Aset",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Pengelolaan aset terbatas dan kaku",
            "Tidak ada ketentuan spesifik tentang hapus buku dan hapus tagih"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 62A-62H: Aset BUMN dapat dipindahtangankan, dijaminkan, dikerjasamakan",
            "BUMN dapat melakukan hapus buku dan hapus tagih",
            "Implikasi: Optimalisasi aset BUMN, penyelesaian aset bermasalah, efisiensi pengelolaan aset"
          ]
        }
      },
      {
        title: "Hak Monopoli",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak ada ketentuan spesifik tentang hak monopoli",
            "BUMN harus mematuhi UU Persaingan Usaha"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 86M: Presiden dapat memberikan hak monopoli kepada BUMN atau Anak Usaha BUMN",
            "Implikasi: Potensi keuntungan kompetitif bagi BUMN tertentu, potensi distorsi pasar"
          ]
        }
      },
      {
        title: "Penugasan Khusus dengan Pendanaan",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Penugasan khusus sering tanpa dukungan pendanaan yang jelas",
            "BUMN menanggung beban keuangan untuk penugasan publik"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 87C: Penugasan khusus dengan dukungan pendanaan dari pemerintah",
            "Implikasi: Kejelasan pemisahan misi komersial dan misi layanan publik, pengurangan beban keuangan BUMN untuk penugasan khusus"
          ]
        }
      },
      {
        title: "Penyelesaian Sengketa Khusus",
        old: {
          title: "UU Lama (UU No. 19/2003)",
          points: [
            "Tidak ada ketentuan khusus untuk penyelesaian sengketa antar-BUMN",
            "Sengketa diselesaikan melalui jalur normal (pengadilan)"
          ]
        },
        new: {
          title: "UU Baru (UU No. 1/2025)",
          points: [
            "Pasal 87F: Mekanisme penyelesaian sengketa antar-BUMN melalui musyawarah dan mediasi",
            "Implikasi: Efisiensi penyelesaian sengketa, menghindari proses pengadilan yang berlarut-larut"
          ]
        }
      }
    ]
  }
];
