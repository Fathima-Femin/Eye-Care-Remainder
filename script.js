function showNotification() {
  if (Notification.permission === "granted") {
    new Notification("👁️ Eye Care Reminder", {
      body: "Time to blink and rest your eyes for 20 seconds!",
      icon: "icon.png"
    });
  }
}

function startReminder() {
  if (Notification.permission === "default") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        alert("✅ Reminder started!");
        setInterval(showNotification, 20 * 60 * 1000);
      } else {
        alert("❌ Notification permission denied!");
      }
    });
  } else if (Notification.permission === "granted") {
    alert("✅ Reminder started!");
    setInterval(showNotification, 20 * 60 * 1000);
  } else {
    alert("❌ Notification permission denied!");
  }
}
