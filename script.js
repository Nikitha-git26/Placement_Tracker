const companyInput = document.getElementById('companyInput');
const typeSelect = document.getElementById('typeSelect');
const statusSelect = document.getElementById('statusSelect');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const companyList = document.getElementById('companyList');

// Load companies from localStorage
function loadCompanies() {
  const data = JSON.parse(localStorage.getItem('companies')) || [];
  companyList.innerHTML = '';
  data.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.type} - ${item.status}`;
    companyList.appendChild(li);
  });
}

// Add company
addBtn.addEventListener('click', () => {
  const name = companyInput.value.trim();
  const type = typeSelect.value;
  const status = statusSelect.value;

  if (!name) return alert('Please enter company name');

  const data = JSON.parse(localStorage.getItem('companies')) || [];
  data.push({ name, type, status });
  localStorage.setItem('companies', JSON.stringify(data));

  companyInput.value = '';
  loadCompanies();
});

// Clear all
clearBtn.addEventListener('click', () => {
  localStorage.removeItem('companies');
  loadCompanies();
});

loadCompanies();
