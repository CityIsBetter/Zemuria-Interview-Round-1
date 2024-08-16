function showToast(title, msg, type) {
    const toastContainer = document.getElementById("toastContainer");
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const toastTitle = document.createElement('div');
    toastTitle.className = `title`;
    toastTitle.textContent = title;

    const toastMsg = document.createElement('div');
    toastMsg.className = `message`;
    toastMsg.textContent = msg;

    toast.appendChild(toastTitle);
    toast.appendChild(toastMsg);
    toastContainer.appendChild(toast);

    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        
        setTimeout(() => toastContainer.removeChild(toast), 500);
    }, 3000)
}