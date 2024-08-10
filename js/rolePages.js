document.addEventListener('DOMContentLoaded', function () {
    const role = localStorage.getItem('role');

    if (role) {
        switch (role) {
            case 'retailCoordinator':
                window.location.href = 'retailCoordinator.html';
                break;
            case 'hr':
                window.location.href = 'hr.html';
                break;
            case 'regionalManager':
                window.location.href = 'regionalManager.html';
                break;
            case 'retailAnalytics':
                window.location.href = 'retailAnalytics.html';
                break;
            case 'supervisor':
                window.location.href = 'supervisor.html';
                break;
            case 'promoter':
                window.location.href = 'promoter.html';
                break;
            default:
                console.error('Unknown role');
        }
    } else {
        console.error('No role found');
    }
});
