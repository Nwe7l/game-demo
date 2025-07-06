import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

// إعدادات Firebase الخاصة بك (استبدلها ببياناتك)
const firebaseConfig = {
  apiKey: "AIzaSyDW3TblyoZWcr5yG9AQeF2DgN3LJg4bOio",
  authDomain: "data-8fa5e.firebaseapp.com",
  databaseURL: "https://data-8fa5e-default-rtdb.firebaseio.com",
  projectId: "data-8fa5e",
  storageBucket: "data-8fa5e.appspot.com",
  messagingSenderId: "1083428453231",
  appId: "1:1083428453231:web:6dbfc0c2c01c63313d069a",
  measurementId: "G-YH6ZVS8GRD"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const dashboardBody = document.getElementById('dashboardBody');
const modal = document.getElementById('modal');
const schoolList = document.getElementById('schoolList');
const modalTitle = document.getElementById('modalTitle');
const closeModalBtn = document.getElementById('closeModal');

let data = {};

// بيانات افتراضية في حال القاعدة فاضية
const defaultData = {
  Muscat: {
    "Socket": [
      { name: "School 1", status: "green" },
      { name: "School 2", status: "red" },
      { name: "School 3", status: "orange" }
    ],
    "Paints": [
      { name: "School 1", status: "green" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "red" }
    ],
    "Software Installation": [
      { name: "School 1", status: "red" },
      { name: "School 2", status: "orange" },
      { name: "School 3", status: "green" }
    ],
    "Screen Installation": [
      { name: "School 1", status: "orange" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "green" }
    ]
  },
  Salalah: {
    "Socket": [
      { name: "School 1", status: "red" },
      { name: "School 2", status: "red" },
      { name: "School 3", status: "orange" }
    ],
    "Paints": [
      { name: "School 1", status: "orange" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "green" }
    ],
    "Software Installation": [
      { name: "School 1", status: "green" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "red" }
    ],
    "Screen Installation": [
      { name: "School 1", status: "green" },
      { name: "School 2", status: "red" },
      { name: "School 3", status: "green" }
    ]
  },
  Sohar: {
    "Socket": [
      { name: "School 1", status: "green" },
      { name: "School 2", status: "orange" },
      { name: "School 3", status: "red" }
    ],
    "Paints": [
      { name: "School 1", status: "red" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "orange" }
    ],
    "Software Installation": [
      { name: "School 1", status: "green" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "orange" }
    ],
    "Screen Installation": [
      { name: "School 1", status: "orange" },
      { name: "School 2", status: "red" },
      { name: "School 3", status: "green" }
    ]
  },
  Sur: {
    "Socket": [
      { name: "School 1", status: "red" },
      { name: "School 2", status: "red" },
      { name: "School 3", status: "red" }
    ],
    "Paints": [
      { name: "School 1", status: "red" },
      { name: "School 2", status: "orange" },
      { name: "School 3", status: "green" }
    ],
    "Software Installation": [
      { name: "School 1", status: "red" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "orange" }
    ],
    "Screen Installation": [
      { name: "School 1", status: "green" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "orange" }
    ]
  },
  Nizwa: {
    "Socket": [
      { name: "School 1", status: "orange" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "red" }
    ],
    "Paints": [
      { name: "School 1", status: "green" },
      { name: "School 2", status: "orange" },
      { name: "School 3", status: "red" }
    ],
    "Software Installation": [
      { name: "School 1", status: "orange" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "orange" }
    ],
    "Screen Installation": [
      { name: "School 1", status: "red" },
      { name: "School 2", status: "green" },
      { name: "School 3", status: "orange" }
    ]
  }
};

// دالة لحساب الحالة العامة للمدارس داخل مهمة معينة (red > orange > green)
function getOverallStatus(schools) {
  let status = "green";
  for (const school of schools) {
    if (school.status === "red") return "red";
    if (school.status === "orange") status = "orange";
  }
  return status;
}

// بناء الجدول من البيانات
function buildTable() {
  dashboardBody.innerHTML = "";
  for (const region in data) {
    const row = document.createElement('tr');

    const tdRegion = document.createElement('td');
    tdRegion.textContent = region;
    row.appendChild(tdRegion);

    const tasks = ["Socket", "Paints", "Software Installation", "Screen Installation"];
    for (const task of tasks) {
      const td = document.createElement('td');
      const status = getOverallStatus(data[region][task] || []);
      const span = document.createElement('span');
      span.className = `circle ${status}`;
      span.setAttribute('data-region', region);
      span.setAttribute('data-task', task);
      td.appendChild(span);
      row.appendChild(td);
    }
    dashboardBody.appendChild(row);
  }

  // ربط حدث الضغط على الدائرة لفتح النافذة
  document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', (e) => {
      const region = e.target.getAttribute('data-region');
      const task = e.target.getAttribute('data-task');
      openModal(region, task);
    });
  });
}

// فتح نافذة تعديل حالة المدارس
function openModal(region, task) {
  modal.style.display = "flex";
  modalTitle.textContent = `${region} - ${task} Schools`;
  schoolList.innerHTML = "";

  if (data[region] && data[region][task]) {
    data[region][task].forEach((school, index) => {
      const div = document.createElement('div');
      div.className = "school-item";
      div.innerHTML = `
        <span class="circle ${school.status}"></span>
        <span class="school-name">${school.name}</span>
        <select class="status-select">
          <option value="green" ${school.status === "green" ? "selected" : ""}>Green</option>
          <option value="orange" ${school.status === "orange" ? "selected" : ""}>Orange</option>
          <option value="red" ${school.status === "red" ? "selected" : ""}>Red</option>
        </select>
      `;
      div.querySelector('select').addEventListener('change', e => {
        const newStatus = e.target.value;
        data[region][task][index].status = newStatus;
        div.querySelector('.circle').className = "circle " + newStatus;
        updateFirebaseData();
      });
      schoolList.appendChild(div);
    });
  } else {
    schoolList.textContent = "No schools data available.";
  }
}

// تحديث البيانات في Firebase
function updateFirebaseData() {
  set(ref(db, 'omanDashboardData'), data);
}

// إغلاق النافذة
closeModalBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

// استرجاع البيانات من Firebase ومراقبة التغييرات
onValue(ref(db, 'omanDashboardData'), (snapshot) => {
  if (snapshot.exists()) {
    data = snapshot.val();
    buildTable();
  } else {
    data = defaultData;
    updateFirebaseData();
  }
});
