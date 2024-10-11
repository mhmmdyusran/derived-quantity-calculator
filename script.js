function tampilkanForm() {
    const formContainer = document.getElementById('formContainer');
    const rumus = document.getElementById('rumusSelect').value;
    formContainer.innerHTML = '';

    switch (rumus) {
        case 'kecepatan':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="kecepatan_jarak">Jarak (m):</label>
                    <input type="number" id="kecepatan_jarak">
                    <label for="kecepatan_waktu">Waktu (s):</label>
                    <input type="number" id="kecepatan_waktu">
                    <button onclick="hitungKecepatan()">Hitung Kecepatan</button>
                    <div id="kecepatan_hasil" class="result"></div>
                </div>`;
            break;
        case 'percepatan':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="percepatan_deltaV">Perubahan Kecepatan (m/s):</label>
                    <input type="number" id="percepatan_deltaV">
                    <label for="percepatan_deltaT">Perubahan Waktu (s):</label>
                    <input type="number" id="percepatan_deltaT">
                    <button onclick="hitungPercepatan()">Hitung Percepatan</button>
                    <div id="percepatan_hasil" class="result"></div>
                </div>`;
            break;
        case 'gaya':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="gaya_massa">Massa (kg):</label>
                    <input type="number" id="gaya_massa">
                    <label for="gaya_percepatan">Percepatan (m/s²):</label>
                    <input type="number" id="gaya_percepatan">
                    <button onclick="hitungGaya()">Hitung Gaya</button>
                    <div id="gaya_hasil" class="result"></div>
                </div>`;
            break;
        case 'usaha':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="usaha_gaya">Gaya (N):</label>
                    <input type="number" id="usaha_gaya">
                    <label for="usaha_jarak">Jarak (m):</label>
                    <input type="number" id="usaha_jarak">
                    <label for="usaha_sudut">Sudut (derajat):</label>
                    <input type="number" id="usaha_sudut">
                    <button onclick="hitungUsaha()">Hitung Usaha</button>
                    <div id="usaha_hasil" class="result"></div>
                </div>`;
            break;
        case 'energiKinetik':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="energiKinetik_massa">Massa (kg):</label>
                    <input type="number" id="energiKinetik_massa">
                    <label for="energiKinetik_kecepatan">Kecepatan (m/s):</label>
                    <input type="number" id="energiKinetik_kecepatan">
                    <button onclick="hitungEnergiKinetik()">Hitung Energi Kinetik</button>
                    <div id="energiKinetik_hasil" class="result"></div>
                </div>`;
            break;
        case 'energiPotensial':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="energiPotensial_massa">Massa (kg):</label>
                    <input type="number" id="energiPotensial_massa">
                    <label for="energiPotensial_gravitasi">Gravitasi (m/s²):</label>
                    <input type="number" id="energiPotensial_gravitasi">
                    <label for="energiPotensial_tinggi">Tinggi (m):</label>
                    <input type="number" id="energiPotensial_tinggi">
                    <button onclick="hitungEnergiPotensial()">Hitung Energi Potensial</button>
                    <div id="energiPotensial_hasil" class="result"></div>
                </div>`;
            break;
        case 'momentum':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="momentum_massa">Massa (kg):</label>
                    <input type="number" id="momentum_massa">
                    <label for="momentum_kecepatan">Kecepatan (m/s):</label>
                    <input type="number" id="momentum_kecepatan">
                    <button onclick="hitungMomentum()">Hitung Momentum</button>
                    <div id="momentum_hasil" class="result"></div>
                </div>`;
            break
          case 'daya':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="daya_usaha">Usaha (J):</label>
                    <input type="number" id="daya_usaha">
                    <label for="daya_waktu">Waktu (s):</label>
                    <input type="number" id="daya_waktu">
                    <button onclick="hitungDaya()">Hitung Daya</button>
                    <div id="daya_hasil" class="result"></div>
                </div>`;
            break;
        case 'tekanan':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="tekanan_gaya">Gaya (N):</label>
                    <input type="number" id="tekanan_gaya">
                    <label for="tekanan_luas">Luas (m²):</label>
                    <input type="number" id="tekanan_luas">
                    <button onclick="hitungTekanan()">Hitung Tekanan</button>
                    <div id="tekanan_hasil" class="result"></div>
                </div>`;
            break;
        case 'stefanBoltzmann':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="stefanBoltzmann_area">Area (m²):</label>
                    <input type="number" id="stefanBoltzmann_area">
                    <label for="stefanBoltzmann_suhu">Suhu (K):</label>
                    <input type="number" id="stefanBoltzmann_suhu">
                    <button onclick="hitungStefanBoltzmann()">Hitung Stefan-Boltzmann</button>
                    <div id="stefanBoltzmann_hasil" class="result"></div>
                </div>`;
            break;
        case 'momentumSudut':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="momentumSudut_momenInersia">Momen Inersia (kg·m²):</label>
                    <input type="number" id="momentumSudut_momenInersia">
                    <label for="momentumSudut_kecepatanSudut">Kecepatan Sudut (rad/s):</label>
                    <input type="number" id="momentumSudut_kecepatanSudut">
                    <button onclick="hitungMomentumSudut()">Hitung Momentum Sudut</button>
                    <div id="momentumSudut_hasil" class="result"></div>
                </div>`;
            break;
        case 'impuls':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="impuls_gaya">Gaya (N):</label>
                    <input type="number" id="impuls_gaya">
                    <label for="impuls_waktu">Waktu (s):</label>
                    <input type="number" id="impuls_waktu">
                    <button onclick="hitungImpuls()">Hitung Impuls</button>
                    <div id="impuls_hasil" class="result"></div>
                </div>`;
            break;
        case 'dayaListrik':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="dayaListrik_tegangan">Tegangan (V):</label>
                    <input type="number" id="dayaListrik_tegangan">
                    <label for="dayaListrik_arus">Arus (A):</label>
                    <input type="number" id="dayaListrik_arus">
                    <button onclick="hitungDayaListrik()">Hitung Daya Listrik</button>
                    <div id="dayaListrik_hasil" class="result"></div>
                </div>`;
            break;
        case 'kapasitasPanas':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="kapasitasPanas_massa">Massa (kg):</label>
                    <input type="number" id="kapasitasPanas_massa">
                    <label for="kapasitasPanas_cepatPanas">Kapasitas Panas Jenis (J/kg·K):</label>
                    <input type="number" id="kapasitasPanas_cepatPanas">
                    <label for="kapasitasPanas_perubahanSuhu">Perubahan Suhu (K):</label>
                    <input type="number" id="kapasitasPanas_perubahanSuhu">
                    <button onclick="hitungKapasitasPanas()">Hitung Kapasitas Panas</button>
                    <div id="kapasitasPanas_hasil" class="result"></div>
                </div>`;
            break;
        case 'volume':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="volume_panjang">Panjang (m):</label>
                    <input type="number" id="volume_panjang">
                    <label for="volume_lebar">Lebar (m):</label>
                    <input type="number" id="volume_lebar">
                    <label for="volume_tinggi">Tinggi (m):</label>
                    <input type="number" id="volume_tinggi">
                    <button onclick="hitungVolume()">Hitung Volume</button>
                    <div id="volume_hasil" class="result"></div>
                </div>`;
            break;
        case 'densitas':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="densitas_massa">Massa (kg):</label>
                    <input type="number" id="densitas_massa">
                    <label for="densitas_volume">Volume (m³):</label>
                    <input type="number" id="densitas_volume">
                    <button onclick="hitungDensitas()">Hitung Densitas</button>
                    <div id="densitas_hasil" class="result"></div>
                </div>`;
            break;
        case 'gayaGesekan':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="gayaGesekan_koefGesekan">Koefisien Gesekan:</label>
                    <input type="number" id="gayaGesekan_koefGesekan">
                    <label for="gayaGesekan_gayaNormal">Gaya Normal (N):</label>
                    <input type="number" id="gayaGesekan_gayaNormal">
                    <button onclick="hitungGayaGesekan()">Hitung Gaya Gesekan</button>
                    <div id="gayaGesekan_hasil" class="result"></div>
                </div>`;
            break;
        case 'energiMekanik':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="energiMekanik_energiKinetik">Energi Kinetik (J):</label>
                    <input type="number" id="energiMekanik_energiKinetik">
                    <label for="energiMekanik_energiPotensial">Energi Potensial (J):</label>
                    <input type="number" id="energiMekanik_energiPotensial">
                    <button onclick="hitungEnergiMekanik()">Hitung Energi Mekanik</button>
                    <div id="energiMekanik_hasil" class="result"></div>
                </div>`;
            break;
        case 'frekuensi':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="frekuensi_jumlahGetaran">Jumlah Getaran:</label>
                    <input type="number" id="frekuensi_jumlahGetaran">
                    <label for="frekuensi_waktu">Waktu (s):</label>
                    <input type="number" id="frekuensi_waktu">
                    <button onclick="hitungFrekuensi()">Hitung Frekuensi</button>
                    <div id="frekuensi_hasil" class="result"></div>
                </div>`;
            break;
        case 'waktu':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="waktu_frekuensi">Frekuensi (Hz):</label>
                    <input type="number" id="waktu_frekuensi">
                    <button onclick="hitungWaktu()">Hitung Waktu</button>
                    <div id="waktu_hasil" class="result"></div>
                </div>`;
            break;
        case 'panjangGelombang':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="panjangGelombang_cepatRambat">Cepat Rambat (m/s):</label>
                    <input type="number" id="panjangGelombang_cepatRambat">
                    <label for="panjangGelombang_frekuensi">Frekuensi (Hz):</label>
                    <input type="number" id="panjangGelombang_frekuensi">
                    <button onclick="hitungPanjangGelombang()">Hitung Panjang Gelombang</button>
                    <div id="panjangGelombang_hasil" class="result"></div>
                </div>`;
            break;
        case 'tekananHidrostatis':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="tekananHidrostatis_densitasCairan">Densitas Cairan (kg/m³):</label>
                    <input type="number" id="tekananHidrostatis_densitasCairan">
                    <label for="tekananHidrostatis_gravitasi">Gravitasi (m/s²):</label>
                    <input type="number" id="tekananHidrostatis_gravitasi">
                    <label for="tekananHidrostatis_tinggiCairan">Tinggi Cairan (m):</label>
                    <input type="number" id="tekananHidrostatis_tinggiCairan">
                    <button onclick="hitungTekananHidrostatis()">Hitung Tekanan Hidrostatis</button>
                    <div id="tekananHidrostatis_hasil" class="result"></div>
                </div>`;
            break;
        case 'modulusYoung':
            formContainer.innerHTML = `
                <div class="form-group">
                    <label for="modulusYoung_stress">Stress (Pa):</label>
                    <input type="number" id="modulusYoung_stress">
                    <label for="modulusYoung_strain">Strain:</label>
                    <input type="number" id="modulusYoung_strain">
                    <button onclick="hitungModulusYoung()">Hitung Modulus Young</button>
                    <div id="modulusYoung_hasil" class="result"></div>
                </div>`;
            break;
        default:
            formContainer.innerHTML = '';
            break;
    }
}

function hitungKecepatan() {
    const jarak = parseFloat(document.getElementById('kecepatan_jarak').value);
    const waktu = parseFloat(document.getElementById('kecepatan_waktu').value);
    const kecepatan = jarak / waktu;
    document.getElementById('kecepatan_hasil').innerText = `Kecepatan: ${kecepatan.toFixed(2)} m/s`;
}

function hitungPercepatan() {
    const deltaV = parseFloat(document.getElementById('percepatan_deltaV').value);
    const deltaT = parseFloat(document.getElementById('percepatan_deltaT').value);
    const percepatan = deltaV / deltaT;
    document.getElementById('percepatan_hasil').innerText = `Percepatan: ${percepatan.toFixed(2)} m/s²`;
}

function hitungGaya() {
    const massa = parseFloat(document.getElementById('gaya_massa').value);
    const percepatan = parseFloat(document.getElementById('gaya_percepatan').value);
    const gaya = massa * percepatan;
    document.getElementById('gaya_hasil').innerText = `Gaya: ${gaya.toFixed(2)} N`;
}

function hitungUsaha() {
    const gaya = parseFloat(document.getElementById('usaha_gaya').value);
    const jarak = parseFloat(document.getElementById('usaha_jarak').value);
    const sudut = parseFloat(document.getElementById('usaha_sudut').value);
    const usaha = gaya * jarak * Math.cos(sudut * Math.PI / 180);
    document.getElementById('usaha_hasil').innerText = `Usaha: ${usaha.toFixed(2)} J`;
}

function hitungEnergiKinetik() {
    const massa = parseFloat(document.getElementById('energiKinetik_massa').value);
    const kecepatan = parseFloat(document.getElementById('energiKinetik_kecepatan').value);
    const energiKinetik = 0.5 * massa * kecepatan * kecepatan;
    document.getElementById('energiKinetik_hasil').innerText = `Energi Kinetik: ${energiKinetik.toFixed(2)} J`;
}

function hitungEnergiPotensial() {
    const massa = parseFloat(document.getElementById('energiPotensial_massa').value);
    const gravitasi = parseFloat(document.getElementById('energiPotensial_gravitasi').value);
    const tinggi = parseFloat(document.getElementById('energiPotensial_tinggi').value);
    const energiPotensial = massa * gravitasi * tinggi;
    document.getElementById('energiPotensial_hasil').innerText = `Energi Potensial: ${energiPotensial.toFixed(2)} J`;
}

function hitungMomentum() {
    const massa = parseFloat(document.getElementById('momentum_massa').value);
    const kecepatan = parseFloat(document.getElementById('momentum_kecepatan').value);
    const momentum = massa * kecepatan;
    document.getElementById('momentum_hasil').innerText = `Momentum: ${momentum.toFixed(2)} kg·m/s`;
}

function hitungDaya() {
    const usaha = parseFloat(document.getElementById('daya_usaha').value);
    const waktu = parseFloat(document.getElementById('daya_waktu').value);
    const daya = usaha / waktu;
    document.getElementById('daya_hasil').innerText = `Daya: ${daya.toFixed(2)} W`;
}

function hitungTekanan() {
    const gaya = parseFloat(document.getElementById('tekanan_gaya').value);
    const luas = parseFloat(document.getElementById('tekanan_luas').value);
    const tekanan = gaya / luas;
    document.getElementById('tekanan_hasil').innerText = `Tekanan: ${tekanan.toFixed(2)} Pa`;
}

function hitungStefanBoltzmann() {
    const area = parseFloat(document.getElementById('stefanBoltzmann_area').value);
    const suhu = parseFloat(document.getElementById('stefanBoltzmann_suhu').value);
    const konstantaStefanBoltzmann = 5.67e-8;
    const energiRadiasi = konstantaStefanBoltzmann * area * Math.pow(suhu, 4);
    document.getElementById('stefanBoltzmann_hasil').innerText = `Energi Radiasi: ${energiRadiasi.toFixed(2)} W`;
}

function hitungMomentumSudut() {
    const momenInersia = parseFloat(document.getElementById('momentumSudut_momenInersia').value);
    const kecepatanSudut = parseFloat(document.getElementById('momentumSudut_kecepatanSudut').value);
    const momentumSudut = momenInersia * kecepatanSudut;
    document.getElementById('momentumSudut_hasil').innerText = `Momentum Sudut: ${momentumSudut.toFixed(2)} kg·m²/s`;
}

function hitungImpuls() {
    const gaya = parseFloat(document.getElementById('impuls_gaya').value);
    const waktu = parseFloat(document.getElementById('impuls_waktu').value);
    const impuls = gaya * waktu;
    document.getElementById('impuls_hasil').innerText = `Impuls: ${impuls.toFixed(2)} N·s`;
}

function hitungDayaListrik() {
    const tegangan = parseFloat(document.getElementById('dayaListrik_tegangan').value);
    const arus = parseFloat(document.getElementById('dayaListrik_arus').value);
    const dayaListrik = tegangan * arus;
    document.getElementById('dayaListrik_hasil').innerText = `Daya Listrik: ${dayaListrik.toFixed(2)} W`;
}

function hitungKapasitasPanas() {
    const massa = parseFloat(document.getElementById('kapasitasPanas_massa').value);
    const kapasitasPanasJenis = parseFloat(document.getElementById('kapasitasPanas_cepatPanas').value);
    const perubahanSuhu = parseFloat(document.getElementById('kapasitasPanas_perubahanSuhu').value);
    const kapasitasPanas = massa * kapasitasPanasJenis * perubahanSuhu;
    document.getElementById('kapasitasPanas_hasil').innerText = `Kapasitas Panas: ${kapasitasPanas.toFixed(2)} J`;
}

function hitungVolume() {
    const panjang = parseFloat(document.getElementById('volume_panjang').value);
    const lebar = parseFloat(document.getElementById('volume_lebar').value);
    const tinggi = parseFloat(document.getElementById('volume_tinggi').value);
    const volume = panjang * lebar * tinggi;
    document.getElementById('volume_hasil').innerText = `Volume: ${volume.toFixed(2)} m³`;
}

function hitungDensitas() {
    const massa = parseFloat(document.getElementById('densitas_massa').value);
    const volume = parseFloat(document.getElementById('densitas_volume').value);
    const densitas = massa / volume;
    document.getElementById('densitas_hasil').innerText = `Densitas: ${densitas.toFixed(2)} kg/m³`;
}

function hitungGayaGesekan() {
    const koefGesekan = parseFloat(document.getElementById('gayaGesekan_koefGesekan').value);
    const gayaNormal = parseFloat(document.getElementById('gayaGesekan_gayaNormal').value);
    const gayaGesekan = koefGesekan * gayaNormal;
    document.getElementById('gayaGesekan_hasil').innerText = `Gaya Gesekan: ${gayaGesekan.toFixed(2)} N`;
}

function hitungEnergiMekanik() {
    const energiKinetik = parseFloat(document.getElementById('energiMekanik_energiKinetik').value);
    const energiPotensial = parseFloat(document.getElementById('energiMekanik_energiPotensial').value);
    const energiMekanik = energiKinetik + energiPotensial;
    document.getElementById('energiMekanik_hasil').innerText = `Energi Mekanik: ${energiMekanik.toFixed(2)} J`;
}

function hitungFrekuensi() {
    const jumlahGetaran = parseFloat(document.getElementById('frekuensi_jumlahGetaran').value);
    const waktu = parseFloat(document.getElementById('frekuensi_waktu').value);
    const frekuensi = jumlahGetaran / waktu;
    document.getElementById('frekuensi_hasil').innerText = `Frekuensi: ${frekuensi.toFixed(2)} Hz`;
}

function hitungWaktu() {
    const frekuensi = parseFloat(document.getElementById('waktu_frekuensi').value);
    const waktu = 1 / frekuensi;
    document.getElementById('waktu_hasil').innerText = `Waktu: ${waktu.toFixed(2)} s`;
}

function hitungPanjangGelombang() {
    const cepatRambat = parseFloat(document.getElementById('panjangGelombang_cepatRambat').value);
    const frekuensi = parseFloat(document.getElementById('panjangGelombang_frekuensi').value);
    const panjangGelombang = cepatRambat / frekuensi;
    document.getElementById('panjangGelombang_hasil').innerText = `Panjang Gelombang: ${panjangGelombang.toFixed(2)} m`;
}

function hitungTekananHidrostatis() {
    const densitasCairan = parseFloat(document.getElementById('tekananHidrostatis_densitasCairan').value);
    const gravitasi = parseFloat(document.getElementById('tekananHidrostatis_gravitasi').value);
    const tinggiCairan = parseFloat(document.getElementById('tekananHidrostatis_tinggiCairan').value);
    const tekananHidrostatis = densitasCairan * gravitasi * tinggiCairan;
    document.getElementById('tekananHidrostatis_hasil').innerText = `Tekanan Hidrostatis: ${tekananHidrostatis.toFixed(2)} Pa`;
}

function hitungModulusYoung() {
    const stress = parseFloat(document.getElementById('modulusYoung_stress').value);
    const strain = parseFloat(document.getElementById('modulusYoung_strain').value);
    const modulusYoung = stress / strain;
    document.getElementById('modulusYoung_hasil').innerText = `Modulus Young: ${modulusYoung.toFixed(2)} Pa`;
}