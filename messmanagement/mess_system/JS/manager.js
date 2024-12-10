// Navigation functionality
function navigate(section) {
    alert(`Navigate to ${section}`);
  }
  
  // Delete user functionality
  const deleteForm = document.getElementById('delete-user-form');
  deleteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('User deleted successfully!');
  });
  
  // Dynamically populate payment history
  const paymentHistory = [
    { username: 'user1', amount: 5000, paymentDate: '2023-04-28', dueDate: '2023-04-29' },
    { username: 'ne', amount: 2000, paymentDate: '2023-01-28', dueDate: '2023-02-28' },
  ];
  
  const tableBody = document.querySelector('table tbody');
  paymentHistory.forEach(payment => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${payment.username}</td>
      <td>${payment.amount}</td>
      <td>${payment.paymentDate}</td>
      <td>${payment.dueDate}</td>
    `;
    tableBody.appendChild(row);
  });
  