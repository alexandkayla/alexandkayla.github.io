function sendMail() {
  const subject = encodeURIComponent(
    document.getElementById("mail-subject").value
  );

  const body = encodeURIComponent(
    document.getElementById("mail-body").value
  );

  window.location.href =
    `mailto:alexandkayla.totos@gmail.com?subject=${subject}&body=${body}`;
}