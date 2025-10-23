// Data rute dan harga (Rp per orang)
// Kunci: "Asal|Tujuan"
const routes = {
  // Medan ->
  "Medan|Pekanbaru": 400000,
  "Medan|Jambi": 670000,
  "Medan|Palembang": 850000,
  "Medan|Bandar Lampung": 1100000,
  "Medan|Jakarta": 1400000,
  "Medan|Bandung": 1550000,
  "Medan|Bogor": 1550000,
  "Medan|Semarang": 1750000,
  "Medan|Yogyakarta": 1900000,
  "Medan|Surabaya": 2000000,
  "Medan|Denpasar Bali": 2200000,

  // Pekanbaru ->
  "Pekanbaru|Jambi": 250000,
  "Pekanbaru|Palembang": 430000,
  "Pekanbaru|Bandar Lampung": 680000,
  "Pekanbaru|Jakarta": 1050000,
  "Pekanbaru|Bandung": 1150000,
  "Pekanbaru|Bogor": 1150000,
  "Pekanbaru|Semarang": 1300000,
  "Pekanbaru|Yogyakarta": 1450000,
  "Pekanbaru|Surabaya": 1650000,
  "Pekanbaru|Denpasar Bali": 1850000,

  // Bandar Lampung ->
  "Bandar Lampung|Jakarta": 350000,
  "Bandar Lampung|Bandung": 500000,
  "Bandar Lampung|Bogor": 500000,
  "Bandar Lampung|Garut": 550000,
  "Bandar Lampung|Semarang": 700000,
  "Bandar Lampung|Yogyakarta": 850000,
  "Bandar Lampung|Surabaya": 1000000,
  "Bandar Lampung|Denpasar Bali": 1200000,

  // Jambi ->
  "Jambi|Palembang": 180000,
  "Jambi|Bandar Lampung": 430000,
  "Jambi|Jakarta": 780000,
  "Jambi|Bandung": 1050000,
  "Jambi|Bogor": 1050000,
  "Jambi|Semarang": 1200000,
  "Jambi|Yogyakarta": 1350000,
  "Jambi|Surabaya": 1550000,
  "Jambi|Denpasar Bali": 1750000,

  // Palembang ->
  "Palembang|Bandar Lampung": 250000,
  "Palembang|Jakarta": 600000,
  "Palembang|Bandung": 750000,
  "Palembang|Bogor": 750000,
  "Palembang|Semarang": 900000,
  "Palembang|Surabaya": 1100000,
  "Palembang|Denpasar Bali": 1300000,

  // Jakarta ->
  "Jakarta|Bandung": 250000,
  "Jakarta|Bogor": 250000,
  "Jakarta|Sukabumi": 300000,
  "Jakarta|Tasikmalaya": 300000,
  "Jakarta|Garut": 300000,
  "Jakarta|Semarang": 350000,
  "Jakarta|Yogyakarta": 450000,
  "Jakarta|Surabaya": 550000,
  "Jakarta|Denpasar Bali": 800000,

  // Tanggerang (ejaan sesuai input) ->
  "Tanggerang|Bandung": 300000,
  "Tanggerang|Bogor": 300000,
  "Tanggerang|Sukabumi": 350000,
  "Tanggerang|Tasikmalaya": 350000,
  "Tanggerang|Garut": 350000,
  "Tanggerang|Semarang": 400000,
  "Tanggerang|Yogyakarta": 500000,
  "Tanggerang|Surabaya": 6000000,
  "Tanggerang|Denpasar Bali": 850000,

  // Bandung ->
  "Bandung|Jakarta": 250000,
  "Bandung|Bogor": 250000,
  "Bandung|Sukabumi": 300000,
  "Bandung|Tasikmalaya": 300000,
  "Bandung|Garut": 300000,
  "Bandung|Semarang": 350000,
  "Bandung|Yogyakarta": 450000,
  "Bandung|Surabaya": 550000,
  "Bandung|Denpasar Bali": 800000,

  // Denpasar Bali ->
  "Denpasar Bali|Pekanbaru": 1850000,
  "Denpasar Bali|Jambi": 1750000,
  "Denpasar Bali|Palembang": 1300000,
  "Denpasar Bali|Bandar Lampung": 1200000,
  "Denpasar Bali|Jakarta": 800000,
  "Denpasar Bali|Bandung": 800000,
  "Denpasar Bali|Bogor": 800000,
  "Denpasar Bali|Semarang": 500000,
  "Denpasar Bali|Yogyakarta": 550000,
  "Denpasar Bali|Surabaya": 350000,
  "Denpasar Bali|Medan": 2200000,
  "Denpasar Bali|Malang": 350000,

  // Yogyakarta ->
  "Yogyakarta|Pekanbaru": 1450000,
  "Yogyakarta|Jambi": 1350000,
  "Yogyakarta|Palembang": 1050000,
  "Yogyakarta|Bandar Lampung": 850000,
  "Yogyakarta|Jakarta": 450000,
  "Yogyakarta|Bandung": 450000,
  "Yogyakarta|Bogor": 700000,
  "Yogyakarta|Semarang": 250000,
  "Yogyakarta|Denpasar Bali": 550000,
  "Yogyakarta|Surabaya": 250000,
  "Yogyakarta|Medan": 1900000,

  // Surabaya ->
  "Surabaya|Jakarta": 550000,
  "Surabaya|Bandung": 550000,
  "Surabaya|Bogor": 600000,
  "Surabaya|Garut": 650000,
  "Surabaya|Tangerang": 600000,
  "Surabaya|Bandar Lampung": 950000,
  "Surabaya|Palembang": 1200000,
  "Surabaya|Jambi": 1380000,
  "Surabaya|Pekanbaru": 1750000,
  "Surabaya|Medan": 2150000,

  // Bogor ->
  "Bogor|Denpasar Bali": 800000,
  "Bogor|Surabaya": 550000,
  "Bogor|Yogyakarta": 700000,
  "Bogor|Semarang": 450000,
  "Bogor|Jakarta": 250000,
  "Bogor|Tangerang": 300000,
  "Bogor|Bandar Lampung": 650000,
  "Bogor|Palembang": 800000,
  "Bogor|Jambi": 1180000,
  "Bogor|Lubuklinggau": 1430000,
  "Bogor|Pekanbaru": 1430000,
  "Bogor|Medan": 1850000,

  // Sukabumi ->
  "Sukabumi|Denpasar Bali": 800000,
  "Sukabumi|Surabaya": 550000,
  "Sukabumi|Yogyakarta": 700000,
  "Sukabumi|Semarang": 450000,
  "Sukabumi|Jakarta": 250000,
  "Sukabumi|Tangerang": 300000,
  "Sukabumi|Bandar Lampung": 650000,
  "Sukabumi|Palembang": 800000,
  "Sukabumi|Jambi": 1180000,
  "Sukabumi|Lubuklinggau": 1430000,
  "Sukabumi|Pekanbaru": 1430000,
  "Sukabumi|Medan": 1850000,

  // Garut ->
  "Garut|Denpasar Bali": 850000,
  "Garut|Surabaya": 600000,
  "Garut|Yogyakarta": 750000,
  "Garut|Semarang": 500000,
  "Garut|Jakarta": 300000,
  "Garut|Tangerang": 350000,
  "Garut|Bandar Lampung": 700000,
  "Garut|Palembang": 850000,
  "Garut|Jambi": 1230000,
  "Garut|Lubuklinggau": 1480000,
  "Garut|Pekanbaru": 1480000,
  "Garut|Medan": 1900000,
};

// Daftar kota untuk select
const cities = [
  "Medan","Pekanbaru","Jambi","Palembang","Bandar Lampung","Jakarta","Bandung","Bogor","Semarang","Yogyakarta","Surabaya","Denpasar Bali","Sukabumi","Tasikmalaya","Garut","Tanggerang","Tangerang","Lubuklinggau","Malang"
];

// Helpers
const fmt = n => new Intl.NumberFormat('id-ID').format(n);
const rupiah = n => `Rp${fmt(n)}`;
const keyOf = (a,b) => `${a}|${b}`;

// Elements
const asal = document.getElementById('asal');
const tujuan = document.getElementById('tujuan');
const pax = document.getElementById('pax');
const nama = document.getElementById('nama');
const hp = document.getElementById('hp');
const tanggal = document.getElementById('tanggal');
const hargaPerOrang = document.getElementById('hargaPerOrang');
const hargaTotal = document.getElementById('hargaTotal');
const toStep2Btn = document.getElementById('to-step-2');
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const pill1 = document.getElementById('pill-1');
const pill2 = document.getElementById('pill-2');
const pill3 = document.getElementById('pill-3');
const ringkasan = document.getElementById('ringkasan');
const payBtn = document.getElementById('pay');
const waLink = document.getElementById('wa-link');

// Populate selects
function fillSelect(el, arr){
  el.innerHTML = '<option value="">— Pilih —</option>' + arr.map(c => `<option value="${c}">${c}</option>`).join('');
}
fillSelect(asal, cities);
fillSelect(tujuan, cities);
pax.innerHTML = Array.from({length:20}, (_,i)=>`<option value="${i+1}">${i+1} orang</option>`).join('');

// Default date: today
(function setToday(){
  const d = new Date();
  const iso = d.toISOString().slice(0,10);
  tanggal.value = iso;
  document.getElementById('year').textContent = d.getFullYear();
})();

// Pricing logic
function updatePricing(){
  const a = asal.value; const b = tujuan.value; const n = Number(pax.value || 1);
  let price = routes[keyOf(a,b)];
  // fallback: Tanggerang vs Tangerang
  if(price === undefined){
    const altA = a === 'Tanggerang' ? 'Tangerang' : a === 'Tangerang' ? 'Tanggerang' : a;
    const altB = b === 'Tanggerang' ? 'Tangerang' : b === 'Tangerang' ? 'Tanggerang' : b;
    price = routes[keyOf(altA,altB)];
  }
  if(!a || !b || a === b || price === undefined){
    hargaPerOrang.textContent = 'Rp0';
    hargaTotal.textContent = 'Rp0';
    return {price:0,total:0};
  }
  const total = price * n;
  hargaPerOrang.textContent = rupiah(price);
  hargaTotal.textContent = rupiah(total);
  return {price,total};
}

asal.addEventListener('change', updatePricing);
tujuan.addEventListener('change', updatePricing);
pax.addEventListener('change', updatePricing);

// Step change helpers
function setPill(step){
  [pill1,pill2,pill3].forEach(p=>p.classList.remove('active'));
  if(step===1) pill1.classList.add('active');
  if(step===2) pill2.classList.add('active');
  if(step===3) pill3.classList.add('active');
}

function goStep2(){
  step1.style.display = 'none';
  step2.style.display = 'block';
  step3.style.display = 'none';
  setPill(2);
}

function goStep3(){
  step1.style.display = 'none';
  step2.style.display = 'none';
  step3.style.display = 'block';
  setPill(3);
}

// Validasi sederhana
function validateStep1(){
  const {price} = updatePricing();
  const errs = [];
  if(!(nama.value||'').trim()) errs.push('Nama');
  if(!(hp.value||'').trim()) errs.push('No HP');
  if(!asal.value) errs.push('Kota Asal');
  if(!tujuan.value) errs.push('Kota Tujuan');
  if(asal.value && tujuan.value && asal.value === tujuan.value) errs.push('Asal & Tujuan tidak boleh sama');
  if(!tanggal.value) errs.push('Tanggal');
  if(price === 0) errs.push('Rute belum tersedia dalam daftar harga');
  if(errs.length){
    alert('Mohon lengkapi: ' + errs.join(', '));
    return false;
  }
  return true;
}

toStep2Btn.addEventListener('click', () => {
  if(!validateStep1()) return;
  goStep2();
});

// Step 2 choose time -> auto step 3
const timeButtons = [...document.querySelectorAll('.time')];
let pickedTime = '';
timeButtons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    timeButtons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    pickedTime = btn.dataset.time;
    // set ringkasan awal
    const a = asal.value, b = tujuan.value, n = Number(pax.value||1);
    const {price,total} = updatePricing();
    ringkasan.innerHTML = `${a} → ${b} • ${n} org • ${tanggal.value} • ${pickedTime} • ${rupiah(price)} /org • Total ${rupiah(total)}`;
    goStep3();
  });
});

// Step 3 pilih metode pembayaran
const payCards = [...document.querySelectorAll('.paycard')];
let payMethod = '';
payCards.forEach(card=>{
  card.addEventListener('click',()=>{
    payCards.forEach(c=>c.classList.remove('active'));
    card.classList.add('active');
    payMethod = card.dataset.method;
    payBtn.disabled = false;
  });
});

// Pay -> show modal + build WA link
payBtn.addEventListener('click', ()=>{
  const a = asal.value, b = tujuan.value, n = Number(pax.value||1);
  const {price,total} = updatePricing();
  const text = [
    '*KONFIRMASI PEMESANAN*',
    `Nama: ${nama.value}`,
    `HP: ${hp.value}`,
    `Asal → Tujuan: ${a} → ${b}`,
    `Tanggal/Jam: ${tanggal.value} • ${pickedTime}`,
    `Jumlah Orang: ${n}`,
    `Harga per orang: ${rupiah(price)}`,
    `TOTAL: ${rupiah(total)}`,
    `Metode Bayar: ${payMethod}`,
    '',
    'Mohon tindak lanjut penjemputan. Terima kasih.'
  ].join('%0A');
  const url = `https://wa.me/62895404019535?text=${text}`;
  waLink.href = url;
  document.getElementById('modal-ok').style.display='flex';
});
