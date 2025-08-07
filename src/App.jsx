import DataImage from "./data"
import  { listTools, listProyek } from "./data"


function App() {
  

  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md"loading="lazy" />
          <q>Tetap optimis tapi berhati-hati, Pesimis namun tetap berharap.😊</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6 text-blue-500">Hai, Saya, Fernanda Rizky</h1>
        <p className="text-base/loose mb-6 opacity-50 text-justify">
          Sebagai alumni SMK Telkom Malang, saya memiliki dasar yang kuat dalam keterampilan teknis dan organisasi, dengan pengalaman dari partisipasi aktif di berbagai organisasi dan magang 6 bulan, yang kini saya lanjutkan dengan studi di bidang Statistik di Universitas Airlangga, aktif di BEM Fakultas, mengikuti berbagai kompetisi, serta berkomitmen untuk memberikan dampak positif melalui ilmu dan pengalaman saya.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="/public/assets/Fernanda-Rizky-CV.pdf" download="CV-Fernanda-Rizky.pdf" className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600">
            Download CV <i className="ri-download-line ri-lg"></i>
          </a>
          <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
            Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] w-10 rounded-3xl md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy" />
    </div>
    {/* Tentang Section */}
    <div>
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
      <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
        <p className="text-base/loose mb-10 text-justify">
          Halo! Saya Fernanda Rizky Hardiansyah, mahasiswa Statistika di Universitas Airlangga dengan latar belakang pendidikan Rekayasa Perangkat Lunak dari SMK Telkom Malang.

          Saya memiliki pengalaman di berbagai bidang mulai dari desain grafis, UI/UX, hingga analisis data, serta aktif berorganisasi di BEM Fakultas Sains dan Teknologi sebagai staff advokasi.

          Selama perjalanan saya, saya telah mengikuti berbagai kompetisi (Business Plan & Business Model Canvas) dan berhasil meraih juara 1 di beberapa di antaranya. Saya juga pernah menjalani magang sebagai Creative Designer di Ngalup.co, mengerjakan proyek desain sosial media, presentasi, hingga UI/UX.

          Saya selalu bersemangat untuk berkarya, mengembangkan diri, dan memberikan dampak positif melalui keterampilan teknis, kreativitas, dan kerja sama tim.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                5<span className="text-blue-500">+</span>
                </h1 >
                <p>
                  Proyek Selesai
                </p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                1<span className="text-blue-500">+</span>
                </h1>
                <p>
                  Tahun Pengalaman
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tools mt-32">
<h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai</h1>
<p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website maupun Desain</p>
<div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

{listTools.map((tool) => (
  <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
    <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
    <div>
      <h4 className="font-bold">{tool.nama}</h4>
      <p className="opacity-50">{tool.ket}</p>
    </div>
  </div>
))}

  
</div>
    </div>
    </div>
    {/* Tentang Section */}

    {/* Proyek Section */}
    <div className="proyek mt-32 py-10" id="proyek">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa proyek yang telah saya buat.</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm::grid-cols-2 grid-cols-1 gap-4">
      {listProyek.map(proyek => (
        <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
          <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
          <div>
            <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
            <p className="text-base/loose mb-4">{proyek.desk}</p>
            <div className="flex flex-wrap gap-2">
              {proyek.tools.map((tool, index) => (
                <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
    {/* Proyek Section */}

    {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/fernandarizkyyy@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email.." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required>
              </textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    {/* Kontak */}
    </>
  )
}

export default App
