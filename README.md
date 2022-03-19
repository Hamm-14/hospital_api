# hospital_api
Designed the server side of a hospital(Only API's), Nodejs and MongoDB have been used as a tech-stack.

# Theme
- Designed API's for the doctors of a Hospital which has been allocated by the govt for testing and quarantine
  plus well being of COVID-19 patients.

- There can be 2 types of Users:
  1) Doctors
  2) Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
  1) Register the patient in the app(using phone number, if the patient already exists, just return the patient info in the API)
  2) After the checkup, create a Report
- Patient report will have the following fields 
      - Created by Doctor
      - Status (Negative, Travelled-Quarantine, Symptoms-Quarantine or Positive-Admit) 

- Routes
   - /doctors/register -> with email and password
   - /doctors/login -> returns the JWT to be used
   - /patients/register
   - /patients/:id/create_report
   - /patients/:id/all_reports -> list th reports of a patient oldest to latest
   - /reports/:status -> list all the reports of all the patients filtered by a specifuc status

# Setup On Local Machine
Simply pull the repository, install all the dependencies required and run the index.js file with the command 'node index.js', the server will be up and running on PORT:8000

# DEPLOYEMENT
Project already deployed on Heroku(For better exp: use Postman for accesing above Routes)

Do Visit: https://hospital-api-hamm.herokuapp.com/api/doctors/register


