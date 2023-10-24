document.addEventListener("DOMContentLoaded", function() {
    const daftarButton = document.getElementById("daftar");
    const resetButton = document.getElementById("reset");
    const hasilDaftar = document.getElementById("hasil-daftar");

    daftarButton.addEventListener("click", function() {
        const nama = document.getElementById("nama").value;
        const nohp = document.getElementById("nohp").value;
        const alamat = document.getElementById("alamat").value;
        const jurusan = document.getElementById("jurusan").value;

        // Periksa apakah semua bidang telah diisi
        if (nama.trim() === "" || nohp.trim() === "" || alamat.trim() === "" || jurusan === "") {
            alert("Isi data terlebih dahulu.");
        } else {
            const hasilPendaftaran = document.createElement("div");
            hasilPendaftaran.innerHTML = `
                <p class="text-lg font-semibold">Data Pendaftaran:</p>
                <p><strong>Nama:</strong> ${nama}</p>
                <p><strong>Nomor HP:</strong> ${nohp}</p>
                <p><strong>Alamat:</strong> ${alamat}</p>
                <p><strong>Jurusan:</strong> ${jurusan === 'pengembangan' ? 'Pengembangan Perangkat Lunak' : jurusan === 'marketing' ? 'Digital Marketing' : 'Belum Memilih Jurusan'}</p>
            `;

            hasilDaftar.innerHTML = ""; // Hapus hasil sebelumnya
            hasilDaftar.appendChild(hasilPendaftaran);
        }
    });

    resetButton.addEventListener("click", function() {
        document.getElementById("nama").value = "";
        document.getElementById("nohp").value = "";
        document.getElementById("alamat").value = "";
        document.getElementById("jurusan").value = "";
        hasilDaftar.innerHTML = ""; // Hapus hasil sebelumnya
    });
});
