if (user === 'admin' && pass === 'Manvid.p') {
    sessionStorage.setItem('manvid_admin_auth', 'true');
    closeModals();
    renderTracks();
    document.getElementById('uploadModal').style.display = 'flex';
}
