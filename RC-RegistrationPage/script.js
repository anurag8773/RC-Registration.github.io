const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const studentNo = document.getElementById('studentNo');
const RollNo = document.getElementById('RollNo');
const phoneNumber = document.getElementById('phoneNumber');
const project = document.getElementById('project');
const society = document.getElementById('society');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const studentNoValue = studentNo.value.trim();
    const RollNoValue = RollNo.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const projectValue = project.value.trim();
    const societyValue = society.value.trim();

    if (fullnameValue === '') {
        setError(fullname, 'Full Name is required');
    } else {
        setSuccess(fullname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (studentNoValue === '') {
        setError(studentNo, 'studentNo is required');
    } else if (studentNo.length <= 8) {
        setError(studentNo, 'studentNo must be at least 8 character.')
    } else {
        setSuccess(studentNo);
    }

    if (RollNoValue === '') {
        setError(RollNo, 'studentNo is required');

    } else if (RollNo.length <= 13) {
        setError(RollNo, 'Roll No must be at least 13 character.')
    }
    else {
        setSuccess(RollNo);
    }

    if (phoneNumberValue === "") {
        setError(phoneNumber, 'phone number cannot be blank');
    } else if (phoneNumberValue.length != 10) {
        setError(phoneNumber, 'Enter valid number');
    } else {
        setSuccess(phoneNumber);
    }
    if (projectValue === '') {
        setError(project, 'Project Name is required');
    } else {
        setSuccess(project);
    }
    if (societyValue === '') {
        setError(society, 'Society Name is required');
    } else {
        setSuccess(society);
    }
};