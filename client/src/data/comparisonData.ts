import { 
  AccountBalance, 
  Business, 
  MonetizationOn, 
  Gavel, 
  Assignment 
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
            "Pasal 9F ayat (1) dan (2) mengatur secara eksplisit tentang business judgment rule, menyatakan bahwa anggota Direksi/Dewan Komisaris/Dewan Pengawas tidak dapat dimintai pertanggungjawaban hukum atas kerugian jika dapat membuktikan: a. Kerugian tersebut bukan karena kesalahan atau kelalaiannya b. Telah melakukan pengurusan dengan iktikad baik dan kehati-hatian untuk kepentingan BUMN c. Tidak mempunyai benturan kepentingan d. Telah mengambil tindakan untuk mencegah timbul atau berlanjutnya kerugian",
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
  }
];
