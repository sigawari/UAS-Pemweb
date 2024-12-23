import { useState, useEffect } from "react";
import {
  handleChange,
  validateForm,
  pembimbingOptions,
  kelompokKeahlianOptions,
  semesters,
} from "../handleEvent";
import DataTable from "./DataTable";
import { getCookie, setCookie, deleteCookie } from "../handleCookies";
import Swal from "sweetalert2";

export const App = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    email: "",
    telepon: "",
    semester: "",
    ipk: "",
    judul: "",
    kelompokKeahlian: "",
    pembimbing1: "",
    pembimbing2: "",
    proposal: "",
    transkrip: "",
    ppt: "",
    agreement: false,
  });
  const [errors, setErrors] = useState({});
  const [submissions, setSubmissions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authValue, setAuthValue] = useState(""); // State untuk input nilai baru cookie auth

  const fetchSubmissions = async () => {
    try {
      const response = await fetch(
        "http://localhost/uas-pemweb/src/api/saveData.php?fetch=true"
      );
      const data = await response.json();

      const normalizedData = data.map((item) => ({
        ...item,
        id: Number(item.id),
        ipk: Number(item.ipk),
      }));

      setSubmissions(normalizedData);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };

  // Periksa status login saat pertama kali halaman dimuat
  useEffect(() => {
    const auth = getCookie("auth");
    if (!auth) {
      window.location.href = "/login";
    } else {
      fetchSubmissions();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm(formData, setErrors)) {
      setIsSubmitting(true);

      try {
        const response = await fetch(
          "http://localhost/uas-pemweb/src/api/saveData.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const result = await response.json();

        if (result && result.success) {
          alert(result.message || "Data berhasil disimpan!");
          await fetchSubmissions();
          resetForm();
        } else {
          alert(result.message || "Gagal menyimpan data!");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("Terjadi kesalahan saat mengirim data.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      nama: "",
      nim: "",
      email: "",
      telepon: "",
      semester: "",
      ipk: "",
      judul: "",
      kelompokKeahlian: "",
      pembimbing1: "",
      pembimbing2: "",
      proposal: "",
      transkrip: "",
      ppt: "",
      agreement: false,
    });
    setErrors({});
    setCurrentSection(1);
  };

  const handleLogout = () => {
    deleteCookie("auth");
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  const handleSetAuth = () => {
    if (authValue.trim()) {
      setCookie("auth", authValue, 7);
      Swal.fire(
        "Success",
        `Cookie "auth" berhasil diubah menjadi: ${authValue}`,
        "success"
      );
    } else {
      Swal.fire("Error", "Nama user tidak boleh kosong!", "error");
    }
  };

  return (
    <div className="bg-blue-50 flex items-center justify-center min-h-screen">
      <div className="w-11/12 lg:w-3/4 shadow-lg rounded-lg flex flex-col bg-white">
        <div className="bg-if-navy text-white p-8 flex flex-col items-center justify-center rounded-t-lg">
          <div className="flex items-center mb-4">
            <img
              src="img/logo-if.png"
              alt="Logo IF"
              className="w-14 h-14 mr-4"
            />
            <div className="text-left">
              <h4 className="text-lg font-semibold leading-tight">
                Program Studi Teknik Informatika
              </h4>
              <h5 className="text-sm">Institut Teknologi Sumatera</h5>
            </div>
          </div>
          <h1 className="text-2xl font-bold">Pendaftaran Seminar Proposal</h1>
        </div>
        {/* Input untuk Mengubah Cookie */}
        <div className="p-8 text-center">
          <h3 className="text-lg font-semibold mb-4">
            Ubah Nilai Cookie &quot;auth&quot;
          </h3>
          <input
            type="text"
            value={authValue}
            onChange={(e) => setAuthValue(e.target.value)}
            placeholder="Masukkan nama user baru"
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSetAuth}
            className="bg-blue-400 text-white px-6 py-2 rounded-md hover:bg-if-navy transition"
          >
            Ubah Cookie
          </button>
        </div>
        {/* Logout Button */}
        <div className="p-8 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Form Sections */}
        <form className="p-8" onSubmit={handleSubmit}>
          {currentSection === 1 && (
            <div>
              <h2 className="text-lg font-bold text-if-navy mb-4">Data Diri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nama */}
                <div>
                  <label htmlFor="nama" className="block font-medium mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.nama && (
                    <p className="text-red-500 text-sm">{errors.nama}</p>
                  )}
                </div>

                {/* NIM */}
                <div>
                  <label htmlFor="nim" className="block font-medium mb-1">
                    NIM
                  </label>
                  <input
                    type="text"
                    id="nim"
                    name="nim"
                    value={formData.nim}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.nim && (
                    <p className="text-red-500 text-sm">{errors.nim}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Telepon */}
                <div>
                  <label htmlFor="telepon" className="block font-medium mb-1">
                    No. Telp
                  </label>
                  <input
                    type="tel"
                    id="telepon"
                    name="telepon"
                    value={formData.telepon}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.telepon && (
                    <p className="text-red-500 text-sm">{errors.telepon}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setCurrentSection(2)}
                  type="button"
                  className="bg-if-navy text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          )}

          {currentSection === 2 && (
            <div>
              <h2 className="text-lg font-bold text-if-navy mb-4">
                Informasi Akademik
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Semester */}
                <div>
                  <label className="block font-medium mb-1">Semester</label>
                  {semesters.map((semester) => (
                    <div key={semester}>
                      <input
                        type="radio"
                        id={`semester-${semester}`}
                        name="semester"
                        value={semester}
                        checked={formData.semester === semester.toString()}
                        onChange={(e) =>
                          handleChange(e, setFormData, setErrors)
                        }
                      />
                      <label htmlFor={`semester-${semester}`} className="ml-2">
                        Semester {semester}
                      </label>
                    </div>
                  ))}
                  {errors.semester && (
                    <p className="text-red-500 text-sm">{errors.semester}</p>
                  )}
                </div>

                {/* IPK */}
                <div>
                  <label htmlFor="ipk" className="block font-medium mb-1">
                    IPK Terakhir
                  </label>
                  <input
                    type="number"
                    id="ipk"
                    name="ipk"
                    value={formData.ipk}
                    placeholder="Isikan IPK terakhir"
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    step="0.01"
                    min="0"
                    max="4"
                  />
                  {errors.ipk && (
                    <p className="text-red-500 text-sm">{errors.ipk}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setCurrentSection(1)}
                  type="button"
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Sebelumnya
                </button>
                <button
                  onClick={() => setCurrentSection(3)}
                  type="button"
                  className="bg-if-navy text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          )}

          {currentSection === 3 && (
            <div>
              <h2 className="text-lg font-bold text-if-navy mb-4">
                Informasi Sempro
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="judul" className="block font-medium mb-1">
                    Judul Proposal
                  </label>
                  <input
                    type="text"
                    id="judul"
                    name="judul"
                    value={formData.judul}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    placeholder="Isikan judul proposal Anda"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.judul && (
                    <p className="text-red-500 text-sm">{errors.judul}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="kelompokKeahlian"
                    className="block font-medium mb-1"
                  >
                    Kelompok Keahlian
                  </label>
                  <select
                    id="kelompokKeahlian"
                    name="kelompokKeahlian"
                    value={formData.kelompokKeahlian}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih Kelompok Keahlian</option>
                    {kelompokKeahlianOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.kelompokKeahlian && (
                    <p className="text-red-500 text-sm">
                      {errors.kelompokKeahlian}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="pembimbing1"
                    className="block font-medium mb-1"
                  >
                    Pembimbing 1
                  </label>
                  <select
                    id="pembimbing1"
                    name="pembimbing1"
                    value={formData.pembimbing1}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih Pembimbing 1</option>
                    {pembimbingOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.pembimbing1 && (
                    <p className="text-red-500 text-sm">{errors.pembimbing1}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="pembimbing2"
                    className="block font-medium mb-1"
                  >
                    Pembimbing 2
                  </label>
                  <select
                    id="pembimbing2"
                    name="pembimbing2"
                    value={formData.pembimbing2}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Pilih Pembimbing 2</option>
                    {pembimbingOptions
                      .filter((option) => option !== formData.pembimbing1)
                      .map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </select>
                  {errors.pembimbing2 && (
                    <p className="text-red-500 text-sm">{errors.pembimbing2}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setCurrentSection(2)}
                  type="button"
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Sebelumnya
                </button>
                <button
                  onClick={() => setCurrentSection(4)}
                  type="button"
                  className="bg-if-navy text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          )}

          {currentSection === 4 && (
            <div>
              <h2 className="text-lg font-bold text-if-navy mb-4">
                Lampiran Dokumen
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="proposal" className="block font-medium mb-1">
                    Tautan Proposal (PDF)
                  </label>
                  <input
                    type="url"
                    id="proposal"
                    name="proposal"
                    value={formData.proposal}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    placeholder="Masukkan tautan proposal (PDF)"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.proposal && (
                    <p className="text-red-500 text-sm">{errors.proposal}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="transkrip" className="block font-medium mb-1">
                    Tautan Transkrip Nilai (PDF)
                  </label>
                  <input
                    type="url"
                    id="transkrip"
                    name="transkrip"
                    value={formData.transkrip}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    placeholder="Masukkan tautan transkrip nilai (PDF)"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.transkrip && (
                    <p className="text-red-500 text-sm">{errors.transkrip}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="ppt" className="block font-medium mb-1">
                    Tautan PPT Presentasi (PDF)
                  </label>
                  <input
                    type="url"
                    id="ppt"
                    name="ppt"
                    value={formData.ppt}
                    onChange={(e) => handleChange(e, setFormData, setErrors)}
                    placeholder="Masukkan tautan PPT presentasi (PDF)"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.ppt && (
                    <p className="text-red-500 text-sm">{errors.ppt}</p>
                  )}
                </div>
              </div>
              <h2 className="text-lg font-bold text-if-navy mt-8">
                Pernyataan
              </h2>
              <label className="flex items-center mt-4">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={(e) => handleChange(e, setFormData, setErrors)}
                  className="mr-2"
                />
                Saya mengisikan data sejujur-jujurnya.
              </label>
              {errors.agreement && (
                <p className="text-red-500 text-sm">{errors.agreement}</p>
              )}

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setCurrentSection(3)}
                  type="button"
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                >
                  Sebelumnya
                </button>
                <button
                  type="submit"
                  disabled={!formData.agreement || isSubmitting} // Disabled saat submitting
                  className={`bg-if-navy text-white px-6 py-2 rounded-md transition ${
                    formData.agreement && !isSubmitting
                      ? "hover:bg-blue-800"
                      : "opacity-50"
                  }`}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
                </button>
              </div>
            </div>
          )}
        </form>
        {/* Tabel Data */}
        <DataTable submissions={submissions} />
      </div>
    </div>
  );
};

export default App;
