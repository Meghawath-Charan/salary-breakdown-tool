const btn = document.getElementById("calcBtn");

btn.addEventListener("click", () => {
  const ctc = Number(document.getElementById("ctc").value);
  const bonus = Number(document.getElementById("bonus").value) || 0;

  const total = ctc + bonus;

  // basic calculation (temporary)
  const tax = total * 0.1;
  const pf = total * 0.05;

  const yearly = total - tax - pf;
  const monthly = yearly / 12;

  document.getElementById("monthly").innerText = "₹" + Math.round(monthly);
  document.getElementById("yearly").innerText = "₹" + Math.round(yearly);
  document.getElementById("tax").innerText = "₹" + Math.round(tax);
  document.getElementById("deduction").innerText = "₹" + Math.round(tax+pf);

  document.getElementById("chartBox").innerHTML =
  `<h2>In-hand: ₹${Math.round(yearly)}</h2>`;
});

const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", () => {

  // fill invoice values
  document.getElementById("iName").innerText =
    document.getElementById("empName").value;

  document.getElementById("iCompany").innerText =
    document.getElementById("company").value;

  document.getElementById("iCtc").innerText =
    document.getElementById("ctc").value;

  document.getElementById("iTax").innerText =
    document.getElementById("tax").innerText.replace("₹","");

  document.getElementById("iDed").innerText =
    document.getElementById("deduction").innerText.replace("₹","");

  document.getElementById("iMonthly").innerText =
    document.getElementById("monthly").innerText.replace("₹","");

  const invoice = document.getElementById("invoice");
  invoice.style.display="block";

  const printWindow = window.open("", "", "width=900,height=700");
  printWindow.document.write(invoice.outerHTML);
  printWindow.document.close();
  printWindow.print();

  invoice.style.display="none";
});