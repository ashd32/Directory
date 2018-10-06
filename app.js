let command = '';

const print = function () {
  let htmlStr = '';
  for (let i = 0; i < employeeList.length; i++) {
    htmlStr += `<div class="entry"><p> ${employeeList[i].name}</p><p> ${employeeList[i].officeNum}</p><p> ${employeeList[i].phoneNum}</p></div>`;
  }
  render(htmlStr);
}

const add = function () {
  const userName = $('#name').val();
  const officeNum = $('#office').val();
  const phoneNum = $('#phone').val();
  employeeList.push({
    name: userName,
    officeNum: officeNum,
    phoneNum: phoneNum
  })
  print();
}

const verify = function () {
  const userName = $('#name').val();
  let htmlStr = 'no';
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === userName) {
      htmlStr = 'yes';
    }
  }
  render(htmlStr);
}

const update = function () {
  const userName = $('#name').val();
  const officeNum = $('#office').val();
  const phoneNum = $('#phone').val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === userName) {
      employeeList[i].officeNum = officeNum;
      employeeList[i].phoneNum = phoneNum;
    }
  }
  print();
}

const remove = function () {
  const userName = $('#name').val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === userName) {
      employeeList.splice(i, 1);
    }
  }
  print();
}




const runCommand = function (event) {
  console.log('add');
  event.preventDefault();
  switch (command) {
    case 'add':
      add();
      break;
    case 'verify':
      verify();
      break;
    case 'update':
      update();
      break;
    case 'delete':
      remove();
      break;
  }
}

const setView = function () {
  // $('#list').empty();
  command = '';
  $('form').hide();
  print();
}

const setAdd = function () {
  $('#list').empty();
  command = 'add';
  $('form').show();
  $('.additional-data').show();
}

const setVerify = function () {
  $('#list').empty();
  command = 'verify';
  $('form').show();
  $('.additional-data').hide();
}

const setUpdate = function () {
  $('#list').empty();
  command = 'update';
  $('form').show();
  $('.additional-data').show();
}

const setDelete = function () {
  $('#list').empty();
  command = 'delete';
  $('form').show();
  $('.additional-data').hide();
}




const render = function (htmlStr) {
  $('#list').html(htmlStr);
}

$('#view').on('click', setView);

$('#add').on('click', setAdd);
$('#verify').on('click', setVerify);
$('#update').on('click', setUpdate);
$('#delete').on('click', setDelete);

$('#submit').on('click', runCommand);

$('form').hide();

