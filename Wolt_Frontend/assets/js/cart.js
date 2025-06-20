"use strict"

function increment() {
  const input = document.getElementById('counter');
  input.value = parseInt(input.value) + 1;
}

function decrement() {
  const input = document.getElementById('counter');
  if (parseInt(input.value) > 0) {
    input.value = parseInt(input.value) - 1;
  }
}

function handleManualChange() {
  const input = document.getElementById('counter');
  if (parseInt(input.value) < 0 || isNaN(input.value)) {
    input.value = 0;
  }
}

function removeRow(button) {
  const row = button.closest("tr");
  row.remove();
}
