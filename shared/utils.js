// shared/utils.js

export function formatRp(amount) {
  if (amount === null || amount === undefined) return 'Rp 0';
  return 'Rp ' + Number(amount).toLocaleString('id-ID');
}

export function formatAngka(amount) {
  if (amount === null || amount === undefined) return '0';
  return Number(amount).toLocaleString('id-ID');
}

export function formatTanggal(dateStr) {
  if (!dateStr) return '';
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni',
                 'Juli','Agustus','September','Oktober','November','Desember'];
  const d = new Date(dateStr);
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatTanggalSingkat(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
}

export function showToast(message, type = 'success', duration = 2000) {
  const toast = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-green-600' : 
                  type === 'error' ? 'bg-red-600' : 'bg-blue-600';
  toast.className = `fixed top-4 right-4 ${bgColor} text-white px-4 py-3 rounded-lg shadow-lg z-50 text-base`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

export function namaBulan(bulan) {
  const nama = ['Januari','Februari','Maret','April','Mei','Juni',
                'Juli','Agustus','September','Oktober','November','Desember'];
  return nama[bulan - 1];
}