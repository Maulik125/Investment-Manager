// public/dashboard.js
window.onload = async function () {
    const res = await fetch('/api/dashboard', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}` // Optional JWT token
      }
    });
    const data = await res.json();
  
    document.getElementById('total').textContent = data.total;
    document.getElementById('fd-total').textContent = data.fixedDeposits;
    document.getElementById('property-total').textContent = data.properties;
    document.getElementById('stock-total').textContent = data.stocks;
  
    const ctx = document.getElementById('investmentChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Fixed Deposits', 'Properties', 'Stocks'],
        datasets: [{
          label: 'Investment Split',
          data: [data.fixedDeposits, data.properties, data.stocks],
          backgroundColor: ['#3498db', '#2ecc71', '#e74c3c']
        }]
      }
    });
  };
  