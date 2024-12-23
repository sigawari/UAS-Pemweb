import PropTypes from "prop-types"; // Tambahkan impor ini

const DataTable = ({ submissions }) => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold text-if-navy mb-4">Data Pendaftaran</h2>
      {submissions.length === 0 ? (
        <p className="text-gray-500">Belum ada data pendaftaran.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-200 rounded-lg shadow">
            <thead>
              <tr className="bg-if-navy text-white">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">NIM</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Telepon</th>
                <th className="px-4 py-2">Judul Proposal</th>
                <th className="px-4 py-2">Kelompok Keahlian</th>
                <th className="px-4 py-2">Pembimbing 1</th>
                <th className="px-4 py-2">Pembimbing 2</th>
                <th className="px-4 py-2">IPK</th>
                <th className="px-4 py-2">Proposal</th>
                <th className="px-4 py-2">Transkrip</th>
                <th className="px-4 py-2">PPT</th>
                <th className="px-4 py-2">Browser</th>
                <th className="px-4 py-2">IP Address</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr
                  key={submission.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">{submission.nama}</td>
                  <td className="border px-4 py-2">{submission.nim}</td>
                  <td className="border px-4 py-2">{submission.email}</td>
                  <td className="border px-4 py-2">{submission.telepon}</td>
                  <td className="border px-4 py-2">{submission.judul}</td>
                  <td className="border px-4 py-2">
                    {submission.kelompok_keahlian}
                  </td>
                  <td className="border px-4 py-2">{submission.pembimbing1}</td>
                  <td className="border px-4 py-2">{submission.pembimbing2}</td>
                  <td className="border px-4 py-2">{submission.ipk}</td>
                  <td className="border px-4 py-2">
                    <a
                      href={submission.proposal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Lihat Proposal
                    </a>
                  </td>
                  <td className="border px-4 py-2">
                    <a
                      href={submission.transkrip}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Lihat Transkrip
                    </a>
                  </td>
                  <td className="border px-4 py-2">
                    <a
                      href={submission.ppt}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Lihat PPT
                    </a>
                  </td>
                  <td className="border px-4 py-2">
                    {submission.browser || "Tidak diketahui"}
                  </td>
                  <td className="border px-4 py-2">{submission.ip_address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

DataTable.propTypes = {
  submissions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nama: PropTypes.string.isRequired,
      nim: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      telepon: PropTypes.string.isRequired,
      judul: PropTypes.string.isRequired,
      kelompok_keahlian: PropTypes.string.isRequired,
      pembimbing1: PropTypes.string.isRequired,
      pembimbing2: PropTypes.string.isRequired,
      ipk: PropTypes.number.isRequired,
      proposal: PropTypes.string.isRequired, // Tautan proposal
      transkrip: PropTypes.string.isRequired, // Tautan transkrip
      ppt: PropTypes.string.isRequired, // Tautan PPT
      browser: PropTypes.string,
      ip_address: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DataTable;
