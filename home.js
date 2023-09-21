const impact_section = document.querySelector('#impact');
var number_of_students = 0;
var number_of_workshops= 0;
var number_of_alumni = 0; 
const student_loop = function (){
    setTimeout(function(){
        document.getElementById('students_number').innerHTML = "+" + number_of_students;
        number_of_students = number_of_students + 100 ;
        if (number_of_students<=10000){
            student_loop();
        }

    }, 2);
}
const workshop_loop = function (){
    setTimeout(function(){
        document.getElementById('workshops_number').innerHTML = "+" + number_of_workshops;
        number_of_workshops = number_of_workshops+3;
        if (number_of_workshops<=300){
            workshop_loop();
        }

    }, 2);
}
const alumni_loop = function (){
    setTimeout(function(){
        document.getElementById('alumni_number').innerHTML = "+" + number_of_alumni;
        number_of_alumni = number_of_alumni + 10 ;
        if (number_of_alumni<=1000){
            alumni_loop();
        }

    }, 2);
}
const options = {
    threshold: 0.5
};
const observer = new IntersectionObserver (function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if (number_of_students<=10000){
                student_loop();
            }
            if (number_of_alumni<=1000){
                alumni_loop();
            }
            if (number_of_workshops<=300){
                workshop_loop();
            }

    }})
},options);

observer.observe(impact_section);

var robotics_des = document.getElementById('robotics_description');
var electronics_des = document.getElementById('electronics_description');
var chemistry_des = document.getElementById('chemistry_description');
var programming_des = document.getElementById('programming_description');

var robotics_clicked = false;
var electronics_clicked = false;
var chemistry_clicked = false;
var programming_clicked = false;

const robotics_description = function () { 
    if (!robotics_clicked){
        robotics_des.classList.add('appear');
        robotics_clicked = true;
    } 
    else {
        robotics_des.classList.remove('appear');
        robotics_clicked = false;
    }
}

const electronics_description = function () { 
    if (!electronics_clicked){
        electronics_des.classList.add('appear');
        electronics_clicked = true;
    } 
    else {
        electronics_des.classList.remove('appear');
        electronics_clicked = false;
    }
}

const chemistry_description = function () { 
    if (!chemistry_clicked){
        chemistry_des.classList.add('appear');
        chemistry_clicked = true;
    } 
    else {
        chemistry_des.classList.remove('appear');
        chemistry_clicked = false;
    }
}

const programming_description = function () { 
    if (!programming_clicked){
        programming_des.classList.add('appear');
        programming_clicked = true;
    } 
    else {
        programming_des.classList.remove('appear');
        programming_clicked = false;
    }
}

const slider = document.querySelector('.slider');
const slides = Array.from(slider.children);
const prevButton = document.querySelector('.right_arrow');
const nextButton = document.querySelector('.left_arrow');
const slide_width = 33;
var counter = {
    i : 1,
    j : 0,
};

slides.forEach((slide, index)  => {
    slide.style.left = slide_width*index + 'rem';
}) 

const next = function () {
    if (counter.i<4){
        slides.forEach((slide, index)  => {
            slide.style.left = slide_width*index - counter.i*slide_width + 'rem';
        })
        if (counter.i>=2){
            counter.i =counter.i+1;
            counter.j =counter.j+1;
        }else{
            counter.i =counter.i+1;
        }
    }
    console.log(counter.i);
    console.log(counter.j);

}

const prev = function () {

    if ((counter.j>=0)&&(counter.j <3)&&(counter.i>1)){
        slides.forEach((slide, index)  => {
        slide.style.left = slide_width*index - counter.j*slide_width  +'rem';
        }) 
        if ((counter.j ==0)&&(counter.i>1)){
            counter.i=counter.i-1;
        }else{
            counter.i=counter.i-1;
            counter.j=counter.j-1;
        }
    }
    console.log(counter.i);
    console.log(counter.j);
}


   
