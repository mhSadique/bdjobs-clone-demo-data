// You will be provided an object of strings like below. 
// You have to provide 3 api’s against it - one to store a job seeker’s data, one to fetch a job seeker’s data by the id created by MongoDB and another one to fetch a job seeker’s data by email.
 
 const jobSeeker = {
    userType: 'string',
    email: 'string',
    password: 'string',
    phone: 'string',
    firstName: 'string',
    lastName: 'string',
    fathersName: 'string',
    mothersName: 'string',
    dateOfbirth: 'string', //keep it as string type, not date
    gender: 'string',
    religion: 'string',
    maritalStatus: 'string',
    passportNumber: 'string',
    nationalId: 'string',
    bloodGroup: 'string',
    skillType: 'string',
 };

// You will be provided an object of strings like below. 
// You have to provide 3 api’s against it- one to store an employer’s data, one to fetch an employer’s data by the id created by MongoDB and another one to fetch an employer’s data by email.

 const employer = 
  {
    userType: 'string',
    email: 'string',
    password: 'string',
    companyName: 'string',
    companyDescription: 'string',
    companySize: 'string',
    companyType: 'string',
    companyAddress: 'string',
    tradeLiscenseNo: 'string',
    contactPersonsName: 'string',
    contactPersonsEmail: 'string',
    contactPersonsPhone: 'string',
  };

// You will be provided an object of mixed data types like below. 
// You have to provide 3 api’s against it - one to store a job’s data, one to fetch a job’s data by the id created by MongoDB and another one to fetch all jobs in our database by jobCategory (2nd property of the object below) 

 
 const job = {
    jobTitle: 'string',
    jobCategory: 'string',
    jobVacancy: 'string',
    jobResponsibilities: ['an', 'array', 'of', 'strings'],
    jobKeySellingPoints: ['an', 'array', 'of', 'strings'],
    employmentStatus: 'string',
    employmentType: 'string',
    educationalRequirements: ['an', 'array', 'of', 'strings'],
    experienceRequirements: ['an', 'array', 'of', 'strings'],
    jobLocation: 'string',
    Salary: 'string',
    applicantGender: 'string',
    applicantAge: 'string',
    publishedOn: 'string', //not date
    applicationDeadline: 'string', //not date
 };
