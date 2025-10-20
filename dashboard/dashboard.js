if (!localStorage.getItem('lockr_keys')) {
  localStorage.setItem('lockr_keys', JSON.stringify([]));
}

function getKeys() {
  return JSON.parse(localStorage.getItem('lockr_keys'));
}

function saveKeys(keys) {
  localStorage.setItem('lockr_keys', JSON.stringify(keys));
}

function generateKey() {
  const key = 'LK-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const keys = getKeys();
  keys.push({ key, status: 'active', created: new Date().toLocaleString() });
  saveKeys(keys);
  return key;
}