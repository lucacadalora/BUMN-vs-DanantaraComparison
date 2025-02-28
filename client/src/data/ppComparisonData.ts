import { 
  AccountBalance, 
  Business, 
  MonetizationOn, 
  Gavel, 
  Assignment,
  Scale,
  BalanceScale
} from '@/lib/icons';
import { CategoryData } from '@/components/CategoryComparison';

interface ComparisonSection {
  id: string;
  title: string;
  icon: React.ComponentType;
  categories: CategoryData[];
}

export const ppComparisonData: ComparisonSection[] = [
  {
    id: "dasar-hukum",
    title: "1. Dasar Hukum Pembentukan Danantara",
    icon: Gavel,
    categories: [
      {
        title: "Landasan Hukum dan Pelimpahan Wewenang",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Pasal 3P dan Pasal 3AA ayat (1) UU No. 19 Tahun 2003 tentang BUMN sebagaimana telah diubah dengan UU No. 1 Tahun 2025"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Bagian \"Menimbang\" menyebutkan bahwa PP ini dibentuk untuk melaksanakan ketentuan Pasal 3P dan Pasal 3AA ayat (1) UU No. 19 Tahun 2003 tentang BUMN sebagaimana telah diubah dengan UU No. 1 Tahun 2025",
            "Pasal 2 ayat (1): \"Dalam melaksanakan pengelolaan BUMN, Presiden melimpahkan sebagian tugas dan kewenangannya kepada Badan yang dibentuk dengan Undang-Undang tentang BUMN.\""
          ]
        }
      }
    ]
  },
  {
    id: "status-hukum",
    title: "2. Status Hukum dan Kedudukan",
    icon: Scale,
    categories: [
      {
        title: "Pergeseran Paradigma dari Teori Sumber ke Teori Korporasi",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Pergeseran paradigma dari Teori Sumber ke Teori Korporasi (UU No. 1/2025 memperkuat Teori Korporasi)"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 1 angka 3: Definisi Badan sebagai \"badan yang melaksanakan tugas pemerintah di bidang pengelolaan BUMN sebagaimana diatur dalam Undang-Undang tentang BUMN\"",
            "Pasal 2 ayat (2): \"Badan sebagaimana dimaksud pada ayat (1) merupakan badan hukum Indonesia yang sepenuhnya dimiliki oleh Pemerintah Indonesia.\"",
            "Pasal 2 ayat (4): \"Badan sebagaimana dimaksud pada ayat (1) bertanggung jawab kepada Presiden.\""
          ]
        }
      }
    ]
  },
  {
    id: "tujuan-pembentukan",
    title: "3. Tujuan Pembentukan",
    icon: Assignment,
    categories: [
      {
        title: "Paradigma dan Fokus Pengelolaan",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Paradigma ex-ante (prediksi dampak keputusan sebelum diambil)",
            "Menekankan business judgment rule"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 2 ayat (3): \"Badan sebagaimana dimaksud pada ayat (2) bertujuan untuk meningkatkan dan mengoptimalkan investasi dan operasional BUMN dan sumber dana lain.\""
          ]
        }
      }
    ]
  },
  {
    id: "struktur-kelembagaan",
    title: "4. Struktur Kelembagaan",
    icon: Business,
    categories: [
      {
        title: "Pembentukan Holding Investasi dan Holding Operasional",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Pembentukan Holding Investasi dan Holding Operasional"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 1 angka 6: Definisi Holding Investasi sebagai \"BUMN yang seluruh modalnya dimiliki oleh Negara Republik Indonesia dan Badan yang mempunyai tugas untuk melakukan pengelolaan dividen dan/atau pemberdayaan aset BUMN serta tugas lain yang ditetapkan oleh Menteri dan/atau Badan.\"",
            "Pasal 1 angka 7: Definisi Holding Operasional sebagai \"BUMN yang seluruh modalnya dimiliki oleh Negara Republik Indonesia dan Badan yang mempunyai tugas untuk melakukan pengawasan terhadap kegiatan operasional BUMN serta kegiatan usaha lain.\"",
            "Pasal 4 ayat (2) huruf c: Badan berwenang \"bersama Menteri membentuk Holding Investasi dan Holding Operasional\""
          ]
        }
      }
    ]
  },
  {
    id: "organ-danantara",
    title: "5. Organ Danantara",
    icon: Business,
    categories: [
      {
        title: "Struktur Organisasi Badan",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Perubahan status hukum dan pertanggungjawaban"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 5: \"Organ Badan terdiri atas: a. Dewan Pengawas; dan b. Badan Pelaksana.\"",
            "Pasal 6-11: Mengatur tentang Dewan Pengawas",
            "Pasal 12-21: Mengatur tentang Badan Pelaksana"
          ]
        }
      }
    ]
  },
  {
    id: "status-pengurus",
    title: "6. Status Pengurus dan Perlindungan Hukum",
    icon: Scale,
    categories: [
      {
        title: "Perlindungan Hukum dan Business Judgment Rule",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Pasal 9G: Anggota Direksi, Dewan Komisaris, dan Dewan Pengawas BUMN bukan merupakan penyelenggara negara",
            "Pasal 9F: Penerapan prinsip business judgment rule"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 28 ayat (1): Mengatur bantuan hukum kepada ketua dan anggota Dewan Pengawas, kepala dan anggota Badan Pelaksana, pegawai Badan, serta mantan pejabat dan pegawai.",
            "Pasal 28 ayat (3): Mengatur perlindungan ganti rugi jika kerugian bukan karena kesalahan/kelalaian, telah melakukan pengurusan dengan iktikad baik dan kehati-hatian, tidak memiliki benturan kepentingan, dan tidak memperoleh keuntungan pribadi secara tidak sah."
          ]
        }
      }
    ]
  },
  {
    id: "aset-keuangan",
    title: "7. Pengelolaan Aset dan Keuangan",
    icon: MonetizationOn,
    categories: [
      {
        title: "Fleksibilitas Pengelolaan Aset",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Pasal 4(2): Modal BUMN adalah bagian dari keuangan BUMN",
            "Pasal 4B: Keuntungan atau kerugian BUMN bukan merupakan keuntungan atau kerugian negara",
            "Pasal 62A: Aset BUMN dapat dipindahtangankan, dijaminkan, dan/atau dikerjasamakan"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 4 ayat (2) huruf a: Badan berwenang \"mengelola dividen Holding Investasi, dividen Holding Operasional, dan dividen BUMN\"",
            "Pasal 4 ayat (2) huruf b: Badan berwenang \"menyetujui penambahan dan/atau pengurangan penyertaan modal pada BUMN yang bersumber dari pengelolaan dividen\"",
            "Pasal 4 ayat (2) huruf d: Badan berwenang \"bersama Menteri menyetujui usulan hapus buku dan/atau hapus tagih atas aset BUMN yang diusulkan oleh Holding Investasi atau Holding Operasional\"",
            "Pasal 4 ayat (2) huruf e: Badan berwenang \"memberikan pinjaman, menerima pinjaman, dan mengagunkan aset dengan persetujuan Presiden\""
          ]
        }
      }
    ]
  },
  {
    id: "tata-kelola",
    title: "8. Tata Kelola dan Pengawasan",
    icon: Gavel,
    categories: [
      {
        title: "Sistem Pengawasan Berlapis yang Efektif",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Pasal 71: Pemeriksaan laporan keuangan oleh akuntan publik; BPK hanya dapat melakukan \"pemeriksaan dengan tujuan tertentu\"",
            "Pasal 67-70: Penguatan satuan pengawasan intern dan komite audit"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 9 ayat (3): Komite Dewan Pengawas terdiri dari \"a. komite audit; b. komite etik; dan c. komite remunerasi dan sumber daya manusia.\"",
            "Pasal 17: Badan Pelaksana membentuk komite yang terdiri dari \"a. komite investasi; b. komite manajemen risiko; dan c. komite operasional portofolio.\"",
            "Pasal 25: \"Dalam melakukan pengelolaan Badan, Badan Pelaksana harus memastikan pelaksanaan penerapan tata kelola perusahaan yang baik di lingkungan Badan.\""
          ]
        }
      }
    ]
  },
  {
    id: "sumber-daya",
    title: "9. Sumber Daya Manusia",
    icon: Business,
    categories: [
      {
        title: "Profesionalisasi Pengelolaan SDM",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Profesionalisasi pengelolaan BUMN"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 13 ayat (1): \"Badan Pelaksana sebagaimana dimaksud dalam Pasal 12 berasal dari unsur profesional.\"",
            "Pasal 22 ayat (1): \"Pegawai Badan merupakan pekerja yang pengangkatan, pemberhentian, kedudukan, hak dan kewajibannya ditetapkan berdasarkan perjanjian kerja bersama sesuai dengan ketentuan peraturan perundang-undangan di bidang ketenagakerjaan.\"",
            "Pasal 32: \"Pada saat awal pembentukan Badan, sumber daya manusia pada Badan dapat berasal dari Aparatur Sipil Negara dan/atau pegawai BUMN.\""
          ]
        }
      }
    ]
  },
  {
    id: "koordinasi",
    title: "10. Koordinasi dengan Lembaga Lain",
    icon: BalanceScale,
    categories: [
      {
        title: "Sinergi Antar Lembaga Pemerintah",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Harmonisasi peraturan terkait BUMN"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 30 ayat (1): \"Dalam melaksanakan tugas pengelolaan BUMN, Badan melakukan koordinasi dengan kementerian dan lembaga terkait.\"",
            "Pasal 30 ayat (2): \"Dalam melaksanakan tugas pengelolaan BUMN, Badan dapat bekerja sama dengan organisasi atau lembaga dalam negeri dan luar negeri.\""
          ]
        }
      }
    ]
  },
  {
    id: "akuntabilitas",
    title: "11. Akuntabilitas dan Pelaporan",
    icon: Assignment,
    categories: [
      {
        title: "Pengawasan Demokratis dengan Model Korporatif",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Transparansi dan akuntabilitas"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 4 ayat (2) huruf f: Badan berwenang \"mengesahkan dan mengonsultasikan kepada alat kelengkapan DPR RI yang membidangi BUMN atas Rencana Kerja dan Anggaran Perusahaan Holding Investasi dan Holding Operasional.\"",
            "Pasal 7 ayat (2) huruf c dan d: Dewan Pengawas berwenang \"menerima dan mengevaluasi laporan pertanggungjawaban dari Badan Pelaksana\" dan \"menyampaikan laporan pertanggungjawaban Dewan Pengawas dan Badan Pelaksana kepada Presiden\""
          ]
        }
      }
    ]
  },
  {
    id: "penyelesaian",
    title: "12. Mekanisme Penyelesaian Sengketa",
    icon: Gavel,
    categories: [
      {
        title: "Efisiensi Penyelesaian Konflik",
        old: {
          title: "Referensi UU No. 1/2025",
          points: [
            "Pasal 87F: Penyelesaian sengketa antar-BUMN melalui musyawarah, mediasi, dan kesepakatan"
          ]
        },
        new: {
          title: "Implementasi dalam PP No. 10/2025",
          points: [
            "Pasal 16 ayat (1): \"Kewenangan Badan Pelaksana mewakili Badan Pelaksana di dalam dan di luar pengadilan sebagaimana dimaksud dalam Pasal 15 ayat (2) huruf f dilaksanakan oleh Kepala Badan Pelaksana.\""
          ]
        }
      }
    ]
  },
  {
    id: "perubahan",
    title: "13. Perubahan Signifikan dari Pengelolaan BUMN Sebelumnya",
    icon: Scale,
    categories: [
      {
        title: "Transformasi Fundamental Pengelolaan BUMN",
        old: {
          title: "Model Lama",
          points: [
            "Pengelolaan berbasis kementerian dengan fokus birokrasi",
            "Pengawasan berbasis birokrasi",
            "Pengelolaan BUMN secara individual",
            "Pengelola BUMN sebagai penyelenggara negara",
            "Kekakuan pengelolaan aset negara",
            "Dominasi audit BPK",
            "Sistem kepegawaian berbasis birokrasi",
            "Orientasi dividen jangka pendek"
          ]
        },
        new: {
          title: "Model Baru (PP No. 10/2025)",
          points: [
            "Pengelolaan oleh badan khusus profesional dengan pertanggungjawaban langsung ke Presiden",
            "Pengelolaan berbasis korporasi dengan perlindungan business judgment rule",
            "Pengelompokan melalui Holding Investasi dan Holding Operasional yang lebih terstruktur",
            "Profesional korporasi dengan perlindungan hukum yang lebih memadai",
            "Fleksibilitas pengelolaan aset korporasi dengan tetap memperhatikan prinsip tata kelola yang baik",
            "Kombinasi audit internal, akuntan publik, dan audit BPK dengan tujuan tertentu saat diperlukan",
            "Sistem kepegawaian berbasis kinerja dan kompetensi",
            "Optimalisasi nilai investasi jangka panjang"
          ]
        }
      }
    ]
  }
];