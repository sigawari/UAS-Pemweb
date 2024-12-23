export const pembimbingOptions = [
  "Ir. Hira Laksmiwati, M.Sc.",
  "Aidil Afriansyah, S.Kom., M.Kom",
  "Arkham Zahri Rakhman, S.Kom., M.Eng.",
  "Imam Ekowicaksono, S.Si., M.Si.",
  "I Wayan Wiprayoga Wisesa, S.Kom., M.Kom.",
  "Angga Wijaya, S.Si., M.Si.",
  "Martin C.T. Manullang, S.T., M.T.",
  "Andika Setiawan, S.Kom., M.Cs.",
  "Ir. Mugi Praseptiawan, S.T., M.Kom.",
  "Meida Cahyo Untoro, S.Kom., M.Kom.",
  "Ilham Firman Ashari, S.Kom., M.T.",
  "Andre Febrianto, S.Kom., M.Eng.",
  "Muhammad Habib Algifari, S.Kom., M.T.I.",
  "Radhinka Bagaskara, S.Si.Kom., M.Si., M.Sc.",
  "Winda Yulita, M.Cs.",
  "Miranti Verdiana, M.Si.",
  "Eko Dwi Nugroho, S.Kom., M.Cs.",
  "Dr. Eng. Ir. Sarwono Sutikno, CISA",
  "Hafiz Budi Firmansyah, S.Kom., M.Sc.",
  "Hartanto Tantriawan, S.Kom., M.Kom.",
];

export const kelompokKeahlianOptions = [
  "Artificial Intelligence dan Data Engineering (AIDE)",
  "Rekayasa Perangkat Lunak dan Sistem Informasi (RPLSI)",
  "Keamanan Siber, Multimedia, dan IoT (KSMI)",
];

export const semesters = [...Array(8)].map((_, i) => 7 + i);

export const handleChange = (e, setFormData, setErrors) => {
  const { name, value, type, checked } = e.target;
  const updatedValue = type === "checkbox" ? checked : value;

  // Update formData
  setFormData((prevData) => ({
    ...prevData,
    [name]: updatedValue,
  }));

  // Real-time validation
  const error = validateField(name, updatedValue);
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: error,
  }));
};

const validateField = (name, value) => {
  switch (name) {
    case "nama":
      return value ? "" : "Nama wajib diisi.";
    case "nim":
      return value[3] === "1" && value[4] === "4"
        ? ""
        : "NIM harus sesuai format IF ITERA.";
    case "email":
      return value && value.endsWith("@student.itera.ac.id")
        ? ""
        : "Email harus menggunakan domain @student.itera.ac.id.";
    case "telepon":
      return /^08[0-9]{8,13}$/.test(value)
        ? ""
        : "Nomor telepon harus diawali dengan '08' dan terdiri dari 10-15 digit.";
    case "semester":
      return semesters.includes(Number(value)) ? "" : "Semester tidak valid.";
    case "ipk":
      return value >= 0 && value <= 4
        ? ""
        : "IPK harus berada di antara 0 dan 4.";
    case "judul":
      return value ? "" : "Judul proposal wajib diisi.";
    case "kelompokKeahlian":
      return value ? "" : "Kelompok keahlian wajib dipilih.";
    case "pembimbing1":
      return value ? "" : "Pembimbing 1 wajib dipilih.";
    case "pembimbing2":
      return value ? "" : "Pembimbing 2 wajib dipilih.";
    case "proposal":
    case "transkrip":
    case "ppt":
      return isValidURL(value)
        ? ""
        : "Masukkan tautan yang valid (format URL).";
    case "agreement":
      return value ? "" : "Anda harus menyetujui pernyataan.";
    default:
      return "";
  }
};

const isValidURL = (url) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)" + // Protocol
      "((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|" + // Domain name
      "localhost|" + // localhost
      "\\d{1,3}(\\.\\d{1,3}){3})" + // OR IP (v4)
      "(\\:\\d+)?(\\/[-a-zA-Z0-9%_.~+]*)*" + // Port and path
      "(\\?[;&a-zA-Z0-9%_.~+=-]*)?" + // Query string
      "(\\#[-a-zA-Z0-9_]*)?$", // Fragment locator
    "i"
  );
  return pattern.test(url);
};

export const validateForm = (formData, setErrors) => {
  const newErrors = {};
  Object.keys(formData).forEach((field) => {
    const error = validateField(field, formData[field]);
    if (error) newErrors[field] = error;
  });

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
