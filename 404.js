// Isi timestamp (tanggal sekarang) agar pengguna tahu halaman ini terbaru
(function(){
  const ts = document.getElementById('ts');
  const d = new Date();
  const opt = { year: 'numeric', month: 'short', day: '2-digit', hour:'2-digit', minute:'2-digit' };
  ts.textContent = d.toLocaleString('id-ID', opt);
})();

// Fungsi pencarian sederhana — jika situsmu punya pencarian, sesuaikan endpoint
function doSearch(){
  const q = document.getElementById('q').value.trim();
  if(!q) {
    document.getElementById('q').focus();
    return;
  }
  const url = '/search?q=' + encodeURIComponent(q);
  window.location.href = url;
}

// Optional redirect otomatis ke beranda (nonaktif secara default)
// setTimeout(() => window.location.href='/', 10000);
