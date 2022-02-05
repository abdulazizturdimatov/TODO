let tasks = [
    {
      title: "3-Vazifa",
      desc: "Ijtimoiy tarmoq",
      staff: "Ali",
      startDate: "20.01.22",
      finishDate: "25.02.22",
      status: "Pending",
      price: 150,
    },
    {
      title: "1-Vazifa",
      desc: "Advertising",
      staff: "Aziz",
      startDate: "12.01.22",
      finishDate: "12.02.22",
      status: "Doing",
      price: 400,
    },
    {
      title: "1-Vazifa",
      desc: "Website",
      staff: "Vali",
      startDate: "12.02.22",
      finishDate: "12.03.22",
      status: "Done",
      price: 800,
    },
    {
      title: "2-Vazifa",
      desc: "Communal site",
      staff: "Ali",
      startDate: "12.01.22",
      finishDate: "12.02.22",
      status: "Closed",
      price: 300,
    },
    {
      title: "1-Vazifa",
      desc: "Messenger",
      staff: "Ali",
      startDate: "10.12.21",
      finishDate: "12.03.22",
      status: "Rejected",
      price: 900,
    },
  ];


  


  let workers = [];
  let salary = [];
  
  let myForm = document.forms["myForm"];
  let title = document.forms["myForm"]["title"];
  let desc = document.forms["myForm"]["desc"];
  let staff = document.forms["myForm"]["staff"];
  let startDate = document.forms["myForm"]["startDate"];
  let finishDate = document.forms["myForm"]["finishDate"];
  let status = document.forms["myForm"]["status"];
  let price = document.forms["myForm"]["price"];
  let addTaskBtn = document.querySelector(".addTask");
  let tableBody = document.querySelector(".tableBody");
  
  const countSalary = () => {
    for (let i = 0; i < tasks.length; i++) {
      if (!workers.includes(tasks[i].staff)) {
        workers.push(tasks[i].staff);
        salary.push({ name: tasks[i].staff, count: 0, price: 0 });
      }
    }
    for (let i = 0; i < salary.length; i++) {
      let counter = 0;
      let price = 0;
      for (let j = 0; j < tasks.length; j++) {
        if (salary[i].name === tasks[j].staff && tasks[j].status === "Closed") {
          counter++;
          price += +tasks[j].price;
        }
      }
      salary[i].count = counter;
      salary[i].price = price;
    }
  
    let tableBodyHtml = "";
    for (let i = 0; i < salary.length; i++) {
      tableBodyHtml += `
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${salary[i].name}</td>
          <td>${salary[i].count}</td>
          <td>${salary[i].price}$</td>
        </tr>`;
    }
    tableBody.innerHTML = tableBodyHtml;
  
    console.log(salary);
  };
  
  addTaskBtn.addEventListener("click", () => {
    let task = {
      title: title.value,
      desc: desc.value,
      staff: staff.value,
      startDate: startDate.value,
      finishDate: finishDate.value,
      status: status.value,
      price: price.value
    };
  
    console.log(task);
    tasks.push(task);
    chiz();
  });
  
  const chiz = () => {
    countSalary();
    let pending = document.querySelector(".pending");
    let doing = document.querySelector(".doing");
    let done = document.querySelector(".done");
    let closed = document.querySelector(".closed");
    let rejected = document.querySelector(".rejected");
    pending.innerHTML = "";
    doing.innerHTML = "";
    done.innerHTML = "";
    closed.innerHTML = "";
    rejected.innerHTML = "";
    tasks.forEach((task, index) => {
      if (task.status === "Pending") {
        pending.innerHTML += `<h3>${task.staff}</h3>
        <h4>${task.title}</h4>
        <h4>Price: ${task.price}$</h4>
        <p class="text-truncate">Description: ${task.desc}</p>
        <p><b>Start date: </b>${task.startDate}</p>
        <p><b>Finish date: </b>${task.finishDate}</p>
        <select name="staff" class="form-control mb-2" id="mySelect${index}">
          <option value="">Select status</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <div class="d-flex align-items-center justify-content-between">
          <button class="btn btn-warning text-white" onclick="editStatus(${index})">
            Edit status
          </button>
          <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
        </div> 
        <hr>
        `;
      } else if (task.status === "Doing") {
        doing.innerHTML += `<h3>${task.staff}</h3>
        <h4>${task.title}</h4>
        <h4>Price: ${task.price}$</h4>
        <p class="text-truncate">Description: ${task.desc}</p>
        <p><b>Start date: </b>${task.startDate}</p>
        <p><b>Finish date: </b>${task.finishDate}</p>
        <select name="staff" class="form-control mb-2" id="mySelect${index}">
          <option value="">Select status</option>
          <option value="Pending">Pending</option>
          <option value="Done">Done</option>
        </select>
        <div class="d-flex align-items-center justify-content-between">
          <button class="btn btn-warning text-white" onclick="editStatus(${index})">
            Edit status
          </button>
          <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
        </div> 
        <hr>
        `;
      } else if (task.status === "Done") {
        done.innerHTML += `<h3>${task.staff}</h3>
        <h4>${task.title}</h4>
        <h4>Price: ${task.price}$</h4>
        <p>Description: ${task.desc}</p>
        <p><b>Start date: </b>${task.startDate}</p>
        <p><b>Finish date: </b>${task.finishDate}</p>
        <select name="staff" class="form-control mb-2" id="mySelect${index}">
          <option value="">Select status</option>
          <option value="Doing">Doing</option>
          <option value="Closed">Closed</option>
        </select>
        <div class="d-flex align-items-center justify-content-between mb-2">
          <button class="btn btn-warning text-white" onclick="editStatus(${index})">
            Edit status
          </button>
          <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
        </div> 
        <button class="btn btn-secondary" onclick="rejectTask(${index})">Rejected</button>
        <hr>
        `;
      } else if (task.status === "Closed") {
        closed.innerHTML += `<h3>${task.staff}</h3>
        <h4>${task.title}</h4>
        <h4>Price: ${task.price}$</h4>
        <p>Description: ${task.desc}</p>
        <p><b>Start date: </b>${task.startDate}</p>
        <p><b>Finish date: </b>${task.finishDate}</p>
        <hr>
        `;
      } else if (task.status === "Rejected") {
        rejected.innerHTML += `<h3>${task.staff}</h3>
        <h4>${task.title}</h4>
        <h4>Price: ${task.price}$</h4>
        <p>Description: ${task.desc}</p>
        <p><b>Start date: </b>${task.startDate}</p>
        <p><b>Finish date: </b>${task.finishDate}</p>
        <hr>
        `;
      }
    });
  };
  chiz();
  
  myForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log(e);
  });
  
  const deleteTask = index => {
    tasks.splice(index, 1);
    chiz();
  };
  
  const rejectTask = index => {
    tasks[index].status = "Rejected";
    chiz();
  };
  
  const editStatus = index => {
    let mySelect = document.querySelector(`#mySelect${index}`);
    console.log(index, mySelect);
    if (mySelect.value != "") {
      tasks[index].status = mySelect.value;
    }
    chiz();
  };







  // localStorage.setItem("nums", JSON.stringify(["Asil", "Jahongir",12]))
  // console.log(JSON.parse(localStorage.getItem("nums"))[1]);