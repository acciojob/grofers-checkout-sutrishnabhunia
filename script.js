 function calculateTotalPrice() {
      const priceElements = document.querySelectorAll('.price');
      let total = 0;

      priceElements.forEach(priceElement => {
        total += parseFloat(priceElement.textContent);
      });

      return total.toFixed(2);
    }

    function updateTotalRow() {
      const totalRow = document.querySelector('#grocery-table tfoot');
      if (totalRow) {
        totalRow.remove();
      }

      const table = document.getElementById('grocery-table');
      const newRow = table.createTFoot().insertRow();
      const totalCell = newRow.insertCell();
      totalCell.setAttribute('colspan', '2');
      totalCell.textContent = `Total Price: $${calculateTotalPrice()}`;
    }

    // Call the updateTotalRow function initially and whenever prices change
    updateTotalRow();
