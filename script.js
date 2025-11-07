const companyInput = document.getElementById('companyInput');
const typeSelect = document.getElementById('typeSelect');
const statusSelect = document.getElementById('statusSelect');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const companyList = document.getElementById('companyList');

const API_URL = 'http://localhost:5000/companies';

// Load companies from backend
async function loadCompanies() {
  const res = await fetch(API_URL);
  const data = await res.json();
  companyList.innerHTML = '';
  data.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.type} - ${item.status}`;
    companyList.appendChild(li);
  });
}

// Add company
addBtn.addEventListener('click', async () => {
  const name = companyInput.value.trim();
  const type = typeSelect.value;
  const status = statusSelect.value;

  if (!name) return alert('Please enter company name');

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, type, status }),
  });

  companyInput.value = '';
  loadCompanies();
});

// Clear all
clearBtn.addEventListener('click', async () => {
  await fetch(API_URL, { method: 'DELETE' });
  loadCompanies();
});

loadCompanies();
