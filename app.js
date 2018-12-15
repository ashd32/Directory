// Initial value of command variable set to empty string.
let command = '';
// Function to render directoryList on page.
const print = function () {
  let htmlStr = '';
  for (let i = 0; i < directoryList.length; i++) {
    htmlStr += `<div class="entry"><p> ${directoryList[i].name}</p><p> ${directoryList[i].emailAddress}</p><p> ${directoryList[i].phoneNum}</p></div>`;
  }
  render(htmlStr);
}
// Function to capture user's input on add and append to directoryList array.
const add = function () {
  const userName = $('#name').val();
  const emailAddress = $('#email').val();
  const phoneNum = $('#phone').val();
  directoryList.push({
    name: userName,
    emailAddress: emailAddress,
    phoneNum: phoneNum
  })
  print();
}
// Search function
const verify = function () {
  const userName = $('#name').val();
  let htmlStr = 'no';
  for (let i = 0; i < directoryList.length; i++) {
    if (directoryList[i].name === userName) {
      htmlStr = 'yes';
    }
  }
  render(htmlStr);
}
// Function to capture user's input on update.
const update = function () {
  // .val() converts input into a string
  const userName = $('#name').val();
  const emailAddress = $('#email').val();
  const phoneNum = $('#phone').val();
  for (let i = 0; i < directoryList.length; i++) {
    if (directoryList[i].name === userName) {
      directoryList[i].emailAddress = emailAddress;
      directoryList[i].phoneNum = phoneNum;
    }
  }
  print();
}
// Remove function
const remove = function () {
  const userName = $('#name').val();
  for (let i = 0; i < directoryList.length; i++) {
    if (directoryList[i].name === userName) {
      directoryList.splice(i, 1);
    }
  }
  print();
}



// Prevents page from refreshing on click, retains data while page is open.
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
// Toggles view.
const setView = function () {
  $('#list').empty();
  command = '';
  $('form').hide();
  print();
}
// Toggles view.
const setAdd = function () {
  $('#list').empty();
  command = 'add';
  $('form').show();
  $('.extra-inputs').show();
}
// Toggles view.
const setVerify = function () {
  $('#list').empty();
  command = 'verify';
  $('form').show();
  $('.extra-inputs').hide();
}
// Toggles view.
const setUpdate = function () {
  $('#list').empty();
  command = 'update';
  $('form').show();
  $('.extra-inputs').show();
}
// Toggles view.
const setDelete = function () {
  $('#list').empty();
  command = 'delete';
  $('form').show();
  $('.extra-inputs').hide();
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