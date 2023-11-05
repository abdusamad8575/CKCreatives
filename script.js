const clicked = (value) => {
    document.getElementById('about').style.color = 'white'
    document.getElementById('servic').style.color = 'white'
    document.getElementById('home').style.color = 'white'
    document.getElementById('work').style.color = 'white'
    document.getElementById('client').style.color = 'white'
    document.getElementById('contact').style.color = 'white'

    document.getElementById('home').style.borderBottom = 'none';
    document.getElementById('about').style.borderBottom = 'none';
    document.getElementById('servic').style.borderBottom = 'none';
    document.getElementById('work').style.borderBottom = 'none';
    document.getElementById('client').style.borderBottom = 'none';
    document.getElementById('contact').style.borderBottom = 'none';


    switch (value) {
        case 1:
            document.getElementById('home').style.color = '#6da63f';
            document.getElementById('home').style.borderBottom = '2px solid #6da63f';
            break;
        case 2:
            document.getElementById('about').style.color = '#6da63f';
            document.getElementById('about').style.borderBottom = '2px solid #6da63f';
            break;
        case 3:
            document.getElementById('servic').style.color = '#6da63f';
            document.getElementById('servic').style.borderBottom = '2px solid #6da63f';
            break;
        case 4:
            document.getElementById('work').style.color = '#6da63f';
            document.getElementById('work').style.borderBottom = '2px solid #6da63f';
            break;
        case 5:
            document.getElementById('client').style.color = '#6da63f';
            document.getElementById('client').style.borderBottom = '2px solid #6da63f';
            break;
        default:
            document.getElementById('contact').style.color = '#6da63f';
            document.getElementById('contact').style.borderBottom = '2px solid #6da63f';
            break;
    }
}