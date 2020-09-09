const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,


    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,


   firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Инна",
            "id_3": "Елена",
            "id_4": "Наталья",
            "id_5": "Вероника",
            "id_6": "Юлия",
            "id_7": "Мария",
            "id_8": "Виктория",
            "id_9": "Светлана",
            "id_10": "Надежда"
        }
    }`,

    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Никитов",
            "id_7": "Михайлов",
            "id_8": "Даниилов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,


    occupationMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "шахтер",
            "id_2": "слесарь",
            "id_3": "токарь",
            "id_4": "футболист",
            "id_5": "шахматист"
            }
    }`,

    occupationFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "актриса",
            "id_2": "певица",
            "id_3": "библиотекарь",
            "id_4": "кассирша",
            "id_5": "шахматистка"
            }
    }`,


    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
            }
    }`,

   

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },


    randomFirstName: function(mygender) {
        if (mygender == 'Женщина') {
        return this.randomValue(this.firstNameFemaleJson);
   }
else
{return this.randomValue(this.firstNameMaleJson);} ;

},


randomSurname: function(mygender) {

if (mygender == 'Женщина') {
            return this.randomValue(this.surnameJson) + 'а';
            }
else
{return this.randomValue(this.surnameJson);} ;
    
},


randomPatronymic: function(mygender) {

    if (mygender == 'Женщина') {
                return this.randomValue(this.patronymicJson) + 'на';
                }
    else
    {return this.randomValue(this.patronymicJson)+ 'ич'} ;
        
    },


randomOccupation: function(mygender) {

    if (mygender == 'Женщина') {
        return this.randomValue(this.occupationFemaleJson) ;
        }
else
{return this.randomValue(this.occupationMaleJson)} ;

},

randomGender: getGender
,


randomBirthYear: function() {
        return this.randomIntNumber(1940,1990);
   },

randomBirthDate: function() {
    return this.randomIntNumber(1,31) + ' '+ this.randomValue(this.monthJson);
},




   getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.occupation = this.randomOccupation(this.person.gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.birthDate = this.randomBirthDate();
        return this.person;
    }
};


function getGender() {
    //alert (this.randomIntNumber()  > 0 ? this.GENDER_MALE:this.GENDER_FEMALE);
    return this.randomIntNumber()  > 0 ? this.GENDER_MALE:this.GENDER_FEMALE;
  
}