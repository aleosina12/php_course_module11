
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;

    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthdateOutput').innerText = 'дата рождения: ' + initPerson.birthDate ;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear  + ' года' ;
    document.getElementById('occupationOutput').innerText = initPerson.occupation;
};

