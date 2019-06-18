function personalBMI(name, age, weight, height){
    let person = {};

    person.name = name;

    person.personalInfo = {};
    person.personalInfo.age = age;
    person.personalInfo.height = height;
    person.personalInfo.weight = weight;

    person.BMI=Math.round((function(){
        return weight/Math.pow(height/100,2);
    })());

    person.status = (()=>{
        if(person.BMI<18.5){
            return 'underweight';
        }else if(person.BMI>=18.5&& person.BMI<25){
            return 'normal';
        }else if(person.BMI>=25&& person.BMI<30){
            return 'overweight';
        }else if(person.BMI>=30){
            return 'obese';
        }
    })();

    if(person.status === 'obese'){
        person.recommendation = 'admission required';
    }

    return person;
}

console.log(personalBMI('Honey Boo Boo', 9, 57, 137));