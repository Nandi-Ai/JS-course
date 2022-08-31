let role = 'admin';
console.log('case switch check:')
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;
    case 'admin':
        console.log('Admin User');
        break;
    default:
        console.log('Unknown user');
}

console.log('If Statement:')
if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else if (role === 'admin') console.log('Admin user');
else console.log('Unknown user');